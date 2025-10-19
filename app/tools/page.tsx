export const metadata = {
  title: 'Free Business Tools - CallWaitingAI | Calculators, Scripts & More',
  description: 'Free tools for UK businesses. Calculate missed call costs, generate call scripts, check phone reputation, and more. All completely free.',
};

import { Calculator, FileText, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';

export default function ToolsPage() {
  const tools = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Missed Call ROI Calculator",
      description: "Calculate how much revenue you're losing to missed calls. See exact cost + actionable solutions.",
      features: ["Personalized calculations", "Industry benchmarks", "PDF report", "Shareable results"],
      link: "/tools/missed-call-calculator",
      color: "from-red-400/20 to-orange-400/20",
      stats: "5,000+ businesses used"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Call Script Generator",
      description: "Generate professional receptionist scripts in 60 seconds. AI-powered tool creates custom scripts instantly.",
      features: ["Industry-specific scripts", "Custom questions", "Professional templates", "Copy-ready format"],
      link: "/tools/call-script-generator",
      color: "from-purple-400/20 to-pink-400/20",
      stats: "10,000+ scripts generated"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Phone Number Reputation Checker",
      description: "Check if your business number is flagged as spam. Get detailed reputation report + fix guide.",
      features: ["Spam score check", "Database listings", "Fix recommendations", "Trust score analysis"],
      link: "/tools/number-reputation",
      color: "from-green-400/20 to-emerald-400/20",
      stats: "Coming soon"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Call Volume Forecaster",
      description: "Predict your call volume for the next 12 months. Plan staffing and resources with confidence.",
      features: ["Seasonal patterns", "Peak predictions", "Risk alerts", "Resource planning"],
      link: "/tools/call-volume-forecast",
      color: "from-blue-400/20 to-cyan-400/20",
      stats: "Coming soon"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Cost Calculator",
      description: "Compare true costs of popular CRMs. Find hidden fees and discover cost-effective alternatives.",
      features: ["True cost comparison", "Hidden fee analysis", "ROI calculations", "Alternative suggestions"],
      link: "/tools/crm-cost-calculator",
      color: "from-yellow-400/20 to-orange-400/20",
      stats: "Coming soon"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Business Tools</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
          Professional tools for UK businesses. Calculate costs, generate scripts, check reputation, and more. All completely free.
        </p>
        
        {/* Social Proof */}
        <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400">15,000+</div>
              <div className="text-slate-400">Tools Used This Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">£2.3M</div>
              <div className="text-slate-400">Revenue Recovered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">4.9/5</div>
              <div className="text-slate-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-slate-900/40 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all group">
              <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl mb-6 flex items-center justify-center text-slate-300`}>
                {tool.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{tool.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{tool.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-slate-500">{tool.stats}</span>
                <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-semibold">
                  FREE
                </span>
              </div>
              
              <a
                href={tool.link}
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all"
              >
                Use Tool
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-slate-900/40 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Tools Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Choose Your Tool</h3>
              <p className="text-slate-400">Select from our collection of free business tools designed for UK businesses.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl flex items-center justify-center text-purple-400 mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Input Your Data</h3>
              <p className="text-slate-400">Provide your business information and get personalized results instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Results & Take Action</h3>
              <p className="text-slate-400">Receive detailed reports, actionable insights, and next steps for your business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
            <div className="text-3xl font-bold text-emerald-400 mb-2">£156k</div>
            <p className="text-slate-400 mb-4">"The calculator showed I was losing £156k/year to missed calls. I had no idea it was that much!"</p>
            <div className="text-sm text-slate-500">— James Mitchell, Plumber</div>
          </div>
          <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
            <div className="text-3xl font-bold text-cyan-400 mb-2">73%</div>
            <p className="text-slate-400 mb-4">"The script generator helped me create a professional script that increased my conversion rate to 73%."</p>
            <div className="text-sm text-slate-500">— Sarah Chen, Law Firm</div>
          </div>
          <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
            <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
            <p className="text-slate-400 mb-4">"Using these tools helped me identify and fix issues that were costing me 40% of my potential revenue."</p>
            <div className="text-sm text-slate-500">— David Kumar, Estate Agent</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border-y border-cyan-400/20 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            These tools show you what's possible. CallWaitingAI makes it happen automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg border-2 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
            >
              Book a Demo
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
              <a href="/tools" className="hover:text-white transition-colors">Free Tools</a>
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
