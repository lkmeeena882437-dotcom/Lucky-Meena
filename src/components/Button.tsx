import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icons';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  icon?: boolean;
  disabledVisual?: boolean;
};

export function Button({ children, variant = 'primary', icon = true, className = '', disabledVisual = false, ...props }: ButtonProps) {
  return (
    <a className={`button button-${variant} magnetic ${disabledVisual ? 'is-placeholder' : ''} ${className}`} {...props} aria-disabled={disabledVisual || undefined}>
      <span>{children}</span>
      {icon && <span className="button-icon"><Icon name="arrow" /></span>}
      <i className="button-shine" aria-hidden="true" />
    </a>
  );
}
