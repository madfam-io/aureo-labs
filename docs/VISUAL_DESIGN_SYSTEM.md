# Aureo Labs Visual Design System — Golden × Glass (v1)

> **Aureo = golden.** This guide codifies a cohesive visual language built on the golden ratio (φ) and a refined glass‑and‑gold aesthetic. It includes principles, tokens, components, motion, accessibility, and code snippets for immediate implementation in Next.js + Tailwind.

**Status:** Draft v1
**Last updated:** 2 Sep 2025
**Owners:** Design (TBD) · Frontend (TBD)

---

## 1) Design Principles

1. **Golden Geometry** — Use the golden ratio (φ ≈ 1.618) to inform layout, type scales, spacing, and aspect ratios. Prefer simple proportion pairs (1:φ, φ:φ²) over overly complex constructions.
2. **Glass Realism, Not Gimmick** — Surfaces are translucent, layered, and purposeful. Depth conveys information hierarchy; noise and blur are restrained for performance and readability.
3. **Gold as Energy** — Gold/amber accents signal interactivity, vitality, and premium craft. Use sparingly on a dark neutral base to maintain contrast and focus.
4. **Enterprise Clarity** — Data‑dense areas stay high‑contrast with sober neutrals; gold is an accent, not a text body color.
5. **Accessibility First** — All choices meet WCAG 2.2 AA or better. Motion and transparency respect user preferences.

---

## 2) Core Tokens (CSS Variables)

> Declare once in `styles/tokens.css` and consume via Tailwind config and utility classes.

```css
:root {
  /* Math */
  --phi: 1.61803398875;

  /* Color — Gold Family */
  --gold-900: #7c3e00;   /* deep copper */
  --gold-700: #b45309;   /* Copper (spec) */
  --gold-500: #f59e0b;   /* Amber (spec primary) */
  --gold-300: #fcd34d;   /* Gold highlight */
  --gold-200: #fde68a;   /* soft glow */

  /* Neutrals (graphite→fog) */
  --neutral-950: #0b0f14;
  --neutral-900: #111827;
  --neutral-800: #1f2937;
  --neutral-700: #374151;
  --neutral-500: #6b7280;
  --neutral-300: #d1d5db;
  --neutral-100: #f3f4f6;
  --neutral-50:  #f9fafb;

  /* Accent */
  --electric-500: #3b82f6; /* CTA + links */

  /* Elevation / Glass */
  --glass-bg:  hsla(210, 20%, 8%, 0.45);   /* base backdrop */
  --glass-stroke: rgba(255, 255, 255, 0.16);
  --glass-highlight: rgba(255, 255, 255, 0.06);
  --glass-blur: 14px;     /* see perf guidance */
  --glass-radius: 1.25rem;  /* 20px */

  /* Shadows (gold‑tinted) */
  --shadow-1: 0 1px 2px rgba(0,0,0,.25), 0 0 0 1px rgba(255,255,255,.04) inset;
  --shadow-2: 0 8px 24px rgba(0,0,0,.35), 0 0 24px rgba(245, 158, 11, .12);
  --shadow-3: 0 16px 40px rgba(0,0,0,.45), 0 0 48px rgba(252, 211, 77, .16);

  /* Typography (Inter Variable, Fira Code) */
  --font-sans: ui-sans-serif, InterVariable, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  --font-mono: ui-monospace, "Fira Code", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* Type scale (φ‑modular; base 16px rounded) */
  --text-xs:   0.79rem;  /* 12.6px */
  --text-sm:   0.94rem;  /* 15.0px */
  --text-base: 1.00rem;  /* 16px */
  --text-md:   1.31rem;  /* 21px */
  --text-lg:   1.62rem;  /* 26px */
  --text-xl:   2.12rem;  /* 34px */
  --text-2xl:  2.74rem;  /* 44px */
  --text-3xl:  4.45rem;  /* 71px (hero) */

  /* Spacing scale (8px base × φ series, rounded) */
  --space-1: 0.5rem;   /* 8 */
  --space-2: 0.8125rem;/* 13 */
  --space-3: 1.3125rem;/* 21 */
  --space-4: 2.125rem; /* 34 */
  --space-5: 3.375rem; /* 54 */
  --space-6: 5.5rem;   /* 88 */

  /* Motion (φ‑timings) */
  --ease-standard: cubic-bezier(.2, .8, .2, 1);
  --dur-1: 100ms;
  --dur-2: 160ms;  /* ×φ ≈ */
  --dur-3: 260ms;
  --dur-4: 420ms;
  --dur-5: 680ms;
}

/******** Dark theme ********/
:root[data-theme="dark"] {
  --glass-bg: hsla(210, 24%, 8%, 0.55);
  --glass-stroke: rgba(255, 255, 255, 0.18);
  --glass-highlight: rgba(255,255,255,0.08);
}

/******** High-contrast fallback ********/
@media (prefers-contrast: more) {
  :root { --glass-bg: rgba(17, 24, 39, 0.9); --glass-blur: 6px; }
}
```

