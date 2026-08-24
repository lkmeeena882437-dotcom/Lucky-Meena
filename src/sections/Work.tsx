import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundEnvironment } from '../components/BackgroundEnvironment';
import { Icon } from '../components/Icons';
import { ProjectVisual } from '../components/ProjectVisual';
import { Reveal, SectionHeading } from '../components/Reveal';
import { personal, work } from '../data/portfolio';

export function Work() {
  const [active, setActive] = useState(0);
  const current = work[active];

  return (
    <section className="work-section section" id="work" aria-labelledby="work-heading">
      <BackgroundEnvironment variant="violet" />
      <div className="page-shell">
        <SectionHeading
          number="04"
          eyebrow="Selected work & experiments"
          title="Work explained as"
          accent="systems, not thumbnails."
          description="Open a project to review the role, focus and skills behind it."
        />
        <div className="case-layout">
          <div className="case-list">
            {work.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.035}>
                <button
                  className={`case-tab ${active === index ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-expanded={active === index}
                >
                  <span className="mono">{project.number}</span>
                  <div>
                    <small className="mono">{project.category}</small>
                    <strong>{project.title}</strong>
                    <em>{active === index ? 'Case study open' : 'View case study'}</em>
                  </div>
                  <Icon name={active === index ? 'close' : 'arrow'} />
                </button>
              </Reveal>
            ))}
          </div>
          <div className="case-stage">
            <AnimatePresence mode="wait">
              <motion.article
                className="case-study"
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="case-visual">
                  <ProjectVisual type={current.id} />
                  <span className="case-status mono">
                    <i />
                    {current.status}
                  </span>
                </div>
                <div className="case-content">
                  <p className="mono">PROJECT {current.number}</p>
                  <h3>{current.title}</h3>
                  <p>{current.summary}</p>
                  <div className="case-role">
                    <span className="mono">MY ROLE</span>
                    <strong>{current.role}</strong>
                  </div>
                  <div className="case-focus">
                    {current.focus.map((item) => (
                      <span key={item}>
                        <Icon name="check" />
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="case-skills">
                    {current.skills.map((skill) => (
                      <small className="mono" key={skill}>
                        {skill}
                      </small>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
        <a className="work-explore" href={personal.githubUrl} target="_blank" rel="noreferrer">
          Explore projects on GitHub <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
