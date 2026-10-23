# Hisabe KhataOS — Smart POS & Cloud Ledger Landing Page

A modern, high-converting editorial landing page built for **Hisabe Khata** (an all-in-one Smart POS, Khata/Due Recovery, and Business Management platform).

Rebuilt with **Astro 7 (latest)**, **Tailwind CSS v4**, and **Lucide Icons**, retaining the iconic editorial newspaper / brutalist public ledger design system inspired by [GhushSite (ghush.site)](https://www.ghush.site/).

---

## 🎨 Design & Aesthetic System
- **Warm Editorial Newsprint Canvas** (`#f4f3ef` / `bg-paper`)
- **Crisp High-Contrast Dark Ink** (`#0b0b0a` / `text-ink` / `bg-ink`)
- **1px Solid Ledger Lines** (`#171715` / `border-line`)
- **Yellow Highlighter Marker Accents** (`#ffda00` / `bg-yellow`)
- **Typography Pairings**: *Source Serif 4* for bold editorial headlines, *IBM Plex Mono* for data tables, metrics, and micro-labels, and *Noto Sans Bengali* & *Plus Jakarta Sans* for clean Bengali typography.

---

## ⚡ Architectural Features & Constraints Followed
- **Latest Astro (`astro@^7.4.0`)**: Ultra-fast static rendering with component islands and zero unneeded client-side runtime.
- **Tailwind CSS v4 (`@tailwindcss/vite` & `tailwindcss@^4.3.3`)**: Modern `@theme` configuration without legacy config files.
- **Strict Component Size**: Every component in the codebase is modular and strictly **under 300 lines of code**.
- **No Duplicate Code**: Built around clean UI primitives (`Button.astro`, `SectionHeading.astro`, `Carousel.astro`).
- **Interactive Carousels**:
  - `SolutionsCarousel.astro`: Industry verticals slider with touch-swipe snap and keyboard arrows.
  - `TestimonialsCarousel.astro`: Customer reviews slider with autoplay and rating metrics.
- **Full Interactive Functionality**:
  - Mobile slide-over navigation drawer with ESC key and backdrop dismissal.
  - Interactive Monthly/Annual billing switcher with dynamic 20% savings calculation.
  - Interactive Product Tour module tabs.
  - FAQ split accordion with smooth expand/collapse and `+`/`−` toggle states.
  - Interactive live system demo modal (`DemoModal.astro`).
  - Lead capture form connected to animated toast notifications (`Toast.astro`).

---

## 📂 Project Structure

```
landing-page-hisabkhata/
├── astro.config.mjs             # Astro 7 configuration with Vite Tailwind plugin
├── package.json                 # ESM scripts & modern dependencies
├── README.md                    # Project documentation
├── public/                      # Static assets & favicon
└── src/
    ├── styles/
    │   └── global.css           # Tailwind v4 @theme, custom colors & utility classes
    ├── layouts/
    │   └── Layout.astro         # HTML5 shell, SEO tags & Google Fonts (< 40 lines)
    ├── components/
    │   ├── ui/
    │   │   ├── Button.astro           # Reusable button primitive (< 50 lines)
    │   │   ├── SectionHeading.astro   # Reusable editorial serif heading (< 65 lines)
    │   │   └── Carousel.astro         # Generic smooth-scroll carousel primitive (< 180 lines)
    │   ├── VisionStrip.astro          # Newsprint top ticker (< 25 lines)
    │   ├── Header.astro               # Sticky editorial header with mobile trigger (< 75 lines)
    │   ├── MobileDrawer.astro         # Accessible slide-over drawer (< 110 lines)
    │   ├── Hero.astro                 # Clean editorial serif hero with trust badges (< 60 lines)
    │   ├── SnapshotGrid.astro         # 3-card immediate value proposition (< 70 lines)
    │   ├── FeaturesBento.astro        # 6-card bento grid with Lucide icons (< 125 lines)
    │   ├── ProductTour.astro          # Interactive module tour tabs (< 260 lines)
    │   ├── SolutionsSection.astro     # Store banner image & 6-solution industry grid (< 175 lines)
    │   ├── HowItWorks.astro           # 3-step onboarding walkthrough (< 60 lines)
    │   ├── Pricing.astro              # Monthly/annual billing toggle & plan tiers (< 185 lines)
    │   ├── TestimonialsCarousel.astro # Customer reviews carousel with verified badges (< 155 lines)
    │   ├── FaqAccordion.astro         # Split FAQ accordion with toggle states (< 170 lines)
    │   ├── FinalCta.astro             # High-contrast lead form with toast trigger (< 85 lines)
    │   ├── Footer.astro               # Editorial 4-column footer with social icons (< 135 lines)
    │   ├── DemoModal.astro            # Interactive live demo popup (< 160 lines)
    │   └── Toast.astro                # Dynamic notification toast system (< 105 lines)
    └── pages/
        └── index.astro                # Master landing page layout assembly (< 55 lines)
```

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
npm install

# Start local Astro development server (hot reload)
npm run dev

# Build production static website (dist/)
npm run build

# Preview production build locally
npm run preview
```
