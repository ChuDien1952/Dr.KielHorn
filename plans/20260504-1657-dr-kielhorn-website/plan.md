# Dr. Kielhorn Website — Implementation Plan
**Date:** 2026-05-04  
**Status:** COMPLETE (2026-05-04)

## Overview
Bilingual (EN/VI) dental practice website for Dr. Christopher Kielhorn, Winsen (Luhe). Node.js/Express backend, vanilla HTML/CSS/JS frontend, rich interactive effects, GitHub Pages deployment.

## Tech Stack
- **Server:** Node.js + Express.js (serves `public/`)
- **Frontend:** Vanilla HTML + CSS + JavaScript (no framework)
- **Animations:** GSAP CDN + CSS keyframes + Intersection Observer
- **i18n:** Custom JSON translation system (data-i18n attributes)
- **Deploy:** GitHub Actions → GitHub Pages (`public/` → `gh-pages` branch)
- **Logo:** `document/img/logoKielhorn.svg`

## Phases

| Phase | File | Description | Status |
|-------|------|-------------|--------|
| 1 | [phase-01-project-setup.md](phase-01-project-setup.md) | package.json, server.js, .gitignore, GitHub Actions | ✓ DONE |
| 2 | [phase-02-assets.md](phase-02-assets.md) | 31 images copied/renamed to public/assets/img/ | ✓ DONE |
| 3 | [phase-03-html.md](phase-03-html.md) | public/index.html — 11 sections, 165 data-i18n attrs | ✓ DONE |
| 4 | [phase-04-css.md](phase-04-css.md) | public/css/styles.css — 38KB, design system | ✓ DONE |
| 5 | [phase-05-javascript.md](phase-05-javascript.md) | main.js + i18n.js + vendored GSAP/ScrollTrigger | ✓ DONE |

## Key Files to Create
```
/
├── package.json
├── server.js
├── .gitignore
├── .github/workflows/deploy.yml
└── public/
    ├── index.html
    ├── css/styles.css
    ├── js/main.js
    ├── js/i18n.js
    └── assets/img/  ← copied from document/img/
```

## Source Assets
- Images: `./document/img/` (logo, team photos, service images, practice photos)
- Reference HTML: `./document/index.html`, `./document/about-us.html`
- Practice data: phone `04171/71212`, address `Niedersachsenstraße 13a, 21423 Winsen (Luhe)`

## Dependencies
- `express` ^4.x (server)
- `gh-pages` ^6.x (optional deploy helper, or use GitHub Actions action)

## Code Review Fixes Applied (2026-05-04)

### i18n.js Improvements
- Changed innerHTML default to textContent for security; added data-i18n-html allowlist for hero title and contact address
- Fixed setLanguage() double-render bug — translations now apply during fade-out, not after
- Changed `&amp;` to `&` in non-HTML translation values for proper entity handling

### main.js Cleanup
- Removed no-op initRatingBars() function
- Removed duplicative fixHoursTable() calls
- Replaced setTimeout(initHeroGSAP, 100) with document.fonts.ready.then(initHeroGSAP) for reliable font loading

### server.js Security Enhancements
- Added security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Fixed wildcard catch-all to proper 404 handler

### HTML Accessibility & Semantics
- Added data-i18n-html to hero h1 and contact address
- Fixed all 8 team member alt text attributes
- Added aria-controls to hamburger menu button

### CSS Dead Code Removal
- Removed unused [data-delay="400"] rule from styles.css

### Vendor Dependencies
- Vendored gsap.min.js and ScrollTrigger.min.js (replaced CDN references for reliability)
