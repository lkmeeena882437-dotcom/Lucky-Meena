import { motion } from 'framer-motion';

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand-logo ${light ? 'is-light' : ''}`} href="#home" aria-label="Lucky Meena — home">
      <motion.svg viewBox="0 0 48 48" aria-hidden="true" whileHover={{ rotate: 8 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
        <defs>
          <linearGradient id="brandGradient" x1="7" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8"/><stop offset=".52" stopColor="#8B5CF6"/><stop offset="1" stopColor="#F472B6"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="14" fill="url(#brandGradient)"/>
        <path d="M13 32V15l7.3 11L27 15v17M27 32h8" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="10" r="2.2" fill="white" fillOpacity=".86"/>
      </motion.svg>
      <span><strong>Lucky Meena</strong><small>Digital systems & growth</small></span>
    </a>
  );
}
