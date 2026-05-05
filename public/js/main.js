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
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Counter animation (easeOutExpo) ─────────────── */
function animateCounter(el, target, suffix, duration) {
  let startTime = null;
  const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

  const step = ts => {
    if (!startTime) startTime = ts;
    const elapsed  = ts - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value    = Math.floor(easeOutExpo(progress) * target);
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
    gsap.to('.hero-blob--1', { y: -60, scrollTrigger: { trigger: '.hero', scrub: 1.5 } });
    gsap.to('.hero-blob--2', { y: -40, scrollTrigger: { trigger: '.hero', scrub: 2 } });
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

/* ═══════════════════════════════════════════════════
   1a. CUSTOM CURSOR
═══════════════════════════════════════════════════ */
function initCustomCursor() {
  /* only on true pointer devices */
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;
  let animId = null;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  }, { passive: true });

  const lerp = (a, b, t) => a + (b - a) * t;

  function animateRing() {
    ringX = lerp(ringX, mouseX, 0.12);
    ringY = lerp(ringY, mouseY, 0.12);
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    animId = requestAnimationFrame(animateRing);
  }
  animateRing();

  /* hover states */
  const hoverTargets = 'a, button, [role="button"], .svc-more, .nav-link, .btn, .lang-option, .scroll-top';
  const imgTargets   = '.gallery-item, .hero-photo, .team-card, .svc-bg';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) ring.classList.add('hovered');
    else if (e.target.closest(imgTargets)) ring.classList.add('image-hovered');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) ring.classList.remove('hovered');
    else if (e.target.closest(imgTargets)) ring.classList.remove('image-hovered');
  });

  /* hide when leaving window */
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}

/* ═══════════════════════════════════════════════════
   1b. CARD TILT EFFECT
═══════════════════════════════════════════════════ */
function initCardTilt() {
  const cards = document.querySelectorAll('.service-card');
  if (!cards.length || !window.matchMedia('(hover: hover)').matches) return;

  cards.forEach(card => {
    /* inject glare element */
    if (!card.querySelector('.svc-glare')) {
      const glare = document.createElement('div');
      glare.className = 'svc-glare';
      card.appendChild(glare);
    }
    const glare = card.querySelector('.svc-glare');

    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const rotX   = -dy * 8;
      const rotY   =  dx * 8;
      card.style.transform     = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
      card.style.transition    = 'transform .05s linear, box-shadow .3s';
      /* glare follows mouse */
      const gx = ((e.clientX - rect.left) / rect.width)  * 100;
      const gy = ((e.clientY - rect.top)  / rect.height) * 100;
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,.22) 0%, transparent 60%)`;
        glare.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .5s cubic-bezier(.4,0,.2,1), box-shadow .4s';
      card.style.transform  = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      if (glare) glare.style.opacity = '0';
    });
  });
}

/* ═══════════════════════════════════════════════════
   1c. HERO MOUSE PARALLAX
═══════════════════════════════════════════════════ */
function initHeroParallax() {
  if (window.innerWidth <= 768) return;

  const hero    = document.querySelector('.hero');
  const blob1   = document.querySelector('.hero-blob--1');
  const blob2   = document.querySelector('.hero-blob--2');
  const visual  = document.querySelector('.hero-visual');
  if (!hero) return;

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (e.clientX - cx) / rect.width;
    const dy   = (e.clientY - cy) / rect.height;

    if (blob1)  blob1.style.transform  = `translate(${dx * 40}px, ${dy * 40}px) scale(1)`;
    if (blob2)  blob2.style.transform  = `translate(${dx * 24}px, ${dy * 24}px) scale(1)`;
    if (visual) visual.style.transform = `translate(${dx * 18}px, ${dy * 18}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    if (blob1)  blob1.style.transform  = '';
    if (blob2)  blob2.style.transform  = '';
    if (visual) visual.style.transform = '';
  });
}

/* ═══════════════════════════════════════════════════
   1d. MAGNETIC BUTTONS
═══════════════════════════════════════════════════ */
function initMagneticButtons() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const btns = document.querySelectorAll('.hero-actions .btn-primary, .hero-actions .btn-outline');
  btns.forEach(btn => {
    const RANGE = 60;
    const MAX   = 12;

    document.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = e.clientX - cx;
      const dy   = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < RANGE) {
        const strength = (RANGE - dist) / RANGE;
        const tx = (dx / dist) * MAX * strength;
        const ty = (dy / dist) * MAX * strength;
        btn.style.transform  = `translate(${tx}px, ${ty}px)`;
        btn.style.transition = 'transform .1s linear';
      } else {
        btn.style.transform  = '';
        btn.style.transition = 'transform .4s cubic-bezier(.4,0,.2,1), background .25s, box-shadow .25s';
      }
    });
  });
}

