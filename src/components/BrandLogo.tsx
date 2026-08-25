import { personal } from '../data/portfolio';

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand-logo ${light ? 'is-light' : ''}`} href="#home" aria-label="Lucky Meena — home">
      <span className="brand-photo">
        <img src={personal.photos.profile} alt="" referrerPolicy="no-referrer" />
      </span>
      <span>
        <strong>Lucky Meena</strong>
        <small>Digital systems & growth</small>
      </span>
    </a>
  );
}
