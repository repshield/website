import Link from 'next/link';
import type { Metadata } from 'next';
import PricingCards from './PricingCards';

export const metadata: Metadata = {
  title: 'Pricing — RepShield',
  description:
    'Industry-specific pricing for Indian businesses. Retail Core from ₹2,999/mo, Kinetic from ₹3,999/mo, Prestige from ₹4,999/mo. All prices exclude 18% GST.',
};

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
    q: 'What about GST? Can I claim ITC?',
    a: 'All listed prices exclude 18% GST. RepShield issues a proper GST invoice so B2B clients can claim full Input Tax Credit (ITC), effectively reducing the net operational cost of the subscription.',
  },
  {
    q: 'What is the Agency / white-label option?',
    a: 'The Prestige plan and above include white-label deployment options: custom domain mapping (reviews.youragency.com), branded UI, and a multi-tenant command center for managing client accounts.',
  },
];

const comparisonFeatures = [
  { feature: 'Business Locations', retail: '1', kinetic: 'Up to 3', prestige: 'Up to 5' },
  { feature: 'AI Response Drafts', retail: 'Unlimited', kinetic: 'Unlimited', prestige: 'Unlimited' },
  { feature: 'Google Maps Integration', retail: '✓', kinetic: '✓', prestige: '✓' },
  { feature: 'Brand Personality Matrix', retail: '✓', kinetic: '✓', prestige: '✓' },
  { feature: 'Fact Library', retail: '✓', kinetic: '✓', prestige: '✓' },
  { feature: '"Short & Punchy" Config', retail: '✓', kinetic: '✓', prestige: '✓' },
  { feature: 'Mobile App (iOS/Android)', retail: '—', kinetic: '✓', prestige: '✓' },
  { feature: 'Dispute Resolution Workflow', retail: '—', kinetic: '✓', prestige: '✓' },
  { feature: 'High-Ticket Escalation Alerts', retail: '—', kinetic: '✓', prestige: '✓' },
  { feature: 'Compliance-Aware Engine', retail: '—', kinetic: '—', prestige: '✓' },
  { feature: 'Agency Command Center', retail: '—', kinetic: '—', prestige: '✓' },
  { feature: 'White-Label Ready', retail: '—', kinetic: '—', prestige: '✓' },
  { feature: 'Dedicated Account Manager', retail: '—', kinetic: '—', prestige: '✓' },
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
            Industry-specific, <span className="gradient-text">transparent</span> pricing
          </h1>
          <p className="text-xl mb-4" style={{ color: '#94A3B8' }}>
            Built for Indian businesses. No hidden fees. No per-response charges. Flat monthly pricing matched to your industry.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#22C55E' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22C55E' }} />
            14-day free trial on all plans — no credit card required
          </div>
        </div>
      </section>

      {/* Pricing Cards (client component with billing toggle) */}
      <PricingCards />

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
              {[
                { label: 'Retail Core', color: '#3B82F6' },
                { label: 'Kinetic', color: '#2563EB' },
                { label: 'Prestige', color: '#22C55E' },
              ].map(({ label, color }) => (
                <div key={label} className="text-center">
                  <span className="text-sm font-bold" style={{ color }}>{label}</span>
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
                {[row.retail, row.kinetic, row.prestige].map((val, vi) => (
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
