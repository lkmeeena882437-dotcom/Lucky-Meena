import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon, type IconName } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { journey, personal } from '../data/portfolio';

export function Journey() {
  return (
    <section className="journey-section section" id="journey" aria-labelledby="journey-heading">
      <BackgroundEnvironment variant="pearl" />
      <div className="page-shell">
        <SectionHeading
          headingId="journey-heading"
          number="03"
          eyebrow="My journey"
          title="Kota to live systems."
          accent=""
          description="From Kota to live systems — the real line."
        />
        <div className="journey-board">
          <Reveal className="journey-intro">
            <p>I am Lucky Meena, from Kota. I built this desk myself: Telegram ads, communities, trading rooms and websites. AdsTele, Jiga Bhai VIP and Trader X are the marks on that path.</p>
          </Reveal>
          <Reveal className="journey-visual">
            <img src={personal.photos.journey} alt="Lucky Meena" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            <p className="journey-caption mono">Lucky Meena · Kota, Rajasthan</p>
          </Reveal>
        </div>
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
