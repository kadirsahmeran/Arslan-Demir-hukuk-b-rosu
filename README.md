# Arslan & Demir Law Firm — Corporate Website

An SEO-focused, accessible and animated corporate website for a law firm based in Şişli, Istanbul. Built on the Next.js App Router, fully statically generated (SSG), with content written to comply with the Turkish Bar Association's (TBB) advertising restrictions.

The site content is in Turkish; the codebase is structured so that an English version can be added later.

> **Note:** The firm name, address, phone number, lawyer profiles and bar registration numbers are **fictional**. See the [Pre-launch checklist](#pre-launch-checklist) before going live.

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Pages](#pages)
- [Content management](#content-management)
- [Design system](#design-system)
- [Animations](#animations)
- [SEO](#seo)
- [Accessibility](#accessibility)
- [Legal compliance (TBB advertising rules)](#legal-compliance-tbb-advertising-rules)
- [Contact form](#contact-form)
- [Rendering and caching](#rendering-and-caching)
- [Pre-launch checklist](#pre-launch-checklist)

---

## Features

- **Complete site structure:** Home, About, Practice Areas (list + 8 detail pages), Lawyers (list + 5 profiles), Articles (list + 8 articles), FAQ, Contact, 4 legal pages and a custom 404.
- **Fully static output:** Every page is generated at build time; unknown URLs return a 404 even on the first request.
- **Filterable listings:** Individual/Corporate tabs on practice areas; category dropdown, search, pagination and a "clear filters" button on articles. Filter state lives in the URL (`?kategori=aile-hukuku&q=nafaka&sayfa=2`), so filtered views are shareable.
- **Smooth, restrained motion:** Lenis smooth scrolling; Framer Motion scroll reveals, word-by-word headings, parallax, counters and card transitions.
- **Rich SEO:** Per-page metadata, canonical URLs, Open Graph/Twitter cards, dynamic OG images, sitemap, robots and JSON-LD (`LegalService`, `Attorney`, `Person`, `Article`, `FAQPage`, `BreadcrumbList`).
- **Accessibility:** Full keyboard navigation, visible focus rings, skip link, ARIA labelling and `prefers-reduced-motion` support.
- **Contact form:** `react-hook-form` + `zod` validation, KVKK (Turkish GDPR) consent, honeypot spam trap and a Server Action skeleton.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Server Components, Cache Components, Turbopack) |
| Language | TypeScript (strict) |
| UI | React 19, React Compiler |
| Styling | Tailwind CSS 4 (`@theme` tokens), `@tailwindcss/typography` |
| Motion | [Motion](https://motion.dev) (Framer Motion), [Lenis](https://lenis.darkroom.engineering) |
| Lightbox | [GLightbox](https://biati-digital.github.io/glightbox/) (office gallery only, loaded dynamically) |
| Content | MDX (`next-mdx-remote`) + typed TypeScript data files |
| Forms | `react-hook-form`, `zod`, `@hookform/resolvers` |
| Component utilities | `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` |
| Fonts | Playfair Display (headings), Inter (body) via `next/font/google` with the `latin-ext` subset for Turkish characters |

## Getting started

**Requirements:** Node.js **20.9 or later**, npm.

```bash
git clone <repository-url>
cd hukuk-firmasi
npm install
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

> This project uses Next.js 16, whose APIs and file conventions differ from earlier versions. Before writing code, check the relevant guide in `node_modules/next/dist/docs/` (see [AGENTS.md](AGENTS.md)).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build (includes type checking and static generation) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx next typegen` | Generate the global `PageProps` / `LayoutProps` route types (only needed before running `tsc` on its own) |

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Base URL used for canonical links, the sitemap, OG tags and JSON-LD. Default: `https://www.arslandemir.av.tr` |

Set it locally in a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://www.example-firm.av.tr
```

## Project structure

```text
src/
├── app/
│   ├── (site)/                    # All pages (route group)
│   │   ├── page.tsx               # Home
│   │   ├── hakkimizda/            # About
│   │   ├── calisma-alanlari/[slug]/   # Practice areas
│   │   ├── avukatlar/[slug]/      # Lawyers
│   │   ├── makaleler/[slug]/      # Articles (+ per-article opengraph-image.tsx)
│   │   ├── sss/                   # FAQ
│   │   ├── iletisim/              # Contact (+ actions.ts Server Action)
│   │   └── kvkk/ cerez-politikasi/ gizlilik-politikasi/ yasal-uyari/   # Legal pages
│   ├── layout.tsx                 # Root layout: fonts, Lenis, header/footer, JSON-LD
│   ├── template.tsx               # Page transition animation
│   ├── not-found.tsx              # Custom 404
│   ├── opengraph-image.tsx        # Default OG image
│   ├── sitemap.ts · robots.ts · icon.svg
│   └── globals.css                # Tailwind theme tokens
├── components/
│   ├── layout/    # Header, MobileMenu, Footer, SmoothScroll, CookieBanner, MobileContactBar, SkipLink, ScrollToTop
│   ├── motion/    # Reveal, RevealText, Stagger, ParallaxImage, Counter, Magnetic
│   ├── ui/        # Button, Accordion, Badge, Breadcrumbs, CategoryTabs, CategoryDropdown, PageHero, SectionHeading...
│   ├── sections/  # Hero, Intro, PracticeAreasPreview, Principles, Stats, TeamPreview, LatestArticles, Timeline, CTABand
│   ├── cards/     # PracticeAreaCard, LawyerCard, ArticleCard
│   ├── articles/  # ArticleExplorer, ArticleBody (MDX), TableOfContents, ReadingProgress, ShareButtons
│   ├── practice/  # PracticeAreaExplorer, ContactAside
│   ├── contact/   # ContactForm
│   ├── gallery/   # OfficeGallery (GLightbox)
│   └── seo/       # JsonLd
├── content/
│   └── articles/  # Article bodies (*.mdx)
└── lib/
    ├── site.ts        # Firm identity, contact details, address, opening hours, navigation
    ├── images.ts      # All image URLs and alt texts
    ├── articles.ts    # Article metadata and helpers
    ├── data/          # practice-areas.ts, lawyers.ts, faq.ts, firm.ts
    ├── seo.ts         # buildMetadata()
    ├── schema.ts      # JSON-LD builders
    ├── og.tsx         # OG image template
    ├── validation/    # zod schemas
    └── utils.ts       # cn, slugify (Turkish-aware), formatDate, readingTime
```

## Pages

Routes use Turkish slugs for local SEO.

| Route | Page | Content |
| --- | --- | --- |
| `/` | Home | Hero, approach, practice areas, principles, firm in numbers, team, latest articles, CTA |
| `/hakkimizda` | About | Story, mission/vision, principles, working practices, timeline, office gallery |
| `/calisma-alanlari` | Practice areas | Image card grid filterable by Individual/Corporate |
| `/calisma-alanlari/[slug]` | Practice area detail | Overview, topics covered, step-by-step process, FAQ, related lawyers and articles, sticky contact box |
| `/avukatlar` · `/avukatlar/[slug]` | Lawyers | Team list; biography, education, bar number, languages, practice areas, publications |
| `/makaleler` · `/makaleler/[slug]` | Articles | Featured article, category/search/pagination; table of contents, reading progress bar, share buttons |
| `/sss` | FAQ | Categorised, animated accordion |
| `/iletisim` | Contact | Form, contact details, opening hours, directions, Google Maps |
| `/kvkk` · `/cerez-politikasi` · `/gizlilik-politikasi` · `/yasal-uyari` | Legal | KVKK notice, cookie policy, privacy policy, legal disclaimer |

## Content management

All content lives in typed files within the codebase. After editing, run `npm run build` to regenerate the site; the sitemap, navigation and related sections update automatically.

### Firm details

Name, address, phone, email, WhatsApp, opening hours, coordinates and directions are managed from a single source: [`src/lib/site.ts`](src/lib/site.ts). Keeping these consistent everywhere matters for local SEO.

### Adding an article

1. Create `src/content/articles/<slug>.mdx`. Structure the body with `##` and `###` headings; the table of contents is generated from them. **Do not** add a `#` page title — it comes from the metadata.
2. Add an entry to the `articleMeta` array in [`src/lib/articles.ts`](src/lib/articles.ts):

```ts
{
  slug: "nafaka-artirim-davasi",            // must match the MDX file name
  title: "Nafaka Artırım Davası Nasıl Açılır?",
  description: "Short summary shown in search results.",
  category: "aile-hukuku",                  // a practice area slug
  author: "zeynep-demir",                   // a lawyer slug
  date: "2026-11-02",                       // YYYY-MM-DD
  image: "articleDivorce",                  // a key from lib/images.ts
},
```

Reading time, category label, OG image and `Article` schema are generated automatically.

### Adding a practice area or lawyer

- **Practice area:** Add an entry to [`src/lib/data/practice-areas.ts`](src/lib/data/practice-areas.ts) (intro, sections, topics, process steps and FAQ). If it needs a new icon, add it to the mapping in [`PracticeIcon.tsx`](src/components/ui/PracticeIcon.tsx).
- **Lawyer:** Add an entry to [`src/lib/data/lawyers.ts`](src/lib/data/lawyers.ts). The slugs in `areas` decide which practice area pages the lawyer appears on.

### Images

All images are collected in [`src/lib/images.ts`](src/lib/images.ts); to swap one, update its `src` and `alt`. Images are served from Unsplash (`images.unsplash.com`) and Pixabay (`cdn.pixabay.com`), which are allowed via `images.remotePatterns` in `next.config.ts`. Add any other host there as well.

### FAQ and firm copy

- General FAQ: [`src/lib/data/faq.ts`](src/lib/data/faq.ts)
- Principles, mission/vision, working practices, timeline and "firm in numbers": [`src/lib/data/firm.ts`](src/lib/data/firm.ts)

## Design system

Colours, fonts and easing curves are defined as Tailwind `@theme` tokens in [`src/app/globals.css`](src/app/globals.css).

| Token | Value | Usage |
| --- | --- | --- |
| `primary` | `#0F1E3A` | Midnight blue: backgrounds, headings |
| `primary-light` | `#1B2A4A` | Hover backgrounds |
| `accent` | `#B08D57` | Gold/bronze: hairlines, icons, highlights |
| `accent-hover` | `#C9A86A` | Hover on dark backgrounds |
| `accent-ink` | `#7A5C2E` | Gold **text** on cream backgrounds (for WCAG AA contrast) |
| `surface` | `#F7F5F0` | Off-white/cream page background |
| `ink` / `ink-muted` | `#1A1A1A` / `#5A5A5A` | Body and secondary text |
| `line` | `#E5E1D8` | Borders |

- **Typography:** Playfair Display for headings, Inter for body text; 17–18 px body size with 1.7 line height; article line length capped at roughly 70 characters.
- **Buttons** ([`Button.tsx`](src/components/ui/Button.tsx)): `primary`, `accent`, `outline`, `outlineLight`, `ghost` and `link` variants in `sm`/`md`/`lg` sizes. Available as `Button`, `ButtonLink` (Next.js Link) and `ButtonAnchor` (`tel:`, `mailto:`).
- **Utility classes:** `container-site` (page width and gutters), `eyebrow` (small, tracked overline).

## Animations

| Component | Purpose |
| --- | --- |
| `SmoothScroll` | Global Lenis smooth scrolling; `#` anchor links also scroll through Lenis |
| `Reveal` | Fade and slide up when entering the viewport |
| `Stagger` / `StaggerItem` | Sequential reveal of lists and cards |
| `RevealText` | Headings rise word by word from behind a mask |
| `ParallaxImage` | Clip-path mask reveal + scroll-linked parallax |
| `Counter` | Numbers count up when they come into view |
| `Magnetic` | Primary CTA gently follows the cursor on desktop |
| `template.tsx` | Soft entrance on page transitions (disabled on first load to protect LCP) |

**Performance and accessibility principles:**

- Animated components are `"use client"`; everything else stays a Server Component.
- The hero image and heading are never hidden on first load, so LCP is not delayed.
- With `prefers-reduced-motion`, Lenis smoothing and parallax are disabled and transitions are simplified.
- Lenis is paused while the mobile menu or the gallery lightbox is open.
- GLightbox JS and CSS load only in the office gallery on the About page.

## SEO

- **Metadata:** Every page gets a unique title (`%s | Arslan & Demir Hukuk Bürosu`), description, canonical URL, Open Graph and Twitter card via [`buildMetadata()`](src/lib/seo.ts).
- **OG images:** A default image and one per article are generated with `next/og`. Practice area and lawyer pages use their own photos.
- **Structured data:** [`src/lib/schema.ts`](src/lib/schema.ts) provides `LegalService` (address, phone, hours, geo), `WebSite`, `Attorney`, `Person`, `Article`, `FAQPage` and `BreadcrumbList`.
- **Sitemap and robots:** `/sitemap.xml` lists every static and dynamic page. Static page dates come from the `CONTENT_UPDATED` constant in [`sitemap.ts`](src/app/sitemap.ts); update it when content changes.
- **Semantic HTML:** One `h1` per page, correct heading hierarchy, visible breadcrumbs and meaningful Turkish URL slugs.
- **Filters:** On listing pages the server HTML contains every card; filtering happens on the client, so search engines see all content.

## Accessibility

- WCAG AA colour contrast (`accent-ink` for gold text on cream).
- "Skip to content" link and a focusable `<main>`.
- Visible `focus-visible` ring on every interactive element.
- Mobile menu, accordions and the category dropdown are fully keyboard operable (Esc, arrow keys, Home/End).
- Filter result counts are announced to screen readers via `aria-live`.
- Empty `alt` on decorative images; meaningful Turkish `alt` text on content images.

## Legal compliance (TBB advertising rules)

Lawyers in Turkey are bound by the Turkish Bar Association's professional rules and advertising ban. The content was written accordingly:

- **No** client testimonials, references or reviews.
- **No** case counts, success rates or guaranteed outcomes. "Firm in numbers" only shows founding year, number of lawyers, practice areas and languages.
- No superlatives such as "best", "leading" or "expert lawyer"; "practice areas" is used instead of "areas of expertise".
- No fees, discounts or "free consultation" offers. The cookie notice is a non-blocking banner, not a pop-up.
- Articles and practice area pages carry a "this is not legal advice" disclaimer.

Keep these rules in mind when adding or editing content.

## Contact form

- The validation schema in [`src/lib/validation/contact.ts`](src/lib/validation/contact.ts) is shared by the client and the server.
- Submissions go through the `submitContact` Server Action in [`src/app/(site)/iletisim/actions.ts`](src/app/(site)/iletisim/actions.ts). It currently **only writes to the server log**, with personal data masked.
- To send email, connect a provider (Resend, SMTP, etc.) in the `deliver()` function in the same file.
- The subject field can be preselected via the URL: `/iletisim?konu=is-hukuku`.

## Rendering and caching

The project runs with `cacheComponents` and `partialPrefetching` enabled:

- Dynamic detail pages (`[slug]`) are generated at build time with `generateStaticParams` and kept fully static with `ensureStatic = "navigation"`. An unknown slug returns a 404 on the first request.
- Filter components that read URL parameters are wrapped in `<Suspense>`; the unfiltered full list is rendered on the server as the fallback.
- MDX article bodies and the copyright year in the footer are cached with `"use cache"`.

## Pre-launch checklist

- [ ] [`src/lib/site.ts`](src/lib/site.ts): real firm name, address, phone, WhatsApp, email, coordinates and opening hours
- [ ] [`src/lib/data/lawyers.ts`](src/lib/data/lawyers.ts): real lawyer profiles, bar registration numbers and photos
- [ ] [`src/lib/data/firm.ts`](src/lib/data/firm.ts): firm story and timeline
- [ ] `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Email provider connected to the contact form's `deliver()` function
- [ ] Legal pages (KVKK, cookies, privacy, disclaimer) reviewed by a lawyer
- [ ] Any analytics tool wired to the cookie banner's consent
- [ ] `public/logo.svg` and `src/app/icon.svg` replaced with the firm's logo
- [ ] Dependency warnings reviewed with `npm audit`
- [ ] Performance and accessibility measured with Lighthouse

## Roadmap

- **Internationalisation:** UI strings and content are centralised in data files. Adding English requires a `[locale]` route segment and translation dictionaries.
- **Headless CMS:** Articles and data files are typed and single-sourced, so they can be moved to a headless CMS later.

## License

No license has been chosen for this project yet. All rights reserved.