/* ═══════════════════════════════════════════════════
   1e. HERO PARTICLE SYSTEM
═══════════════════════════════════════════════════ */
function initHeroParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'hero-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext('2d');
  const COUNT = 30;

  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const particles = Array.from({ length: COUNT }, () => ({
    x:       Math.random() * canvas.width,
    y:       Math.random() * canvas.height,
    r:       Math.random() * 2 + 1,
    alpha:   Math.random() * 0.3 + 0.1,
    speed:   Math.random() * 0.4 + 0.15,
    drift:   (Math.random() - 0.5) * 0.3,
  }));

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(30,111,168,${p.alpha})`;
      ctx.fill();
      p.y  -= p.speed;
      p.x  += p.drift;
      p.alpha = p.alpha > 0.02 ? p.alpha - 0.0008 : p.alpha;
      if (p.y < -10) {
        p.y     = canvas.height + 10;
        p.x     = Math.random() * canvas.width;
        p.alpha = Math.random() * 0.3 + 0.1;
      }
    });
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

/* ═══════════════════════════════════════════════════
   1f. TESTIMONIAL AUTO-CAROUSEL
═══════════════════════════════════════════════════ */
function initTestimonialCarousel() {
  const grid = document.querySelector('.reviews-grid');
  if (!grid) return;

  const cards = grid.querySelectorAll('.review-card');
  if (cards.length < 2) return;

  /* wrap in carousel-track */
  grid.classList.add('carousel-track');

  /* create wrapper */
  const wrap = document.createElement('div');
  wrap.className = 'reviews-carousel-wrap';
  grid.parentNode.insertBefore(wrap, grid);
  wrap.appendChild(grid);

  /* dots */
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'carousel-dots';
  dotsWrap.setAttribute('role', 'tablist');
  dotsWrap.setAttribute('aria-label', 'Bewertungen');
  wrap.appendChild(dotsWrap);

  const total = cards.length;
  let current = 0;
  let timer   = null;

  const dots = Array.from({ length: total }, (_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Bewertung ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function goTo(idx) {
    current = (idx + total) % total;
    /* on mobile/tablet: slide; on desktop show 3 at a time => just highlight */
    const cardW = cards[0].offsetWidth + 20;
    grid.style.transform = `translateX(-${current * cardW}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }

  function start() { timer = setInterval(next, 4000); }
  function stop()  { clearInterval(timer); }

  start();
  wrap.addEventListener('mouseenter', stop);
  wrap.addEventListener('mouseleave', start);

  /* touch swipe */
  let touchStartX = 0;
  wrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  wrap.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goTo(current + 1) : goTo(current - 1);
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   1g. EYEBROW LETTER STAGGER
═══════════════════════════════════════════════════ */
function initEyebrowLetters() {
  const eyebrow = document.querySelector('#services .section-eyebrow');
  if (!eyebrow) return;

  const text = eyebrow.textContent;
  eyebrow.innerHTML = text.split('').map((ch, i) =>
    `<span class="letter" style="transition-delay:${i * 30}ms">${ch === ' ' ? '&nbsp;' : ch}</span>`
  ).join('');

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      eyebrow.classList.add('letters-revealed');
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(eyebrow);
}

/* ═══════════════════════════════════════════════════
   1h. SCROLL PROGRESS BAR
═══════════════════════════════════════════════════ */
function initScrollProgress() {
  /* inject element if not already in HTML */
  let bar = document.getElementById('scrollProgress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'scrollProgress';
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.insertAdjacentElement('afterbegin', bar);
  }

  function update() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total <= 0) return;
    bar.style.transform = `scaleX(${window.scrollY / total})`;
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
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
  initScrollProgress();
  initCustomCursor();
  initCardTilt();
  initHeroParallax();
  initMagneticButtons();
  initHeroParticles();
  initTestimonialCarousel();
  initEyebrowLetters();

  document.fonts.ready.then(initHeroGSAP);
});
