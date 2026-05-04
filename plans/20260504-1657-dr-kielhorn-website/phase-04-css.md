# Phase 04 — CSS Styling (styles.css)

## Overview
- **Priority:** High
- **Status:** Pending
- **Desc:** Comprehensive `public/css/styles.css` — design system, all section styles, animations, responsive breakpoints.
- **Target:** ~600-800 lines, kept maintainable via logical section comments

## Design Tokens (CSS Variables)
```css
:root {
  /* Colors */
  --primary: #1E6FA8;
  --primary-dark: #155680;
  --primary-light: #E3F2FC;
  --primary-mid: #5BA8D4;
  --teal: #0D9488;
  --teal-light: #CCFBF1;
  --accent: #0EA5C8;
  --text: #0F1F2E;
  --text-muted: #5C7A90;
  --text-light: #6B9BB8;
  --bg: #F7FBFF;
  --bg-alt: #EEF6FC;
  --border: #D8ECF8;
  --white: #FFFFFF;

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* Layout */
  --container-max: 1180px;
  --section-pad: 100px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-2xl: 40px;

  /* Shadows */
  --shadow-sm: 0 2px 10px rgba(15,31,46,.08);
  --shadow-md: 0 8px 28px rgba(15,31,46,.11);
  --shadow-lg: 0 20px 52px rgba(15,31,46,.14);
  --shadow-xl: 0 32px 72px rgba(15,31,46,.18);

  /* Transitions */
  --tr: .25s cubic-bezier(.4,0,.2,1);
  --tr-slow: .4s cubic-bezier(.4,0,.2,1);
}
```

## Key CSS Sections

### Reset + Base
- `box-sizing: border-box`, smooth scroll, `overflow-x: hidden`
- Typography scale (h1-h5 with `clamp()` for fluid sizing)
- Link defaults, image max-width

### Utility Classes
- `.container` (max-width + centered + padding)
- `.section` (vertical padding via `--section-pad`)
- `.section-header` (centered, eyebrow + H2 + desc)
- `.section-eyebrow` (uppercase, letter-spacing, primary color)
- `.btn`, `.btn-primary`, `.btn-outline`, `.btn-white`, `.btn-sm`, `.btn-lg`

### Language Switcher
```css
.lang-switcher { position: relative; z-index: 1001; }
.lang-btn { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,.15); 
            backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,.2); 
            border-radius: 50px; padding: 6px 14px; cursor: pointer; }
.lang-dropdown { position: absolute; top: calc(100% + 8px); right: 0; 
                 background: white; border-radius: var(--radius-md); 
                 box-shadow: var(--shadow-lg); overflow: hidden; 
                 opacity: 0; pointer-events: none; transform: translateY(-8px);
                 transition: all var(--tr); max-height: 200px; overflow-y: auto; }
.lang-dropdown.open { opacity: 1; pointer-events: auto; transform: translateY(0); }
.lang-option { display: flex; align-items: center; gap: 10px; width: 100%; 
               padding: 12px 18px; background: none; border: none; 
               cursor: pointer; font-size: .9rem; transition: background var(--tr); }
.lang-option:hover, .lang-option.active { background: var(--primary-light); color: var(--primary); }
```

### Header
- `position: fixed; top: 0; z-index: 1000`
- `background: rgba(255,255,255,.93); backdrop-filter: blur(16px)`
- `.scrolled` class adds `box-shadow: var(--shadow-md)`
- Logo: SVG img 40px height
- Nav: flex, gap, nav-link hover with primary-light bg
- Hamburger: hidden on desktop, flex on mobile

### Hero Section
- `min-height: 100vh; padding-top: 74px` (header height offset)
- Background: linear-gradient with animated blobs
- Grid: `1fr 1fr` on desktop, stacked on mobile
- Blobs: `position: absolute; border-radius: 50%; filter: blur(60px)`
  - Blob 1: `animation: blobFloat1 12s ease-in-out infinite`
  - Blob 2: `animation: blobFloat2 15s ease-in-out infinite`
- Hero photo frame: `aspect-ratio: 4/5; border-radius: var(--radius-2xl)`
- Floating cards: `position: absolute; animation: floatCard 4s ease-in-out infinite`
- Trust items: flex row with dividers

