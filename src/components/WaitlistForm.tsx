'use client';

import { useState, FormEvent } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent('RepShield Early Access Request');
    const body = encodeURIComponent(
      `Hi RepShield team,\n\nPlease add me to the early access waitlist.\n\nEmail: ${email}\n\nThank you!`
    );
    window.location.href = `mailto:hello@repshield.live?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-sm font-semibold" style={{ color: '#22C55E' }}>Opening your email client…</p>
        <p className="text-xs" style={{ color: '#64748B' }}>We&apos;ll be in touch within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
        style={{
          backgroundColor: '#0F1626',
          border: '1px solid rgba(37,99,235,0.3)',
          color: '#F8FAFC',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'rgba(37,99,235,0.7)';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.12)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl font-semibold text-sm shrink-0 btn-shimmer"
        style={{
          background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
          color: '#F8FAFC',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Request Access
      </button>
    </form>
  );
}
