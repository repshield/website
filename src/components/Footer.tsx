import Link from 'next/link';

const footerLinks = {
  Product: [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
  ],
  Company: [
    { href: '/about-us', label: 'About Us' },
    { href: 'mailto:hello@repshield.live', label: 'Contact' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ backgroundColor: '#060913', borderColor: 'rgba(37, 99, 235, 0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }}
              >
                RS
              </div>
              <span className="font-bold text-lg" style={{ color: '#F8FAFC' }}>
                Rep<span className="gradient-text">Shield</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B' }}>
              AI-powered reputation management that keeps your brand voice consistent across every review platform.
            </p>
            <a
              href="mailto:hello@repshield.live"
              className="text-sm transition-colors duration-200"
              style={{ color: '#2563EB' }}
            >
              hello@repshield.live
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4" style={{ color: '#F8FAFC' }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-[#3B82F6]"
                      style={{ color: '#64748B' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(37, 99, 235, 0.1)' }}
        >
          <p className="text-sm" style={{ color: '#64748B' }}>
            © {new Date().getFullYear()} RepShield. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#22C55E' }} />
            <span className="text-xs" style={{ color: '#64748B' }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

