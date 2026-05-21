import Link from 'next/link';

const stats = [
  { value: '< 3s', label: 'Avg. Approval Time' },
  { value: 'Google', label: 'Live Now' },
  { value: '98%', label: 'Response Rate' },
  { value: '10+', label: 'Hours Saved Weekly' },
];

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
        <circle cx="22" cy="18" r="3.5" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
        <path d="M15 28c0-3.9 3.1-7 7-7h2.5" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M27 23l3 3-3 3" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Human-in-the-Loop AI',
    description: 'Our AI drafts the perfect response, you approve in under 3 seconds. Maximum brand control with minimal effort.',
    accent: '#22d3ee',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" strokeWidth="1.5"/>
        <rect x="16" y="17" width="12" height="2" rx="1" fill="#8b5cf6" opacity={0.4}/>
        <rect x="16" y="21" width="9" height="2" rx="1" fill="#8b5cf6" opacity={0.7}/>
        <rect x="16" y="25" width="11" height="2" rx="1" fill="#8b5cf6"/>
        <circle cx="29" cy="17" r="2.5" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="29" y1="15.5" x2="29" y2="18.5" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="27.5" y1="17" x2="30.5" y2="17" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Brand Personality Matrix',
    description: 'Set your tone, length, and wit via simple sliders. No prompt engineering needed — just drag and go.',
    accent: '#8b5cf6',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1.5"/>
        <rect x="16" y="15" width="12" height="14" rx="2" stroke="#10b981" strokeWidth="1.5" fill="none"/>
        <path d="M19 19h6M19 22h6M19 25h4" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="4" fill="#060913" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M26.5 28l1 1 2-2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Fact Library',
    description: 'Feed RepShield your business truths — pricing, hours, contacts. Zero hallucinations, 100% accurate responses.',
    accent: '#10b981',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1.5"/>
        <path d="M22 15v7l4.5 2.5" stroke="#f59e0b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="22" r="6" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="2.5 2"/>
      </svg>
    ),
    title: '3-Second Swipe Approval',
    description: 'Push notifications with split-screen review. Swipe right to publish, swipe left to edit. Done from your phone.',
    accent: '#f59e0b',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(59,158,255,0.08)" stroke="#3b9eff" strokeWidth="1.5"/>
        <rect x="18" y="15" width="8" height="6" rx="1.5" stroke="#3b9eff" strokeWidth="1.5" fill="none"/>
        <rect x="13" y="23" width="7" height="5" rx="1.5" stroke="#3b9eff" strokeWidth="1.2" fill="none"/>
        <rect x="24" y="23" width="7" height="5" rx="1.5" stroke="#3b9eff" strokeWidth="1.2" fill="none"/>
        <path d="M22 21v3M17 23V22h10v1" stroke="#3b9eff" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Agency Command Center',
    description: 'Manage dozens of client accounts from one dashboard. White-label ready with custom domain mapping.',
    accent: '#3b9eff',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M14 28l5-5 4 3 5-7" stroke="#22d3ee" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="19" r="2" fill="#22d3ee"/>
      </svg>
    ),
    title: 'Local SEO Rank Tracker',
    description: 'Automated tracking of your Google Maps keyword positions over time. Prove ROI with hard data.',
    accent: '#22d3ee',
  },
];

