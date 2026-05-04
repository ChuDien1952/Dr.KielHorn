/* ═══════════════════════════════════════════════════
   main.js — Interactions, animations, UI behaviors
   Dr. Kielhorn Dental Practice Website
═══════════════════════════════════════════════════ */

/* ── Sticky header ──────────────────────────────── */
function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile hamburger ───────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('mainNav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* close on nav link click */
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── Smooth scroll for anchor links ─────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = document.getElementById('siteHeader')?.offsetHeight || 74;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── Active nav link on scroll ──────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Scroll reveal (IntersectionObserver) ───────── */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Counter animation ──────────────────────────── */
function animateCounter(el, target, suffix, duration) {
  let startTime = null;
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const step = ts => {
    if (!startTime) startTime = ts;
    const elapsed  = ts - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value    = Math.floor(easeOut(progress) * target);
    el.textContent = value.toLocaleString() + (progress < 1 ? '' : suffix);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, suffix, 2000);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── GSAP hero entrance ─────────────────────────── */
function initHeroGSAP() {
  if (typeof gsap === 'undefined') return;

  gsap.from('.hero-tag', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.2 });
  gsap.from('.hero-text h1', { opacity: 0, y: 36, duration: 0.9, ease: 'power3.out', delay: 0.35 });
  gsap.from('.hero-desc',    { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', delay: 0.55 });
  gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.7 });
  gsap.from('.hero-trust',   { opacity: 0, y: 16, duration: 0.7, ease: 'power3.out', delay: 0.85 });
  gsap.from('.hero-visual',  { opacity: 0, x: 40, duration: 1.0, ease: 'power3.out', delay: 0.4 });

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.hero-blob--1', {
      y: -60,
      scrollTrigger: { trigger: '.hero', scrub: 1.5 }
    });
    gsap.to('.hero-blob--2', {
      y: -40,
      scrollTrigger: { trigger: '.hero', scrub: 2 }
    });
  }
}

/* ── Scroll-to-top button ───────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Contact form ───────────────────────────────── */
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    /* basic required-field check */
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#E11D48';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) return;

    if (success) {
      success.style.display = 'flex';
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }
    form.reset();
  });

  /* clear red border on input */
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => { el.style.borderColor = ''; });
  });
}

/* ── Gallery: lightbox-style cursor ─────────────── */
function initGallery() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.cursor = 'zoom-in';
  });
}

/* ── Init all ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initActiveNav();
  initScrollReveal();
  initCounters();
  initScrollTop();
  initContactForm();
  initGallery();

  document.fonts.ready.then(initHeroGSAP);
});
