import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Journey } from './sections/Journey';
import { Work } from './sections/Work';
import { MetricsWhy } from './sections/MetricsWhy';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: { offset: -88 } });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Work />
        <MetricsWhy />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

export default App;
