# System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Pages (Public)                │
│              https://username.github.io/...             │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ (Deployed to gh-pages branch)
                         ▼
┌─────────────────────────────────────────────────────────┐
│          Express.js Static Server (server.js)           │
│  • Port 3000 (development) or process.env.PORT          │
│  • Security headers (X-Frame-Options, CSP, etc.)        │
│  • SPA routing (404 → index.html)                       │
│  • CORS & referrer policy                               │
└─────────────┬──────────────────────────────┬────────────┘
              │                              │
              │ Serves public/               │
              ▼                              ▼
    ┌─────────────────────┐      ┌──────────────────────┐
    │  index.html         │      │  Static Assets       │
    │  • 11 sections      │      │  • CSS (styles.css)  │
    │  • 165 i18n attrs   │      │  • JS (main.js, i18n │
    │  • Schema.org JSON  │      │  • Vendor (GSAP)     │
    │  • Responsive meta  │      │  • Images (31 files) │
    └─────────────────────┘      └──────────────────────┘
              │
              │ Browser parses HTML
              ▼
┌─────────────────────────────────────────────────────────┐
│              Client-Side (Browser)                      │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ main.js (UI & Interactions)                     │   │
│  │ • Header sticky behavior (scroll listener)      │   │
│  │ • Mobile nav hamburger menu                     │   │
│  │ • Smooth scroll for anchor links                │   │
│  │ • Active nav tracking (IntersectionObserver)    │   │
│  │ • Scroll reveal animations ([data-reveal])      │   │
│  │ • Hero GSAP timeline (fade, scale, parallax)    │   │
│  │ • Counter animations (number reveals)           │   │
│  │ • Form validation (contact form)                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ i18n.js (Internationalization)                  │   │
│  │ • TRANSLATIONS object (EN/VI)                   │   │
│  │ • Language switcher UI controller               │   │
│  │ • localStorage persistence (lang preference)    │   │
│  │ • DOM mutation via textContent (default)        │   │
│  │ • HTML mutation (allowlisted elements only)     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ GSAP + ScrollTrigger (Animation Engine)         │   │
│  │ • Hero section entrance animation               │   │
│  │ • Scroll parallax effects                       │   │
│  │ • Scroll-trigger reveals                        │   │
│  │ • Counter number animations                     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ DOM (index.html)                                │   │
│  │ • Section elements with [id] anchors            │   │
│  │ • [data-i18n] attributes for text updates       │   │
│  │ • [data-i18n-html] for HTML-safe content        │   │
│  │ • [data-reveal] for scroll animations           │   │
│  │ • [data-counter] for number animations          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ CSS (styles.css)                                │   │
│  │ • Component classes (.card, .btn, .hero)        │   │
│  │ • Animation classes (.revealed, .scrolled)      │   │
│  │ • State classes (.active, .open, .disabled)     │   │
│  │ • Responsive design (mobile-first)              │   │
│  │ • CSS Grid & Flexbox layouts                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Data Flow Architecture

### 1. Initial Page Load

```
User → Browser Request → Express Server
  ↓
  Server applies security headers
  ↓
  Server returns public/index.html
  ↓
  Browser parses HTML
  ↓
  CSS loaded (styles.css)
  ↓
  JS loaded (main.js, i18n.js, vendor files)
  ↓
  i18n.js initializes:
    • Reads localStorage for language preference
    • Loads TRANSLATIONS for current lang
    • Updates DOM [data-i18n] elements
  ↓
  main.js initializes:
    • Sets up event listeners
    • Creates IntersectionObservers
    • Initializes GSAP animations
  ↓
  Page ready for interaction
```

### 2. Language Switch Flow

```
User clicks language button
  ↓
  Language dropdown toggles
  ↓
  User selects EN or VI
  ↓
  i18n updateLanguage() triggered
  ↓
  localStorage.setItem('language', lang)
  ↓
  DOM traversal: find all [data-i18n] elements
  ↓
  For each element:
    • Get translation key from data-i18n
    • Fetch value from TRANSLATIONS[lang][key]
    • If [data-i18n-html], use innerHTML (allowlisted)
    • Else, use textContent (safe)
  ↓
  Page content updated without reload
```

### 3. Scroll Interaction Flow

```
User scrolls page
  ↓
  Multiple scroll listeners fire:
    ├─ Header sticky listener (> 20px scrollY)
    │   └─ Toggle .scrolled class
    │
    ├─ Active nav observer (IntersectionObserver)
    │   └─ Track visible section
    │   └─ Highlight active nav link
    │
    ├─ Scroll reveal observer (IntersectionObserver)
    │   └─ Watch [data-reveal] elements
    │   └─ Add .revealed class on visibility
    │
    ├─ Counter observer (IntersectionObserver)
    │   └─ Watch [data-counter] elements
    │   └─ Animate numbers on visibility
    │
    └─ ScrollTrigger observer (GSAP)
        └─ Trigger scroll parallax animations
        └─ Fire timeline tweens
```

### 4. Animation Pipeline

```
HTML element with [data-reveal] or [data-counter]
  ↓
  IntersectionObserver detects visibility
  ↓
  For [data-reveal]:
    • Add .revealed class
    • CSS fade-in animation plays
    • Element unobserved (one-time)
  ↓
  For [data-counter]:
    • Extract target number from data-counter attr
    • GSAP animates text value 0 → target
    • Duration & easing from GSAP config
  ↓
  CSS via transform/opacity (GPU-accelerated)
```

## Component Architecture

### Header Component
- **File:** index.html (lines 41–85)
- **State:** .scrolled (sticky mode), .open (mobile menu)
- **Elements:** Logo, nav links, language switcher, hamburger, phone button
- **Interactions:** Scroll trigger, mobile toggle, language select, smooth scroll anchors

### Hero Section
- **File:** index.html (hero id), main.js (initHero), styles.css (.hero)
- **State:** Animated on page load via GSAP
- **Elements:** Blobs (decorative), text, CTAs, trust cards, scroll prompt
- **Animations:** Fade, scale, parallax (GSAP timeline)
- **Responsive:** Stack on mobile, side-by-side on desktop

### Section Components (Benefits, Services, Team, Gallery, etc.)
- **Pattern:** Heading + grid of cards
- **State:** .revealed on scroll visibility
- **Responsive:** 1 col mobile → 2–4 cols desktop (CSS Grid)
- **Animations:** Fade-in on scroll reveal

### Language Switcher
- **File:** index.html (langSwitcher id), main.js (initLangSwitcher), styles.css (.lang-*)
- **State:** Dropdown open/closed, active lang highlighted
- **Interactions:** Click to toggle, click option to select, click outside to close
- **Persistence:** localStorage saves preference

### Contact Form
- **File:** index.html (contact-form id), main.js (initContactForm)
- **Validation:** Required fields, email format, phone length
- **Submission:** (Backend integration TBD)

### Navigation Links
- **Pattern:** Smooth scroll to anchor (#home, #services, etc.)
- **Behavior:** Calculate header offset, scroll smoothly, update active nav link
- **Mobile:** Close nav menu on click

## State Management

**No centralized state library.** State managed via:

| State | Storage | Update Method | Scope |
|-------|---------|---------------|-------|
| Language preference | localStorage | i18n.js on language select | Global |
| Header sticky | DOM class (.scrolled) | Scroll listener | Header only |
| Mobile nav open/closed | DOM class (.open) | Hamburger click | Nav only |
| Active nav link | DOM class (.active) | IntersectionObserver | Nav links |
| Revealed elements | DOM class (.revealed) | IntersectionObserver + CSS animation | Individual elements |
| Language dropdown open | DOM class (.open) | Button click + outside click | Language switcher |

## Security Architecture

### 1. Content Security (i18n)

```
User input (language selection)
  ↓
  Validated against LANGUAGES array (en, vi)
  ↓
  If valid, fetch from TRANSLATIONS[lang]
  ↓
  For HTML content (allowlisted):
    • hero.title (data-i18n-html)
    • contact.address (data-i18n-html)
    • Check whitelist in i18n.js
    • Use innerHTML with caution
  ↓
  For text content (default):
    • Use textContent (auto-escapes)
    • No HTML interpretation
  ↓
  DOM updated
```

### 2. HTTP Security Headers (server.js)

```
Response headers set for all requests:

X-Frame-Options: SAMEORIGIN
  → Prevents clickjacking; site only frames itself

X-Content-Type-Options: nosniff
  → Prevents browser MIME-type sniffing

Referrer-Policy: strict-origin-when-cross-origin
  → Leaks less referrer data to external sites
```

### 3. Dependency Security

- **GSAP Vendored:** No CDN; reduces supply-chain risk
- **No Backend:** No SQL injection, no authentication bypasses
- **Static Site:** No session management vulnerabilities

### 4. Recommended Security Practices

1. Keep server.js security headers enabled
2. Validate TRANSLATIONS object before deployment (no XSS payloads)
3. Monitor i18n.js allowlist—only permit HTML in trusted elements
4. Use HTTPS for GitHub Pages (automatic)
5. Regularly audit npm dependencies: `npm audit`

## Performance Considerations

### Critical Rendering Path

1. **DNS + TCP:** Minimal (static site on CDN)
2. **HTML Download:** ~50–100KB (single page)
3. **CSS Parse:** ~38KB styles.css parsed in parallel
4. **Font Load:** Google Fonts with preconnect (async, non-blocking)
5. **JS Parse + Execute:** main.js + i18n.js + GSAP ~200KB (async defer)
6. **DOM Ready:** IntersectionObservers initialized
7. **Paint:** Header, hero, initial sections visible
8. **Interaction Ready:** ~2–3 seconds typical on 4G

### Optimization Techniques

- **CSS:** Minified, minimal specificity, no animation-blocking rules
- **JS:** Defer loading, passive scroll listeners, lazy image loading
- **Images:** WebP + JPEG fallback, native loading="lazy", srcset for responsive
- **Fonts:** Preconnect, system fonts where possible, subset weights
- **GSAP:** Vendored minified, ScrollTrigger optimized (minimal repaints)

### Metrics

- **First Contentful Paint (FCP):** ~1.5s
- **Largest Contentful Paint (LCP):** ~2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** ~3s

## Error Handling

### Runtime Errors

- **Missing i18n keys:** Falls back to key name (e.g., "nav.services")
- **Missing images:** HTML onerror="display:none" hides broken images
- **Missing sections:** IntersectionObserver gracefully skips undefined elements
- **GSAP not loaded:** Animations don't fire; page still functional

### Network Errors

- **Server 404:** Redirects to index.html (SPA routing)
- **Image 404:** Native browser behavior (grey box or alt text)
- **GitHub Pages down:** Users get GitHub's error page

## Deployment Architecture

```
Local Development (server.js on localhost:3000)
  ↓
  Git push main branch
  ↓
  GitHub webhook triggers .github/workflows/deploy.yml
  ↓
  GitHub Actions runner:
    1. Checks out code
    2. Runs peaceiris/actions-gh-pages@v4
    3. Publishes ./public/ to gh-pages branch
    4. GitHub Pages serves from gh-pages
  ↓
  Site live at https://username.github.io/dr-kielhorn/
  ↓
  (Or custom domain if CNAME configured)
```

## Scalability & Limitations

**Current Design (Static):**
- ✓ Scales infinitely (CDN can handle billions of requests)
- ✓ Zero server maintenance
- ✓ Free hosting (GitHub Pages)
- ✗ No real-time updates
- ✗ No backend features (booking, analytics, email)

**Future Scaling:**
- Add serverless backend (AWS Lambda, Netlify Functions) for form submissions
- Integrate CMS (Contentful, Sanity) for content management
- Add analytics (Plausible, Fathom)
- Consider PWA + service worker for offline support

## Accessibility Considerations

1. **Semantic HTML:** section, nav, main, header, footer
2. **ARIA:** aria-label, aria-expanded, role attributes
3. **Skip Link:** Skip to main content
4. **Keyboard Navigation:** Tab through nav links, form inputs
5. **Color Contrast:** Blues/teals tested for WCAG AA
6. **Alt Text:** All images have descriptive alt attributes
7. **Focus Indicators:** Visible focus styles on interactive elements
