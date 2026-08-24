# Lucky Meena — Personal Portfolio

A focused single-page React portfolio for **Lucky Meena (लक्की मीणा)**. The site uses a dark cosmic hero, crisp vector visuals and compact pearl-glass sections without stock or AI-generated imagery.

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
- Vite + Tailwind CSS v4
- Framer Motion
- Lenis smooth scrolling on fine-pointer desktop devices
- Handcrafted inline SVG and CSS project visuals
- Self-hosted Bricolage Grotesque, Inter and JetBrains Mono

Three.js is intentionally omitted. The vector monogram provides sharp, scalable depth without adding WebGL cost or making core content depend on a canvas.

## Page structure

1. Focused hero
2. Personal introduction
3. Five core capabilities
4. One real project plus two clearly labelled capability prototypes
5. Compact contact desk

## Edit personal content

All editable content is centralised in:

```text
src/data/portfolio.ts
```

Before publishing, replace:

- Email, WhatsApp and Telegram
- LinkedIn and resume URLs if needed
- Contact form endpoint
- Prototype cards with verified client work when available

The current portfolio itself is listed as a real shipped project. The other two cards are explicitly labelled as prototypes, not client work. With no contact endpoint configured, the form copies a validated inquiry instead of pretending to submit it.
