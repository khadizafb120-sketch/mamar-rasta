import * as THREE from 'three';
import {
  BILLBOARD_TEXTS,
  BUS_LIVERIES,
  BusLiverySpec,
  ModPanelId,
  ModRoofId,
  SHOP_SIGNS,
  ShopSignSpec
} from './types';

function makeCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  return [c, ctx];
}

function finalizeTexture(
  canvas: HTMLCanvasElement,
  repeatX = 1,
  repeatY = 1,
  colorSpace: THREE.ColorSpace = THREE.SRGBColorSpace
): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = colorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export interface TextureBank {
  road: THREE.CanvasTexture;
  roadBump: THREE.CanvasTexture;
  roadRoughness: THREE.CanvasTexture;
  sidewalk: THREE.CanvasTexture;
  sidewalkBump: THREE.CanvasTexture;
  contactShadow: THREE.CanvasTexture;
  glowHalo: THREE.CanvasTexture;
  rickshawArt: THREE.CanvasTexture;
  rickshawRoof: THREE.CanvasTexture;
  chargeZone: THREE.CanvasTexture;
  buildings: THREE.CanvasTexture[];
  buildingBump: THREE.CanvasTexture;
  shops: THREE.CanvasTexture[];
  buses: THREE.CanvasTexture[];
  busFront: THREE.CanvasTexture;
  truckRear: THREE.CanvasTexture;
  metroCoach: THREE.CanvasTexture;
  billboards: THREE.CanvasTexture[];
  plateAuto: THREE.CanvasTexture;
  plateCar: THREE.CanvasTexture;
  bdFlag: THREE.CanvasTexture;
  wallPosters: THREE.CanvasTexture[];
  streetSigns: THREE.CanvasTexture[];
  humanFaces: THREE.CanvasTexture[];
  waterTex: THREE.CanvasTexture;
  panelTextures: Record<ModPanelId, THREE.CanvasTexture>;
  roofTextures: Record<ModRoofId, THREE.CanvasTexture>;
  uTurnSign: THREE.CanvasTexture;
  uTurnRoad: THREE.CanvasTexture;
  michilBanners: THREE.CanvasTexture[];
}

export function createTextureBank(): TextureBank {
  const roadSet = createRoadTextureSet();
  const sidewalkSet = createSidewalkTextureSet();
  const classicPanel = createRickshawArtTexture();
  const classicRoof = createRickshawRoofTexture();
  return {
    road: roadSet.albedo,
    roadBump: roadSet.bump,
    roadRoughness: roadSet.roughness,
    sidewalk: sidewalkSet.albedo,
    sidewalkBump: sidewalkSet.bump,
    contactShadow: createContactShadowTexture(),
    glowHalo: createGlowHaloTexture(),
    rickshawArt: classicPanel,
    rickshawRoof: classicRoof,
    chargeZone: createChargeZoneTexture(),
    buildings: [0, 1, 2, 3, 4].map(createBuildingTexture),
    buildingBump: createBuildingBumpTexture(),
    shops: SHOP_SIGNS.map(createShopSignTexture),
    buses: BUS_LIVERIES.map(createBusSideTexture),
    busFront: createBusFrontTexture(),
    truckRear: createTruckRearTexture(),
    metroCoach: createMetroCoachTexture(),
    billboards: BILLBOARD_TEXTS.map((txt, idx) => createBillboardTexture(txt, idx)),
    plateAuto: createLicensePlateTexture('মামার রোড-৪২০', '#15803d', '#fef08a'),
    plateCar: createLicensePlateTexture('ঢাকা মেট্রো-গ ১২-৪৫', '#f8fafc', '#111827'),
    bdFlag: createBangladeshFlagTexture(),
    wallPosters: createWallPosterTextures(),
    streetSigns: createAvenueStreetSignTextures(),
    humanFaces: createHumanFaceTextures(),
    waterTex: createRealisticWaterTexture(),
    panelTextures: createModPanelTextures(classicPanel),
    roofTextures: createModRoofTextures(classicRoof),
    uTurnSign: createUTurnSignTexture(),
    uTurnRoad: createUTurnRoadDecalTexture(),
    michilBanners: createMichilBannerTextures()
  };
}

