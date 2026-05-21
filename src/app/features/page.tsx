import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — RepShield',
  description: 'Explore all RepShield features: Human-in-the-loop AI, Brand Personality Matrix, Fact Library, multi-platform support, and agency tools.',
};

const coreModules = [
  {
    id: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
        <circle cx="22" cy="18" r="3.5" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
        <path d="M15 28c0-3.9 3.1-7 7-7h2.5" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M27 23l3 3-3 3" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
    accent: '#2563EB',
  },
  {
    id: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
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
    tagline: 'Your voice. Your rules.',
    description:
      'No complex prompt engineering for non-technical business owners. Configuration values are set via intuitive sliders on the frontend and mapped directly into the AI system prompt. Your brand voice stays consistent across every single response.',
    bullets: [
      'Tone Matrix: Casual & Friendly ↔ Formal & Elegant',
      'Length Matrix: Short & Punchy ↔ Detailed & Thorough',
      'Witty Matrix: Strictly Professional ↔ Lighthearted & Humorous',
      'Per-location brand profiles for multi-location businesses',
    ],
    accent: '#3B82F6',
  },
  {
    id: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1.5"/>
        <rect x="16" y="15" width="12" height="14" rx="2" stroke="#10b981" strokeWidth="1.5" fill="none"/>
        <path d="M19 19h6M19 22h6M19 25h4" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="4" fill="#060913" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M26.5 28l1 1 2-2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
    accent: '#2563EB',
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
      { name: 'Google Business Profile', icon: (
        <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" fill="rgba(59,158,255,0.08)" stroke="#3b9eff" strokeWidth="1.5"/>
          <path d="M22 13c-3.3 0-6 2.7-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" stroke="#3b9eff" strokeWidth="1.5" fill="none"/>
          <circle cx="22" cy="19" r="2" fill="#3b9eff"/>
        </svg>
      ), detail: 'Full OAuth, real-time webhooks, live reply posting' },
      { name: 'Slack Webhooks', icon: (
        <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
          <path d="M28 18H18a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2v3l3-3h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2z" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
          <circle cx="19" cy="21.5" r=".8" fill="#22d3ee"/>
          <circle cx="22" cy="21.5" r=".8" fill="#22d3ee"/>
          <circle cx="25" cy="21.5" r=".8" fill="#22d3ee"/>
        </svg>
      ), detail: 'Internal alerts channel for monitoring and testing' },
    ],
  },
  {
    release: '2.0',
    status: 'coming',
    platforms: [
      { name: 'Facebook Pages', icon: (
        <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
          <path d="M24 14h-2c-2.2 0-4 1.8-4 4v2h-2v3h2v7h3v-7h2.5l.5-3H21v-2c0-.6.4-1 1-1h2v-3z" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        </svg>
      ), detail: 'Full Read/Write via Meta Graph API' },
      { name: 'Yelp & TripAdvisor', icon: (
        <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" fill="rgba(239,68,68,0.08)" stroke="#ef4444" strokeWidth="1.5"/>
          <path d="M22 13l1.5 4.5H28l-3.6 2.7 1.4 4.4-3.8-2.8-3.8 2.8 1.4-4.4L16 17.5h4.5z" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        </svg>
      ), detail: 'Read-only pipelines with mobile deep-linking' },
      { name: 'WhatsApp Business', icon: (
        <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1.5"/>
          <path d="M22 14c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 3.9L14 30l4.2-1.1c1.1.6 2.4.9 3.8.9 4.4 0 8-3.6 8-8s-3.6-8-8-8z" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
          <path d="M19 20c.2.5.5 1 .9 1.5.9 1 2 1.8 3.3 2.1l.5.1 1.3-1.3c.1-.1.3-.2.5-.1l2.5 1.1c.2.1.3.3.2.5-.3 1.3-1.5 2.1-2.8 2-3.2-.5-5.7-3-6.2-6.2-.1-1.3.7-2.5 2-2.8.2 0 .4.1.5.2l1.1 2.5c.1.2 0 .4-.1.5L21.3 21l-.3-.3" stroke="#10b981" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        </svg>
      ), detail: 'Active notifications & reply triggers via Twilio/Meta' },
    ],
  },
  {
    release: '3.0',
    status: 'planned',
    platforms: [
      { name: 'LinkedIn', icon: (
        <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" strokeWidth="1.5"/>
          <rect x="15" y="15" width="6" height="6" rx="1.5" stroke="#8b5cf6" strokeWidth="1.5" fill="none"/>
          <rect x="23" y="15" width="6" height="6" rx="1.5" stroke="#8b5cf6" strokeWidth="1.5" fill="none"/>
          <rect x="15" y="23" width="6" height="6" rx="1.5" stroke="#8b5cf6" strokeWidth="1.5" fill="none"/>
          <rect x="23" y="23" width="6" height="6" rx="1.5" stroke="#8b5cf6" strokeWidth="1.5" fill="none"/>
        </svg>
      ), detail: 'Auto-repurpose 5-star reviews into social posts' },
    ],
  },
];

