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
    if (link.classList.contains('nav-has-dropdown')) return;
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── Services dropdown ──────────────────────────── */
function initServicesDropdown() {
  const wrap = document.getElementById('navServicesWrap');
  if (!wrap) return;
  const trigger = wrap.querySelector('.nav-has-dropdown');
  if (!trigger) return;

  let hideTimer = null;

  function openDropdown() {
    clearTimeout(hideTimer);
    wrap.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  }
  function closeDropdown(delay) {
    hideTimer = setTimeout(() => {
      wrap.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }, delay != null ? delay : 0);
  }

  /* Desktop: hover with 300ms grace period */
  wrap.addEventListener('mouseenter', () => {
    if (window.innerWidth > 900) openDropdown();
  });
  wrap.addEventListener('mouseleave', () => {
    if (window.innerWidth > 900) closeDropdown(600);
  });

  /* Mobile: tap trigger toggles submenu */
  trigger.addEventListener('click', e => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      wrap.classList.contains('open') ? closeDropdown(0) : openDropdown();
    }
  });

  /* Close on outside click */
  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) closeDropdown(0);
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
   1a. CUSTOM CURSOR — Luxury Edition
═══════════════════════════════════════════════════ */
function initCustomCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  /* Create ring with SVG spinner */
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.innerHTML = `
    <svg class="cursor-svg" viewBox="0 0 36 36" aria-hidden="true">
      <defs>
        <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E6FA8"/>
          <stop offset="100%" stop-color="#0D9488"/>
        </linearGradient>
      </defs>
      <circle class="ring-track" cx="18" cy="18" r="16.5"/>
      <circle class="ring-arc" cx="18" cy="18" r="16.5"/>
    </svg>
    <div class="cursor-fill"></div>
  `;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';

  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mx = -200, my = -200;
  let rx = -200, ry = -200;
  const lerp = (a, b, t) => a + (b - a) * t;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  }, { passive: true });

  (function animRing() {
    rx = lerp(rx, mx, 0.13);
    ry = lerp(ry, my, 0.13);
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  /* State management */
  const HOVER_TARGETS  = 'a, button, [role="button"], .nav-link, .btn, .svc-more, input[type=submit], select, label[for]';
  const IMG_TARGETS    = '.gallery-item, .hero-photo, .team-card, .svc-bg, .service-card-img, img';
  const TEXT_TARGETS   = 'p, h1, h2, h3, h4, h5, span, li, td';

  let state = 'default';
  function setState(s) {
    if (state === s) return;
    const prev = state;
    state = s;
    if (prev === 'hover') { ring.classList.remove('hovered'); dot.classList.remove('hovered'); }
    else if (prev === 'image') { ring.classList.remove('image-hovered'); }
    else if (prev === 'text') { ring.classList.remove('text-hovered'); dot.classList.remove('text-hovered'); }
    if (s === 'hover') {
      ring.classList.add('hovered'); dot.classList.add('hovered');
    } else if (s === 'image') {
      ring.classList.add('image-hovered');
    } else if (s === 'text') {
      ring.classList.add('text-hovered'); dot.classList.add('text-hovered');
    }
  }

  document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER_TARGETS)) setState('hover');
    else if (e.target.closest(IMG_TARGETS)) setState('image');
    else if (e.target.closest(TEXT_TARGETS)) setState('text');
    else setState('default');
  });
  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget || e.relatedTarget === document.documentElement) setState('default');
  });

  /* Click ripple */
  document.addEventListener('mousedown', () => {
    ring.classList.add('clicking'); dot.classList.add('clicking');
  });
  document.addEventListener('mouseup', () => {
    ring.classList.remove('clicking'); dot.classList.remove('clicking');
  });

  /* Hide when leaving window */
  document.addEventListener('mouseleave', () => {
    ring.style.opacity = '0'; dot.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    ring.style.opacity = '1'; dot.style.opacity = '1';
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
  const bubble  = document.getElementById('heroTeamBubble');
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
    if (bubble) bubble.style.transform = `translate(${dx * 30}px, ${dy * 26}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    if (blob1)  blob1.style.transform  = '';
    if (blob2)  blob2.style.transform  = '';
    if (visual) visual.style.transform = '';
    if (bubble) bubble.style.transform = '';
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

/* ── Water stream: circle 1 → circle 8 ──────────── */
function initWaterDrops() {
  const inner = document.querySelector('.svc-nav-inner');
  if (!inner) return;
  const circles = [...inner.querySelectorAll('.svc-nav-circle')];
  if (circles.length < 2) return;

  const NS = 'http://www.w3.org/2000/svg';
  const ir = inner.getBoundingClientRect();
  const CX = ir.width / 2;

  // Circle centre Y coords relative to .svc-nav-inner
  const cy = circles.map(c => {
    const r = c.getBoundingClientRect();
    return r.top - ir.top + r.height / 2;
  });
  const TOP = cy[0];
  const BOT = cy[cy.length - 1];
  const PATH = BOT - TOP;   // distance between first and last circle centres
  const TAIL = 64;           // visible stream length in px

  /* ── Build SVG ── */
  const svg = document.createElementNS(NS, 'svg');
  svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;overflow:visible';

  // Glow filter
  const defs = document.createElementNS(NS, 'defs');
  const filt = document.createElementNS(NS, 'filter');
  filt.id = 'wglow';
  filt.setAttribute('x','-300%'); filt.setAttribute('y','-5%');
  filt.setAttribute('width','700%'); filt.setAttribute('height','110%');
  const gb = document.createElementNS(NS, 'feGaussianBlur');
  gb.setAttribute('stdDeviation','2.2'); gb.setAttribute('result','b');
  const mg = document.createElementNS(NS, 'feMerge');
  ['b','SourceGraphic'].forEach(s => {
    const n = document.createElementNS(NS,'feMergeNode'); n.setAttribute('in',s); mg.appendChild(n);
  });
  filt.appendChild(gb); filt.appendChild(mg);
  defs.appendChild(filt);
  svg.appendChild(defs);

  // Faint channel track between circles
  const track = document.createElementNS(NS, 'line');
  track.setAttribute('x1',CX); track.setAttribute('y1',TOP);
  track.setAttribute('x2',CX); track.setAttribute('y2',BOT);
  track.setAttribute('stroke','rgba(80,200,245,0.07)');
  track.setAttribute('stroke-width','1.5');
  svg.appendChild(track);

  // The stream travels on a line that starts TAIL above TOP so it enters smoothly
  // Total line length = PATH + TAIL  →  dasharray TAIL covers exactly one segment
  function mkLine(color, w) {
    const l = document.createElementNS(NS, 'line');
    l.setAttribute('x1', CX); l.setAttribute('y1', TOP - TAIL);
    l.setAttribute('x2', CX); l.setAttribute('y2', BOT);
    l.setAttribute('stroke', color);
    l.setAttribute('stroke-width', w);
    l.setAttribute('stroke-linecap','round');
    l.setAttribute('stroke-dasharray', `${TAIL} 9999`);
    l.setAttribute('stroke-dashoffset','0');
    l.setAttribute('filter','url(#wglow)');
    svg.appendChild(l);
    return l;
  }

  // 3 layers: outer glow → mid → bright core
  const glow = mkLine('rgba(60,185,240,0.18)', 9);
  const mid  = mkLine('rgba(100,218,255,0.48)', 3.5);
  const core = mkLine('rgba(200,245,255,0.90)', 1.8);

  inner.appendChild(svg);

  const TOTAL = PATH + TAIL;   // total travel distance
  const DUR   = 6800;          // ms — very slow
  const t0    = performance.now();

  function animate(now) {
    const t      = ((now - t0) % DUR) / DUR;          // 0 → 1 looping
    const offset = -(t * TOTAL);                       // shifts dash downward
    [glow, mid, core].forEach(l => l.setAttribute('stroke-dashoffset', String(offset)));

    // Stream centre Y: used for circle glow detection
    const streamCY = (TOP - TAIL) + t * TOTAL + TAIL / 2;
    circles.forEach((c, i) => c.classList.toggle('water-pass', Math.abs(streamCY - cy[i]) < TAIL * 0.55));

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/* ── Init all ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initServicesDropdown();
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
  initWaterDrops();

  document.fonts.ready.then(initHeroGSAP);
});
