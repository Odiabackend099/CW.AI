export const metadata = {
  title: 'Resources - CallWaitingAI | Documentation, Training & Support',
  description: 'Everything you need to succeed with CallWaitingAI. Documentation, video tutorials, case studies, and free training resources.',
};

import { ArrowRight, BookOpen, Play, Users, FileText, Download, ExternalLink } from 'lucide-react';
import Logo from '@/components/Logo';

export default function ResourcesPage() {
  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Documentation",
      color: "from-blue-400/20 to-cyan-400/20",
      items: [
        {
          title: "Quick Start Guide",
          description: "Get up and running in 7 minutes.",
          link: "/docs/quick-start",
          type: "guide"
        },
        {
          title: "API Documentation",
          description: "Full REST API reference for developers.",
          link: "/docs/api",
          type: "docs"
        },
        {
          title: "Integration Guides",
          description: "Step-by-step setup for every CRM and tool.",
          link: "/docs/integrations",
          type: "guide"
        },
        {
          title: "Video Tutorials",
          description: "Watch how to set up common workflows.",
          link: "/docs/videos",
          type: "video"
        }
      ]
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Academy (Free Training)",
      color: "from-emerald-400/20 to-green-400/20",
      items: [
        {
          title: "AI Voice Best Practices",
          description: "Learn how to train your AI for maximum conversions.",
          link: "/academy/ai-voice-best-practices",
          type: "course"
        },
        {
          title: "Call Script Writing 101",
          description: "Write scripts that sound human and close deals.",
          link: "/academy/call-script-writing",
          type: "course"
        },
        {
          title: "CRM Integration Masterclass",
          description: "Connect CallWaitingAI to your entire tech stack.",
          link: "/academy/crm-integration",
          type: "course"
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Case Studies",
      color: "from-purple-400/20 to-pink-400/20",
      items: [
        {
          title: "Law Firm Increases New Clients by 43%",
          description: "How Thornton & Partners LLP captured £180k in additional revenue.",
          link: "/case-studies/thornton-partners",
          type: "case-study"
        },
        {
          title: "Plumber Books 89% More Jobs",
          description: "Mitchell & Sons went from missing 40% of calls to zero missed opportunities.",
          link: "/case-studies/mitchell-sons",
          type: "case-study"
        },
        {
          title: "Property Agency Scales Without Hiring",
          description: "Kumar Property Group handles 3x call volume with the same team.",
          link: "/case-studies/kumar-property",
          type: "case-study"
        }
      ]
    }
  ];

  const blogPosts = [
    {
      title: "The Real Cost of Missed Calls (It's £50,000/Year)",
      excerpt: "Discover the hidden costs of missed calls and how they impact your bottom line.",
      readTime: "5 min read",
      category: "Business"
    },
    {
      title: "7 Call Scripts That Convert at 60%+",
      excerpt: "Proven call scripts that turn more callers into customers.",
      readTime: "8 min read",
      category: "Scripts"
    },
    {
      title: "How to Train Your AI Receptionist in Under 10 Minutes",
      excerpt: "Step-by-step guide to setting up your AI for maximum effectiveness.",
      readTime: "6 min read",
      category: "Setup"
    },
    {
      title: "UK GDPR Compliance for Call Recording: The Definitive Guide",
      excerpt: "Everything you need to know about compliant call recording in the UK.",
      readTime: "12 min read",
      category: "Compliance"
    }
  ];

  const templates = [
    {
      title: "Call Script Templates",
      description: "Professional services script, E-commerce support script, Appointment booking script, Lead qualification script",
      link: "/templates/scripts",
      download: true
    },
    {
      title: "ROI Calculator",
      description: "Calculate how much money you're losing to missed calls.",
      link: "/tools/roi-calculator",
      interactive: true
    },
    {
      title: "Compliance Checklist",
      description: "Ensure your call recording setup is UK GDPR compliant.",
      link: "/templates/compliance-checklist",
      download: true
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources: Everything You Need to Succeed</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Documentation, training, case studies, and tools to help you get the most out of CallWaitingAI.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {resources.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-slate-300`}>
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'guide' ? 'bg-blue-400/20 text-blue-400' :
                      item.type === 'docs' ? 'bg-cyan-400/20 text-cyan-400' :
                      item.type === 'video' ? 'bg-purple-400/20 text-purple-400' :
                      item.type === 'course' ? 'bg-emerald-400/20 text-emerald-400' :
                      'bg-pink-400/20 text-pink-400'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    {item.type === 'video' || item.type === 'course' ? 'Start Now' : 'Read More'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <div className="bg-slate-900/40 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-bl from-orange-400/20 to-yellow-400/20 rounded-xl flex items-center justify-center text-orange-400">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Blog</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-400 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Visit Blog
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Templates & Downloads */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl flex items-center justify-center text-green-400">
            <Download className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">Templates & Downloads</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all text-center">
              <h3 className="text-xl font-bold mb-3">{template.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{template.description}</p>
              <a
                href={template.link}
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all"
              >
                {template.download ? 'Download' : template.interactive ? 'Use Tool' : 'View'}
                {template.download ? <Download className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Community */}
      <div className="bg-slate-900/40 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-xl flex items-center justify-center text-cyan-400">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Community</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold mb-4">CallWaitingAI User Forum</h3>
              <p className="text-slate-400 mb-6">Ask questions, share tips, and learn from other users.</p>
              <a
                href="/community/forum"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                Join Forum
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-bold mb-4">Private Slack Community</h3>
              <p className="text-slate-400 mb-6">Available for Pro and Business customers.</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                Request Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Support CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-3xl p-8 border border-cyan-400/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@callwaitingai.dev"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-xl"
            >
              Email: support@callwaitingai.dev
            </a>
            <a
              href="tel:02012345678"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-lg border-2 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
            >
              Phone: 020 1234 5678
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
              <a href="/resources" className="hover:text-white transition-colors">Resources</a>
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
