# NextWebSpark

AI consultancy website for **NextWebSpark Limited** — helping SMEs and enterprises grow with AI agents, automation, and training.

Built with Next.js 15, Tailwind CSS, and MDX blog system. Deployed on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 15** — App Router, TypeScript, static generation
- **Tailwind CSS 3** — Custom design system with Inter font
- **MDX Blog** — File-based blog in `content/blog/`, managed via GitHub
- **Vercel** — Zero-config deployment

## Adding Blog Posts

Create a `.mdx` file in `content/blog/`:

```mdx
---
title: "Post Title"
date: "2026-03-22"
description: "Short description for SEO"
tags: ["AI", "Automation"]
author: "Alok Kumar"
---

Content here...
```

Push to GitHub — Vercel auto-deploys.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## License

Copyright NextWebSpark Limited.
