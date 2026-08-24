import { BrandLogo } from '../components/BrandLogo';
import { Icon } from '../components/Icons';
import { navItems, personal } from '../data/portfolio';

export function Footer() {
  return <footer className="site-footer">
    <div className="page-shell">
      <div className="footer-main"><BrandLogo light/><p>Digital systems that are clear to understand,<br/><span>calm to use and built to move.</span></p><a className="footer-top magnetic" href="#home">Back to top <Icon name="arrow"/></a></div>
      <div className="footer-links"><nav aria-label="Footer navigation">{navItems.map(item=><a href={item.href} key={item.href}>{item.label}</a>)}</nav><div><a href={personal.githubUrl} target="_blank" rel="noreferrer">GitHub</a><span>LinkedIn [ADD LINK]</span><span>Resume [ADD LINK]</span></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Lucky Meena. All rights reserved.</span><span>Designed & built for {personal.name} · {personal.nativeName}</span></div>
    </div>
  </footer>;
}
