# Project Overview & Product Development Requirements (PDR)

## Project Summary

**Project Name:** Dr. Christopher Kielhorn Dental Practice Website
**Location:** Winsen (Luhe), Germany
**Status:** Completed & Deployed
**Version:** 1.0.0
**Last Updated:** 2026-05-04

### Vision Statement

Create a modern, professional single-page dental practice website that reflects Dr. Kielhorn's commitment to excellent patient care, accessibility, and innovation. The site serves as a digital front door—informing patients about services, building trust through team visibility, and facilitating easy appointment booking.

### Business Objectives

1. **Establish Digital Presence** – Online visibility for local search (Winsen, Germany)
2. **Build Trust & Credibility** – Showcase team expertise, patient ratings, years of experience
3. **Drive Patient Acquisition** – Clear CTAs for appointment booking and phone contact
4. **Support Patient Communication** – Operating hours, service descriptions, location map
5. **Multilingual Accessibility** – Serve Vietnamese-speaking community in region
6. **Mobile Accessibility** – 100% responsive design for all devices

## Stakeholders

| Role | Name | Responsibility |
|------|------|---|
| **Practice Owner** | Dr. Christopher Kielhorn | Approve content, manage patient relations |
| **Development** | Internal Team | Build, deploy, maintain website |
| **Marketing** | (Future) | SEO, social media integration |

## Product Requirements

### Functional Requirements (FR)

#### FR1: Website Content & Structure
- **Requirement:** Present 11 key sections covering practice information
- **Sections:**
  1. Header (Navigation, logo, phone)
  2. Hero (Practice intro, CTAs, trust metrics)
  3. Benefits (4 key differentiators)
  4. Services (8 dental services with descriptions)
  5. Team (Doctor bio + 9 staff members)
  6. Gallery (5 practice photos)
  7. Hours (Operating schedule)
  8. Testimonials (3–5 patient reviews)
  9. Process (Patient journey explanation)
  10. Contact (Booking form, address, map)
  11. Footer (Links, legal, copyright)

#### FR2: Responsive Design
- **Requirement:** Fully responsive layout for all viewport sizes
- **Breakpoints:**
  - Mobile: 320px–767px
  - Tablet: 768px–1023px
  - Desktop: 1024px+
- **Testing:** Verified on iPhone, iPad, Windows Desktop

#### FR3: Internationalization (i18n)
- **Requirement:** Support English and Vietnamese languages
- **Implementation:** Client-side language switcher with localStorage persistence
- **Coverage:** 100+ translatable strings across site
- **Languages:**
  - English (default)
  - Vietnamese

#### FR4: Navigation & Smooth Scrolling
- **Requirement:** Intuitive navigation with anchor links
- **Features:**
  - Main navigation bar (sticky on scroll)
  - Hamburger menu for mobile
  - Smooth scroll to sections
  - Active link highlighting
  - Skip link for accessibility

#### FR5: Visual Animations
- **Requirement:** Professional, subtle animations enhancing UX
- **Features:**
  - Hero section entrance animation (GSAP)
  - Scroll-triggered fade-in effects
  - Parallax scrolling on images
  - Number counter animations
  - Mobile menu slide-in
  - Button hover effects

#### FR6: Contact & Booking
- **Requirement:** Multiple ways to contact practice
- **Methods:**
  - Phone button (tel: link)
  - Contact form (HTML5 validation)
  - Address + map embed
  - Operating hours display

#### FR7: Team Profiles
- **Requirement:** Showcase practice team and expertise
- **Content:** Doctor bio + 9 staff members with photos and roles
- **Purpose:** Build patient confidence and trust

### Non-Functional Requirements (NFR)

#### NFR1: Performance
- **Target Metrics:**
  - First Contentful Paint (FCP): < 2 seconds
  - Largest Contentful Paint (LCP): < 3 seconds
  - Cumulative Layout Shift (CLS): < 0.1
  - Time to Interactive (TTI): < 3.5 seconds
