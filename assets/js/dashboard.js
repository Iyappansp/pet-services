/* ============================================================
   PawCare Pro - Dashboard JavaScript
   Mock Data, Dynamic Cards, Stats
   ============================================================ */

(function () {
  'use strict';

  const MOCK_DATA = {
    user: { name: 'Sarah Johnson', pets: 2, nextVisit: 'Tomorrow, 9:00 AM' },
    stats: [
      { label: 'Upcoming Visits', value: 3, icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>', color: 'rgba(76,175,80,.12)', textColor: 'var(--primary)' },
      { label: 'Active Pets', value: 2, icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5-3c-.83 0-1.5.67-1.5 1.5S7.17 13.5 8 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 0c-.83 0-1.5.67-1.5 1.5S15.17 13.5 16 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 11c-2.21 0-4 1.79-4 4 0 2.5 2.5 4.5 4 5.5 1.5-1 4-3 4-5.5 0-2.21-1.79-4-4-4z"/></svg>', color: 'rgba(255,200,87,.15)', textColor: 'var(--secondary-dark)' },
      { label: 'Total Walks', value: 47, icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"></path><path d="M12 18H6"></path><path d="M12 14H6"></path><path d="M16 10H6"></path><path d="M16 6H6"></path></svg>', color: 'rgba(59,130,246,.12)', textColor: '#1D4ED8' },
      { label: 'Photos Received', value: 128, icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>', color: 'rgba(255,127,80,.12)', textColor: 'var(--accent)' }
    ],
    upcomingVisits: [
      { pet: 'Max', service: 'Dog Walking', sitter: 'Emma R.', date: 'Tomorrow', time: '9:00 AM', status: 'confirmed', petEmoji: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="color:var(--primary);"><path d="M4.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5-3c-.83 0-1.5.67-1.5 1.5S7.17 13.5 8 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 0c-.83 0-1.5.67-1.5 1.5S15.17 13.5 16 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 11c-2.21 0-4 1.79-4 4 0 2.5 2.5 4.5 4 5.5 1.5-1 4-3 4-5.5 0-2.21-1.79-4-4-4z"/></svg>' },
      { pet: 'Luna', service: 'Pet Sitting', sitter: 'Carlos M.', date: 'Jun 15', time: '2:00 PM', status: 'pending', petEmoji: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="color:var(--primary);"><path d="M4.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5-3c-.83 0-1.5.67-1.5 1.5S7.17 13.5 8 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 0c-.83 0-1.5.67-1.5 1.5S15.17 13.5 16 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 11c-2.21 0-4 1.79-4 4 0 2.5 2.5 4.5 4 5.5 1.5-1 4-3 4-5.5 0-2.21-1.79-4-4-4z"/></svg>' },
      { pet: 'Max', service: 'Dog Walking', sitter: 'Emma R.', date: 'Jun 17', time: '9:00 AM', status: 'confirmed', petEmoji: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="color:var(--primary);"><path d="M4.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5-3c-.83 0-1.5.67-1.5 1.5S7.17 13.5 8 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 0c-.83 0-1.5.67-1.5 1.5S15.17 13.5 16 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 11c-2.21 0-4 1.79-4 4 0 2.5 2.5 4.5 4 5.5 1.5-1 4-3 4-5.5 0-2.21-1.79-4-4-4z"/></svg>' }
    ],
    recentPhotos: [
      'assets/images/sitter-emma.png',
      'assets/images/sitter-carlos.png',
      'assets/images/sitter-sophie.png',
      'assets/images/team-jessica.png',
      'assets/images/team-david.png',
      'assets/images/team-emily.png'
    ],
    walkHistory: [
      { date: 'Jun 10', distance: '2.4 km', duration: '35 min', sitter: 'Emma R.' },
      { date: 'Jun 8', distance: '1.8 km', duration: '28 min', sitter: 'Emma R.' },
      { date: 'Jun 6', distance: '3.1 km', duration: '42 min', sitter: 'Emma R.' }
    ]
  };

  document.addEventListener('DOMContentLoaded', function () {
    renderDashboard();
    initDashNav();
  });

  function renderDashboard() {
    renderStats();
    renderUpcomingVisits();
    renderRecentPhotos();
    renderWalkHistory();
  }

  function renderStats() {
    const container = document.getElementById('dashStats');
    if (!container) return;

    container.innerHTML = MOCK_DATA.stats.map(s => `
      <div class="stat-card animate-fade-up">
        <div style="display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:12px;">
          <div class="stat-card-icon" style="background:${s.color}; font-size:1.4rem; display:flex; align-items:center; justify-content:center; color:${s.textColor};">${s.icon}</div>
          <span style="font-size:.7rem; font-weight:600; color:var(--success); background:rgba(34,197,94,.1); padding:2px 8px; border-radius:20px;">↑ Active</span>
        </div>
        <div style="font-family:var(--font-heading); font-size:2rem; font-weight:800; color:var(--text-primary); line-height:1;" data-count="${s.value}">${s.value}</div>
        <div style="font-size:.8rem; color:var(--text-muted); margin-top:4px; font-weight:500;">${s.label}</div>
      </div>
    `).join('');
  }

  function renderUpcomingVisits() {
    const container = document.getElementById('upcomingVisits');
    if (!container) return;

    container.innerHTML = MOCK_DATA.upcomingVisits.map(v => `
      <div class="visit-card animate-fade-up">
        <div style="width:52px; height:52px; border-radius:50%; background:rgba(76,175,80,.1); display:flex; align-items:center; justify-content:center; font-size:1.6rem; flex-shrink:0;">${v.petEmoji}</div>
        <div style="flex:1; min-width:0;">
          <div style="font-family:var(--font-heading); font-weight:700; color:var(--text-primary); font-size:.9rem;">${v.pet} — ${v.service}</div>
          <div style="font-size:.8rem; color:var(--text-muted); margin-top:2px;">with ${v.sitter} · ${v.date} at ${v.time}</div>
        </div>
        <span class="badge ${v.status === 'confirmed' ? 'badge-success' : 'badge-secondary'}" style="flex-shrink:0;">
          ${v.status === 'confirmed' ? 'Confirmed' : 'Pending'}
        </span>
      </div>
    `).join('');
  }

  function renderRecentPhotos() {
    const container = document.getElementById('recentPhotos');
    if (!container) return;

    container.innerHTML = MOCK_DATA.recentPhotos.map(photo => `
      <div style="width:100%; aspect-ratio:1; border-radius:12px; overflow:hidden; cursor:pointer; transition:transform .2s ease; border:2px solid var(--border);"
        onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        <img src="${photo}" style="width:100%; height:100%; object-fit:cover; display:block;">
      </div>
    `).join('');
  }

  function renderWalkHistory() {
    const container = document.getElementById('walkHistory');
    if (!container) return;

    container.innerHTML = MOCK_DATA.walkHistory.map(w => `
      <div style="display:flex; align-items:center; gap:16px; padding:14px; background:var(--bg-2); border-radius:12px; margin-bottom:8px;">
        <div style="width:40px; height:40px; background:rgba(76,175,80,.1); border-radius:10px; display:flex; align-items:center; justify-content:center; color:var(--primary); flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5-3c-.83 0-1.5.67-1.5 1.5S7.17 13.5 8 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 0c-.83 0-1.5.67-1.5 1.5S15.17 13.5 16 13.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 11c-2.21 0-4 1.79-4 4 0 2.5 2.5 4.5 4 5.5 1.5-1 4-3 4-5.5 0-2.21-1.79-4-4-4z"/></svg>
        </div>
        <div style="flex:1; min-width:0;">
          <div style="font-weight:600; font-size:.85rem; color:var(--text-primary); font-family:var(--font-heading);">${w.date} · ${w.sitter}</div>
          <div style="font-size:.75rem; color:var(--text-muted); margin-top:2px;">${w.distance} · ${w.duration}</div>
        </div>
        <a href="gps-tracking.html" style="font-size:.75rem; color:var(--primary); font-weight:600; text-decoration:none; white-space:nowrap;">View Map →</a>
      </div>
    `).join('');
  }

  function initDashNav() {
    document.querySelectorAll('.dash-nav-item, .dash-mobile-nav-item').forEach(item => {
      item.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') {
          e.preventDefault();
          document.querySelectorAll('.dash-nav-item, .dash-mobile-nav-item').forEach(i => i.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
  }

})();
