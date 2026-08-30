const sectors = {
  a: {
    index: 'A / 01', letter: 'A', title: 'Industrial Foundry', route: 'A → D',
    image: 'FOUNDRY SUPERSTRUCTURE / IMAGE PENDING',
    description: 'Molten-metal production towers form the first route into the automated factory. The map view emphasizes furnace scale, exhaust lines, and heavy vertical silhouettes.',
    function: 'Entry sector', cue: 'Heat / verticality / molten flow',
    enemies: [
      ['FW', 'Forge Warden', 'A · Heavy guard', 'High', 'Slow'],
      ['SD', 'Slag Drone', 'A · Ranged support', 'Mid', 'Hover'],
      ['CC', 'Casting Crawler', 'A · Pursuit unit', 'Mid', 'Rapid'],
      ['HM', 'Heat Monitor', 'A · Alarm unit', 'Low', 'Reactive']
    ],
    stages: [
      ['Furnace Intake', 'Heat 41% / Visibility clear', 'Recognizable entry geometry', 'The first combat space keeps the sector’s core material and lighting language readable. Paths remain broad and enemy pressure is low.'],
      ['Casting Channel', 'Heat 73% / Steam active', 'Production lines become hazards', 'Molten channels open, overhead machinery activates, and the same room gains tighter traversal lanes without changing its overall identity.'],
      ['Smelter Core', 'Heat 96% / Alarm state', 'The foundry reaches full pressure', 'The deepest interior intensifies red light, moving machinery, and heat vents to produce a simple final-state transformation.']
    ]
  },
  b: {
    index: 'B / 02', letter: 'B', title: 'Logistics Zone', route: 'B → D', image: 'FREIGHT SPINE / IMAGE PENDING',
    description: 'A modular freight network provides the second route into the automated factory. The exterior is defined by stacked containers, rails, cranes, and directional markings.',
    function: 'Entry sector', cue: 'Rails / modules / route signals',
    enemies: [
      ['CD', 'Cargo Drone', 'B · Mobile support', 'Mid', 'Fast'],
      ['RG', 'Rail Guard', 'B · Lane control', 'High', 'Linear'],
      ['LU', 'Loader Unit', 'B · Heavy carrier', 'High', 'Slow'],
      ['SM', 'Signal Mine', 'B · Area denial', 'Low', 'Static']
    ],
    stages: [
      ['Cargo Vestibule', 'Traffic 28% / Lanes open', 'Clear lanes establish the route', 'The encounter begins between static cargo rows with long sight lines and readable navigation markers.'],
      ['Transfer Deck', 'Traffic 67% / Belts active', 'Moving systems divide the floor', 'Conveyors and suspended cargo shift across the same interior, creating temporary cover and changing movement timing.'],
      ['Dispatch Core', 'Traffic 100% / Lockdown', 'Logistics turns into a trap', 'Security shutters, automated lifts, and warning signals compress the arena before the route joins sector D.']
    ]
  },
  c: {
    index: 'C / 03', letter: 'C', title: 'Scrap Yard', route: 'C → E', image: 'SALVAGE BASIN / IMAGE PENDING',
    description: 'Discarded machines and compressed salvage create a rough secondary route toward the medical equipment district. Its exterior reads as low, irregular, and densely layered.',
    function: 'Entry sector', cue: 'Debris / compression / unstable stacks',
    enemies: [
      ['SH', 'Scrap Hound', 'C · Pursuit unit', 'Mid', 'Rapid'],
      ['CM', 'Crusher Mite', 'C · Swarm unit', 'Low', 'Erratic'],
      ['SC', 'Salvage Claw', 'C · Grapple unit', 'High', 'Reactive'],
      ['RS', 'Rust Stalker', 'C · Ambush unit', 'Mid', 'Hidden']
    ],
    stages: [
      ['Sorting Pit', 'Density 35% / Stable', 'Scrap defines simple cover', 'Loose equipment piles establish close-range lanes and introduce the first scavenger enemies.'],
      ['Crusher Line', 'Density 71% / Machinery active', 'The environment starts consuming itself', 'Compactors and sorting arms rearrange cover while keeping the location visually consistent.'],
      ['Recovery Tunnel', 'Density 89% / Route exposed', 'Clean systems appear beneath the waste', 'The deepest layer reveals sealed service passages that transition from the scrapyard into sector E.']
    ]
  },
  d: {
    index: 'D / 04', letter: 'D', title: 'Automated Factory', route: 'A + B → D', image: 'AUTONOMY PLANT / IMAGE PENDING',
    description: 'The two industrial routes converge in a large fully automated production complex. Its exterior is monumental, ordered, and almost entirely without human scale.',
    function: 'Terminal sector', cue: 'Automation / repetition / machine scale',
    enemies: [
      ['AW', 'Assembly Warden', 'D · Heavy guard', 'High', 'Measured'],
      ['LC', 'Line Carrier', 'D · Mobile platform', 'Mid', 'Linear'],
      ['FU', 'Fabricator Unit', 'D · Reinforcement', 'High', 'Static'],
      ['CC', 'Control Core', 'D · Command unit', 'Critical', 'Adaptive']
    ],
    stages: [
      ['Assembly Threshold', 'Automation 54% / Passive', 'Repetition establishes machine scale', 'Identical assembly cells create a disciplined opening arena with predictable movement.'],
      ['Fabrication Hall', 'Automation 82% / Tracking', 'Machines begin responding to combat', 'Robotic arms and production carriers activate in layered cycles, changing safe zones with minimal geometry changes.'],
      ['Control Nexus', 'Automation 100% / Hostile', 'The factory becomes the opponent', 'All production systems synchronize into a final battle state centered on the control core.']
    ]
  },
  e: {
    index: 'E / 05', letter: 'E', title: 'Medical Equipment', route: 'C → E', image: 'CLINICAL ASSEMBLY / IMAGE PENDING',
    description: 'A sealed medical-device production district sits beyond the scrapyard route. The exterior contrasts pale shells, precise joints, and isolated service towers.',
    function: 'Terminal sector', cue: 'Sterility / precision / articulated systems',
    enemies: [
      ['SA', 'Sterile Arm', 'E · Precision unit', 'High', 'Reactive'],
      ['SD', 'Suture Drone', 'E · Repair support', 'Mid', 'Hover'],
      ['SU', 'Scanner Unit', 'E · Detection unit', 'Low', 'Sweeping'],
      ['PF', 'Prototype Frame', 'E · Experimental guard', 'Critical', 'Adaptive']
    ],
    stages: [
      ['Decontamination Gate', 'Sterility 98% / Quiet', 'A controlled entry slows the pace', 'Bright surfaces and simple partitions make enemy silhouettes immediately readable.'],
      ['Instrument Assembly', 'Sterility 84% / Arms active', 'Precision machinery narrows movement', 'Surgical manipulators and suspended devices begin to track movement across the room.'],
      ['Prototype Theatre', 'Sterility 61% / Breach', 'Clinical order breaks down', 'Emergency lighting and damaged test equipment create the final, more unstable version of the same interior language.']
    ]
  }
};

