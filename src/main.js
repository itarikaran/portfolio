const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  toggle.querySelector('.menu-icon').textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  toggle.querySelector('.menu-icon').textContent = '☰';
}));
const sections = document.querySelectorAll('main section[id]');
const navigationObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const name = entry.target.dataset.nav;
  if (name) nav.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.textContent.trim().toLowerCase().startsWith(name.toLowerCase())));
}), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => navigationObserver.observe(section));
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
