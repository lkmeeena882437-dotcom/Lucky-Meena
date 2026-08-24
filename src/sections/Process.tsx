import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Reveal, SectionHeading } from '../components/Reveal';
import { Icon } from '../components/Icons';

const steps = [
  { number: '01', verb: 'Discover', title: 'Find the real constraint', text: 'Align on the audience, offer, context and the outcome the work must support.', icon: 'cursor' },
  { number: '02', verb: 'Define', title: 'Make the route visible', text: 'Turn the brief into priorities, system logic and a clear definition of done.', icon: 'layers' },
  { number: '03', verb: 'Design & build', title: 'Ship the useful thing', text: 'Create the interface, workflow or growth asset with frequent, focused reviews.', icon: 'code' },
  { number: '04', verb: 'Launch & improve', title: 'Read the real signals', text: 'Check quality, document the handoff and identify the strongest next iteration.', icon: 'analytics' },
] as const;

export function Process() {
  return <section className="process-section section" id="process" aria-labelledby="process-heading">
    <BackgroundEnvironment variant="mint"/>
    <div className="outlined-number" aria-hidden="true">04</div>
    <div className="page-shell">
      <SectionHeading number="04" eyebrow="A simple process" title="From first idea to final launch," accent="made simple." description="A direct four-step rhythm built around useful decisions instead of unnecessary meetings."/>
      <div className="process-grid">
        {steps.map((step, index) => <Reveal className="process-step" key={step.number} delay={index * .07}>
          <div className="process-track"><span>{step.number}</span><i/></div>
          <div className="process-icon"><Icon name={step.icon}/></div>
          <p className="mono">{step.verb}</p><h3>{step.title}</h3><span>{step.text}</span>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