---

## 3) Tailwind Integration

Add token surfaces to Tailwind via `tailwind.config.ts`.

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        gold: {
          900: 'var(--gold-900)',
          700: 'var(--gold-700)',
          500: 'var(--gold-500)',
          300: 'var(--gold-300)',
          200: 'var(--gold-200)'
        },
        neutral: {
          950: 'var(--neutral-950)',
          900: 'var(--neutral-900)',
          800: 'var(--neutral-800)',
          700: 'var(--neutral-700)',
          500: 'var(--neutral-500)',
          300: 'var(--neutral-300)',
          100: 'var(--neutral-100)',
          50:  'var(--neutral-50)'
        },
        electric: { 500: 'var(--electric-500)' }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)'
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)'
      },
      boxShadow: {
        aureo1: 'var(--shadow-1)',
        aureo2: 'var(--shadow-2)',
        aureo3: 'var(--shadow-3)'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glass': {
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--glass-blur))',
          WebkitBackdropFilter: 'blur(var(--glass-blur))',
          border: '1px solid var(--glass-stroke)',
          boxShadow: 'var(--shadow-2)',
          borderRadius: 'var(--glass-radius)'
        },
        '.gold-border': {
          borderImage: 'linear-gradient(120deg, var(--gold-500), var(--gold-300)) 1',
          borderWidth: '1px',
          borderStyle: 'solid'
        },
        '.gold-text': {
          background: 'linear-gradient(180deg, var(--gold-300), var(--gold-500))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        },
        '.grid-phi': {
          display: 'grid',
          gridTemplateColumns: '1fr calc(1fr * var(--phi))'
        },
        '.aspect-phi': {
          aspectRatio: '1 / var(--phi)'
        }
      })
    }
  ]
}
```

---

## 4) Layout & Composition

### 4.1 Golden Ratio Grid

* **Primary Split:** 1:φ columns for hero and key sections (`.grid-phi`).
* **Nested Blocks:** Maintain hierarchy with φ steps (e.g., sidebar width = container/φ²).
* **Margins/Padding:** Use φ spacing tokens (`--space-*`) at section boundaries.

### 4.2 Aspect Ratios

* **Cards & Media:** `aspect-ratio: 1 / φ` (portrait) or `φ / 1` (landscape).
* **Avatars/Badges:** square or circle; avoid gold fills for photos.

### 4.3 Golden Spiral Overlay (dev/debug)

Embed a removable SVG overlay for layout checks.

```html
<svg class="pointer-events-none fixed inset-0 opacity-[0.08] hidden md:block" aria-hidden="true">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0%" stop-color="#FCD34D"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
  </defs>
  <!-- Simplified spiral guide; toggle via dev toolbar -->
  <path d="M0,0 C0,400 400,400 400,800 ..." stroke="url(#g)" fill="none"/>
