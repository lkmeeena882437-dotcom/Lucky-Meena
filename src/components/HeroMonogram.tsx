export function HeroMonogram() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="monogram-object">
        <svg viewBox="0 0 96 96" role="img" aria-label="LM monogram">
          <rect x="3" y="3" width="90" height="90" rx="8" fill="#FAFAF8" stroke="#B8860B" strokeWidth="1.25" />
          <line x1="24" y1="72" x2="72" y2="72" stroke="#E8E4DF" strokeWidth="1" />
          <text x="48" y="58" textAnchor="middle" fill="#1A1A1A" fontFamily="Playfair Display, Georgia, serif" fontSize="28">LM</text>
        </svg>
      </div>
    </div>
  );
}
