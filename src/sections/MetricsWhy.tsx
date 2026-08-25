import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon, type IconName } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { metrics, reasons } from '../data/portfolio';

export function MetricsWhy() {
  return (
    <section className="proof-section section" aria-labelledby="proof-heading">
      <BackgroundEnvironment variant="sky" />
      <div className="page-shell">
        <SectionHeading
          headingId="proof-heading"
          number="05"
          eyebrow="Built through action"
          title="Experience you can"
          accent="see in the work."
          description="A compact snapshot of the systems, skills and domains this portfolio is built around."
        />
        <div className="metrics-row">
          {metrics.map((metric, index) => (
            <Reveal className="metric-card" key={metric.label} delay={index * 0.04}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </Reveal>
          ))}
        </div>
        <div className="why-heading">
          <span className="mono">WHY WORK WITH ME</span>
          <h3>One builder. More context.</h3>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <Reveal className="reason-card" key={reason.title} delay={index * 0.04}>
              <i>
                <Icon name={reason.icon as IconName} />
              </i>
              <h4>{reason.title}</h4>
              <p>{reason.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