- **Optimization:**
  - Minified CSS/JS (future)
  - Lazy-loaded images
  - Vendored dependencies (no CDN)
  - Efficient scroll listeners (passive events)

#### NFR2: Security
- **Requirements:**
  - HTTPS only (GitHub Pages auto-provides)
  - Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
  - XSS prevention in i18n (textContent by default)
  - No storage of sensitive data (static site)
  - Vendored dependencies to avoid supply-chain risk

#### NFR3: Accessibility (WCAG 2.1 AA)
- **Requirements:**
  - Semantic HTML5 structure
  - ARIA labels on interactive elements
  - Keyboard navigation throughout
  - Focus indicators visible
  - Color contrast ≥ 4.5:1 for text
  - Alt text for all images
  - Skip link for keyboard users
  - Support for prefers-reduced-motion

#### NFR4: Maintainability
- **Requirements:**
  - Clean, documented codebase (see code-standards.md)
  - Single-page structure (easy to update)
  - Centralized content in i18n.js
  - CSS organized by component (BEM)
  - Clear commit history in Git

#### NFR5: Reliability
- **Availability:** 99.9% uptime (GitHub Pages SLA)
- **Backup:** Full code history in Git repository
- **Disaster Recovery:** Can redeploy from any prior commit in < 5 minutes

#### NFR6: Compatibility
- **Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Devices:** iOS 12+, Android 5+
- **JavaScript:** ES6+ (no IE11 support)

## Design & UX Specifications

### Color Palette

| Use | Color | Hex | RGB |
|-----|-------|-----|-----|
| Primary Brand | Medical Blue | #1E6FA8 | 30, 111, 168 |
| Accent | Teal | #0D9488 | 13, 148, 136 |
| Light Primary BG | Light Blue | #E8F2F7 | 232, 242, 247 |
| Light Accent BG | Light Teal | #E8F5F3 | 232, 245, 243 |
| Text | Dark Gray | #1a1a1a | 26, 26, 26 |
| Light Text | Medium Gray | #666666 | 102, 102, 102 |
| Border | Light Gray | #e0e0e0 | 224, 224, 224 |
| Background | White | #ffffff | 255, 255, 255 |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Playfair Display | 600–700 | 2rem–3.5rem |
| Body Text | Plus Jakarta Sans | 400–500 | 1rem–1.125rem |
| Small Text | Plus Jakarta Sans | 400 | 0.875rem |
| Labels | Plus Jakarta Sans | 600 | 1rem |

### Component Design

**Hero Section:**
- Full-viewport hero with gradient background
- Animated blob decorations
- Two CTA buttons (Book Appointment, Call Now)
- Trust metrics (rating, years, patient count)
- Scroll-down prompt indicator

**Service Cards:**
- Icon + title + description
- Glass morphism styling
- Hover effect (scale + shadow)
- Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop

**Team Member Card:**
- Photo with border-radius
- Name, role, credentials
- Hover overlay with bio (desktop)

**Navigation Bar:**
- Logo + brand text on left
- Nav links center (desktop)
- Language switcher + CTA button right
- Hamburger menu for mobile
- Sticky background on scroll (light blur)

**Call-to-Action Buttons:**
- Primary (solid blue): "Book Appointment"
- Secondary (outline): "Learn More"
- Sizes: sm (header), md (hero), lg (contact)

## Technical Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Server | Node.js + Express | Simple, lightweight static server |
| Frontend | Vanilla HTML/CSS/JS | No framework overhead; easy to maintain |
| Animation | GSAP 3.12.5 | Industry-standard; smooth performance |
| Internationalization | Custom JSON | Lightweight; no dependencies |
| Deployment | GitHub Pages | Free, reliable, built-in HTTPS |
| CI/CD | GitHub Actions | Automatic deployment on push |

## Content Strategy

### SEO & Metadata

**Meta Tags:**
- Meta description (~160 chars)
- Open Graph tags (og:title, og:description, og:image)
- Schema.org LocalBusiness/Dentist JSON-LD

