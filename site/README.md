# Grepfox — site

Technical-maintenance services site built on **Payload 3 + Next.js 15 (App Router)** with the Grepfox Swiss-Engineer design system wired in as React components and CMS-driven blocks.

## Stack

- Next.js 15 · App Router · React 19
- Payload 3 (admin + REST + GraphQL all inside the Next app)
- PostgreSQL via `@payloadcms/db-postgres`
- Lexical rich-text editor
- Grepfox DS: CSS tokens + `ds.css` + React primitives under `src/components/ds`

## Getting started

```bash
cp .env.example .env            # fill DATABASE_URI + PAYLOAD_SECRET
createdb grepfox                # or use your existing Postgres
pnpm install                    # or npm / yarn
pnpm dev                        # http://localhost:3000
```

First run:

1. Visit `http://localhost:3000/admin` → create the first admin user.
2. Create a **Page** with slug `home` → stack blocks → publish.
3. Add **Services** (each becomes `/services/<slug>`).
4. Fill the **Header** and **Footer** globals (nav, CTA, columns).

## How the design system plugs in — three layers

### 1. Tokens (untouched)
`src/app/(frontend)/tokens.css` — CSS variables copied verbatim from the DS. Never edit inline; always reference via `var(--gf-accent)` etc.

### 2. Primitives (React)
`src/components/ds/*` — typed React wrappers around the DS class conventions in `ds.css`. These are **the only way** to render DS HTML inside the app:

- `<Icon />` / `<LogoMark />` / `<LogoLockup />`
- `<Button appearance="primary|secondary|outline|outline-accent|ghost" />`
- `<MonoLabel />` · `<SectionHead />` · `<HazardRule />` · `<Crosshairs />`
- `<FilteredImage />` · `<Media />` (Payload-aware)

### 3. Blocks (CMS-driven layouts)
`src/blocks/<BlockName>/config.ts` + `Component.tsx`. Each directory pairs a **Payload field schema** with its **React renderer** so editors and developers always see the same shape. The full list lives in `src/blocks/index.ts` and is mounted into the `Pages.layout` field.

Rendering is routed by `src/blocks/registry.tsx` → `src/utils/RenderBlocks.tsx`. Unknown block types are skipped with a dev warning.

Current blocks:

| Block | Purpose |
|---|---|
| `heroSplit` | Split hero (text + filtered image) |
| `heroFullbleed` | Fullbleed hero with stat |
| `sectionHead` | Numbered section title |
| `featureGrid` | Services grid (2/3/4 cols) |
| `numbers` | Stats band |
| `processTimeline` | Ordered steps with hazard progress |
| `splitLayout` | 2-column narrative + image |
| `accentBlock` | Orange full-width accent |
| `pricingGrid` | Plans |
| `logoWall` | Client logos |
| `marquee` | Scrolling strip |
| `testimonial` | Single quote |
| `accordionFaq` | FAQ |
| `richText` | Lexical block |
| `ctaBanner` | Conversion banner + contacts |

## Adding a new block — 4 steps

1. Create `src/blocks/MyBlock/config.ts` — Payload `Block` with field schema.
2. Create `src/blocks/MyBlock/Component.tsx` — Server Component that renders DS primitives.
3. Register both: append the block to `allBlocks` in `src/blocks/index.ts`, and map its `slug` to the renderer in `src/blocks/registry.tsx`.
4. `pnpm generate:types` to refresh `payload-types.ts`.

Rule: **blocks never embed raw styling beyond the DS tokens and `ds.css` classes**. Anything new goes into a primitive first, then the block composes primitives.

## Conventions

- Server Components by default; add `'use client'` only when a block needs interactivity.
- Colors/spacing/type: always via CSS variables — never hex in new code.
- Orange is **hazard**: reserve for CTAs, accents, state dividers, and the `accent-block`. Don't sprinkle it.
- Images through the `Media` primitive so the DS photo-filter + fallback placeholder stay consistent.
- Buttons: use `<Button />`, never hand-rolled `<button class="btn btn--primary">`.

## Scripts

```bash
pnpm dev                 # Next dev
pnpm build               # Production build
pnpm generate:types      # Re-emit payload-types.ts after schema edits
pnpm migrate:create      # Create a new DB migration
pnpm migrate             # Apply migrations
```

## Directory map

```
site/
├── src/
│   ├── app/
│   │   ├── (frontend)/              # Public site
│   │   │   ├── layout.tsx           # Header + Footer chrome
│   │   │   ├── page.tsx             # renders Pages{slug:home}
│   │   │   ├── [slug]/page.tsx      # renders Pages by slug
│   │   │   ├── services/[slug]/page.tsx
│   │   │   ├── tokens.css           # DS tokens
│   │   │   ├── ds.css               # DS component styles
│   │   │   └── globals.css          # thin wrapper + richtext
│   │   └── (payload)/               # Payload admin + REST + GraphQL
│   ├── blocks/                      # Block configs + renderers + registry
│   ├── collections/                 # Pages, Services, Media, Users
│   ├── components/
│   │   ├── ds/                      # Design-system primitives
│   │   └── site/                    # Site chrome (Header, Footer)
│   ├── fields/link.ts               # Shared link field helper
│   ├── globals/                     # Header, Footer globals
│   ├── utils/                       # RenderBlocks, RichText
│   └── payload.config.ts
└── public/assets/logo-mark.svg
```
