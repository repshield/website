import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — RepShield',
  description: 'Simple, transparent pricing for RepShield. Start at $49/month for a single location. Agency plans available.',
};

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for single-location businesses that want to dominate their Google reviews.',
    badge: null,
    features: [
      '1 business location',
      'Google Business Profile integration',
      'AI draft engine (unlimited responses)',
      'Brand Personality Matrix',
      'Fact Library (1 location)',
      'Web approval dashboard',
      'Slack alert integration',
      'Email support',
    ],
    cta: 'Start Free Trial',
    ctaHref: '#',
    highlighted: false,
    accent: '#3B82F6',
  },
  {
    name: 'Pro',
    price: '$129',
    period: '/month',
    description: 'Multi-location businesses ready for mobile approvals and expanded platform coverage.',
    badge: 'Most Popular',
    features: [
      'Up to 5 locations',
      'Everything in Starter',
      'Flutter mobile app (iOS & Android)',
      '3-Second Swipe Approval',
      'WhatsApp notification bot',
      'Facebook Pages integration',
      'Priority support',
      'Analytics dashboard',
    ],
    cta: 'Start Free Trial',
    ctaHref: '#',
    highlighted: true,
    accent: '#2563EB',
  },
  {
    name: 'Agency',
    price: 'Custom',
    period: '',
    description: 'For agencies managing multiple clients. White-label, custom domains, and full B2B tooling.',
    badge: null,
    features: [
      'Unlimited client accounts',
      'Everything in Pro',
      'Agency Command Center',
      'Full White-Label Engine',
      'Custom domain mapping',
      'Local Map Pack Rank Tracker',
      'NFC / QR Review Kits',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    ctaHref: '#',
    highlighted: false,
    accent: '#22C55E',
  },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes! All plans start with a 14-day free trial. No credit card required to get started.',
  },
  {
    q: 'How does the AI response drafting work?',
    a: 'RepShield uses your Brand Personality Matrix and Fact Library to generate contextually accurate, on-brand responses for every review. You review and approve before anything goes live.',
  },
  {
    q: 'What happens if I want to edit the AI draft?',
    a: 'Every draft is fully editable before publishing. You can tweak a word or rewrite it entirely — RepShield learns from your edits over time.',
  },
  {
    q: 'Can I add more locations later?',
    a: 'Absolutely. You can upgrade your plan or add location add-ons at any time from your billing dashboard.',
  },
  {
    q: 'Do you support platforms other than Google?',
    a: 'Google Maps is live now. Facebook, Yelp, TripAdvisor, and WhatsApp are coming in Release 2.0. LinkedIn in Release 3.0.',
  },
  {
    q: 'What is the Agency white-label option?',
    a: 'Agency plans include full white-label deployment: custom domain mapping (reviews.youragency.com), branded UI, and a multi-tenant command center for managing client accounts.',
  },
];

const comparisonFeatures = [
  { feature: 'Business Locations', starter: '1', pro: 'Up to 5', agency: 'Unlimited' },
  { feature: 'AI Response Drafts', starter: 'Unlimited', pro: 'Unlimited', agency: 'Unlimited' },
  { feature: 'Google Maps Integration', starter: '✓', pro: '✓', agency: '✓' },
  { feature: 'Brand Personality Matrix', starter: '✓', pro: '✓', agency: '✓' },
  { feature: 'Fact Library', starter: '✓', pro: '✓', agency: '✓' },
  { feature: 'Mobile App (iOS/Android)', starter: '—', pro: '✓', agency: '✓' },
  { feature: 'WhatsApp Bot', starter: '—', pro: '✓', agency: '✓' },
  { feature: 'Facebook Integration', starter: '—', pro: '✓', agency: '✓' },
  { feature: 'Agency Command Center', starter: '—', pro: '—', agency: '✓' },
  { feature: 'White-Label Engine', starter: '—', pro: '—', agency: '✓' },
  { feature: 'SEO Rank Tracker', starter: '—', pro: '—', agency: '✓' },
  { feature: 'NFC/QR Review Kits', starter: '—', pro: '—', agency: '✓' },
];

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: '#060913' }}>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, #2563EB 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#F8FAFC' }}>
            Simple, <span className="gradient-text">transparent</span> pricing
          </h1>
          <p className="text-xl mb-4" style={{ color: '#94A3B8' }}>
            No hidden fees. No per-response charges. Flat monthly pricing that scales with your business.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#22C55E' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22C55E' }} />
            14-day free trial on all plans — no credit card required
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${plan.highlighted ? 'shield-glow' : ''}`}
                style={{
                  backgroundColor: plan.highlighted ? 'rgba(19,27,46,0.9)' : '#0F1626',
                  border: plan.highlighted
                    ? '1px solid rgba(37,99,235,0.5)'
                    : '1px solid rgba(37,99,235,0.15)',
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-1" style={{ color: plan.accent }}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold" style={{ color: '#F8FAFC' }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: '#64748B' }}>{plan.period}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: '#94A3B8' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5"
                        style={{ backgroundColor: `${plan.accent}20`, color: plan.accent }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                  style={plan.highlighted
                    ? { background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }
                    : { backgroundColor: '#1B253B', color: '#94A3B8', border: '1px solid rgba(37,99,235,0.2)' }
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: '#F8FAFC' }}>
            Full feature comparison
          </h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-4 border-b" style={{ borderColor: 'rgba(37,99,235,0.15)' }}>
              <div />
              {['Starter', 'Pro', 'Agency'].map((name, i) => (
                <div key={name} className="text-center">
                  <span className={`text-sm font-bold`}
                    style={{ color: i === 1 ? '#2563EB' : i === 2 ? '#22C55E' : '#3B82F6' }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
            {comparisonFeatures.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 gap-4 px-4 py-3"
                style={{ backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(27,37,59,0.3)' }}
              >
                <div className="text-sm" style={{ color: '#94A3B8' }}>{row.feature}</div>
                {[row.starter, row.pro, row.agency].map((val, vi) => (
                  <div key={vi} className="text-center text-sm"
                    style={{ color: val === '✓' ? '#22C55E' : val === '—' ? '#1B253B' : '#F8FAFC' }}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#F8FAFC' }}>
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-6">
                <h3 className="text-base font-semibold mb-2" style={{ color: '#F8FAFC' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
            Still have questions?
          </h2>
          <p className="text-base mb-8" style={{ color: '#94A3B8' }}>
            Talk to our team about which plan fits your business best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@repshield.live"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shield-glow"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}>
              Contact Sales
            </a>
            <Link href="/features"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border transition-colors"
              style={{ borderColor: 'rgba(37,99,235,0.3)', color: '#94A3B8' }}>
              View All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
