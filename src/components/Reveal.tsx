import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({ children, className = '', delay = 0, as = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'article' }) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={reduce ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({ number, eyebrow, title, accent, description, dark = false, headingId }: { number: string; eyebrow: string; title: string; accent: string; description?: string; dark?: boolean; headingId?: string }) {
  return (
    <div className={`section-heading ${dark ? 'heading-dark' : ''}`}>
      <Reveal className="section-label">
        <span className="rule" />
        <p>
          {number} — {eyebrow}
        </p>
        <span className="rule" />
      </Reveal>
      <Reveal className="heading-copy" delay={0.06}>
        <h2 id={headingId}>
          {title} <em>{accent}</em>
        </h2>
        {description && <p>{description}</p>}
      </Reveal>
    </div>
  );
}
