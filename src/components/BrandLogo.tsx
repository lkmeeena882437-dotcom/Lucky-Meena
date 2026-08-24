export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand-logo ${light ? 'is-light' : ''}`} href="#home" aria-label="Lucky Meena — home">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="1.5" y="1.5" width="45" height="45" rx="6" fill={light ? '#1A1A1A' : '#FAFAF8'} stroke="#B8860B" strokeWidth="1.25" />
        <text x="24" y="31" textAnchor="middle" fill="#B8860B" fontFamily="Playfair Display, Georgia, serif" fontSize="16" fontWeight="500">LM</text>
      </svg>
      <span>
        <strong>Lucky Meena</strong>
        <small>Digital systems & growth</small>
      </span>
    </a>
  );
}
