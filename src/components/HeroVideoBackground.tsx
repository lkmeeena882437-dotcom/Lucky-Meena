import { useEffect, useRef } from 'react';

const VIDEO_URL = 'https://videos.pexels.com/video-files/3143531/3143531-hd_1920_1080_25fps.mp4';
const POSTER_URL = 'https://images.pexels.com/videos/3143531/free-video-3143531.jpg?auto=compress&w=1920&h=1080&fit=crop';

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (!videoRef.current) return;
      if (reducedMotion.matches) videoRef.current.pause();
      else videoRef.current.play().catch(() => undefined);
    };
    syncPlayback();
    reducedMotion.addEventListener('change', syncPlayback);
    return () => reducedMotion.removeEventListener('change', syncPlayback);
  }, []);

  return <div className="hero-film" aria-hidden="true">
    <video ref={videoRef} className="hero-film-video" autoPlay muted loop playsInline preload="metadata" poster={POSTER_URL}>
      <source src={VIDEO_URL} type="video/mp4" />
    </video>
    <div className="hero-film-grade" />
    <div className="hero-film-depth" />
    <div className="hero-film-interface"><i /><i /><i /><span /></div>
    <div className="hero-film-grain" />
  </div>;
}
