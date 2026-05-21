import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — RepShield',
  description: 'Explore all RepShield features: Human-in-the-loop AI, Brand Personality Matrix, Fact Library, multi-platform support, and agency tools.',
};

const coreModules = [
  {
    id: '01',
    icon: '🧠',
    title: 'Human-in-the-Loop AI Engine',
    tagline: 'Maximum control. Minimum effort.',
    description:
      'RepShield is designed to maximize business control while keeping manual intervention under 3 seconds per review. The AI analyzes sentiment, context, and your brand guidelines to produce a near-perfect draft — you just approve.',
    bullets: [
      'Real-time sentiment analysis on every incoming review',
      'Contextual response generation using your business data',
      'Editable drafts with inline AI suggestions',
      'Review history and audit trail for every published response',
    ],
    accent: '#8B5CF6',
  },
  {
    id: '02',
    icon: '🎛️',
    title: 'Brand Personality Matrix',
    tagline: 'Your voice. Your rules.',
    description:
      'No complex prompt engineering for non-technical business owners. Configuration values are set via intuitive sliders on the frontend and mapped directly into the AI system prompt. Your brand voice stays consistent across every single response.',
    bullets: [
      'Tone Matrix: Casual & Friendly ↔ Formal & Elegant',
      'Length Matrix: Short & Punchy ↔ Detailed & Thorough',
      'Witty Matrix: Strictly Professional ↔ Lighthearted & Humorous',
      'Per-location brand profiles for multi-location businesses',
    ],
    accent: '#4F46E5',
  },
  {
    id: '03',
    icon: '📚',
    title: 'The Fact Library',
    tagline: 'Zero hallucinations. 100% accuracy.',
    description:
      'To completely prevent AI hallucinations — no imaginary pricing, no made-up services — every response is grounded by a localized key-value store. Before hitting the LLM, the system pulls location metadata and injects verified business truths into the runtime context.',
    bullets: [
      'Business Name, Key Contacts, Manager details',
      'Amenities: Free parking, disabled access, WiFi',
      'Hard restrictions: "We never offer refunds over public threads"',
      'Custom facts: Hours, seasonal offerings, promotions',
    ],
    accent: '#8B5CF6',
    codeBlock: `Contextual Business Truths:
- Business Name: [Location Name]
- Key Contacts: [Manager / Support Email]
- Amenities: [Free Valet Parking, Disabled Access]
- Hard Restrictions: [No public refund discussions]`,
  },
];

const platformFeatures = [
  {
    release: '1.0',
    status: 'live',
    platforms: [
      { name: 'Google Business Profile', icon: '🗺️', detail: 'Full OAuth, real-time webhooks, live reply posting' },
      { name: 'Slack Webhooks', icon: '💬', detail: 'Internal alerts channel for monitoring and testing' },
    ],
  },
  {
    release: '2.0',
    status: 'coming',
    platforms: [
      { name: 'Facebook Pages', icon: '👥', detail: 'Full Read/Write via Meta Graph API' },
      { name: 'Yelp & TripAdvisor', icon: '⭐', detail: 'Read-only pipelines with mobile deep-linking' },
      { name: 'WhatsApp Business', icon: '📱', detail: 'Active notifications & reply triggers via Twilio/Meta' },
    ],
  },
  {
    release: '3.0',
    status: 'planned',
    platforms: [
      { name: 'LinkedIn', icon: '💼', detail: 'Auto-repurpose 5-star reviews into social posts' },
    ],
  },
];

const mobileFeatures = [
  {
    icon: '📲',
    title: '3-Second Swipe Approval',
    description: 'Push notifications via Firebase Cloud Messaging. Tap the alert, see a split-screen view, swipe right to publish the AI draft instantly.',
    accent: '#06B6D4',
  },
  {
    icon: '💬',
    title: 'WhatsApp Post-on-the-Go Bot',
    description: 'The system texts you the review and draft. Reply "1" to publish live. Reply with custom text to override the draft. Dead simple.',
    accent: '#06B6D4',
  },
  {
    icon: '📋',
    title: 'Yelp Clipboard Bridge',
    description: 'One tap auto-copies the AI draft to your clipboard and launches the Yelp app directly to the target review. No switching required.',
    accent: '#8B5CF6',
  },
  {
    icon: '🔔',
    title: 'Flutter Cross-Platform App',
    description: 'Lightweight native iOS/Android client engineered solely for fast, on-the-go review approvals. Minimal UI, maximum speed.',
    accent: '#4F46E5',
  },
];

