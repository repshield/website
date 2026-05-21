import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap — RepShield',
  description: 'RepShield product release roadmap: Google Maps MVP, Mobile & WhatsApp Layer, and Agency White-Label platform.',
};

const releases = [
  {
    version: '1.0',
    name: '"Google Maps First" Web MVP',
    timeline: 'Weeks 1–4',
    status: 'in-progress',
    focus: 'Web core, standard Google Business Profile API ingestion, and human-in-the-loop AI response drafting.',
    connectors: [
      { name: 'Google Business Profile API', detail: 'Full OAuth, real-time review ingestion webhooks, and live reply posting.' },
      { name: 'Slack Webhooks', detail: 'Barebones internal alerts channel for system testing and early user monitoring.' },
    ],
    deliverables: [
      { done: false, title: 'Centralized Web Feed', detail: 'Single-page Next.js dashboard displaying incoming Google reviews across all active accounts.' },
      { done: false, title: 'AI Draft Engine V1', detail: 'Structured LLM processing layer that analyzes review sentiment and populates an editable text block.' },
      { done: false, title: 'The Fact Library V1', detail: 'A basic configuration text box per location allowing owners to input critical business details.' },
      { done: false, title: 'Stripe Checkout Integration', detail: 'Single-location subscription tier ($49/month) handling basic tenant management and multi-seat billing routing.' },
    ],
    accent: '#06B6D4',
    icon: '🚀',
  },
  {
    version: '2.0',
    name: 'The Mobile & WhatsApp Alert Layer',
    timeline: 'Weeks 5–8',
    status: 'planned',
    focus: 'Low-friction mobile workflows, immediate notification pipelines, and wider platform coverage.',
    connectors: [
      { name: 'Facebook Pages (Meta Graph API)', detail: 'Full Read/Write webhook support.' },
      { name: 'Yelp & TripAdvisor', detail: 'Read-only scraping pipelines coupled with mobile deep-linking handlers.' },
      { name: 'WhatsApp Business API', detail: 'Active notifications and interactive reply triggers via Twilio/Meta.' },
    ],
    deliverables: [
      { done: false, title: 'Flutter Cross-Platform App', detail: 'Lightweight native iOS/Android client engineered solely for fast, on-the-go review approvals.' },
      { done: false, title: 'The 3-Second Swipe Approval', detail: 'Push notifications powered by Firebase Cloud Messaging (FCM). Tapping opens a split-screen view.' },
      { done: false, title: 'WhatsApp "Post-on-the-Go" Bot', detail: 'Reply "1" publishes the AI draft live; replying with custom text overrides the draft.' },
      { done: false, title: 'Yelp Clipboard Bridge', detail: 'Auto-copies AI draft text to clipboard and auto-launches the Yelp app to the target review.' },
    ],
    accent: '#8B5CF6',
    icon: '📱',
  },
  {
    version: '3.0',
    name: 'The Agency & Local SEO Multiplier',
    timeline: 'Weeks 9+',
    status: 'planned',
    focus: 'B2B scaling, white-label deployment mechanics, and automated growth vectors.',
    connectors: [
      { name: 'LinkedIn API', detail: 'Social-sharing pipeline to auto-repurpose stellar 5-star reviews into marketing text posts.' },
    ],
    deliverables: [
      { done: false, title: 'Agency Command Center', detail: 'Multi-tenant parent console allowing agency execs to manage dozens of separate client accounts from one login.' },
      { done: false, title: 'Full White-Label Engine', detail: 'Dynamic domain mapping (reviews.youragency.com), custom branding asset injections, and theme styling.' },
      { done: false, title: 'Local Map Pack Rank Tracker', detail: 'Automated background scraping cron jobs that track local Google Maps keyword positions over time.' },
      { done: false, title: 'NFC / QR Review Kit', detail: 'Dynamic generation of customer-facing QR codes and physical asset templates to maximize review volume.' },
    ],
    accent: '#4F46E5',
    icon: '📈',
  },
];

