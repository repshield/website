import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — RepShield',
  description: 'RepShield Terms of Service — the rules and conditions for using our platform.',
};

const EFFECTIVE_DATE = '21 May 2026';
const CONTACT_EMAIL = 'hello@repshield.live';

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#060913' }}>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3" style={{ color: '#F8FAFC' }}>
            Terms of Service
          </h1>
          <p className="text-sm mb-12" style={{ color: '#64748B' }}>
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="space-y-10" style={{ color: '#94A3B8' }}>
            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                1. Acceptance of terms
              </h2>
              <p className="text-sm leading-relaxed">
                By accessing or using RepShield (&quot;Service&quot;), you agree to be bound by these Terms of
                Service. If you do not agree, do not use the Service. These terms apply to all users,
                including free trial users, paying subscribers, and agency account holders.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                2. Description of service
              </h2>
              <p className="text-sm leading-relaxed">
                RepShield provides AI-assisted review response drafting, approval workflows, and
                reputation management tools for businesses. The Service integrates with third-party
                platforms (including Google Business Profile) via OAuth. Features and integrations
                may change over time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                3. Accounts and eligibility
              </h2>
              <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li>You must be at least 18 years old and authorised to act on behalf of your business to create an account.</li>
                <li>You are responsible for maintaining the security of your login credentials.</li>
                <li>You must provide accurate and current information during registration.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                4. Subscriptions and billing
              </h2>
              <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li>Paid plans are billed monthly or annually in advance. All prices are in INR and exclude 18% GST.</li>
                <li>A GST-compliant invoice is issued for every payment. B2B customers may claim Input Tax Credit (ITC).</li>
                <li>Free trials last 14 days. No credit card is required to start a trial.</li>
                <li>Subscriptions auto-renew unless cancelled before the renewal date.</li>
                <li>Refunds are not provided for partial billing periods unless required by applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                5. Acceptable use
              </h2>
              <p className="text-sm leading-relaxed mb-2">You agree not to:</p>
              <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
                <li>Use the Service to post false, misleading, or defamatory review responses.</li>
                <li>Attempt to reverse-engineer, scrape, or circumvent any part of the platform.</li>
                <li>Use the Service for any unlawful purpose or in violation of any third-party platform&apos;s terms (including Google&apos;s policies).</li>
                <li>Resell or sublicense the Service without our explicit written consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                6. AI-generated content
              </h2>
              <p className="text-sm leading-relaxed">
                RepShield generates draft responses using AI. You are solely responsible for
                reviewing and approving every response before it is published. RepShield does not
                guarantee the accuracy, appropriateness, or legal compliance of AI-generated content.
                We strongly recommend reviewing every draft before publishing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                7. Intellectual property
              </h2>
              <p className="text-sm leading-relaxed">
                RepShield and its underlying technology are proprietary. Your business data, brand
                settings, and Fact Library entries remain yours. By using the Service, you grant us
                a limited licence to process your data solely to provide the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                8. Limitation of liability
              </h2>
              <p className="text-sm leading-relaxed">
                To the fullest extent permitted by law, RepShield is not liable for any indirect,
                incidental, special, or consequential damages arising from your use of the Service.
                Our total liability to you shall not exceed the amount you paid us in the three
                months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                9. Termination
              </h2>
              <p className="text-sm leading-relaxed">
                You may cancel your account at any time. We reserve the right to suspend or
                terminate accounts that violate these Terms. Upon termination, your access to the
                Service ceases and your data will be handled per our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                10. Governing law
              </h2>
              <p className="text-sm leading-relaxed">
                These Terms are governed by the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of the courts of India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#F8FAFC' }}>
                11. Contact
              </h2>
              <p className="text-sm leading-relaxed">
                Questions about these Terms? Contact us at{' '}
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
