# NULLFRAME — Cinematic Agency Site

A scroll-driven, WebGL-powered site for a 2D/3D animation and game studio, built
with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and
React Three Fiber.

## Getting started

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, global providers
  page.tsx           Assembles every section in scroll order
  globals.css        Design tokens, custom cursor, glass utility, reduced-motion rules
  sitemap.ts         Auto-generated sitemap.xml
  robots.ts          Auto-generated robots.txt
components/
  CustomCursor.tsx   Ring + dot cursor with hover/text states
  Nav.tsx            Floating glass nav, active-section tracking
  Hero.tsx           Hero copy, letter-reveal headline, magnetic buttons
  HeroScene.tsx       React Three Fiber WebGL scene (client-only)
  MagneticButton.tsx  Reusable magnetic hover button
  WhoWeAre.tsx        Scene 01 — intro + animated stat counters
  Services.tsx        Scene 02 — tilting glass cards
  Portfolio.tsx        Scene 03 — project grid + lightbox
  Process.tsx          Scene 04 — scroll-driven timeline
  Team.tsx              Scene 05 — hover-reveal team panels
  TechStack.tsx         Scene 06 — tool chip grid
  Testimonials.tsx      Scene 07 — auto-rotating quotes
  CTA.tsx               Scene 08 — closing call to action
  Contact.tsx           Validated contact form (react-hook-form + zod)
  Footer.tsx
lib/
  data.ts            All copy and content — edit here first
```

## Things to customize before launch

1. **Copy & content** — everything (studio name, team, projects, testimonials)
   is placeholder text in `lib/data.ts`. Swap it for the real thing.
2. **Fonts** — the build currently uses Sora (Google Fonts) as a stand-in for
   Clash Display / General Sans from the original brief, since those are
   Fontshare fonts and not on Google Fonts. To use the exact originals:
   download the woff2 files from fontshare.com, drop them in
   `app/fonts/`, and load them with `next/font/local` instead of
   `next/font/google` in `app/layout.tsx`.
3. **Contact form submission** — `Contact.tsx`'s `onSubmit` currently just
   waits and shows a success state. Wire it to a real endpoint: a Next.js
   Route Handler (`app/api/contact/route.ts`) that emails you or posts to a
   service like Resend, Formspree, or your CRM.
4. **Portfolio media** — project thumbnails are CSS gradients as placeholders.
   Replace with real renders/video using `next/image` or a `<video>` tag
   inside `Portfolio.tsx`; add real assets under `public/`.
5. **Metadata** — update the domain in `app/layout.tsx`, `app/sitemap.ts`,
   and `app/robots.ts` from `nullframe.studio` to your real domain, and add
   an Open Graph image.
6. **Analytics** — none is wired in. Add Vercel Analytics, Plausible, or GA4
   in `app/layout.tsx` when ready.

## Performance & accessibility notes already handled

- The WebGL hero scene is loaded with `next/dynamic(..., { ssr: false })` so
  it never blocks server rendering and only loads client-side.
- All animation respects `prefers-reduced-motion` (see `globals.css` and the
  `reduced` checks in `HeroScene.tsx`, `Nav.tsx`, `Testimonials.tsx`).
- Semantic sections, a skip link, and visible focus states are in place.
- Lighthouse should already land in the 90s for Performance/SEO/Best
  Practices on a production build; run `npm run build && npm run start` and
  audit before shipping, especially after adding real (larger) media assets.

## Deploying

This is a stock Next.js App Router project — it deploys cleanly to Vercel
(`vercel deploy`), or any Node host that supports `next start`.