const agencyFeatures = [
  {
    icon: '🏢',
    title: 'Agency Command Center',
    description: 'Multi-tenant parent console for agency account executives. Manage and toggle between dozens of separate client accounts from one login.',
  },
  {
    icon: '🏷️',
    title: 'Full White-Label Engine',
    description: 'Dynamic domain mapping (reviews.youragency.com), custom branding asset injections, and theme styling configurations.',
  },
  {
    icon: '📍',
    title: 'Local Map Pack Rank Tracker',
    description: 'Automated cron jobs that track and log local Google Maps keyword positions over time. Prove RepShield\'s ROI with hard numbers.',
  },
  {
    icon: '📱',
    title: 'NFC / QR Review Kit',
    description: 'Dynamic generation of customer-facing QR codes and physical asset templates designed to maximize review acquisition volume.',
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ backgroundColor: '#090D16' }}>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, #8B5CF6 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ backgroundColor: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.3)', color: '#8B5CF6' }}>
            Technical Specification
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#F8FAFC' }}>
            Built for <span className="gradient-text">speed</span> and <span className="gradient-text">accuracy</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            Every feature in RepShield is engineered around one principle: keep the human in control while making their job take less than 3 seconds.
          </p>
        </div>
      </section>

      {/* Core AI Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#F8FAFC' }}>
            Core AI Modules
          </h2>
          <div className="space-y-12">
            {coreModules.map((mod, i) => (
              <div key={mod.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: `${mod.accent}20` }}>
                      {mod.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-1 rounded"
                      style={{ backgroundColor: `${mod.accent}15`, color: mod.accent }}>
                      Module {mod.id}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#F8FAFC' }}>{mod.title}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: mod.accent }}>{mod.tagline}</p>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#94A3B8' }}>{mod.description}</p>
                  <ul className="space-y-2">
                    {mod.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm" style={{ color: '#94A3B8' }}>
                        <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-xs"
                          style={{ backgroundColor: `${mod.accent}20`, color: mod.accent }}>✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="glass-card rounded-2xl p-6">
                    {mod.codeBlock ? (
                      <pre className="text-xs font-mono leading-relaxed whitespace-pre-wrap" style={{ color: '#06B6D4' }}>
                        {mod.codeBlock}
                      </pre>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: mod.accent }} />
                          <span className="text-xs font-mono" style={{ color: '#64748B' }}>{mod.title}</span>
                        </div>
                        {mod.bullets.map((bullet, bi) => (
                          <div key={bi} className="flex items-center gap-3 p-3 rounded-lg"
                            style={{ backgroundColor: '#1E293B' }}>
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                              style={{ background: `linear-gradient(135deg, ${mod.accent}, #4F46E5)`, color: '#F8FAFC' }}>
                              {bi + 1}
                            </div>
                            <span className="text-xs" style={{ color: '#94A3B8' }}>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Connectors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1422' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>Platform Connectors</h2>
            <p className="text-base" style={{ color: '#94A3B8' }}>Growing platform coverage across every release.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformFeatures.map((release) => (
              <div key={release.release} className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-bold" style={{ color: '#F8FAFC' }}>Release {release.release}</span>
                  <span className="text-xs px-2 py-1 rounded-full font-semibold"
                    style={{
                      backgroundColor: release.status === 'live' ? 'rgba(6,182,212,0.15)' : release.status === 'coming' ? 'rgba(139,92,246,0.15)' : 'rgba(100,116,139,0.15)',
                      color: release.status === 'live' ? '#06B6D4' : release.status === 'coming' ? '#8B5CF6' : '#64748B',
                    }}>
                    {release.status === 'live' ? '● Live' : release.status === 'coming' ? '◐ Coming' : '○ Planned'}
                  </span>
                </div>
                <div className="space-y-4">
                  {release.platforms.map((p) => (
                    <div key={p.name}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{p.icon}</span>
                        <span className="text-sm font-medium" style={{ color: '#F8FAFC' }}>{p.name}</span>
                      </div>
                      <p className="text-xs pl-7" style={{ color: '#64748B' }}>{p.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
              Mobile & <span className="gradient-text-teal">WhatsApp</span> Layer
            </h2>
            <p className="text-base" style={{ color: '#94A3B8' }}>Release 2.0 — Low-friction mobile workflows for on-the-go approvals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mobileFeatures.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <div className="text-3xl mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${f.accent}20` }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#F8FAFC' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1422' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
              Agency & <span className="gradient-text">White-Label</span> Tools
            </h2>
            <p className="text-base" style={{ color: '#94A3B8' }}>Release 3.0 — Scale to hundreds of clients with full white-label deployment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyFeatures.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl mb-4 mx-auto w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(139,92,246,0.15)' }}>
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#F8FAFC' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#F8FAFC' }}>
            Ready to put these features to work?
          </h2>
          <p className="text-base mb-8" style={{ color: '#94A3B8' }}>Start your 14-day free trial and see the difference in your review response rate.</p>
          <Link href="/pricing" className="inline-block px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-violet"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #4F46E5)', color: '#F8FAFC' }}>
            View Pricing Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
