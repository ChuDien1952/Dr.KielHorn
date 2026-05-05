# Code Standards & Development Guidelines

## Overview

This document defines coding standards, patterns, and best practices for the Dr. Kielhorn website project.

## HTML Standards

### Structure & Semantics

**Always use semantic HTML5 elements:**
```html
<!-- ✓ Good -->
<header role="banner">
  <nav aria-label="Main navigation">
    <a href="#home">Home</a>
  </nav>
</header>
<main>
  <section id="services">...</section>
</main>
<footer role="contentinfo">...</footer>

<!-- ✗ Avoid -->
<div id="header">
  <div id="nav">...</div>
</div>
<div id="main">...</div>
```

### Attributes & Best Practices

**Data Attributes:** Use for JavaScript hooks and styling
```html
<!-- ✓ For internationalization -->
<h1 data-i18n="hero.title">Your Dentist in Winsen</h1>
<p data-i18n-html="contact.address">Address HTML goes here</p>

<!-- ✓ For animations -->
<div data-reveal class="service-card">Service</div>
<span data-counter="150">150</span>

<!-- ✓ For mobile state -->
<nav id="mainNav" data-mobile="false">
```

**ARIA & Accessibility:**
```html
<!-- Navigation -->
<nav aria-label="Main navigation"></nav>

<!-- Buttons with purpose -->
<button aria-label="Toggle menu" aria-expanded="false" aria-controls="mainNav">
  Menu
</button>

<!-- Expandable sections -->
<div role="menu" aria-hidden="true"></div>

<!-- Skip link -->
<a href="#main" class="skip-link">Skip to content</a>
```

**Meta & SEO:**
```html
<!-- Required -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Dr. Christopher Kielhorn | Dentist Winsen (Luhe)</title>
<meta name="description" content="...max 160 chars..." />

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:image" content="..." />

<!-- Schema.org (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "...",
  "address": { ... }
}
</script>
```

**Image Optimization:**
```html
<!-- ✓ Lazy loading + alt text -->
<img
  src="images/team.jpg"
  alt="Dr. Christopher Kielhorn, principal dentist"
  loading="lazy"
  width="400"
  height="400"
/>

<!-- ✓ Responsive images -->
<img
  srcset="image-sm.jpg 480w, image-md.jpg 800w, image-lg.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  src="image-md.jpg"
  alt="Practice interior"
/>

<!-- ✓ Error handling -->
<img
  src="image.jpg"
  alt="Team photo"
  onerror="this.style.display='none'"
/>
```

## CSS Standards

### Organization

**File structure:**
```css
/* 1. VARIABLES & RESETS */
:root {
  --primary: #1E6FA8;
  --accent: #0D9488;
  --text: #1a1a1a;
  --bg: #ffffff;
  --spacing-unit: 1rem;
}

/* 2. BASE ELEMENTS */
html, body { ... }
a { ... }
button { ... }

/* 3. COMPONENTS */
.header { ... }
.nav { ... }
.btn { ... }
.card { ... }

/* 4. LAYOUT & SECTIONS */
.hero { ... }
.section { ... }
.container { ... }

/* 5. UTILITIES */
.hidden { ... }
.text-center { ... }
.mt-2 { ... }

/* 6. ANIMATIONS & STATES */
@keyframes fadeIn { ... }
.revealed { ... }
.scrolled { ... }
.active { ... }

/* 7. RESPONSIVE MEDIA QUERIES */
@media (max-width: 768px) { ... }
```

### Naming Conventions

**Use BEM (Block Element Modifier):**
```css
/* ✓ Block */
.card { ... }

/* ✓ Element (child of block) */
.card__title { ... }
.card__description { ... }
.card__image { ... }

/* ✓ Modifier (state or variant) */
.card--featured { ... }
.card--disabled { ... }
.card__title--large { ... }

/* ✓ State classes */
.is-active { ... }
.is-open { ... }
.has-error { ... }
```

**Avoid generic names:**
```css
/* ✗ Too generic */
.box { ... }
.item { ... }
.section-1 { ... }
.red-text { ... }

/* ✓ Descriptive */
.service-card { ... }
.team-member { ... }
.testimonial-section { ... }
.error-message { ... }
```

### Color Usage

