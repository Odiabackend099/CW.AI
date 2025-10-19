export const metadata = {
  title: 'Pricing - CallWaitingAI | Plans That Scale With You',
  description: 'Pay for what you use. No contracts. Cancel anytime. Choose from Starter, Pro, Business, or Enterprise plans.',
};

import { Check, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

export default function PricingPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing That Makes Sense</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Pay for what you use. No contracts. Cancel anytime.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-slate-900/40 rounded-3xl p-8 border border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold">Business</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4 font-semibold">Price</td>
                  <td className="py-4 px-4 text-center font-bold text-2xl">£39/mo</td>
                  <td className="py-4 px-4 text-center font-bold text-2xl">£119/mo</td>
                  <td className="py-4 px-4 text-center font-bold text-2xl">£279/mo</td>
                  <td className="py-4 px-4 text-center font-bold text-2xl">Custom</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Minutes Included</td>
                  <td className="py-4 px-4 text-center">1,000</td>
                  <td className="py-4 px-4 text-center">5,000</td>
                  <td className="py-4 px-4 text-center">15,000</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Overage Rate</td>
                  <td className="py-4 px-4 text-center">£0.04/min</td>
                  <td className="py-4 px-4 text-center">£0.03/min</td>
                  <td className="py-4 px-4 text-center">£0.02/min</td>
                  <td className="py-4 px-4 text-center">Negotiable</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Concurrent Calls</td>
                  <td className="py-4 px-4 text-center">2</td>
                  <td className="py-4 px-4 text-center">5</td>
                  <td className="py-4 px-4 text-center">15</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Phone Numbers</td>
                  <td className="py-4 px-4 text-center">1 UK number</td>
                  <td className="py-4 px-4 text-center">3 numbers</td>
                  <td className="py-4 px-4 text-center">10 numbers</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Call Recording</td>
                  <td className="py-4 px-4 text-center">30 days</td>
                  <td className="py-4 px-4 text-center">90 days</td>
                  <td className="py-4 px-4 text-center">1 year</td>
                  <td className="py-4 px-4 text-center">Custom</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">CRM Integration</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Calendar Sync</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Custom Voice</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-4 px-4">Priority Support</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                  <td className="py-4 px-4 text-center">✅ + Dedicated AM</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">White Label</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center">—</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* CTA Buttons */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <a
              href="/signup?plan=starter"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              Start Starter
            </a>
            <a
              href="/signup?plan=pro"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Start Pro
            </a>
            <a
              href="/signup?plan=business"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              Start Business
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Plan Recommendations */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Which Plan Is Right for You?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold mb-2">Starter</h3>
              <p className="text-slate-400">Solo consultants, freelancers, micro-businesses</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold mb-2">Pro</h3>
              <p className="text-slate-400">Agencies, law firms, accountancies (our most popular plan)</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold mb-2">Business</h3>
              <p className="text-slate-400">Property managers, contractors, busy service businesses</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-bold mb-2">Enterprise</h3>
              <p className="text-slate-400">Call centers, franchises, SaaS companies reselling our tech</p>
            </div>
          </div>
        </div>

        {/* API Pricing */}
        <div className="mt-16 bg-slate-900/40 rounded-3xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold mb-6 text-center">API / Pay-As-You-Go</h2>
          <p className="text-center text-slate-400 mb-6">For developers and integrators:</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>£0.02/minute (no monthly fee)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Unlimited API calls</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>WebSocket support for real-time transcription</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Full webhook integration</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>99.99% uptime SLA</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/api-docs"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              View API Docs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold mb-3">What happens if I go over my minutes?</h3>
              <p className="text-slate-400">Overages are charged at the rates above and billed at month-end. You'll get an alert at 80% usage.</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold mb-3">Can I change plans mid-month?</h3>
              <p className="text-slate-400">Yes. Upgrades take effect immediately. Downgrades apply at your next billing cycle.</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold mb-3">Do you offer annual discounts?</h3>
              <p className="text-slate-400">Yes—save 20% by paying annually. Email sales@callwaitingai.dev for a quote.</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold mb-3">Is there a setup fee?</h3>
              <p className="text-slate-400">No. Zero setup fees, zero hidden costs.</p>
            </div>
          </div>
        </div>

        {/* Money-back Guarantee */}
        <div className="mt-16 text-center bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-3xl p-8 border border-emerald-400/20">
          <h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
          <p className="text-slate-400 mb-6">Try any plan risk-free. If you're not making more money within 30 days, we'll refund every penny.</p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo size="md" showText={true} />
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
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