</svg>
```

> Use in development only; remove from production builds.

---

## 5) Color Usage

### 5.1 Roles

* **Primary Accent:** `--gold-500` for CTAs, active states, key icons
* **Highlight/Glow:** `--gold-300/200` for subtle outer glows and gradients
* **Base UI:** neutrals on dark backgrounds; keep text primarily neutral‑100/300
* **Info/Links:** `--electric-500` to avoid overusing gold

### 5.2 Gradients

```css
/* Gold beam */
--grad-gold: linear-gradient(135deg, var(--gold-300) 0%, var(--gold-500) 40%, var(--gold-700) 100%);
/* Aurora glass edge */
--grad-edge: linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,0));
```

### 5.3 Do / Don’t

* ✅ Gold on dark neutrals; ✅ gold as outline/stroke/gradient text
* ❌ Paragraph text in gold; ❌ gold on light backgrounds without dark stroke

---

## 6) Glassmorphism System

### 6.1 Surfaces

* **Glass‑1 (cards):** `.glass` utility; blur 10–14px; stroke + subtle highlight
* **Glass‑2 (panels):** stronger blur (16–20px), thicker stroke; reserve for modals
* **Glass‑3 (nav):** lighter blur (6–10px) for performance

### 6.2 Performance & Fallbacks

* Detect `prefers-reduced-transparency` and **reduce blur** to ≤ 6px
* On low‑end devices (heuristics or UA), switch to opaque with `--glass-bg` alpha ≥ 0.85
* Avoid stacking >2 blurred layers; prefer compositing gradients over blur

### 6.3 Example Card

```html
<div class="glass p-4 md:p-5 shadow-aureo2">
  <div class="h-px w-full bg-gradient-to-r from-gold-300/60 to-transparent"></div>
  <h3 class="mt-3 text-lg font-semibold text-neutral-100">Forge Sight</h3>
  <p class="text-neutral-300">Pricing intelligence with real‑time market signals.</p>
  <button class="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-neutral-900 bg-gradient-to-b from-gold-300 to-gold-500 shadow-aureo2 hover:shadow-aureo3 transition-all duration-[var(--dur-3)] ease-[var(--ease-standard)]">
    Explore
  </button>
</div>
```

---

## 7) Typography

* **Family:** Inter Variable (display/body), Fira Code (code)
* **Scale:** φ‑modular; see tokens; adjust at breakpoints (`clamp()` preferred)
* **Line Length:** 60–75ch for body; tighten to 55–65ch in dark mode for legibility
* **Headlines:** gradient text (`.gold-text`) only for hero/section titles
* **Numerals:** Use tabular lining for stats; gold accents on glyphs only as outlines

Example:

```css
h1 { font-size: clamp(2.12rem, 4vw, 4.45rem); line-height: 1.05; }
h2 { font-size: clamp(1.62rem, 2.6vw, 2.74rem); line-height: 1.1; }
```

---

## 8) Iconography & Illustration

* **Icons:** 24px grid, 1.5px–2px stroke; neutral strokes with gold accents for active
* **Illustrations:** geometric forms based on rectangles/circles subdivided by φ; use subtle grain/noise for materiality
* **3D:** thin glass panels with gold edge lights; respect performance budgets (SSR static GLTF where possible)

---

## 9) Motion & Micro‑interactions

* **Timings:** φ‑series (`--dur-2` 160ms for taps, `--dur-3` 260ms for hovers)
* **Easing:** `--ease-standard` for most; use spring only for primary CTA
* **Shimmer (Gold):**

```css
@keyframes goldShimmer { to { background-position: 200% 0; } }
.gold-shimmer {
  background-image: linear-gradient(90deg, rgba(255,255,255,.06), rgba(252,211,77,.25), rgba(255,255,255,.06));
  background-size: 200% 100%;
  animation: goldShimmer 1.8s linear infinite;
}
```

* **Reduce Motion:**

```css
@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
```

---

## 10) Components (Reference)

### 10.1 Gold Button

```html
<button class="group relative inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-neutral-900 bg-gradient-to-b from-gold-300 to-gold-500 shadow-aureo2 transition-all duration-[var(--dur-3)] ease-[var(--ease-standard)] hover:shadow-aureo3">
  <span class="relative z-10">Get Started</span>
  <span class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 gold-shimmer"></span>
