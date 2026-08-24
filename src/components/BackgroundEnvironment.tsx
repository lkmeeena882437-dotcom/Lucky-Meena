export function BackgroundEnvironment({ variant = 'pearl' }: { variant?: 'cosmic' | 'pearl' | 'sky' | 'violet' }) {
  return <div className={`environment environment-${variant}`} aria-hidden="true" />;
}
