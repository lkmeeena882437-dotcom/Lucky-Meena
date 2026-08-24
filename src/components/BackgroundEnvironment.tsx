export function BackgroundEnvironment({ variant = 'cosmic' }: { variant?: 'cosmic' | 'pearl' | 'sky' | 'violet' | 'mint' | 'rose' }) {
  return (
    <div className={`environment environment-${variant}`} aria-hidden="true">
      <i className="env-orb env-orb-a"/><i className="env-orb env-orb-b"/><i className="env-ring"/><i className="env-streak"/>
      {variant === 'cosmic' && <><div className="stars stars-a"/><div className="stars stars-b"/></>}
    </div>
  );
}
