import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — RepShield',
  description: 'RepShield Cookie Policy — how we use cookies and similar technologies.',
};

const EFFECTIVE_DATE = '21 May 2026';
const CONTACT_EMAIL = 'hello@repshield.live';

const cookieTypes = [
  {
    name: 'Essential cookies',
    purpose: 'Required for the Service to function. These include session authentication tokens and security cookies.',
    canOptOut: false,
  },
  {
    name: 'Analytics cookies',
    purpose: 'Help us understand how visitors use the website (pages visited, time on site, referral source). We use privacy-first analytics and do not share this data with advertisers.',
    canOptOut: true,
  },
  {
    name: 'Preference cookies',
    purpose: 'Remember your settings, such as your billing toggle preference (monthly vs. annual).',
    canOptOut: true,
  },
];

export default function CookiesPage() {
  return (
    <div style={{ backgroundColor: '#060913' }}>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: '#F8FAFC' }}>
            Cookie Policy
          </h1>
          <p className="text-sm mb-12" style={{ color: '#64748B' }}>
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="space-y-10" style={{ color: '#94A3B8' }}>
            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                What are cookies?
              </h2>
              <p className="text-sm leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They
                help websites remember your preferences and understand how you interact with them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-6" style={{ color: '#F8FAFC' }}>
                Cookies we use
              </h2>
              <div className="space-y-4">
                {cookieTypes.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-xl p-5"
                    style={{ backgroundColor: '#0F1626', border: '1px solid rgba(37,99,235,0.15)' }}
                  >
                    <div className="flex items-center justify-between mb-2 gap-4 flex-wrap">
                      <span className="text-sm font-semibold" style={{ color: '#F8FAFC' }}>
                        {c.name}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                        style={{
                          backgroundColor: c.canOptOut
                            ? 'rgba(37,99,235,0.15)'
                            : 'rgba(100,116,139,0.15)',
                          color: c.canOptOut ? '#2563EB' : '#64748B',
                        }}
                      >
                        {c.canOptOut ? 'Optional' : 'Required'}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed">{c.purpose}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                Managing cookies
              </h2>
              <p className="text-sm leading-relaxed">
                You can control and delete cookies through your browser settings. Note that
                disabling essential cookies will affect the functionality of the Service. For
                optional cookies, you can opt out at any time without affecting your core
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                Third-party cookies
              </h2>
              <p className="text-sm leading-relaxed">
                We do not allow third-party advertisers to set cookies on our platform. Any
                third-party services we use (such as analytics) are configured to minimise data
                collection and do not use your data for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                Contact
              </h2>
              <p className="text-sm leading-relaxed">
                Questions about our use of cookies? Contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#2563EB' }}>
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
