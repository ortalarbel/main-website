---
name: אורטל ארבל
description: אימון לביטוי עצמי מלא. Hebrew RTL personal-brand site in the visual language of arad-woldenberg.com.
colors:
  cream: "#fffbf0"
  white: "#ffffff"
  sand: "#f6efe2"
  mist: "#eef5f6"
  ink: "#212837"
  ink-soft: "#4d5361"
  ink-muted: "#6a6f7b"
  gold: "#cfb780"
  terracotta: "#b5634a"
  header-tan: "#f4ecdf"
typography:
  hero:
    fontFamily: "Heebo, Arial Hebrew, sans-serif"
    fontSize: "clamp(2.9rem, 1.6rem + 5.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.05
  headline:
    fontFamily: "Heebo, Arial Hebrew, sans-serif"
    fontSize: "clamp(2rem, 1.55rem + 1.9vw, 3.1rem)"
    fontWeight: 300
    lineHeight: 1.15
  title:
    fontFamily: "Heebo, Arial Hebrew, sans-serif"
    fontSize: "clamp(1.3rem, 1.15rem + 0.6vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Alef, Arial Hebrew, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Alef, Arial Hebrew, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
rounded:
  pill: "999px"
  card: "1.5rem"
spacing:
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  section: "clamp(4.5rem, 3rem + 5vw, 8rem)"
  gutter: "clamp(1.25rem, 0.6rem + 3vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.8rem"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.8rem"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.8rem"
---

# Design System: אורטל ארבל

## Overview

**Creative North Star: "The Warm Retreat Page"**

The site follows the visual language of arad-woldenberg.com, a direction the user pinned. It is warm, personal and calm. Full-bleed photographs open each page, and a torn-paper edge leads into cream sections. Sections are centered, headings carry a hand-drawn underline, photos sit in soft organic blob shapes, and every action is a dark navy pill. Ortal's own terracotta handwritten signature is the brand mark.

**Key Characteristics:**
- Photo-first heroes: gold name, white subtitle, outlined light pill.
- Torn-paper transitions between photo and section, or between colored sections.
- Centered sections alternate between cream, white and sand.
- Headings are Heebo Light with a hand-drawn ink underline.
- Organic blob photo masks (four shapes in `Decor.tsx`).
- Dark navy pills for primary actions; outlined pills for secondary.
- Floating social icons on desktop; a "דברו איתי" footer over pale mountains.

## Colors

### Primary
- **Navy ink** (`ink`): text, primary pill buttons, the active nav pill's outline.

### Secondary
- **Terracotta** (`terracotta`): the signature, line icons, quote marks, step numbers and small accents. It matches Ortal's original logo.
- **Hero gold** (`gold`): names and titles set on photography only.

### Neutral
- **Cream** (`cream`) is the page ground. **White** and **Sand** alternate for rhythm. **Mist** is the contact footer's sky over pale blue mountains.

## Typography

**Headings:** Heebo (300 for section titles, 700 for card and step titles). **Body:** Alef, the same family the reference site uses.

**The Underline Rule.** Every section title gets the hand-drawn underline (`SectionTitle`).

## Layout

The container is 80rem max. Sections are centered with generous `section` padding. Cards sit on auto-fit grids (5 across for programs on wide screens), with the image, title, meta line and description centered and the pill button bottom-aligned. Full-bleed photo bands (`PhotoBand`) separate sections. Mobile stacks centered, and the hero puts its text at the bottom of the photo.

## Elevation & Depth

Mostly flat. There is a soft shadow on primary pills, testimonial cards and detail boxes (`0 2px 14px rgb(33 40 55 / .06)`). Torn edges and photo bands carry most of the depth.

## Shapes

Pills (999px) for buttons and the active nav item. 1.5rem radius for white content cards. Organic blob clip-paths for photos. Circles for social icons and step numbers.

## Components

- **Header:** tan bar with a 3px terracotta top line. Nav sits on the right, the active page is an outlined pill, the dark "לסדנה החינמית" pill sits beside it, and the terracotta signature is on the left. Below 70rem it collapses to a "תפריט" full-screen menu.
- **PageHero:** full-bleed photo, darkened on the text side, gold title, white subtitle, torn edge at the bottom.
- **ProgramCards / JournalList:** blob photo, bold title, meta line, short text, pill button.
- **Testimonials:** one large centered quote with a terracotta mark, plus white rounded note cards.
- **Footer:** "דברו איתי" contact block over layered mist mountains, the signature, and a cream legal strip.

## Do's and Don'ts

### Do:
- **Do** center sections and underline their titles.
- **Do** open pages with a full-bleed photo and a torn edge.
- **Do** use dark navy pills for actions.

### Don't:
- **Don't** invent claims; this is a presentation layer only.
- **Don't** use stock photos of other women where the section is about Ortal.
- **Don't** mix in the old daylight/spotlight direction's asymmetric splits or sharp editorial rules.
