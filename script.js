function toggleMenu(btn) {
  const menu = document.getElementById('mobileMenu');
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

document.addEventListener('DOMContentLoaded', () => {
  // Always show the current year in the footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Gentle fade-in as sections scroll into view
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
