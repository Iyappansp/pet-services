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
                <li><a href="about.html" data-page="about">About</a></li>

        <li><a href="services.html" data-page="services">Services</a></li>
        <li><a href="sitter-profiles.html" data-page="sitter-profiles">Sitters</a></li>
        <li><a href="pricing.html" data-page="pricing">Pricing</a></li>
        <li><a href="gps-tracking.html" data-page="gps-tracking">GPS Tracking</a></li>
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
    <button class="mobile-menu-close" id="menuClose" aria-label="Close menu">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>

    <a href="index.html" class="mobile-nav-link" data-page="index">
      <span></span> Home
    </a>
    <a href="home-2.html" class="mobile-nav-link" data-page="home-2">
      <span></span> Home 2
    </a>
    <a href="services.html" class="mobile-nav-link" data-page="services">
      <span></span> Services
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
    <a href="about.html" class="mobile-nav-link" data-page="about">
      <span></span> About
    </a>
    <a href="contact.html" class="mobile-nav-link" data-page="contact">
      <span></span> Contact
    </a>

    <div style="margin-top: auto; padding-top: 20px; display: flex; flex-direction: column; gap: 12px; border-top: 1px solid var(--border);">
      <!-- Preferences / Toggles inside menu -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; padding: 0 4px;">
        <span style="font-family: var(--font-heading); font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">Preferences</span>
        <div style="display: flex; gap: 8px;">
          <!-- Theme Toggle inside menu -->
          <button class="nav-icon-btn" id="menuThemeToggle" title="Toggle Dark Mode" aria-label="Toggle theme" style="width: 40px; height: 40px; border-radius: 50%; background: var(--bg-2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: var(--transition);">
            <span id="menuThemeIcon"></span>
          </button>
          <!-- RTL Toggle inside menu -->
          <button class="nav-icon-btn rtl-text-btn" id="menuRtlToggle" title="Toggle RTL" aria-label="Toggle direction" style="height: 40px; padding: 0 16px; border-radius: var(--radius-full); background: var(--bg-2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; color: var(--text-primary); transition: var(--transition);">
            <span id="menuRtlIcon">RTL</span>
          </button>
        </div>
      </div>
      <a href="login.html" class="btn btn-outline" style="width:100%; justify-content:center;">Login</a>
      <a href="dashboard.html" class="btn btn-primary" style="width:100%; justify-content:center;">Dashboard</a>
      <a href="booking.html" class="btn btn-outline" style="width:100%; justify-content:center; border-color: var(--primary); color: var(--primary);">Book a Visit</a>
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
          © 2026 PawCare Pro. All rights reserved. Made with <svg width="12" height="12" viewBox="0 0 24 24" fill="#e25555" style="display:inline-block; vertical-align:middle; margin:0 2px;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> for pets.
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
     DASHBOARD TEMPLATES (SIDEBAR, MOBILE HEADER, MOBILE NAV)
     ============================================================ */
  const DASHBOARD_SIDEBAR_HTML = `
    <!-- Sidebar Logo -->
    <div class="sidebar-logo">
      <a href="index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
        <img src="assets/logo.png" alt="PawCare Pro Logo" class="logo-img">
      </a>
    </div>
    <!-- User Info -->
    <div style="padding:20px;border-bottom:1px solid var(--border);margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;"><img src="assets/images/testimonial-sarah.png" alt="Sarah Johnson" style="width:100%;height:100%;object-fit:cover;"></div>
        <div>
          <div style="font-family:var(--font-heading);font-weight:700;font-size:.9rem;color:var(--text-primary);">Sarah Johnson</div>
          <div style="font-size:.75rem;color:var(--text-muted);">Pet Parent</div>
        </div>
      </div>
    </div>
    <!-- Nav -->
    <a href="dashboard.html" class="dash-nav-item" data-dash-page="dashboard">
      <span class="icon" style="display:inline-flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
      </span> Overview
    </a>
    <a href="booking.html" class="dash-nav-item" data-dash-page="booking">
      <span class="icon" style="display:inline-flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      </span> Book a Visit
    </a>
    <a href="pet-profiles.html" class="dash-nav-item" data-dash-page="pet-profiles">
      <span class="icon" style="display:inline-flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5-3c-.83 0-1.5.67-1.5 1.5S7.17 13.5 8 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 0c-.83 0-1.5.67-1.5 1.5S15.17 13.5 16 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 11c-2.21 0-4 1.79-4 4 0 2.5 2.5 4.5 4 5.5 1.5-1 4-3 4-5.5 0-2.21-1.79-4-4-4z"/></svg>
      </span> My Pets
    </a>
    <a href="vaccination-records.html" class="dash-nav-item" data-dash-page="vaccination-records">
      <span class="icon" style="display:inline-flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 11 13 15 9"></polyline></svg>
      </span> Vaccinations
    </a>
    <a href="messages.html" class="dash-nav-item" data-dash-page="messages">
      <span class="icon" style="display:inline-flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </span> Messages <span style="background:var(--primary);color:#fff;border-radius:10px;padding:1px 7px;font-size:.65rem;margin-left:auto;" id="sidebarMessagesBadge">3</span>
    </a>
  
    <div class="sidebar-footer">
      <a href="login.html" class="btn btn-outline btn-sm" style="width:100%;">Sign Out</a>
    </div>
  `;

  const DASHBOARD_MOBILE_HEADER_HTML = `
    <a href="index.html"><img src="assets/logo.png" alt="PawCare Pro Logo" class="logo-img"></a>
    <div style="font-family:var(--font-heading);font-weight:700;font-size:1.1rem;color:var(--text-primary);">Dashboard</div>
    <div style="width:32px;height:32px;border-radius:50%;overflow:hidden;"><img src="assets/images/testimonial-sarah.png" alt="Sarah Johnson" style="width:100%;height:100%;object-fit:cover;"></div>
  `;

  const DASHBOARD_MOBILE_NAV_HTML = `
    <a href="dashboard.html" class="dash-mobile-nav-item" data-dash-page="dashboard">
      <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg></span>
      Overview
    </a>
    <a href="booking.html" class="dash-mobile-nav-item" data-dash-page="booking">
      <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>
      Book
    </a>
    <a href="pet-profiles.html" class="dash-mobile-nav-item" data-dash-page="pet-profiles">
      <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5-3c-.83 0-1.5.67-1.5 1.5S7.17 13.5 8 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 0c-.83 0-1.5.67-1.5 1.5S15.17 13.5 16 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 11c-2.21 0-4 1.79-4 4 0 2.5 2.5 4.5 4 5.5 1.5-1 4-3 4-5.5 0-2.21-1.79-4-4-4z"/></svg></span>
      Pets
    </a>
    <a href="vaccination-records.html" class="dash-mobile-nav-item" data-dash-page="vaccination-records">
      <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 11 13 15 9"></polyline></svg></span>
      Records
    </a>
    <a href="messages.html" class="dash-mobile-nav-item" data-dash-page="messages">
      <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span>
      Messages
    </a>
  `;

  function injectDashboardComponents() {
    const layout = document.querySelector('.dashboard-layout');
    if (!layout) return;

    // 1. Sidebar Injection
    let sidebar = document.querySelector('.dashboard-sidebar');
    if (!sidebar) {
      sidebar = document.createElement('aside');
      sidebar.className = 'dashboard-sidebar';
      layout.insertBefore(sidebar, layout.firstChild);
    }
    sidebar.innerHTML = DASHBOARD_SIDEBAR_HTML;

    // 2. Mobile Header Injection
    let mobileHeader = document.querySelector('.dash-mobile-header');
    if (!mobileHeader) {
      mobileHeader = document.createElement('div');
      mobileHeader.className = 'dash-mobile-header';
      layout.parentNode.insertBefore(mobileHeader, layout);
    }
    mobileHeader.innerHTML = DASHBOARD_MOBILE_HEADER_HTML;

    // 3. Mobile Nav Injection
    let mobileNav = document.querySelector('.dash-mobile-nav');
    if (!mobileNav) {
      mobileNav = document.createElement('nav');
      mobileNav.className = 'dash-mobile-nav';
      layout.parentNode.insertBefore(mobileNav, layout.nextSibling);
    }
    mobileNav.innerHTML = DASHBOARD_MOBILE_NAV_HTML;

    // Set Active Dashboard Links
    const path = window.location.pathname.split('/').pop().replace('.html', '') || 'dashboard';

    // In sidebar
    sidebar.querySelectorAll('[data-dash-page]').forEach(link => {
      if (link.getAttribute('data-dash-page') === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // In mobile nav
    mobileNav.querySelectorAll('[data-dash-page]').forEach(link => {
      if (link.getAttribute('data-dash-page') === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Special behavior for messages badge on messages.html page
    if (path === 'messages') {
      const sidebarBadge = document.getElementById('sidebarMessagesBadge');
      if (sidebarBadge) sidebarBadge.style.display = 'none';
    }
  }

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

    const menuIcon = document.getElementById('menuThemeIcon');
    if (menuIcon) menuIcon.innerHTML = theme === 'dark' ? SUN_SVG : MOON_SVG;
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

    const menuIcon = document.getElementById('menuRtlIcon');
    if (menuIcon) menuIcon.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
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
      if (e.target.closest('#themeToggle') || e.target.closest('#menuThemeToggle')) toggleTheme();
      if (e.target.closest('#rtlToggle') || e.target.closest('#menuRtlToggle')) toggleRTL();
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
     SIGNOUT CONFIRMATION POPUP
     ============================================================ */
  function initSignOutConfirm() {
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a');
      if (link) {
        const text = link.textContent.trim().toLowerCase();
        if (text === 'sign out' || text === 'logout' || (link.getAttribute('href') === 'login.html' && link.closest('.sidebar-footer'))) {
          e.preventDefault();
          const targetUrl = link.getAttribute('href') || 'login.html';
          showLogoutModal(targetUrl);
        }
      }
    });
  }

  function showLogoutModal(redirectUrl) {
    if (document.getElementById('logoutConfirmModal')) return;

    const modalHtml = `
      <div id="logoutConfirmModal" style="
        position: fixed;
        inset: 0;
        background: rgba(17, 24, 39, 0.75);
        backdrop-filter: blur(8px);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
      ">
        <div style="
          background: var(--light, #1E2530);
          border: 1px solid var(--border, #2A3441);
          border-radius: var(--radius-xl, 16px);
          padding: 32px;
          width: 100%;
          max-width: 400px;
          box-shadow: var(--shadow-xl);
          text-align: center;
          transform: scale(0.9);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        " id="logoutConfirmContent">
          <div style="
            width: 60px;
            height: 60px;
            background: rgba(239, 68, 68, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: #EF4444;
          ">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
          <h4 style="
            font-family: var(--font-heading, 'Poppins', sans-serif);
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--text-primary, #F1F5F9);
          ">Sign Out</h4>
          <p style="
            color: var(--text-secondary, #94A3B8);
            font-size: 0.95rem;
            margin-bottom: 28px;
            line-height: 1.5;
          ">Are you sure you want to log out of your PawCare Pro session?</p>
          <div style="display: flex; gap: 12px;">
            <button id="logoutCancelBtn" class="btn btn-outline" style="flex: 1; justify-content: center; padding: 10px 0;">Cancel</button>
            <button id="logoutConfirmBtn" class="btn btn-primary" style="flex: 1; justify-content: center; background: #EF4444; border-color: #EF4444; color: #fff; padding: 10px 0;">Sign Out</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('logoutConfirmModal');
    const content = document.getElementById('logoutConfirmContent');

    // Trigger animation
    setTimeout(() => {
      modal.style.opacity = '1';
      content.style.transform = 'scale(1)';
    }, 10);

    function closeModal() {
      modal.style.opacity = '0';
      content.style.transform = 'scale(0.9)';
      setTimeout(() => {
        modal.remove();
      }, 300);
    }

    document.getElementById('logoutCancelBtn').addEventListener('click', closeModal);
    document.getElementById('logoutConfirmBtn').addEventListener('click', () => {
      closeModal();
      window.location.href = redirectUrl;
    });

    // Close on click outside content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    injectHeader();
    injectFooter();
    injectDashboardComponents();

    // Init after injection
    initTheme();
    initRTL();
    setActiveNav();
    initMobileMenu();
    initStickyNav();
    initButtons();
    initScrollTop();
    initSignOutConfirm();
  });

})();
