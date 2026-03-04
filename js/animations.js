// ── SCROLL REVEAL ──
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(el => revealObserver.observe(el));

// ── BOOKING MODAL ──
const modal = document.getElementById('bookingModal');
const modalClose = document.getElementById('modalClose');

// Hide modal on page load
if (modal) modal.style.display = 'none';

function openModal() {
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('a[href="#booking"], .open-modal').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
});

if (modalClose) modalClose.addEventListener('click', closeModal);

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
