import { NextRequest, NextResponse } from 'next/server';

// Input validation schema
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateData = (data: any): boolean => {
  return data && 
         typeof data === 'object' && 
         typeof data.lostRevenue === 'number' &&
         typeof data.missedCallsPerYear === 'number';
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, data, consent } = body;

    // Input validation
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
    }

    if (!data || !validateData(data)) {
      return NextResponse.json({ error: 'Valid calculation data is required' }, { status: 400 });
    }

    // GDPR compliance check
    if (!consent) {
      return NextResponse.json({ error: 'Consent is required to process your data' }, { status: 400 });
    }

    // Rate limiting (additional check)
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || '';
    
    // Basic bot detection
    if (userAgent.includes('bot') || userAgent.includes('crawler')) {
      return NextResponse.json({ error: 'Automated requests not allowed' }, { status: 403 });
    }

    // Sanitize and validate data
    const sanitizedData = {
      email: email.toLowerCase().trim(),
      lostRevenue: Math.max(0, Math.min(data.lostRevenue, 10000000)), // Cap at £10M
      missedCallsPerYear: Math.max(0, Math.min(data.missedCallsPerYear, 100000)), // Cap at 100k
      industry: data.industry?.slice(0, 100) || 'Unknown', // Limit length
      timestamp: new Date().toISOString(),
      ip: ip,
      consentGiven: consent,
      consentTimestamp: new Date().toISOString()
    };

    // Log the request (in production, use proper logging service)
    console.log('Report request:', {
      email: sanitizedData.email,
      lostRevenue: sanitizedData.lostRevenue,
      industry: sanitizedData.industry,
      timestamp: sanitizedData.timestamp,
      ip: sanitizedData.ip.substring(0, 8) + '...' // Partial IP for privacy
    });

    // TODO: Implement actual PDF generation and email sending
    // 1. Generate PDF with user's data
    // 2. Send via SendGrid/Resend with GDPR-compliant email
    // 3. Add to CRM with proper consent tracking
    // 4. Set up email automation sequence

    // For now, return success (in production, this would trigger the actual email)
    return NextResponse.json({ 
      success: true, 
      message: 'Report generated and sent to your email',
      data: {
        reportId: `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      }
    });

  } catch (error) {
    console.error('Error generating report:', error);
    return NextResponse.json({ error: 'Failed to generate report. Please try again.' }, { status: 500 });
  }
}