function createRealisticWaterTexture(): THREE.CanvasTexture {
  // Rich organic Buriganga / Padma River water texture with natural flowing currents & sunlit ripples!
  const S = 512;
  const [c, ctx] = makeCanvas(S, S);
  const grad = ctx.createLinearGradient(0, 0, S, S);
  grad.addColorStop(0, '#0a3342');
  grad.addColorStop(0.5, '#114d5c');
  grad.addColorStop(1, '#0c3b4a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, S, S);

  // Organic elongated wave strokes & current bands (zero dots or grid!)
  for (let i = 0; i < 420; i++) {
    const x = Math.random() * S;
    const y = Math.random() * S;
    const w = 24 + Math.random() * 90;
    const h = 2 + Math.random() * 5;
    const bright = Math.random();
    ctx.fillStyle =
      bright > 0.85
        ? 'rgba(253, 224, 155, 0.28)'
        : bright > 0.45
        ? 'rgba(45, 132, 148, 0.25)'
        : 'rgba(6, 28, 38, 0.32)';
    ctx.beginPath();
    ctx.ellipse(x, y, w * 0.5, h, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  return finalizeTexture(c, 4, 4, THREE.SRGBColorSpace);
}

function createModPanelTextures(classic: THREE.CanvasTexture): Record<ModPanelId, THREE.CanvasTexture> {
  // 1. SABBIR CODEX Photo Special Panel!
  const [cs, ctxs] = makeCanvas(512, 256);
  ctxs.fillStyle = '#071430';
  ctxs.fillRect(0, 0, 512, 256);
  ctxs.strokeStyle = '#38bdf8';
  ctxs.lineWidth = 10;
  ctxs.strokeRect(8, 8, 496, 240);
  ctxs.textAlign = 'center';
  ctxs.fillStyle = '#38bdf8';
  ctxs.font = '900 46px "Baloo Da 2", sans-serif';
  ctxs.fillText('SABBIR CODEX', 256, 115);
  ctxs.fillStyle = '#fde047';
  ctxs.font = '800 24px "Hind Siliguri", sans-serif';
  ctxs.fillText('সাব্বির ও মাজিদ এডিশন', 256, 168);
  const sabbirPanel = finalizeTexture(cs, 1, 1);
  sabbirPanel.wrapS = THREE.ClampToEdgeWrapping;
  sabbirPanel.wrapT = THREE.ClampToEdgeWrapping;
  const teamIm = new Image();
  teamIm.onload = () => {
    ctxs.drawImage(teamIm, 12, 12, 488, 232);
    ctxs.strokeStyle = '#38bdf8';
    ctxs.lineWidth = 10;
    ctxs.strokeRect(8, 8, 496, 240);
    sabbirPanel.needsUpdate = true;
  };
  teamIm.src = './art/dev-team.jpg?v=5';

  // 2. Bangladesh Flag & Royal Bengal Tiger Panel!
  const [cb, ctxb] = makeCanvas(512, 256);
  ctxb.fillStyle = '#006a4e';
  ctxb.fillRect(0, 0, 512, 256);
  ctxb.fillStyle = '#f42a41';
  ctxb.beginPath();
  ctxb.arc(256, 128, 72, 0, Math.PI * 2);
  ctxb.fill();
  ctxb.strokeStyle = '#fde047';
  ctxb.lineWidth = 10;
  ctxb.strokeRect(10, 10, 492, 236);
  ctxb.textAlign = 'center';
  ctxb.fillStyle = '#ffffff';
  ctxb.font = '900 36px "Baloo Da 2", sans-serif';
  ctxb.fillText('বাংলাদেশ • গর্বের রাস্তা', 256, 122);
  ctxb.fillStyle = '#fef08a';
  ctxb.font = '800 22px "Hind Siliguri", sans-serif';
  ctxb.fillText('SABBIR CODEX 🇧🇩', 256, 162);
  const bdPanel = finalizeTexture(cb, 1, 1);

  // 3. Cyber Neon Boss Panel!
  const [cn, ctxn] = makeCanvas(512, 256);
  const ng = ctxn.createLinearGradient(0, 0, 512, 256);
  ng.addColorStop(0, '#0f172a');
  ng.addColorStop(0.5, '#3b0764');
  ng.addColorStop(1, '#0c4a6e');
  ctxn.fillStyle = ng;
  ctxn.fillRect(0, 0, 512, 256);
  ctxn.strokeStyle = '#22d3ee';
  ctxn.lineWidth = 10;
  ctxn.strokeRect(10, 10, 492, 236);
  ctxn.textAlign = 'center';
  ctxn.fillStyle = '#f472b6';
  ctxn.font = '900 44px "Baloo Da 2", sans-serif';
  ctxn.fillText('⚡ CYBER MAMA ⚡', 256, 114);
  ctxn.fillStyle = '#22d3ee';
  ctxn.font = '800 24px "Hind Siliguri", sans-serif';
  ctxn.fillText('NO BRAKE • SABBIR CODEX', 256, 168);
  const cyberPanel = finalizeTexture(cn, 1, 1);

  // 4. Funny Mamar Rasta Slogan Panel!
  const [cf, ctxf] = makeCanvas(512, 256);
  ctxf.fillStyle = '#facc15';
  ctxf.fillRect(0, 0, 512, 256);
  ctxf.strokeStyle = '#b91c1c';
  ctxf.lineWidth = 12;
  ctxf.strokeRect(10, 10, 492, 236);
  ctxf.textAlign = 'center';
  ctxf.fillStyle = '#991b1b';
  ctxf.font = '900 38px "Baloo Da 2", sans-serif';
  ctxf.fillText('ব্রেক নাই — দোয়া করেন!', 256, 98);
  ctxf.fillStyle = '#18181b';
  ctxf.font = '800 26px "Hind Siliguri", sans-serif';
  ctxf.fillText('পিছনে হর্ন বাজাইলে চা ঢেলে দিবো!', 256, 152);
  ctxf.fillStyle = '#065f46';
  ctxf.font = '800 20px "Hind Siliguri", sans-serif';
  ctxf.fillText('SABBIR CODEX • পুরান ঢাকা', 256, 198);
  const funnyPanel = finalizeTexture(cf, 1, 1);

  return {
    classic_art: classic,
    sabbir_codex: sabbirPanel,
    bd_tiger: bdPanel,
    cyber_neon: cyberPanel,
    funny_slogan: funnyPanel
  };
}

function createModRoofTextures(classic: THREE.CanvasTexture): Record<ModRoofId, THREE.CanvasTexture> {
  const makeRoof = (c1: string, c2: string, border: string, sym: string) => {
    const [c, ctx] = makeCanvas(256, 256);
    const g = ctx.createLinearGradient(0, 0, 256, 256);
    g.addColorStop(0, c1);
    g.addColorStop(1, c2);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = border;
    ctx.fillRect(0, 0, 256, 22);
    ctx.fillRect(0, 234, 256, 22);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 44px "Baloo Da 2", sans-serif';
    ctx.fillText(sym, 128, 128);
    return finalizeTexture(c, 1, 1);
  };
  return {
    red_fringe: classic,
    gold_royal: makeRoof('#f59e0b', '#b45309', '#991b1b', '👑'),
    metro_blue: makeRoof('#0284c7', '#1e3a8a', '#fde047', '⚡'),
    carbon_sport: makeRoof('#18181b', '#09090b', '#22d3ee', 'SC')
  };
}

function createUTurnSignTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  ctx.fillStyle = '#1d4ed8';
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 12;
  ctx.strokeRect(10, 10, 236, 236);
  // Crisp white U-Turn arrow graphic!
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 22;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(86, 170);
  ctx.lineTo(86, 92);
  ctx.arc(128, 92, 42, Math.PI, 0, false);
  ctx.lineTo(170, 152);
  ctx.stroke();
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(170, 178);
  ctx.lineTo(142, 138);
  ctx.lineTo(198, 138);
  ctx.closePath();
  ctx.fill();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fde047';
  ctx.font = '800 32px "Baloo Da 2", sans-serif';
  ctx.fillText('ইউ-টার্ন', 128, 224);
  return finalizeTexture(c, 1, 1);
}

function createUTurnRoadDecalTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  ctx.clearRect(0, 0, 256, 256);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.lineWidth = 12;
  ctx.setLineDash([20, 14]);
  ctx.beginPath();
  ctx.arc(128, 136, 74, Math.PI, 0, false);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#fde047';
  ctx.textAlign = 'center';
  ctx.font = '800 34px "Baloo Da 2", sans-serif';
  ctx.fillText('🔄 ইউ-টার্ন', 128, 210);
  const tex = finalizeTexture(c, 1, 1);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createMichilBannerTextures(): THREE.CanvasTexture[] {
  const slogans = [
    { bg: '#dc2626', border: '#fde047', text: 'রং সাইডে অধিকার চাই • ব্রেক বাতিল করো!' },
    { bg: '#facc15', border: '#991b1b', text: 'চায়ের দাম ৫ টাকা চাই • মামার রাস্তা জিন্দাবাদ!' },
    { bg: '#1d4ed8', border: '#38bdf8', text: 'SABBIR CODEX জিন্দাবাদ • যানজট দূর করো!' }
  ];
  return slogans.map((s) => {
    const [c, ctx] = makeCanvas(512, 128);
    ctx.fillStyle = s.bg;
    ctx.fillRect(0, 0, 512, 128);
    ctx.strokeStyle = s.border;
    ctx.lineWidth = 8;
    ctx.strokeRect(5, 5, 502, 118);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = s.bg === '#facc15' ? '#18181b' : '#ffffff';
    ctx.font = '900 28px "Baloo Da 2", "Hind Siliguri", sans-serif';
    ctx.fillText(s.text, 256, 66, 476);
    return finalizeTexture(c, 1, 1);
  });
}

function createAvenueStreetSignTextures(): THREE.CanvasTexture[] {
  // Iconic crisp Bangladeshi street-level glowing avenue signboards matching the reference art!
  const signs: THREE.CanvasTexture[] = [];

  // 1. SABBIR CODEX Official Roadside Glowing Signboard!
  {
    const [c, ctx] = makeCanvas(512, 160);
    const g = ctx.createLinearGradient(0, 0, 512, 160);
    g.addColorStop(0, '#071636');
    g.addColorStop(0.5, '#0c2d6b');
    g.addColorStop(1, '#071636');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 160);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 7;
    ctx.strokeRect(5, 5, 502, 150);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 48px "Baloo Da 2", sans-serif';
    ctx.fillText('SABBIR CODEX', 256, 72, 470);
    ctx.fillStyle = '#fde047';
    ctx.font = '700 23px "Hind Siliguri", sans-serif';
    ctx.fillText('সাব্বির ও মাজিদ • মামার রাস্তা ৩ডি', 256, 122, 460);
    signs.push(finalizeTexture(c, 1, 1));
  }

  // 2. Iconic Crimson-Red Bangladesh Post Office (বাংলাদেশ ডাক বিভাগ) Signboard!
  {
    const [c, ctx] = makeCanvas(512, 160);
    const g = ctx.createLinearGradient(0, 0, 512, 160);
    g.addColorStop(0, '#b91c1c');
    g.addColorStop(1, '#dc2626');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 160);
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 7;
    ctx.strokeRect(5, 5, 502, 150);
    // Circular Postal Seal Emblem on left
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(84, 80, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(84, 80, 42, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.arc(84, 80, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fef08a';
    ctx.textAlign = 'center';
    ctx.font = '800 18px "Baloo Da 2", sans-serif';
    ctx.fillText('ডাক', 84, 86);
    // Crisp White Bengali Title
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 40px "Baloo Da 2", "Hind Siliguri", sans-serif';
    ctx.fillText('বাংলাদেশ ডাক বিভাগ', 318, 72, 340);
    ctx.fillStyle = '#fef08a';
    ctx.font = '700 22px "Hind Siliguri", sans-serif';
    ctx.fillText('সবার জন্য সেবা • ঢাকা', 318, 118, 340);
    signs.push(finalizeTexture(c, 1, 1));
  }

  // 3. Emerald Green Dhaka Metro & Highway Signboard
  {
    const [c, ctx] = makeCanvas(512, 160);
    const g = ctx.createLinearGradient(0, 0, 512, 160);
    g.addColorStop(0, '#065f46');
    g.addColorStop(1, '#047857');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 160);
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 6;
    ctx.strokeRect(4, 4, 504, 152);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 40px "Baloo Da 2", "Hind Siliguri", sans-serif';
    ctx.fillText('ঢাকা এক্সপ্রেসওয়ে ও মেট্রো', 256, 72, 470);
    ctx.fillStyle = '#fef08a';
    ctx.font = '700 23px "Hind Siliguri", sans-serif';
    ctx.fillText('রং সাইডে সাবধান • সুন্দর বাংলাদেশ', 256, 120, 460);
    signs.push(finalizeTexture(c, 1, 1));
  }

  // 4. Sabbir Codex & Majid Neon Studio Signboard
  {
    const [c, ctx] = makeCanvas(512, 160);
    const g = ctx.createLinearGradient(0, 0, 512, 160);
    g.addColorStop(0, '#0c1d4a');
    g.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 160);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.strokeRect(4, 4, 504, 152);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 38px "Baloo Da 2", "Hind Siliguri", sans-serif';
    ctx.fillText('সাব্বির Codex ও মাজিদ', 256, 70, 470);
    ctx.fillStyle = '#7dd3fc';
    ctx.font = '700 22px "Hind Siliguri", sans-serif';
    ctx.fillText('মামার রাস্তা ৩ডি • Dream Big, Build Better', 256, 118, 460);
    signs.push(finalizeTexture(c, 1, 1));
  }

  return signs;
}

function createBangladeshFlagTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 160);
  // Iconic Bangladeshi Bottle Green (#006a4e) & Crimson Sun (#f42a41) slightly offset toward hoist!
  ctx.fillStyle = '#006a4e';
  ctx.fillRect(0, 0, 256, 160);
  ctx.fillStyle = '#f42a41';
  ctx.beginPath();
  ctx.arc(114, 80, 48, 0, Math.PI * 2);
  ctx.fill();
  return finalizeTexture(c, 1, 1);
}

