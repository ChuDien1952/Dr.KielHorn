# Dr. Kielhorn Website — Codebase Summary

## Project Overview

Single-page dental practice website for **Dr. Christopher Kielhorn**, Winsen (Luhe), Germany. Modern, responsive design with bilingual support (English + Vietnamese), smooth animations, and GitHub Pages deployment.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Server** | Node.js 18+ / Express.js ^4.18.2 |
| **Frontend** | Vanilla HTML5 / CSS3 / JavaScript (ES6) |
| **Animation** | GSAP 3.12.5 + ScrollTrigger (vendored locally) |
| **Internationalization** | Custom JSON-based i18n system |
| **Deployment** | GitHub Pages + GitHub Actions |
| **Type** | Single-Page Application (SPA) |

## Project Structure

```
Dr.KielHorn/
├── public/                           # Static assets & frontend code
│   ├── index.html                    # Single HTML file (11 sections, 165 i18n attrs)
│   ├── css/
│   │   └── styles.css                # Design system (38KB, Playfair Display + Plus Jakarta Sans)
│   ├── js/
│   │   ├── main.js                   # UI interactions, scroll reveals, GSAP animations
│   │   ├── i18n.js                   # Bilingual translation system (EN/VI)
│   │   └── vendor/
│   │       ├── gsap.min.js           # GSAP animation library
│   │       └── ScrollTrigger.min.js   # Scroll-based triggers for GSAP
│   └── assets/img/                   # 31 images: team, services, gallery, logo
│
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions CI/CD (deploy to gh-pages)
│
├── package.json                      # Node dependencies: Express
├── package-lock.json                 # Lockfile for npm reproducibility
├── server.js                         # Express static server with security headers
├── .gitignore                        # Standard Node.js ignores
└── docs/                             # Documentation (generated)
```

## Key Files & Responsibilities

### server.js
- Express.js static file server
- Listens on port 3000 (default) or `process.env.PORT`
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Single-page app routing: 404 → index.html (enables client-side routing)

### public/index.html
- 11 main sections: Hero, Benefits, Services, Team, Gallery, Hours, Reviews, Process, Contact, Footer
- 165 data-i18n attributes for translation
- Schema.org structured data (LocalBusiness/Dentist type)
- Responsive meta tags and OG properties
- Accessibility: skip link, ARIA labels, semantic HTML5

