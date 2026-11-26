Build a complete, production-quality multi-page Next.js (App Router) website — a **creative
house painting company** offering residential painting & custom children's bedroom murals.
The feeling: artistic, colorful, playful, imaginative, and premium — a painting studio's
portfolio as much as a contracting site. Make it visually memorable; the mural gallery is the
star.

## Routes (all must be fully implemented and linked from the nav)
`/`, `/services`, `/murals`, `/gallery`, `/about`, `/contact`

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` → `{ Button }`
- `@/components/ui/card` → `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` → `{ Badge }`
- `@/components/ui/input` → `{ Input }`
- `@/components/ui/label` → `{ Label }`
Everything else (paint stroke, gallery, before/after, floating shapes, filter, etc.) you MUST write yourself as a new file under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create in this response.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1.
2. Icons are components: `<Paintbrush className="size-5" />`. NEVER write `{icon.size}`. NEVER wrap an icon in `<p>`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) is defined in `app/layout.tsx` and rendered EXACTLY ONCE. Pages must NOT render the header or footer themselves.
4. Import every symbol you use. No unused imports. No `any`. Type props explicitly.
5. Photos: plain `<img>` (NEVER `next/image`) with `loading="lazy"`, a real `alt`, and `className="… object-cover"`. Use `https://picsum.photos/seed/<unique-slug>/<w>/<h>` for photography, and CSS gradients / inline SVG for graphics. No empty src.
6. Respect reduced motion: read `useReducedMotion()` and skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy. No "Lorem ipsum", no "TODO", no "sample text".
8. Responsive mobile-first; never overflow horizontally.

## Design language (artistic & playful premium)
- Base: warm white / cream foundations `#FFFDF8`. Expressive, saturated colors used THROUGHOUT the artwork and accents (coral, gold, teal, violet, leaf green).
- Typography: playful yet sophisticated — a rounded/characterful display face for headlines, clean sans for body, occasional hand-lettered-feeling accents.
- Layout: art-studio inspired — irregular gallery walls, overlapping frames, rotated labels, generous color blocks.
- Photography: freshly painted interiors, colorful children's rooms, paint tools, artist at work. Use descriptive picsum seeds.

## Motion language (this site's signature — colorful and creative)
- **Animated paint-stroke reveals**: SVG paths animating with `stroke-dashoffset`, and brush-swipe masks revealing images.
- **Image masking**: geometric / torn-edge clip-path reveals.
- **Playful floating illustrations**: soft shapes drifting on scroll or loop (respect reduced motion).
- **Colorful hover interactions**: swatch pops, tilt, gradient shifts on gallery tiles.
- **Scroll-based artwork reveals** with staggered timing.
- A **before/after slider** for transformations.
- A **filterable gallery** with animated layout transitions.
- A **horizontal scroll** strip for mural themes (optional but encouraged).

Write these components: `components/reveal.tsx`, `components/paint-stroke.tsx`, `components/gallery.tsx`, `components/before-after.tsx`, `components/floating-shapes.tsx`, `components/filter-tabs.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`. Also create `lib/gallery.ts` exporting the mural/portfolio items (title, category, seed) for the gallery.

## Content
Fictional company **"PRISM & PINE"** — residential painting & custom children's bedroom murals.
- `/` — visually striking hero showcasing a beautifully painted children's room; interior & exterior painting services; a teaser of the custom mural showcase; a small theme gallery; before-and-after transformation; a short "our process"; testimonials (labeled illustrative); consultation CTA.
- `/services` — interior painting, exterior painting, cabinets & trim, color consultation, wallpaper & accent walls, deck/fence staining, prep & repairs.
- `/murals` — the dedicated custom mural showcase: how a mural is designed & painted (design process), details on children's rooms, and a strong gallery.
- `/gallery` — portfolio gallery with category filters (space, jungle, underwater, fantasy, animals, nature, interiors, exteriors) — the strongest feature on the site.
- `/about` — the artist & company story, philosophy, safety/prep standards.
- `/contact` — request-a-consultation form (name / email / phone / project type / room / message) with validation and success feedback.

Clearly label testimonials and before/after imagery as illustrative demo content. Use a fictional business name and sample contact details — do not present invented credentials or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="…">…</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route above, `lib/gallery.ts`, and every component you reference.
