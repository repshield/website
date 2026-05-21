'use client';

import Link from 'next/link';
import { useState } from 'react';

const plans = [
  {
    id: 'retail_and_food',
    name: 'RepShield Retail Core',
    tagline: 'Cafés, Restaurants & Retail Stores',
    monthly: 2999,
    annual: 28788,
    effectiveMonthly: 2399,
    badge: null,
    description:
      'For high-volume review environments. Handles daily menu changes and seasonal store hours accurately — no hallucinations.',
    features: [
      '1 business location',
      'Google Business Profile integration',
      'AI draft engine (unlimited responses)',
      '"Short & Punchy" response style engine',
      'Fact Library (menu & hours auto-sync)',
      'Brand Personality Matrix',
      'Web approval dashboard',
      'Slack & WhatsApp alerts',
    ],
    roi: { acv: '₹500 – ₹1,500 per visit', breakEven: '2–3 customers/month' },
    cta: 'Start Free Trial',
    ctaHref: '#',
    highlighted: false,
    accent: '#3B82F6',
  },
  {
    id: 'automotive_and_repair',
    name: 'RepShield Kinetic',
    tagline: 'Auto Service, Detailing & EV Dealerships',
    monthly: 3999,
    annual: 38388,
    effectiveMonthly: 3199,
    badge: 'Most Popular',
    description:
      'Turns high-ticket disputes into private retention opportunities before reputation damage occurs.',
    features: [
      'Up to 3 business locations',
      'Everything in Retail Core',
      'Vehicle & complaint cross-referencing',
      'Private dispute resolution workflow',
      'High-ticket escalation alerts',
      'Mobile app (iOS & Android)',
      '3-Second Swipe Approval',
      'Priority support',
    ],
    roi: { acv: '₹5,000 – ₹25,000 per service', breakEven: '<1 vehicle service/month' },
    cta: 'Start Free Trial',
    ctaHref: '#',
    highlighted: true,
    accent: '#2563EB',
  },
  {
    id: 'professional_services',
    name: 'RepShield Prestige',
    tagline: 'Law Firms, Clinics & Consultancies',
    monthly: 4999,
    annual: 47988,
    effectiveMonthly: 3999,
    badge: null,
    description:
      'For high-value client relationships where a single review influences a ₹1L+ engagement.',
    features: [
      'Up to 5 business locations',
      'Everything in Kinetic',
      'Compliance-aware response engine',
      'Confidential inquiry handling',
      'Client retention workflows',
      'Agency Command Center',
      'White-label ready',
      'Dedicated account manager',
    ],
    roi: { acv: '₹15,000 – ₹10,00,000+ per retainer', breakEven: '1 client retained/month' },
    cta: 'Contact Sales',
    ctaHref: 'mailto:hello@repshield.live',
    highlighted: false,
    accent: '#22C55E',
  },
];

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Billing Toggle */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
          <span className="text-sm font-medium" style={{ color: annual ? '#64748B' : '#F8FAFC' }}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle annual billing"
            className="relative w-12 h-6 rounded-full transition-colors focus:outline-none"
            style={{ backgroundColor: annual ? '#2563EB' : '#1B253B', border: '1px solid rgba(37,99,235,0.3)' }}
          >
            <span
              className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200"
              style={{ left: annual ? '1.5rem' : '0.25rem' }}
            />
          </button>
          <span className="text-sm font-medium" style={{ color: annual ? '#F8FAFC' : '#64748B' }}>
            Annual{' '}
            <span
              className="ml-1 px-2 py-0.5 rounded-full text-xs font-bold"
              style={{ backgroundColor: 'rgba(34,197,94,0.15)', color: '#22C55E' }}
            >
              Save 20%
            </span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => {
              const displayPrice = annual ? plan.effectiveMonthly : plan.monthly;
              return (
                <div
                  key={plan.id}
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
                      <span
                        className="px-4 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                          color: '#F8FAFC',
                        }}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-5">
                    <h3 className="text-lg font-bold mb-0.5" style={{ color: plan.accent }}>
                      {plan.name}
                    </h3>
                    <p className="text-xs mb-3" style={{ color: '#64748B' }}>
                      {plan.tagline}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-xl font-semibold" style={{ color: '#94A3B8' }}>₹</span>
                      <span className="text-4xl font-bold" style={{ color: '#F8FAFC' }}>
                        {displayPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm" style={{ color: '#64748B' }}>/mo</span>
                    </div>
                    {annual && (
                      <p className="text-xs mb-2" style={{ color: '#64748B' }}>
                        ₹{plan.annual.toLocaleString('en-IN')} billed annually
                      </p>
                    )}
                    <p className="text-sm leading-relaxed mt-2" style={{ color: '#94A3B8' }}>
                      {plan.description}
                    </p>
                  </div>

                  {/* ROI Indicator */}
                  <div
                    className="mb-5 rounded-lg p-3"
                    style={{
                      backgroundColor: `${plan.accent}10`,
                      border: `1px solid ${plan.accent}20`,
                    }}
                  >
                    <p className="text-xs font-semibold mb-1" style={{ color: plan.accent }}>
                      Break-even
                    </p>
                    <p className="text-xs" style={{ color: '#94A3B8' }}>
                      {plan.roi.breakEven}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#64748B' }}>
                      Avg. customer value: {plan.roi.acv}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: '#94A3B8' }}
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5"
                          style={{ backgroundColor: `${plan.accent}20`, color: plan.accent }}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaHref}
                    className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                    style={
                      plan.highlighted
                        ? {
                            background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                            color: '#F8FAFC',
                          }
                        : {
                            backgroundColor: '#1B253B',
                            color: '#94A3B8',
                            border: '1px solid rgba(37,99,235,0.2)',
                          }
                    }
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* GST Note */}
          <p className="text-center text-xs mt-6" style={{ color: '#475569' }}>
            All prices exclude 18% GST. B2B clients can claim full Input Tax Credit (ITC),
            reducing net operational cost.
          </p>
        </div>
      </section>
    </>
  );
}