function createWallPosterTextures(): THREE.CanvasTexture[] {
  const specs = [
    { title: 'মামার কোচিং সেন্টার', sub: '১০০% জিপিএ-৫ ও রং সাইড গ্যারান্টি!', bg: '#fef08a', fg: '#991b1b' },
    { title: 'ব্রেক ছাড়া ড্রাইভিং স্কুল', sub: 'মাত্র ৩ দিনে দেশি টেসলা ওস্তাদ হোন', bg: '#e0f2fe', fg: '#1e3a8a' },
    { title: 'হাকিম কবিরাজি চিকিৎসা', sub: 'পাবলিক ধোলাইয়ের ব্যথা ১ দিনে গায়েব', bg: '#fce7f3', fg: '#831843' }
  ];
  return specs.map((s) => {
    const [c, ctx] = makeCanvas(256, 128);
    ctx.fillStyle = s.bg;
    ctx.fillRect(0, 0, 256, 128);
    ctx.strokeStyle = s.fg;
    ctx.lineWidth = 6;
    ctx.strokeRect(4, 4, 248, 120);
    ctx.textAlign = 'center';
    ctx.fillStyle = s.fg;
    ctx.font = '800 22px "Baloo Da 2", sans-serif';
    ctx.fillText(s.title, 128, 52, 234);
    ctx.fillStyle = '#18181b';
    ctx.font = '700 14px "Hind Siliguri", sans-serif';
    ctx.fillText(s.sub, 128, 88, 234);
    return finalizeTexture(c, 1, 1);
  });
}

