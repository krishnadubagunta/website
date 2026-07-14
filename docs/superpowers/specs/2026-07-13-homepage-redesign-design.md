# Homepage Redesign (Cinematic Hero)

## Context

`apps/portfolio` was recently upgraded to Next.js 16 / React 19 / Tailwind v4 with a
Medium-style typography refresh (retuned palette, Source Serif 4 for long-form prose,
narrower reading measure, redesigned blog cards). That work landed but left the
homepage (`app/(website)/page.tsx` + `content.mdx`) as a single scrolling MDX bio with
no real visual hierarchy — user feedback: "not much difference in the UX... homepage
needs to be significantly changed in a good way."

This spec covers a full structural redesign of the homepage only. No other pages
change. No new facts are introduced — copy is re-chunked from the existing bio text
in `content.mdx`, not rewritten with new claims.

## Goals

- Replace the single scrolling bio with a real landing page: a cinematic photo hero,
  a breathing-room bio/socials section, two topic cards (dev + photography), and a
  "latest from the blog" teaser that pulls live data.
- Keep all underlying facts (bio content, social links, images) unchanged — only
  restructure and re-chunk for a hero/tagline format.
- Reuse existing components and data sources wherever possible (typography
  components, `db.query.blogTable`, existing images) rather than inventing new
  infrastructure.

## Non-goals

- No changes to `/blog`, `/gallery`, `/resume`, or `/marriage` beyond what already
  landed in the prior refresh.
- No CMS/Contentful integration for the hero photo — confirmed with user to use the
  existing static `public/images/me.jpg`, not a dynamically-fetched gallery photo.
- No new copy/claims — every sentence on the redesigned homepage traces back to the
  existing `content.mdx` text.

## Design

### 1. Hero section (new component)

Full-bleed section using `public/images/me.jpg` as a background image (`next/image`
with `fill`, `object-cover`, `priority`), with a dark gradient overlay
(`bg-gradient-to-t from-background via-background/40 to-transparent`, tuned per
light/dark theme) so centered text stays legible over the photo regardless of theme.

Content, centered vertically and horizontally over the photo:
- "Krishna Dubagunta" — large Kaisei display headline (reuses existing `kaiseiFont`
  treatment, larger than the current `TypographyH1` scale for a real hero moment).
- "Software developer. Landscape photographer." — subline, Inter, medium weight.
- "Two crafts, one obsession with getting the details right." — smaller tagline,
  `font-serif` (Source Serif 4), muted-foreground color.
- A subtle scroll-down cue (small chevron or "scroll" label, low-opacity) pinned near
  the bottom of the hero, hidden below a `sm:` breakpoint if it doesn't fit cleanly on
  mobile.

The site nav (`kd-ui/ui/navbar`) needs a transparent-over-photo variant: transparent
background while scrollY is near 0 and over the hero, solid `bg-background` once
scrolled past it. Implemented as a small client-side scroll listener in a thin wrapper
around the existing `Navbar`, gated to the homepage route only — `Navbar` itself is
not changed structurally, just optionally wrapped with a scroll-aware background
class so `/blog`, `/gallery`, `/resume` keep the current always-solid nav.

Hero height: `min-h-[85vh]` on desktop, `min-h-[70vh]` on mobile (portrait photo
crops less aggressively at shorter viewport heights).

### 2. Bio/socials section

A centered, generously-padded section directly below the hero (not part of the hero
itself — this is the "breathing room" step from B3). Content:
- One-line intro drawn from the existing opening bio sentence ("a passionate software
  developer and avid landscape photographer...", trimmed to fit a single centered
  line at `max-w-2xl`).
- The existing social links row (GitHub, Instagram, LinkedIn, Etsy) via the existing
  `SocialLink` component — unchanged markup, just relocated from mid-page (inside the
  old MDX flow) to this dedicated section.

### 3. Topic cards ("what I do")

Two cards, side-by-side on `sm:` and up, stacked on mobile, borderless (consistent
with the Medium-style card treatment already used on `/blog`):
- **Dev card**: lead line + 2-3 sentences re-chunked from the existing "software
  development: where passion meets expertise" paragraph.
- **Photography card**: same treatment, re-chunked from "fueling inspiration through
  photography".

Both use `TypographyP serif` for body text (consistent with the long-form serif
treatment already applied to MDX prose elsewhere).

### 4. Latest from the blog

Reuses the exact query already in `app/(website)/blog/page.tsx`
(`db.query.blogTable.findMany(...)` ordered by `pubDate`/`lastUpdated` desc), capped
to the first 3 results, rendered with the same Medium-style card markup already built
for the `/blog` listing (extracted into a shared `BlogCard` component so both pages
use one implementation instead of two copies). A small "see all posts →" link points
to `/blog`. Cards link out to the external Medium/Substack URL exactly as `/blog`
does today — no behavior change to the linking model.

### Data flow

`app/(website)/page.tsx` becomes an async Server Component: it runs the existing
`db.query.blogTable.findMany(...)` (limited/sliced to 3) directly, passes results to
the new `BlogCard` component, and renders the hero/bio/cards sections as plain JSX
(no MDX needed for the restructured parts). The re-chunked bio text (hero subline,
tagline, bio/socials intro line, and the two topic-card bodies) is inlined as JSX
text directly in the new section components — `content.mdx` is retired for the
homepage entirely, since none of its content maps 1:1 to a single MDX flow anymore.
`content.mdx` itself is deleted as part of this change (its text has been redistributed
into the section components; nothing else imports it).

### Error handling

If the blog DB query fails or returns zero rows, the "latest from the blog" section
is omitted entirely (no error UI, no empty-state placeholder) — the rest of the
homepage renders normally. This matches the low-stakes, marketing-page nature of the
section and avoids adding new error-boundary infrastructure for a teaser block.

### Testing

- `next build` must succeed (static generation for `/`, since the DB query already
  runs at build/revalidate time the same way `/blog` does today).
- Manual check in dev server: hero renders with photo + overlay legible in both light
  and dark theme, nav transitions from transparent to solid on scroll, topic cards
  and latest-posts row render, all links (socials, blog cards, "see all posts") work,
  mobile layout (stacked cards, hero at `70vh`) checked at a narrow viewport.
