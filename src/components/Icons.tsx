import type { SVGProps } from 'react';

export type IconName = 'arrow' | 'message' | 'analytics' | 'spark' | 'globe' | 'browser' | 'cursor' | 'code' | 'layers' | 'location' | 'mail' | 'copy' | 'check' | 'menu' | 'close' | 'github' | 'linkedin' | 'resume';

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const common = { viewBox: '0 0 24 24', 'aria-hidden': true, ...props };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 19 19 5"/><path d="M9 5h10v10"/></>,
    message: <><path d="M20 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.5V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5.5A4 4 0 0 1 20 15Z"/><path d="M7 9h10M7 13h6"/></>,
    analytics: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/><path d="m4 6 6-4 6 7 6-4"/></>,
    spark: <><path d="m12 2 1.3 4.7L18 8l-4.7 1.3L12 14l-1.3-4.7L6 8l4.7-1.3L12 2Z"/><path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14ZM5 13l.7 2.3L8 16l-2.3.7L5 19l-.7-2.3L2 16l2.3-.7L5 13Z"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    browser: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 6.5h.01M9 6.5h.01"/></>,
    cursor: <><path d="m5 3 13 9-6 1-3 6L5 3Z"/><path d="m13 14 4 5"/></>,
    code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 3l-4 18"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <><path d="M4 8h16M4 16h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    github: <><path d="M15 22v-3.9c0-1 .1-1.4-.5-2 3.2-.4 6.5-1.6 6.5-7.1a5.5 5.5 0 0 0-1.5-3.9A5.1 5.1 0 0 0 19.3 1S18.1.6 15 2.5a13.4 13.4 0 0 0-6 0C5.9.6 4.7 1 4.7 1a5.1 5.1 0 0 0-.2 4.1A5.5 5.5 0 0 0 3 9c0 5.5 3.3 6.7 6.5 7.1-.5.5-.6 1.2-.5 2V22"/><path d="M9 19c-3 .9-3-1.5-4-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
    resume: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
