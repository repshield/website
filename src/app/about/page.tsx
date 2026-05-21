import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — RepShield',
  description: 'RepShield is an AI-powered reputation management platform built for Indian businesses. Learn about our mission and the team behind it.',
};

const values = [
  {
    icon: '🎯',
    title: 'Human-first AI',
    description: 'We believe AI should reduce your workload, not replace your judgement. Every response goes through you before it goes live.',
  },
  {
    icon: '🇮🇳',
    title: 'Built for India',
    description: 'From GST-compliant invoicing to rupee pricing and local business categories — every decision is made with the Indian market in mind.',
  },
  {
    icon: '🔒',
    title: 'Trust is the product',
    description: 'You are trusting us with your brand voice. We take that seriously. Zero hallucinations, audit trails, and full control — always.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#060913' }}>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, #2563EB 0%, transparent 60%)' }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#F8FAFC' }}>
            About <span className="gradient-text">Reputation Shield</span>
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: '#94A3B8' }}>
            RepShield was built from a simple observation: Indian business owners spend hours every
            week writing review responses — or worse, they don&apos;t respond at all. Both outcomes
            hurt their Google Maps ranking and their reputation.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#F8FAFC' }}>Our Mission</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
              We&apos;re building the operating system for online reputation management in India — starting
              with Google reviews and expanding to every platform your customers use to talk about
              your business.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
              Our AI is trained to understand the nuance of your brand voice, the specifics of your
              business, and the cultural context of Indian customer relationships. The result is
              responses that sound like <em>you</em> — because you approve every single one before
              it goes live.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#F8FAFC' }}>
            What we believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-6">
                <div
                  className="text-3xl mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(37,99,235,0.15)' }}
                >
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#F8FAFC' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#22C55E' }}
              />
              <span className="text-xs font-semibold" style={{ color: '#22C55E' }}>
                Currently in Beta
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#F8FAFC' }}>
              Where we are today
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
              RepShield is currently in private beta with a focused set of early customers across
              retail, automotive, and professional services in India. Google Business Profile
              integration is live. We&apos;re actively onboarding new businesses — reach out to get early
              access.
            </p>
            <a
              href="mailto:hello@repshield.live"
              className="inline-block text-sm font-semibold"
              style={{ color: '#2563EB' }}
            >
              hello@repshield.live →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
            Ready to protect your reputation?
          </h2>
          <p className="text-base mb-8" style={{ color: '#94A3B8' }}>
            Join our beta and be among the first businesses to put review management on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shield-glow"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
            >
              View Pricing
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border transition-colors"
              style={{ borderColor: 'rgba(37,99,235,0.3)', color: '#94A3B8' }}
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