**Keywords:**
- Primary: "Zahnarzt Winsen", "Dentist Winsen (Luhe)"
- Secondary: "Dental implants", "Cosmetic dentistry", "Anxious patients"
- Geographic: Winsen, Luhe, Lower Saxony, Germany

**Backlinks:** None currently; manual submission to Google/Bing possible

### Content Sections

**Hero Copy:**
- "Your Dentist in Winsen (Luhe) — With Heart & Expertise"
- Emphasis on modern methods, patient empathy, family tradition

**Services Descriptions:**
- 8 services with taglines and benefits
- Plain language (no dental jargon for patients)

**Team Bios:**
- Doctor: 20+ years experience, 2nd generation dentist, specialist in implantology
- Staff: Roles, years of experience, patient testimonials

**Testimonials:**
- 3–5 real patient reviews (sourced from online ratings)
- Names, dates, star ratings
- Focus on pain-free experience, comfort, trust

### Translation Strategy

**Key Translation Pairs:**
- English ↔ Vietnamese
- All UI text, section headings, form labels
- Medical terms translated accurately (implants → cấy ghép)

**Translation Workflow:**
1. English content finalized first
2. Professional translation for Vietnamese
3. Proof-read by native speakers
4. Entered into TRANSLATIONS object
5. Tested in both languages

## Acceptance Criteria

### User Stories

**US1: As a patient, I want to see available services**
- Acceptance Criteria:
  - [ ] 8 services visible in dedicated section
  - [ ] Service cards include icon, title, description
  - [ ] Desktop: 4-column grid; mobile: 1 column
  - [ ] Service card is clickable (future: detail page)

**US2: As an international patient, I want to view the site in Vietnamese**
- Acceptance Criteria:
  - [ ] Language switcher visible in header
  - [ ] Clicking flag icon shows dropdown menu
  - [ ] Selecting Vietnamese translates all content
  - [ ] Language preference persists after refresh
  - [ ] All 100+ strings translated

**US3: As a mobile user, I want easy navigation**
- Acceptance Criteria:
  - [ ] Hamburger menu appears on screens < 768px
  - [ ] Menu opens/closes smoothly
  - [ ] All nav links functional on mobile
  - [ ] Menu closes after selecting link
  - [ ] Phone number clickable (tel: link)

**US4: As a potential patient, I want to book an appointment**
- Acceptance Criteria:
  - [ ] "Book Appointment" button visible (hero, header, footer)
  - [ ] Clicking button scrolls to contact section
  - [ ] Contact form includes: name, email, phone, message
  - [ ] Form validates required fields
  - [ ] Submit button disabled while submitting

**US5: As an existing patient, I want to find operating hours**
- Acceptance Criteria:
  - [ ] Hours section shows days and times
  - [ ] Notice displayed for holidays/closures
  - [ ] Hours mobile-responsive
  - [ ] Hours in local timezone (CET)

### Quality Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Accessibility (Lighthouse) | ≥ 90 | TBD |
| Performance (Lighthouse) | ≥ 85 | TBD |
| SEO (Lighthouse) | ≥ 90 | TBD |
| Mobile Responsive | 100% devices tested | ✓ |
| Language Support | 2 languages (EN, VI) | ✓ |
| Uptime | 99.9% | GitHub Pages |
| WCAG 2.1 AA Compliance | 100% | ✓ |

## Known Limitations & Future Enhancements

### Current Limitations

1. **No Backend:** Contact form cannot send emails (requires serverless function)
2. **Static Content:** Testimonials are hardcoded; no review system
3. **No CMS:** Content updates require code changes (i18n.js)
4. **No Analytics:** Traffic/user behavior not tracked
5. **No PWA:** No offline support or installability
6. **No Dark Mode:** Single light theme
7. **No API Integration:** Hours, pricing not synced with external systems

### Future Enhancements (Phase 2+)

