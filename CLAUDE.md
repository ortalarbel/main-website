# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal-brand site for Ortal Arbel (אורטל ארבל, "אימון לביטוי עצמי מלא"). The site is in Hebrew and RTL-native. It uses Next.js (App Router), React 19 and TypeScript, and every page is statically generated. There is no CMS, no database and no checkout.

- `site/`: the Next.js app. Run all commands from here.
- `PRODUCT.md`: audience, positioning, offerings, known and unknown facts, and brand commitments. Read it before changing copy.
- `DESIGN.md`: the current visual system (tokens, components, do's and don'ts).
- `init-prompt.txt`: the original brief for the build.
- `.impeccable/surfaces/src-app-page-tsx.md`: **stale.** It describes the earlier "daylight/spotlight" direction (Frank Ruhl, pine green, cyclamen accent, no blobs). The user replaced that direction with the arad-woldenberg.com look described in `DESIGN.md`. Follow `DESIGN.md`.

## Commands (in `site/`)

```bash
npm run dev     # http://localhost:3000, shows dev-only TODO markers
npm run build   # static production build
npm run start
npm run lint    # runs tsc --noEmit (type-check only, no ESLint)
```

There is no test suite. Verify a change with `npm run lint`, then `npm run build`, then check it in the browser.

## Architecture

**Content and presentation are separate.** Everything a visitor reads lives in `site/src/content/*.ts` as typed data: `site.ts` holds the name, contact details, nav and header CTA, and there is one file each for home, story, programs, one-on-one, testimonials, articles and images. Components and routes only render that data. Change copy in `content/`, not in JSX.

**Routes** (`site/src/app/`): `/`, `/about`, `/programs`, `/programs/[slug]`, `/one-on-one`, `/journal`, `/journal/[slug]`, `/contact`, `/accessibility`, plus `sitemap.ts` and `robots.ts`. The dynamic routes use `generateStaticParams` with `dynamicParams = false`, so a new program or article only needs a new entry in `programs.ts` or `articles.ts`. A program with an `href` override lives on its own page and is left out of `detailPrograms`.

**Registration flow.** Registration runs over WhatsApp. `lib/links.ts` `whatsappUrl(message)` builds a `wa.me` link from each program's `cta.message`. `Program.registration` has optional `price`, `nextDate` and `checkoutUrl` fields. When `checkoutUrl` is set, `RegisterActions` and `StickyRegister` make it the primary action and WhatsApp becomes the secondary one. Leave these fields `undefined` until Ortal supplies real values.

**Unknown facts.** `components/Todo.tsx` renders a yellow `TODO:` marker in development and nothing in production. Use it for any missing price, date, session length and similar detail, and never invent a value. The open TODO list is in `site/README.md`.

**Images.** Photos live in `src/assets/images/` and are registered in `content/images.ts` with alt text, a crop `focus` and a credit. Always render them through `components/Photo.tsx` (a `next/image` fill wrapper) by `ImageKey`. When you add an image, add its source and license to the table in `site/README.md`.

**SEO.** Pages build their metadata with `lib/seo.ts` `pageMetadata()`, and JSON-LD comes from `lib/schema.ts` through `components/JsonLd.tsx`. The canonical base URL is `NEXT_PUBLIC_SITE_URL`, read in `site.ts`.

**Styling.** The site uses plain CSS Modules, one per component or route, plus the shared `components/page.module.css`. Design tokens are CSS custom properties in `app/globals.css`. Fonts are Heebo (headings) and Alef (body), loaded with `next/font` in `layout.tsx`. Use only logical properties (`margin-inline-start` and the like), never left or right. `layout.tsx` adds the `js` class to `<html>` before paint, so any motion must start from a visible state when that class is absent. Reusable decoration (`SectionTitle` with its hand-drawn underline, `TornEdge`, blob clip-paths through `BlobDefs`) lives in `components/Decor.tsx`.

## Content rules (from PRODUCT.md)

- Never fabricate prices, dates, session counts, statistics, credentials or outcomes.
- The four testimonials stay verbatim and anonymous. Do not add names or roles.
- Address the reader in the feminine singular (את). The voice is warm and direct, not salesy and not overly spiritual. The inner critic is *managed*, never "eliminated".
- Do not use stock photos of other women in sections about Ortal.
- The site must meet Israeli accessibility rules (IS 5568 / WCAG AA), and an accessibility statement page exists at `/accessibility`.

## Tooling

The `impeccable` design skill is installed (`.claude/skills/impeccable`, `.agents/skills/impeccable`) and was used to build the UI.
