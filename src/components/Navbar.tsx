import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrandLogo } from './BrandLogo';
import { Icon } from './Icons';
import { navItems } from '../data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();

    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55%', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', scroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <BrandLogo light />
        <div className="desktop-nav">
          {navItems.map((item) => (
            <a className={active === item.href.slice(1) ? 'active' : ''} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">
          <span>Let&apos;s talk</span>
          <Icon name="arrow" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navItems.map((item, index) => (
              <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
                <small>0{index + 1}</small>
                <span>{item.label}</span>
                <Icon name="arrow" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
