// Hisabee Landing Page - GhushSite Theme Interactivity
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Drawer Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileDrawer = (open) => {
    if (open) {
      if (mobileDrawer) mobileDrawer.classList.add('open');
      if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileDrawer(true));
  }
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', () => toggleMobileDrawer(false));
  }
  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', () => toggleMobileDrawer(false));
  }
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileDrawer(false));
  });

  // 3. Pricing Toggle (Monthly vs Annual)
  const billingToggle = document.getElementById('billing-toggle');
  const starterPrice = document.getElementById('price-starter');
  const growthPrice = document.getElementById('price-growth');
  const enterprisePrice = document.getElementById('price-enterprise');
  const billingPeriods = document.querySelectorAll('.billing-period-text');

  const pricingData = {
    monthly: { starter: '$12', growth: '$29', enterprise: '$69', period: '/month' },
    annual: { starter: '$9', growth: '$22', enterprise: '$55', period: '/mo billed annually' }
  };

  if (billingToggle) {
    billingToggle.addEventListener('change', (e) => {
      const isAnnual = e.target.checked;
      const data = isAnnual ? pricingData.annual : pricingData.monthly;

      if (starterPrice) starterPrice.textContent = data.starter;
      if (growthPrice) growthPrice.textContent = data.growth;
      if (enterprisePrice) enterprisePrice.textContent = data.enterprise;

      billingPeriods.forEach(el => {
        el.textContent = data.period;
      });
    });
  }

  // 4. Interactive Product Tour Tabs
  const tabButtons = document.querySelectorAll('.feature-tab-btn');
  const tabContents = document.querySelectorAll('.feature-tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button classes
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update contents
      tabContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });

      if (window.lucide) window.lucide.createIcons();
    });
  });

  // 5. FAQ Accordion (GhushSite-style with +/- indicator and yellow highlight)
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('button');
    const icon = item.querySelector('.faq-icon');

    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('faq-item-open');

        // Close all items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('faq-item-open');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherIcon) otherIcon.textContent = '+';
          const otherBtn = otherItem.querySelector('button');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        // If not already open, open it
        if (!isOpen) {
          item.classList.add('faq-item-open');
          if (icon) icon.textContent = '−';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 6. Toast Notification for Forms
  const forms = document.querySelectorAll('.lead-form, .final-cta-form');
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  const showToast = (message) => {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"], input[type="text"]');
      if (input && input.value) {
        showToast(`🎉 Success! Trial confirmation sent to ${input.value}`);
        input.value = '';
      } else {
        showToast(`🎉 Thank you! Our onboarding team will connect within 15 minutes.`);
      }
    });
  });

  // 7. Video / Demo Modal Trigger
  const openDemoModalBtn = document.getElementById('open-demo-modal');
  const heroWatchDemoBtn = document.getElementById('hero-watch-demo');
  const closeDemoModalBtn = document.getElementById('close-demo-modal');
  const demoModal = document.getElementById('demo-modal');

  const openModal = () => {
    if (demoModal) demoModal.classList.add('active');
  };

  const closeModal = () => {
    if (demoModal) demoModal.classList.remove('active');
  };

  if (openDemoModalBtn) openDemoModalBtn.addEventListener('click', openModal);
  if (heroWatchDemoBtn) heroWatchDemoBtn.addEventListener('click', openModal);
  if (closeDemoModalBtn) closeDemoModalBtn.addEventListener('click', closeModal);

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });
  }

  // 8. ESC key to close modal/drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      toggleMobileDrawer(false);
    }
  });
});
