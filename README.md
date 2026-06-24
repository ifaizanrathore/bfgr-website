# Baba Farid Global Resources — Corporate Website

A production-grade corporate website for **BFGR** built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and lucide-react.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first theme configuration)
- **Framer Motion** (scroll animations)
- **lucide-react** (icons)
- **next/font** (Cormorant Garamond + Inter)
- **next/image** (optimized images)

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Adding Images

Drop these files into `public/images/`:

| File | Description |
|---|---|
| `logo.png` | BFGR circular logo — used in navbar, footer, browser tab |
| `chairman.jpg` | Raza Muhammad Rathore portrait — used in Leadership section |

Both are optional at runtime — a graceful fallback is shown when images are missing.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 theme (brand colors, fonts)
│   ├── layout.tsx            # Root layout + SEO metadata
│   ├── page.tsx              # Main single-page site
│   └── contact/
│       └── page.tsx          # Standalone /contact route
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Polymorphic button (gold/outline/ghost)
│   │   ├── Container.tsx     # Max-width wrapper
│   │   └── SectionHeading.tsx # Numbered section titles
│   ├── AnimateOnScroll.tsx   # Framer Motion scroll helpers
│   ├── Navbar.tsx            # Sticky nav with scroll detection
│   ├── Hero.tsx              # Full-height hero section
│   ├── CompanyOverview.tsx   # Section 01 — About BFGR
│   ├── VisionMission.tsx     # Section 02 — Vision & Mission
│   ├── CoreValues.tsx        # Section 03 — Core Values grid
│   ├── BusinessSectors.tsx   # Section 04 — 7 sector cards
│   ├── Leadership.tsx        # Section 05 — Chairman profile
│   ├── LeadershipPhoto.tsx   # Client component for photo + fallback
│   ├── InvestmentPartnership.tsx  # Section 06 — Partnership
│   ├── CorporateCommitment.tsx    # Section 07 — Commitment pillars
│   ├── ContactSection.tsx    # Section 08 — Form + details
│   ├── Footer.tsx            # Site footer
│   └── ScrollToTop.tsx       # Floating scroll-to-top button
├── data/
│   └── index.ts              # All site content (sectors, values, contact, etc.)
└── lib/
    └── utils.ts              # cn() classname helper
```

## Brand Colors

| Name | Hex | Usage |
|---|---|---|
| Forest Green | `#0B3D2E` | Primary brand, buttons |
| Forest Dark | `#072318` | Hero/footer backgrounds |
| Gold | `#C9A227` | Accents, CTAs, dividers |
| Gold Light | `#E3C766` | Hover states |
| Navy | `#142B4A` | Sparingly (globe accent) |
| Cream | `#F7F8F5` | Light section backgrounds |

## Content Management

All site content lives in [`src/data/index.ts`](src/data/index.ts):

- `sectors` — 7 business sector cards (title, blurb, activities)
- `coreValues` — foundational + operational values
- `chairman` — leadership profile (name, bio, expertise)
- `investmentPartners` — partnership tags
- `contactInfo` — address, phone, email, WhatsApp, map URL
- `navLinks` — navigation links

## Deploying to Vercel

1. Push this repository to GitHub
2. Import to [vercel.com/new](https://vercel.com/new)
3. Select the repo — Vercel auto-detects Next.js
4. Click **Deploy**

No environment variables are needed. The contact form uses `mailto:` so it works on static hosting.

> **Domain**: Update `contactInfo.website` in `src/data/index.ts` once your custom domain is live.
