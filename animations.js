// ── SCROLL REVEAL ──
// Watches for elements with the class "reveal" entering the viewport,
// then adds "visible" to trigger the CSS fade-up transition.

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger each card slightly for a cascading effect
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);

      // Stop watching once revealed
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(el => revealObserver.observe(el));