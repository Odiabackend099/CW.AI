import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — CallWaitingAI',
  description: 'Terms of Service for CallWaitingAI Ltd - UK-registered AI company providing voice automation services.'
}

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-slate-400 mb-12">Last Updated: 19 October 2025</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Who We Are</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              CallWaitingAI Ltd ("we", "our", "us", "CallWaitingAI") is registered in England and Wales.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>Company Number:</strong> [Insert Companies House number]<br/>
              <strong>Registered Office:</strong> [Insert UK address]<br/>
              <strong>Contact:</strong> legal@callwaitingai.dev
            </p>
            <p className="text-slate-300 leading-relaxed">
              By using our service at https://www.callwaitingai.dev (the "Service"), you agree to these Terms of Service ("Terms").
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Service Description</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We provide AI-powered virtual receptionist and voice automation services, including:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Inbound call answering</li>
              <li>Call qualification and routing</li>
              <li>Appointment booking</li>
              <li>CRM integration</li>
              <li>Call recording and transcription</li>
              <li>Analytics and reporting</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Account Registration</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>3.1</strong> You must provide accurate information when creating an account.<br/>
              <strong>3.2</strong> You are responsible for maintaining the security of your account credentials.<br/>
              <strong>3.3</strong> You must be at least 18 years old to use the Service.<br/>
              <strong>3.4</strong> One person or company may not maintain multiple free accounts.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Payment Terms</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>4.1 Billing Cycle</strong><br/>
              Subscriptions are billed monthly or annually in advance. Payment is due on your billing date.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>4.2 Pricing</strong><br/>
              Current pricing is available at https://www.callwaitingai.dev/pricing. Prices include VAT where applicable.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>4.3 Overages</strong><br/>
              If you exceed your plan's included minutes, additional usage is billed at the published overage rate at month-end.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>4.4 Price Changes</strong><br/>
              We may change prices with 30 days' notice. Existing customers keep their current price for their current billing cycle.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>4.5 Payment Methods</strong><br/>
              We accept credit cards, debit cards, and direct debit (UK only). Enterprise customers may request invoicing.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>4.6 Failed Payments</strong><br/>
              If payment fails, we'll retry for 7 days. After that, your account will be suspended until payment is received.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Fair Use Policy</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>5.1 Usage Limits</strong><br/>
              "Unlimited" plans include soft caps appropriate to the tier (see pricing page). Excessive usage may require an upgrade or incur overage charges.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>5.2 Prohibited Uses</strong><br/>
              You may not use the Service for:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Illegal activities</li>
              <li>Spam or unsolicited marketing calls</li>
              <li>Harassment or abusive behavior</li>
              <li>Bypassing or gaming our systems</li>
              <li>Resale without authorization (see Enterprise licensing)</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              <strong>5.3 Suspension</strong><br/>
              We reserve the right to suspend accounts that violate fair use or these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Refund & Cancellation Policy</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>6.1 30-Day Money-Back Guarantee</strong><br/>
              New customers may request a full refund within 30 days of first purchase.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>6.2 Cancellation</strong><br/>
              You may cancel at any time from your account dashboard. Cancellations take effect at the end of your current billing period.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>6.3 Partial Refunds</strong><br/>
              After 30 days, refunds are calculated pro-rata based on unused subscription time.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>6.4 Refund Process</strong><br/>
              Email support@callwaitingai.dev with your account email and invoice number. Refunds are processed within 5 business days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Data Protection & Privacy</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>7.1 Compliance</strong><br/>
              We process data in compliance with the UK GDPR and the Data Protection Act 2018.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>7.2 Privacy Policy</strong><br/>
              See our full Privacy Policy at https://www.callwaitingai.dev/privacy.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>7.3 Call Recordings</strong><br/>
              We record and transcribe calls as part of the Service. You are responsible for complying with applicable recording consent laws in your jurisdiction.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>7.4 Data Ownership</strong><br/>
              You retain ownership of all data you input into the Service. We store data to provide the Service and may use anonymized data for service improvement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Intellectual Property</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>8.1 Our IP</strong><br/>
              CallWaitingAI, our logo, and the Service are owned by CallWaitingAI Ltd. You may not copy, modify, or reverse-engineer our technology.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>8.2 Your Content</strong><br/>
              You grant us a license to use your content (e.g., call scripts, recordings) solely to provide the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Service Level Agreement (SLA)</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>9.1 Uptime Guarantee</strong><br/>
              We target 99.9% monthly uptime (see https://www.callwaitingai.dev/sla for full details).
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>9.2 Credits</strong><br/>
              If uptime falls below target, you may be eligible for a service credit of 10% of your monthly fee.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. AI Disclaimer</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>10.1 Automated Responses</strong><br/>
              Our AI provides automated conversational support. It should not be relied upon for legal, medical, financial, or other professional advice.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>10.2 No Warranty</strong><br/>
              While we strive for accuracy, we do not guarantee the AI will always respond perfectly or appropriately.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>10.3 Human Oversight</strong><br/>
              You remain responsible for reviewing AI interactions and ensuring they meet your business requirements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>11.1 Maximum Liability</strong><br/>
              Our total liability for any claim arising from the Service shall not exceed the amount you paid us in the 12 months prior to the claim (or one month's subscription fee if less than 12 months).
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>11.2 Excluded Damages</strong><br/>
              We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits or revenue.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>11.3 Exceptions</strong><br/>
              Nothing in these Terms excludes liability for death or personal injury caused by negligence, fraud, or other liability that cannot be excluded by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Indemnification</h2>
            <p className="text-slate-300 leading-relaxed">
              You agree to indemnify and hold us harmless from any claims arising from your use of the Service, your violation of these Terms, or your violation of any law or third-party rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Termination</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>13.1 By You</strong><br/>
              You may terminate at any time by canceling your subscription.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>13.2 By Us</strong><br/>
              We may terminate or suspend your account for violation of these Terms, non-payment, or at our discretion with 30 days' notice.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>13.3 Effect of Termination</strong><br/>
              Upon termination, your access to the Service ends. We will retain data as required by law or our Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">14. Changes to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              We may modify these Terms at any time. We'll notify you of material changes via email or Service notification. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">15. Governing Law & Disputes</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>15.1 Governing Law</strong><br/>
              These Terms are governed by the laws of England and Wales.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>15.2 Jurisdiction</strong><br/>
              Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>15.3 Alternative Dispute Resolution</strong><br/>
              Before taking legal action, we encourage you to contact us at legal@callwaitingai.dev to resolve disputes informally.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">16. Miscellaneous</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>16.1 Entire Agreement</strong><br/>
              These Terms, along with our Privacy Policy and SLA, constitute the entire agreement between you and CallWaitingAI.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>16.2 Severability</strong><br/>
              If any provision is found unenforceable, the remainder of these Terms remains in effect.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong>16.3 No Waiver</strong><br/>
              Failure to enforce any provision does not constitute a waiver of that provision.
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>16.4 Assignment</strong><br/>
              You may not assign these Terms without our consent. We may assign to any successor or affiliate.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">17. Contact</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              For questions about these Terms:
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong>Email:</strong> legal@callwaitingai.dev<br/>
              <strong>Address:</strong> [Registered UK office address]<br/>
              <strong>Company Number:</strong> [Companies House number]
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; 2025 CallWaitingAI Ltd | Registered in England & Wales</p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex gap-6">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition">
            ← Back to Home
          </Link>
          <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition">
            Contact Us
          </Link>
        </div>
      </main>
    </div>
  )
}