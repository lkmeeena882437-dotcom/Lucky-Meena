import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Reveal, SectionHeading } from '../components/Reveal';
import { Sticker } from '../components/Sticker';
import { Icon } from '../components/Icons';
import { personal } from '../data/portfolio';

export function About() {
  return <section className="about-section section" id="about" aria-labelledby="about-heading">
    <BackgroundEnvironment variant="pearl"/>
    <div className="outlined-number" aria-hidden="true">01</div>
    <div className="page-shell">
      <SectionHeading number="01" eyebrow="About the practice" title="More than a portfolio." accent="This is how I think and create." description="A connected approach for digital brands that need strategy and execution to move in the same direction."/>
      <div className="about-grid">
        <Reveal className="about-visual">
          <div className="profile-system">
            <div className="profile-grid"/>
            <div className="profile-monogram">LM<span>लक्की मीणा</span></div>
            <div className="profile-orbit orbit-a"/><div className="profile-orbit orbit-b"/>
            <div className="profile-chip chip-location"><Icon name="location"/><span>{personal.location}</span></div>
            <div className="profile-chip chip-availability"><i/><span>Currently available</span></div>
            <div className="about-sticker"><Sticker icon="layers" color="violet" size="medium"/></div>
          </div>
        </Reveal>
        <div className="about-content">
          <Reveal><p className="about-lead">I connect the parts that usually get handed between specialists: the message, the interface, the workflow and the growth system behind it.</p></Reveal>
          <Reveal delay={.06}><p className="about-body">My focus is simple: make the offer easier to understand, the operation easier to run and the digital experience easier to trust. That can mean structuring a Telegram community, planning acquisition, automating a manual process or building the website that brings it all together.</p></Reveal>
          <Reveal className="about-note" delay={.12}><Icon name="check"/><p><strong>Honest by design.</strong> This portfolio intentionally avoids invented client names, testimonials and performance numbers. Verified work can replace the marked project slots.</p></Reveal>
          <div className="highlight-grid">
            <Reveal className="highlight-card" delay={.12}><strong>05</strong><span>connected core<br/>capabilities</span></Reveal>
            <Reveal className="highlight-card" delay={.16}><strong>01</strong><span>accountable<br/>operator</span></Reveal>
            <Reveal className="highlight-card" delay={.2}><strong>100%</strong><span>responsive-first<br/>thinking</span></Reveal>
            <Reveal className="highlight-card" delay={.24}><strong>∞</strong><span>remote-ready<br/>collaboration</span></Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
