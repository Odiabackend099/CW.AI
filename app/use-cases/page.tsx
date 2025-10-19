export const metadata = {
  title: 'Use Cases - CallWaitingAI | Industries We Transform',
  description: 'See how CallWaitingAI transforms different industries - from tradespeople to law firms, medical practices to property management.',
};

import { ArrowRight, Users, Briefcase, Home, Stethoscope, Car, Dumbbell, Building2 } from 'lucide-react';
import Logo from '@/components/Logo';

export default function UseCasesPage() {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Tradespeople & Contractors",
      problem: "You're on a job site. Phone rings. You're covered in plaster/wiring/paint. By the time you clean up, they've hung up and called your competitor.",
      solution: "CallWaitingAI answers instantly, asks the right questions (property type, urgency, budget), and books them into your calendar—while you finish the job.",
      roi: "Average tradesperson captures £12,000 more revenue per year.",
      color: "from-blue-400/20 to-cyan-400/20"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Law Firms & Solicitors",
      problem: "New client calls at 5:30pm. You've left the office. They need someone NOW. They call the next firm on Google. You've just lost a £15,000 case.",
      solution: "24/7 AI receptionist that qualifies leads, assesses case type, explains your services, and books consultations—even at midnight.",
      roi: "Firms report 3-4 extra clients per month = £40k–£80k additional revenue annually.",
      color: "from-purple-400/20 to-pink-400/20"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property Management & Estate Agents",
      problem: "Viewings, valuations, tenant emergencies—your phone never stops. You're on one call and missing three others. Each missed call is a lost instruction.",
      solution: "AI handles viewing requests, books valuations, triages maintenance calls, and even pre-qualifies buyers based on budget and requirements.",
      roi: "Average agency captures 8-12 additional instructions per month.",
      color: "from-emerald-400/20 to-cyan-400/20"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical & Dental Practices",
      problem: "Reception is swamped. Patients on hold for 10+ minutes. They hang up and book with a competitor. Your no-show rate is 15% because appointment confirmations are manual.",
      solution: "AI books appointments, sends automated reminders, handles prescription queries, and routes emergencies to on-call staff.",
      roi: "Reduce no-shows by 70%, increase bookings by 30%.",
      color: "from-red-400/20 to-pink-400/20",
      compliance: "GDPR compliant, medical-grade data encryption."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Marketing & Creative Agencies",
      problem: "New business calls come in during client pitches. You miss them. When you call back, they've already engaged another agency.",
      solution: "AI answers, understands their needs, explains your services, shares case studies, and books discovery calls—automatically synced to your calendar.",
      roi: "Capture 40% more inbound leads.",
      color: "from-orange-400/20 to-yellow-400/20"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Accountants & Financial Advisors",
      problem: "Tax deadline season. Phone ringing off the hook. You're drowning in calls while trying to actually do the work.",
      solution: "AI handles appointment bookings, document requests, payment queries, and basic FAQs—freeing you to focus on billable work.",
      roi: "Save 15+ hours per week during peak season.",
      color: "from-green-400/20 to-emerald-400/20"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Automotive Services (Garages, Detailing, MOT Centers)",
      problem: "Customer calls for a quote while you're under a car. Can't answer. They book elsewhere. You've lost a £500 job.",
      solution: "AI provides instant quotes for standard services, books appointments, and even upsells additional services (e.g., 'Would you like brake fluid replacement with your MOT?').",
      roi: "25% increase in bookings, 15% increase in average ticket size.",
      color: "from-gray-400/20 to-slate-400/20"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Gyms, Spas & Wellness Centers",
      problem: "Front desk can't handle phone calls during peak hours. Missed calls = missed memberships and bookings.",
      solution: "AI books classes, explains membership options, handles cancellations, and even collects payment over the phone.",
      roi: "30% more membership sign-ups from phone inquiries.",
      color: "from-indigo-400/20 to-purple-400/20"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Recruitment Agencies",
      problem: "Candidates call for job updates while you're interviewing. Clients call with urgent roles while you're on another call. Chaos.",
      solution: "AI qualifies candidates, books interviews, updates on application status, and routes urgent client calls to the right consultant.",
      roi: "50% faster response times = happier candidates and clients.",
      color: "from-teal-400/20 to-cyan-400/20"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Use Cases: Industries We Transform</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          See how CallWaitingAI is revolutionizing customer service across different industries, helping businesses never miss another opportunity.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-slate-900/40 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all">
              <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl mb-6 flex items-center justify-center text-slate-300`}>
                {industry.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-red-300">The Problem</h4>
                <p className="text-slate-400 leading-relaxed">{industry.problem}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-300">The Solution</h4>
                <p className="text-slate-400 leading-relaxed">{industry.solution}</p>
              </div>
              
              {industry.compliance && (
                <div className="mb-4">
                  <p className="text-sm text-emerald-300 font-semibold">Compliance: {industry.compliance}</p>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-emerald-300">ROI</h4>
                <p className="text-slate-300 font-medium">{industry.roi}</p>
              </div>
              
              <a
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="bg-slate-900/40 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise & Call Centers</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-3 text-red-300">The Problem</h4>
                <p className="text-slate-400 leading-relaxed">
                  High-volume inbound calls. Need to scale without hiring 50 more agents.
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-3 text-cyan-300">The Solution</h4>
                <p className="text-slate-400 leading-relaxed">
                  White-label AI voice solution that integrates with your existing tech stack. Handle 10x call volume with the same team.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 text-emerald-300">ROI</h4>
              <p className="text-slate-300 font-medium">70% reduction in staffing costs, 99.9% uptime SLA.</p>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Sales for Custom Pricing
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-3xl p-8 border border-cyan-400/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Not Sure If This Is For You?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Book a 15-minute demo and we'll show you exactly how CallWaitingAI works for your specific industry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
            >
              Book a 15-Minute Demo
            </a>
            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg border-2 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
            >
              Start Free Trial
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
              <a href="/use-cases" className="hover:text-white transition-colors">Use Cases</a>
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
