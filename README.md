# Forma Studio — Design Agency Homepage

A Next.js 13+ (App Router) homepage built for the Next.js Developer Internship task.

## Tech stack

- **Next.js 16** (App Router, `next/font`, `next/image`)
- **React 19**
- **Tailwind CSS v4**
- Plain JavaScript (no TypeScript), functional components only

## Project structure

```
app/
  layout.js        # Root layout, fonts, SEO metadata
  page.js           # Composes all sections
  globals.css        # Tailwind + design tokens (colors, fonts)
components/
  Navbar.js
  Hero.js
  Services.js
  Portfolio.js
  Contact.js
  Footer.js
public/
  hero-graphic.svg
  portfolio/*.svg     # Project artwork placeholders
```

Each homepage section (Hero, Services, Portfolio, Contact) is its own component for clarity and reuse, as requested in the task.

## Setup instructions

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

To build for production:

```bash
npm run build
npm start
```

## Design notes

- Palette: warm paper background, near-black ink, terracotta clay accent, moss and gold secondary accents.
- Typography: Fraunces (display serif) for headings, Inter for body copy, JetBrains Mono for labels/eyebrows.
- Signature element: an oversized outlined "FORMA" wordmark bleeding behind the hero headline.
- Images are generated gradient SVG placeholders (no stock photography used) and are served through `next/image` for optimization.

## Assumptions / additional features

- Portfolio links scroll to the Contact section in place of real case-study pages, since no backend/CMS was specified.
- The contact form performs client-side validation (required fields, email format) and shows an in-page success state. No backend endpoint is wired up; submission is simulated.
- SEO metadata (title, description, keywords, Open Graph) is set in `app/layout.js`.
- Built mobile-first and tested down to small mobile widths.

## Bonus items implemented

- Tailwind CSS
- Hover/scroll animations (image scale-up on hover, sticky navbar transition)
- SEO metadata
- `next/image` optimization for all artwork
