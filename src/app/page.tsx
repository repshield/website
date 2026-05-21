import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import CountUp from '@/components/CountUp';
import WaitlistForm from '@/components/WaitlistForm';

const stats = [
  { value: '< 3s', label: 'Avg. Approval Time' },
  { value: 'Google', label: 'Live Now' },
  { value: '98%', label: 'Response Rate' },
  { value: '10+', label: 'Hours Saved Weekly' },
];

const features = [
  {
    icon: '/icons/human-in-loop.svg',
    title: 'Human-in-the-Loop AI',
    description: 'Our AI drafts the perfect response, you approve in under 3 seconds. Maximum brand control with minimal effort.',
    accent: '#22d3ee',
  },
  {
    icon: '/icons/brand-tone.svg',
    title: 'Brand Personality Matrix',
    description: 'Set your tone, length, and wit via simple sliders. No prompt engineering needed — just drag and go.',
    accent: '#8b5cf6',
  },
  {
    icon: '/icons/fact-library.svg',
    title: 'Fact Library',
    description: 'Feed RepShield your business truths — pricing, hours, contacts. Zero hallucinations, 100% accurate responses.',
    accent: '#10b981',
  },
  {
    icon: '/icons/3sec-approve.svg',
    title: '3-Second Swipe Approval',
    description: 'Push notifications with split-screen review. Swipe right to publish, swipe left to edit. Done from your phone.',
    accent: '#f59e0b',
  },
  {
    icon: '/icons/agency-hub.svg',
    title: 'Agency Command Center',
    description: 'Manage dozens of client accounts from one dashboard. White-label ready with custom domain mapping.',
    accent: '#3b9eff',
  },
  {
    icon: '/icons/seo-tracker.svg',
    title: 'Local SEO Rank Tracker',
    description: 'Automated tracking of your Google Maps keyword positions over time. Prove ROI with hard data.',
    accent: '#22d3ee',
  },
];

const platforms = [
  { name: 'Google Maps', icon: '/icons/google-maps.svg' },
  { name: 'Facebook', icon: '/icons/facebook.svg' },
  { name: 'Yelp', icon: '/icons/yelp.svg' },
  { name: 'TripAdvisor', icon: '/icons/tripadvisor.svg' },
  { name: 'WhatsApp', icon: '/icons/whatsapp.svg' },
];

