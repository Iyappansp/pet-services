/* ============================================================
   PawCare Pro - Booking JavaScript
   Form Validation, Date Pickers, Confirmation
   ============================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       SET MIN DATE ON DATE INPUTS
       ============================================================ */
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
      input.min = today;
    });

    /* ============================================================
       SERVICE SELECTION CARDS
       ============================================================ */
    document.querySelectorAll('.service-select-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.service-select-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');

        const serviceInput = document.getElementById('serviceType');
        if (serviceInput) serviceInput.value = this.getAttribute('data-service');
      });
    });

    /* ============================================================
       BOOKING FORM VALIDATION
       ============================================================ */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear errors
        document.querySelectorAll('.field-error').forEach(el => el.remove());
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

        let valid = true;
        const errors = [];

        // Validate required fields
        const required = bookingForm.querySelectorAll('[required]');
        required.forEach(field => {
          if (!field.value.trim()) {
            valid = false;
            showFieldError(field, 'This field is required');
          }
        });

        // Validate email
        const email = bookingForm.querySelector('input[type="email"]');
        if (email && email.value && !isValidEmail(email.value)) {
          valid = false;
          showFieldError(email, 'Please enter a valid email address');
        }

        // Validate phone
        const phone = bookingForm.querySelector('input[type="tel"]');
        if (phone && phone.value && phone.value.length < 7) {
          valid = false;
          showFieldError(phone, 'Please enter a valid phone number');
        }

        if (valid) {
          showBookingSuccess();
        }
      });
    }

    function showFieldError(field, message) {
      field.classList.add('input-error');
      const err = document.createElement('span');
      err.className = 'field-error';
      err.textContent = message;
      err.style.cssText = 'display:block; color: #EF4444; font-size:.78rem; margin-top:4px; font-family: var(--font-heading); font-weight:500;';
      field.parentNode.appendChild(err);
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showBookingSuccess() {
      const form = document.getElementById('bookingForm');
      const container = form.closest('.booking-form-container') || form.parentElement;

      container.innerHTML = `
        <div style="text-align: center; padding: 60px 40px;">
          <div style="font-size: 4rem; margin-bottom: 20px; animation: bounce-in 0.5s ease;">✅</div>
          <h3 style="font-family: var(--font-heading); font-weight: 800; color: var(--primary); margin-bottom: 12px;">Booking Confirmed!</h3>
          <p style="color: var(--text-secondary); max-width: 360px; margin: 0 auto 28px;">
            Your pet care request has been submitted. We'll match you with the perfect sitter and confirm within 30 minutes.
          </p>
          <div style="background: rgba(76,175,80,.08); border: 1px solid rgba(76,175,80,.2); border-radius: 12px; padding: 20px; max-width: 320px; margin: 0 auto 28px; text-align: center;">
            <p style="font-size:.85rem; color:var(--text-secondary); margin:0;">
               Confirmation email sent<br>
               SMS notification enabled<br>
               Sitter match in progress...
             </p>
          </div>
          <a href="dashboard.html" class="btn btn-primary">Go to Dashboard</a>
        </div>
      `;

      // Inject bounce keyframe
      if (!document.getElementById('bounce-style')) {
        const s = document.createElement('style');
        s.id = 'bounce-style';
        s.textContent = '@keyframes bounce-in { 0%{transform:scale(0)} 60%{transform:scale(1.2)} 100%{transform:scale(1)} }';
        document.head.appendChild(s);
      }
    }

    /* ============================================================
       INPUT ERROR STYLE
       ============================================================ */
    const errorStyle = document.createElement('style');
    errorStyle.textContent = `
      .input-error {
        border-color: #EF4444 !important;
        box-shadow: 0 0 0 4px rgba(239,68,68,.1) !important;
      }
    `;
    document.head.appendChild(errorStyle);

  });
})();
