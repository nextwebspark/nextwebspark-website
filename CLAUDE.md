# NextWebSpark — Project Guide

## Business Context

**Company:** NextWebSpark Limited (Ireland)
**Website:** https://nextwebspark.com/
**Owner:** Alok Kumar — 10+ years software development experience, n8n Verified Creator, Anthropic Skilljar Certified
**Focus:** Helping SMEs and enterprises grow with AI — training, consultancy, and production-grade AI agent development
**Services:** Lead generation, marketing automation, content creation, customer support, and custom AI agents
**Certification:** Anthropic Skilljar Certified

## Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS 3 + @tailwindcss/typography
- **Icons:** lucide-react
- **Blog:** MDX files in `content/blog/` parsed with gray-matter + next-mdx-remote
- **Font:** Inter (loaded via Google Fonts in globals.css)
- **Hosting:** Vercel (free tier)
- **Node version:** 18+

## Project Structure

```
nextwebspark/
├── app/
│   ├── layout.tsx              # Root layout, global metadata, Inter font
│   ├── page.tsx                # Homepage (assembles Hero, TrustBar, Services, etc.)
│   ├── globals.css             # Tailwind layers, custom component classes
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # robots.txt generation
│   ├── about/page.tsx          # About page
│   ├── services/page.tsx       # Services detail page
│   ├── contact/page.tsx        # Contact page
│   └── blog/
│       ├── page.tsx            # Blog listing
│       └── [slug]/page.tsx     # Individual blog post (dynamic route)
├── components/
│   ├── Header.tsx              # Fixed top nav with mobile menu
│   ├── Footer.tsx              # Site footer
│   ├── Hero.tsx                # Landing hero with stats
│   ├── Services.tsx            # Service cards grid
│   ├── CaseStudies.tsx         # Real-world case study showcase
│   ├── HowItWorks.tsx          # Process steps section
│   ├── WhyChooseUs.tsx         # Differentiators section
│   ├── CTASection.tsx          # Bottom call-to-action
│   ├── TrustBar.tsx            # Trust signals / partner logos
│   └── BlogCard.tsx            # Blog post preview card
├── content/
│   └── blog/                   # MDX blog posts (add new posts here)
│       ├── how-ai-agents-are-transforming-small-business.mdx
│       ├── guide-to-automating-lead-generation-with-ai.mdx
│       ├── why-every-sme-needs-ai-strategy-2026.mdx
│       ├── building-production-grade-ai-customer-support.mdx
│       ├── n8n-business-process-automation-guide.mdx
│       ├── roi-of-ai-measuring-automation-impact.mdx
│       ├── introduction-to-claude-ai-for-business.mdx
│       ├── ai-powered-content-creation-marketing-guide.mdx
│       ├── digital-transformation-manual-to-automated.mdx
│       └── multi-agent-ai-systems-future-enterprise.mdx
├── lib/
│   └── blog.ts                 # Blog utilities (getAllPosts, getPostBySlug)
├── public/                     # Static assets (images, favicon, etc.)
├── tailwind.config.ts          # Tailwind config with custom colors & animations
├── next.config.mjs             # Next.js config
├── postcss.config.mjs          # PostCSS config
└── tsconfig.json               # TypeScript config
```

## Design System

### Color Palette (defined in tailwind.config.ts)
- **Primary (Indigo):** 50 `#eef2ff` → 950 `#1e1b4b` (main brand color is 600 `#4f46e5`)
- **Dark:** DEFAULT `#0a0a1a`, 50 `#0f0f2e`, 100 `#141432`, 200 `#1a1a3e`
- **Text:** gray-900 for headings, gray-800 for body, gray-600 for secondary
- **Surfaces:** white cards, gray-50/gray-100 for alternating sections

### Component Classes (defined in globals.css)
- `.btn-primary` — Indigo filled button, white text, rounded-full
- `.btn-secondary` — White with indigo border, for light backgrounds
- `.btn-secondary-dark` — Transparent with gray border, white text, for dark backgrounds; hover fills white
- `.btn-dark` — Dark filled button
- `.card` — White rounded card with border and hover shadow lift
- `.section-padding` — Standard section spacing (py-20 md:py-28)
- `.container-main` — max-w-7xl centered container
- `.section-label` — Uppercase small tracking label
- `.section-title` — Large bold section heading
- `.section-subtitle` — Muted subheading text
- `.gradient-text` — Indigo gradient text effect

### Animations (defined in tailwind.config.ts)
- `animate-fade-in` — Opacity 0→1
- `animate-fade-in-up` — Opacity + translateY
- `animate-slide-in-left` / `animate-slide-in-right` — Horizontal slide entrances

## Blog System

### Adding a New Blog Post
1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter at the top:
```mdx
---
title: "Your Post Title"
date: "2026-03-22"
description: "SEO meta description (under 160 chars)"
tags: ["AI", "Automation", "Business"]
author: "Alok Kumar"
---

Your content in Markdown here...
```
3. The slug is derived from the filename (e.g., `my-post.mdx` → `/blog/my-post`)
4. Push to GitHub — Vercel auto-deploys

### Blog Utilities (lib/blog.ts)
- `getAllPosts()` — Returns all posts sorted by date (newest first)
- `getPostBySlug(slug)` — Returns a single post's frontmatter + raw MDX content
- `getAllSlugs()` — Returns all slugs for static generation

## Commands

```bash
npm run dev        # Start dev server on localhost:3000
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # Run ESLint
```

## SEO

- Metadata is set in `app/layout.tsx` (global) and per-page via `generateMetadata()`
- Dynamic sitemap at `/sitemap.xml` includes all pages + all blog posts
- robots.txt at `/robots.txt` allows all crawlers
- Blog posts use frontmatter `title` and `description` for meta tags
- Open Graph and Twitter card metadata included

## Deployment (Vercel)

1. Push repo to GitHub
2. Connect repo in Vercel dashboard (vercel.com)
3. Framework preset: Next.js (auto-detected)
4. No environment variables needed for base site
5. Custom domain: point `nextwebspark.com` DNS to Vercel

## Key Decisions & Notes

- No database needed — blog is file-based MDX, contact uses external links (Calendly)
- The header is `fixed` with `bg-white/80 backdrop-blur-lg`
- All pages are statically generated at build time for best performance
- The site targets both SME and enterprise audiences — copy reflects this
- Credentials emphasized throughout: 10yr dev experience, n8n creator, Anthropic Skilljar certified
- Dark sections (Hero, CTA) use `bg-dark` with `btn-secondary-dark` for button visibility
