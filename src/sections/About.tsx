import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { personal } from '../data/portfolio';

export function About() {
  return (
    <section className="about-section section" id="about" aria-labelledby="about-heading">
      <BackgroundEnvironment variant="pearl" />
      <div className="page-shell">
        <SectionHeading number="01" eyebrow="Who am I?" title="More than just" accent="one skill." />
        <div className="about-grid">
          <Reveal className="identity-card">
            <div className="identity-photo">
              <img src={personal.photos.profile} alt={personal.name} referrerPolicy="no-referrer" />
            </div>
            <div className="identity-body">
              <div className="identity-top">
                <span className="identity-mark">LM</span>
                <span className="identity-status">
                  <i />
                  Open to work
                </span>
              </div>
              <div className="identity-copy">
                <p className="mono">INTRODUCTION</p>
                <h3>{personal.name}</h3>
                <span>{personal.nativeName}</span>
                <strong>{personal.role}</strong>
              </div>
              <div className="identity-bottom">
                <span>
                  <Icon name="location" />
                  {personal.location}
                </span>
                <small className="mono">BUILDING ACROSS COMMUNITY · AI · WEB</small>
              </div>
            </div>
          </Reveal>
          <div className="about-copy">
            <Reveal>
              <p className="about-lead">I work at the intersection of community, technology, automation and digital growth.</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>I don&apos;t limit myself to one niche. My work spans Telegram communities, AI-powered content workflows, crypto operations, advertising and landing pages for digital businesses.</p>
            </Reveal>
            <Reveal className="about-method" delay={0.08}>
              <span className="mono">MY APPROACH</span>
              <div>
                <strong>Understand</strong>
                <i>→</i>
                <strong>Build</strong>
                <i>→</i>
                <strong>Execute</strong>
                <i>→</i>
                <strong>Improve</strong>
              </div>
            </Reveal>
            <Reveal className="about-statement" delay={0.12}>
              <Icon name="spark" />
              <strong>I build digital systems that save time, improve growth and turn ideas into execution.</strong>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