const steps = [
  {
    step: '01',
    title: 'Connect Your Profiles',
    description: 'OAuth-based integration with Google Business Profile and other platforms in under 2 minutes.',
  },
  {
    step: '02',
    title: 'AI Drafts the Response',
    description: 'RepShield analyzes sentiment, pulls from your Fact Library, and crafts a brand-perfect reply.',
  },
  {
    step: '03',
    title: 'Approve & Publish',
    description: 'Review the draft on web or mobile. One tap to publish live. Done in under 3 seconds.',
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#060913' }}>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Background orbs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] rounded-full blur-3xl pointer-events-none orb-drift"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, #3B82F6 50%, transparent 70%)', opacity: 0.1 }}
        />
        <div
          className="absolute top-48 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none orb-drift-2"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', opacity: 0.06 }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="h-anim h-d1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', borderColor: 'rgba(37, 99, 235, 0.3)', color: '#2563EB' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#2563EB' }} />
            Now Live — Google Maps First
          </div>
          <h1 className="h-anim h-d2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight" style={{ color: '#F8FAFC' }}>
            <span className="gradient-text-animated">Shield</span> Your Brand&apos;s{' '}
            <span className="gradient-text-animated">Reputation</span>.{' '}
            On Autopilot.
          </h1>
          <p className="h-anim h-d3 text-xl sm:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: '#94A3B8' }}>
            One bad review can tank your ratings and drive customers to competitors.
            RepShield acts as a 24/7 barrier — instantly drafting flawless, fact-checked replies
            so your brand never takes a{' '}
            <span style={{ color: '#22C55E' }} className="font-semibold">public hit</span>.
          </p>
          <div className="h-anim h-d4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#waitlist"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base shield-glow btn-shimmer"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC', transition: 'opacity 0.2s ease, transform 0.2s ease' }}
            >
              Start Free Trial — No Credit Card
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 border flex items-center justify-center gap-2"
              style={{ backgroundColor: '#0F1626', borderColor: 'rgba(37, 99, 235, 0.3)', color: '#94A3B8' }}
            >
              See All Features →
            </Link>
          </div>

          {/* Mock Dashboard Preview */}
          <div className="h-anim h-d5 floating glass-card rounded-2xl p-6 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10B981' }} />
              <span className="ml-2 text-xs font-mono truncate" style={{ color: '#64748B' }}>repshield.live/dashboard</span>
            </div>
            <div className="space-y-3">
              {[
                { stars: 5, name: 'Sarah M.', time: '2m ago', text: 'Absolutely amazing service! The team went above and beyond...', published: true, draft: "Thank you so much, Sarah! We're thrilled to hear..." },
                { stars: 1, name: 'James K.', time: '15m ago', text: 'Waited 45 minutes and the food was cold when it arrived...', published: false, draft: 'We sincerely apologize for your experience, James...' },
                { stars: 4, name: 'Maria L.', time: '1h ago', text: 'Great atmosphere and friendly staff. Will definitely return...', published: false, draft: 'Thank you for the kind words, Maria! We look forward...' },
              ].map((review, i) => (
                <div key={i} className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-start gap-4" style={{ backgroundColor: '#1B253B' }}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm" style={{ color: '#F8FAFC' }}>{review.name}</span>
                      <span className="text-xs" style={{ color: '#64748B' }}>{review.time}</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <span key={s} className="text-xs" style={{ color: s < review.stars ? '#F59E0B' : '#1B253B' }}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm truncate" style={{ color: '#94A3B8' }}>{review.text}</p>
                    <div className="mt-2 flex items-start gap-2">
                      <span className="text-xs rounded px-2 py-0.5 font-medium mt-0.5 shrink-0" style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#2563EB' }}>AI Draft</span>
                      <p className="text-xs italic truncate" style={{ color: '#64748B' }}>{review.draft}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {review.published ? (
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}>✓ Published</span>
                    ) : (
                      <>
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)', color: '#2563EB' }}>✓ Approve</button>
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: 'rgba(27, 37, 59, 0.8)', color: '#64748B' }}>Edit</button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y" style={{ borderColor: 'rgba(37, 99, 235, 0.1)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <CountUp key={stat.label} value={stat.value} label={stat.label} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
              Everything you need to <span className="gradient-text">dominate reviews</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              A complete reputation management stack — from AI drafting to agency-scale white-labeling.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 80} direction="up">
                <div className="glass-card rounded-2xl p-6 h-full" style={{ cursor: 'default' }}>
                  <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${feature.accent}20` }}>
                    <img src={feature.icon} width={32} height={32} alt="" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#F8FAFC' }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{feature.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="text-center mt-10" delay={100}>
            <Link href="/features" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: '#2563EB' }}>
              Explore All Features →
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
              Up and running in <span className="gradient-text-secure">minutes</span>
            </h2>
            <p className="text-lg" style={{ color: '#94A3B8' }}>No complex setup. No developer required. Just connect and go.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 120} direction="up">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                    style={{
                      background: i === 1 ? 'linear-gradient(135deg, #2563EB, #3B82F6)' : '#0F1626',
                      color: i === 1 ? '#F8FAFC' : '#2563EB',
                      border: i === 1 ? 'none' : '1px solid rgba(37, 99, 235, 0.3)',
                      transition: 'box-shadow 0.3s ease',
                    }}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#F8FAFC' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>Works with every platform you care about</h2>
            <p className="text-base mb-12" style={{ color: '#94A3B8' }}>Google Maps today. Facebook, Yelp, TripAdvisor & WhatsApp in Release 2.0.</p>
          </AnimateIn>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 80} direction="scale">
                <div className="flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-200"
                  style={{ backgroundColor: '#0F1626', borderColor: 'rgba(37, 99, 235, 0.2)', color: '#94A3B8' }}>
                  <img src={p.icon} width={24} height={24} alt="" />
                  <span className="text-sm font-medium">{p.name}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
        <AnimateIn className="max-w-2xl mx-auto text-center" direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.3)', color: '#2563EB' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#2563EB' }} />
            Limited spots available
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
            Get early access
          </h2>
          <p className="text-base mb-8" style={{ color: '#94A3B8' }}>
            We&apos;re onboarding businesses in batches. Drop your email and we&apos;ll reach out within 48 hours.
          </p>
          <WaitlistForm />
          <p className="text-xs mt-4" style={{ color: '#475569' }}>
            14-day free trial when onboarded. No credit card required.
          </p>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <AnimateIn className="max-w-4xl mx-auto" direction="scale">
          <div className="rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(59,130,246,0.2) 100%)', border: '1px solid rgba(37,99,235,0.3)' }}>
            <div className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, #2563EB 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
                Start protecting your <span className="gradient-text">reputation</span> today
              </h2>
              <p className="text-lg mb-8" style={{ color: '#94A3B8' }}>
                Join businesses who respond to every review without lifting a finger. Start with a 14-day free trial.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#waitlist" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base shield-glow btn-shimmer"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC', transition: 'opacity 0.2s, transform 0.2s' }}>
                  Get Started — from ₹2,999/mo
                </Link>
                <Link href="/features" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base border transition-colors"
                  style={{ borderColor: 'rgba(37,99,235,0.4)', color: '#94A3B8' }}>
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
