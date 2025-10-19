'use client';

import { ArrowRight, Phone, Clock, MessageSquare, CheckCircle, Mail } from 'lucide-react';
import { useState } from 'react';
import PricingSection from '@/components/PricingSection';
import Logo from '@/components/Logo';

export default function Page() {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Demo phone number from environment variable
  const demoPhone = process.env.NEXT_PUBLIC_DEMO_PHONE || '+14156876510';

  const handleEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your email/CRM system
    console.log('Early access request:', { email, whatsapp });
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setWhatsapp('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between relative z-10">
        <Logo size="md" showText={true} />
        <div className="flex items-center gap-6">
          <a
            href="/tools"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 font-medium text-slate-300 hover:text-white transition-colors"
          >
            Free Tools
          </a>
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

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 mb-8 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-slate-300">Real voice • Instant replies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
              Never Miss Another Paying Call
              <br />
              <span className="text-cyan-400">Your AI Receptionist That Answers, Qualifies & Books—24/7</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Every missed call is money walking out the door. CallWaitingAI makes sure you never lose another customer to voicemail again.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-lg bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href={`tel:${demoPhone}`}
                className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-lg border-2 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Try Live Demo ({demoPhone})
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 mb-8">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Answers in 0.8 seconds
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Books appointments instantly
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Integrates with your CRM
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                99.9% uptime guarantee
              </span>
            </div>
            <p className="text-sm text-slate-500">
              No credit card required • 30-day money-back guarantee • First 100 calls free
            </p>
          </div>

          {/* Demo Call Flow Visualization */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">See How It Works</h3>
                <p className="text-slate-400">Watch AI answer a real customer call in seconds</p>
              </div>

              {/* AI Demo Video */}
              <div className="relative rounded-xl overflow-hidden bg-slate-800/50">
                <video
                  className="w-full h-auto max-w-4xl mx-auto"
                  controls
                  preload="metadata"
                >
                  <source src="/animations/ai-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay with Call Info */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>Live Demo: +1 (218) 400-3410</span>
                  </div>
                </div>
              </div>

              {/* Video Description */}
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-sm">
                  This is a real demonstration of CallWaiting AI answering a customer call. 
                  The AI responds instantly with natural, human-like speech powered by ODIADEV technology.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-8 pt-6 border-t border-slate-700">
                <p className="text-slate-400 mb-4">Try it yourself - Call our demo AI now</p>
                <a
                  href={`tel:${demoPhone}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  Call {demoPhone}
                </a>
                <p className="text-xs text-slate-500 mt-3">Free demo • No signup required • Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Trusted by 500+ UK Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <p className="text-slate-300 italic mb-4">
                "We went from missing 40% of calls to capturing every single one. Revenue up 67% in 3 months."
              </p>
              <p className="text-slate-400 font-semibold">— James Mitchell, Director, Mitchell & Sons Plumbing</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <p className="text-slate-300 italic mb-4">
                "It's like hiring 3 receptionists for the price of a gym membership."
              </p>
              <p className="text-slate-400 font-semibold">— Sarah Chen, Owner, Chen Legal Services</p>
            </div>
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800">
              <p className="text-slate-300 italic mb-4">
                "Pays for itself in the first week. Absolute game-changer."
              </p>
              <p className="text-slate-400 font-semibold">— David Kumar, MD, Kumar Property Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The £50,000 Problem You're Ignoring</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              <strong className="text-white">You're bleeding money every time your phone rings and no one answers.</strong>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <p className="text-slate-300">Average UK business misses 30% of inbound calls</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <p className="text-slate-300">85% of callers won't leave voicemail</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <p className="text-slate-300">One missed call = £500–£5,000 in lost revenue</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <p className="text-slate-300">Hiring receptionists costs £25k–£35k per year + NI + holidays</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold mb-4 text-center">What if you could capture every call for £39/month?</h3>
              <div className="text-center">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="w-5 h-5" />
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dead Simple. No Tech Skills Required.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-6">
                <span className="text-2xl font-bold text-cyan-400">1️⃣</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect Your Number (2 minutes)</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Forward missed calls or get a new number. Works with any UK mobile or landline.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-400/10 border border-blue-400/20 mb-6">
                <span className="text-2xl font-bold text-blue-400">2️⃣</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Train Your AI (5 minutes)</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Tell it your business details, services, and booking rules. Uses your actual voice style.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 mb-6">
                <span className="text-2xl font-bold text-emerald-400">3️⃣</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Go Live (Instant)</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Your AI answers every call, qualifies leads, books appointments, and sends you transcripts.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
            >
              <ArrowRight className="w-5 h-5" />
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Features That Print Money</h2>
            <p className="text-xl text-slate-400">Everything You Need to Never Miss a Sale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Call Qualification</h3>
              <p className="text-slate-400 leading-relaxed">
                AI asks the right questions to filter serious buyers from tire-kickers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-400/10 border border-blue-400/20 mb-6">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Booking</h3>
              <p className="text-slate-400 leading-relaxed">
                Syncs with Google Calendar, Calendly, Acuity. Books appointments while the caller's still on the line.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 mb-6">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold mb-3">CRM Integration</h3>
              <p className="text-slate-400 leading-relaxed">
                Pushes every lead straight into your HubSpot, Salesforce, Pipedrive, or Notion.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-400/10 border border-purple-400/20 mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Analytics</h3>
              <p className="text-slate-400 leading-relaxed">
                See call volume, conversion rates, and peak hours. Optimize your marketing on the fly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - Call Ada */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-300 font-semibold">Live Demo Available</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hear It For Yourself
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                Call Ada, our AI receptionist. She&apos;ll answer your questions about CallWaiting AI in real-time. No appointment needed.
              </p>
            </div>

            {/* Demo Call Scenario */}
            <div className="bg-slate-800/50 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold mb-4 text-slate-300">Example Conversation:</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm">
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 italic">&quot;Hi, I&apos;m interested in your AI service. How does it work?&quot;</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-sm">
                    🤖
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-300">&quot;Thanks for calling! CallWaiting AI is a voice assistant that answers calls when you can&apos;t. It speaks naturally, captures lead information, and integrates with your existing tools. Would you like to know about pricing or setup time?&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call CTA */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${demoPhone}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold text-xl bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  Call {demoPhone}
                </a>
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold text-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="w-6 h-6" />
                  Get Your AI Now
                </a>
              </div>
              <p className="text-sm text-slate-500">Available 24/7 • Average wait time: 0 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-16 md:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 mb-8">TRUSTED BY</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            <div className="w-32 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-slate-600 text-sm">Logo 1</span>
            </div>
            <div className="w-32 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-slate-600 text-sm">Logo 2</span>
            </div>
            <div className="w-32 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-slate-600 text-sm">Logo 3</span>
            </div>
            <div className="w-32 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-slate-600 text-sm">Logo 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/40 to-slate-800/40 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stop Losing Calls. Start Making Money.
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every day you wait is another day of lost revenue. Set up takes 7 minutes. You'll wonder how you ever survived without it.
              </p>
            </div>

            <div className="text-center space-y-6">
              <a
                href="/signup"
                className="inline-flex items-center justify-center gap-3 rounded-full px-12 py-5 font-bold text-2xl bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl"
              >
                <ArrowRight className="w-6 h-6" />
                Start Free Trial — No Credit Card Required
              </a>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400">
                <span>Questions? Call us: <strong className="text-white">020 1234 5678</strong> (yes, a human answers)</span>
                <span>Or book a demo: <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Schedule 15-min Call</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection showHeader={true} variant="homepage" />

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              [
                'What happens when someone calls?',
                'Your AI picks up instantly, speaks naturally, answers questions, and captures important details like name, callback number, and what they need. You get a summary via WhatsApp or email.'
              ],
              [
                'Does it really sound human?',
                'Yes. Try calling our demo line at +1 (415) 687-6510 to hear it yourself. Most people can\'t tell it\'s AI.'
              ],
              [
                'What if the AI doesn\'t know the answer?',
                'It takes a message and lets the caller know you\'ll follow up. You can customize responses for common questions during setup.'
              ],
              [
                'How long does setup take?',
                'Most businesses are live within 48 hours. We handle the technical setup—you just provide your FAQs and business info.'
              ],
              [
                'Can it schedule appointments?',
                'Yes. It integrates with calendar tools and can book appointments based on your availability.'
              ],
              [
                'What about privacy and security?',
                'All conversations are encrypted. We\'re GDPR compliant and don\'t share your data with third parties.'
              ]
            ].map(([q, a], i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <h3 className="text-lg font-semibold mb-3">{q}</h3>
                <p className="text-slate-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo size="md" showText={true} />
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a href="mailto:support@callwaitingai.dev" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} CallWaitingAI Ltd | Registered in England & Wales No. [XXXXXXX]</p>
            <p className="mt-2 text-slate-600">Registered Office: [Insert your full UK registered address]</p>
          </div>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href="/signup"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-2xl"
        >
          <ArrowRight className="w-5 h-5" />
          Start Free Trial
        </a>
      </div>

      {/* Desktop Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <a
          href="/signup"
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-xl hover:shadow-2xl animate-pulse"
        >
          <ArrowRight className="w-5 h-5" />
          Start Free Trial
        </a>
      </div>
    </>
  );
}
