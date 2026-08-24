export const personal = {
  name: 'Lucky Meena',
  nativeName: 'लक्की मीणा',
  monogram: 'LM',
  role: 'Digital Systems Designer & Growth Operator',
  tagline: 'I turn complex digital work into clear systems that are easier to use, run and grow.',
  location: 'Kota, Rajasthan, India',
  availability: 'Available for select projects',
  email: '[ADD YOUR EMAIL]',
  whatsapp: '[ADD WHATSAPP NUMBER]',
  telegram: '[ADD TELEGRAM HANDLE]',
  resumeUrl: '',
  githubUrl: 'https://github.com/lkmeeena882437-dotcom',
  linkedinUrl: '',
  contactEndpoint: '',
} as const;

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const;

export const services = [
  {
    number: '01', title: 'Telegram Communities', icon: 'message', accent: 'cyan',
    description: 'Structured onboarding, moderation and engagement that keep communities useful.',
    tools: ['Strategy', 'Moderation', 'Retention'],
  },
  {
    number: '02', title: 'Telegram Advertising', icon: 'analytics', accent: 'violet',
    description: 'Audience-fit placements and clear conversion paths—not empty traffic.',
    tools: ['Planning', 'Funnels', 'Reporting'],
  },
  {
    number: '03', title: 'AI Automations', icon: 'spark', accent: 'emerald',
    description: 'Reliable workflows that remove repetitive work without losing control.',
    tools: ['Make', 'Zapier', 'Custom logic'],
  },
  {
    number: '04', title: 'Crypto Operations', icon: 'globe', accent: 'pink',
    description: 'Calm operational systems for fast-moving Web3 teams and communities.',
    tools: ['Web3 ops', 'Campaigns', 'Systems'],
  },
  {
    number: '05', title: 'Web Design & Build', icon: 'browser', accent: 'sky',
    description: 'Fast, responsive websites that make the offer and next step obvious.',
    tools: ['UI/UX', 'Frontend', 'CRO'],
  },
] as const;

export const work = [
  {
    id: 'portfolio',
    eyebrow: 'LIVE BUILD · 2026',
    title: 'Lucky Meena Portfolio',
    description: 'The website you are viewing: a responsive React portfolio with a custom visual system, accessible interactions and zero stock imagery.',
    role: 'Design system · UI/UX · Frontend',
    tools: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/lkmeeena882437-dotcom/Lucky-Meena',
    linkLabel: 'View source',
    accent: 'cyan',
    proof: 'Real project',
  },
  {
    id: 'community',
    eyebrow: 'CAPABILITY PROTOTYPE',
    title: 'Community Command Center',
    description: 'A focused Telegram operations concept for member health, moderation queues and weekly community signals.',
    role: 'Product thinking · Interface design',
    tools: ['Telegram', 'Operations', 'Analytics'],
    link: '',
    linkLabel: '',
    accent: 'violet',
    proof: 'Prototype — not client work',
  },
  {
    id: 'automation',
    eyebrow: 'CAPABILITY PROTOTYPE',
    title: 'AI Lead Routing System',
    description: 'A clear workflow concept connecting inquiry, AI qualification, ownership, follow-up and reporting.',
    role: 'System design · Automation logic',
    tools: ['AI', 'Make', 'CRM'],
    link: '',
    linkLabel: '',
    accent: 'emerald',
    proof: 'Prototype — not client work',
  },
] as const;