### @keyframes Animations
```css
@keyframes blobFloat1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,20px) scale(1.05)} }
@keyframes blobFloat2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-30px) scale(1.08)} }
@keyframes floatCard  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
@keyframes tagPulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
@keyframes bounceDown { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
@keyframes fadeInUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
@keyframes countUp    { from{opacity:0} to{opacity:1} }
```

### Scroll Reveal
```css
[data-reveal] { opacity: 0; transform: translateY(32px); 
                transition: opacity .6s cubic-bezier(.4,0,.2,1), transform .6s cubic-bezier(.4,0,.2,1); }
[data-reveal].revealed { opacity: 1; transform: translateY(0); }
[data-delay="100"] { transition-delay: .1s; }
[data-delay="200"] { transition-delay: .2s; }
[data-delay="300"] { transition-delay: .3s; }
[data-delay="400"] { transition-delay: .4s; }
```

### Intro Strip (Benefits)
- `background: linear-gradient(135deg, var(--primary), var(--primary-dark))`
- 4-column grid, icon wraps with hover lift

### Services Grid
- 3-column CSS grid with `gap: 20px`
- Service card: `position: relative; overflow: hidden`
- Background image with `object-fit: cover` on `img`
- Gradient overlay: `background: linear-gradient(to top, rgba(15,31,46,.85) 0%, transparent 60%)`
- Card hover: `transform: translateY(-6px); box-shadow: var(--shadow-xl)`
- Content positioned at bottom with `position: absolute; bottom: 0`

### Team Section
- Featured card: `display: grid; grid-template-columns: 300px 1fr`
- Photo: `aspect-ratio: 3/4; border-radius: var(--radius-lg); object-fit: cover`
- Staff grid: `repeat(4, 1fr)` → 3 on tablet → 2 on mobile
- Team card: photo top half, info bottom, hover lift with border

### Gallery
- CSS Grid: `grid-template-columns: 2fr 1fr; grid-template-rows: auto auto`
- First item spans 2 rows (`grid-row: span 2`)
- All photos: `object-fit: cover; border-radius: var(--radius-lg)`

### Opening Hours Table
- 2-column layout: table + emergency card
- Row hover: `background: var(--primary-light)`
- Emergency card: gradient blue, floating phone icon

### Reviews
- Score card: large rating number + star bars
- Review card grid: 3 columns, featured card in primary blue
- `::before` pseudo-element for large quote mark

### Process Steps
- Horizontal flex with connecting line `::before` pseudo-element
- Step numbers in primary blue circles
- Responsive: vertical stack on mobile

### Contact Section
- 2-column: `1fr 1.6fr`
- Info cards: icon + content, border hover effect
- Form: styled inputs with focus glow
- Map iframe: `border-radius: var(--radius-lg); overflow: hidden`

### Footer
- Dark background: `#0A1929`
- 4-column inner: brand + 3 nav columns
- Bottom bar: copyright + legal links

## Responsive Breakpoints
```css
/* Tablet */
@media (max-width: 1024px) {
  .hero-content { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .team-featured { grid-template-columns: 200px 1fr; }
  .team-grid { grid-template-columns: repeat(3, 1fr); }
  .contact-grid { grid-template-columns: 1fr; }
}

/* Mobile */
@media (max-width: 768px) {
  :root { --section-pad: 60px; }
  .hamburger { display: flex; }
  .main-nav { position: fixed; top: 74px; left: 0; right: 0; flex-direction: column; max-height: 0; overflow: hidden; }
  .main-nav.open { max-height: 500px; }
  .services-grid { grid-template-columns: 1fr; }
  .team-featured { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-grid { grid-template-columns: 1fr; }
  .hours-grid { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr; }
}

/* Small mobile */
@media (max-width: 480px) {
  .team-grid { grid-template-columns: 1fr; }
  .process-steps { flex-direction: column; }
}
```

## Glass Morphism Cards
```css
.glass-card {
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.5);
  border-radius: var(--radius-xl);
}
```

## Success Criteria
- All sections styled with correct visual hierarchy
- Hover effects on all interactive elements
- Animations smooth at 60fps (GPU-accelerated: transform, opacity only)
- Mobile nav works at 320px minimum width
- No horizontal scroll on any breakpoint
