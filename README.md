# NETFLIX: OFF

A parody landing page reimagining Netflix — the platform engineered to keep you watching one more episode — as a sleep brand that uses the exact same psychological hooks (autoplay, cliffhangers, the "Are you still watching?" prompt) pointed the other direction: toward your bedtime instead of your next episode.

Built as a front-end internship assignment. Not affiliated with or endorsed by Netflix, Inc. — fan-made concept project only.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next/font (Bebas Neue, Inter, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy

Push this repo to GitHub, then import it on [Vercel](https://vercel.com/new) — zero config needed.

## Structure

```
app/
  layout.tsx      — fonts, metadata
  page.tsx        — assembles all sections
  globals.css     — ambient glow orbs, diagonal cuts, reduced-motion support
components/
  Hero.tsx              — full-bleed centered hero, ambient glow orbs
  Marquee.tsx             — scrolling stats ticker
  StillAwakePrompt.tsx     — animated countdown prompt (signature element)
  SleepDebtBar.tsx          — progress bar styled like a video scrubber
  Bento.tsx                   — asymmetric feature grid
  SocialProof.tsx               — testimonials
  PricingCTA.tsx                  — split pricing + nightly routine timeline
  Footer.tsx                        — disclaimer
```

## Design notes

Layout is intentionally different from a typical split hero (headline left, visual right): this one is full-bleed and centered, with a scrolling marquee ticker and an asymmetric bento grid instead of uniform cards. Color story is a "circadian sky" gradient — indigo to amber — rather than a flat single-accent dark theme.
