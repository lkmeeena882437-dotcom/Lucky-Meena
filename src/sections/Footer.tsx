import { BrandLogo } from '../components/BrandLogo';
import { Icon } from '../components/Icons';
import { navItems, personal } from '../data/portfolio';

const socials = [
  ['Telegram', personal.telegramUrl],
  ['Email', personal.emailUrl],
  ['GitHub', personal.githubUrl],
  ['LinkedIn', personal.linkedinUrl],
  ['Instagram', personal.instagramUrl],
  ['X', personal.xUrl],
] as const;

export function Footer() {
  const liveSocials = socials.filter(([, url]) => Boolean(url));

  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <BrandLogo light />
          <div className="footer-position">
            <strong>LUCKY</strong>
            <span>Digital Builder · Community Manager · AI Automation</span>
          </div>
          <a className="footer-top magnetic" href="#home">
            Back to top <Icon name="arrow" />
          </a>
        </div>
        {liveSocials.length > 0 && (
          <div className="footer-socials">
            {liveSocials.map(([label, url]) => (
              <a href={url} target="_blank" rel="noreferrer" key={label}>
                {label}
              </a>
            ))}
          </div>
        )}
        <div className="footer-bottom">
          <nav aria-label="Footer navigation">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <span>© {new Date().getFullYear()} Lucky Meena · Building in public. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