function createHumanFaceTextures(): THREE.CanvasTexture[] {
  // 12 completely distinct skin tones + facial features (glasses, mustache, beard, bindi, smile!)
  const configs = [
    { skin: '#c68642', beard: true, glasses: false, bindi: false, smile: true },
    { skin: '#d8a472', beard: false, glasses: false, bindi: true, smile: true },
    { skin: '#a86432', beard: true, glasses: true, bindi: false, smile: false },
    { skin: '#d19760', beard: false, glasses: true, bindi: false, smile: true },
    { skin: '#b87338', beard: true, glasses: false, bindi: false, smile: false },
    { skin: '#e0b084', beard: false, glasses: false, bindi: true, smile: true },
    { skin: '#9f5e31', beard: false, glasses: false, bindi: false, smile: true },
    { skin: '#c88c52', beard: false, glasses: true, bindi: true, smile: true }
  ];
  return configs.map((cfg) => {
    const [c, ctx] = makeCanvas(128, 128);
    ctx.fillStyle = cfg.skin;
    ctx.fillRect(0, 0, 128, 128);

    // Subtle facial shading
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0, 86, 128, 42);

    // Front face region centered at u=0.5 (x=64)
    // Eyebrows
    ctx.fillStyle = '#18181b';
    ctx.fillRect(44, 44, 14, 4);
    ctx.fillRect(70, 44, 14, 4);
    // Eyes (white sclera + dark iris)
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(46, 52, 10, 6);
    ctx.fillRect(72, 52, 10, 6);
    ctx.fillStyle = '#09090b';
    ctx.fillRect(49, 53, 5, 5);
    ctx.fillRect(75, 53, 5, 5);

    if (cfg.glasses) {
      ctx.strokeStyle = '#111827';
      ctx.lineWidth = 3;
      ctx.strokeRect(43, 49, 16, 12);
      ctx.strokeRect(69, 49, 16, 12);
      ctx.beginPath();
      ctx.moveTo(59, 55);
      ctx.lineTo(69, 55);
      ctx.stroke();
    }
    if (cfg.bindi) {
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(64, 44, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    if (cfg.beard) {
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(49, 70, 30, 5); // Mustache
      ctx.fillStyle = 'rgba(24, 24, 27, 0.65)';
      ctx.fillRect(46, 82, 36, 16); // Chin beard
    }
    // Mouth
    ctx.strokeStyle = cfg.bindi ? '#be123c' : '#5c2d1f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (cfg.smile) {
      ctx.arc(64, 74, 8, 0.15 * Math.PI, 0.85 * Math.PI);
    } else {
      ctx.moveTo(56, 78);
      ctx.lineTo(72, 78);
    }
    ctx.stroke();

    const tex = finalizeTexture(c, 1, 1);
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  });
}

function createContactShadowTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 64);
  const grad = ctx.createRadialGradient(32, 32, 7, 32, 32, 30);
  grad.addColorStop(0, 'rgba(10, 8, 6, 0.72)');
  grad.addColorStop(0.65, 'rgba(10, 8, 6, 0.32)');
  grad.addColorStop(1, 'rgba(10, 8, 6, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const tex = finalizeTexture(c, 1, 1);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createGlowHaloTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(64, 64);
  const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
  grad.addColorStop(0.35, 'rgba(255, 240, 190, 0.52)');
  grad.addColorStop(1, 'rgba(255, 220, 120, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const tex = finalizeTexture(c, 1, 1);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createRoadTextureSet(): {
  albedo: THREE.CanvasTexture;
  bump: THREE.CanvasTexture;
  roughness: THREE.CanvasTexture;
} {
  const S = 512;
  const [c, ctx] = makeCanvas(S, S);
  const [cb, bctx] = makeCanvas(S, S);
  const [cr, rctx] = makeCanvas(S, S);

  // Rich weathered Old Dhaka charcoal asphalt (no blown-out glare!)
  ctx.fillStyle = '#26272b';
  ctx.fillRect(0, 0, S, S);
  bctx.fillStyle = '#808080';
  bctx.fillRect(0, 0, S, S);
  rctx.fillStyle = '#b4b4b4';
  rctx.fillRect(0, 0, S, S);

  // Subtle tire wear polish along driving lanes
  for (const lx of [76, 188, 324, 436]) {
    ctx.fillStyle = 'rgba(14, 14, 18, 0.24)';
    ctx.fillRect(lx - 26, 0, 14, S);
    ctx.fillRect(lx + 12, 0, 14, S);
    rctx.fillStyle = '#747474';
    rctx.fillRect(lx - 28, 0, 56, S);
  }

  // Fine crisp asphalt grain
  for (let i = 0; i < 3600; i++) {
    const x = Math.random() * S;
    const y = Math.random() * S;
    const v = 28 + Math.floor(Math.random() * 28);
    ctx.fillStyle = `rgb(${v},${v + 1},${v + 4})`;
    ctx.fillRect(x, y, 2, 2);
    const bv = 104 + Math.floor(Math.random() * 48);
    bctx.fillStyle = `rgb(${bv},${bv},${bv})`;
    bctx.fillRect(x, y, 2, 2);
  }

  // Subtle warm sunset-lit shoulder edge lines
  ctx.fillStyle = 'rgba(248, 250, 252, 0.88)';
  ctx.fillRect(10, 0, 6, S);
  ctx.fillRect(S - 16, 0, 6, S);

  // Crisp bright white dashed lane dividers!
  ctx.fillStyle = '#f8fafc';
  for (let y = 18; y < S; y += 84) {
    ctx.fillRect(126, y, 8, 44);
    ctx.fillRect(378, y, 8, 44);
  }

  // Iconic bold glowing DOUBLE GOLDEN-YELLOW SOLID CENTER LINES (exact match to reference!)
  ctx.fillStyle = '#facc15';
  ctx.fillRect(245, 0, 8, S);
  ctx.fillRect(259, 0, 8, S);

  return {
    albedo: finalizeTexture(c, 1, 2, THREE.SRGBColorSpace),
    bump: finalizeTexture(cb, 1, 2, THREE.NoColorSpace),
    roughness: finalizeTexture(cr, 1, 2, THREE.NoColorSpace)
  };
}

function drawArrow(ctx: CanvasRenderingContext2D, cx: number, cy: number, dir: number) {
  ctx.save();
  ctx.translate(cx, cy);
  if (dir > 0) ctx.rotate(Math.PI);
  ctx.beginPath();
  ctx.moveTo(0, -43);
  ctx.lineTo(17, -13);
  ctx.lineTo(7, -13);
  ctx.lineTo(7, 41);
  ctx.lineTo(-7, 41);
  ctx.lineTo(-7, -13);
  ctx.lineTo(-17, -13);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
void drawArrow;

function createSidewalkTextureSet(): { albedo: THREE.CanvasTexture; bump: THREE.CanvasTexture } {
  const S = 256;
  const [c, ctx] = makeCanvas(S, S);
  const [cb, bctx] = makeCanvas(S, S);

  // Bright clean modern Dhaka avenue concrete paving slabs + crisp Black & White curb edge!
  ctx.fillStyle = '#d8d4cc';
  ctx.fillRect(0, 0, S, S);
  bctx.fillStyle = '#909090';
  bctx.fillRect(0, 0, S, S);

  for (let x = 0; x < S; x += 32) {
    for (let y = 0; y < S; y += 32) {
      const shade = (x / 32 + y / 32) % 2 === 0 ? '#dcd7ce' : '#cfc9bf';
      ctx.fillStyle = shade;
      ctx.fillRect(x + 1, y + 1, 30, 30);
      bctx.strokeStyle = '#505050';
      bctx.lineWidth = 2;
      bctx.strokeRect(x, y, 32, 32);
    }
  }

  // Bold alternating Black & White Dhaka curb blocks along sidewalk edges!
  for (let y = 0; y < S; y += 32) {
    const col = (y / 32) % 2 === 0 ? '#f8fafc' : '#18181b';
    ctx.fillStyle = col;
    ctx.fillRect(0, y, 22, 32);
    ctx.fillRect(S - 22, y, 22, 32);
  }

  return {
    albedo: finalizeTexture(c, 1, 4, THREE.SRGBColorSpace),
    bump: finalizeTexture(cb, 1, 4, THREE.NoColorSpace)
  };
}

function createRickshawArtTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 256);

  const drawTextOverlay = () => {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.38)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetY = 2;

    ctx.fillStyle = '#991b1b';
    ctx.font = '800 29px "Baloo Da 2", sans-serif';
    ctx.fillText('মামার রাস্তা', 256, 103);

    ctx.fillStyle = '#064e3b';
    ctx.font = '700 16px "Hind Siliguri", sans-serif';
    ctx.fillText('মায়ের দোয়া • দেশি টেসলা', 256, 133);

    ctx.fillStyle = '#b45309';
    ctx.font = '800 13px "Hind Siliguri", sans-serif';
    ctx.fillText('সাব্বির Codex ও মাজিদ', 256, 157);
    ctx.restore();
  };

  const grad = ctx.createLinearGradient(0, 0, 512, 256);
  grad.addColorStop(0, '#0f766e');
  grad.addColorStop(0.5, '#047857');
  grad.addColorStop(1, '#115e59');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 10;
  ctx.strokeRect(10, 10, 492, 236);
  ctx.fillStyle = '#eab308';
  ctx.beginPath();
  ctx.arc(256, 128, 90, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#b91c1c';
  ctx.lineWidth = 5;
  ctx.stroke();
  drawTextOverlay();

  const tex = finalizeTexture(c, 1, 1);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    ctx.clearRect(0, 0, 512, 256);
    ctx.drawImage(img, 0, 0, 512, 256);
    drawTextOverlay();
    tex.needsUpdate = true;
  };
  img.src = './art/rickshaw-art-motif.jpg';

  return tex;
}

function createRickshawRoofTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  // Iconic vibrant crimson-red arched canopy with bold white ⚡ emblem & golden scalloped border!
  const rg = ctx.createLinearGradient(0, 0, 256, 256);
  rg.addColorStop(0, '#ef4444');
  rg.addColorStop(0.5, '#dc2626');
  rg.addColorStop(1, '#b91c1c');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, 256, 256);

  // Bright golden-yellow decorative fringe bands on both edges
  ctx.fillStyle = '#fde047';
  ctx.fillRect(0, 0, 256, 24);
  ctx.fillRect(0, 232, 256, 24);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 24, 256, 6);
  ctx.fillRect(0, 226, 256, 6);

  // Scallop dots
  ctx.fillStyle = '#b91c1c';
  for (let x = 12; x < 256; x += 24) {
    ctx.beginPath();
    ctx.arc(x, 12, 5, 0, Math.PI * 2);
    ctx.arc(x, 244, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Bold white Deshi Tesla ⚡ star/bolt emblem centered on roof!
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(142, 62);
  ctx.lineTo(94, 134);
  ctx.lineTo(128, 134);
  ctx.lineTo(112, 194);
  ctx.lineTo(164, 118);
  ctx.lineTo(130, 118);
  ctx.closePath();
  ctx.fill();
  return finalizeTexture(c, 1, 1);
}

function createChargeZoneTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 512);
  ctx.clearRect(0, 0, 256, 512);

  const bg = ctx.createRadialGradient(128, 256, 20, 128, 256, 230);
  bg.addColorStop(0, 'rgba(250, 204, 21, 0.46)');
  bg.addColorStop(1, 'rgba(234, 179, 8, 0.16)');
  ctx.fillStyle = bg;
  ctx.fillRect(10, 10, 236, 492);

  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 14;
  ctx.strokeRect(12, 12, 232, 488);
  ctx.save();
  ctx.strokeStyle = '#18181b';
  ctx.lineWidth = 10;
  ctx.setLineDash([22, 22]);
  ctx.strokeRect(12, 12, 232, 488);
  ctx.restore();

  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.moveTo(143, 105);
  ctx.lineTo(82, 238);
  ctx.lineTo(126, 238);
  ctx.lineTo(106, 355);
  ctx.lineTo(176, 214);
  ctx.lineTo(132, 214);
  ctx.closePath();
  ctx.fill();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#fef08a';
  ctx.font = '800 34px "Baloo Da 2", sans-serif';
  ctx.fillText('অবৈধ চার্জ', 128, 412);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 21px "Hind Siliguri", sans-serif';
  ctx.fillText('ধীরে চলুন ⚡', 128, 450);

  const tex = finalizeTexture(c, 1, 1);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createBuildingTexture(variant: number): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 512);
  // 100% Authentic OLD DHAKA (পুরান ঢাকা — শাঁখারী বাজার / চকবাজার / সদরঘাট) Weathered Heritage Facades!
  const palettes = [
    { wall: '#b87a56', brick: '#7c2d12', trim: '#5c2b1a', arch: '#e7d5bc', shutter: '#14532d' }, // Terracotta Old Brick
    { wall: '#c9a366', brick: '#854d0e', trim: '#6b4226', arch: '#f3e5c8', shutter: '#1e3a8a' }, // Aged Mustard Lime Plaster
    { wall: '#9f6b63', brick: '#7f1d1d', trim: '#4c1d1d', arch: '#e8d5d0', shutter: '#0f766e' }, // Faded Heritage Rose
    { wall: '#779396', brick: '#475569', trim: '#2f4858', arch: '#d7e3e4', shutter: '#7c2d12' }, // Old Colonial Teal-Blue
    { wall: '#bfa78a', brick: '#78350f', trim: '#574231', arch: '#ebe0cf', shutter: '#1e293b' }  // Weathered Limestone Chawkbazar
  ];
  const p = palettes[variant % palettes.length];
  ctx.fillStyle = p.wall;
  ctx.fillRect(0, 0, 256, 512);

  // Authentic Old Dhaka peeling plaster + exposed red-brick patches & monsoon damp streaks!
  for (let i = 0; i < 16; i++) {
    const bx = Math.random() * 210;
    const by = Math.random() * 420;
    const bw = 20 + Math.random() * 44;
    const bh = 14 + Math.random() * 28;
    ctx.fillStyle = p.brick;
    ctx.globalAlpha = 0.34;
    ctx.fillRect(bx, by, bw, bh);
    // Tiny mortar brick lines inside exposed patches
    ctx.strokeStyle = 'rgba(235, 220, 200, 0.32)';
    ctx.lineWidth = 1;
    for (let my = by + 5; my < by + bh; my += 6) {
      ctx.beginPath();
      ctx.moveTo(bx, my);
      ctx.lineTo(bx + bw, my);
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;
  }
  // Vertical monsoon weathering & moss streaks
  for (let i = 0; i < 36; i++) {
    ctx.fillStyle = i % 3 === 0 ? 'rgba(34, 56, 38, 0.14)' : 'rgba(28, 22, 18, 0.13)';
    ctx.fillRect(Math.random() * 256, Math.random() * 430, 5 + Math.random() * 14, 38 + Math.random() * 110);
  }

  // Heritage Old Dhaka floors with decorative plaster cornices, arched colonial windows & iron grilles!
  const fh = 416 / 6;
  for (let f = 0; f < 6; f++) {
    const y = f * fh;
    ctx.fillStyle = p.trim;
    ctx.fillRect(0, y, 256, 7);
    ctx.fillStyle = p.arch;
    ctx.fillRect(0, y + 7, 256, 3);

    for (let w = 0; w < 3; w++) {
      const wx = 18 + w * 80;
      const wy = y + 18;
      // Decorative plaster arch frame
      ctx.fillStyle = p.arch;
      ctx.fillRect(wx - 4, wy - 4, 58, 48);
      ctx.beginPath();
      ctx.arc(wx + 25, wy + 2, 29, Math.PI, 0);
      ctx.fill();

      // Lit warm room glow or shaded wooden louver window
      const lit = (f + w + variant) % 3 === 0;
      ctx.fillStyle = lit ? '#fde68a' : '#1c1917';
      ctx.fillRect(wx, wy + 2, 50, 40);
      ctx.beginPath();
      ctx.arc(wx + 25, wy + 4, 25, Math.PI, 0);
      ctx.fill();

      // Traditional Bangladeshi iron window grill bars (লোহার গ্রিল)!
      ctx.strokeStyle = '#18181b';
      ctx.lineWidth = 2;
      for (let gx = wx + 10; gx < wx + 46; gx += 10) {
        ctx.beginPath();
        ctx.moveTo(gx, wy - 10);
        ctx.lineTo(gx, wy + 42);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(wx, wy + 18);
      ctx.lineTo(wx + 50, wy + 18);
      ctx.stroke();

      // Open wooden green/brown window shutters on sides
      ctx.fillStyle = p.shutter;
      ctx.fillRect(wx - 8, wy + 4, 7, 38);
      ctx.fillRect(wx + 51, wy + 4, 7, 38);
    }
  }

  // Authentic Old Dhaka ground floor: corrugated steel shop shutters + warm lit shops!
  ctx.fillStyle = '#292524';
  ctx.fillRect(0, 418, 256, 94);
  for (const sx of [10, 134]) {
    const open = (variant + sx) % 3 !== 0;
    ctx.fillStyle = open ? '#fef3c7' : p.shutter;
    ctx.fillRect(sx, 428, 112, 78);
    ctx.strokeStyle = '#18181b';
    ctx.lineWidth = 2;
    if (!open) {
      // Rolling steel shop shutter horizontal ribs!
      for (let ry = 434; ry < 504; ry += 7) {
        ctx.beginPath();
        ctx.moveTo(sx, ry);
        ctx.lineTo(sx + 112, ry);
        ctx.stroke();
      }
    } else {
      ctx.strokeRect(sx, 428, 112, 78);
    }
  }

  return finalizeTexture(c, 1, 1);
}

function createBuildingBumpTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(128, 256);
  ctx.fillStyle = '#888888';
  ctx.fillRect(0, 0, 128, 256);
  const fh = 210 / 6;
  for (let f = 0; f < 6; f++) {
    const y = f * fh;
    ctx.fillStyle = '#d8d8d8';
    ctx.fillRect(0, y, 128, 4);
    for (let w = 0; w < 3; w++) {
      ctx.fillStyle = '#303030';
      ctx.fillRect(9 + w * 40, y + 8, 27, 22);
    }
  }
  return finalizeTexture(c, 1, 1, THREE.NoColorSpace);
}

