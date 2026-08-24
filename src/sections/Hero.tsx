import { motion, useReducedMotion } from 'framer-motion';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Button } from '../components/Button';
import { HeroMonogram } from '../components/HeroMonogram';
import { Icon } from '../components/Icons';
import { personal } from '../data/portfolio';

const trust = ['Telegram Management', 'AI Automation', 'Crypto', 'Development', 'Ads', 'Landing Pages'];

export function Hero() {
  const reduce = useReducedMotion();
  const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <BackgroundEnvironment variant="pearl" />
      <div className="hero-grid page-shell">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : 'hidden'}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div className="hero-visual-wrap" variants={item}>
            <HeroMonogram />
          </motion.div>
          <motion.div className="availability-label" variants={item}>
            <i />
            <span>{personal.availability}</span>
          </motion.div>
          <motion.p className="hero-role mono" variants={item}>
            Digital builder · Community · Automation
          </motion.p>
          <motion.h1 id="hero-title" variants={item}>
            Building, managing & <span>automating digital growth.</span>
          </motion.h1>
          <motion.i className="hero-rule" variants={item} />
          <motion.p className="hero-description" variants={item}>
            I&apos;m Lucky—a digital builder working across Telegram communities, AI content automation, crypto ecosystems, paid advertising, landing pages and development.
          </motion.p>
          <motion.p className="hero-outcome" variants={item}>
            I turn ideas into systems, communities into active audiences, and workflows into automation.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <Button href={personal.telegramUrl || '#contact'}>Work With Me</Button>
            <Button href="#work" variant="secondary">View My Work</Button>
          </motion.div>
          <motion.div className="hero-meta" variants={item}>
            <div>
              <Icon name="location" />
              <span>{personal.location}</span>
            </div>
            <a href={personal.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" />
              GitHub
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="trust-strip"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
        >
          {trust.map((label, index) => (
            <span key={label}>
              {label}
              {index < trust.length - 1 && <i />}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
