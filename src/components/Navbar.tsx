'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
];

const businessCategories = [
  {
    id: 'food',
    label: 'Food & Dining',
    emoji: '🍽️',
    color: '#f97316',
    types: ['Restaurant', 'Cafe', 'South Indian Restaurant', 'Biryani Restaurant', 'Pizzeria', 'Cloud Kitchen', 'Bakery', 'Bar & Pub'],
  },
  {
    id: 'health',
    label: 'Health & Medical',
    emoji: '🏥',
    color: '#22c55e',
    types: ['Dental Clinic', 'Physiotherapist', 'Ayurvedic Clinic', 'Dermatologist', 'Hospital', 'Eye Clinic', 'Pharmacy'],
  },
  {
    id: 'professional',
    label: 'Professional Services',
    emoji: '💼',
    color: '#3b82f6',
    types: ['Chartered Accountant', 'Law Firm', 'Digital Marketing Agency', 'Architect', 'IT Services', 'Consultant'],
  },
  {
    id: 'retail',
    label: 'Retail & Consumer Goods',
    emoji: '🛍️',
    color: '#a855f7',
    types: ['Saree Shop', 'Supermarket', 'Pet Supply Store', 'Electronics Store', 'Clothing Store', 'Grocery'],
  },
  {
    id: 'automotive',
    label: 'Automotive & Transport',
    emoji: '🚗',
    color: '#64748b',
    types: ['Auto Repair Shop', 'Car Wash', 'EV Charging Station', 'Logistics Company', 'Car Dealer'],
  },
  {
    id: 'beauty',
    label: 'Beauty & Wellness',
    emoji: '✨',
    color: '#ec4899',
    types: ['Hair Salon', 'Yoga Studio', 'Day Spa', 'Gym', 'Nail Salon', 'Barbershop'],
  },
  {
    id: 'education',
    label: 'Education & Training',
    emoji: '🎓',
    color: '#eab308',
    types: ['Coaching Center', 'Preschool', 'Music School', 'Tuition Center', 'Language School'],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCategOpen, setMobileCategOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const openDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b navbar-enter"
      style={{
        backgroundColor: 'rgba(9, 13, 22, 0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderColor: 'rgba(37, 99, 235, 0.15)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : 'none',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Business Types Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={triggerRef}
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: dropdownOpen ? '#F8FAFC' : '#94A3B8', backgroundColor: dropdownOpen ? 'rgba(37,99,235,0.15)' : 'transparent' }}
              >
                Business Types
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300"
                  style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Dropdown Panel */}
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
                style={{
                  position: 'fixed',
                  top: '64px',
                  left: '50%',
                  transform: dropdownOpen
                    ? 'translateX(-50%) translateY(0)'
                    : 'translateX(-50%) translateY(-10px)',
                  opacity: dropdownOpen ? 1 : 0,
                  pointerEvents: dropdownOpen ? 'auto' : 'none',
                  transition: 'opacity 0.28s cubic-bezier(0.16,1,0.3,1), transform 0.28s cubic-bezier(0.16,1,0.3,1)',
                  width: 'min(820px, 96vw)',
                  backgroundColor: '#0D1628',
                  border: '1px solid rgba(37,99,235,0.2)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,99,235,0.1)',
                  zIndex: 9999,
                }}
              >
                {/* Header row */}
                <div className="flex items-center justify-between mb-4 pb-3"
                  style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#475569' }}>
                    Works for every business type
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ backgroundColor: 'rgba(37,99,235,0.12)', color: '#3b82f6' }}>
                    7 verticals · 50+ types
                  </span>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {businessCategories.map((cat, i) => (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setHoveredCategory(cat.id)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      style={{
                        borderRadius: '10px',
                        padding: '12px',
                        backgroundColor: hoveredCategory === cat.id ? 'rgba(37,99,235,0.08)' : 'transparent',
                        border: `1px solid ${hoveredCategory === cat.id ? 'rgba(37,99,235,0.25)' : 'transparent'}`,
                        transition: 'background-color 0.18s ease, border-color 0.18s ease',
                        cursor: 'default',
                        // stagger entrance
                        animation: dropdownOpen ? `fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 35}ms both` : 'none',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{ fontSize: '15px', lineHeight: 1 }}>{cat.emoji}</span>
                        <span className="text-xs font-semibold" style={{ color: '#F8FAFC' }}>{cat.label}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cat.types.slice(0, 4).map((type) => (
                          <span key={type}
                            className="text-xs px-1.5 py-0.5 rounded"
                            style={{
                              backgroundColor: `${cat.color}14`,
                              color: cat.color,
                              fontSize: '10px',
                              fontWeight: 500,
                              transition: 'background-color 0.15s ease',
                            }}
                          >
                            {type}
                          </span>
                        ))}
                        {cat.types.length > 4 && (
                          <span className="text-xs px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: 'rgba(100,116,139,0.12)', color: '#64748b', fontSize: '10px' }}>
                            +{cat.types.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* CTA tile */}
                  <div style={{
                    borderRadius: '10px',
                    padding: '12px',
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.18), rgba(59,130,246,0.12))',
                    border: '1px solid rgba(37,99,235,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    animation: dropdownOpen ? `fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1) ${7 * 35}ms both` : 'none',
                  }}>
                    <div>
                      <div className="text-xs font-semibold mb-1" style={{ color: '#F8FAFC' }}>Your category</div>
                      <div style={{ color: '#94A3B8', fontSize: '11px', lineHeight: 1.5 }}>
                        Don&apos;t see your niche? RepShield works for any Google-listed business.
                      </div>
                    </div>
                    <Link
                      href="/#waitlist"
                      onClick={() => setDropdownOpen(false)}
                      className="mt-3 inline-block text-center text-xs font-semibold px-3 py-1.5 rounded-lg"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
                    >
                      Get Early Access →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: pathname === link.href ? '#F8FAFC' : '#94A3B8',
                  backgroundColor: pathname === link.href ? 'rgba(37, 99, 235, 0.15)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(37, 99, 235, 0.2)', color: '#60A5FA', border: '1px solid rgba(37, 99, 235, 0.4)' }}
            >
              Beta
            </span>
            <Link
              href="/signup"
              className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: '#94A3B8' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-2"
          style={{ backgroundColor: '#0F1626', borderColor: 'rgba(37, 99, 235, 0.15)' }}
        >
          {/* Mobile categories accordion */}
          <button
            onClick={() => setMobileCategOpen(!mobileCategOpen)}
            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium w-full"
            style={{ color: '#94A3B8', backgroundColor: mobileCategOpen ? 'rgba(37,99,235,0.1)' : 'transparent' }}
          >
            Business Types
            <svg
              className="w-4 h-4 transition-transform duration-300"
              style={{ transform: mobileCategOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileCategOpen && (
            <div className="ml-2 flex flex-col gap-2 pb-1">
              {businessCategories.map((cat) => (
                <div key={cat.id} className="px-3 py-2 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(37,99,235,0.1)' }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span style={{ fontSize: '13px' }}>{cat.emoji}</span>
                    <span className="text-xs font-semibold" style={{ color: '#F8FAFC' }}>{cat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cat.types.slice(0, 3).map((type) => (
                      <span key={type} className="text-xs px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: `${cat.color}14`, color: cat.color, fontSize: '10px' }}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium"
              style={{
                color: pathname === link.href ? '#F8FAFC' : '#94A3B8',
                backgroundColor: pathname === link.href ? 'rgba(37, 99, 235, 0.15)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
