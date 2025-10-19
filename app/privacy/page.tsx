import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — CallWaitingAI',
  description: 'Privacy Policy for CallWaitingAI Ltd - UK GDPR compliant data protection and privacy policy.'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition">
            CallWaitingAI
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-12">Last Updated: 19 October 2025</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              CallWaitingAI Ltd ("we", "our", "us") is committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our Service at https://www.callwaitingai.dev.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Data Controller</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>Data Controller:</strong> CallWaitingAI Ltd<br/>
              <strong>Registered Office:</strong> [Insert UK address]<br/>
              <strong>Company Number:</strong> [Companies House number]<br/>
              <strong>ICO Registration:</strong> [Insert ICO registration number]<br/>
              <strong>Contact:</strong> privacy@callwaitingai.dev
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. What Data We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-white">2.1 Account Information</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li>Name, email address, phone number</li>
              <li>Company name and business details</li>
              <li>Billing address and payment information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">2.2 Call Data</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li>Call recordings and transcriptions</li>
              <li>Caller phone numbers</li>
              <li>Call duration, time, and date</li>
              <li>AI conversation logs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">2.3 Technical Data</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li>IP address</li>
              <li>Device type and browser</li>
              <li>Operating system</li>
              <li>Cookies and usage data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">2.4 Communications</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Support tickets and emails</li>
              <li>Chat messages with our team</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We process your data for the following purposes:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">3.1 Service Delivery (Legal Basis: Contract Performance)</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li>Answering and routing calls</li>
              <li>Recording and transcribing conversations</li>
              <li>Booking appointments and updating your CRM</li>
              <li>Providing analytics and reporting</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">3.2 Billing (Legal Basis: Contract Performance)</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li>Processing payments</li>
              <li>Sending invoices and receipts</li>
              <li>Managing subscriptions and overages</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">3.3 Service Improvement (Legal Basis: Legitimate Interest)</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li>Analyzing usage patterns</li>
              <li>Improving AI accuracy</li>
              <li>Developing new features</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">3.4 Marketing (Legal Basis: Consent or Legitimate Interest)</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li>Sending product updates and newsletters (you can opt out anytime)</li>
              <li>Showing relevant ads on third-party platforms</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">3.5 Legal Compliance (Legal Basis: Legal Obligation)</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Responding to law enforcement requests</li>
              <li>Complying with tax and accounting requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Who We Share Data With</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We only share your data with trusted third parties necessary to provide the Service:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">4.1 Subprocessors</h3>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-6">
              <li><strong>Twilio:</strong> Call routing and telephony</li>
              <li><strong>OpenAI/Anthropic:</strong> AI language processing</li>
              <li><strong>AWS UK (London):</strong> Data hosting and storage</li>
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>Cloudflare:</strong> CDN and DDoS protection</li>
              <li><strong>Supabase:</strong> Database services</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mb-6">
              All subprocessors are GDPR-compliant or covered by UK adequacy decisions.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">4.2 Integrations</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you connect third-party tools (e.g., HubSpot, Google Calendar), we share data as necessary to provide the integration. You control these connections.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">4.3 Legal Requirements</h3>
            <p className="text-slate-300 leading-relaxed">
              We may disclose data if required by law, court order, or to protect our rights or the safety of others.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Retention</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Call recordings:</strong> Stored for 30–365 days depending on your plan</li>
              <li><strong>Account data:</strong> Retained while your account is active + 12 months after closure</li>
              <li><strong>Billing records:</strong> Retained for 7 years (UK tax law requirement)</li>
              <li><strong>Marketing data:</strong> Until you unsubscribe or withdraw consent</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              You can request deletion at any time (see Your Rights below).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Security</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong>Encryption in transit:</strong> TLS 1.3</li>
              <li><strong>Encryption at rest:</strong> AES-256</li>
              <li><strong>Access controls:</strong> Role-based permissions, MFA for admin accounts</li>
              <li><strong>Monitoring:</strong> 24/7 intrusion detection and logging</li>
              <li><strong>Compliance:</strong> SOC 2 Type II, ISO 27001</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              No system is 100% secure. If a breach occurs, we'll notify you within 72 hours as required by GDPR.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. International Data Transfers</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Your data is primarily stored in <strong>AWS UK (London)</strong> data centres. If we transfer data outside the UK/EEA, we ensure adequate protection through:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Adequacy decisions (e.g., for US companies under EU-US Data Privacy Framework)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Your Rights (UK GDPR)</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You have the following rights:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.1 Right of Access</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Request a copy of all personal data we hold about you.</p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.2 Right to Rectification</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Correct inaccurate or incomplete data.</p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.3 Right to Erasure ("Right to be Forgotten")</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Request deletion of your data (subject to legal retention requirements).</p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.4 Right to Restriction</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Limit how we process your data.</p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.5 Right to Data Portability</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Receive your data in a machine-readable format.</p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.6 Right to Object</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Object to processing based on legitimate interests or for marketing purposes.</p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.7 Right to Withdraw Consent</h3>
            <p className="text-slate-300 leading-relaxed mb-4">If processing is based on consent, you can withdraw it anytime.</p>

            <h3 className="text-xl font-semibold mb-3 text-white">8.8 Right to Lodge a Complaint</h3>
            <p className="text-slate-300 leading-relaxed">
              Contact the <strong>Information Commissioner's Office (ICO)</strong>:<br/>
              - Website: https://ico.org.uk<br/>
              - Phone: 0303 123 1113
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. How to Exercise Your Rights</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Email us at <strong>privacy@callwaitingai.dev</strong> with your request. We'll respond within <strong>30 days</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              To verify your identity, we may ask for:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Account email address</li>
              <li>Last 4 digits of payment method</li>
              <li>Recent invoice number</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Cookies</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We use cookies to improve your experience:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-white">10.1 Essential Cookies</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Required for the Service to function (e.g., session management).</p>

            <h3 className="text-xl font-semibold mb-3 text-white">10.2 Analytics Cookies</h3>
            <p className="text-slate-300 leading-relaxed mb-4">Track usage to improve the Service (e.g., Google Analytics).</p>

            <h3 className="text-xl font-semibold mb-3 text-white">10.3 Marketing Cookies</h3>
            <p className="text-slate-300 leading-relaxed">
              Show relevant ads on third-party sites (e.g., Facebook Pixel).
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              You can manage cookies in your browser settings. Disabling cookies may affect Service functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Children's Privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              The Service is not intended for anyone under 18. We do not knowingly collect data from children.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to This Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We'll notify you of material changes via email or Service notification.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              For privacy questions or to exercise your rights:
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>Email:</strong> privacy@callwaitingai.dev<br/>
              <strong>Address:</strong> [Registered UK office address]<br/>
              <strong>Data Protection Officer:</strong> [Name/Email if required]
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; 2025 CallWaitingAI Ltd | Registered in England & Wales No. [XXXXXXX]</p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex gap-6">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition">
            ← Back to Home
          </Link>
          <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 transition">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition">
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  )
}