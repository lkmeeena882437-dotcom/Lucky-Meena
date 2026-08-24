import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({ children, className = '', delay = 0, as = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'article' }) {
  const reduce = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({ number, eyebrow, title, accent, description, dark = false }: { number: string; eyebrow: string; title: string; accent: string; description?: string; dark?: boolean }) {
  return (
    <div className={`section-heading ${dark ? 'heading-dark' : ''}`}>
      <Reveal className="section-label"><span>{number}</span><p>{eyebrow}</p></Reveal>
      <Reveal className="heading-copy" delay={.06}>
        <h2>{title}<br/><em>{accent}</em></h2>
        {description && <p>{description}</p>}
      </Reveal>
    </div>
  );
}
