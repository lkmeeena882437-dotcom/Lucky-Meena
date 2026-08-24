import { motion,useReducedMotion } from 'framer-motion';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Button } from '../components/Button';
import { HeroMonogram } from '../components/HeroMonogram';
import { Icon } from '../components/Icons';
import { personal } from '../data/portfolio';

const trust=['Telegram Management','AI Automation','Crypto','Development','Ads','Landing Pages'];

export function Hero(){
  const reduce=useReducedMotion();const item={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};
  return <section className="hero-section" id="home" aria-labelledby="hero-title"><BackgroundEnvironment variant="cosmic"/><div className="hero-grid page-shell">
    <motion.div className="hero-copy" initial={reduce?false:'hidden'} animate="show" variants={{hidden:{},show:{transition:{staggerChildren:.07}}}}>
      <motion.div className="availability-label" variants={item}><i/><span>{personal.availability}</span></motion.div>
      <motion.p className="hero-role mono" variants={item}>DIGITAL BUILDER · COMMUNITY · AUTOMATION</motion.p>
      <motion.h1 id="hero-title" variants={item}>Building, Managing & <span>Automating Digital Growth.</span></motion.h1>
      <motion.p className="hero-description" variants={item}>I&apos;m Lucky—a digital builder working across Telegram communities, AI content automation, crypto ecosystems, paid advertising, landing pages and development.</motion.p>
      <motion.p className="hero-outcome" variants={item}>I turn ideas into systems, communities into active audiences, and workflows into automation.</motion.p>
      <motion.div className="hero-actions" variants={item}><Button href={personal.telegramUrl||'#contact'}>Work With Me</Button><Button href="#work" variant="secondary">View My Work ↓</Button></motion.div>
      <motion.div className="hero-meta" variants={item}><div><Icon name="location"/><span>{personal.location}</span></div><a href={personal.githubUrl} target="_blank" rel="noreferrer"><Icon name="github"/>GitHub</a></motion.div>
    </motion.div>
    <motion.div className="hero-visual-wrap" initial={reduce?false:{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15,ease:[.22,1,.36,1]}}><HeroMonogram/></motion.div>
    <motion.div className="trust-strip" initial={reduce?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.55}}>{trust.map((item,index)=><span key={item}>{item}{index<trust.length-1&&<i/>}</span>)}</motion.div>
  </div></section>;
}
