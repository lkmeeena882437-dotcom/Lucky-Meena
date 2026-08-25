type PortraitProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
};

export function Portrait({ src, alt, className = '', caption }: PortraitProps) {
  return (
    <figure className={`portrait ${className}`}>
      <div className="portrait-mat">
        <img src={src} alt={alt} referrerPolicy="no-referrer" />
      </div>
      {caption && <figcaption className="mono">{caption}</figcaption>}
    </figure>
  );
}
