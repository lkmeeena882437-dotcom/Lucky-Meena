import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { personal } from '../data/portfolio';

export function About() {
  return (
    <section className="about-section section" id="about" aria-labelledby="about-heading">
      <BackgroundEnvironment variant="pearl" />
      <div className="page-shell">
        <SectionHeading headingId="about-heading" number="01" eyebrow="Who am I?" title="Built from" accent="Kota. Shipped live." />
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
              <p className="about-lead">I run AdsTele and I build the pages that catch the traffic.</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>From Kota I handle Telegram communities, landing pages and paid ads as one job — not three vendors. Jiga Bhai VIP, Gujarati Trader X and AdsTele are live. Telegram campaigns are running; screenshots on request.</p>
            </Reveal>
            <Reveal className="about-method" delay={0.08}>
              <span className="mono">HOW I WORK</span>
              <div>
                <strong>Page</strong>
                <i>→</i>
                <strong>Traffic</strong>
                <i>→</i>
                <strong>Community</strong>
              </div>
            </Reveal>
            <Reveal className="about-statement" delay={0.12}>
              <Icon name="spark" />
              <strong>If the offer is clear, I can build the site and put it in front of people.</strong>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
