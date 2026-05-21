'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  value: string;
  label: string;
  delay?: number;
}

function parse(v: string) {
  const m = v.match(/^(.*?)(\d+)(.*)$/);
  if (!m) return null;
  return { pre: m[1], num: parseInt(m[2], 10), post: m[3] };
}

export default function CountUp({ value, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); io.disconnect(); }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const parsed = parse(value);
    if (!parsed) return;
    const { pre, num, post } = parsed;
    const DURATION = 1400;
    let rafId: number;
    let startTs: number | null = null;

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts + delay;
      if (ts < startTs) { rafId = requestAnimationFrame(tick); return; }
      const elapsed = ts - startTs;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${pre}${Math.round(eased * num)}${post}`);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, delay]);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div className="text-4xl font-bold mb-1 gradient-text">{display}</div>
      <div className="text-sm" style={{ color: '#64748B' }}>{label}</div>
    </div>
  );
}
