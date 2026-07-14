# Homepage Redesign (Cinematic Hero) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage's single scrolling MDX bio with a real landing page — cinematic photo hero, bio/socials section, dev+photography topic cards, and a live "latest from the blog" teaser — using only facts already present in the existing bio copy.

**Architecture:** `app/(website)/page.tsx` becomes an async Server Component that queries the 3 most recent blog posts and composes four new presentational section components (`Hero`, `BioSocials`, `TopicCards`, `LatestPosts`). The blog card markup is extracted out of `blog/page.tsx` into a shared `BlogCard` component so both the `/blog` listing and the new homepage teaser use one implementation. The site nav gets a route-aware wrapper (`SiteNav`) that overlays transparently on the hero and turns solid on scroll, without touching the shared `kd-ui` `Navbar` component itself (so `/blog`, `/gallery`, `/resume`, and `content-creator` keep today's nav behavior unchanged).

**Tech Stack:** Next.js 16 (App Router, Server Components), React 19, Tailwind v4, Drizzle ORM (`db.query.blogTable`), `kd-ui` shared component library.

## Global Constraints

- Scope is `apps/portfolio` homepage (`app/(website)/`) only. Do not modify `/blog`, `/gallery`, `/resume`, `/marriage`, or `content-creator` beyond the one extraction described in Task 2.
- No new facts or claims — every sentence used in the new sections must trace back to the existing text in `app/(website)/content.mdx` (being retired by this plan) or to data already in `db.blogTable`.
- This repo has no unit test framework configured (no Jest/Vitest/Playwright in any `package.json`). The verification step for every task is: `npx next build` (type-checks and statically renders `/`) plus a dev-server smoke check (`curl` for 200 + `grep` for expected markup in the HTML). Do not introduce a new test framework as part of this plan — that would be out of scope.
- Reuse existing `kd-ui` typography components (`TypographyH3`, `TypographyH4`, `TypographyP` with its `serif` prop, `TypographySmall`) and `SocialLink` — do not hand-roll replacements.
- Dev server for manual checks runs on port 4001 (`npm run dev` in `apps/portfolio`, already configured with `-p 4001` in `package.json`).

---

### Task 1: Scroll-aware nav wrapper + full-bleed homepage layout

**Files:**
- Create: `apps/portfolio/app/(website)/_components/site-nav.tsx`
- Modify: `apps/portfolio/app/(website)/layout.tsx`

**Interfaces:**
- Produces: `SiteNav({ refs }: { refs: { [path: string]: { name: string; matcher?: string[] } } })` — default export, drop-in replacement for `kd-ui/ui/navbar`'s `Navbar` in the layout.
- Consumes: `Navbar` from `kd-ui/ui/navbar` (existing, unchanged signature).

- [ ] **Step 1: Create the `SiteNav` wrapper**

```tsx
// apps/portfolio/app/(website)/_components/site-nav.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Navbar from "kd-ui/ui/navbar";

type NavRefs = {
  [path: string]: { name: string; matcher?: string[] };
};

export default function SiteNav({ refs }: { refs: NavRefs }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (!isHome) {
    // Layout's body already applies sm:px-12 lg:px-20 px-4 for non-home
    // routes, so no extra padding here — this would otherwise double it.
    return <Navbar refs={refs} />;
  }

  return (
    <div
      className={clsx(
        "fixed inset-x-0 top-0 z-50 sm:px-12 lg:px-20 px-4 py-4 transition-colors duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <Navbar refs={refs} />
    </div>
  );
}
```

- [ ] **Step 2: Wire `SiteNav` into the layout and make body padding route-aware**

Modify `apps/portfolio/app/(website)/layout.tsx` — replace the direct `Navbar` import/usage with `SiteNav`, and make the body's horizontal/vertical padding conditional so the homepage hero can go edge-to-edge while every other route keeps today's padded layout exactly as-is:

```tsx
"use client";

import "../globals.css";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "kd-ui/ui/theme-provider";
import { Analytics } from '@vercel/analytics/react'
import clsx from "clsx";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next"
import SiteNav from "./_components/site-nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" });

const NAV_REFS = {
  "/": {
    name: "Home",
  },
  "/blog": {
    matcher: ["/blog?/*"],
    name: "Blog",
  },
  "/gallery": {
    matcher: ["/gallery?/*"],
    name: "Gallery",
  },
  "/resume": {
    matcher: ["/resume?/*"],
    name: "Resume",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          inter.variable,
          sourceSerif.variable,
          "flex min-h-screen flex-col",
          isHome ? "" : "sm:px-12 lg:px-20 px-4 py-6 pt-6"
        )}
      >
        <ThemeProvider defaultTheme="dark" enableColorScheme>
          <SiteNav refs={NAV_REFS} />
          <main>
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify with a build**

Run: `cd apps/portfolio && npx next build`
Expected: `✓ Compiled successfully` and `Finished TypeScript` with no errors (page content will still be the old MDX bio at this point — that's expected, Task 7 replaces it).

- [ ] **Step 4: Commit**

```bash
git add apps/portfolio/app/\(website\)/_components/site-nav.tsx apps/portfolio/app/\(website\)/layout.tsx
git commit -m "feat: route-aware nav wrapper and full-bleed homepage layout"
```

---

### Task 2: Extract shared `BlogCard` component

**Files:**
- Create: `apps/portfolio/app/(website)/blog/_components/blog-card.tsx`
- Modify: `apps/portfolio/app/(website)/blog/page.tsx`

**Interfaces:**
- Produces: `BlogPost` interface and `BlogCard({ post }: { post: BlogPost })` default export — consumed by Task 6's `LatestPosts`.
- Consumes: `TypographyH4`, `TypographyP` (with `serif` prop), `TypographySmall` from `kd-ui/ui/typography/*`, `ExternalLink` from `lucide-react` (all pre-existing, unchanged).

- [ ] **Step 1: Create the `BlogCard` component**

```tsx
// apps/portfolio/app/(website)/blog/_components/blog-card.tsx
import Link from "next/link";
import Image from "next/image";
import TypographyH4 from "kd-ui/ui/typography/h4";
import TypographyP from "kd-ui/ui/typography/p";
import TypographySmall from "kd-ui/ui/typography/small";
import { ExternalLink } from "lucide-react";

export interface BlogPost {
  id: number;
  image: string | null;
  title: string;
  description: string | null;
  link: string;
  pubDate: Date | null;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={post.link} className="group">
      <article className="max-w-lg relative flex flex-col gap-3">
        <Image
          alt="Image of this blog post"
          src={post.image!}
          className="aspect-[1.91/1] w-full rounded-lg object-cover bg-muted transition-opacity group-hover:opacity-90"
          height={420}
          width={804}
          fetchPriority="high"
          priority={true}
        />
        <TypographyH4 className="transition-colors group-hover:underline underline-offset-4">
          {post.title}
        </TypographyH4>
        <TypographyP serif className="text-foreground/70">
          {post.description?.substring(0, 150) + "..."}
        </TypographyP>
        <div className="flex justify-between items-center pt-1">
          <TypographySmall className="text-muted-foreground">
            {post.pubDate?.toDateString()}
          </TypographySmall>
          <ExternalLink height={14} className="text-muted-foreground" />
        </div>
      </article>
    </Link>
  );
}
```

- [ ] **Step 2: Use `BlogCard` in the `/blog` listing page**

Modify `apps/portfolio/app/(website)/blog/page.tsx` — replace the inline `<Link><article>...</article></Link>` markup (currently lines 58-78) with the extracted component, and drop the now-unused imports (`Link`, `Image`, `TypographyH4`, `TypographyP`, `ExternalLink` stay only where still used — `TypographySmall` is still used by `CategoryComp`, keep it):

```tsx
import TypographyH3 from "kd-ui/ui/typography/h3";
import TypographySmall from "kd-ui/ui/typography/small";
import { Metadata } from "next";
import { Badge } from "kd-ui/ui/badge";
import { db } from "@/db";
import BlogCard from "./_components/blog-card";

export const revalidate = 3600;

export const metadata: Metadata = {
    metadataBase: new URL('https://www.krishnadubagunta.com'),
    title: {
      default: 'Blogs',
      template: '%s | Blogs | Krishna Dubagunta (KD)'
    },
    keywords: ["blog","adventure","tech","photography"]
  }

export default async function Blog() {
    const posts = await db.query.blogTable.findMany({
        orderBy: ({ pubDate, lastUpdated }, { desc }) => [desc(pubDate), desc(lastUpdated)]
    })

    function CategoryComp({ categories }: { categories: string[] | null}) {
        if(!categories) return <></>

        return <div className="flex gap-2 pt-2">
            {
                categories.map(category => <Badge variant={'defaultNoInteraction'} className="bg-gray-400" key={category}>
                    <TypographySmall>{category}</TypographySmall>
                </Badge>)
            }
        </div>
    }

    return <div className="container max-w-4xl py-6 lg:py-10">
      <TypographyH3 kaisei className="pb-8">read my blog</TypographyH3>
      <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
        {
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        }
      </div>
    </div>
}
```

- [ ] **Step 3: Verify with a build**

Run: `cd apps/portfolio && npx next build`
Expected: `✓ Compiled successfully`, no TypeScript errors, `/blog` still listed in the route output.

- [ ] **Step 4: Manual smoke check**

Run: `cd apps/portfolio && (npm run dev > /tmp/portfolio-dev.log 2>&1 &) && sleep 4 && curl -s http://localhost:4001/blog | grep -c "group relative flex flex-col gap-3"`
Expected: a number > 0 (confirms `BlogCard` markup renders on `/blog`). Stop the dev server afterward with `pkill -f "next dev -p 4001"` if not reused by a later task.

- [ ] **Step 5: Commit**

```bash
git add apps/portfolio/app/\(website\)/blog/_components/blog-card.tsx apps/portfolio/app/\(website\)/blog/page.tsx
git commit -m "refactor: extract shared BlogCard component from blog listing"
```

---

### Task 3: Hero section component

**Files:**
- Create: `apps/portfolio/app/(website)/_components/hero.tsx`

**Interfaces:**
- Produces: `Hero()` — default export, no props, consumed by Task 7's `page.tsx`.
- Consumes: `kaiseiFont` from `kd-ui/styles/kaiseiFont` (existing export, already used internally by `kd-ui/ui/typography/base.tsx`).

- [ ] **Step 1: Create the `Hero` component**

```tsx
// apps/portfolio/app/(website)/_components/hero.tsx
import Image from "next/image";
import clsx from "clsx";
import { kaiseiFont } from "kd-ui/styles/kaiseiFont";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] sm:min-h-[85vh] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/me.jpg"
        alt="Krishna Dubagunta standing before the DUMBO bridge in Brooklyn"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
        <h1
          className={clsx(
            kaiseiFont.className,
            "text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          )}
        >
          Krishna Dubagunta
        </h1>
        <p className="text-lg font-medium text-foreground sm:text-xl">
          Software developer. Landscape photographer.
        </p>
        <p className="font-serif text-base text-muted-foreground sm:text-lg">
          Two crafts, one obsession with getting the details right.
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted-foreground/70 sm:flex">
        <span>scroll</span>
        <span aria-hidden>↓</span>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify with a build**

Run: `cd apps/portfolio && npx next build`
Expected: `✓ Compiled successfully`, no TypeScript errors. (`Hero` isn't wired into `page.tsx` yet — this just confirms the file itself compiles standalone; TypeScript will still check it as part of the project.)

- [ ] **Step 3: Commit**

```bash
git add apps/portfolio/app/\(website\)/_components/hero.tsx
git commit -m "feat: add homepage hero section component"
```

---

### Task 4: Bio/socials section component

**Files:**
- Create: `apps/portfolio/app/(website)/_components/bio-socials.tsx`

**Interfaces:**
- Produces: `BioSocials()` — default export, no props, consumed by Task 7's `page.tsx`.
- Consumes: `SocialLink` from `kd-ui/ui/social` (existing, `{ href, children }` props), `TypographyP` from `kd-ui/ui/typography/p` (existing, `serif` prop already added in the prior refresh).

- [ ] **Step 1: Create the `BioSocials` component**

```tsx
// apps/portfolio/app/(website)/_components/bio-socials.tsx
import { Github, Instagram, Linkedin, LucideShoppingCart } from "lucide-react";
import SocialLink from "kd-ui/ui/social";
import TypographyP from "kd-ui/ui/typography/p";

export default function BioSocials() {
  return (
    <section className="container max-w-2xl flex flex-col items-center gap-6 py-16 text-center">
      <TypographyP serif className="text-foreground/80">
        A passionate software developer and avid landscape photographer — finding
        harmony between two seemingly different worlds.
      </TypographyP>
      <div className="flex flex-wrap justify-center items-stretch">
        <SocialLink href="https://github.com/krishnadubagunta">
          <Github className="fill-current stroke-none" />
        </SocialLink>
        <SocialLink href="https://instagram.com/kridsphotography">
          <Instagram />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/saikrishnadubaguntah">
          <Linkedin className="fill-current stroke-none" />
        </SocialLink>
        <SocialLink href="https://kridworks.etsy.com">
          <LucideShoppingCart />
        </SocialLink>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify with a build**

Run: `cd apps/portfolio && npx next build`
Expected: `✓ Compiled successfully`, no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add apps/portfolio/app/\(website\)/_components/bio-socials.tsx
git commit -m "feat: add homepage bio/socials section component"
```

---

### Task 5: Topic cards section component

**Files:**
- Create: `apps/portfolio/app/(website)/_components/topic-cards.tsx`

**Interfaces:**
- Produces: `TopicCards()` — default export, no props, consumed by Task 7's `page.tsx`.
- Consumes: `TypographyH4` from `kd-ui/ui/typography/h4`, `TypographyP` from `kd-ui/ui/typography/p` (both existing).

- [ ] **Step 1: Create the `TopicCards` component**

```tsx
// apps/portfolio/app/(website)/_components/topic-cards.tsx
import TypographyH4 from "kd-ui/ui/typography/h4";
import TypographyP from "kd-ui/ui/typography/p";

export default function TopicCards() {
  return (
    <section className="container max-w-4xl py-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <TypographyH4>Software development: where passion meets expertise</TypographyH4>
          <TypographyP serif className="text-foreground/80">
            I&apos;ve honed my skills as a software developer, channeling my love for
            problem-solving and innovation into creating practical and elegant
            solutions. With each project I undertake, I strive to create software that
            meets functional requirements while reflecting real craftsmanship.
          </TypographyP>
        </div>
        <div className="flex flex-col gap-3">
          <TypographyH4>Fueling inspiration through photography</TypographyH4>
          <TypographyP serif className="text-foreground/80">
            Beyond the realm of coding, my adventurous spirit finds solace in
            landscape photography — traversing breathtaking vistas and capturing
            nature&apos;s wonders. The funds from my software development work power
            these photographic expeditions, creating a cycle where my creative
            pursuits fuel each other.
          </TypographyP>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify with a build**

Run: `cd apps/portfolio && npx next build`
Expected: `✓ Compiled successfully`, no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add apps/portfolio/app/\(website\)/_components/topic-cards.tsx
git commit -m "feat: add homepage topic cards section component"
```

---

### Task 6: Latest posts section component

**Files:**
- Create: `apps/portfolio/app/(website)/_components/latest-posts.tsx`

**Interfaces:**
- Consumes: `BlogCard` and `BlogPost` from `../blog/_components/blog-card` (produced in Task 2).
- Produces: `LatestPosts({ posts }: { posts: BlogPost[] })` — default export, consumed by Task 7's `page.tsx`.

- [ ] **Step 1: Create the `LatestPosts` component**

```tsx
// apps/portfolio/app/(website)/_components/latest-posts.tsx
import Link from "next/link";
import TypographyH3 from "kd-ui/ui/typography/h3";
import BlogCard, { BlogPost } from "../blog/_components/blog-card";

export default function LatestPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="container max-w-4xl py-10">
      <div className="flex items-baseline justify-between pb-8">
        <TypographyH3 kaisei>latest from the blog</TypographyH3>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
        >
          see all posts →
        </Link>
      </div>
      <div className="grid gap-x-12 gap-y-14 sm:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify with a build**

Run: `cd apps/portfolio && npx next build`
Expected: `✓ Compiled successfully`, no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add apps/portfolio/app/\(website\)/_components/latest-posts.tsx
git commit -m "feat: add homepage latest-posts section component"
```

---

### Task 7: Assemble the redesigned homepage

**Files:**
- Modify: `apps/portfolio/app/(website)/page.tsx`
- Delete: `apps/portfolio/app/(website)/content.mdx`

**Interfaces:**
- Consumes: `Hero` (Task 3), `BioSocials` (Task 4), `TopicCards` (Task 5), `LatestPosts` + `BlogPost` (Task 6), `db` from `@/db` (existing).

- [ ] **Step 1: Rewrite `page.tsx` to assemble the sections**

```tsx
// apps/portfolio/app/(website)/page.tsx
import { Metadata } from 'next'
import { db } from '@/db'
import Hero from './_components/hero'
import BioSocials from './_components/bio-socials'
import TopicCards from './_components/topic-cards'
import LatestPosts from './_components/latest-posts'

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.krishnadubagunta.com'),
  title: {
    default: "Krishna Dubagunta (KD)",
    template: "%s | Krishna Dubagunta",
  },
  description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
  icons: [
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  openGraph: {
    title: 'Krishna Dubagunta (KD)',
    description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
    url: 'https://www.krishnadubagunta.com',
    type: 'profile',
    gender: 'male',
    images: [
      {
        url: "https://krishnadubagunta.com/images/me.jpg",
        alt: 'Me near DUMBO in brooklyn just after snow',
        type: 'image/jpg'
      }
    ],
    firstName: 'Sai Krishna',
    lastName: 'Dubagunta'
  },

  twitter: {
    title: 'Krishna Dubagunta (KD)',
    description: 'Portfolio of Krishna Dubagunta | Software Engineer | Landscape Photographer',
    card: 'summary_large_image',
    creator: 'Krishna Dubagunta (KD)'
  },

  keywords: 'portfolio,software-engineer,photographer,landscape-photographer',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default async function Home() {
  const posts = await db.query.blogTable.findMany({
    orderBy: ({ pubDate, lastUpdated }, { desc }) => [desc(pubDate), desc(lastUpdated)],
    limit: 3,
  });

  return (
    <>
      <Hero />
      <BioSocials />
      <TopicCards />
      <LatestPosts posts={posts} />
    </>
  );
}
```

- [ ] **Step 2: Delete the retired MDX bio**

```bash
rm "apps/portfolio/app/(website)/content.mdx"
```

- [ ] **Step 3: Verify with a build**

Run: `cd apps/portfolio && npx next build`
Expected: `✓ Compiled successfully`, `Finished TypeScript` with no errors, `/` listed as a static/ISR route in the build output, no dangling reference errors to the deleted `content.mdx`.

- [ ] **Step 4: Manual smoke check — full page**

```bash
cd apps/portfolio
pkill -f "next dev -p 4001" 2>/dev/null || true
(npm run dev > /tmp/portfolio-dev.log 2>&1 &)
sleep 4
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4001/
curl -s http://localhost:4001/ | grep -o "Krishna Dubagunta" | head -1
curl -s http://localhost:4001/ | grep -o "latest from the blog" | head -1
curl -s http://localhost:4001/ | grep -o "min-h-\[70vh\]" | head -1
```

Expected: `200`, then each `grep` prints the matched string (confirms hero headline, latest-posts heading, and hero section all rendered). Then open `http://localhost:4001/` in a browser and confirm: hero photo fills the viewport with legible centered text in both light and dark theme (toggle via the nav sun/moon control), nav is transparent over the photo and turns solid on scroll, bio/socials/topic-cards/latest-posts sections render in order, all links work (socials, blog cards out to Medium/Substack, "see all posts" to `/blog`), and the layout holds up at a narrow (mobile) viewport width.

- [ ] **Step 5: Commit**

```bash
git add apps/portfolio/app/\(website\)/page.tsx
git rm "apps/portfolio/app/(website)/content.mdx"
git commit -m "feat: assemble redesigned homepage from new section components"
```
