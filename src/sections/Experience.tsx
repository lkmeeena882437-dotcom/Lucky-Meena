import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Reveal, SectionHeading } from '../components/Reveal';
import { journey } from '../data/portfolio';

export function Experience() {
  return <section className="experience-section section" id="experience" aria-labelledby="experience-heading">
    <BackgroundEnvironment variant="pearl"/>
    <div className="outlined-number" aria-hidden="true">05</div>
    <div className="page-shell experience-layout">
      <SectionHeading number="05" eyebrow="Experience & journey" title="The path behind" accent="the practice." description="This timeline is intentionally ready for your verified work history, education and independent milestones."/>
      <div className="timeline">
        {journey.map((item, index) => <Reveal className="timeline-item" key={index} delay={index * .07}>
          <div className="timeline-date mono">{item.date}</div>
          <div className="timeline-marker"><i/></div>
          <div className="timeline-content"><p className="mono">{item.place}</p><h3>{item.role}</h3><span>{item.description}</span><div>{item.tags.map(tag=><small className="mono" key={tag}>{tag}</small>)}</div></div>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
