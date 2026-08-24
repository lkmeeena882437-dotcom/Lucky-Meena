import { motion, useReducedMotion } from 'framer-motion';
import { Sticker } from './Sticker';

export function HeroMonogram() {
  const reduce = useReducedMotion();
  const loop = reduce ? undefined : { y: [0, -10, 0], rotateZ: [-1, 1, -1] };
  return (
    <div className="hero-visual" aria-label="Animated Lucky Meena monogram sculpture">
      <div className="visual-glow"/>
      <motion.div className="monogram-object" animate={loop} transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}>
        <svg viewBox="0 0 560 560" role="img" aria-label="LM monogram">
          <defs>
            <linearGradient id="metal" x1="90" y1="65" x2="480" y2="505" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E6FAFF"/><stop offset=".22" stopColor="#38BDF8"/><stop offset=".5" stopColor="#8B5CF6"/><stop offset=".72" stopColor="#F472B6"/><stop offset="1" stopColor="#BDF7EA"/>
            </linearGradient>
            <linearGradient id="glass" x1="130" y1="110" x2="440" y2="490" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity=".32"/><stop offset=".5" stopColor="#79D9FF" stopOpacity=".05"/><stop offset="1" stopColor="#A78BFA" stopOpacity=".22"/>
            </linearGradient>
            <filter id="depth" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur in="SourceAlpha" stdDeviation="14"/><feOffset dy="22"/><feColorMatrix values="0 0 0 0 0.02 0 0 0 0 0.04 0 0 0 0 0.1 0 0 0 .65 0"/><feBlend in="SourceGraphic"/></filter>
          </defs>
          <circle cx="280" cy="280" r="218" fill="url(#glass)" stroke="white" strokeOpacity=".13"/>
          <circle cx="280" cy="280" r="190" fill="none" stroke="url(#metal)" strokeWidth="2" strokeDasharray="5 13" opacity=".65"/>
          <path d="M165 388V164l94 145 82-145v224M341 388h72" fill="none" stroke="#020713" strokeOpacity=".48" strokeWidth="37" strokeLinecap="round" strokeLinejoin="round" transform="translate(7 11)"/>
          <path d="M165 388V164l94 145 82-145v224M341 388h72" fill="none" stroke="url(#metal)" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round" filter="url(#depth)"/>
          <path d="M165 388V164l94 145 82-145v224M341 388h72" fill="none" stroke="white" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" transform="translate(-5 -6)"/>
          <circle cx="432" cy="130" r="10" fill="#38BDF8"/><circle cx="432" cy="130" r="22" fill="none" stroke="#38BDF8" strokeOpacity=".35"/>
          <circle cx="117" cy="398" r="7" fill="#F472B6"/><circle cx="117" cy="398" r="17" fill="none" stroke="#F472B6" strokeOpacity=".35"/>
        </svg>
        <div className="object-disc disc-one"/><div className="object-disc disc-two"/>
      </motion.div>
      <div className="hero-tag hero-tag-one"><Sticker icon="code" color="cyan" size="small"/><span>Build</span></div>
      <div className="hero-tag hero-tag-two"><Sticker icon="spark" color="violet" size="small"/><span>Automate</span></div>
      <div className="hero-tag hero-tag-three"><Sticker icon="analytics" color="emerald" size="small"/><span>Grow</span></div>
    </div>
  );
}
