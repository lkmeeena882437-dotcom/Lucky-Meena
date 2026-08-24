import type { HTMLAttributes, ReactNode } from 'react';

export function TiltCard({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={`tilt-card ${className}`} {...props}>
      {children}
    </div>
  );
}