const nodes = [...document.querySelectorAll('[data-sector-select]')];
const depthButtons = [...document.querySelectorAll('[data-depth-select]')];
const enemyCards = [...document.querySelectorAll('[data-enemy-card]')];
let activeSector = 'a';
let activeDepth = 0;

const text = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

function renderDepth() {
  const stage = sectors[activeSector].stages[activeDepth];
  const stagePanel = document.querySelector('.interior-stage');
  if (stagePanel) stagePanel.dataset.depth = String(activeDepth);
  text('[data-stage-title]', stage[0]);
  text('[data-stage-condition]', stage[1]);
  text('[data-stage-heading]', stage[2]);
  text('[data-stage-copy]', stage[3]);
  text('[data-stage-index]', `DEPTH 0${activeDepth + 1} / 03`);
  depthButtons.forEach((button, index) => {
    const selected = index === activeDepth;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function renderEnemies() {
  sectors[activeSector].enemies.forEach((enemy, index) => {
    const card = enemyCards[index];
    if (!card) return;
    card.querySelector('[data-enemy-number]').textContent = `0${index + 1}`;
    card.querySelector('[data-enemy-initials]').textContent = enemy[0];
    card.querySelector('[data-enemy-name]').textContent = enemy[1];
    card.querySelector('[data-enemy-role]').textContent = enemy[2];
    card.querySelector('[data-enemy-threat]').textContent = enemy[3];
    card.querySelector('[data-enemy-motion]').textContent = enemy[4];
  });
}

function renderSector(key) {
  activeSector = key;
  activeDepth = 0;
  const sector = sectors[key];
  document.body.dataset.sector = key;
  text('[data-sector-index]', sector.index);
  text('[data-sector-letter]', sector.letter);
  text('[data-sector-title]', sector.title);
  text('[data-sector-route]', sector.route);
  text('[data-sector-image-label]', sector.image);
  text('[data-sector-description]', sector.description);
  text('[data-sector-function]', sector.function);
  text('[data-sector-cue]', sector.cue);
  text('[data-map-active-title]', `${sector.letter} · ${sector.title}`);
  text('[data-map-active-summary]', sector.description);
  text('[data-battle-sector-label]', `${sector.letter} / ${sector.title}`.toUpperCase());
  text('[data-enemy-sector-label]', `${sector.letter} / ${sector.title}`.toUpperCase());
  nodes.forEach((button) => {
    const selected = button.dataset.sectorSelect === key;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderDepth();
  renderEnemies();
}

nodes.forEach((button) => button.addEventListener('click', () => renderSector(button.dataset.sectorSelect)));
depthButtons.forEach((button) => button.addEventListener('click', () => {
  activeDepth = Number(button.dataset.depthSelect);
  renderDepth();
}));

renderSector('a');
