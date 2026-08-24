import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Reveal, SectionHeading } from '../components/Reveal';
import { Sticker } from '../components/Sticker';
import { TiltCard } from '../components/TiltCard';
import { services } from '../data/portfolio';
import type { IconName } from '../components/Icons';

export function Skills() {
  return <section className="skills-section section" id="skills" aria-labelledby="skills-heading">
    <BackgroundEnvironment variant="sky"/>
    <div className="outlined-number" aria-hidden="true">02</div>
    <div className="page-shell">
      <SectionHeading number="02" eyebrow="Skills & services" title="One creative system for" accent="every digital need." description="Choose one focused capability or combine them into a connected growth system."/>
      <div className="skills-grid">
        {services.map((service, index) => <Reveal key={service.number} delay={(index % 3) * .06}>
          <TiltCard className={`skill-card accent-${service.accent}`}>
            <div className="skill-top"><span className="mono">{service.number}</span><Sticker icon={service.icon as IconName} color={service.accent} size="medium"/></div>
            <div className="skill-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
            <div className="skill-tools">{service.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
          </TiltCard>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
