# Lucky Meena — Premium Portfolio

A production-ready single-page React portfolio for **Lucky Meena (लक्की मीणा)** with a dark cosmic hero, pearl glass surfaces, custom SVG artwork, semantic section atmospheres, and conversion-focused project/contact flows.

## Run locally

```bash
npm install
npm run dev
```

Validation and production build:

```bash
npm run typecheck
npm run build
```

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lenis desktop smooth scrolling
- Handcrafted inline SVG and CSS visuals
- Self-hosted Bricolage Grotesque, Inter, and JetBrains Mono fonts

Three.js was intentionally not added: the custom SVG/CSS monogram delivers the desired depth with a much smaller performance cost and keeps the main content independent of WebGL.

## Edit personal content

Most editable content is centralised in:

```text
src/data/portfolio.ts
```

Update:

- Email, WhatsApp, and Telegram
- LinkedIn and resume URLs
- Contact form endpoint
- Verified project details and links
- Experience, education, and certifications
- Role, location, tagline, tools, and services

The contact form supports a real POST endpoint when `contactEndpoint` is supplied. Until then, it honestly runs in demo mode and copies a validated inquiry to the visitor's clipboard rather than pretending to submit it.

## Visual assets

No AI-generated portfolio imagery is used. Project visuals, the hero monogram, favicon, and social card are handcrafted SVG/CSS compositions. Replace project slots only with verified project screenshots or case-study media.