function createShopSignTexture(spec: ShopSignSpec): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 128);
  const grad = ctx.createLinearGradient(0, 0, 512, 128);
  grad.addColorStop(0, spec.bg);
  grad.addColorStop(1, '#111827');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 128);

  ctx.strokeStyle = spec.accent;
  ctx.lineWidth = 6;
  ctx.strokeRect(5, 5, 502, 118);

  ctx.fillStyle = spec.accent;
  ctx.beginPath();
  ctx.arc(58, 64, 34, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#18181b';
  ctx.font = '34px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const emojiMap: Record<ShopSignSpec['icon'], string> = {
    tea: '☕',
    biryani: '🍲',
    pharmacy: '➕',
    salon: '✂️',
    battery: '⚡',
    hardware: '🔧',
    fuchka: '🥣',
    bakery: '🥐'
  };
  ctx.fillText(emojiMap[spec.icon], 58, 67);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 30px "Baloo Da 2", "Hind Siliguri", sans-serif';
  ctx.fillText(spec.name, 106, 52, 388);
  ctx.fillStyle = spec.accent;
  ctx.font = '700 16px "Hind Siliguri", sans-serif';
  ctx.fillText(spec.sub, 106, 88, 388);

  return finalizeTexture(c, 1, 1);
}

function createBusSideTexture(spec: BusLiverySpec): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 256);
  ctx.fillStyle = spec.bottom;
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = spec.top;
  ctx.fillRect(0, 0, 512, 112);
  ctx.fillStyle = spec.stripe;
  ctx.fillRect(0, 109, 512, 21);

  for (let i = 0; i < 7; i++) {
    const wx = 17 + i * 69;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(wx, 22, 57, 68);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3;
    ctx.strokeRect(wx, 22, 57, 68);
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#111827';
  ctx.font = '800 42px "Baloo Da 2", sans-serif';
  ctx.fillText(spec.name, 256, 172);
  ctx.fillStyle = spec.top;
  ctx.font = '800 18px "Hind Siliguri", sans-serif';
  ctx.fillText(spec.route, 256, 202);
  ctx.fillStyle = '#b91c1c';
  ctx.font = '700 15px "Hind Siliguri", sans-serif';
  ctx.fillText(spec.slogan, 256, 228, 470);

  return finalizeTexture(c, 1, 1);
}

function createBusFrontTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  // Modern glossy red-orange express coach front matching reference screenshot!
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#ef4444');
  g.addColorStop(1, '#b91c1c');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);

  // Glowing Amber LED Destination Board
  ctx.fillStyle = '#111827';
  ctx.fillRect(16, 12, 224, 30);
  ctx.fillStyle = '#fde047';
  ctx.textAlign = 'center';
  ctx.font = '800 18px "Baloo Da 2", sans-serif';
  ctx.fillText('ঢাকা এক্সপ্রেস • গেটলক', 128, 33);

  // Huge panoramic reflective tinted blue glass windshield!
  const wg = ctx.createLinearGradient(0, 50, 0, 152);
  wg.addColorStop(0, '#38bdf8');
  wg.addColorStop(0.45, '#1e3a8a');
  wg.addColorStop(1, '#fb923c');
  ctx.fillStyle = wg;
  ctx.fillRect(14, 50, 228, 98);
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 4;
  ctx.strokeRect(14, 50, 228, 98);

  // Sleek black chrome grille
  ctx.fillStyle = '#18181b';
  ctx.fillRect(58, 166, 140, 44);
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 2;
  for (let y = 175; y <= 202; y += 9) {
    ctx.beginPath();
    ctx.moveTo(64, y);
    ctx.lineTo(192, y);
    ctx.stroke();
  }

  ctx.fillStyle = '#15803d';
  ctx.fillRect(78, 220, 100, 24);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 12px "Hind Siliguri", sans-serif';
  ctx.fillText('ঢাকা মেট্রো-ব ১১', 128, 236);
  return finalizeTexture(c, 1, 1);
}

function createTruckRearTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(256, 256);
  ctx.fillStyle = '#14532d';
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 9;
  ctx.strokeRect(8, 8, 240, 240);
  ctx.fillStyle = '#dc2626';
  ctx.fillRect(36, 46, 184, 54);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fef08a';
  ctx.font = '800 33px "Baloo Da 2", sans-serif';
  ctx.fillText('হর্ন দিন', 128, 83);
  ctx.fillStyle = '#ffffff';
  ctx.font = '800 22px "Hind Siliguri", sans-serif';
  ctx.fillText('দূরত্ব বজায় রাখুন', 128, 144);
  ctx.fillStyle = '#facc15';
  ctx.font = '800 18px "Hind Siliguri", sans-serif';
  ctx.fillText('ঢাকা মেট্রো-ট ১১-৪২০৯', 128, 208);
  return finalizeTexture(c, 1, 1);
}

function createMetroCoachTexture(): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 128);
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(0, 0, 512, 128);
  ctx.fillStyle = '#15803d';
  ctx.fillRect(0, 84, 512, 23);
  ctx.fillStyle = '#dc2626';
  ctx.fillRect(0, 76, 512, 8);
  ctx.fillStyle = '#0f172a';
  for (let i = 0; i < 6; i++) {
    ctx.fillRect(21 + i * 81, 17, 63, 46);
  }
  return finalizeTexture(c, 1, 1);
}

function createBillboardTexture(text: string, idx: number): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(512, 112);
  const bgs = ['#0b1630', '#7f1d1d', '#1e3a8a', '#064e3b'];
  ctx.fillStyle = bgs[idx % bgs.length];
  ctx.fillRect(0, 0, 512, 112);
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 6;
  ctx.strokeRect(4, 4, 504, 104);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#fef08a';
  ctx.font = '800 24px "Baloo Da 2", "Hind Siliguri", sans-serif';
  ctx.fillText(text, 256, 58, 476);

  const tex = finalizeTexture(c, 1, 1);

  // Stamp SABBIR CODEX & Majid's real Team Poster onto highway overbridge billboards!
  if (idx === 0 || idx === 1 || idx === 3 || idx === 5) {
    const img = new Image();
    img.onload = () => {
      ctx.fillStyle = '#07122a';
      ctx.fillRect(0, 0, 512, 112);
      ctx.drawImage(img, 8, 6, 126, 100);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 5;
      ctx.strokeRect(4, 4, 504, 104);
      ctx.textAlign = 'left';
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 30px "Baloo Da 2", sans-serif';
      ctx.fillText('SABBIR CODEX', 148, 38, 350);
      ctx.fillStyle = '#fde047';
      ctx.font = '800 18px "Hind Siliguri", sans-serif';
      ctx.fillText('মামার রাস্তা ৩ডি • সাব্বির ও মাজিদ টিম', 148, 78, 350);
      tex.needsUpdate = true;
    };
    img.src = './art/dev-team.jpg?v=5';
  }
  return tex;
}

function createLicensePlateTexture(text: string, bg: string, fg: string): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas(128, 48);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 128, 48);
  ctx.strokeStyle = fg;
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, 124, 44);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fg;
  ctx.font = '800 16px "Hind Siliguri", sans-serif';
  ctx.fillText(text, 64, 26, 116);
  return finalizeTexture(c, 1, 1);
}