const platforms = [
  {
    name: 'Google Maps', icon: (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(59,158,255,0.08)" stroke="#3b9eff" strokeWidth="1.5"/>
        <path d="M22 13c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" stroke="#3b9eff" strokeWidth="1.5" fill="none"/>
        <circle cx="22" cy="19" r="2" fill="#3b9eff"/>
      </svg>
    )
  },
  {
    name: 'Facebook', icon: (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M24 14h-2c-2.2 0-4 1.8-4 4v2h-2v3h2v7h3v-7h2.5l.5-3H21v-2c0-.6.4-1 1-1h2v-3z" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: 'Yelp', icon: (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(239,68,68,0.08)" stroke="#ef4444" strokeWidth="1.5"/>
        <path d="M22 13l1.5 4.5H28l-3.6 2.7 1.4 4.4-3.8-2.8-3.8 2.8 1.4-4.4L16 17.5h4.5z" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: 'TripAdvisor', icon: (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M22 19c-5 0-9 2-9 4.5S17 28 22 28s9-2 9-4.5S27 19 22 19z" stroke="#10b981" strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="23.5" r="2" fill="none" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="26" cy="23.5" r="2" fill="none" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="18" cy="23.5" r=".8" fill="#10b981"/>
        <circle cx="26" cy="23.5" r=".8" fill="#10b981"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp', icon: (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M22 14c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 3.9L14 30l4.2-1.1c1.1.6 2.4.9 3.8.9 4.4 0 8-3.6 8-8s-3.6-8-8-8z" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M19 20c.2.5.5 1 .9 1.5.9 1 2 1.8 3.3 2.1l.5.1 1.3-1.3c.1-.1.3-.2.5-.1l2.5 1.1c.2.1.3.3.2.5-.3 1.3-1.5 2.1-2.8 2-3.2-.5-5.7-3-6.2-6.2-.1-1.3.7-2.5 2-2.8.2 0 .4.1.5.2l1.1 2.5c.1.2 0 .4-.1.5L21.3 21l-.3-.3" stroke="#10b981" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>
    )
  },
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
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, #3B82F6 50%, transparent 70%)' }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
            style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', borderColor: 'rgba(37, 99, 235, 0.3)', color: '#2563EB' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#2563EB' }} />
            Now Live — Google Maps First
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight" style={{ color: '#F8FAFC' }}>
            <span className="gradient-text">Shield</span> Your Brand&apos;s{' '}
            <span className="gradient-text">Reputation</span>.{' '}
            On Autopilot.
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: '#94A3B8' }}>
            One bad review can tank your ratings and drive customers to competitors.
            RepShield acts as a 24/7 barrier — instantly drafting flawless, fact-checked replies
            so your brand never takes a{' '}
            <span style={{ color: '#22C55E' }} className="font-semibold">public hit</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#waitlist"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 shield-glow"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
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
          <div className="glass-card rounded-2xl p-6 max-w-4xl mx-auto text-left">
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
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-1 gradient-text">{stat.value}</div>
              <div className="text-sm" style={{ color: '#64748B' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
              Everything you need to <span className="gradient-text">dominate reviews</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
              A complete reputation management stack — from AI drafting to agency-scale white-labeling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200">
                <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.accent}20` }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#F8FAFC' }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/features" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#2563EB' }}>
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
              Up and running in <span className="gradient-text-secure">minutes</span>
            </h2>
            <p className="text-lg" style={{ color: '#94A3B8' }}>No complex setup. No developer required. Just connect and go.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                  style={{
                    background: i === 1 ? 'linear-gradient(135deg, #2563EB, #3B82F6)' : '#0F1626',
                    color: i === 1 ? '#F8FAFC' : '#2563EB',
                    border: i === 1 ? 'none' : '1px solid rgba(37, 99, 235, 0.3)',
                  }}>
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#F8FAFC' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>Works with every platform you care about</h2>
          <p className="text-base mb-12" style={{ color: '#94A3B8' }}>Google Maps today. Facebook, Yelp, TripAdvisor & WhatsApp in Release 2.0.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center gap-2 px-5 py-3 rounded-xl border"
                style={{ backgroundColor: '#0F1626', borderColor: 'rgba(37, 99, 235, 0.2)', color: '#94A3B8' }}>
                <span>{p.icon}</span>
                <span className="text-sm font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
        <div className="max-w-2xl mx-auto text-center">
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
          <form
            action={`mailto:hello@repshield.live`}
            method="get"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="subject"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
              style={{
                backgroundColor: '#0F1626',
                border: '1px solid rgba(37,99,235,0.3)',
                color: '#F8FAFC',
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shrink-0"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
            >
              Request Access
            </button>
          </form>
          <p className="text-xs mt-4" style={{ color: '#475569' }}>
            14-day free trial when onboarded. No credit card required.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
                <Link href="#waitlist" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-all shield-glow"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}>
                  Get Started — from ₹2,999/mo
                </Link>
                <Link href="/features" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base border transition-colors"
                  style={{ borderColor: 'rgba(37,99,235,0.4)', color: '#94A3B8' }}>
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
