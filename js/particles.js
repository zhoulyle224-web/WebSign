const canvas = document.createElement('canvas');
canvas.className = 'particle-field';
canvas.setAttribute('aria-hidden', 'true');
document.body.prepend(canvas);

const context = canvas.getContext('2d', { alpha: true });
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const particles = [];
const pointer = { x: 0, y: 0, active: false };

let width = 0;
let height = 0;
let frame = 0;
let theme = 'a';

const palette = {
  accent: [8, 60, 255],
  ink: [10, 10, 11]
};

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function desiredCount() {
  const areaCount = Math.round((width * height) / 17000);
  return width < 600 ? clamp(areaCount, 26, 40) : clamp(areaCount, 46, 96);
}

function makeParticle(index) {
  const angle = Math.random() * Math.PI * 2;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    angle,
    speed: 0.14 + Math.random() * 0.32,
    turn: (Math.random() - 0.5) * 0.004,
    radius: 0.65 + Math.random() * 1.25,
    alpha: 0.28 + Math.random() * 0.48,
    marker: index % 6 === 0
  };
}

function syncParticles() {
  const count = desiredCount();
  while (particles.length < count) particles.push(makeParticle(particles.length));
  if (particles.length > count) particles.length = count;
}

function setPalette() {
  theme = document.body.classList.contains('theme-b') ? 'b' : 'a';
  palette.accent = theme === 'b' ? [197, 20, 24] : [8, 60, 255];
  palette.ink = theme === 'b' ? [24, 16, 14] : [10, 10, 11];
  if (reducedMotion.matches) draw();
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  syncParticles();
  draw();
}

function update() {
  const curve = theme === 'b' ? 1 : 0.22;
  for (const particle of particles) {
    particle.angle += particle.turn * curve;
    particle.x += Math.cos(particle.angle) * particle.speed;
    particle.y += Math.sin(particle.angle) * particle.speed;

    if (pointer.active) {
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance > 0 && distance < 145) {
        const force = (1 - distance / 145) * 0.018;
        particle.x += dx * force;
        particle.y += dy * force;
      }
    }

    if (particle.x < -8) particle.x = width + 8;
    if (particle.x > width + 8) particle.x = -8;
    if (particle.y < -8) particle.y = height + 8;
    if (particle.y > height + 8) particle.y = -8;
  }
}

function drawLinks() {
  const maximumDistance = width < 600 ? 92 : 132;
  for (let first = 0; first < particles.length; first += 1) {
    for (let second = first + 1; second < particles.length; second += 1) {
      const a = particles[first];
      const b = particles[second];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance >= maximumDistance) continue;
      const opacity = (1 - distance / maximumDistance) * 0.2;
      context.strokeStyle = `rgba(${palette.accent.join(',')},${opacity})`;
      context.lineWidth = 0.72;
      context.beginPath();
      context.moveTo(a.x, a.y);
      if ((first + second) % 3 === 0) {
        context.lineTo(b.x, a.y);
        context.lineTo(b.x, b.y);
      } else {
        context.lineTo(b.x, b.y);
      }
      context.stroke();
    }
  }
}

function drawParticles() {
  for (const particle of particles) {
    const color = particle.marker ? palette.accent : palette.ink;
    context.fillStyle = `rgba(${color.join(',')},${particle.alpha})`;
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fill();

    if (particle.marker) {
      context.strokeStyle = `rgba(${palette.accent.join(',')},0.48)`;
      context.lineWidth = 0.72;
      context.beginPath();
      context.moveTo(particle.x - 6, particle.y);
      context.lineTo(particle.x + 9, particle.y);
      context.lineTo(particle.x + 9, particle.y - 9);
      context.moveTo(particle.x, particle.y - 6);
      context.lineTo(particle.x, particle.y + 6);
      context.stroke();
    }
  }
}

function draw() {
  context.clearRect(0, 0, width, height);
  drawLinks();
  drawParticles();
}

function animate() {
  if (document.hidden || reducedMotion.matches) {
    frame = 0;
    return;
  }
  update();
  draw();
  frame = requestAnimationFrame(animate);
}

function start() {
  if (!frame && !document.hidden && !reducedMotion.matches) {
    frame = requestAnimationFrame(animate);
  }
}

window.addEventListener('resize', resize, { passive: true });
window.addEventListener('pointermove', (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
}, { passive: true });
window.addEventListener('pointerout', () => { pointer.active = false; }, { passive: true });

document.addEventListener('visibilitychange', () => {
  if (document.hidden && frame) {
    cancelAnimationFrame(frame);
    frame = 0;
  } else {
    start();
  }
});

reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches && frame) {
    cancelAnimationFrame(frame);
    frame = 0;
    draw();
  } else {
    start();
  }
});

new MutationObserver(setPalette).observe(document.body, {
  attributes: true,
  attributeFilter: ['class']
});

setPalette();
resize();
start();
