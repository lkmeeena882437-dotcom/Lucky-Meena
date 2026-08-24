import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { ProjectVisual } from '../components/ProjectVisual';
import { Reveal, SectionHeading } from '../components/Reveal';
import { work } from '../data/portfolio';

export function Work() {
  return <section className="work-section section" id="work" aria-labelledby="work-heading">
    <BackgroundEnvironment variant="violet"/>
    <div className="page-shell">
      <SectionHeading number="03" eyebrow="Selected work" title="Shipped work. Focused prototypes." accent="Built with purpose." description="One live project and two product demonstrations, labelled clearly." dark/>
      <div className="project-list">
        {work.map((project,index)=><Reveal className={`project-card project-${project.accent}`} key={project.id} delay={index*.05}>
          <div className="project-media"><ProjectVisual type={project.id}/><span className="project-proof mono"><i/>{project.proof}</span></div>
          <div className="project-copy">
            <p className="project-eyebrow mono">{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-info"><span><small className="mono">ROLE</small>{project.role}</span><span><small className="mono">TOOLS</small>{project.tools.join(' · ')}</span></div>
            {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<Icon name="arrow"/></a> : <span className="prototype-note"><Icon name="spark"/>Designed as an in-portfolio systems demo</span>}
          </div>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
