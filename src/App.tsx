import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/Cursor';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Work } from './sections/Work';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  useEffect(() => {
    const desktop=window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(!desktop.matches||reduced.matches)return;
    const lenis=new Lenis({lerp:.09,smoothWheel:true,anchors:{offset:-76}});let frame=0;
    const raf=(time:number)=>{lenis.raf(time);frame=requestAnimationFrame(raf)};frame=requestAnimationFrame(raf);
    return()=>{cancelAnimationFrame(frame);lenis.destroy()};
  },[]);

  useEffect(()=>{
    if(!window.matchMedia('(hover: hover) and (pointer: fine)').matches)return;
    const move=(event:PointerEvent)=>{const target=(event.target as HTMLElement).closest<HTMLElement>('.magnetic');if(!target)return;const rect=target.getBoundingClientRect();target.style.setProperty('--mag-x',`${(event.clientX-rect.left-rect.width/2)*.08}px`);target.style.setProperty('--mag-y',`${(event.clientY-rect.top-rect.height/2)*.08}px`)};
    const reset=(event:PointerEvent)=>{const target=(event.target as HTMLElement).closest<HTMLElement>('.magnetic');if(target){target.style.setProperty('--mag-x','0px');target.style.setProperty('--mag-y','0px')}};
    document.addEventListener('pointermove',move);document.addEventListener('pointerout',reset);return()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerout',reset)};
  },[]);

  return <><a className="skip-link" href="#main">Skip to content</a><CustomCursor/><Navbar/><main id="main"><Hero/><About/><Skills/><Work/><Contact/></main><Footer/><MobileStickyCTA/></>;
}
export default App;
