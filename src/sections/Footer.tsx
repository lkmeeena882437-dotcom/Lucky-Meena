import { BrandLogo } from '../components/BrandLogo';
import { Icon } from '../components/Icons';
import { navItems,personal } from '../data/portfolio';

export function Footer(){return <footer className="site-footer"><div className="page-shell"><div className="footer-main"><BrandLogo light/><p>Clear systems. Useful outcomes.</p><a className="footer-top magnetic" href="#home">Back to top <Icon name="arrow"/></a></div><div className="footer-bottom"><nav aria-label="Footer navigation">{navItems.map(item=><a href={item.href} key={item.href}>{item.label}</a>)}</nav><span>© {new Date().getFullYear()} {personal.name} · {personal.nativeName}</span></div></div></footer>}
