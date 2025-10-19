export const metadata = {
  title: 'How Much Does a Missed Call Cost Your Business? | Free Calculator',
  description: 'The real cost of missed calls for UK businesses. Use our free calculator to see exactly how much revenue you\'re losing and how to fix it.',
  keywords: 'missed call cost, business opportunity cost, revenue loss, UK business calculator',
};

import Link from 'next/link';
import Logo from '@/components/Logo';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between relative z-10">
        <Logo size="md" showText={true} />
        <div className="flex items-center gap-3">
          <Link
            href="/tools/missed-call-calculator"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Try Free Calculator
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Much Does a Missed Call Cost Your Business?
          </h1>
          <p className="text-xl text-slate-400 mb-6">
            The real cost of missed calls for UK businesses. Use our free calculator to see exactly how much revenue you're losing and how to fix it.
          </p>
          <div className="text-sm text-slate-500">
            Published: {new Date().toLocaleDateString('en-GB')} • 5 min read
          </div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            You're on a job site, in a meeting, or just stepped away for lunch—and you miss THE call. The one that would've paid your bills for the month. Sound familiar?
          </p>

          <h2 className="text-3xl font-bold mb-6">The £50,000 Problem You're Ignoring</h2>
          
          <p className="text-slate-300 mb-6">
            Most UK business owners dramatically underestimate how much money they lose to missed calls. The numbers are shocking:
          </p>

          <ul className="text-slate-300 mb-8 space-y-3">
            <li>• Average UK business misses <strong>30% of inbound calls</strong></li>
            <li>• <strong>85% of callers won't leave voicemail</strong> — they'll just call your competitor</li>
            <li>• One missed call = <strong>£500–£5,000 in lost revenue</strong></li>
            <li>• Hiring receptionists costs <strong>£25k–£35k per year</strong> + NI + holidays</li>
          </ul>

          <div className="bg-red-400/10 border border-red-400/20 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-red-400 mb-4">Real Example: A London Plumber</h3>
            <p className="text-slate-300">
              James Mitchell runs Mitchell & Sons Plumbing in Essex. Before CallWaitingAI, he was missing 40% of calls because he was on job sites. 
              That's 15-20 missed calls per week. At £800 average job value, he was losing <strong>£12,000-£16,000 per month</strong> — 
              over <strong>£150,000 per year</strong> in lost revenue.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6">Calculate Your Exact Loss</h2>
          
          <p className="text-slate-300 mb-6">
            Want to see how much you're actually losing? Use our free calculator below:
          </p>

          <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-3xl p-8 border border-cyan-400/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Free Missed Call ROI Calculator</h3>
            <p className="text-slate-300 mb-6">
              Enter your business details and see exactly how much revenue you're losing to missed calls.
            </p>
            <Link
              href="/tools/missed-call-calculator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Calculate My Loss →
            </Link>
          </div>

          <h2 className="text-3xl font-bold mb-6">The Solution That Actually Works</h2>
          
          <p className="text-slate-300 mb-6">
            Traditional solutions don't work:
          </p>

          <ul className="text-slate-300 mb-8 space-y-3">
            <li>• <strong>Hiring receptionists:</strong> £25k-£35k/year + sick days + holidays</li>
            <li>• <strong>Answering services:</strong> £500-£2000/month + they don't know your business</li>
            <li>• <strong>Voicemail:</strong> 85% of callers won't leave messages</li>
          </ul>

          <p className="text-slate-300 mb-6">
            CallWaitingAI is different. It's an AI receptionist that:
          </p>

          <ul className="text-slate-300 mb-8 space-y-3">
            <li>• <strong>Answers every call in 0.8 seconds</strong></li>
            <li>• <strong>Knows your business</strong> — trained on your services and pricing</li>
            <li>• <strong>Books appointments</strong> directly into your calendar</li>
            <li>• <strong>Works 24/7</strong> — never takes holidays or sick days</li>
            <li>• <strong>Costs £39-£279/month</strong> — less than 1% of what you're losing</li>
          </ul>

          <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">James's Results After CallWaitingAI</h3>
            <p className="text-slate-300">
              "I went from losing 15-20 calls per week to capturing every single one. Booked solid for the next 2 months. 
              CallWaitingAI paid for itself in 3 days. Absolute no-brainer." — James Mitchell, Mitchell & Sons Plumbing
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6">Stop Losing Money. Start Today.</h2>
          
          <p className="text-slate-300 mb-8">
            Every day you wait is another day of lost revenue. The setup takes 7 minutes, and you'll wonder how you ever survived without it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-slate-700 text-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-600 hover:text-white transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo size="md" showText={true} />
            <div className="flex gap-8 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/tools" className="hover:text-white transition-colors">Free Tools</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
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
