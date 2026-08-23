const root = document.body;
const savedTheme = localStorage.getItem('adl-theme') || 'a';

function setTheme(theme) {
  const next = theme === 'b' ? 'b' : 'a';
  root.classList.toggle('theme-b', next === 'b');
  root.classList.toggle('theme-a', next === 'a');
  document.querySelectorAll('[data-theme]').forEach((button) => {
    const selected = button.dataset.theme === next;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-route-label]').forEach((label) => {
    label.textContent = next === 'b' ? 'Plan B' : 'Plan A';
  });
  localStorage.setItem('adl-theme', next);
}

// The route controls live in HTML attributes, so expose the route setter even
// though this file is loaded as an ES module by the production build.
window.setTheme = setTheme;

setTheme(savedTheme);

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