### public/css/styles.css
- **Design System:** Medical blue (#1E6FA8), teal accent (#0D9488), clean whites
- **Typography:** Playfair Display (headings, serif), Plus Jakarta Sans (body, sans-serif)
- **Components:** Glass morphism cards, gradient overlays, responsive grid
- **File Size:** ~38KB uncompressed
- **Breakpoints:** Mobile-first approach with tablet/desktop media queries

### public/js/main.js
- **Sticky Header:** Toggles .scrolled class on scroll threshold (20px)
- **Mobile Navigation:** Hamburger menu with body overflow toggle
- **Smooth Scroll:** Anchor links with header-aware offset calculation
- **Active Nav:** IntersectionObserver tracks section visibility
- **Scroll Reveal:** Fade-in animations via .revealed class on [data-reveal] elements
- **Hero Animations:** GSAP timeline for hero section (fade, scale, parallax)
- **Counter Animation:** Animates numeric stats on scroll
- **Form Validation:** Basic contact form validation

### public/js/i18n.js
- **Structure:** TRANSLATIONS object with language keys (en, vi)
- **Supported Languages:** English (default), Vietnamese
- **Strategy:** textContent by default; allowlist for HTML content
- **Allowlist Elements:** hero h1 (HTML-safe), contact address, hero cards
- **Persistence:** localStorage stores language preference
- **DOM Pattern:** data-i18n="section.key" + data-i18n-html for HTML content

### public/js/vendor/
- **gsap.min.js:** GSAP 3.12.5 core library (vendored to avoid CDN risk)
- **ScrollTrigger.min.js:** GSAP plugin for scroll-based triggers

### .github/workflows/deploy.yml
- **Trigger:** Pushes to main branch
- **Process:** Checks out → peaceiris/actions-gh-pages@v4
- **Output:** Publishes ./public/ to gh-pages branch (force orphan)
- **Credentials:** Uses GITHUB_TOKEN (auto-injected)

## Section Inventory

| Section | ID | Purpose | Features |
|---------|----|---------| ---------|
| Hero | home | Intro + CTAs | GSAP animations, dual buttons, scroll prompt |
| Header | siteHeader | Navigation bar | Sticky, mobile menu, language switcher |
| Benefits | benefits | Key differentiators | 4 value cards with icons |
| Services | services | Service offerings | 8 service cards with descriptions |
| Team | team | Staff profiles | Doctor bio + 9 staff members with photos |
| Gallery | practice | Photo gallery | 5 practice images with parallax |
| Hours | hours | Operating times | Days/hours table, notice section |
| Reviews | reviews | Patient testimonials | 3-5 quote cards |
| Process | process | Workflow explanation | Step-by-step patient journey |
| Contact | contact | Booking + location | Form, address, map embed |
| Footer | footer | Links + legal | Links, copyright, privacy links |

## Image Assets (31 files)

**Team Photos (10):**
- dr-kielhorn.jpeg, team-ikkardes.jpeg, team-jochim.jpg, team-kukadiya.jpg, team-lozhnikova.jpg, team-sirak.jpeg, team-taifour.jpeg, team-thiemann.jpeg, team-varoquier.jpg, team-yurchenko-f.jpeg, team-yurchenko-m.jpeg

**Practice Photos (6):**
- clinic-exterior.jpg, practice-exterior.jpg, practice-1.jpeg — practice-5.jpeg

**Service Icons (8):**
- svc-prevention.jpg, svc-implant.jpg, svc-dentures.jpg, svc-surgery.jpg, svc-children.jpg, svc-aesthetic.jpg, svc-anxiety.jpg, svc-preservation.jpg

**General (7):**
- logo.svg, logo.png, about.jpg, laboratory.jpg

## Security Considerations

1. **Vendored Dependencies:** GSAP bundled locally to mitigate supply-chain risk from CDN
2. **Security Headers:** X-Frame-Options, X-Content-Type-Options, Referrer-Policy set in server.js
3. **i18n HTML Safety:** Allowlist pattern prevents injection of untrusted content; textContent used by default
4. **No Backend Processing:** Static site — no database or API endpoints vulnerable to injection

## Language Support

**Translations Scope:** 100+ keys covering:
- Navigation, CTA text, section titles
- Service descriptions, team roles
- Contact info, hours, testimonials
- Process steps, FAQ, legal text

**Implementation:** JSON dictionary with nested structure; DOM updates via textContent or innerHTML (allowlisted)

## Performance & Accessibility

- **Accessibility:** Semantic HTML5, ARIA labels, keyboard navigation, skip link
- **Lazy Loading:** Images with native loading="lazy" (img tags)
- **Animations:** GPU-accelerated (transform/opacity via GSAP)
- **Font Loading:** Google Fonts with preconnect hints
- **Responsive Design:** Mobile-first CSS with tablet/desktop breakpoints

## Dependencies

```json
{
  "express": "^4.18.2"
}
```

**Dev/Optional:**
- repomix (documentation generation)
- Node.js LTS (18+)

## Local Development

```bash
npm install                  # Install Express dependency
npm start                    # Run server on http://localhost:3000
```

Server auto-reloads static assets on file change (browser refresh required).

## Deployment

Push to `main` branch → GitHub Actions auto-builds and deploys to GitHub Pages via gh-pages branch. Site accessible at https://username.github.io/dr-kielhorn/ (or custom domain if configured).

## Content Management

All visible text lives in `public/js/i18n.js`. To update:
1. Edit TRANSLATIONS object in i18n.js
2. Clear browser localStorage to reset language preference
3. Refresh page

Images managed in public/assets/img/; update HTML img src paths if files change.

## Known Limitations & Future Improvements

- No CMS integration; content updates require code changes
- Contact form lacks backend (no email integration)
- Testimonials are hardcoded; no review system
- Analytics not implemented
- No PWA support (no service worker)
- No dark mode toggle

## Maintenance

- **Dependency Updates:** `npm outdated` to check; run `npm update` cautiously (test locally first)
- **Security Audits:** `npm audit` for vulnerabilities
- **GSAP Updates:** Monitor GSAP releases for bug fixes; update vendor files manually (CDN not recommended)
- **Translations:** Add new languages by extending TRANSLATIONS object in i18n.js