const mobileFeatures = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M16 22l3 3 7-7" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 28l5-3" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: '3-Second Swipe Approval',
    description: 'Push notifications via Firebase Cloud Messaging. Tap the alert, see a split-screen view, swipe right to publish the AI draft instantly.',
    accent: '#22d3ee',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M22 14c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 3.9L14 30l4.2-1.1c1.1.6 2.4.9 3.8.9 4.4 0 8-3.6 8-8s-3.6-8-8-8z" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M19 20c.2.5.5 1 .9 1.5.9 1 2 1.8 3.3 2.1l.5.1 1.3-1.3c.1-.1.3-.2.5-.1l2.5 1.1c.2.1.3.3.2.5-.3 1.3-1.5 2.1-2.8 2-3.2-.5-5.7-3-6.2-6.2-.1-1.3.7-2.5 2-2.8.2 0 .4.1.5.2l1.1 2.5c.1.2 0 .4-.1.5L21.3 21l-.3-.3" stroke="#10b981" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: 'WhatsApp Post-on-the-Go Bot',
    description: 'The system texts you the review and draft. Reply "1" to publish live. Reply with custom text to override the draft. Dead simple.',
    accent: '#10b981',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1.5"/>
        <path d="M25.5 15.5l3 3-9 9H16.5v-3l9-9z" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M23 18l3 3" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Yelp Clipboard Bridge',
    description: 'One tap auto-copies the AI draft to your clipboard and launches the Yelp app directly to the target review. No switching required.',
    accent: '#f59e0b',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1.5"/>
        <path d="M22 13c-4 0-6 2.7-6 5.5V23l-1.5 2h15l-1.5-2v-4.5c0-2.8-2-5.5-6-5.5z" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M20 25c0 1.1.9 2 2 2s2-.9 2-2" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
        <circle cx="28" cy="14" r="3" fill="#ef4444" stroke="#060913" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Flutter Cross-Platform App',
    description: 'Lightweight native iOS/Android client engineered solely for fast, on-the-go review approvals. Minimal UI, maximum speed.',
    accent: '#f59e0b',
  },
];

const agencyFeatures = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(59,158,255,0.08)" stroke="#3b9eff" strokeWidth="1.5"/>
        <rect x="18" y="15" width="8" height="6" rx="1.5" stroke="#3b9eff" strokeWidth="1.5" fill="none"/>
        <rect x="13" y="23" width="7" height="5" rx="1.5" stroke="#3b9eff" strokeWidth="1.2" fill="none"/>
        <rect x="24" y="23" width="7" height="5" rx="1.5" stroke="#3b9eff" strokeWidth="1.2" fill="none"/>
        <path d="M22 21v3M17 23V22h10v1" stroke="#3b9eff" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Agency Command Center',
    description: 'Multi-tenant parent console for agency account executives. Manage and toggle between dozens of separate client accounts from one login.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(59,158,255,0.08)" stroke="#3b9eff" strokeWidth="1.5"/>
        <rect x="15" y="17" width="14" height="10" rx="2" stroke="#3b9eff" strokeWidth="1.5" fill="none"/>
        <path d="M18 21h8M18 24h5" stroke="#3b9eff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <circle cx="29" cy="15" r="3.5" fill="#060913" stroke="#3b9eff" strokeWidth="1.5"/>
        <path d="M28 15l.8.8 1.5-1.5" stroke="#3b9eff" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full White-Label Engine',
    description: 'Dynamic domain mapping (reviews.youragency.com), custom branding asset injections, and theme styling configurations.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M14 28l5-5 4 3 5-7" stroke="#22d3ee" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="19" r="2" fill="#22d3ee"/>
      </svg>
    ),
    title: 'Local Map Pack Rank Tracker',
    description: 'Automated cron jobs that track and log local Google Maps keyword positions over time. Prove RepShield\'s ROI with hard numbers.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1.5"/>
        <path d="M22 13c-4 0-6 2.7-6 5.5V23l-1.5 2h15l-1.5-2v-4.5c0-2.8-2-5.5-6-5.5z" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <path d="M20 25c0 1.1.9 2 2 2s2-.9 2-2" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
        <circle cx="28" cy="14" r="3" fill="#ef4444" stroke="#060913" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'NFC / QR Review Kit',
    description: 'Dynamic generation of customer-facing QR codes and physical asset templates designed to maximize review acquisition volume.',
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ backgroundColor: '#060913' }}>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, #2563EB 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{ backgroundColor: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.3)', color: '#2563EB' }}>
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
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
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
                      <pre className="text-xs font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto" style={{ color: '#22C55E' }}>
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
                            style={{ backgroundColor: '#1B253B' }}>
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                              style={{ background: `linear-gradient(135deg, ${mod.accent}, #3B82F6)`, color: '#F8FAFC' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
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
                      backgroundColor: release.status === 'live' ? 'rgba(34,197,94,0.15)' : release.status === 'coming' ? 'rgba(37,99,235,0.15)' : 'rgba(100,116,139,0.15)',
                      color: release.status === 'live' ? '#22C55E' : release.status === 'coming' ? '#2563EB' : '#64748B',
                    }}>
                    {release.status === 'live' ? '● Live' : release.status === 'coming' ? '◐ Coming' : '○ Planned'}
                  </span>
                </div>
                <div className="space-y-4">
                  {release.platforms.map((p) => (
                    <div key={p.name}>
                      <div className="flex items-center gap-2 mb-1">
                        <span>{p.icon}</span>
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
              Mobile & <span className="gradient-text-secure">WhatsApp</span> Layer
            </h2>
            <p className="text-base" style={{ color: '#94A3B8' }}>Release 2.0 — Low-friction mobile workflows for on-the-go approvals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mobileFeatures.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0B1120' }}>
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
                <div className="mb-4 mx-auto w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(37,99,235,0.15)' }}>
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
          <Link href="/pricing" className="inline-block px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shield-glow"
            style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}>
            View Pricing Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
