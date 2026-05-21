'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

const INITIAL_TRANSFORM: Record<Direction, string> = {
  up:    'translateY(32px)',
  down:  'translateY(-24px)',
  left:  'translateX(-32px)',
  right: 'translateX(32px)',
  scale: 'scale(0.92)',
};

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  direction?: Direction;
  threshold?: number;
}

export default function AnimateIn({
  children,
  className = '',
  style,
  delay = 0,
  duration = 700,
  direction = 'up',
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : INITIAL_TRANSFORM[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
