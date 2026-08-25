export function ProjectVisual({ src, title }: { src: string; title: string }) {
  return (
    <div className="project-art project-cover" aria-hidden="true">
      <img src={src} alt="" />
      <div className="project-cover-shade" />
      <strong className="project-cover-title">{title}</strong>
    </div>
  );
}
