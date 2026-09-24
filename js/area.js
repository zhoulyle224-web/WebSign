const sectors = {
  a: {
    index: 'A / 01', letter: 'A', title: '工业铸造区', route: 'A → D',
    image: '铸造区主体结构 / 图片待补充',
    description: '熔融金属生产塔构成通往全自动工厂的第一条路线。地图外观重点表现熔炉尺度、排气管线与沉重的垂直轮廓。',
    function: '入口区域', cue: '高温 / 垂直结构 / 熔融流动',
    enemies: [
      ['A1', '铸造区敌人 01', 'A · 敌人素材', '待定', '待定', 'assets/area-a-foundry/enemies/01-enemy.jpg', '铸造区敌人素材 01'],
      ['A2', '铸造区敌人 02', 'A · 敌人素材', '待定', '待定', 'assets/area-a-foundry/enemies/02-enemy.jpg', '铸造区敌人素材 02'],
      ['A3', '铸造区敌人 03', 'A · 敌人素材', '待定', '待定', 'assets/area-a-foundry/enemies/03-enemy.jpg', '铸造区敌人素材 03'],
      ['A4', '铸造区敌人 04', 'A · 敌人素材', '待定', '待定', 'assets/area-a-foundry/enemies/04-enemy.jpg', '铸造区敌人素材 04'],
      ['A5', '铸造区敌人 05', 'A · 敌人素材', '待定', '待定', 'assets/area-a-foundry/enemies/05-enemy.jpg', '铸造区敌人素材 05'],
      ['A6', '铸造区敌人 06', 'A · 敌人素材', '待定', '待定', 'assets/area-a-foundry/enemies/06-enemy.jpg', '铸造区敌人素材 06'],
      ['A7', '铸造区敌人 07', 'A · 敌人素材', '待定', '待定', 'assets/area-a-foundry/enemies/07-enemy.jpg', '铸造区敌人素材 07']
    ],
    stages: [
      ['熔炉入口', '温度 41% / 视野清晰', '建立可识别的入口结构', '第一处战斗空间保留区域最核心的材质与照明语言。通路较宽，敌人压力较低。', 'assets/area-a-foundry/scenes/01-scene.jpg', '铸造区场景素材 01'],
      ['铸造通道', '温度 73% / 蒸汽启动', '生产线转化为环境威胁', '熔融通道开启，顶部机械开始运转；空间整体识别不变，但通行路线变得更窄。', 'assets/area-a-foundry/scenes/02-scene.jpg', '铸造区场景素材 02'],
      ['冶炼核心', '温度 96% / 警报状态', '铸造区达到最高压力', '最深处通过红色照明、运动机械与高温排气口，形成最终阶段的场景变化。', 'assets/area-a-foundry/scenes/03-scene.jpg', '铸造区场景素材 03']
    ]
  },
  b: {
    index: 'B / 02', letter: 'B', title: '物流区', route: 'B → D', image: '货运主轴 / 图片待补充',
    description: '模块化货运网络构成通往全自动工厂的第二条路线。外观由堆叠货柜、轨道、吊机和方向标识共同建立。',
    function: '入口区域', cue: '轨道 / 模块 / 路线信号',
    enemies: [
      ['B1', '物流区敌人 01', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/01-enemy.jpg', '物流区敌人素材 01'],
      ['B2', '物流区敌人 02', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/02-enemy.jpg', '物流区敌人素材 02'],
      ['B3', '物流区敌人 03', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/03-enemy.jpg', '物流区敌人素材 03'],
      ['B4', '物流区敌人 04', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/04-enemy.jpg', '物流区敌人素材 04'],
      ['B5', '物流区敌人 05', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/05-enemy.jpg', '物流区敌人素材 05'],
      ['B6', '物流区敌人 06', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/06-enemy.jpg', '物流区敌人素材 06'],
      ['B7', '物流区敌人 07', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/07-enemy.jpg', '物流区敌人素材 07'],
      ['B8', '物流区敌人 08', 'B · 敌人素材', '待定', '待定', 'assets/area-b-logistics/enemies/08-enemy.jpg', '物流区敌人素材 08']
    ],
    stages: [
      ['货运前厅', '运输量 28% / 通道开放', '清晰通道建立路线识别', '战斗从静止货柜之间开始，视线较长，导航标识清晰。', 'assets/area-b-logistics/scenes/01-scene.jpg', '物流区场景素材 01'],
      ['转运平台', '运输量 67% / 传送带启动', '运动系统切分地面空间', '传送带与悬挂货物在内部移动，形成临时掩体并改变移动时机。', 'assets/area-b-logistics/scenes/02-scene.jpg', '物流区场景素材 02'],
      ['调度核心', '运输量 100% / 全面封锁', '物流系统转化为战斗陷阱', '安全闸门、自动升降机和警示信号压缩战斗空间，随后路线汇入 D 区。', 'assets/area-b-logistics/scenes/03-scene.jpg', '物流区场景素材 03']
    ]
  },
  c: {
    index: 'C / 03', letter: 'C', title: '垃圾场', route: 'C → E', image: '垃圾场外观 / 图片待补充',
    description: '废弃机械和压缩废料构成一条通往医疗区的粗粝路线。区域整体低矮、不规则，并具有密集堆叠的视觉特征。',
    function: '入口区域', cue: '废料 / 压缩结构 / 不稳定堆叠',
    enemies: [
      ['SJ', '废料夹持机', 'C · 近距离夹持', '中', '快速', 'assets/area-c-scrapyard/enemies/01-scrap-hound.jpg', '垃圾场敌人素材 01：绿色废料夹持机械体'],
      ['ZZ', '重装废土机', 'C · 重型行走单位', '高', '缓慢', 'assets/area-c-scrapyard/enemies/02-crusher-mite.jpg', '垃圾场敌人素材 02：重型人形工业机械体'],
      ['SL', '双联拆解者', 'C · 协同拆解单位', '中', '不规则', 'assets/area-c-scrapyard/enemies/03-salvage-claw.jpg', '垃圾场敌人素材 03：双联机械拆解单位'],
      ['GX', '管线收割者', 'C · 大型巡游单位', '高', '跨步', 'assets/area-c-scrapyard/enemies/04-rust-stalker.jpg', '垃圾场敌人素材 04：具有管线肢体的大型机械体'],
      ['HJ', '红色夹钳机', 'C · 夹持单位', '中', '反应式', 'assets/area-c-scrapyard/enemies/05-red-clamp.jpg', '垃圾场敌人素材 05：红色废旧夹钳机器人'],
      ['WJ', '废料挖掘机', 'C · 挖掘单位', '高', '稳定', 'assets/area-c-scrapyard/enemies/06-scrap-digger.jpg', '垃圾场敌人素材 06：携带工具的黄色挖掘机械体']
    ],
    stages: [
      ['分拣入口', '密度 35% / 状态稳定', '废料构成初步掩体', '松散设备和破损围挡形成近距离通道，并引入第一批垃圾场敌人。', 'assets/area-c-scrapyard/scenes/02-broken-barrier-entry.jpg', '垃圾场场景素材 02：破损黄色围挡结构'],
      ['处理平台', '密度 71% / 机械启动', '环境开始主动改变战斗空间', '分拣设备和周边机械重新组织掩体，同时保持垃圾场的整体视觉识别。', 'assets/area-c-scrapyard/scenes/03-sorting-floor-pressure.jpg', '垃圾场场景素材 03：俯视工业处理平台'],
      ['回收核心', '密度 89% / 路线显现', '废料深处出现封闭设施', '最深层显露回收设施与密封结构，作为垃圾场通往 E 医疗区的视觉过渡。', 'assets/area-c-scrapyard/scenes/04-recovery-lab-core.jpg', '垃圾场场景素材 04：封闭回收设施']
    ]
  },
  d: {
    index: 'D / 04', letter: 'D', title: '大型全自动军工厂区', route: 'A + B → D', image: '自动化军工生产设施 / 图片待补充',
    description: '两条工业路线在大型全自动军工生产设施中汇合。其外观宏大、秩序严密，并且几乎完全脱离人的尺度。',
    function: '终点区域', cue: '自动化 / 重复结构 / 机械尺度',
    enemies: [
      ['D1', '军工厂敌人 01', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/01-enemy.jpg', '军工厂敌人素材 01'],
      ['D2', '军工厂敌人 02', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/02-enemy.jpg', '军工厂敌人素材 02'],
      ['D3', '军工厂敌人 03', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/03-enemy.jpg', '军工厂敌人素材 03'],
      ['D4', '军工厂敌人 04', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/04-enemy.jpg', '军工厂敌人素材 04'],
      ['D5', '军工厂敌人 05', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/05-enemy.jpg', '军工厂敌人素材 05'],
      ['D6', '军工厂敌人 06', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/06-enemy.jpg', '军工厂敌人素材 06'],
      ['D7', '军工厂敌人 07', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/07-enemy.jpg', '军工厂敌人素材 07'],
      ['D8', '军工厂敌人 08', 'D · 敌人素材', '待定', '待定', 'assets/area-d-military-factory/enemies/08-enemy.jpg', '军工厂敌人素材 08']
    ],
    stages: [
      ['装配入口', '自动化 54% / 被动', '重复结构建立机械尺度', '相同的装配单元构成秩序严密的开场战斗空间，移动规律较容易预测。', 'assets/area-d-military-factory/scenes/01-scene.jpg', '军工厂场景素材 01'],
      ['制造大厅', '自动化 82% / 追踪', '机械开始响应战斗', '机械臂和生产运输机分层启动，在较少改变几何结构的情况下持续改变安全区域。', 'assets/area-d-military-factory/scenes/02-scene.jpg', '军工厂场景素材 02'],
      ['控制中枢', '自动化 100% / 敌对', '整座工厂成为战斗对手', '所有生产系统同步进入最终战斗状态，并围绕控制核心形成压力。', 'assets/area-d-military-factory/scenes/03-scene.jpg', '军工厂场景素材 03']
    ]
  },
  e: {
    index: 'E / 05', letter: 'E', title: '医疗区', route: 'C → E', image: '医疗区外观 / 图片待补充',
    description: '医疗区位于垃圾场路线尽头，以浅色外壳、透明容器、精密连接结构与封闭实验设施形成清晰的区域识别。',
    function: '终点区域', cue: '无菌感 / 精密结构 / 关节系统',
    enemies: [
      ['E1', '诊疗终端群', 'E · 控制单位', '中', '固定', 'assets/area-e-medical/enemies/01-enemy.jpg', '医疗区敌人素材 01'],
      ['E2', '医疗转运机', 'E · 护送单位', '高', '滚动', 'assets/area-e-medical/enemies/02-enemy.jpg', '医疗区敌人素材 02'],
      ['E3', '实验体接口', 'E · 异常实验单位', '高', '不规则', 'assets/area-e-medical/enemies/03-enemy.jpg', '医疗区敌人素材 03'],
      ['E4', '供氧携行者', 'E · 支援单位', '中', '步行', 'assets/area-e-medical/enemies/04-enemy.jpg', '医疗区敌人素材 04'],
      ['E5', '生命维持载体', 'E · 监测单位', '高', '固定', 'assets/area-e-medical/enemies/05-enemy.jpg', '医疗区敌人素材 05'],
      ['E6', '药剂搬运机', 'E · 补给单位', '低', '推行', 'assets/area-e-medical/enemies/06-enemy.jpg', '医疗区敌人素材 06'],
      ['E7', '神经培养舱', 'E · 核心实验单位', '致命', '自适应', 'assets/area-e-medical/enemies/07-enemy.jpg', '医疗区敌人素材 07']
    ],
    stages: [
      ['净化入口', '无菌度 98% / 通道开放', '封闭框架建立入口识别', '白色结构和蓝色识别条形成受控入口，战斗空间保持清晰、稳定。', 'assets/area-e-medical/scenes/04-scene.jpg', '医疗区场景素材 04'],
      ['诊疗平台', '无菌度 84% / 设备启动', '诊疗设备压缩移动空间', '检测终端和舱门开始工作，内部设备逐渐成为通路与掩体的一部分。', 'assets/area-e-medical/scenes/05-scene.jpg', '医疗区场景素材 05'],
      ['实验核心', '无菌度 61% / 系统异常', '医疗秩序转化为实验压力', '容器、器械和监测模块共同构成最终阶段，并强化医疗区的实验性质。', 'assets/area-e-medical/scenes/01-scene.jpg', '医疗区场景素材 01']
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
  const stageButton = stagePanel?.querySelector('.interior-stage-image');
  const stageImage = stageButton?.querySelector('img');
  const hasStageImage = Boolean(stage[4]);
  if (stagePanel) {
    stagePanel.dataset.depth = String(activeDepth);
    stagePanel.classList.toggle('has-image', hasStageImage);
  }
  if (stageButton && stageImage) {
    stageButton.disabled = !hasStageImage;
    stageButton.dataset.gallerySrc = stage[4] || '';
    stageButton.dataset.galleryAlt = stage[5] || '';
    stageButton.dataset.galleryCaption = `${sectors[activeSector].index} · ${stage[0]} · ${stage[2]}`;
    if (hasStageImage) {
      stageImage.src = stage[4];
      stageImage.alt = stage[5];
    } else {
      stageImage.removeAttribute('src');
      stageImage.alt = '';
    }
  }
  text('.interior-stage .media-slot-label', hasStageImage ? `${sectors[activeSector].letter} 区 / 场景素材` : '内部场景图像');
  text('[data-stage-title]', stage[0]);
  text('[data-stage-condition]', stage[1]);
  text('[data-stage-heading]', stage[2]);
  text('[data-stage-copy]', stage[3]);
  text('[data-stage-index]', `深度 0${activeDepth + 1} / 03`);
  depthButtons.forEach((button, index) => {
    const selected = index === activeDepth;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function renderEnemies() {
  enemyCards.forEach((card, index) => {
    const enemy = sectors[activeSector].enemies[index];
    card.hidden = !enemy;
    if (!enemy) return;
    card.querySelector('[data-enemy-number]').textContent = `0${index + 1}`;
    card.querySelector('[data-enemy-initials]').textContent = enemy[0];
    card.querySelector('[data-enemy-name]').textContent = enemy[1];
    card.querySelector('[data-enemy-role]').textContent = enemy[2];
    card.querySelector('[data-enemy-threat]').textContent = enemy[3];
    card.querySelector('[data-enemy-motion]').textContent = enemy[4];
    const imageButton = card.querySelector('.enemy-image-slot');
    const image = imageButton.querySelector('img');
    const imageLabel = imageButton.querySelector('small');
    const hasImage = Boolean(enemy[5]);
    imageButton.classList.toggle('has-image', hasImage);
    imageButton.disabled = !hasImage;
    imageButton.dataset.gallerySrc = enemy[5] || '';
    imageButton.dataset.galleryAlt = enemy[6] || '';
    imageButton.dataset.galleryCaption = `${sectors[activeSector].index} · ${enemy[1]} · ${enemy[2]}`;
    imageLabel.textContent = hasImage ? '查看 / 放大' : '图片待补充';
    if (hasImage) {
      image.src = enemy[5];
      image.alt = enemy[6];
    } else {
      image.removeAttribute('src');
      image.alt = '';
    }
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
  text('[data-battle-sector-label]', `${sector.letter} / ${sector.title}`);
  text('[data-enemy-sector-label]', `${sector.letter} / ${sector.title}`);
  document.querySelectorAll('[data-scene-library]').forEach((library) => {
    library.hidden = library.dataset.sceneLibrary !== key;
  });
  const appearance = document.querySelector('.sector-appearance');
  const exteriorButton = appearance?.querySelector('.sector-media-image');
  const exteriorImage = exteriorButton?.querySelector('img');
  const hasExterior = Boolean(sector.exterior);
  if (appearance) {
    appearance.classList.toggle('has-image', hasExterior);
    appearance.setAttribute('aria-label', hasExterior ? sector.exteriorAlt : '当前区域外观图像预留位置');
  }
  if (exteriorButton && exteriorImage) {
    exteriorButton.disabled = !hasExterior;
    exteriorButton.dataset.gallerySrc = sector.exterior || '';
    exteriorButton.dataset.galleryAlt = sector.exteriorAlt || '';
    exteriorButton.dataset.galleryCaption = `${sector.index} · ${sector.title} · 区域外观参考`;
    if (hasExterior) {
      exteriorImage.src = sector.exterior;
      exteriorImage.alt = sector.exteriorAlt;
    } else {
      exteriorImage.removeAttribute('src');
      exteriorImage.alt = '';
    }
  }
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
