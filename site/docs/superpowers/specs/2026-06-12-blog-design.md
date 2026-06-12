# Blog — Design Spec

**Date:** 2026-06-12
**Project:** Grepfox marketing site (Payload 3 + Next.js 15, `site/`)
**Status:** Approved by user (design conversation 2026-06-12)

## Goal

Add a modern, functional blog to the site using the existing design
system and the integrated Payload CMS. Editors manage posts and
categories from the admin panel; demo content ships via the existing
seed pipeline.

## Decisions (from brainstorming)

- Scope: full-featured — categories, covers, reading time, related
  posts, pagination, category filter, SEO metadata.
- Authors: plain text field on the post (no Authors collection, no
  link to Users). Seed uses "Grepfox Team" everywhere — no fictional
  people (same FTC concern as testimonials).
- Categories: separate `categories` collection (editor-managed).
- Post body: single rich lexical `richText` field — articles are
  prose, not block compositions. No per-post layout blocks; one
  shared hardcoded dark CTA under every article.
- Routes are dedicated server routes following the `services/[slug]`
  pattern, not Pages-driven.
- Seed demo posts + add Blog to header nav and footer.
- NOT in scope: RSS feed, post search, comments.

## CMS Schema

Register both collections in `src/payload.config.ts`, then run
`npm run generate:types`.

### `Categories` (new collection)

| Field | Type | Notes |
|---|---|---|
| title | text, required | |
| slug | text, required, unique, index | |

`access.read: () => true`. Admin `useAsTitle: 'title'`.

### `Posts` (new collection)

| Field | Type | Notes |
|---|---|---|
| title | text, required | |
| slug | text, required, unique, index | |
| excerpt | textarea | cards + meta description |
| cover | upload → media | |
| coverUrl | text | external cover URL, same pattern as `Services.heroImageUrl` |
| category | relationship → categories | |
| author | text | free text; seed uses "Grepfox Team" |
| publishedAt | date | |
| body | richText (lexical) | |

`versions: { drafts: true }`, `access.read: () => true` — same as
Services. Admin `useAsTitle: 'title'`,
`defaultColumns: ['title', 'slug', 'category', 'publishedAt']`.

Reading time is NOT stored — computed at render from the lexical body
(~200 wpm) by a `readingTime()` util.

## Routes

### `/blog` — `src/app/(frontend)/blog/page.tsx`

Server component reading `searchParams`:

- Section header: MonoLabel + display title (DS pattern).
- Featured card: the most recent published post, large layout.
- Grid of remaining posts using the existing bordered-grid pattern
  (each cell draws right/bottom border, frame clips the outer 1px).
- Category filter: tab row of category links via `?category=<slug>`;
  active tab highlighted. Empty category → text empty state.
- Pagination via `?page=N`, 9 posts per page (featured card only on
  unfiltered page 1). Page out of range → notFound.
- Sort: `publishedAt` desc. Only published docs (drafts excluded by
  default find behavior).

### `/blog/[slug]` — `src/app/(frontend)/blog/[slug]/page.tsx`

Follows `services/[slug]/page.tsx`:

- `generateStaticParams` from posts slugs.
- `generateMetadata`: title, description = excerpt, openGraph image =
  cover.
- Body: meta line (category · date · reading time · author), display
  title, excerpt lede, filtered cover image, richText article in a
  ~720px column, "Related" — 3 latest posts from the same category
  excluding current (fill with latest overall if fewer), shared dark
  CTA (`cta-banner--dark` styles) hardcoded in the route.
- Missing slug → `notFound()`.

## Components & Styles

- `src/components/site/PostCard.tsx` — server component: cover
  (filtered), category tag, title, excerpt, date + reading time.
  Featured variant via prop.
- `src/utils/readingTime.ts` — word count over lexical doc → minutes.
- `src/styles/components/_blog.scss` — card grid, category tabs,
  article typography extending `.richtext` for long prose (h2/h3,
  quotes, lists, code), featured card, meta line.
- Reveal animations: add blog selectors to the existing MotionRuntime
  CSS approach. Reveal classes go on static containers only (React
  must not rebuild their className — known accordion gotcha).

## Seed

All in the existing pipeline (`npm run seed`, upsert by slug).

- `src/seed/content.ts`: 5 categories — AI & Agents, Engineering,
  Automation, Case Studies, Company; ~8 posts with lexical bodies via
  `seed/lexical.ts` helpers (paragraphs, h2/h3, lists), distinct
  `publishedAt` dates, author "Grepfox Team".
- `src/seed/images.ts`: cover entries (Unsplash URLs with exact
  variant sizes), uploaded via `ensureMedia` (lookup by alt — do not
  change alt without a sqlite UPDATE, known dedup gotcha).
- `src/seed/index.ts`: upsert categories first, then posts; resolve
  `category` by slug and `cover` via mediaMap.
- Header global seed: add Blog nav item (nav `maxRows: 7` — verify
  current count fits, bump if needed). Footer seed: add Blog link.

## Verification

1. `tsc` clean.
2. `npm run seed` succeeds (idempotent re-run).
3. Production build passes.
4. curl checks: `/blog`, a post page, `?category=` filter, `?page=2`
   (Playwright MCP unavailable — macOS policy blocks remote
   debugging).

## Out of Scope / Later

- RSS feed (`/blog/rss.xml`).
- Post search.
- Real author profiles (Authors collection) if bylines become needed.
