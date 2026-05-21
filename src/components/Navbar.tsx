'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(9, 13, 22, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderColor: 'rgba(37, 99, 235, 0.15)',
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
            <Link
              href="/pricing"
              className="text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              style={{ color: '#94A3B8' }}
            >
              Sign In
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
            >
              Start Free Trial
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
          style={{
            backgroundColor: '#0F1626',
            borderColor: 'rgba(37, 99, 235, 0.15)',
          }}
        >
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
            href="/pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#F8FAFC' }}
          >
            Start Free Trial
          </Link>
        </div>
      )}
    </header>
  );
}
