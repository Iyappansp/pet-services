/* ============================================================
   PawCare Pro - Main JavaScript
   Header/Footer Injection, Theme, RTL, Mobile Nav
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     HEADER HTML
     ============================================================ */
  const HEADER_HTML = `
  <div class="navbar" id="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <a href="index.html" class="nav-logo">
        <img src="assets/logo.png" alt="PawCare Pro Logo" class="logo-img">
      </a>

      <!-- Desktop Nav Links -->
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" data-page="index">Home</a></li>
        <li><a href="home-2.html" data-page="home-2">Home 2</a></li>
        <li><a href="services.html" data-page="services">Services</a></li>
        <li><a href="sitter-profiles.html" data-page="sitter-profiles">Sitters</a></li>
        <li><a href="pricing.html" data-page="pricing">Pricing</a></li>
        <li><a href="gps-tracking.html" data-page="gps-tracking">GPS Tracking</a></li>
        <li><a href="about.html" data-page="about">About</a></li>
        <li><a href="contact.html" data-page="contact">Contact</a></li>
      </ul>

      <!-- Nav Actions -->
      <div class="nav-actions">
        <!-- Theme Toggle -->
        <button class="nav-icon-btn" id="themeToggle" title="Toggle Dark Mode" aria-label="Toggle theme">
          <span id="themeIcon"></span>
        </button>
        <!-- RTL Toggle -->
        <button class="nav-icon-btn rtl-text-btn" id="rtlToggle" title="Toggle RTL" aria-label="Toggle direction">
          <span id="rtlIcon">RTL</span>
        </button>
        <!-- Login -->
        <a href="login.html" class="btn btn-outline btn-sm">Login</a>
        <!-- Dashboard -->
        <a href="dashboard.html" class="btn btn-primary btn-sm btn-dashboard">Dashboard</a>
        <!-- Mobile Toggle -->
        <button class="mobile-toggle" id="mobileToggle" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Overlay -->
  <div class="mobile-menu-overlay" id="menuOverlay"></div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
    <button class="mobile-menu-close" id="menuClose" aria-label="Close menu"></button>

    <a href="index.html" class="mobile-nav-link" data-page="index">
      <span></span> Home
    </a>
    <a href="services.html" class="mobile-nav-link" data-page="services">
      <span></span> Services
    </a>
    <a href="dog-walking.html" class="mobile-nav-link" data-page="dog-walking">
      <span></span> Dog Walking
    </a>
    <a href="pet-sitting.html" class="mobile-nav-link" data-page="pet-sitting">
      <span></span> Pet Sitting
    </a>
    <a href="sitter-profiles.html" class="mobile-nav-link" data-page="sitter-profiles">
      <span></span> Sitters
    </a>
    <a href="pricing.html" class="mobile-nav-link" data-page="pricing">
      <span></span> Pricing
    </a>
    <a href="gps-tracking.html" class="mobile-nav-link" data-page="gps-tracking">
      <span></span> GPS Tracking
    </a>
    <a href="dashboard.html" class="mobile-nav-link" data-page="dashboard">
      <span></span> Dashboard
    </a>
    <a href="about.html" class="mobile-nav-link" data-page="about">
      <span></span> About
    </a>
    <a href="blog.html" class="mobile-nav-link" data-page="blog">
      <span></span> Blog
    </a>
    <a href="contact.html" class="mobile-nav-link" data-page="contact">
      <span></span> Contact
    </a>

    <div style="margin-top: auto; padding-top: 20px; display: flex; flex-direction: column; gap: 10px;">
      <a href="login.html" class="btn btn-outline" style="width:100%; justify-content:center;">Login</a>
      <a href="booking.html" class="btn btn-primary" style="width:100%; justify-content:center;">Book a Visit</a>
    </div>
  </div>
  `;

  /* ============================================================
     FOOTER HTML
     ============================================================ */
  const FOOTER_HTML = `
  <div class="footer">
    <div class="container">
      <div class="footer-grid" style="display:grid; padding: 60px 0 40px;">
        <!-- Brand Col -->
        <div class="footer-brand-col footer-brand">
          <a href="index.html" class="nav-logo" style="margin-bottom: 16px; display: inline-flex;">
            <img src="assets/logo.png" alt="PawCare Pro Logo" class="logo-img">
          </a>
          <p style="font-size:.875rem; color: rgba(255,255,255,.5); max-width: 240px; margin-bottom: 20px; line-height: 1.7;">
            Trusted care for your furry family members. Professional, insured, and GPS-tracked services.
          </p>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank" class="social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="mailto:info@pawcarepro.com" class="social-link" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://youtube.com" target="_blank" class="social-link" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <p class="footer-heading">Services</p>
          <ul class="footer-links">
            <li><a href="dog-walking.html">→ Dog Walking</a></li>
            <li><a href="pet-sitting.html">→ Pet Sitting</a></li>
            <li><a href="services.html">→ Puppy Visits</a></li>
            <li><a href="services.html">→ Cat Care</a></li>
            <li><a href="services.html">→ Overnight Care</a></li>
            <li><a href="gps-tracking.html">→ GPS Tracking</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <p class="footer-heading">Company</p>
          <ul class="footer-links">
            <li><a href="about.html">→ About Us</a></li>
            <li><a href="sitter-profiles.html">→ Meet Sitters</a></li>
            <li><a href="blog.html">→ Blog</a></li>
            <li><a href="faq.html">→ FAQ</a></li>
            <li><a href="pricing.html">→ Pricing</a></li>
            <li><a href="contact.html">→ Contact</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <p class="footer-heading">For Pet Parents</p>
          <ul class="footer-links">
            <li><a href="dashboard.html">→ Dashboard</a></li>
            <li><a href="pet-profiles.html">→ Pet Profiles</a></li>
            <li><a href="vaccination-records.html">→ Vaccination Records</a></li>
            <li><a href="booking.html">→ Book a Visit</a></li>
            <li><a href="login.html">→ Login</a></li>
            <li><a href="signup.html">→ Sign Up</a></li>
          </ul>
        </div>
      </div>

      <hr class="footer-divider">

      <!-- Bottom Bar -->
      <div class="footer-bottom" style="display:flex; align-items:center; justify-content:space-between; padding-bottom:32px; gap: 16px; flex-wrap: wrap;">
        <p style="font-size:.8rem; color:rgba(255,255,255,.35); margin:0; display:flex; align-items:center; gap:4px;">
          © 2025 PawCare Pro. All rights reserved. Made with <svg width="12" height="12" viewBox="0 0 24 24" fill="#e25555" style="display:inline-block; vertical-align:middle; margin:0 2px;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> for pets.
        </p>
        <div style="display:flex; gap:16px; flex-wrap:wrap;">
          <a href="#" style="font-size:.8rem; color:rgba(255,255,255,.35); text-decoration:none; transition: color .2s ease;" onmouseover="this.style.color='#FFC857'" onmouseout="this.style.color='rgba(255,255,255,.35)'">Privacy Policy</a>
          <a href="#" style="font-size:.8rem; color:rgba(255,255,255,.35); text-decoration:none; transition: color .2s ease;" onmouseover="this.style.color='#FFC857'" onmouseout="this.style.color='rgba(255,255,255,.35)'">Terms of Service</a>
          <a href="#" style="font-size:.8rem; color:rgba(255,255,255,.35); text-decoration:none; transition: color .2s ease;" onmouseover="this.style.color='#FFC857'" onmouseout="this.style.color='rgba(255,255,255,.35)'">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
  `;

  /* ============================================================
     INJECT HEADER & FOOTER
     ============================================================ */
  function injectHeader() {
    const headerEl = document.getElementById('main-header');
    if (headerEl) headerEl.innerHTML = HEADER_HTML;
  }

  function injectFooter() {
    const footerEl = document.getElementById('main-footer');
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  }

  /* ============================================================
     ACTIVE NAV LINK
     ============================================================ */
  function setActiveNav() {
    const path = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('[data-page]').forEach(link => {
      if (link.getAttribute('data-page') === path) {
        link.classList.add('active');
      }
    });
  }

  /* ============================================================
     THEME TOGGLE
     ============================================================ */
  function initTheme() {
    const saved = localStorage.getItem('pawcare-theme') || 'light';
    applyTheme(saved);
  }

  const SUN_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const MOON_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pawcare-theme', theme);

    const icon = document.getElementById('themeIcon');
    if (icon) icon.innerHTML = theme === 'dark' ? SUN_SVG : MOON_SVG;
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ============================================================
     RTL TOGGLE
     ============================================================ */
  function initRTL() {
    const saved = localStorage.getItem('pawcare-dir') || 'ltr';
    applyDir(saved);
  }

  function applyDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('pawcare-dir', dir);
    const icon = document.getElementById('rtlIcon');
    if (icon) icon.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  }

  function toggleRTL() {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    applyDir(current === 'rtl' ? 'ltr' : 'rtl');
  }

  /* ============================================================
     MOBILE MENU
     ============================================================ */
  function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('menuOverlay');
    const close = document.getElementById('menuClose');

    function openMenu() {
      menu.classList.add('open');
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('open');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    }

    if (toggle) toggle.addEventListener('click', openMenu);
    if (close) close.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close on nav link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ============================================================
     STICKY NAVBAR
     ============================================================ */
  function initStickyNav() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     THEME/RTL BUTTON EVENTS (delegated after injection)
     ============================================================ */
  function initButtons() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('#themeToggle')) toggleTheme();
      if (e.target.closest('#rtlToggle')) toggleRTL();
    });
  }

  /* ============================================================
     SCROLL TOP BUTTON
     ============================================================ */
  function initScrollTop() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     TOAST NOTIFICATIONS
     ============================================================ */
  window.showToast = function (msg, type = 'success', duration = 3500) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-msg ${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '' : ''}</span> ${msg}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'none';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    injectHeader();
    injectFooter();

    // Init after injection
    initTheme();
    initRTL();
    setActiveNav();
    initMobileMenu();
    initStickyNav();
    initButtons();
    initScrollTop();
  });

})();
