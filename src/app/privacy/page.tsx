import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — RepShield',
  description: 'RepShield Privacy Policy — how we collect, use, and protect your data.',
};

const EFFECTIVE_DATE = '21 May 2026';
const CONTACT_EMAIL = 'hello@repshield.live';

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#060913' }}>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: '#F8FAFC' }}>
            Privacy Policy
          </h1>
          <p className="text-sm mb-12" style={{ color: '#64748B' }}>
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="space-y-10" style={{ color: '#94A3B8' }}>
            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                1. Who we are
              </h2>
              <p className="text-sm leading-relaxed">
                RepShield (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is an AI-powered reputation management platform
                operated from India. This Privacy Policy explains how we collect, use, disclose, and
                protect information about you when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                2. Information we collect
              </h2>
              <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li><strong style={{ color: '#F8FAFC' }}>Account information:</strong> Name, email address, and business details you provide when signing up.</li>
                <li><strong style={{ color: '#F8FAFC' }}>Business profile data:</strong> Google Business Profile details, review content, and response drafts connected via OAuth.</li>
                <li><strong style={{ color: '#F8FAFC' }}>Usage data:</strong> Log data, IP address, browser type, pages visited, and time spent on the platform.</li>
                <li><strong style={{ color: '#F8FAFC' }}>Payment information:</strong> Billing details processed securely through our payment provider. We do not store card numbers.</li>
                <li><strong style={{ color: '#F8FAFC' }}>Communications:</strong> Any messages you send us via email or support channels.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                3. How we use your information
              </h2>
              <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li>To provide, operate, and improve the RepShield service.</li>
                <li>To generate AI-drafted review responses using your business facts and brand settings.</li>
                <li>To send product updates, billing notifications, and support communications.</li>
                <li>To comply with applicable laws and regulations, including GST invoicing requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                4. Data sharing
              </h2>
              <p className="text-sm leading-relaxed">
                We do not sell your personal data. We may share data with trusted third-party
                processors (e.g., cloud infrastructure, payment processing, analytics) solely to
                operate our service. All processors are contractually bound to handle your data
                securely and only as instructed by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                5. Data retention
              </h2>
              <p className="text-sm leading-relaxed">
                We retain your account data for as long as your account is active, plus a reasonable
                period thereafter to comply with legal obligations. You may request deletion of your
                data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                6. Your rights
              </h2>
              <p className="text-sm leading-relaxed mb-2">
                You have the right to access, correct, or delete the personal data we hold about
                you. To exercise any of these rights, contact us at the email below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                7. Cookies
              </h2>
              <p className="text-sm leading-relaxed">
                We use essential cookies to operate the service and optional analytics cookies to
                understand usage. See our{' '}
                <a href="/cookies" style={{ color: '#2563EB' }}>Cookie Policy</a> for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                8. Security
              </h2>
              <p className="text-sm leading-relaxed">
                We implement industry-standard security measures including encryption in transit
                (TLS), encrypted storage, and access controls. No system is 100% secure; we
                encourage you to use a strong password and protect your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                9. Changes to this policy
              </h2>
              <p className="text-sm leading-relaxed">
                We may update this Privacy Policy periodically. Material changes will be notified
                via email or a prominent notice on our website. Continued use after changes
                constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                10. Contact
              </h2>
              <p className="text-sm leading-relaxed">
                Questions about this Privacy Policy? Reach us at{' '}
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