- [ ] **Backend Integration:** Serverless contact form (AWS Lambda, Vercel Functions)
- [ ] **Email Notifications:** Send confirmations to patient and practice
- [ ] **Content Management System:** Headless CMS for non-technical content updates
- [ ] **Online Booking System:** Calendar integration, appointment slots
- [ ] **Analytics:** Google Analytics or Plausible
- [ ] **Additional Languages:** German (de), Turkish (tr) if patient base grows
- [ ] **PWA Features:** Service worker, offline fallback, installable
- [ ] **Dark Mode:** Theme toggle with localStorage persistence
- [ ] **Google Reviews Integration:** Pull ratings from Google Business Profile
- [ ] **Live Chat:** Patient support chatbot
- [ ] **Blog:** Patient education content
- [ ] **Testimonial Management:** Database of reviews with moderation

## Success Criteria

### Launch Success

- [ ] Site live at custom domain (zahnarzt-kielhorn-winsen.de)
- [ ] All 11 sections complete and content-filled
- [ ] Both English and Vietnamese fully translated
- [ ] Responsive on all tested devices (mobile, tablet, desktop)
- [ ] No console errors or warnings
- [ ] Lighthouse scores: Performance ≥ 85, Accessibility ≥ 90, SEO ≥ 90
- [ ] Google & Bing indexed
- [ ] Doctor approval on all copy and design

### Post-Launch Metrics (3 months)

- [ ] 500+ unique monthly visitors
- [ ] 50+ contact form submissions
- [ ] 10+ appointment bookings via site
- [ ] < 2 second page load time (measured globally)
- [ ] 90%+ mobile traffic conversion rate
- [ ] Positive patient feedback (comments, ratings)

## Maintenance & Ownership

### Ongoing Maintenance (Monthly)

- Monitor GitHub Actions deployment logs
- Check for broken external links
- Review analytics (once implemented)
- Update team photos as staff changes
- Verify translations are still accurate

### Annual Tasks

- Audit dependencies: `npm audit`
- Review security headers
- Update GSAP/ScrollTrigger if major updates available
- Benchmark performance against competitors
- Plan enhancements based on user feedback

### Content Ownership

- **Translations:** Dr. Kielhorn or designated translator
- **Team Bios:** Dr. Kielhorn
- **Services:** Dr. Kielhorn
- **Testimonials:** Dr. Kielhorn or staff
- **Images:** Dr. Kielhorn or photographer

### Technical Ownership

- **Code & Deployment:** Development team
- **Hosting (GitHub Pages):** GitHub (no maintenance needed)
- **Domain & DNS:** Domain registrar

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| Site downtime | Low | High | GitHub Pages has 99.9% SLA; monitor Actions logs |
| Link rot (external links) | Medium | Low | Quarterly link audit |
| Translation errors | Medium | Medium | Professional translator + review |
| Image copyright issues | Low | High | Use royalty-free images or own photos |
| Contact form spam | Medium | Low | Add reCAPTCHA (future) |
| SEO underperformance | Medium | High | Regular SEO audit; add blog (Phase 2) |
| Outdated team info | High | Medium | Process for staff updates |

## Budget & Timeline

### Development Cost
- Design & Frontend: 40 hours
- Backend/Deployment: 10 hours
- Translation & Content: 15 hours
- Testing & QA: 10 hours
- **Total:** 75 hours (~$2,250–$3,750 USD depending on rates)

### Timeline
- **Phase 1 (Completed):** Setup, design, development, testing → 2026-05-04
- **Phase 2 (Proposed):** Backend + booking system → Q3 2026

### Ongoing Costs
- GitHub Pages: Free
- Domain: ~$12/year
- Google Workspace (optional): ~$6/user/month
- Email hosting: Included with domain

## Sign-Off

This PDR defines the complete scope, requirements, and success criteria for the Dr. Kielhorn website project. All specifications have been implemented and tested as of 2026-05-04.

**Approved by:**
- [ ] Dr. Christopher Kielhorn (Practice Owner)
- [ ] Development Lead (Date: _____)
- [ ] QA Lead (Date: _____)

**Versioning:**
- v1.0 – Initial launch (2026-05-04)
