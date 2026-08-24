import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon, type IconName } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';
import { services } from '../data/portfolio';

export function Skills() {
  return <section className="skills-section section" id="expertise" aria-labelledby="expertise-heading">
    <BackgroundEnvironment variant="sky"/>
    <div className="page-shell">
      <SectionHeading number="02" eyebrow="Expertise" title="Five capabilities." accent="One practical system." description="Focused help where strategy, operations and interface meet."/>
      <div className="skills-grid">
        {services.map((service,index)=><Reveal key={service.number} delay={(index%3)*.04}>
          <TiltCard className={`skill-card accent-${service.accent}`}>
            <div className="skill-top"><span className="mono">{service.number}</span><i><Icon name={service.icon as IconName}/></i></div>
            <h3>{service.title}</h3><p>{service.description}</p>
            <div className="skill-tools">{service.tools.map(tool=><span key={tool}>{tool}</span>)}</div>
          </TiltCard>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
