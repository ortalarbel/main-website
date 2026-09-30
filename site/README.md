# אורטל ארבל: אימון לביטוי עצמי מלא

A new personal-brand site for Ortal Arbel: Hebrew, RTL-native, statically generated with Next.js.

## Run, build, deploy

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000 (TODO markers are visible in dev only)
npm run build      # production build; every page is prerendered static HTML
npm run start      # serve the production build
npm run lint       # TypeScript check
```

**Deploy (recommended: Vercel).** Import the `site/` folder as a project. The framework is detected automatically. Set one environment variable:

| Variable | Example | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.example.co.il` | Canonical URLs, Open Graph URLs, sitemap, robots |

Netlify, Cloudflare Pages or any Node host also work (`npm run build && npm run start`). Point the domain's DNS at the host, and consider redirecting the old Shopix address.

## Where to edit content

All content lives in `src/content/`. Components only render it.

| File | What it holds |
|---|---|
| `site.ts` | Name, tagline, phone, email, WhatsApp number, social links, navigation, header CTA |
| `home.ts` | Homepage copy: hero, the critic's sentences, beliefs, section titles, closing invitation |
| `story.ts` | About page ("הסיפור שלי") |
| `one-on-one.ts` | 1:1 coaching page |
| `programs.ts` | Every program: copy, audience, details, FAQ, WhatsApp message, **registration fields** |
| `testimonials.ts` | Testimonials, verbatim and anonymous |
| `articles.ts` | The three articles, text carried over from the old site |
| `images.ts` | Photo registry: alt text, crop focus, credit |

### Registration and payments

There was no working checkout on the old site: the Shopix store had no payment key, no prices and was deactivated. Registration therefore runs through WhatsApp. Each program's button opens a chat pre-filled with a message naming that program.

To connect real registration, fill in `registration` for a program in `programs.ts`:

```ts
registration: {
  price: "₪…",                          // shown in the details list
  nextDate: "יום ג׳, 4 בנובמבר, 20:00",  // shown in the hero and details list
  checkoutUrl: "https://…",             // external payment / sign-up page (Grow, Meshulam, PayPal, a form…)
},
```

When `checkoutUrl` is set, the main button goes to it and WhatsApp becomes the secondary "question first?" link. Nothing fakes a payment.

## Open TODOs (information only Ortal can supply)

In development these show as yellow `TODO` markers on the page; production never shows them.

- **Domain:** set `NEXT_PUBLIC_SITE_URL`.
- **התנועה הראשונה (free workshop):** next date/time and a sign-up link.
- **מנהיגות פנימית (course):** price, next cohort start date, meeting day/time, session length, checkout link.
- **גילוי אזור הגאונות:** number of sessions, session length, price.
- **המטיילת העצמאית:** number of sessions, price.
- **ליווי אישי:** session length, typical process length, price.
- **About page:** the old site linked to a "full story" that was never published. More chapters are welcome: training/background, the turning point, what the trip taught her.
- **Testimonials:** all four are anonymous. With permission, a first name or context would add weight.
- **Articles:** confirm original publication dates. The current dates come from the old site's records.
- **Accessibility statement:** date of the last accessibility review and any known limitations.

## Images

| File | Source | License |
|---|---|---|
| `ortal-forest.jpg` | Ortal's own photo, from the old site | Ortal's material |
| `ortal-mountain.jpg` | Ortal's own photo, from the old site | Ortal's material |
| `signature.png` | Extracted from Ortal's handwritten logo on the old site | Ortal's material |
| `pine-forest.jpg` | [Thick pine forest (Unsplash)](https://commons.wikimedia.org/wiki/File:Thick_pine_forest_(Unsplash).jpg), Wikimedia Commons | CC0 |
| `forest-path.jpg` | [Forest path, Ånnaboda](https://commons.wikimedia.org/wiki/File:Forest_path,_%C3%85nnaboda.jpg), Wikimedia Commons | CC0 |
| `notebook.jpg` | [An open notebook on a sandy beach](https://commons.wikimedia.org/wiki/File:An_open_notebook_on_a_sandy_beach.jpg) (Rawpixel), Wikimedia Commons | CC0 |

All images are self-hosted in `src/assets/images/`, and `next/image` serves them as responsive AVIF/WebP. The old site's stock photos of other women and its AI-style illustrations were intentionally not reused.

### Recommended photo shoot

The site currently rests on two real photos of Ortal. A short professional shoot would lift it most:

1. **Environmental hero portrait:** in the pine forest, natural morning light, a wide frame with room for text.
2. **Close, quiet portrait:** face and hands, soft window light, for the About opening.
3. **At work:** the Ein Iron clinic, a session in progress (a consenting client from behind, or an empty chair), a notebook.
4. **Movement:** walking a trail or a travel moment, for the solo-traveler program.
5. **Online:** Ortal at her laptop leading a workshop, for the course and the free workshop.
6. **Details:** handwriting, a notebook page, a cyclamen among rocks, for article covers.

## Structure

```
src/
  app/            routes: /, /about, /programs, /programs/[slug], /one-on-one,
                  /journal, /journal/[slug], /contact, /accessibility, sitemap, robots
  components/     Header, Footer, ProgramIndex, CriticLines, Testimonials, JournalList,
                  ClosingInvite, RegisterActions, StickyRegister, Signature, Photo, …
  content/        all editable content (see above)
  lib/            links (WhatsApp/tel/mail), SEO metadata, schema.org helpers
  assets/images/  photographs
```
