import { motion, useReducedMotion } from 'framer-motion';

export function HeroMonogram() {
  const reduce = useReducedMotion();

  return (
    <div className="hero-visual" aria-label="Lucky Meena monogram sculpture">
      <div className="visual-glow" />
      <motion.div
        className="monogram-object"
        animate={reduce ? undefined : { y: [0, -8, 0], rotateZ: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
      >
        <svg viewBox="0 0 560 560" role="img" aria-label="LM monogram">
          <defs>
            <linearGradient id="metal" x1="90" y1="65" x2="480" y2="505" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E6FAFF" />
              <stop offset=".24" stopColor="#38BDF8" />
              <stop offset=".55" stopColor="#8B5CF6" />
              <stop offset=".82" stopColor="#F472B6" />
              <stop offset="1" stopColor="#BDF7EA" />
            </linearGradient>
            <linearGradient id="glass" x1="130" y1="110" x2="440" y2="490" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity=".25" />
              <stop offset=".5" stopColor="#79D9FF" stopOpacity=".03" />
              <stop offset="1" stopColor="#A78BFA" stopOpacity=".16" />
            </linearGradient>
            <filter id="depth" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
              <feOffset dy="18" />
              <feColorMatrix values="0 0 0 0 0.02 0 0 0 0 0.04 0 0 0 0 0.1 0 0 0 .6 0" />
              <feBlend in="SourceGraphic" />
            </filter>
          </defs>
          <circle cx="280" cy="280" r="214" fill="url(#glass)" stroke="white" strokeOpacity=".12" />
          <circle cx="280" cy="280" r="185" fill="none" stroke="url(#metal)" strokeWidth="2" strokeDasharray="5 13" opacity=".55" />
          <path d="M165 388V164l94 145 82-145v224M341 388h72" fill="none" stroke="#020713" strokeOpacity=".42" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" transform="translate(7 10)" />
          <path d="M165 388V164l94 145 82-145v224M341 388h72" fill="none" stroke="url(#metal)" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" filter="url(#depth)" />
          <path d="M165 388V164l94 145 82-145v224M341 388h72" fill="none" stroke="white" strokeOpacity=".46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="translate(-4 -5)" />
          <circle cx="431" cy="131" r="9" fill="#38BDF8" />
          <circle cx="431" cy="131" r="20" fill="none" stroke="#38BDF8" strokeOpacity=".28" />
        </svg>
      </motion.div>
    </div>
  );
}
