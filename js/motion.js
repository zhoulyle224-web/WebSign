const motionLayer = document.createElement('div');
motionLayer.className = 'construct-motion';
motionLayer.setAttribute('aria-hidden', 'true');

[
  'construct-axis axis-a',
  'construct-axis axis-b',
  'construct-block block-a',
  'construct-block block-b',
  'construct-ring ring-a',
  'construct-ring ring-b',
  'construct-frame'
].forEach((className) => {
  const element = document.createElement('i');
  element.className = className;
  motionLayer.append(element);
});

document.body.prepend(motionLayer);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll([
  '.project-card',
  '.overview-card',
  '.route-panel',
  '.process-column',
  '.architecture-tile',
  '.sequence-cell',
  '.enemy-node',
  '.hud-panel',
  '.ui-tokens'
].join(','));

revealTargets.forEach((element, index) => {
  element.classList.add('motion-reveal');
  element.style.setProperty('--reveal-order', index % 5);
});

if (reducedMotion.matches || !('IntersectionObserver' in window)) {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -4% 0px' });
  revealTargets.forEach((element) => observer.observe(element));
}
