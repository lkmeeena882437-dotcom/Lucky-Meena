import { motion, useReducedMotion } from 'framer-motion';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Button } from '../components/Button';
import { HeroMonogram } from '../components/HeroMonogram';
import { Icon } from '../components/Icons';
import { personal } from '../data/portfolio';

export function Hero() {
  const reduce = useReducedMotion();
  const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
  return <section className="hero-section" id="home" aria-labelledby="hero-title">
    <BackgroundEnvironment variant="cosmic"/>
    <div className="hero-grid page-shell">
      <motion.div className="hero-copy" initial={reduce ? false : 'hidden'} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}>
        <motion.div className="availability-label" variants={item} transition={{ duration: .7, ease: [.22,1,.36,1] }}><i/><span>{personal.availability}</span></motion.div>
        <motion.p className="hero-role mono" variants={item}>UI / GROWTH / AUTOMATION / COMMUNITY</motion.p>
        <motion.h1 id="hero-title" variants={item}>I build digital<br/>systems people<br/><span>remember & use.</span></motion.h1>
        <motion.p className="hero-description" variants={item}>{personal.tagline}</motion.p>
        <motion.div className="hero-actions" variants={item}>
          <Button href="#work">View selected work</Button>
          <Button href="#contact" variant="secondary">Let&apos;s work together</Button>
        </motion.div>
        <motion.div className="hero-meta" variants={item}>
          <div><Icon name="location"/><span><small>Based in</small>{personal.location}</span></div>
          <div className="hero-socials"><a href={personal.githubUrl} target="_blank" rel="noreferrer"><Icon name="github"/>GitHub</a><span className="editable-link"><Icon name="linkedin"/>LinkedIn · add link</span><span className="editable-link"><Icon name="resume"/>Resume · add link</span></div>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual-wrap" initial={reduce ? false : { opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .2, ease: [.22,1,.36,1] }}><HeroMonogram/></motion.div>
    </div>
    <a className="hero-scroll" href="#about" aria-label="Scroll to about section"><span>SCROLL TO EXPLORE</span><i><b/></i></a>
  </section>;
}
