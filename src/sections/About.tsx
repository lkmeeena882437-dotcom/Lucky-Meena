import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { Reveal, SectionHeading } from '../components/Reveal';
import { personal } from '../data/portfolio';

export function About() {
  return <section className="about-section section" id="about" aria-labelledby="about-heading">
    <BackgroundEnvironment variant="pearl"/>
    <div className="page-shell">
      <SectionHeading number="01" eyebrow="About" title="One person. Connected thinking." accent="Less handoff, more clarity."/>
      <div className="about-grid">
        <Reveal className="identity-card">
          <div className="identity-top"><span className="identity-mark">LM</span><span className="identity-status"><i/>Open to work</span></div>
          <div className="identity-copy"><p className="mono">INTRODUCTION</p><h3>{personal.name}</h3><span>{personal.nativeName}</span><strong>{personal.role}</strong></div>
          <div className="identity-bottom"><span><Icon name="location"/>{personal.location}</span><small className="mono">BASED IN INDIA · WORKING REMOTELY</small></div>
          <div className="identity-rings" aria-hidden="true"><i/><i/><i/></div>
        </Reveal>
        <div className="about-copy">
          <Reveal><p className="about-lead">I turn messy digital operations into clear, useful systems.</p></Reveal>
          <Reveal delay={.05}><p>From Telegram communities and paid growth to AI workflows and fast websites, I connect strategy with execution—so the work moves forward without five different handoffs.</p></Reveal>
          <Reveal className="about-principle" delay={.1}><span className="mono">HOW I WORK</span><strong>Understand the problem. Build only what helps. Keep the result easy to run.</strong></Reveal>
          <div className="about-focus">
            {['Community','Acquisition','Automation','Web'].map((item,index)=><Reveal key={item} delay={.1 + index*.04}><span className="mono">0{index+1}</span><strong>{item}</strong></Reveal>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
