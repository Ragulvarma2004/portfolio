

// Mobile nav
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});

// Stagger skill pills animation
document.querySelectorAll('.skill-pill.reveal').forEach((el, i) => {
  el.style.transitionDelay = i * 0.06 + 's';
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.style.color =
      link.getAttribute('href') === '#' + current
        ? 'var(--text)'
        : '';
  });
});