**Define in :root:**
```css
:root {
  /* Brand colors */
  --color-primary: #1E6FA8;        /* Medical blue */
  --color-accent: #0D9488;         /* Teal accent */
  --color-primary-light: #E8F2F7;  /* Light blue bg */
  --color-accent-light: #E8F5F3;   /* Light teal bg */

  /* Neutrals */
  --color-text: #1a1a1a;
  --color-text-light: #666666;
  --color-border: #e0e0e0;
  --color-bg: #ffffff;
  --color-bg-light: #f9f9f9;

  /* Status colors */
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
}
```

**Never hardcode colors:**
```css
/* ✗ Hardcoded */
.button { background-color: #1E6FA8; }

/* ✓ Using variable */
.button { background-color: var(--color-primary); }
```

### Spacing & Typography

**Use consistent scale:**
```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */

  --font-sm: 0.875rem;   /* 14px */
  --font-base: 1rem;     /* 16px */
  --font-lg: 1.125rem;   /* 18px */
  --font-xl: 1.5rem;     /* 24px */
  --font-2xl: 2rem;      /* 32px */
  --font-3xl: 2.5rem;    /* 40px */

  --font-serif: 'Playfair Display', serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-weight-regular: 400;
  --font-weight-semi: 600;
  --font-weight-bold: 700;
}
```

**Apply consistently:**
```css
.section__title {
  font-family: var(--font-serif);
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-bold);
  margin: var(--space-md) 0 var(--space-lg);
}
```

### Animations

**Define at module level:**
```css
/* Hero fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__text {
  animation: fadeInUp 0.8s ease-out;
}

/* Scroll reveal animation */
.revealed {
  animation: fadeInUp 0.6s ease-out;
}
```

**Use GPU-accelerated properties:**
```css
/* ✓ GPU-friendly (transform, opacity) */
.slide-in {
  transform: translateX(0);
  opacity: 1;
}

/* ✗ CPU-heavy (left, width, height) */
.slide-in {
  left: 0;
  width: 100%;
}
```

### Responsive Design

**Mobile-first approach:**
```css
/* ✓ Mobile first, then enhance */
.hero { 
  padding: 2rem 1rem;    /* Mobile: smaller padding */
  font-size: 1rem;
}

@media (min-width: 768px) {
  .hero {
    padding: 4rem 2rem;  /* Tablet+: larger padding */
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 6rem 4rem;  /* Desktop: even larger */
    font-size: 1.25rem;
  }
}

/* ✗ Avoid: Desktop first, then restrict */
.hero { 
  padding: 6rem 4rem;
}

@media (max-width: 768px) {
  .hero { padding: 2rem 1rem; }
}
```

**Breakpoints:**
```css
/* Small: mobile phones (320px+) */
@media (min-width: 320px) { ... }

/* Medium: tablets (768px+) */
@media (min-width: 768px) { ... }

/* Large: desktops (1024px+) */
@media (min-width: 1024px) { ... }

/* Extra large: wide screens (1280px+) */
@media (min-width: 1280px) { ... }
```

### Accessibility in CSS

**Always provide focus styles:**
```css
/* ✓ Visible focus indicator */
button:focus,
a:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* ✗ Never remove focus without replacing */
button:focus {
  outline: none;  /* BAD! Makes keyboard navigation impossible */
}
```

**Support reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## JavaScript Standards

### File Organization

**main.js structure:**
```javascript
/* ═══════════════════════════════════════════════
   Initialization Functions (in order of dependency)
═══════════════════════════════════════════════ */

// 1. Setup
function initHeader() { ... }
function initMobileNav() { ... }
function initSmoothScroll() { ... }

// 2. Interactions
function initActiveNav() { ... }
function initScrollReveal() { ... }
function initCounters() { ... }
function initLangSwitcher() { ... }

// 3. Animations
function initHeroAnimation() { ... }

// 4. Forms
function initContactForm() { ... }

/* ═════════════════════════════════════════════
   DOMContentLoaded: Initialize all on page load
════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initActiveNav();
  initScrollReveal();
  initCounters();
  initLangSwitcher();
  initHeroAnimation();
  initContactForm();
});
```

### Naming Conventions

