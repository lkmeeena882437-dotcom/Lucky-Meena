import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon, type IconName } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { journey } from '../data/portfolio';

export function Journey() {
  return (
    <section className="journey-section section" id="journey" aria-labelledby="journey-heading">
      <BackgroundEnvironment variant="pearl" />
      <div className="page-shell">
        <SectionHeading
          number="03"
          eyebrow="My journey"
          title="From ideas to"
          accent="real digital projects."
          description="I learned by building—not only by watching."
        />
        <Reveal className="journey-intro">
          <p>Every community, workflow, website and experiment added another useful skill to the toolkit. Some ideas worked. Some failed. All of them taught me how to build better.</p>
        </Reveal>
        <div className="journey-track">
          {journey.map((step, index) => (
            <Reveal className="journey-step" key={step.number} delay={index * 0.05}>
              <div className="journey-icon">
                <Icon name={step.icon as IconName} />
              </div>
              <span className="mono">{step.number}</span>
              <h3>{step.phase}</h3>
              <p>{step.text}</p>
              {index < journey.length - 1 && <i className="journey-arrow">→</i>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
