import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { personal } from '../data/portfolio';

export function About() {
  return (
    <section className="about-section section" id="about" aria-labelledby="about-heading">
      <BackgroundEnvironment variant="pearl" />
      <div className="page-shell">
        <SectionHeading headingId="about-heading" number="01" eyebrow="Who I am" title="One operator." accent="Full stack." />
        <div className="about-grid">
          <Reveal className="identity-card">
            <div className="identity-photo">
              <img src={personal.photos.profile} alt={personal.name} referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="identity-body">
              <div className="identity-top">
                <span className="identity-status">
                  <i />
                  Open to work
                </span>
              </div>
              <div className="identity-copy">
                <h3>{personal.name}</h3>
                <span>{personal.nativeName}</span>
                <strong>{personal.location}</strong>
              </div>
              <div className="identity-bottom">
                <span>
                  <Icon name="message" />
                  {personal.telegram}
                </span>
              </div>
            </div>
          </Reveal>
          <div className="about-copy">
            <Reveal>
              <p className="about-lead">I run the Telegram desk — ads, rooms, trading and the page.</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>Not only Telegram ads. Community management, trading rooms, landing pages and websites sit on the same desk. AdsTele, Jiga Bhai VIP and Trader X are live. Campaigns are running.</p>
            </Reveal>
            <Reveal className="about-method" delay={0.08}>
              <span className="mono">THE DESK</span>
              <div>
                <strong>Ads</strong>
                <i>→</i>
                <strong>Community</strong>
                <i>→</i>
                <strong>Trading</strong>
                <i>→</i>
                <strong>Web</strong>
              </div>
            </Reveal>
            <Reveal className="about-statement" delay={0.12}>
              <Icon name="spark" />
              <strong>If it lives on Telegram, I can run it — and I can build the page that feeds it.</strong>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