</button>
```

### 10.2 Glass Card + φ Layout

```html
<section class="grid-phi gap-6">
  <div class="glass p-6">
    <h3 class="text-xl gold-text">PENNY</h3>
    <p class="text-neutral-300">AI Assistant Platform.</p>
  </div>
  <div class="aspect-phi glass p-6">Live Preview</div>
</section>
```

### 10.3 Section Divider (Golden Arc)

```html
<hr class="h-[2px] w-full border-0 bg-gradient-to-r from-gold-300 via-gold-500 to-transparent"/>
```

---

## 11) Imagery & Photography

* **Tone:** warm highlights with cool neutral backgrounds; avoid saturated yellows
* **Treatment:** apply a subtle gold rim‑light; optional glass reflection overlay at ≤ 10% opacity
* **Accessibility:** ensure overlays don’t drop text contrast below AA; prefer text on separate layer

---

## 12) Accessibility Guidelines

* **Contrast:** body text ≥ 4.5:1; UI text ≥ 3:1; verify gradient text against worst‑case stop
* **Focus States:** visible, non‑gold outline (electric blue or neutral‑300)
* **Color Independence:** never rely on gold alone to indicate state; pair with icon/shape/label
* **Transparency:** use solid fallback backgrounds for `prefers-contrast: more` and low‑power devices

---

## 13) Figma Implementation

* **Libraries:** Color, Type, Elevation, Motion, Grid (φ)
* **Variables:** match CSS tokens names/values
* **Components:** Button/Link, Card, Panel, Navbar, Footer, Stat blocks, Charts
* **Templates:** Landing hero (1:φ), Product page, Docs page, Case study
* **Plugins:** A11y contrast checker, Tokens Studio (optional)

Naming examples:

* Color token: `color/gold/500`
* Effect token: `shadow/aureo/2`
* Space token: `space/phi/3` (21)

---

## 14) JSON Design Tokens (W3C draft format)

```json
{
  "$schema": "https://design-tokens.org/schema.json",
  "props": {
    "phi": { "value": 1.61803398875 },
    "color.gold.500": { "value": "#F59E0B" },
    "color.gold.300": { "value": "#FCD34D" },
    "color.gold.700": { "value": "#B45309" },
    "color.neutral.900": { "value": "#111827" },
    "shadow.aureo.2": { "value": "0 8px 24px rgba(0,0,0,.35), 0 0 24px rgba(245,158,11,.12)" },
    "radius.glass": { "value": "20px" },
    "space.phi.3": { "value": "21px" },
    "font.size.xl": { "value": "2.12rem" }
  }
}
```

---

## 15) Implementation Checklist

* [ ] Add `tokens.css` and Tailwind config extension
* [ ] Build `glass`, `gold-border`, `gold-text`, `grid-phi`, `aspect-phi` utilities
* [ ] Create Button, Card, Navbar with glass surfaces and gold accents
* [ ] Implement hero layout using 1:φ split + gradient headline
* [ ] Add dev‑only golden spiral overlay toggle
* [ ] Validate contrast and motion preferences
* [ ] Add Storybook stories with A11y and visual tests

---

## 16) Do / Don’t Gallery (Guidance)

**Do**

* Use gold for CTAs, active icons, key metrics
* Keep text mostly neutral; reserve gold for emphasis
* Limit blur layers; prefer gradients for depth

**Don’t**

* Set long paragraphs in gold
* Overlay gold on bright images without a dark scrim
* Use heavy drop shadows; prefer soft gold glows

---

## 17) Notes & Future Iterations

* Explore **Typesense** as a search alternative to reduce external scripts
* Consider a **Tailwind preset package** (`@aureo/tailwind-preset`) to share tokens across repos
* Add **SVG golden grids** as Figma components linked to templates

---

> Questions or proposals? Open a design RFC in `/docs/rfcs/` or tag the Design System owners on Slack/Discord.
