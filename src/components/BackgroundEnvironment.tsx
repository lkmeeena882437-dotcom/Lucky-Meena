export function BackgroundEnvironment({ variant = 'pearl' }: { variant?: 'cosmic' | 'pearl' | 'sky' | 'violet' }) {
  return (
    <div className={`environment environment-${variant}`} aria-hidden="true">
      <span className="env-wash env-wash-a" />
      <span className="env-wash env-wash-b" />
      <span className="env-cover" />
    </div>
  );
}
