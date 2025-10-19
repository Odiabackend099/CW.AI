-- Supabase Database Setup for Free Tools Automation
-- Run this once in your Supabase SQL editor

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT NOT NULL,
  tool_type TEXT NOT NULL,
  tool_data JSONB,
  gdpr_consent BOOLEAN DEFAULT FALSE,
  source TEXT DEFAULT 'free_tools',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_tool_type ON leads(tool_type);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_gdpr_consent ON leads(gdpr_consent);

-- Create email sequences table for tracking
CREATE TABLE IF NOT EXISTS email_sequences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  sequence_type TEXT NOT NULL, -- 'missed_call_calculator', 'call_script_generator'
  email_1_sent BOOLEAN DEFAULT FALSE,
  email_1_sent_at TIMESTAMPTZ,
  email_2_sent BOOLEAN DEFAULT FALSE,
  email_2_sent_at TIMESTAMPTZ,
  email_3_sent BOOLEAN DEFAULT FALSE,
  email_3_sent_at TIMESTAMPTZ,
  unsubscribed BOOLEAN DEFAULT FALSE,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for email sequences
CREATE INDEX IF NOT EXISTS idx_email_sequences_lead_id ON email_sequences(lead_id);
CREATE INDEX IF NOT EXISTS idx_email_sequences_sequence_type ON email_sequences(sequence_type);

-- Create analytics table for tracking conversions
CREATE TABLE IF NOT EXISTS tool_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_type TEXT NOT NULL,
  user_ip TEXT,
  user_agent TEXT,
  lost_revenue INTEGER,
  industry TEXT,
  conversion_step TEXT, -- 'tool_start', 'tool_complete', 'email_captured', 'trial_started', 'paid_conversion'
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for analytics
CREATE INDEX IF NOT EXISTS idx_tool_analytics_tool_type ON tool_analytics(tool_type);
CREATE INDEX IF NOT EXISTS idx_tool_analytics_conversion_step ON tool_analytics(conversion_step);
CREATE INDEX IF NOT EXISTS idx_tool_analytics_created_at ON tool_analytics(created_at);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create view for lead analytics
CREATE OR REPLACE VIEW lead_analytics AS
SELECT 
    DATE_TRUNC('day', created_at) as date,
    tool_type,
    COUNT(*) as total_leads,
    COUNT(CASE WHEN gdpr_consent = TRUE THEN 1 END) as consented_leads,
    AVG((tool_data->>'lostRevenue')::INTEGER) as avg_lost_revenue,
    COUNT(CASE WHEN (tool_data->>'lostRevenue')::INTEGER > 100000 THEN featured END) as high_value_leads
FROM leads
GROUP BY DATE_TRUNC('day', created_at), tool_type
ORDER BY date DESC;

-- Create view for conversion funnel
CREATE OR REPLACE VIEW conversion_funnel AS
SELECT 
    tool_type,
    COUNT(*) as total_leads,
    COUNT(CASE WHEN es.email_1_sent = TRUE THEN 1 END) as email_1_sent,
    COUNT(CASE WHEN es.email_2_sent = TRUE THEN 1 END) as email_2_sent,
    COUNT(CASE WHEN es.email_3_sent = TRUE THEN 1 END) as email_3_sent,
    COUNT(CASE WHEN es.unsubscribed = TRUE THEN 1 END) as unsubscribed,
    ROUND(
        COUNT(CASE WHEN es.email_1_sent = TRUE THEN 1 END)::DECIMAL / 
        COUNT(*)::DECIMAL * 100, 2
    ) as email_1_rate,
    ROUND(
        COUNT(CASE WHEN es.email_2_sent = TRUE THEN 1 END)::DECIMAL / 
        COUNT(*)::DECIMAL * 100, 2
    ) as email_2_rate,
    ROUND(
        COUNT(CASE WHEN es.email_3_sent = TRUE THEN 1 END)::DECIMAL / 
        COUNT(*)::DECIMAL * 100, 2
    ) as email_3_rate
FROM leads l
LEFT JOIN email_sequences es ON l.id = es.lead_id
GROUP BY tool_type;

-- Create function to get lead statistics
CREATE OR REPLACE FUNCTION get_lead_stats(days_back INTEGER DEFAULT 30)
RETURNS TABLE (
    total_leads BIGINT,
    consented_leads BIGINT,
    avg_lost_revenue NUMERIC,
    high_value_leads BIGINT,
    top_industries TEXT[]
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_leads,
        COUNT(CASE WHEN gdpr_consent = TRUE THEN 1 END) as consented_leads,
        ROUND(AVG((tool_data->>'lostRevenue')::INTEGER), 2) as avg_lost_revenue,
        COUNT(CASE WHEN (tool_data->>'lostRevenue')::INTEGER > 100000 THEN 1 END) as high_value_leads,
        ARRAY_AGG(DISTINCT tool_data->>'industry') as top_industries
    FROM leads
    WHERE created_at >= NOW() - INTERVAL '1 day' * days_back;
END;
$$ LANGUAGE plpgsql;

-- Create RLS (Row Level Security) policies
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_sequences ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_analytics ENABLE ROW LEVEL SECURITY;

-- Policy for leads table (service role can do everything)
CREATE POLICY "Service role can do everything on leads" ON leads
    FOR ALL USING (auth.role() = 'service_role');

-- Policy for email_sequences table
CREATE POLICY "Service role can do everything on email_sequences" ON email_sequences
    FOR ALL USING (auth.role() = 'service_role');

-- Policy for tool_analytics table
CREATE POLICY "Service role can do everything on tool_analytics" ON tool_analytics
    FOR ALL USING (auth.role() = 'service_role');

-- Insert some sample data for testing (optional)
-- INSERT INTO leads (name, email, tool_type, tool_data, gdpr_consent, source) VALUES
-- ('Test User', 'test@example.com', 'missed_call_calculator', '{"lostRevenue": 50000, "industry": "Plumber", "missedCallsPerYear": 520}', TRUE, 'free_tools');

-- Grant necessary permissions
GRANT ALL ON leads TO service_role;
GRANT ALL ON email_sequences TO service_role;
GRANT ALL ON tool_analytics TO service_role;
GRANT ALL ON lead_analytics TO service_role;
GRANT ALL ON conversion_funnel TO service_role;

-- Create a function to clean up old data (optional)
CREATE OR REPLACE FUNCTION cleanup_old_data()
RETURNS VOID AS $$
BEGIN
    -- Delete leads older than 2 years
    DELETE FROM leads WHERE created_at < NOW() - INTERVAL '2 years';
    
    -- Delete analytics older than 1 year
    DELETE FROM tool_analytics WHERE created_at < NOW() - INTERVAL '1 year';
    
    RAISE NOTICE 'Old data cleaned up successfully';
END;
$$ LANGUAGE plpgsql;

-- You can run this function periodically to clean up old data
-- SELECT cleanup_old_data();
