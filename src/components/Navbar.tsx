'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
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
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: dropdownOpen ? '#F8FAFC' : '#94A3B8', backgroundColor: 'transparent' }}
              >
                Businesses
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300"
                  style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Full-width Mega Dropdown Panel */}
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
                style={{
                  position: 'fixed',
                  top: '64px',
                  left: 0,
                  right: 0,
                  width: '100%',
                  opacity: dropdownOpen ? 1 : 0,
                  transform: dropdownOpen ? 'translateY(0)' : 'translateY(-8px)',
                  pointerEvents: dropdownOpen ? 'auto' : 'none',
                  transition: 'opacity 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                  backgroundColor: 'rgba(9,14,26,0.97)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderTop: '1px solid rgba(37,99,235,0.15)',
                  borderBottom: '1px solid rgba(37,99,235,0.15)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
                  zIndex: 9999,
                }}
              >
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 32px 28px', display: 'flex', gap: '0' }}>

                  {/* Left sidebar — category list */}
                  <div style={{ width: '220px', flexShrink: 0, borderRight: '1px solid rgba(37,99,235,0.1)', paddingRight: '24px', marginRight: '28px' }}>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#475569' }}>
                      Industries
                    </div>
                    {businessCategories.map((cat, i) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setHoveredCategory(cat.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          backgroundColor: hoveredCategory === cat.id ? `${cat.color}14` : 'transparent',
                          border: `1px solid ${hoveredCategory === cat.id ? `${cat.color}30` : 'transparent'}`,
                          cursor: 'default',
                          transition: 'background-color 0.15s ease, border-color 0.15s ease',
                          animation: dropdownOpen ? `fadeInUp 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 30}ms both` : 'none',
                          textAlign: 'left',
                        }}
                      >
                        <span style={{ fontSize: '16px', lineHeight: 1, flexShrink: 0 }}>{cat.emoji}</span>
                        <span style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: hoveredCategory === cat.id ? '#F8FAFC' : '#94A3B8',
                          transition: 'color 0.15s ease',
                        }}>
                          {cat.label}
                        </span>
                        {hoveredCategory === cat.id && (
                          <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="14" height="14" fill="none" stroke={cat.color} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 18l6-6-6-6" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Right panel — types for selected category */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {businessCategories.map((cat) => {
                      const active = hoveredCategory === cat.id;
                      return (
                        <div key={cat.id} style={{
                          display: active ? 'block' : 'none',
                          animation: active ? 'fadeInUp 0.25s cubic-bezier(0.16,1,0.3,1) both' : 'none',
                        }}>
                          {/* Category header */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <span style={{ fontSize: '22px' }}>{cat.emoji}</span>
                            <div>
                              <div style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC' }}>{cat.label}</div>
                              <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                                {cat.types.length} business types supported
                              </div>
                            </div>
                          </div>

                          {/* Types grid */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                            {cat.types.map((type, ti) => (
                              <span key={type} style={{
                                padding: '6px 12px',
                                borderRadius: '20px',
                                backgroundColor: `${cat.color}12`,
                                border: `1px solid ${cat.color}28`,
                                color: cat.color,
                                fontSize: '12px',
                                fontWeight: 500,
                                animation: active ? `fadeInUp 0.3s cubic-bezier(0.16,1,0.3,1) ${ti * 20}ms both` : 'none',
                              }}>
                                {type}
                              </span>
                            ))}
                          </div>

                          {/* CTA row */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '16px',
                            borderTop: '1px solid rgba(37,99,235,0.1)',
                          }}>
                            <span style={{ fontSize: '12px', color: '#64748B' }}>
                              RepShield works for any Google-listed business — AI-powered responses in seconds.
                            </span>
                            <Link
                              href="/#waitlist"
                              onClick={() => setDropdownOpen(false)}
                              style={{
                                flexShrink: 0,
                                marginLeft: '24px',
                                padding: '8px 20px',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                                color: '#F8FAFC',
                                fontSize: '12px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              Get Early Access →
                            </Link>
                          </div>
                        </div>
                      );
                    })}

                    {/* Default state — no category hovered */}
                    {!hoveredCategory && (
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingTop: '8px' }}>
                        <div style={{ fontSize: '14px', color: '#475569', marginBottom: '16px' }}>
                          Hover a category to explore business types →
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {businessCategories.map((cat, i) => (
                            <span key={cat.id} style={{
                              padding: '5px 10px',
                              borderRadius: '16px',
                              backgroundColor: `${cat.color}10`,
                              border: `1px solid ${cat.color}22`,
                              color: cat.color,
                              fontSize: '11px',
                              fontWeight: 500,
                              animation: dropdownOpen ? `fadeInUp 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 25}ms both` : 'none',
                            }}>
                              {cat.emoji} {cat.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
            Businesses
            <svg
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
