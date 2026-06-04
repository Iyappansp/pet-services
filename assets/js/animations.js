/* ============================================================
   PawCare Pro — Enhanced Animations JS
   Scroll Reveals · Custom Cursor · Counters · Tilt · Magnetic
   Page Transitions · Parallax · Ripple · FAQ
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. SCROLL REVEAL — IntersectionObserver
     ============================================================ */
  function initScrollReveal() {
    const els = document.querySelectorAll(
      '.animate-fade-up,.animate-fade-down,.animate-slide-left,.animate-slide-right,.animate-scale-in'
    );
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animated');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ============================================================
     2. STAGGER GRID CHILDREN
     ============================================================ */
  function initStagger() {
    document.querySelectorAll(
      '.service-grid,.sitter-grid,.feature-grid,.blog-grid,.pet-grid,.row.g-4,.row.g-3'
    ).forEach(grid => {
      Array.from(grid.children).forEach((child, i) => {
        if (!child.classList.contains('animate-fade-up') &&
            !child.classList.contains('animate-scale-in')) {
          child.classList.add('animate-fade-up');
        }
        if (!child.style.transitionDelay) {
          child.style.transitionDelay = (i * 0.07) + 's';
        }
      });
    });
  }

  /* ============================================================
     3. COUNTER ANIMATION
     ============================================================ */
  function initCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCount(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(el => io.observe(el));
  }

  function animateCount(el) {
    const target   = parseFloat(el.getAttribute('data-count'));
    const suffix   = el.getAttribute('data-suffix') || '';
    const prefix   = el.getAttribute('data-prefix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || 0);
    const dur      = 1800;
    const start    = performance.now();
    const raf = t => {
      const p = Math.min((t - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (e * target).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  /* ============================================================
     4. CUSTOM CURSOR (desktop only)
     ============================================================ */
  function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.innerWidth < 1024) return;

    const dot  = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    (function tick() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(tick);
    })();

    const hoverSel = 'a,button,.btn,.service-card,.sitter-card,.feature-card,.pricing-card,.blog-card,.pet-card,.nav-icon-btn,.faq-question,.story-card,.benefit-card,.area-card,.suggestion-pill';

    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverSel)) {
        ring.classList.add('hover');
        dot.style.transform = 'translate(-50%,-50%) scale(2)';
        dot.style.background = 'var(--secondary)';
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverSel)) {
        ring.classList.remove('hover');
        dot.style.transform = 'translate(-50%,-50%) scale(1)';
        dot.style.background = 'var(--primary)';
      }
    });
    document.addEventListener('mousedown', () => {
      ring.style.transform = 'translate(-50%,-50%) scale(0.8)';
    });
    document.addEventListener('mouseup', () => {
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  }

  /* ============================================================
     5. MAGNETIC BUTTONS
     ============================================================ */
  function initMagnetic() {
    if (window.innerWidth < 1024) return;
    document.querySelectorAll('.btn-primary,.btn-secondary').forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const r = this.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width  / 2) * 0.18;
        const y = (e.clientY - r.top  - r.height / 2) * 0.18;
        this.style.transform = `translate(${x}px,${y}px) translateY(-3px)`;
      });
      btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  /* ============================================================
     6. CARD TILT EFFECT
     ============================================================ */
  function initTilt() {
    if (window.innerWidth < 1024) return;
    document.querySelectorAll('.service-card,.sitter-card,.pricing-card,.feature-card').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const r  = this.getBoundingClientRect();
        const xp = (e.clientX - r.left) / r.width  - 0.5;
        const yp = (e.clientY - r.top)  / r.height - 0.5;
        this.style.transform = `translateY(-8px) rotateX(${-yp * 8}deg) rotateY(${xp * 8}deg)`;
        this.style.transition = 'transform 0.1s ease';
      });
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.transition = 'transform 0.4s ease';
      });
    });
  }

  /* ============================================================
     7. RIPPLE EFFECT ON BUTTONS
     ============================================================ */
  function initRipple() {
    document.addEventListener('click', function(e) {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      const r    = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 2;
      const rip  = document.createElement('span');
      rip.style.cssText = `
        position:absolute;border-radius:50%;pointer-events:none;
        width:${size}px;height:${size}px;
        left:${e.clientX - r.left - size/2}px;
        top:${e.clientY  - r.top  - size/2}px;
        background:rgba(255,255,255,.25);
        transform:scale(0);animation:ripple-anim .5s ease-out forwards;
        z-index:0;
      `;
      btn.style.overflow = 'hidden';
      btn.style.position = btn.style.position || 'relative';
      btn.appendChild(rip);
      setTimeout(() => rip.remove(), 600);
    });

    if (!document.getElementById('ripple-css')) {
      const s = document.createElement('style');
      s.id = 'ripple-css';
      s.textContent = '@keyframes ripple-anim{to{transform:scale(1);opacity:0;}}';
      document.head.appendChild(s);
    }
  }

  /* ============================================================
     8. PARALLAX HERO SHAPES (subtle)
     ============================================================ */
  function initParallax() {
    const shapes = document.querySelectorAll('.hero-bg-shape,.h2-hero-orb');
    if (!shapes.length) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      shapes.forEach((s, i) => {
        const speed = 0.08 + i * 0.04;
        s.style.transform = `translateY(${y * speed}px)`;
      });
    }, { passive: true });
  }

  /* ============================================================
     9. NAVBAR SCROLL STYLE
     ============================================================ */
  function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     10. SCROLL-TO-TOP BUTTON
     ============================================================ */
  function initScrollTop() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 400), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ============================================================
     11. FAQ ACCORDION
     ============================================================ */
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const item   = q.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  /* ============================================================
     12. HERO FLOATING ELEMENTS
     ============================================================ */
  function initHeroFloats() {
    document.querySelectorAll('.hero-float').forEach((el, i) => {
      el.style.animation = `float-bob ${2.5 + i * 0.4}s ease-in-out ${i * 0.3}s infinite alternate`;
    });
    injectKeyframe('float-bob',
      '@keyframes float-bob{from{transform:translateY(0)}to{transform:translateY(-14px)}}');
  }

  /* ============================================================
     13. NUMBER TICKER on stat items (with comma formatting)
     ============================================================ */
  function initStatTicker() {
    document.querySelectorAll('.stat-number').forEach(el => {
      const text = el.textContent.trim();
      const num  = parseFloat(text.replace(/[^0-9.]/g, ''));
      const suf  = text.replace(/[0-9.,]/g, '');
      if (isNaN(num)) return;
      el.setAttribute('data-count', num);
      el.setAttribute('data-suffix', suf);
    });
  }

  /* ============================================================
     14. SMOOTH SECTION ENTRANCE (header visibility)
     ============================================================ */
  function initSectionHeadings() {
    document.querySelectorAll('.section-title,.section-label,.section-subtitle').forEach(el => {
      if (!el.closest('[class*="animate-"]')) {
        el.classList.add('animate-fade-up');
      }
    });
  }

  /* ============================================================
     15. ACTIVE LINK HIGHLIGHT ON SCROLL
     ============================================================ */
  function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => io.observe(s));
  }

  /* ============================================================
     16. IMAGE LAZY LOAD placeholder shimmer
     ============================================================ */
  function initLazyImages() {
    document.querySelectorAll('img[data-src]').forEach(img => {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            io.unobserve(img);
          }
        });
      });
      io.observe(img);
    });
  }

  /* ============================================================
     17. CARD HOVER GLOW
     ============================================================ */
  function initCardGlow() {
    if (window.innerWidth < 768) return;
    document.querySelectorAll('.service-card,.feature-card,.benefit-card').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const r  = this.getBoundingClientRect();
        const x  = e.clientX - r.left;
        const y  = e.clientY - r.top;
        this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(76,175,80,.06) 0%, var(--light) 60%)`;
      });
      card.addEventListener('mouseleave', function() {
        this.style.background = '';
      });
    });
  }

  /* ============================================================
     18. TOAST (global helper exposed to window)
     ============================================================ */
  window.showToast = function(msg, type, dur) {
    dur = dur || 3200;
    let c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div');
    t.className = 'toast-msg ' + (type || 'success');
    t.innerHTML = '<span>' + (type === 'error' ? '' : '') + '</span> ' + msg;
    c.appendChild(t);
    setTimeout(() => {
      t.style.transition = 'all .3s ease';
      t.style.opacity = '0';
      t.style.transform = 'translateX(110%)';
      setTimeout(() => t.remove(), 320);
    }, dur);
  };

  /* ============================================================
     HELPERS
     ============================================================ */
  function injectKeyframe(id, css) {
    if (document.getElementById('kf-' + id)) return;
    const s = document.createElement('style');
    s.id = 'kf-' + id;
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initStagger();
    initStatTicker();
    initCounters();
    // initCursor(); // Disabled
    // initMagnetic(); // Disabled
    initTilt();
    // initRipple(); // Disabled
    initParallax();
    initNavbar();
    initScrollTop();
    initFAQ();
    initHeroFloats();
    initSectionHeadings();
    initActiveSection();
    initLazyImages();
    initCardGlow();
    // Re-run scroll reveal after stagger adds classes
    setTimeout(initScrollReveal, 120);
  });

  // Re-run on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      initScrollReveal();
    }, 200);
  });

})();
