import { motion, useReducedMotion } from 'framer-motion';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Button } from '../components/Button';
import { HeroMonogram } from '../components/HeroMonogram';
import { Icon } from '../components/Icons';
import { personal } from '../data/portfolio';

export function Hero() {
  const reduce = useReducedMotion();
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
  return <section className="hero-section" id="home" aria-labelledby="hero-title">
    <BackgroundEnvironment variant="cosmic"/>
    <div className="hero-grid page-shell">
      <motion.div className="hero-copy" initial={reduce ? false : 'hidden'} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .07 } } }}>
        <motion.div className="availability-label" variants={item}><i/><span>{personal.availability}</span></motion.div>
        <motion.p className="hero-role mono" variants={item}>COMMUNITY · AUTOMATION · WEB</motion.p>
        <motion.h1 id="hero-title" variants={item}>Clear digital systems.<span>Built to move.</span></motion.h1>
        <motion.p className="hero-description" variants={item}>{personal.tagline}</motion.p>
        <motion.div className="hero-actions" variants={item}>
          <Button href="#work">See my work</Button>
          <Button href="#contact" variant="secondary">Start a conversation</Button>
        </motion.div>
        <motion.div className="hero-meta" variants={item}>
          <div><Icon name="location"/><span>{personal.location}</span></div>
          <a href={personal.githubUrl} target="_blank" rel="noreferrer"><Icon name="github"/>GitHub</a>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual-wrap" initial={reduce ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15, ease: [.22,1,.36,1] }}><HeroMonogram/></motion.div>
    </div>
  </section>;
}
