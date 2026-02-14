const initStickyHeader = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const toggleHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };

  toggleHeader();
  window.addEventListener('scroll', toggleHeader, { passive: true });
};

const initMobileMenu = () => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
};

const initLightbox = () => {
  const dialog = document.getElementById('lightbox');
  const preview = dialog?.querySelector('img');
  const closeBtn = dialog?.querySelector('.close-lightbox');
  const items = document.querySelectorAll('.gallery-item img');

  if (!dialog || !preview || !closeBtn || !items.length) return;

  items.forEach((item) => {
    item.closest('.gallery-item')?.addEventListener('click', () => {
      preview.src = item.src;
      preview.alt = item.alt;
      dialog.showModal();
    });
  });

  closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const clickedOutside = (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    );

    if (clickedOutside) dialog.close();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initLightbox();
});
