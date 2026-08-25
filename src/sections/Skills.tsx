import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon, type IconName } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';
import { services } from '../data/portfolio';

export function Skills() {
  return (
    <section className="skills-section section" id="services" aria-labelledby="services-heading">
      <BackgroundEnvironment variant="sky" />
      <div className="page-shell">
        <SectionHeading
          headingId="services-heading"
          number="02"
          eyebrow="What I do"
          title="The work I"
          accent="actually take."
          description="Six services, tied to live sites and running campaigns — not a generic stack."
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={(index % 3) * 0.04}>
              <TiltCard className={`service-card accent-${service.accent} ${service.featured ? 'is-featured' : ''}`}>
                <div className="service-head">
                  <span className="mono">{service.number}</span>
                  <i>
                    <Icon name={service.icon as IconName} />
                  </i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
                <strong className="service-note">{service.note}</strong>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
