# TechWiz STEM Academy — Website

A modern, premium, conversion-focused marketing website for **TechWiz STEM Academy**, a STEM learning academy (Robotics, AI, Coding, Electronics, IoT & Innovation) for school students in Grade 3–12.

> **Tagline:** Learn. Build. Innovate.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide** icons. Mobile-first, SEO-optimized, dark/light mode, and ready to deploy on **Vercel** with zero environment variables.

---

## ✨ Features

**Pages**

- **Home** — 10 sections: Hero (animated lab background + counters), Why TechWiz, Programs, Project Showcase, Learning Journey timeline, Testimonials carousel, School Collaborations, Gallery (filterable masonry + lightbox), YouTube, FAQ, Instagram, Final CTA.
- **Programs** (`/courses`) + per-program detail (`/courses/[slug]`) — Junior Innovators, Future Engineers, Tech Explorers.
- **About** — founder story, mission, vision, values, animated growth timeline.
- **Contact** — lead form, WhatsApp CTA, contact cards, Google Maps embed (supports `?type=school`).
- **Admission** — multi-step registration with review + animated success state (supports `?program=`).
- Custom **404** page.

**Global / Special features**

- Floating WhatsApp button · Sticky admission CTA (mobile) · Lead-capture popup (timed + exit-intent) · Newsletter signup · Scroll progress bar · Back-to-top.
- Animated statistics counters · Scroll-reveal animations (respects `prefers-reduced-motion`).
- **Dark / Light mode** (next-themes, no flash) · Fully responsive, mobile-first.
- Instagram feed section · YouTube videos section (lightweight click-to-load facade).

**Forms & validation**

- Demo, Contact, Admission, Newsletter, and Lead forms with shared **zod** schemas (client + server), inline errors, loading & success states, and honeypot spam protection.
- API route handlers under `/api/*` validate and respond. They currently log submissions server-side — see [Wiring a real backend](#-wiring-a-real-form-backend).

**SEO**

- Per-page metadata, Open Graph & Twitter cards, canonical URLs.
- JSON-LD structured data: `EducationalOrganization`, `WebSite`, `Course`, `FAQPage`, `BreadcrumbList`.
- Dynamic `sitemap.xml`, `robots.txt`, web manifest, generated favicon, and dynamic OG image.

**Performance**

- All marketing pages are statically generated; brand artwork is self-contained SVG (no external image dependencies) for fast, reliable loads and strong Lighthouse scores.
- Fonts via `next/font` (Inter + Sora) with `display: swap`. Client JS is code-split to interactive components only.

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

Requires Node.js 18.18+ (developed on Node 22).

---

## 🧩 Project Structure

```
app/                 # App Router pages, route handlers, sitemap/robots/manifest/OG
  api/               # demo · contact · admission · newsletter · lead
  courses/[slug]/    # dynamic program detail pages
components/
  layout/            # Navbar, Footer, ThemeProvider/Toggle, Logo
  home/              # homepage sections
  sections/          # Instagram + YouTube
  forms/             # Demo, Contact, Admission, Newsletter forms
  widgets/           # WhatsApp, Sticky CTA, Lead popup, Scroll progress, Back-to-top
  ui/                # Button, Card, Section, Accordion, Modal, Counter, Artwork, fields…
lib/                 # site config, content data, zod schemas, SEO helpers, utils
```

All editable content lives in **`lib/data.ts`** and brand/contact details in **`lib/site.ts`**.

---

## 🔌 Wiring a real form backend

Form submissions are validated and handled in `lib/handleForm.ts`, which currently logs the lead server-side and returns success. To deliver leads to email / a CRM / a sheet, replace the `console.log` in `handleForm.ts` with your provider call (e.g. [Resend](https://resend.com), Formspree, or a Google Sheet webhook). No other changes are needed.

The WhatsApp number, contact email, address, and social links are configured in `lib/site.ts`.

---

## ▲ Deploy to Vercel

1. Push this repo to GitHub (already done if you're reading this in a PR).
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy**. Your site goes live at `https://<project>.vercel.app`.
5. After deploying, set the production domain in `lib/site.ts` (`siteConfig.url`) so canonical URLs, sitemap, and Open Graph tags point to your real domain.

> Tip: contact details and brand info in `lib/site.ts` are realistic placeholders — update them with your real values before launch.
