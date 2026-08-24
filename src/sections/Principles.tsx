import { Reveal, SectionHeading } from '../components/Reveal';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { principles } from '../data/portfolio';
import { Icon } from '../components/Icons';

export function Principles() {
  return <section className="principles-section section" aria-labelledby="principles-heading">
    <BackgroundEnvironment variant="sky"/>
    <div className="page-shell">
      <SectionHeading number="06" eyebrow="What you can expect" title="No invented testimonials." accent="Just a clear working standard." description="Until real client quotes are available, these are the principles the work can be held against."/>
      <div className="principles-grid">
        {principles.map((item, index)=><Reveal className="principle-card" key={item.number} delay={(index % 3) * .05}>
          <span className="mono">{item.number}</span><Icon name="check"/><h3>{item.title}</h3><p>{item.text}</p>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
