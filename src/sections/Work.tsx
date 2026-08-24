import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { ProjectVisual } from '../components/ProjectVisual';
import { Reveal, SectionHeading } from '../components/Reveal';
import { projects } from '../data/portfolio';

export function Work() {
  return <section className="work-section section" id="work" aria-labelledby="work-heading">
    <BackgroundEnvironment variant="violet"/>
    <div className="outlined-number" aria-hidden="true">03</div>
    <div className="page-shell">
      <SectionHeading number="03" eyebrow="Featured work" title="Selected work. Built to look good" accent="and work better." description="The visual systems below are handcrafted interface illustrations—not AI-generated images. Replace each clearly marked slot with verified project content when available." dark/>
      <div className="project-list">
        {projects.map((project, index) => <Reveal className={`project-card project-${project.accent} ${index % 2 ? 'project-reverse' : ''}`} key={project.id}>
          <div className="project-media"><ProjectVisual type={project.id}/><span className="project-status mono"><i/>{project.status}</span></div>
          <div className="project-copy">
            <div className="project-heading"><span className="project-index mono">{project.index}</span><p className="mono">{project.category}</p></div>
            <h3>{project.title}</h3>
            <div className="project-detail"><small className="mono">CHALLENGE</small><p>{project.challenge}</p></div>
            <div className="project-detail"><small className="mono">SOLUTION FORMAT</small><p>{project.solution}</p></div>
            <div className="project-meta"><div><small className="mono">ROLE</small><strong>{project.role}</strong></div><div><small className="mono">TOOLS</small><span>{project.tools.join(' · ')}</span></div></div>
            <div className="project-links"><span className="project-placeholder-link">Add live website <Icon name="arrow"/></span><span className="project-placeholder-link">Add case study <Icon name="arrow"/></span></div>
          </div>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
