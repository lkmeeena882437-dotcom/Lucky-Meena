import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const move = (event: MouseEvent) => { x = event.clientX; y = event.clientY; };
    const render = () => {
      rx += (x - rx) * .16; ry += (y - ry) * .16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(render);
    };
    const active = (event: Event) => {
      const target = event.target as HTMLElement;
      ring.current?.classList.toggle('cursor-active', Boolean(target.closest('a,button,input,textarea,select,.tilt-card')));
    };
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', active);
    render();
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', active); cancelAnimationFrame(raf); };
  }, []);

  return <><div className="cursor-dot" ref={dot}/><div className="cursor-ring" ref={ring}/></>;
}
