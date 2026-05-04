# Phase 03 — HTML Structure (index.html)

## Overview
- **Priority:** High
- **Status:** Pending
- **Desc:** Single-page `public/index.html` with 11 sections, i18n `data-i18n` attributes, GSAP + Google Fonts loaded from CDN.

## Section Breakdown

### 1. `<head>`
- Meta: charset, viewport, SEO (title, description, OG tags)
- Schema.org JSON-LD (Dentist type)
- Google Fonts: Playfair Display + Plus Jakarta Sans
- GSAP CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
- GSAP ScrollTrigger CDN
- Link to `css/styles.css`

### 2. Language Switcher Button (fixed/header)
```html
<div class="lang-switcher" id="langSwitcher">
  <button class="lang-btn" id="langBtn">
    <span class="lang-flag" id="langFlag">🇺🇸</span>
    <span class="lang-label" id="langLabel">EN</span>
    <svg class="lang-chevron">...</svg>
  </button>
  <div class="lang-dropdown" id="langDropdown">
    <!-- scrollable list of 2 options -->
    <button class="lang-option active" data-lang="en">
      <span>🇺🇸</span> English
    </button>
    <button class="lang-option" data-lang="vi">
      <span>🇻🇳</span> Tiếng Việt
    </button>
  </div>
</div>
```

### 3. `<header>` — Sticky, blur backdrop
```html
<header class="site-header" id="siteHeader">
  <div class="container header-inner">
    <a href="#home" class="logo">
      <img src="assets/img/logo.svg" alt="Dr. Kielhorn" class="logo-img">
      <div class="logo-text">
        <strong>Dr. Kielhorn</strong>
        <small data-i18n="header.subtitle">Zahnarztpraxis · Winsen (Luhe)</small>
      </div>
    </a>
    <nav class="main-nav" id="mainNav">
      <a href="#services" class="nav-link" data-i18n="nav.services">Services</a>
      <a href="#team" class="nav-link" data-i18n="nav.team">Team</a>
      <a href="#practice" class="nav-link" data-i18n="nav.practice">Practice</a>
      <a href="#hours" class="nav-link" data-i18n="nav.hours">Hours</a>
      <a href="#contact" class="nav-link" data-i18n="nav.contact">Contact</a>
      <a href="tel:+494171712120" class="nav-phone">
        <svg>...</svg> 04171 / 71212
      </a>
      <a href="#contact" class="btn btn-primary btn-sm" data-i18n="nav.cta">Book Appointment</a>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

### 4. `<section id="home">` — Hero
- Left: animated hero-tag badge, H1 with `<em>` italic, description, 2 CTA buttons, trust stats (stars, 2 generations, 2500+)
- Right: photo frame (dr-kielhorn.jpeg) with 2 floating cards (appointment + pain-free)
- Background: 2 animated blobs (CSS keyframes)
- Scroll indicator arrow

### 5. Benefits Strip (`.intro-strip`)
- 4 columns: Excellent Quality, Compassionate Care, Modern Technology, Short Wait Times
- Each: icon wrap + title + description
- `data-i18n` on title and description

### 6. `<section id="services">` — Services Grid
- Section header with eyebrow + H2 + description
- 3-column CSS grid with 8 service cards
- Each card: background image with gradient overlay, icon, title, description, "Learn more →" link
- Services:
  1. Prevention — `svc-prevention.jpg`
  2. Implantology — `svc-implant.jpg`
  3. Dentures — `svc-dentures.jpg`
  4. Oral Surgery — `svc-surgery.jpg`
  5. Children's Dentistry — `svc-children.jpg`
  6. Anxious Patients — `svc-anxiety.jpg`
  7. Aesthetic Dentistry — (uses `svc-preservation.jpg` as fallback)
  8. Tooth Preservation — `svc-preservation.jpg`

### 7. `<section id="team">` — Team
- Featured card: Dr. Kielhorn (large photo `dr-kielhorn.jpeg`, role badge, credentials list)
- Grid of 8-10 staff members with photo, name, role
- `data-i18n` on all role/title text

### 8. `<section id="practice">` — Gallery + Features
- 2-column photo gallery grid (practice-1 through practice-5)
- 4 feature cards: Modern Equipment, Comfortable Atmosphere, Digital X-Ray, Pain-Free Treatment
- Quote block (gradient blue background)

### 9. `<section id="hours">` — Opening Hours
- Left: opening hours table (Mon-Fri with specific times)
- Right: Emergency contact card (gradient blue, phone number)
```
Mon: 08:00–13:00 / 14:00–18:00
Tue: 08:00–13:00 / 14:00–17:00
Wed: 08:00–13:00
Thu: 08:00–13:00 / 14:00–18:00
Fri: 08:00–13:00
```

### 10. `<section id="reviews">` — Testimonials
- Score card: 4.9★ + rating bars (5★ 80%, 4★ 15%, 3★ 5%)
- 3 review cards (fictional but realistic)
- All text `data-i18n`

### 11. Process Steps (`.process-section`)
- 4 steps in a row with connecting line:
  1. Book online / by phone
  2. First consultation
  3. Treatment planning
  4. Ongoing care

### 12. `<section id="contact">` — Contact
- Left column: info cards (address, phone, email, hours summary)
- Right column: contact form (name, email, phone, message, submit)
- Google Maps embed (iframe for Winsen Luhe)

### 13. `<footer>`
- Logo + tagline
- Nav columns: Services, Information, Legal
- Address + contact
- Copyright + legal links

## i18n Attribute Convention
All user-visible text elements get `data-i18n="key.path"`:
```html
<h1 data-i18n="hero.title">Your Dentist in Winsen</h1>
<p data-i18n="hero.desc">Modern dentistry...</p>
```

## Key i18n Keys (full list)
```
header.subtitle, nav.services, nav.team, nav.practice, nav.hours, nav.contact, nav.cta
hero.tag, hero.title, hero.desc, hero.cta1, hero.cta2
hero.trust.rating, hero.trust.tradition, hero.trust.patients
benefits.title1..4, benefits.desc1..4
services.eyebrow, services.title, services.desc
services.svc1.title..8, services.svc1.desc..8, services.svc.more
team.eyebrow, team.title, team.doctor.role, team.doctor.desc, team.doctor.cred1..4
practice.eyebrow, practice.title, practice.feat1..4
hours.eyebrow, hours.title, hours.days.mon..fri, hours.emergency.title, hours.emergency.desc
reviews.eyebrow, reviews.title, reviews.score.label, reviews.r1.name, reviews.r1.text..
process.eyebrow, process.title, process.step1..4.title, process.step1..4.desc
contact.eyebrow, contact.title, contact.address, contact.phone, contact.email
contact.form.name, contact.form.email, contact.form.phone, contact.form.message, contact.form.submit
footer.tagline, footer.links.*, footer.legal.*, footer.copyright
```

## Success Criteria
- Valid HTML5, passes W3C validator conceptually
- All text elements have `data-i18n` attributes
- All image `src` paths reference `assets/img/` correctly
- Structure works without CSS (semantic hierarchy)
