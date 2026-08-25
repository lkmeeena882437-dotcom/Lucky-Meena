import { useEffect, useRef } from 'react';

const VIDEO_SRC = 'https://videos.pexels.com/video-files/11485363/11485363-hd_1920_1080_60fps.mp4';
const POSTER_SRC = 'https://images.pexels.com/videos/11485363/pexels-photo-11485363.jpeg?auto=compress&w=1920';

export function SiteAtmosphere() {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const node = root.current;
    if (!node) return;

    const sync = () => {
      if (!video.current) return;
      if (reduced.matches) video.current.pause();
      else video.current.play().catch(() => undefined);
    };
    sync();
    reduced.addEventListener('change', sync);

    if (!fine.matches || reduced.matches) {
      return () => reduced.removeEventListener('change', sync);
    }

    const move = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      node.style.setProperty('--mx', `${event.clientX}px`);
      node.style.setProperty('--my', `${event.clientY}px`);
      node.style.setProperty('--tx', `${x * 28}px`);
      node.style.setProperty('--ty', `${y * 18}px`);
      node.style.setProperty('--rx', `${y * -6}deg`);
      node.style.setProperty('--ry', `${x * 8}deg`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      reduced.removeEventListener('change', sync);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return (
    <div className="site-atmosphere" ref={root} aria-hidden="true">
      <video ref={video} className="atmosphere-video" autoPlay muted loop playsInline preload="metadata" poster={POSTER_SRC}>
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="atmosphere-grade" />
      <div className="atmosphere-stars" />
      <div className="atmosphere-flora">
        <i className="flora flora-a" />
        <i className="flora flora-b" />
        <i className="flora flora-c" />
        <i className="flora flora-d" />
        <i className="flora flora-e" />
      </div>
      <div className="atmosphere-light" />
      <div className="atmosphere-vignette" />
    </div>
  );
}
