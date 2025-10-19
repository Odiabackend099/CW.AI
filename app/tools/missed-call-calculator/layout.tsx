export const metadata = {
  title: 'Free Missed Call ROI Calculator | See How Much You\'re Losing',
  description: 'Calculate how much revenue you\'re losing to missed calls. Free tool shows exact cost + actionable solutions. Used by 5,000+ UK businesses.',
  keywords: 'missed call calculator, business opportunity cost, revenue loss calculator, UK business tools',
  openGraph: {
    title: 'Free Missed Call ROI Calculator | See How Much You\'re Losing',
    description: 'Calculate how much revenue you\'re losing to missed calls. Free tool shows exact cost + actionable solutions.',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Schema markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Missed Call ROI Calculator",
            "applicationCategory": "BusinessApplication",
            "description": "Calculate how much revenue you're losing to missed calls. Free tool shows exact cost + actionable solutions.",
            "url": "https://callwaitingai.dev/tools/missed-call-calculator",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "GBP"
            },
            "provider": {
              "@type": "Organization",
              "name": "CallWaitingAI",
              "url": "https://callwaitingai.dev"
            }
          })
        }}
      />
      {children}
    </>
  );
}
