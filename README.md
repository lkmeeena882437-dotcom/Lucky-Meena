# Lucky Meena — Personal Portfolio

A production-ready single-page portfolio for **Lucky Meena** covering Telegram management, ads, communities, landing pages and development.

The visual language is an editorial serif system: Playfair Display headlines, Source Sans 3 body copy, IBM Plex Mono labels, ivory surfaces and a single burnished-gold accent.

## Run and validate

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Stack

- React 19 + TypeScript
- Vite + Tailwind CSS v4
- Framer Motion
- Lenis desktop smooth scrolling
- Handcrafted inline SVG/CSS visuals
- Self-hosted Playfair Display, Source Sans 3 and IBM Plex Mono

No stock or AI-generated portfolio imagery is used. The identity mark and project interfaces are vector/CSS-based, so they remain sharp on high-density and 4K displays.

## Website structure

1. Hero with editorial headline and trust strip
2. Personal brand introduction
3. Six-part digital skill stack
4. Five-step learning and building journey
5. Interactive case-study showcase
6. Honest metrics and working strengths
7. Closing CTA with inquiry form

## Edit personal content

All personal and portfolio data lives in:

```text
src/data/portfolio.ts
```

Optional fields you can add later:

- Telegram handle and URL
- Email address and mailto URL
- WhatsApp number
- LinkedIn, Instagram, X and resume links
- Contact form endpoint

The contact form supports a real POST endpoint when `contactEndpoint` is provided. Until then, it copies a validated inquiry instead of pretending to submit it.
