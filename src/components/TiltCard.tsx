import type { HTMLAttributes, ReactNode, PointerEvent } from 'react';
import { useRef } from 'react';

export function TiltCard({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty('--rx', `${(0.5 - y) * 6}deg`);
    card.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
    card.style.setProperty('--spot-x', `${x * 100}%`);
    card.style.setProperty('--spot-y', `${y * 100}%`);
  };

  const reset = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--spot-x', '50%');
    card.style.setProperty('--spot-y', '50%');
  };

  return <div ref={ref} className={`tilt-card ${className}`} onPointerMove={move} onPointerLeave={reset} {...props}>{children}<i className="card-spotlight" aria-hidden="true" /></div>;
}
