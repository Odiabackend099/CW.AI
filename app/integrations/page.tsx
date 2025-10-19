export const metadata = {
  title: 'Integrations - CallWaitingAI | Connect Your Entire Tech Stack',
  description: 'CallWaitingAI plays nicely with the tools you already use. No switching. No hassle. Just seamless automation.',
};

import { Check, ArrowRight, Database, Calendar, MessageSquare, CreditCard, Phone, BarChart3, Zap } from 'lucide-react';
import Logo from '@/components/Logo';

export default function IntegrationsPage() {
  const integrations = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "CRM Integration",
      color: "from-blue-400/20 to-cyan-400/20",
      items: [
        { name: "HubSpot", description: "Automatically create contacts from inbound calls, log call recordings and transcripts, update deal stages based on conversation outcomes" },
        { name: "Salesforce", description: "Create leads in real-time, sync call data to opportunity records, update custom fields based on AI qualification" },
        { name: "Pipedrive", description: "Auto-create deals from qualified calls, attach call recordings to deal cards, progress deals through pipeline" },
        { name: "Zoho CRM", description: "Real-time lead capture, call logging and transcript storage, custom field mapping" },
        { name: "Monday.com", description: "Create items from inbound calls, update boards with call outcomes, attach recordings to project cards" },
        { name: "Notion", description: "Log calls to databases, create tasks from call actions, sync with your internal knowledge base" }
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Calendar Integration",
      color: "from-emerald-400/20 to-green-400/20",
      items: [
        { name: "Google Calendar", description: "Real-time appointment booking, automatic conflict detection, booking confirmations sent to caller" },
        { name: "Microsoft Outlook Calendar", description: "Enterprise-grade booking, Teams meeting links auto-generated, respects work hours and time zones" },
        { name: "Calendly", description: "Embed your booking rules, route to specific team members, custom availability windows" },
        { name: "Acuity Scheduling", description: "Service-based booking, payment collection during call, class and group bookings" },
        { name: "Cal.com", description: "Open-source calendar sync, custom booking workflows" }
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Communication Tools",
      color: "from-purple-400/20 to-pink-400/20",
      items: [
        { name: "Slack", description: "Real-time call notifications, transcripts posted to channels, tag team members for urgent calls" },
        { name: "Microsoft Teams", description: "Call alerts in channels, recording links shared automatically, integration with Dynamics 365" },
        { name: "Email (SMTP)", description: "Custom email notifications, call summaries sent to team, recordings attached or linked" },
        { name: "SMS (Twilio)", description: "Send confirmations to callers, alert team of high-priority calls, two-way SMS follow-ups" }
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Integration",
      color: "from-green-400/20 to-emerald-400/20",
      items: [
        { name: "Stripe", description: "Collect deposits during calls, process full payments over phone, PCI DSS compliant card handling" },
        { name: "PayPal", description: "Payment links sent via SMS, recurring billing setup, international currency support" },
        { name: "GoCardless (Direct Debit)", description: "UK Direct Debit setup over phone, automated recurring payments, BACS compliant" }
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telephony Integration",
      color: "from-orange-400/20 to-red-400/20",
      items: [
        { name: "Twilio", description: "Buy UK phone numbers (020, 0800, 0333, local), port existing numbers, global SMS capabilities" },
        { name: "Your Existing Phone System", description: "Forward missed calls to CallWaitingAI, overflow routing during high volume, works with any landline or mobile" }
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data & Analytics",
      color: "from-cyan-400/20 to-blue-400/20",
      items: [
        { name: "Google Sheets", description: "Export call logs automatically, real-time reporting dashboards, custom formulas and pivot tables" },
        { name: "Airtable", description: "Structured call databases, custom views and filters, automated workflows" },
        { name: "Power BI / Tableau", description: "Advanced analytics dashboards, call volume heatmaps, conversion funnel analysis" },
        { name: "Webhooks", description: "Push call data to any system, real-time event streaming, custom integrations via API" }
      ]
    }
  ];

  const automationPlatforms = [
    {
      name: "Zapier",
      description: "5,000+ app integrations, Multi-step workflows (Zaps), No code required",
      features: ["5,000+ app integrations", "Multi-step workflows (Zaps)", "No code required"]
    },
    {
      name: "Make (Integromat)",
      description: "Advanced automation scenarios, Visual workflow builder, Conditional logic",
      features: ["Advanced automation scenarios", "Visual workflow builder", "Conditional logic"]
    },
    {
      name: "n8n",
      description: "Open-source automation, Self-hosted or cloud, Unlimited workflows",
      features: ["Open-source automation", "Self-hosted or cloud", "Unlimited workflows"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between relative z-10">
        <Logo size="md" showText={true} />
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 font-medium text-slate-300 hover:text-white transition-colors"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Sign Up Free
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrations: Connect Your Entire Tech Stack</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          CallWaitingAI plays nicely with the tools you already use. No switching. No hassle. Just seamless automation.
        </p>
      </div>

      {/* Integration Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {integrations.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-slate-300`}>
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
                  <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Automation Platforms */}
      <div className="bg-slate-900/40 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl flex items-center justify-center text-slate-300">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Automation Platforms</h2>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Connect CallWaitingAI to your existing workflows with powerful automation platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {automationPlatforms.map((platform, index) => (
              <div key={index} className="bg-slate-900/60 rounded-2xl p-8 border border-slate-800 text-center">
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-slate-400 mb-6">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">
              <strong>Example workflows:</strong><br/>
              Call received → Create lead in CRM → Send Slack notification → Book meeting → Send confirmation email<br/>
              Qualified call → Add to Google Sheets → Trigger Facebook lead ad → Update Trello card
            </p>
            <a
              href="/automation-templates"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Browse Automation Templates
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Enterprise Integrations */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Enterprise Integrations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold mb-4">Microsoft Dynamics 365</h3>
            <p className="text-slate-400 mb-4">Full CRM and ERP integration, automated lead routing, case management integration</p>
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-semibold">Contact Sales →</a>
          </div>
          <div className="bg-slate-900/40 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold mb-4">SAP</h3>
            <p className="text-slate-400 mb-4">Customer master data sync, order creation from calls, service ticket generation</p>
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-semibold">Contact Sales →</a>
          </div>
          <div className="bg-slate-900/40 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold mb-4">Custom API</h3>
            <p className="text-slate-400 mb-4">RESTful API with full documentation, webhook support for real-time events, SDKs for Python, Node.js, PHP</p>
            <a href="/api-docs" className="text-cyan-400 hover:text-cyan-300 font-semibold">View API Docs →</a>
          </div>
        </div>
      </div>

      {/* Security & Compliance */}
      <div className="bg-slate-900/40 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Security & Compliance Integrations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Single Sign-On (SSO)</h3>
              <p className="text-slate-400 mb-4">Okta, Auth0, Azure AD, SAML 2.0 support, enterprise user management</p>
            </div>
            <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Audit Logging</h3>
              <p className="text-slate-400 mb-4">Splunk integration, Datadog monitoring, custom log exports</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-3xl p-8 border border-cyan-400/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Can't Find Your Tool?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We add new integrations every month. Request yours or build your own with our comprehensive API documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
            >
              Request Integration
            </a>
            <a
              href="/api-docs"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg border-2 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
            >
              View API Docs to Build Your Own
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo size="md" showText={true} />
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/integrations" className="hover:text-white transition-colors">Integrations</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} CallWaitingAI Ltd | Registered in England & Wales No. [XXXXXXX]</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
