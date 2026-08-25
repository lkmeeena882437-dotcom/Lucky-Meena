import { motion, useReducedMotion } from 'framer-motion';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Button } from '../components/Button';
import { Portrait } from '../components/Portrait';
import { Icon } from '../components/Icons';
import { personal } from '../data/portfolio';

const trust = ['Telegram ads', 'Community', 'Trading rooms', 'Landing pages', 'Websites', 'Full desk'];

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
          <motion.div className="availability-label" variants={item}>
            <i />
            <span>{personal.availability}</span>
          </motion.div>
          <motion.p className="hero-role mono" variants={item}>
            Kota · Telegram desk · AdsTele
          </motion.p>
          <motion.h1 id="hero-title" variants={item}>
            The full Telegram desk.
          </motion.h1>
          <motion.i className="hero-rule" variants={item} />
          <motion.p className="hero-description" variants={item}>
            Ads, communities, trading rooms, landing pages and websites — I handle the whole stack from Kota, not one leftover task.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <Button href={personal.telegramUrl}>Talk on Telegram</Button>
            <Button href="#work" variant="secondary">See live work</Button>
          </motion.div>
          <motion.div className="hero-meta" variants={item}>
            <div>
              <Icon name="location" />
              <span>{personal.location}</span>
            </div>
            <a href={personal.telegramUrl}>
              <Icon name="message" />
              {personal.telegram}
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual-wrap"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
        >
          <Portrait src={personal.photos.portrait} alt={`${personal.name} portrait`} caption={`${personal.name} · Kota`} />
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