**Use camelCase for variables and functions:**
```javascript
/* ✓ Good */
const siteHeader = document.getElementById('siteHeader');
const navLinks = document.querySelectorAll('.nav-link');
let isMenuOpen = false;

function initMobileNav() { ... }
function toggleLanguageDropdown() { ... }

/* ✗ Avoid */
const site_header = document.getElementById('siteHeader');
const NavLinks = document.querySelectorAll('.nav-link');
const is_menu_open = false;
```

**Use PascalCase for classes (future-proofing):**
```javascript
class LanguageSwitcher {
  constructor() { ... }
  toggle() { ... }
  selectLanguage(lang) { ... }
}
```

**Use UPPERCASE for constants:**
```javascript
const LANGUAGES = ['en', 'vi'];
const SCROLL_THRESHOLD = 20;
const ANIMATION_DURATION = 800;
```

### DOM Selection

**Cache DOM queries:**
```javascript
/* ✓ Query once, reuse multiple times */
const header = document.getElementById('siteHeader');

function initHeader() {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ✗ Inefficient: multiple queries */
function initHeader() {
  window.addEventListener('scroll', () => {
    document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 20);
  });
}
```

**Use `querySelector` for complex selectors:**
```javascript
/* ✓ Clear intent */
const serviceCards = document.querySelectorAll('.services .card[data-reveal]');

/* Also fine, but less flexible */
const serviceCards = document.querySelectorAll('.service-card');
```

### Event Listeners

**Use named functions for removable listeners:**
```javascript
/* ✓ Can be removed later if needed */
function handleScroll() {
  console.log('scrolled');
}
window.addEventListener('scroll', handleScroll);
window.removeEventListener('scroll', handleScroll);

/* For one-time listeners: use { once: true } */
button.addEventListener('click', () => {
  console.log('clicked once');
}, { once: true });
```

**Use passive listeners for scroll/resize:**
```javascript
/* ✓ Improves performance */
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onResize, { passive: true });

/* ✗ No passive flag (slower) */
window.addEventListener('scroll', onScroll);
```

### Error Handling

**Defensive checks:**
```javascript
/* ✓ Check element exists before using */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;  // Exit early if no counters

  counters.forEach(counter => {
    const target = parseInt(counter.dataset.counter);
    if (!isNaN(target)) {
      animateCounter(counter, target);
    }
  });
}

/* ✗ No checks (crashes if element missing) */
function initCounters() {
  document.querySelectorAll('[data-counter]').forEach(counter => {
    const target = parseInt(counter.dataset.counter);
    animateCounter(counter, target);  // Fails if target is NaN
  });
}
```

**Try-catch for risky operations:**
```javascript
function switchLanguage(lang) {
  try {
    if (!LANGUAGES.includes(lang)) {
      throw new Error(`Unsupported language: ${lang}`);
    }
    updateLanguage(lang);
    localStorage.setItem('language', lang);
  } catch (err) {
    console.error('Language switch failed:', err);
    // Fallback to English
    updateLanguage('en');
  }
}
```

### Internationalization (i18n) Standards

**Translation object structure:**
```javascript
const TRANSLATIONS = {
  en: {
    header: {
      subtitle: 'Zahnarztpraxis · Winsen (Luhe)',
      title: 'Dr. Kielhorn'
    },
    nav: {
      services: 'Services',
      team: 'Team',
      contact: 'Contact'
    },
    hero: {
      title: 'Your Dentist in<br>Winsen (Luhe)',
      description: 'Modern dentistry with personal touch'
    }
  },
  vi: {
    header: {
      subtitle: 'Nha khoa - Winsen (Luhe)',
      title: 'Tiến sĩ Kielhorn'
    }
    // ... Vietnamese translations
  }
};
```

**Update DOM safely:**
```javascript
/* ✓ Use textContent by default (safe from XSS) */
const element = document.querySelector('[data-i18n="nav.services"]');
const key = element.dataset.i18n;
element.textContent = TRANSLATIONS[currentLang][key.split('.')[0]][key.split('.')[1]];

/* ✓ HTML only for allowlisted elements */
const ALLOWLIST = ['hero.title', 'contact.address'];
if (ALLOWLIST.includes(key)) {
  element.innerHTML = TRANSLATIONS[currentLang][...];
} else {
  element.textContent = TRANSLATIONS[currentLang][...];
}
```

### Comments & Documentation