const statusConfig = {
  'in-progress': { label: 'In Progress', color: '#06B6D4', bg: 'rgba(6,182,212,0.15)' },
  'planned': { label: 'Planned', color: '#8B5CF6', bg: 'rgba(139,92,246,0.15)' },
  'completed': { label: 'Completed', color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
};

export default function RoadmapPage() {
  return (
    <div style={{ backgroundColor: '#090D16' }}>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, #4F46E5 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ backgroundColor: 'rgba(79,70,229,0.1)', borderColor: 'rgba(79,70,229,0.3)', color: '#818CF8' }}>
            2026 Engineering Roadmap
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#F8FAFC' }}>
            Built in <span className="gradient-text">phases</span>,<br />shipped with <span className="gradient-text-teal">purpose</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            The strategy prioritizes hitting the market with a robust Web MVP for Google Maps, followed by mobile automation and agency-scale multipliers.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Overview bar */}
          <div className="glass-card rounded-2xl p-6 mb-16 grid grid-cols-3 gap-4">
            {releases.map((r) => {
              const sc = statusConfig[r.status as keyof typeof statusConfig];
              return (
                <div key={r.version} className="text-center">
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <div className="text-lg font-bold mb-1" style={{ color: '#F8FAFC' }}>Release {r.version}</div>
                  <div className="text-xs mb-2" style={{ color: '#64748B' }}>{r.timeline}</div>
                  <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: sc.bg, color: sc.color }}>
                    {sc.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Release details */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-px hidden sm:block"
              style={{ background: 'linear-gradient(to bottom, #8B5CF6, #4F46E5, transparent)' }} />

            <div className="space-y-16">
              {releases.map((release) => {
                const sc = statusConfig[release.status as keyof typeof statusConfig];
                return (
                  <div key={release.version} className="relative sm:pl-24">
                    {/* Circle on timeline */}
                    <div className="hidden sm:flex absolute left-0 top-0 w-16 h-16 rounded-full items-center justify-center text-2xl border-2"
                      style={{
                        backgroundColor: '#090D16',
                        borderColor: release.accent,
                        boxShadow: `0 0 20px ${release.accent}40`,
                      }}>
                      {release.icon}
                    </div>

                    {/* Card */}
                    <div className="glass-card rounded-2xl p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl sm:hidden">{release.icon}</span>
                            <h2 className="text-2xl font-bold" style={{ color: '#F8FAFC' }}>
                              Release {release.version}
                            </h2>
                            <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: sc.bg, color: sc.color }}>
                              {sc.label}
                            </span>
                          </div>
                          <p className="text-base font-semibold mb-1" style={{ color: release.accent }}>
                            {release.name}
                          </p>
                          <p className="text-xs" style={{ color: '#64748B' }}>⏱ {release.timeline}</p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                        <strong style={{ color: '#F8FAFC' }}>Primary Focus:</strong> {release.focus}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Connectors */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider mb-4"
                            style={{ color: '#64748B' }}>
                            Connectors Included
                          </h4>
                          <div className="space-y-3">
                            {release.connectors.map((c) => (
                              <div key={c.name} className="p-3 rounded-xl" style={{ backgroundColor: '#1E293B' }}>
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: release.accent }} />
                                  <span className="text-sm font-medium" style={{ color: '#F8FAFC' }}>{c.name}</span>
                                </div>
                                <p className="text-xs pl-4" style={{ color: '#64748B' }}>{c.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider mb-4"
                            style={{ color: '#64748B' }}>
                            Core Deliverables
                          </h4>
                          <div className="space-y-3">
                            {release.deliverables.map((d) => (
                              <div key={d.title} className="p-3 rounded-xl" style={{ backgroundColor: '#1E293B' }}>
                                <div className="flex items-start gap-2 mb-1">
                                  <div className="w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0"
                                    style={{ borderColor: release.accent, backgroundColor: d.done ? release.accent : 'transparent' }}>
                                    {d.done && <span className="text-white text-xs">✓</span>}
                                  </div>
                                  <span className="text-sm font-medium" style={{ color: '#F8FAFC' }}>{d.title}</span>
                                </div>
                                <p className="text-xs pl-6" style={{ color: '#64748B' }}>{d.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>Get in early</h2>
          <p className="text-base mb-8" style={{ color: '#94A3B8' }}>
            Join during Release 1.0 and lock in early-adopter pricing before the platform expands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-violet"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #4F46E5)', color: '#F8FAFC' }}>
              View Pricing
            </Link>
            <Link href="/features" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold border"
              style={{ borderColor: 'rgba(139,92,246,0.3)', color: '#94A3B8' }}>
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