**Use semantic comments:**
```javascript
/* ──────────────────────────────────────────
   Sticky header behavior
─────────────────────────────────────────── */
function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  // Toggle sticky class when user scrolls past threshold
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();  // Run once on init
}

/* ──────────────────────────────────────────
   Mobile navigation menu
─────────────────────────────────────────── */
function initMobileNav() {
  // ... implementation
}
```

**Avoid redundant comments:**
```javascript
/* ✗ Obvious comment */
let count = 0;  // Set count to 0

/* ✓ Helpful comment */
let count = 0;  // Track animation frame count to prevent duplicate calls
```

## i18n.js Specific Standards

### Adding New Language

**1. Add language to TRANSLATIONS:**
```javascript
const TRANSLATIONS = {
  en: { ... },
  vi: { ... },
  de: {                      // New: German
    header: {
      subtitle: 'Zahnarztpraxis Kielhorn',
      title: 'Dr. Kielhorn'
    },
    // ... all keys matching other languages
  }
};
```

**2. Register in i18n.js:**
```javascript
const LANGUAGES = ['en', 'vi', 'de'];  // Add 'de'
```

**3. Add language option in HTML:**
```html
<button class="lang-option" data-lang="de" role="menuitem">
  <span aria-hidden="true">🇩🇪</span> Deutsch
</button>
```

### Translation Key Naming

**Use kebab-case for nested keys:**
```javascript
const TRANSLATIONS = {
  en: {
    header: {
      subtitle: '...',      // ✓ lowercase
      phone_label: '...'     // ✓ snake_case for readability
    },
    contact_form: {          // ✓ underscore for multi-word sections
      label_name: '...',
      label_email: '...'
    }
  }
};
```

**Organize by section, not by type:**
```javascript
/* ✓ By section (easier to maintain) */
const TRANSLATIONS = {
  en: {
    hero: { tag: '...', title: '...', desc: '...' },
    services: { eyebrow: '...', title: '...', items: [...] }
  }
};

/* ✗ By type (harder to find related strings) */
const TRANSLATIONS = {
  en: {
    titles: { heroTitle: '...', servicesTitle: '...' },
    descriptions: { heroDesc: '...', servicesDesc: '...' }
  }
};
```

## Code Review Checklist

Before committing, ensure:

- [ ] Code follows naming conventions (camelCase, kebab-case, UPPERCASE)
- [ ] All DOM queries are cached (not repeated in loops)
- [ ] Defensive checks exist (null/undefined guards, array length checks)
- [ ] Event listeners use { passive: true } where applicable
- [ ] CSS uses BEM naming and CSS variables
- [ ] Colors use :root variables (no hardcoding)
- [ ] Responsive design uses mobile-first approach
- [ ] ARIA labels present on interactive elements
- [ ] Focus styles are visible
- [ ] HTML is semantic (section, nav, main, footer)
- [ ] Images have alt text
- [ ] i18n keys are organized by section
- [ ] Comments explain "why," not "what"
- [ ] No console errors or warnings
- [ ] Tested on mobile and desktop
- [ ] All languages update correctly

## Performance Guidelines

- Use CSS transforms and opacity (GPU-accelerated)
- Avoid reflow-triggering operations in loops (offsetHeight, scrollTop)
- Lazy load images (loading="lazy")
- Debounce/throttle scroll and resize listeners (consider requestAnimationFrame)
- Minimize DOM queries; cache references
- Avoid nested IntersectionObservers; combine into single observer where possible
- Minify CSS/JS before deploy (build step TBD)

## Testing Standards

### Manual Testing Checklist

- [ ] All sections visible and aligned on mobile, tablet, desktop
- [ ] Language switcher toggles all translatable text correctly
- [ ] Hamburger menu opens/closes; closes on link click
- [ ] Smooth scroll works for all anchor links
- [ ] Scroll animations (fade-in, parallax) work smoothly
- [ ] Counters animate on scroll
- [ ] No console errors
- [ ] All images load (or gracefully fallback)
- [ ] Contact form validates on submit
- [ ] Mobile: touch events work (no hover issues)

## Linting & Formatting (Future)

When adding build tools, use:
- **ESLint:** For JavaScript code quality
- **Prettier:** For consistent formatting
- **Stylelint:** For CSS consistency
