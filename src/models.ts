import * as THREE from 'three';
import { GlbAssetBank, GlbAssetKey } from './glbLoader';
import { TextureBank } from './textures';
import { PlayableVehicleId, VehicleModConfig, defaultModConfig } from './types';

export interface PlayerVehicleRig {
  root: THREE.Group;
  bodyGroup: THREE.Group;
  frontFork: THREE.Group | null;
  wheels: THREE.Object3D[];
  batteryGlowMat: THREE.MeshStandardMaterial | null;
  tailLightMat: THREE.MeshBasicMaterial;
  chaosAura: THREE.Mesh;
  hoverJets: THREE.Mesh[];
  driverHead: THREE.Object3D | null;
  roofHookPoint: THREE.Vector3;
  baseHoverY: number;
}

const wheelGeoSmall = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 18);
wheelGeoSmall.rotateZ(Math.PI / 2);
const wheelGeoMedium = new THREE.CylinderGeometry(0.39, 0.39, 0.27, 18);
wheelGeoMedium.rotateZ(Math.PI / 2);
const wheelGeoBig = new THREE.CylinderGeometry(0.58, 0.58, 0.36, 18);
wheelGeoBig.rotateZ(Math.PI / 2);

const tireMat = new THREE.MeshStandardMaterial({ color: 0x151518, roughness: 0.9, metalness: 0.08 });
const rimMat = new THREE.MeshStandardMaterial({ color: 0xe4e4e7, roughness: 0.2, metalness: 0.9 });
const glassMat = new THREE.MeshPhysicalMaterial({
  color: 0x0b1322,
  roughness: 0.06,
  metalness: 0.15,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  transparent: true,
  opacity: 0.84,
  envMapIntensity: 1.8
});
const chromeMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f5, roughness: 0.12, metalness: 0.96, envMapIntensity: 1.6 });
const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x222227, roughness: 0.48, metalness: 0.72 });

function makeWheel(geo: THREE.BufferGeometry, rimColor = 0xe4e4e7): THREE.Mesh {
  const wheel = new THREE.Mesh(geo, tireMat);
  const rMat =
    rimColor === 0xe4e4e7
      ? rimMat
      : new THREE.MeshStandardMaterial({ color: rimColor, roughness: 0.22, metalness: 0.88 });
  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.19, 0.19, 0.28, 12).rotateZ(Math.PI / 2),
    rMat
  );
  wheel.add(hub);
  wheel.castShadow = true;
  return wheel;
}

function addContactShadow(parent: THREE.Group, textures: TextureBank, w: number, l: number) {
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(w, l),
    new THREE.MeshBasicMaterial({
      map: textures.contactShadow,
      transparent: true,
      depthWrite: false
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.03;
  parent.add(shadow);
}

function addGlowSprite(
  parent: THREE.Object3D,
  textures: TextureBank,
  colorHex: number,
  size: number,
  x: number,
  y: number,
  z: number
) {
  const mat = new THREE.SpriteMaterial({
    map: textures.glowHalo,
    color: colorHex,
    transparent: true,
    opacity: 0.72,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const s = new THREE.Sprite(mat);
  s.scale.set(size, size, 1);
  s.position.set(x, y, z);
  parent.add(s);
}

/**
 * Helper: Creates an ultra-clean beveled 3D body silhouette along X width from a 2D (z, y) side profile!
 */
function extrudeSideProfile(pointsZY: [number, number][], width: number, bevel = 0.08): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(pointsZY[0][0], pointsZY[0][1]);
  for (let i = 1; i < pointsZY.length; i++) {
    shape.lineTo(pointsZY[i][0], pointsZY[i][1]);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.05, width - bevel * 2),
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: bevel,
    bevelThickness: bevel
  });
  geo.center();
  geo.rotateY(Math.PI / 2);
  geo.computeVertexNormals();
  return geo;
}

function makeClearcoatPaint(colorHex: number, metalness = 0.65, roughness = 0.2): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color: colorHex,
    metalness,
    roughness,
    clearcoat: 1.0,
    clearcoatRoughness: 0.07,
    envMapIntensity: 1.55
  });
}

// =========================================================================
// PLAYABLE GARAGE VEHICLES (9 TOTALLY DISTINCT REAL 3D & SCULPTED MODELS!)
// =========================================================================

export function createPlayerVehicle(
  vehicleId: PlayableVehicleId,
  textures: TextureBank,
  glbs: GlbAssetBank,
  mods: VehicleModConfig = defaultModConfig()
): PlayerVehicleRig {
  let rig: PlayerVehicleRig;
  switch (vehicleId) {
    case 'deshi_tesla':
      rig = buildDeshiTeslaRig(textures, mods);
      break;
    case 'dhaka_cng':
      rig = buildPlayableCngRig(textures);
      break;
    case 'bd_tractor':
      rig = buildPlayableTractorRig(textures, glbs);
      break;
    case 'street_cruiser':
      rig = buildPlayableStreetBikeRig(textures, glbs);
      break;
    case 'ninja_h2r':
      rig = buildPlayableNinjaH2RRig(textures, glbs);
      break;
    case 'dhaka_leguna':
      rig = buildPlayableLegunaRig(textures, glbs);
      break;
    case 'cybertruck':
      rig = buildPlayableCybertruckRig(textures);
      break;
    case 'lamborghini':
      rig = buildPlayableLamborghiniRig(textures, glbs);
      break;
    case 'flying_car':
      rig = buildPlayableFlyingCarRig(textures, glbs);
      break;
  }

  // Apply Universal Underglow Neon & Top Mod Accessories cleanly to any selected vehicle!
  if (mods.wheelNeon === 'neon_cyan' || mods.wheelNeon === 'neon_rgb') {
    const glowHex = mods.wheelNeon === 'neon_cyan' ? 0x22d3ee : 0xf43f5e;
    const underglow = new THREE.Mesh(
      new THREE.RingGeometry(0.95, 1.48, 28).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: glowHex, transparent: true, opacity: 0.65, side: THREE.DoubleSide })
    );
    underglow.position.y = 0.06;
    rig.root.add(underglow);
  }
  const topY = rig.roofHookPoint.y;
  if (mods.topAccessory === 'sabbir_sign') {
    const signBox = new THREE.Mesh(
      new THREE.BoxGeometry(1.18, 0.34, 0.14),
      new THREE.MeshBasicMaterial({ map: textures.streetSigns[0] })
    );
    signBox.position.set(0, topY + 0.18, 0.15);
    rig.bodyGroup.add(signBox);
  } else if (mods.topAccessory === 'bd_flag') {
    const miniFlag = createBangladeshFlag(textures, 1.35);
    miniFlag.scale.setScalar(0.55);
    miniFlag.position.set(0.55, topY - 0.1, 0.72);
    rig.bodyGroup.add(miniFlag);
  } else if (mods.topAccessory === 'turbo_wing') {
    const wingMat = makeClearcoatPaint(0x111827, 0.78, 0.18);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.08, 0.36), wingMat);
    blade.position.set(0, topY + 0.22, 1.05);
    blade.rotation.x = 0.15;
    const sL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.18), wingMat);
    sL.position.set(-0.55, topY + 0.08, 1.05);
    const sR = sL.clone();
    sR.position.x = 0.55;
    rig.bodyGroup.add(blade, sL, sR);
  }

  return rig;
}

function makeChaosAura(radius = 1.9): THREE.Mesh {
  const aura = new THREE.Mesh(
    new THREE.TorusGeometry(radius, 0.14, 10, 32).rotateX(Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.9 })
  );
  aura.position.set(0, 0.15, 0);
  aura.visible = false;
  return aura;
}

/**
 * Re-sculpted Deshi Tesla (Dhaka Easy-Bike / Battery Auto) with FULL MODDING SUPPORT!
 * Customize body paint, rear Rickshaw Art / SABBIR CODEX panel, canopy roof, rims & accessories!
 */
function buildDeshiTeslaRig(textures: TextureBank, mods: VehicleModConfig): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 2.25, 3.35);

  const mainGreen = makeClearcoatPaint(mods.bodyColor || 0x047857, 0.42, 0.24);
  const yellowTrim = makeClearcoatPaint(0xfacc15, 0.34, 0.24);
  const rimCol = mods.wheelNeon === 'gold_spoke' ? 0xfacc15 : mods.wheelNeon === 'neon_cyan' ? 0x22d3ee : 0xe4e4e7;

  // Curved chassis floor pan
  const chassisGeo = extrudeSideProfile(
    [
      [-1.32, 0.0],
      [1.36, 0.0],
      [1.36, 0.22],
      [-1.16, 0.24]
    ],
    1.54,
    0.04
  );
  const chassis = new THREE.Mesh(chassisGeo, darkMetalMat);
  chassis.position.set(0, 0.42, 0.04);
  chassis.castShadow = true;
  bodyGroup.add(chassis);

  // Smooth aerodynamic curved front cowl & mudguard
  const noseGeo = extrudeSideProfile(
    [
      [-0.58, 0.0],
      [0.44, 0.0],
      [0.48, 0.72],
      [0.18, 1.02],
      [-0.24, 0.9],
      [-0.52, 0.56],
      [-0.6, 0.2]
    ],
    1.32,
    0.09
  );
  const nose = new THREE.Mesh(noseGeo, mainGreen);
  nose.position.set(0, 0.88, -0.92);
  nose.castShadow = true;
  bodyGroup.add(nose);

  // Rounded tubular front chrome bull-bar bumper
  const bumper = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.045, 1.38, 10).rotateZ(Math.PI / 2),
    chromeMat
  );
  bumper.position.set(0, 0.52, -1.48);
  bodyGroup.add(bumper);

  // Chrome-rimmed round headlight + warm glow
  const lampBezel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.16, 0.14, 16).rotateX(Math.PI / 2),
    chromeMat
  );
  lampBezel.position.set(0, 0.9, -1.44);
  const headlight = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.14, 0.16, 16).rotateX(Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xfffbeb })
  );
  headlight.position.set(0, 0.9, -1.46);
  bodyGroup.add(lampBezel, headlight);
  addGlowSprite(bodyGroup, textures, 0xfef08a, 0.95, 0, 0.9, -1.55);

  // Slanted rounded windshield frame
  const windFrameGeo = extrudeSideProfile(
    [
      [-0.06, 0.0],
      [0.06, 0.0],
      [0.24, 0.72],
      [0.12, 0.72]
    ],
    1.34,
    0.03
  );
  const windFrame = new THREE.Mesh(windFrameGeo, yellowTrim);
  windFrame.position.set(0, 1.62, -0.78);
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.14, 0.62, 0.06), glassMat);
  windshield.position.set(0, 1.62, -0.78);
  windshield.rotation.x = 0.24;
  bodyGroup.add(windFrame, windshield);

  // Curved flared side skirts + arched wheel fenders!
  const sideGeo = extrudeSideProfile(
    [
      [-0.78, 0.0],
      [0.82, 0.0],
      [0.84, 0.74],
      [-0.56, 0.68],
      [-0.78, 0.44]
    ],
    0.16,
    0.04
  );
  const leftSide = new THREE.Mesh(sideGeo, mainGreen);
  leftSide.position.set(-0.74, 0.86, 0.56);
  leftSide.castShadow = true;
  const rightSide = leftSide.clone();
  rightSide.position.x = 0.74;
  bodyGroup.add(leftSide, rightSide);

  // Swappable Moddable Rear Panel (Rickshaw Art / SABBIR CODEX / BD Flag / Cyber / Funny!)
  const chosenPanelTex = textures.panelTextures[mods.panelStyle] || textures.rickshawArt;
  const rearArtMat = new THREE.MeshStandardMaterial({
    map: chosenPanelTex,
    roughness: 0.25,
    metalness: 0.2,
    envMapIntensity: 1.2
  });
  const rearPanel = new THREE.Mesh(new THREE.BoxGeometry(1.54, 1.06, 0.12), [
    mainGreen,
    mainGreen,
    yellowTrim,
    mainGreen,
    rearArtMat,
    mainGreen
  ]);
  rearPanel.position.set(0, 1.08, 1.32);
  rearPanel.castShadow = true;
  bodyGroup.add(rearPanel);

  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(0.68, 0.22, 0.04),
    new THREE.MeshBasicMaterial({ map: textures.plateAuto })
  );
  plate.position.set(0, 0.44, 1.4);
  bodyGroup.add(plate);

  // Driver with expressive face + red gamcha
  const driver = createSeatedDriver(textures, 0x1d4ed8, true);
  driver.position.set(0, 0.82, -0.32);
  bodyGroup.add(driver);

  // Slender curved chrome canopy pillars
  const pillarGeo = new THREE.CylinderGeometry(0.032, 0.032, 1.12, 8);
  for (const [px, py, pz] of [
    [-0.72, 1.5, -0.68],
    [0.72, 1.5, -0.68],
    [-0.72, 1.54, 1.24],
    [0.72, 1.54, 1.24]
  ]) {
    const p = new THREE.Mesh(pillarGeo, chromeMat);
    p.position.set(px, py, pz);
    bodyGroup.add(p);
  }

  // Moddable Arched Canopy Roof + Vibrant Fringe!
  const chosenRoofTex = textures.roofTextures[mods.roofStyle] || textures.rickshawRoof;
  const canopyArch = new THREE.Mesh(
    new THREE.CylinderGeometry(0.94, 0.94, 2.42, 18, 1, false, 0, Math.PI)
      .rotateZ(Math.PI / 2)
      .rotateY(Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: chosenRoofTex, roughness: 0.36, metalness: 0.14, side: THREE.DoubleSide })
  );
  canopyArch.scale.set(0.95, 0.34, 1.0);
  canopyArch.position.set(0, 2.02, 0.24);
  canopyArch.castShadow = true;
  const canopyFringe = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.11, 2.48), yellowTrim);
  canopyFringe.position.set(0, 1.98, 0.24);
  bodyGroup.add(canopyArch, canopyFringe);

  // Under-seat glowing EV battery indicator
  const batteryGlowMat = new THREE.MeshStandardMaterial({
    color: 0x22c55e,
    emissive: 0x22c55e,
    emissiveIntensity: 1.1,
    roughness: 0.25
  });
  const batteryBox = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.2, 0.42), batteryGlowMat);
  batteryBox.position.set(0, 0.42, 0.94);
  bodyGroup.add(batteryBox);

  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
  for (const sx of [-0.56, 0.56]) {
    const tl = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.08, 12).rotateX(Math.PI / 2), tailLightMat);
    tl.position.set(sx, 0.62, 1.38);
    bodyGroup.add(tl);
  }

  const frontFork = new THREE.Group();
  frontFork.position.set(0, 0.34, -1.2);
  const frontWheel = makeWheel(wheelGeoSmall, rimCol);
  frontFork.add(frontWheel);
  const frontFender = new THREE.Mesh(
    new THREE.TorusGeometry(0.36, 0.06, 8, 14, Math.PI).rotateY(Math.PI / 2),
    yellowTrim
  );
  frontFender.position.set(0, 0.06, 0);
  const handleBar = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.74, 8).rotateZ(Math.PI / 2), chromeMat);
  handleBar.position.set(0, 0.94, 0.26);
  frontFork.add(frontFender, handleBar);
  bodyGroup.add(frontFork);

  const wheelRL = makeWheel(wheelGeoSmall, rimCol);
  wheelRL.position.set(-0.78, 0.34, 0.9);
  const wheelRR = makeWheel(wheelGeoSmall, rimCol);
  wheelRR.position.set(0.78, 0.34, 0.9);
  bodyGroup.add(wheelRL, wheelRR);

  const chaosAura = makeChaosAura(1.85);
  root.add(chaosAura);

  return {
    root,
    bodyGroup,
    frontFork,
    wheels: [frontWheel, wheelRL, wheelRR],
    batteryGlowMat,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: driver.userData.head || null,
    roofHookPoint: new THREE.Vector3(0, 2.24, 0.24),
    baseHoverY: 0
  };
}

function buildPlayableCngRig(textures: TextureBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = createDhakaCNG(textures);
  root.add(bodyGroup);
  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
  for (const sx of [-0.52, 0.52]) {
    const tl = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.08, 12).rotateX(Math.PI / 2), tailLightMat);
    tl.position.set(sx, 0.66, 1.44);
    bodyGroup.add(tl);
  }
  const chaosAura = makeChaosAura(1.8);
  root.add(chaosAura);
  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels: [],
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: null,
    roofHookPoint: new THREE.Vector3(0, 2.0, 0.2),
    baseHoverY: 0
  };
}

/**
 * Playable Bangladeshi Tractor Power (Uses real CC0 3D k_tractor.glb from GitHub!)
 */
function buildPlayableTractorRig(textures: TextureBank, glbs: GlbAssetBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 2.65, 4.35);

  const glb = glbs.clone('k_tractor');
  if (glb) {
    bodyGroup.add(glb);
  } else {
    // Detailed sculpted fallback tractor while GLB loads
    const redPaint = makeClearcoatPaint(0xdc2626, 0.45, 0.26);
    const hoodGeo = extrudeSideProfile(
      [
        [-1.85, 0.45],
        [0.4, 0.45],
        [0.4, 1.38],
        [-1.6, 1.34],
        [-1.85, 1.1]
      ],
      1.15,
      0.08
    );
    const hood = new THREE.Mesh(hoodGeo, redPaint);
    hood.position.set(0, 0.95, -0.45);
    hood.castShadow = true;
    const rearW1 = makeWheel(wheelGeoBig, 0xfacc15);
    rearW1.scale.setScalar(1.42);
    rearW1.position.set(-0.98, 0.82, 0.85);
    const rearW2 = rearW1.clone();
    rearW2.position.x = 0.98;
    const frontW1 = makeWheel(wheelGeoMedium, 0xfacc15);
    frontW1.position.set(-0.82, 0.42, -1.28);
    const frontW2 = frontW1.clone();
    frontW2.position.x = 0.82;
    bodyGroup.add(hood, rearW1, rearW2, frontW1, frontW2);
  }

  // Chrome vertical tractor exhaust stack + Bangladeshi farmer driver
  const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 1.45, 10), chromeMat);
  stack.position.set(0.55, 1.65, -0.78);
  bodyGroup.add(stack);

  const driver = createSeatedDriver(textures, 0x15803d, true);
  driver.position.set(0, 1.15, 0.45);
  bodyGroup.add(driver);

  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
  for (const sx of [-0.72, 0.72]) {
    const tl = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.08, 10).rotateX(Math.PI / 2), tailLightMat);
    tl.position.set(sx, 1.18, 1.72);
    bodyGroup.add(tl);
  }

  const chaosAura = makeChaosAura(2.35);
  root.add(chaosAura);

  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels: [],
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: driver.userData.head || null,
    roofHookPoint: new THREE.Vector3(0, 2.35, 0.25),
    baseHoverY: 0
  };
}

function buildPlayableStreetBikeRig(textures: TextureBank, glbs: GlbAssetBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 1.15, 2.45);

  const glb = glbs.clone('moto_street');
  if (glb) {
    bodyGroup.add(glb);
  } else {
    bodyGroup.add(createSculptedSportsBike(0xf97316, 0x18181b, false));
  }
  const rider = createSeatedBiker(0x1e293b, 0xf97316);
  rider.position.set(0, 0.78, 0.16);
  bodyGroup.add(rider);

  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
  const tl = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.08), tailLightMat);
  tl.position.set(0, 0.88, 1.04);
  bodyGroup.add(tl);

  const chaosAura = makeChaosAura(1.55);
  root.add(chaosAura);
  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels: [],
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: rider.userData.head || null,
    roofHookPoint: new THREE.Vector3(0, 1.65, 0.1),
    baseHoverY: 0
  };
}

function buildPlayableNinjaH2RRig(textures: TextureBank, glbs: GlbAssetBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 1.2, 2.6);

  const glb = glbs.clone('superbike', (g) => {
    const mirrorCarbon = makeClearcoatPaint(0x121417, 0.88, 0.14);
    const kawasakiGreen = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x16a34a,
      emissiveIntensity: 0.45,
      metalness: 0.72,
      roughness: 0.22
    });
    g.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        const n = m.name.toLowerCase();
        if (n.includes('frame') || n.includes('hub') || n.includes('eixo')) {
          m.material = kawasakiGreen;
        } else if (n.includes('break') || n.includes('disc') || n.includes('exhaust')) {
          m.material = chromeMat;
        } else if (n.includes('tire') || n.includes('wheel') || n.includes('seat')) {
          m.material = tireMat;
        } else {
          m.material = mirrorCarbon;
        }
      }
    });
  });

  if (glb) {
    bodyGroup.add(glb);
  } else {
    bodyGroup.add(createSculptedSportsBike(0x111316, 0x22c55e, true));
  }

  const wingMat = makeClearcoatPaint(0x0f172a, 0.7, 0.2);
  const neonGreen = new THREE.MeshBasicMaterial({ color: 0x4ade80 });
  for (const sx of [-0.36, 0.36]) {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.05, 0.24), wingMat);
    wing.position.set(sx, 0.86, -0.78);
    wing.rotation.z = sx > 0 ? 0.35 : -0.35;
    wing.rotation.y = sx > 0 ? -0.25 : 0.25;
    bodyGroup.add(wing);

    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.06, 0.08), neonGreen);
    hl.position.set(sx * 0.42, 0.92, -1.04);
    bodyGroup.add(hl);
  }

  const rider = createSeatedBiker(0x111827, 0x22c55e);
  rider.position.set(0, 0.84, 0.12);
  rider.rotation.x = -0.32;
  bodyGroup.add(rider);

  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff1e42 });
  const tl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.07, 0.08), tailLightMat);
  tl.position.set(0, 0.98, 1.06);
  bodyGroup.add(tl);

  const chaosAura = makeChaosAura(1.65);
  root.add(chaosAura);

  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels: [],
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: rider.userData.head || null,
    roofHookPoint: new THREE.Vector3(0, 1.55, 0.05),
    baseHoverY: 0
  };
}

/**
 * Playable Dhaka Leguna Express — uses real 3D k_van.glb tinted Dhaka sky-blue + roof carrier!
 */
function buildPlayableLegunaRig(textures: TextureBank, glbs: GlbAssetBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 2.35, 4.75);

  const legunaBlue = makeClearcoatPaint(0x0284c7, 0.48, 0.24);
  const glb = glbs.clone('k_van', (g) => {
    g.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        const mn = ((m.material as THREE.Material)?.name || '').toLowerCase();
        if (mn.includes('paint')) {
          m.material = legunaBlue;
        }
      }
    });
  });

  if (glb) {
    bodyGroup.add(glb);
    // Authentic Dhaka Leguna roof luggage rail & yellow trim stripe
    const carrier = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.14, 2.8), chromeMat);
    carrier.position.set(0, 2.08, 0.35);
    bodyGroup.add(carrier);
  } else {
    bodyGroup.add(createDhakaMicrobus(textures));
  }

  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
  for (const sx of [-0.68, 0.68]) {
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 0.08), tailLightMat);
    tl.position.set(sx, 0.85, 2.36);
    bodyGroup.add(tl);
  }

  const chaosAura = makeChaosAura(2.35);
  root.add(chaosAura);
  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels: [],
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: null,
    roofHookPoint: new THREE.Vector3(0, 2.2, 0.3),
    baseHoverY: 0
  };
}

function buildPlayableCybertruckRig(textures: TextureBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 2.55, 5.2);

  const steelMat = new THREE.MeshPhysicalMaterial({
    color: 0xd4d8de,
    metalness: 0.94,
    roughness: 0.19,
    clearcoat: 0.55,
    clearcoatRoughness: 0.18,
    envMapIntensity: 1.75
  });

  const bodyGeo = extrudeSideProfile(
    [
      [-2.45, 0.0],
      [2.4, 0.0],
      [2.45, 0.85],
      [0.05, 1.48],
      [-2.38, 0.64]
    ],
    2.04,
    0.04
  );
  const body = new THREE.Mesh(bodyGeo, steelMat);
  body.position.set(0, 1.15, 0);
  body.castShadow = true;
  body.receiveShadow = true;
  bodyGroup.add(body);

  const glassGeo = extrudeSideProfile(
    [
      [-1.72, 0.0],
      [1.82, 0.12],
      [0.05, 0.68]
    ],
    1.86,
    0.02
  );
  const canopy = new THREE.Mesh(glassGeo, glassMat);
  canopy.position.set(0, 1.54, 0.05);
  bodyGroup.add(canopy);

  const skirt = new THREE.Mesh(new THREE.BoxGeometry(2.14, 0.34, 4.92), darkMetalMat);
  skirt.position.set(0, 0.5, 0);
  bodyGroup.add(skirt);

  const frontBar = new THREE.Mesh(
    new THREE.BoxGeometry(1.98, 0.09, 0.1),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  frontBar.position.set(0, 1.06, -2.44);
  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff1e1e });
  const rearBar = new THREE.Mesh(new THREE.BoxGeometry(1.98, 0.1, 0.1), tailLightMat);
  rearBar.position.set(0, 1.24, 2.44);
  bodyGroup.add(frontBar, rearBar);

  const wheels: THREE.Object3D[] = [];
  for (const [wx, wz] of [
    [-1.05, -1.52],
    [1.05, -1.52],
    [-1.05, 1.52],
    [1.05, 1.52]
  ]) {
    const w = makeWheel(wheelGeoMedium, 0x27272a);
    w.scale.set(1.22, 1.22, 1.22);
    w.position.set(wx, 0.48, wz);
    bodyGroup.add(w);
    wheels.push(w);
  }

  const chaosAura = makeChaosAura(2.65);
  root.add(chaosAura);
  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels,
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: null,
    roofHookPoint: new THREE.Vector3(0, 1.95, 0),
    baseHoverY: 0
  };
}

function buildPlayableLamborghiniRig(textures: TextureBank, glbs: GlbAssetBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 2.55, 5.0);

  const lamboPaint = makeClearcoatPaint(0x84cc16, 0.72, 0.15);
  const glb = glbs.clone('supercar', (g) => {
    g.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        const name = (m.name || '').toLowerCase();
        const matName = ((m.material as THREE.Material)?.name || '').toLowerCase();
        if (name === 'body' || matName.includes('body') || matName.includes('paint') || matName.includes('red')) {
          if (!matName.includes('leather') && !matName.includes('tail')) {
            m.material = lamboPaint;
          }
        }
      }
    });
  });

  if (glb) {
    bodyGroup.add(glb);
  } else {
    const wedgeGeo = extrudeSideProfile(
      [
        [-2.25, 0.0],
        [2.25, 0.0],
        [2.2, 0.72],
        [0.85, 0.94],
        [-0.35, 0.96],
        [-1.35, 0.52],
        [-2.25, 0.34]
      ],
      2.02,
      0.06
    );
    const body = new THREE.Mesh(wedgeGeo, lamboPaint);
    body.position.set(0, 0.76, 0);
    body.castShadow = true;
    bodyGroup.add(body);
  }

  const carbonMat = makeClearcoatPaint(0x111317, 0.75, 0.18);
  const wingBlade = new THREE.Mesh(new THREE.BoxGeometry(2.06, 0.07, 0.42), carbonMat);
  wingBlade.position.set(0, 1.18, 1.98);
  wingBlade.rotation.x = 0.12;
  wingBlade.castShadow = true;
  const strutL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.34, 0.24), carbonMat);
  strutL.position.set(-0.62, 1.0, 1.95);
  const strutR = strutL.clone();
  strutR.position.x = 0.62;
  const endplateL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.24, 0.48), lamboPaint);
  endplateL.position.set(-1.04, 1.16, 1.98);
  const endplateR = endplateL.clone();
  endplateR.position.x = 1.04;
  bodyGroup.add(wingBlade, strutL, strutR, endplateL, endplateR);

  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff1122 });
  for (const sx of [-0.68, 0.68]) {
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.08, 0.06), tailLightMat);
    tl.position.set(sx, 0.74, 2.26);
    bodyGroup.add(tl);
  }

  const chaosAura = makeChaosAura(2.55);
  root.add(chaosAura);

  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels: [],
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets: [],
    driverHead: null,
    roofHookPoint: new THREE.Vector3(0, 1.25, 0),
    baseHoverY: 0
  };
}

/**
 * Playable Future Flying Car 2099 — powered by real 3D k_future_car.glb + glowing hover turbines!
 */
function buildPlayableFlyingCarRig(textures: TextureBank, glbs: GlbAssetBank): PlayerVehicleRig {
  const root = new THREE.Group();
  const bodyGroup = new THREE.Group();
  root.add(bodyGroup);
  addContactShadow(root, textures, 3.0, 5.1);

  const pearlWhite = makeClearcoatPaint(0xf1f5f9, 0.65, 0.12);
  const obsidian = makeClearcoatPaint(0x0f172a, 0.85, 0.16);
  const cyanGlow = new THREE.MeshBasicMaterial({ color: 0x22d3ee });

  const glb = glbs.clone('k_future_car', (g) => {
    g.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        const mn = ((m.material as THREE.Material)?.name || '').toLowerCase();
        if (mn.includes('paint')) m.material = pearlWhite;
      }
    });
  });

  if (glb) {
    bodyGroup.add(glb);
  } else {
    const hullGeo = extrudeSideProfile(
      [
        [-2.35, 0.25],
        [-1.1, 0.0],
        [1.8, 0.02],
        [2.3, 0.56],
        [1.1, 0.96],
        [-0.55, 1.02],
        [-1.75, 0.54]
      ],
      1.95,
      0.1
    );
    const hull = new THREE.Mesh(hullGeo, pearlWhite);
    hull.position.set(0, 0.62, 0);
    hull.castShadow = true;
    bodyGroup.add(hull);
  }

  const hoverJets: THREE.Mesh[] = [];
  for (const sx of [-1.25, 1.25]) {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.09, 1.45), obsidian);
    wing.position.set(sx, 0.56, 0.25);
    wing.rotation.z = sx > 0 ? 0.18 : -0.18;
    const trim = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.04, 0.08), cyanGlow);
    trim.position.set(sx, 0.58, -0.46);
    bodyGroup.add(wing, trim);

    for (const sz of [-1.05, 1.15]) {
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.24, 0.2, 16), obsidian);
      pod.position.set(sx * 0.92, 0.22, sz);
      const jet = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.06, 8, 20).rotateX(Math.PI / 2), cyanGlow);
      jet.position.set(sx * 0.92, 0.08, sz);
      bodyGroup.add(pod, jet);
      hoverJets.push(jet);
    }
  }

  const tailLightMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  for (const sx of [-0.52, 0.52]) {
    const boost = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.28, 14).rotateX(Math.PI / 2), tailLightMat);
    boost.position.set(sx, 0.62, 2.3);
    bodyGroup.add(boost);
    hoverJets.push(boost);
    addGlowSprite(bodyGroup, textures, 0x22d3ee, 1.15, sx, 0.62, 2.48);
  }
  addGlowSprite(bodyGroup, textures, 0x38bdf8, 1.4, 0, 0.05, 0);

  const chaosAura = makeChaosAura(2.7);
  root.add(chaosAura);
  return {
    root,
    bodyGroup,
    frontFork: null,
    wheels: [],
    batteryGlowMat: null,
    tailLightMat,
    chaosAura,
    hoverJets,
    driverHead: null,
    roofHookPoint: new THREE.Vector3(0, 1.55, 0),
    baseHoverY: 1.05
  };
}

// =========================================================================
// REAL 3D GLB & CURVED SCULPTED TRAFFIC VEHICLES (ZERO CUBEY BLOCKS!)
// =========================================================================

export function createTrafficGlbOrCustom(
  glbKey: GlbAssetKey,
  textures: TextureBank,
  glbs: GlbAssetBank,
  fallbackFn: () => THREE.Group,
  tintHex?: number
): THREE.Group {
  const g = new THREE.Group();
  const isBike = glbKey === 'moto_street' || glbKey === 'superbike';
  const isHeavy = glbKey === 'k_truck' || glbKey === 'k_truck_flat' || glbKey === 'k_garbage_truck';
  addContactShadow(g, textures, isBike ? 1.1 : isHeavy ? 3.1 : 2.35, isBike ? 2.3 : isHeavy ? 7.8 : 4.65);

  // Rich deep realistic car paint palette (NEVER washed-out plain white boxes!)
  const defaultColors: Partial<Record<GlbAssetKey, number>> = {
    k_sedan: 0x1e3a8a,
    k_sedan_sports: 0xb91c1c,
    k_hatchback: 0x0f766e,
    k_suv: 0x18181b,
    k_suv_luxury: 0x1e293b,
    k_taxi: 0xeab308,
    k_van: 0x0284c7,
    k_delivery: 0x15803d,
    k_delivery_flat: 0xc2410c,
    k_truck: 0x991b1b,
    k_truck_flat: 0x1d4ed8,
    k_garbage_truck: 0x166534,
    k_tractor: 0xdc2626,
    k_tractor_shovel: 0xd97706,
    k_race: 0xea580c,
    delivery_van: 0x0f766e
  };
  const chosenHex = tintHex ?? defaultColors[glbKey];

  const customizer = (root: THREE.Group) => {
    const paint = chosenHex !== undefined ? makeClearcoatPaint(chosenHex, 0.62, 0.2) : null;
    root.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        const n = (m.name || '').toLowerCase();
        const mn = ((m.material as THREE.Material)?.name || '').toLowerCase();
        if (glbKey === 'superbike' && paint) {
          m.material = n.includes('tire') || n.includes('wheel') || n.includes('seat') ? tireMat : paint;
        } else if (mn.includes('window') || mn.includes('glass')) {
          m.material = glassMat;
        } else if (mn.includes('tire') || mn.includes('rubber') || n.includes('wheel')) {
          if (!mn.includes('rim') && !mn.includes('metal')) m.material = tireMat;
        } else if (paint && (mn.includes('paint') || mn.includes('body') || mn.includes('main'))) {
          m.material = paint;
        } else if (m.material && 'color' in m.material && glbKey !== 'k_ambulance' && glbKey !== 'k_police') {
          // Darken overly bright washed-out default white Kenney meshes!
          const sm = m.material as THREE.MeshStandardMaterial;
          if (sm.color && sm.color.r > 0.85 && sm.color.g > 0.85 && sm.color.b > 0.85 && paint) {
            m.material = paint;
          }
        }
      }
    });
  };

  const glb = glbs.clone(glbKey, customizer);

  if (glb) {
    g.add(glb);
    if (isBike) {
      const rider = createSeatedBiker(0x1e293b, tintHex ?? 0xef4444);
      rider.position.set(0, 0.78, 0.14);
      g.add(rider);
      addGlowSprite(g, textures, 0xfffbeb, 0.85, 0, 0.88, -1.08);
    } else {
      // Automatically attach REAL glowing 3D headlights, warm light halos, crimson taillights & BD plate to EVERY GLB car!
      glb.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(glb);
      const sz = box.getSize(new THREE.Vector3());
      const halfW = Math.max(0.55, sz.x * 0.36);
      const frontZ = box.min.z - 0.03;
      const rearZ = box.max.z + 0.03;
      const lampY = Math.max(0.58, box.min.y + sz.y * 0.4);

      const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
      const tlMat = new THREE.MeshBasicMaterial({ color: 0xff1e22 });
      for (const sx of [-halfW, halfW]) {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.15, 0.08), hlMat);
        hl.position.set(sx, lampY, frontZ);
        addGlowSprite(g, textures, 0xfff3c4, 1.05, sx, lampY, frontZ - 0.12);

        const tl = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.08), tlMat);
        tl.position.set(sx, lampY + 0.04, rearZ);
        g.add(hl, tl);
      }

      // Chrome front radiator grille & Dhaka Metro number plate!
      const grille = new THREE.Mesh(new THREE.BoxGeometry(halfW * 1.15, 0.18, 0.06), darkMetalMat);
      grille.position.set(0, lampY - 0.04, frontZ - 0.01);
      const plate = new THREE.Mesh(
        new THREE.BoxGeometry(0.54, 0.17, 0.04),
        new THREE.MeshBasicMaterial({ map: textures.plateCar })
      );
      plate.position.set(0, lampY - 0.12, rearZ + 0.02);
      g.add(grille, plate);

      // Glowing roof beacon bar for Dhaka Police & Ambulance!
      if (glbKey === 'k_police' || glbKey === 'k_ambulance') {
        const beaconRed = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.22), new THREE.MeshBasicMaterial({ color: 0xff2222 }));
        beaconRed.position.set(-0.24, box.max.y + 0.08, -0.15);
        const beaconBlue = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.22), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
        beaconBlue.position.set(0.24, box.max.y + 0.08, -0.15);
        addGlowSprite(g, textures, 0xef4444, 1.1, -0.24, box.max.y + 0.12, -0.15);
        addGlowSprite(g, textures, 0x38bdf8, 1.1, 0.24, box.max.y + 0.12, -0.15);
        g.add(beaconRed, beaconBlue);
      }
    }
    return g;
  }
  return fallbackFn();
}

export function createSculptedSedan(colorHex: number, textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 2.45, 4.75);
  const paint = makeClearcoatPaint(colorHex, 0.62, 0.18);

  const geo = extrudeSideProfile(
    [
      [-2.12, 0.0],
      [2.12, 0.0],
      [2.1, 0.62],
      [1.38, 0.74],
      [0.88, 1.18],
      [-0.55, 1.2],
      [-1.18, 0.72],
      [-2.08, 0.56]
    ],
    1.86,
    0.08
  );
  const body = new THREE.Mesh(geo, paint);
  body.position.set(0, 0.96, 0);
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.42, 1.72), glassMat);
  glass.position.set(0, 1.28, 0.14);
  g.add(glass);

  const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
  const tlMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
  for (const sx of [-0.66, 0.66]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.15, 0.08), hlMat);
    hl.position.set(sx, 0.74, -2.14);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.08), tlMat);
    tl.position.set(sx, 0.76, 2.14);
    g.add(hl, tl);
  }
  const plate = new THREE.Mesh(
    new THREE.BoxGeometry(0.56, 0.18, 0.04),
    new THREE.MeshBasicMaterial({ map: textures.plateCar })
  );
  plate.position.set(0, 0.56, 2.16);
  g.add(plate);

  for (const [wx, wz] of [
    [-0.93, -1.28],
    [0.93, -1.28],
    [-0.93, 1.28],
    [0.93, 1.28]
  ]) {
    const w = makeWheel(wheelGeoMedium);
    w.position.set(wx, 0.39, wz);
    g.add(w);
  }
  return g;
}

export function createSculptedSUV(colorHex: number, textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 2.6, 5.1);
  const paint = makeClearcoatPaint(colorHex, 0.65, 0.2);

  const geo = extrudeSideProfile(
    [
      [-2.25, 0.0],
      [2.25, 0.0],
      [2.2, 1.48],
      [-0.78, 1.5],
      [-1.32, 0.88],
      [-2.22, 0.76]
    ],
    2.02,
    0.09
  );
  const body = new THREE.Mesh(geo, paint);
  body.position.set(0, 1.18, 0);
  body.castShadow = true;
  g.add(body);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.54, 2.9), glassMat);
  glass.position.set(0, 1.54, 0.5);
  g.add(glass);

  const spare = makeWheel(wheelGeoMedium, 0x18181b);
  spare.rotation.y = Math.PI / 2;
  spare.position.set(0, 1.05, 2.34);
  g.add(spare);

  const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
  const tlMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
  for (const sx of [-0.74, 0.74]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.08), hlMat);
    hl.position.set(sx, 0.94, -2.28);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.36, 0.08), tlMat);
    tl.position.set(sx, 1.05, 2.28);
    g.add(hl, tl);
  }

  for (const [wx, wz] of [
    [-1.02, -1.42],
    [1.02, -1.42],
    [-1.02, 1.42],
    [1.02, 1.42]
  ]) {
    const w = makeWheel(wheelGeoMedium);
    w.scale.setScalar(1.16);
    w.position.set(wx, 0.45, wz);
    g.add(w);
  }
  return g;
}

export function createDhakaMicrobus(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 2.45, 5.2);
  const paint = makeClearcoatPaint(0xe2e8f0, 0.52, 0.22);

  const geo = extrudeSideProfile(
    [
      [-2.35, 0.0],
      [2.35, 0.0],
      [2.32, 1.62],
      [-1.55, 1.62],
      [-2.18, 0.88],
      [-2.35, 0.56]
    ],
    1.9,
    0.08
  );
  const body = new THREE.Mesh(geo, paint);
  body.position.set(0, 1.18, 0);
  body.castShadow = true;
  g.add(body);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(1.94, 0.56, 3.6), glassMat);
  glass.position.set(0, 1.54, 0.2);
  g.add(glass);

  const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
  const tlMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
  for (const sx of [-0.68, 0.68]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.18, 0.08), hlMat);
    hl.position.set(sx, 0.78, -2.38);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.42, 0.08), tlMat);
    tl.position.set(sx, 0.96, 2.38);
    g.add(hl, tl);
  }

  for (const [wx, wz] of [
    [-0.95, -1.45],
    [0.95, -1.45],
    [-0.95, 1.45],
    [0.95, 1.45]
  ]) {
    const w = makeWheel(wheelGeoMedium);
    w.position.set(wx, 0.4, wz);
    g.add(w);
  }
  return g;
}

export function createDeliveryScooter(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 1.0, 2.05);
  const bodyMat = makeClearcoatPaint(0x0ea5e9, 0.45, 0.22);
  const boxMat = new THREE.MeshStandardMaterial({ color: 0xdb2777, roughness: 0.4 });

  // Sculpted curved step-through Vespa/Scooter profile!
  const scooterGeo = extrudeSideProfile(
    [
      [-0.86, 0.18],
      [0.74, 0.18],
      [0.86, 0.68],
      [0.14, 0.72],
      [-0.32, 0.36],
      [-0.58, 0.92],
      [-0.84, 0.88]
    ],
    0.5,
    0.05
  );
  const body = new THREE.Mesh(scooterGeo, bodyMat);
  body.position.set(0, 0.62, 0);
  body.castShadow = true;

  const deliveryBox = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.54, 0.54), boxMat);
  deliveryBox.position.set(0, 1.18, 0.72);
  deliveryBox.castShadow = true;

  const rider = createSeatedBiker(0xdb2777, 0xf8fafc);
  rider.position.set(0, 0.76, 0.02);

  const wf = makeWheel(wheelGeoSmall);
  wf.scale.setScalar(0.82);
  wf.position.set(0, 0.27, -0.7);
  const wr = wf.clone();
  wr.position.z = 0.66;
  g.add(body, deliveryBox, rider, wf, wr);
  return g;
}

function createSculptedSportsBike(bodyHex: number, frameHex: number, winglets: boolean): THREE.Group {
  const g = new THREE.Group();
  const fairing = makeClearcoatPaint(bodyHex, 0.78, 0.16);
  const frame = new THREE.MeshStandardMaterial({ color: frameHex, metalness: 0.7, roughness: 0.25 });
  const bodyGeo = extrudeSideProfile(
    [
      [-0.95, 0.35],
      [0.85, 0.48],
      [0.4, 0.84],
      [-0.45, 0.88],
      [-0.95, 0.65]
    ],
    0.44,
    0.04
  );
  const mesh = new THREE.Mesh(bodyGeo, fairing);
  mesh.position.set(0, 0.72, 0);
  mesh.castShadow = true;
  const trellis = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.92), frame);
  trellis.position.set(0, 0.64, 0.05);
  const wf = makeWheel(wheelGeoSmall);
  wf.position.set(0, 0.34, -0.76);
  const wr = makeWheel(wheelGeoSmall);
  wr.position.set(0, 0.34, 0.76);
  g.add(mesh, trellis, wf, wr);
  if (winglets) {
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.05, 0.22), frame);
    w.position.set(0, 0.82, -0.7);
    g.add(w);
  }
  return g;
}

/**
 * Re-sculpted Authentic Dhaka Green Bajaj-style CNG Auto-Rickshaw!
 * Curved tear-drop nose, arched curved yellow/green tarpaulin roof, tubular grill door (NO cubes!).
 */
export function createDhakaCNG(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 1.95, 3.15);
  const cngGreen = makeClearcoatPaint(0x15803d, 0.4, 0.25);
  const cngYellow = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.45, metalness: 0.14 });

  // Sculpted curved Bajaj-style lower body & teardrop front cowl!
  const shellGeo = extrudeSideProfile(
    [
      [-1.44, 0.12],
      [1.36, 0.1],
      [1.42, 0.92],
      [0.45, 0.92],
      [-0.65, 0.86],
      [-1.08, 0.98],
      [-1.46, 0.56]
    ],
    1.44,
    0.09
  );
  const shell = new THREE.Mesh(shellGeo, cngGreen);
  shell.position.set(0, 0.78, 0.02);
  shell.castShadow = true;
  g.add(shell);

  // Curved arched yellow CNG canvas roof canopy!
  const roofArch = new THREE.Mesh(
    new THREE.CylinderGeometry(0.74, 0.78, 2.26, 16, 1, false, 0, Math.PI)
      .rotateZ(Math.PI / 2)
      .rotateY(Math.PI / 2),
    cngYellow
  );
  roofArch.scale.set(0.98, 0.48, 1.0);
  roofArch.position.set(0, 1.62, 0.22);
  roofArch.castShadow = true;
  g.add(roofArch);

  // Curved slanted front windshield + round headlight
  const wind = new THREE.Mesh(new THREE.BoxGeometry(1.16, 0.54, 0.06), glassMat);
  wind.position.set(0, 1.46, -0.94);
  wind.rotation.x = 0.26;
  const hlBezel = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.15, 0.12, 14).rotateX(Math.PI / 2), chromeMat);
  hlBezel.position.set(0, 0.84, -1.46);
  const hl = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.12, 0.14, 14).rotateX(Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xfffbeb })
  );
  hl.position.set(0, 0.84, -1.48);
  g.add(wind, hlBezel, hl);

  // Iconic Dhaka CNG metal side cage bars & chrome roof rack
  for (const sx of [-0.71, 0.71]) {
    for (let r = 0; r < 3; r++) {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.25, 6).rotateX(Math.PI / 2), darkMetalMat);
      bar.position.set(sx, 1.15 + r * 0.14, 0.28);
      g.add(bar);
    }
    const postF = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.65, 8), darkMetalMat);
    postF.position.set(sx, 1.38, -0.82);
    const postB = postF.clone();
    postB.position.z = 1.24;
    g.add(postF, postB);
  }
  const rack = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.025, 6, 16).rotateX(Math.PI / 2), chromeMat);
  rack.scale.set(1.0, 1.0, 1.45);
  rack.position.set(0, 1.98, 0.3);
  g.add(rack);

  const driver = createSeatedDriver(textures, 0x0f766e, false);
  driver.scale.setScalar(0.84);
  driver.position.set(0, 0.72, -0.44);
  g.add(driver);

  const wf = makeWheel(wheelGeoSmall);
  wf.position.set(0, 0.34, -1.16);
  const wrl = makeWheel(wheelGeoSmall);
  wrl.position.set(-0.74, 0.34, 0.92);
  const wrr = makeWheel(wheelGeoSmall);
  wrr.position.set(0.74, 0.34, 0.92);
  g.add(wf, wrl, wrr);
  return g;
}

/**
 * Re-sculpted Authentic Dhaka Pedal Rickshaw — curved fan canopy hood, slender cycle frame,
 * Rickshaw Art back plate, NO boxy blocks!
 */
export function createPedalRickshaw(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 1.7, 2.75);
  const hoodColors = [0xec4899, 0x06b6d4, 0xf97316, 0x8b5cf6, 0x16a34a];
  const hc = hoodColors[Math.floor(Math.random() * hoodColors.length)];
  const hoodMat = new THREE.MeshStandardMaterial({ color: hc, roughness: 0.45, side: THREE.DoubleSide });
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3, metalness: 0.75 });

  // Slender bicycle frame connecting front fork to rear passenger carriage
  const mainTube = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 1.55, 8).rotateX(Math.PI / 2), darkMetalMat);
  mainTube.position.set(0, 0.58, -0.32);
  const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.85, 8), chromeMat);
  fork.position.set(0, 0.72, -1.04);
  fork.rotation.x = 0.24;
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.62, 8).rotateZ(Math.PI / 2), chromeMat);
  handle.position.set(0, 1.12, -0.96);
  g.add(mainTube, fork, handle);

  // Sculpted curved wooden/cushioned passenger bench & Rickshaw Art back plate!
  const benchGeo = extrudeSideProfile(
    [
      [-0.68, 0.0],
      [0.64, 0.0],
      [0.72, 0.88],
      [0.52, 0.88],
      [0.44, 0.32],
      [-0.64, 0.28]
    ],
    1.18,
    0.04
  );
  const bench = new THREE.Mesh(benchGeo, hoodMat);
  bench.position.set(0, 0.82, 0.56);
  bench.castShadow = true;
  g.add(bench);

  // Classic Curved Folding Fan Hood (curved quarter-sphere arch — iconic Bangladeshi Rickshaw!)
  const curvedHood = new THREE.Mesh(
    new THREE.CylinderGeometry(0.68, 0.72, 1.24, 14, 1, false, 0, Math.PI * 0.78).rotateZ(Math.PI / 2),
    hoodMat
  );
  curvedHood.position.set(0, 1.38, 0.66);
  curvedHood.rotation.x = -0.35;
  curvedHood.castShadow = true;
  const brassRib = new THREE.Mesh(new THREE.TorusGeometry(0.69, 0.024, 6, 16, Math.PI * 0.78).rotateY(Math.PI / 2), brassMat);
  brassRib.position.set(0.62, 1.38, 0.66);
  brassRib.rotation.x = -0.35;
  const brassRibL = brassRib.clone();
  brassRibL.position.x = -0.62;
  g.add(curvedHood, brassRib, brassRibL);

  // Rickshaw Art back plate!
  const artPlate = new THREE.Mesh(
    new THREE.PlaneGeometry(1.1, 0.52),
    new THREE.MeshBasicMaterial({ map: textures.rickshawArt })
  );
  artPlate.position.set(0, 0.86, 1.29);
  g.add(artPlate);

  const puller = createRealisticHuman(textures, 'puller');
  puller.scale.setScalar(0.84);
  puller.position.set(0, 0.24, -0.66);
  g.add(puller);

  // Slender large spoked rickshaw wheels
  const wf = makeWheel(wheelGeoSmall, 0xe4e4e7);
  wf.scale.set(0.55, 1.0, 1.0);
  wf.position.set(0, 0.34, -1.08);
  const wrl = makeWheel(wheelGeoMedium, 0xfacc15);
  wrl.scale.set(0.52, 1.08, 1.08);
  wrl.position.set(-0.66, 0.42, 0.68);
  const wrr = wrl.clone();
  wrr.position.x = 0.66;
  g.add(wf, wrl, wrr);
  return g;
}

/**
 * Re-sculpted Dhaka Local Bus — curved arched roof crown, rounded beveled bumper, angled windshield & roof rail!
 */
export function createLocalBus(textures: TextureBank, idx: number): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 3.45, 10.6);

  const sideMat = new THREE.MeshStandardMaterial({
    map: textures.buses[idx % textures.buses.length],
    roughness: 0.38,
    metalness: 0.28
  });
  const frontMat = new THREE.MeshStandardMaterial({
    map: textures.busFront,
    roughness: 0.35,
    metalness: 0.24
  });
  // Modern glossy red / golden-yellow express bus colors matching reference screenshot!
  const accentColors = [0xdc2626, 0xf59e0b, 0x0284c7, 0xe11d48];
  const roofPaint = makeClearcoatPaint(accentColors[idx % accentColors.length], 0.45, 0.22);

  const body = new THREE.Mesh(new THREE.BoxGeometry(2.68, 2.55, 9.5), [
    sideMat,
    sideMat,
    roofPaint,
    darkMetalMat,
    frontMat,
    frontMat
  ]);
  body.position.set(0, 1.9, 0);
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  // Curved arched glossy bus roof crown
  const roofCrown = new THREE.Mesh(
    new THREE.CylinderGeometry(1.36, 1.36, 9.45, 16, 1, false, 0, Math.PI)
      .rotateZ(Math.PI / 2)
      .rotateY(Math.PI / 2),
    roofPaint
  );
  roofCrown.scale.set(1.0, 0.22, 1.0);
  roofCrown.position.set(0, 3.16, 0);
  roofCrown.castShadow = true;
  g.add(roofCrown);

  const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
  for (const sx of [-0.94, 0.94]) {
    const hl = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.12, 12).rotateX(Math.PI / 2), hlMat);
    hl.position.set(sx, 1.12, -4.8);
    addGlowSprite(g, textures, 0xfff3b0, 1.15, sx, 1.12, -4.92);
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.44, 0.16), darkMetalMat);
    mirror.position.set(sx * 1.54, 2.38, -4.88);
    g.add(hl, mirror);
  }

  // Rounded tubular front bumper
  const bumper = new THREE.Mesh(
    new THREE.CylinderGeometry(0.16, 0.16, 2.82, 10).rotateZ(Math.PI / 2),
    chromeMat
  );
  bumper.position.set(0, 0.72, -4.86);
  g.add(bumper);

  for (const [wx, wz] of [
    [-1.36, -3.15],
    [1.36, -3.15],
    [-1.36, 2.95],
    [1.36, 2.95]
  ]) {
    const w = makeWheel(wheelGeoBig);
    w.position.set(wx, 0.58, wz);
    g.add(w);
  }
  return g;
}

/**
 * Re-sculpted Bangladeshi Bedford/Tata Cargo Truck — sculpted sloped cab + curved tarpaulin cargo arch!
 */
export function createCargoTruck(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 3.35, 9.6);
  const cabMat = makeClearcoatPaint(0xb91c1c, 0.42, 0.26);
  const cargoMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.62 });
  const rearMat = new THREE.MeshStandardMaterial({ map: textures.truckRear, roughness: 0.46 });
  const tarpMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.78 });

  // Sculpted beveled Tata-style Bangladeshi truck cab (sloped hood & cab roof!)
  const cabGeo = extrudeSideProfile(
    [
      [-1.45, 0.0],
      [1.25, 0.0],
      [1.25, 2.24],
      [-0.38, 2.28],
      [-0.78, 1.24],
      [-1.45, 1.05]
    ],
    2.44,
    0.09
  );
  const cab = new THREE.Mesh(cabGeo, cabMat);
  cab.position.set(0, 1.72, -3.28);
  cab.castShadow = true;
  const wind = new THREE.Mesh(new THREE.BoxGeometry(2.12, 0.78, 0.08), glassMat);
  wind.position.set(0, 2.26, -3.86);
  wind.rotation.x = -0.22;
  const bumper = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.15, 2.64, 10).rotateZ(Math.PI / 2),
    chromeMat
  );
  bumper.position.set(0, 0.72, -4.76);
  g.add(cab, wind, bumper);

  const hlMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
  for (const sx of [-0.9, 0.9]) {
    const hl = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.1, 12).rotateX(Math.PI / 2), hlMat);
    hl.position.set(sx, 1.16, -4.74);
    g.add(hl);
  }

  // Wooden slatted bed + curved arched blue Bangladeshi tarpaulin canopy!
  const cargo = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.1, 6.25), [
    cargoMat,
    cargoMat,
    tarpMat,
    darkMetalMat,
    rearMat,
    cargoMat
  ]);
  cargo.position.set(0, 1.85, 1.25);
  cargo.castShadow = true;
  const tarpArch = new THREE.Mesh(
    new THREE.CylinderGeometry(1.32, 1.32, 6.22, 14, 1, false, 0, Math.PI)
      .rotateZ(Math.PI / 2)
      .rotateY(Math.PI / 2),
    tarpMat
  );
  tarpArch.scale.set(1.0, 0.42, 1.0);
  tarpArch.position.set(0, 2.9, 1.25);
  tarpArch.castShadow = true;
  g.add(cargo, tarpArch);

  for (const [wx, wz] of [
    [-1.3, -3.2],
    [1.3, -3.2],
    [-1.3, 2.45],
    [1.3, 2.45]
  ]) {
    const w = makeWheel(wheelGeoBig);
    w.position.set(wx, 0.58, wz);
    g.add(w);
  }
  return g;
}

// =========================================================================
// 20 COMPLETELY UNIQUE, 100% NON-MATCHING BANGLADESHI CHARACTER ARCHETYPES!
// =========================================================================

const H_SKIRT_GEO = new THREE.CylinderGeometry(0.18, 0.245, 0.84, 10);
const H_TRIM_GEO = new THREE.CylinderGeometry(0.246, 0.252, 0.08, 10);
const H_PALLU_GEO = new THREE.BoxGeometry(0.16, 0.56, 0.34);
const H_LEG_GEO = new THREE.CapsuleGeometry(0.085, 0.62, 4, 8);
const H_SHOE_GEO = new THREE.BoxGeometry(0.12, 0.08, 0.22);
const H_TORSO_LONG_GEO = new THREE.CapsuleGeometry(0.205, 0.54, 4, 10);
const H_TORSO_SHORT_GEO = new THREE.CapsuleGeometry(0.2, 0.38, 4, 10);
const H_NECK_GEO = new THREE.CylinderGeometry(0.065, 0.075, 0.12, 8);
const H_HEAD_GEO = new THREE.SphereGeometry(0.18, 12, 10);
const H_HAIR_GEO = new THREE.SphereGeometry(0.19, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55);
const H_BUN_GEO = new THREE.SphereGeometry(0.085, 8, 8);
const H_TUPI_GEO = new THREE.CylinderGeometry(0.145, 0.165, 0.11, 10);
const H_MATHAL_GEO = new THREE.ConeGeometry(0.36, 0.22, 12);
const H_CAP_GEO = new THREE.CylinderGeometry(0.18, 0.19, 0.09, 10);
const H_ARM_GEO = new THREE.CapsuleGeometry(0.062, 0.42, 4, 8);
const H_SHOE_MAT = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
const H_GOLD_MAT = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.45 });

interface CharacterArchetype {
  id: string;
  faceIdx: number;
  heightScale: number;
  widthScale: number;
  bottomStyle: 'pants' | 'lungi' | 'sari' | 'shorts';
  longTop: boolean;
  topHex: number;
  bottomHex: number;
  accentHex?: number;
  hairHex: number;
  headwear: 'hair' | 'bun' | 'tupi' | 'cap' | 'hardhat' | 'mathal' | 'hijab' | 'headphones' | 'beret' | 'bandana';
  prop:
    | 'none'
    | 'cane'
    | 'purse'
    | 'backpack'
    | 'gamcha'
    | 'briefcase'
    | 'fruit_basket'
    | 'selfie_stick'
    | 'umbrella'
    | 'jhola'
    | 'clipboard'
    | 'delivery_pack'
    | 'tie'
    | 'vest';
}

const CHARACTER_ARCHETYPES: CharacterArchetype[] = [
  // 1. Bangladesh Cricket Jersey Fan!
  { id: 'bd_cricket', faceIdx: 6, heightScale: 1.04, widthScale: 1.02, bottomStyle: 'pants', longTop: false, topHex: 0x006a4e, bottomHex: 0x0f172a, accentHex: 0xf42a41, hairHex: 0x111114, headwear: 'cap', prop: 'none' },
  // 2. Murubbi Chacha (Elder in Cream Panjabi + Tupi + Walking Cane)
  { id: 'murubbi', faceIdx: 2, heightScale: 0.98, widthScale: 1.08, bottomStyle: 'pants', longTop: true, topHex: 0xfef3c7, bottomHex: 0xf8fafc, hairHex: 0xd4d4d8, headwear: 'tupi', prop: 'cane' },
  // 3. Magenta Jamdani Sari Apu + Bun + Gold Purse
  { id: 'sari_magenta', faceIdx: 1, heightScale: 0.93, widthScale: 0.94, bottomStyle: 'sari', longTop: false, topHex: 0xdb2777, bottomHex: 0xbe185d, accentHex: 0xfacc15, hairHex: 0x09090b, headwear: 'bun', prop: 'purse' },
  // 4. Dhaka University Student (Hoodie + Backpack + Headphones)
  { id: 'du_student', faceIdx: 3, heightScale: 1.02, widthScale: 0.95, bottomStyle: 'pants', longTop: false, topHex: 0x4f46e5, bottomHex: 0x1e3a8a, accentHex: 0x38bdf8, hairHex: 0x18181b, headwear: 'headphones', prop: 'backpack' },
  // 5. Old Dhaka Lungi Uncle + Red Gamcha over shoulder
  { id: 'lungi_uncle', faceIdx: 0, heightScale: 0.96, widthScale: 1.14, bottomStyle: 'lungi', longTop: false, topHex: 0xf8fafc, bottomHex: 0x1e3a8a, accentHex: 0xdc2626, hairHex: 0x1c1917, headwear: 'hair', prop: 'gamcha' },
  // 6. Motijheel Office Executive (Shirt + Red Tie + Briefcase)
  { id: 'office_exec', faceIdx: 3, heightScale: 1.08, widthScale: 1.0, bottomStyle: 'pants', longTop: false, topHex: 0xbae6fd, bottomHex: 0x18181b, accentHex: 0xb91c1c, hairHex: 0x18181b, headwear: 'hair', prop: 'briefcase' },
  // 7. Street Fruit Vendor carrying basket of mangoes on head!
  { id: 'fruit_vendor', faceIdx: 4, heightScale: 0.97, widthScale: 0.96, bottomStyle: 'lungi', longTop: false, topHex: 0xd97706, bottomHex: 0x166534, accentHex: 0xf59e0b, hairHex: 0x111114, headwear: 'hair', prop: 'fruit_basket' },
  // 8. Dhaka TikTok / YouTube Vlogger with raised Selfie Stick!
  { id: 'vlogger', faceIdx: 6, heightScale: 1.05, widthScale: 0.92, bottomStyle: 'pants', longTop: false, topHex: 0x06b6d4, bottomHex: 0x111827, accentHex: 0xf43f5e, hairHex: 0x27272a, headwear: 'cap', prop: 'selfie_stick' },
  // 9. Village Farmer with traditional Bamboo Mathal conical hat!
  { id: 'farmer_mathal', faceIdx: 4, heightScale: 1.0, widthScale: 1.0, bottomStyle: 'lungi', longTop: false, topHex: 0x65a30d, bottomHex: 0x7c2d12, accentHex: 0xd97706, hairHex: 0x18181b, headwear: 'mathal', prop: 'gamcha' },
  // 10. Medical Doctor (White Lab Coat + Clipboard)
  { id: 'doctor', faceIdx: 7, heightScale: 1.01, widthScale: 0.94, bottomStyle: 'pants', longTop: true, topHex: 0xf8fafc, bottomHex: 0x0f766e, accentHex: 0x0284c7, hairHex: 0x111114, headwear: 'bun', prop: 'clipboard' },
  // 11. Metro Construction Worker (Orange Hi-Vis Vest + Yellow Hard Hat)
  { id: 'metro_worker', faceIdx: 0, heightScale: 1.06, widthScale: 1.1, bottomStyle: 'pants', longTop: false, topHex: 0x334155, bottomHex: 0x1e293b, accentHex: 0xf97316, hairHex: 0x18181b, headwear: 'hardhat', prop: 'vest' },
  // 12. Hijab College Girl (Pastel Teal Salwar Kameez + Tote)
  { id: 'hijab_student', faceIdx: 5, heightScale: 0.94, widthScale: 0.92, bottomStyle: 'pants', longTop: true, topHex: 0x14b8a6, bottomHex: 0xfef9c3, accentHex: 0x0f766e, hairHex: 0x0f766e, headwear: 'hijab', prop: 'purse' },
  // 13. Auto Mechanic Mistri (Blue Overalls + Red Bandana)
  { id: 'mistri', faceIdx: 4, heightScale: 0.99, widthScale: 1.06, bottomStyle: 'pants', longTop: false, topHex: 0x1d4ed8, bottomHex: 0x1e3a8a, accentHex: 0xef4444, hairHex: 0x111114, headwear: 'bandana', prop: 'none' },
  // 14. Food Delivery Rider walking (Neon Pink Jacket + Delivery Pack)
  { id: 'food_rider', faceIdx: 6, heightScale: 1.01, widthScale: 0.96, bottomStyle: 'pants', longTop: false, topHex: 0xec4899, bottomHex: 0x18181b, accentHex: 0xf472b6, hairHex: 0x111114, headwear: 'cap', prop: 'delivery_pack' },
  // 15. Tangail Sari Nanima (White & Red Border Sari + Grey Bun + Umbrella)
  { id: 'nanima_sari', faceIdx: 7, heightScale: 0.88, widthScale: 1.04, bottomStyle: 'sari', longTop: false, topHex: 0xfefce8, bottomHex: 0xfefce8, accentHex: 0xdc2626, hairHex: 0x9ca3af, headwear: 'bun', prop: 'umbrella' },
  // 16. Dhaka Schoolboy (White Shirt + Navy Shorts + Red Schoolbag)
  { id: 'schoolboy', faceIdx: 6, heightScale: 0.82, widthScale: 0.84, bottomStyle: 'shorts', longTop: false, topHex: 0xffffff, bottomHex: 0x1e3a8a, accentHex: 0xef4444, hairHex: 0x111114, headwear: 'hair', prop: 'backpack' },
  // 17. TSC Artist / Musician (Maroon Panjabi + Black Waistcoat + Jhola Bag)
  { id: 'tsc_artist', faceIdx: 0, heightScale: 1.03, widthScale: 0.96, bottomStyle: 'pants', longTop: true, topHex: 0x881337, bottomHex: 0x27272a, accentHex: 0x111827, hairHex: 0x18181b, headwear: 'hair', prop: 'jhola' },
  // 18. Golden Yellow Boishakh Sari Aunty + Royal Blue Sun Umbrella
  { id: 'sari_yellow', faceIdx: 5, heightScale: 0.95, widthScale: 0.98, bottomStyle: 'sari', longTop: false, topHex: 0xeab308, bottomHex: 0xca8a04, accentHex: 0x1d4ed8, hairHex: 0x111114, headwear: 'bun', prop: 'umbrella' },
  // 19. Bank Security Guard (Khaki Uniform + Dark Beret)
  { id: 'guard', faceIdx: 2, heightScale: 1.07, widthScale: 1.12, bottomStyle: 'pants', longTop: false, topHex: 0xa16207, bottomHex: 0x713f12, accentHex: 0x18181b, hairHex: 0x18181b, headwear: 'beret', prop: 'tie' },
  // 20. Purple Stylish Youth / Biker (Leather Jacket + Red Tee)
  { id: 'biker_youth', faceIdx: 3, heightScale: 1.1, widthScale: 1.04, bottomStyle: 'pants', longTop: false, topHex: 0x6d28d9, bottomHex: 0x0f172a, accentHex: 0xfacc15, hairHex: 0x27272a, headwear: 'headphones', prop: 'none' }
];

// Shuffled deck guaranteeing 100% unique non-repeating sequence across all nearby humans!
let archetypeDeck: number[] = [];
function drawUniqueArchetypeIndex(): number {
  if (archetypeDeck.length === 0) {
    archetypeDeck = CHARACTER_ARCHETYPES.map((_, i) => i);
    for (let i = archetypeDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [archetypeDeck[i], archetypeDeck[j]] = [archetypeDeck[j], archetypeDeck[i]];
    }
  }
  return archetypeDeck.pop()!;
}

function createSeatedDriver(textures: TextureBank, shirtHex: number, gamchaOnShoulder: boolean): THREE.Group {
  const g = new THREE.Group();
  const faceMat = new THREE.MeshStandardMaterial({ map: textures.humanFaces[0], roughness: 0.65 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: shirtHex, roughness: 0.72 });

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.3, 6, 10), shirtMat);
  torso.position.y = 0.34;
  torso.castShadow = true;
  g.add(torso);

  if (gamchaOnShoulder) {
    const gamcha = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.48, 0.38),
      new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.82 })
    );
    gamcha.position.set(0.15, 0.36, 0);
    g.add(gamcha);
  }

  const head = new THREE.Mesh(H_HEAD_GEO, faceMat);
  head.position.set(0, 0.78, 0);
  head.rotation.y = Math.PI / 2; // Orient face toward -Z forward!
  const hair = new THREE.Mesh(H_HAIR_GEO, new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.88 }));
  hair.position.y = 0.02;
  head.add(hair);
  g.add(head);
  g.userData.head = head;
  return g;
}

function createSeatedBiker(jacketHex: number, helmetHex: number): THREE.Group {
  const g = new THREE.Group();
  const jacketMat = new THREE.MeshStandardMaterial({ color: jacketHex, roughness: 0.55, metalness: 0.15 });
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.32, 6, 10), jacketMat);
  torso.position.set(0, 0.36, 0);
  torso.rotation.x = -0.22;
  torso.castShadow = true;

  const helmet = new THREE.Mesh(
    new THREE.SphereGeometry(0.21, 14, 14),
    makeClearcoatPaint(helmetHex, 0.5, 0.16)
  );
  helmet.position.set(0, 0.78, -0.06);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.14), glassMat);
  visor.position.set(0, 0.0, -0.15);
  helmet.add(visor);
  g.add(torso, helmet);
  g.userData.head = helmet;
  return g;
}

/**
 * Builds a 100% unique Bangladeshi human character drawn from 20 non-repeating archetypes!
 * All characters cleanly face -Z so face textures, props, and walking animations align perfectly!
 */
export function createRealisticHuman(
  textures: TextureBank,
  forcedKind?: 'angry' | 'puller' | 'random',
  uniqueIndex?: number
): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 0.82, 0.82);

  const archIdx =
    uniqueIndex !== undefined
      ? Math.abs(uniqueIndex) % CHARACTER_ARCHETYPES.length
      : forcedKind === 'puller'
      ? 4 // Lungi + Gamcha rickshaw puller
      : drawUniqueArchetypeIndex();
  const arch = CHARACTER_ARCHETYPES[archIdx];

  const faceTex = textures.humanFaces[arch.faceIdx % textures.humanFaces.length];
  const faceMat = new THREE.MeshStandardMaterial({ map: faceTex, roughness: 0.68 });
  const skinBaseColors = [0xc68642, 0xd8a472, 0xa86432, 0xd19760, 0xb87338, 0xe0b084, 0x9f5e31, 0xc88c52];
  const skinMat = new THREE.MeshStandardMaterial({
    color: skinBaseColors[arch.faceIdx % skinBaseColors.length],
    roughness: 0.68
  });

  const topMat = new THREE.MeshStandardMaterial({ color: arch.topHex, roughness: 0.76 });
  const bottomMat = new THREE.MeshStandardMaterial({ color: arch.bottomHex, roughness: 0.82 });
  const accentMat = new THREE.MeshStandardMaterial({ color: arch.accentHex ?? 0xfacc15, roughness: 0.55 });
  const hairMat = new THREE.MeshStandardMaterial({ color: arch.hairHex, roughness: 0.88 });

  // Lower body (Sari / Lungi / Shorts / Trousers)
  let legL: THREE.Object3D | null = null;
  let legR: THREE.Object3D | null = null;
  if (arch.bottomStyle === 'sari' || arch.bottomStyle === 'lungi') {
    const skirt = new THREE.Mesh(H_SKIRT_GEO, bottomMat);
    skirt.position.y = 0.45;
    skirt.castShadow = true;
    g.add(skirt);
    if (arch.bottomStyle === 'sari') {
      const trim = new THREE.Mesh(H_TRIM_GEO, arch.accentHex ? accentMat : H_GOLD_MAT);
      trim.position.y = 0.1;
      const pallu = new THREE.Mesh(H_PALLU_GEO, topMat);
      pallu.position.set(-0.14, 1.12, 0.02);
      pallu.rotation.z = 0.26;
      g.add(trim, pallu);
    }
  } else {
    legL = new THREE.Mesh(H_LEG_GEO, arch.bottomStyle === 'shorts' ? skinMat : bottomMat);
    legL.position.set(-0.11, 0.42, 0);
    legL.castShadow = true;
    legR = new THREE.Mesh(H_LEG_GEO, arch.bottomStyle === 'shorts' ? skinMat : bottomMat);
    legR.position.set(0.11, 0.42, 0);
    legR.castShadow = true;
    g.add(legL, legR);
    if (arch.bottomStyle === 'shorts') {
      const shortsMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.21, 0.34, 10), bottomMat);
      shortsMesh.position.y = 0.74;
      g.add(shortsMesh);
    }
  }

  const shoeL = new THREE.Mesh(H_SHOE_GEO, H_SHOE_MAT);
  shoeL.position.set(-0.11, 0.04, -0.05);
  const shoeR = shoeL.clone();
  shoeR.position.x = 0.11;
  g.add(shoeL, shoeR);

  // Torso (long panjabi/coat/kameez OR shirt/jersey)
  const torso = new THREE.Mesh(arch.longTop ? H_TORSO_LONG_GEO : H_TORSO_SHORT_GEO, topMat);
  torso.position.y = arch.longTop ? 1.05 : 1.12;
  torso.castShadow = true;
  g.add(torso);

  // Special BD Cricket Jersey red chest circle!
  if (arch.id === 'bd_cricket') {
    const chestSun = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.04, 12).rotateX(Math.PI / 2), accentMat);
    chestSun.position.set(0, 1.16, -0.19);
    g.add(chestSun);
  }
  // Waistcoat for TSC artist or Hi-Vis Vest for Metro Worker
  if (arch.prop === 'vest' || arch.id === 'tsc_artist') {
    const vest = new THREE.Mesh(new THREE.CylinderGeometry(0.215, 0.22, 0.44, 10), accentMat);
    vest.position.y = 1.13;
    g.add(vest);
  }
  if (arch.prop === 'tie') {
    const tie = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.34, 0.04), accentMat);
    tie.position.set(0, 1.14, -0.2);
    g.add(tie);
  }

  // Neck + Expressive Textured Face Head (oriented cleanly toward -Z!)
  const neck = new THREE.Mesh(H_NECK_GEO, skinMat);
  neck.position.y = 1.44;
  const head = new THREE.Mesh(H_HEAD_GEO, faceMat);
  head.position.y = 1.62;
  head.rotation.y = Math.PI / 2; // Maps u=0.5 face straight toward -Z!
  head.castShadow = true;

  // Distinct Headwear for every character!
  if (arch.headwear === 'hijab') {
    const wrap = new THREE.Mesh(new THREE.SphereGeometry(0.205, 10, 10), accentMat);
    wrap.position.set(-0.02, 0.01, 0); // offset toward +Z back in rotated head space (local -X = world +Z!)
    const drape = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.32, 10), accentMat);
    drape.position.set(0, 1.44, 0.03);
    head.add(wrap);
    g.add(drape);
  } else {
    const hair = new THREE.Mesh(H_HAIR_GEO, hairMat);
    hair.position.y = 0.02;
    head.add(hair);
  }

  if (arch.headwear === 'bun') {
    const bun = new THREE.Mesh(H_BUN_GEO, hairMat);
    bun.position.set(-0.18, -0.02, 0); // In rotated head frame, -X is world +Z (back of head!)
    head.add(bun);
  } else if (arch.headwear === 'tupi') {
    const tupi = new THREE.Mesh(H_TUPI_GEO, new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 }));
    tupi.position.y = 0.16;
    head.add(tupi);
  } else if (arch.headwear === 'cap') {
    const cap = new THREE.Mesh(H_CAP_GEO, accentMat);
    cap.position.y = 0.14;
    const brim = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.03, 0.24), accentMat);
    brim.position.set(0.14, 0.11, 0); // local +X = world -Z front visor!
    head.add(cap, brim);
  } else if (arch.headwear === 'hardhat') {
    const hat = new THREE.Mesh(
      new THREE.SphereGeometry(0.215, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.56),
      new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 })
    );
    hat.position.y = 0.05;
    head.add(hat);
  } else if (arch.headwear === 'mathal') {
    const mathal = new THREE.Mesh(H_MATHAL_GEO, new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.9 }));
    mathal.position.y = 0.2;
    head.add(mathal);
  } else if (arch.headwear === 'headphones') {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 6, 14, Math.PI), accentMat);
    band.rotation.y = Math.PI / 2;
    const earL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.05, 8).rotateX(Math.PI / 2), accentMat);
    earL.position.set(0, 0, 0.19);
    const earR = earL.clone();
    earR.position.z = -0.19;
    head.add(band, earL, earR);
  } else if (arch.headwear === 'beret') {
    const beret = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.16, 0.08, 10), accentMat);
    beret.position.set(-0.02, 0.16, 0.02);
    beret.rotation.z = 0.18;
    head.add(beret);
  } else if (arch.headwear === 'bandana') {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.188, 0.188, 0.07, 10), accentMat);
    band.position.y = 0.09;
    head.add(band);
  }
  g.add(neck, head);

  // Arms
  const armL = new THREE.Mesh(H_ARM_GEO, topMat);
  armL.position.set(-0.27, 1.12, 0);
  const armR = new THREE.Mesh(H_ARM_GEO, topMat);
  armR.position.set(0.27, 1.12, 0);

  // Unique Props per Archetype!
  if (forcedKind === 'angry') {
    // Each angry mob member carries a DIFFERENT chaotic Dhaka weapon (zero repeats!)
    armL.position.y = 1.44;
    armL.rotation.x = -2.35;
    armR.position.y = 1.44;
    armR.rotation.x = -2.55;
    const weaponType = archIdx % 6;
    if (weaponType === 0) {
      // Bamboo lathi stick
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.036, 1.05, 6), new THREE.MeshStandardMaterial({ color: 0x78350f }));
      stick.position.set(0, -0.45, 0);
      armR.add(stick);
    } else if (weaponType === 1) {
      // Cricket bat!
      const bat = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.85, 0.04), new THREE.MeshStandardMaterial({ color: 0xdeb887 }));
      bat.position.set(0, -0.42, 0);
      armR.add(bat);
    } else if (weaponType === 2) {
      // Jharu (broom!)
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.5, 6), new THREE.MeshStandardMaterial({ color: 0xa16207 }));
      handle.position.set(0, -0.25, 0);
      const bristles = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.45, 8), new THREE.MeshStandardMaterial({ color: 0xd97706 }));
      bristles.position.set(0, -0.62, 0);
      armR.add(handle, bristles);
    } else if (weaponType === 3) {
      // Flying Chappal / Sandal!
      const sandal = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.34, 0.05), new THREE.MeshStandardMaterial({ color: 0x2563eb }));
      sandal.position.set(0, -0.32, 0);
      armR.add(sandal);
    } else if (weaponType === 4) {
      // Iron Frying Pan (কড়াই)!
      const pan = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.06, 10).rotateX(Math.PI / 2), darkMetalMat);
      pan.position.set(0, -0.42, 0);
      armR.add(pan);
    } else {
      // Wooden road sign plank!
      const plank = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.9, 0.05), new THREE.MeshStandardMaterial({ color: 0x92400e }));
      plank.position.set(0, -0.44, 0);
      armR.add(plank);
    }
  } else {
    switch (arch.prop) {
      case 'gamcha': {
        const gamcha = new THREE.Mesh(
          new THREE.BoxGeometry(0.13, 0.52, 0.38),
          new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.85 })
        );
        gamcha.position.set(0.16, 1.18, 0);
        g.add(gamcha);
        break;
      }
      case 'backpack': {
        const pack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.44, 0.18), accentMat);
        pack.position.set(0, 1.14, 0.24);
        g.add(pack);
        break;
      }
      case 'delivery_pack': {
        const box = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.48, 0.36), accentMat);
        box.position.set(0, 1.18, 0.32);
        g.add(box);
        break;
      }
      case 'cane': {
        const cane = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.02, 0.96, 6), new THREE.MeshStandardMaterial({ color: 0x713f12 }));
        cane.position.set(0.32, 0.48, -0.14);
        g.add(cane);
        break;
      }
      case 'purse': {
        const bag = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.26, 0.3), accentMat);
        bag.position.set(0.3, 0.82, -0.05);
        g.add(bag);
        break;
      }
      case 'briefcase': {
        const bc = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.32, 0.42), new THREE.MeshStandardMaterial({ color: 0x27272a }));
        bc.position.set(0.32, 0.72, 0);
        g.add(bc);
        break;
      }
      case 'jhola': {
        const bag = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.36, 0.32), new THREE.MeshStandardMaterial({ color: 0xd97706 }));
        bag.position.set(-0.28, 0.82, 0.04);
        g.add(bag);
        break;
      }
      case 'clipboard': {
        const clip = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 0.03), new THREE.MeshStandardMaterial({ color: 0xf8fafc }));
        clip.position.set(0.24, 1.02, -0.22);
        clip.rotation.x = -0.5;
        g.add(clip);
        break;
      }
      case 'fruit_basket': {
        const basket = new THREE.Mesh(
          new THREE.CylinderGeometry(0.34, 0.22, 0.22, 12),
          new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.9 })
        );
        basket.position.set(0, 1.94, 0);
        const fruit = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.32, 0.14, 10),
          new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.6 })
        );
        fruit.position.set(0, 2.08, 0);
        g.add(basket, fruit);
        break;
      }
      case 'selfie_stick': {
        armR.rotation.x = -1.2;
        armR.position.set(0.27, 1.24, -0.14);
        const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.65, 6), chromeMat);
        stick.position.set(0, -0.42, 0);
        const phone = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.18, 0.02), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
        phone.position.set(0, -0.75, 0);
        armR.add(stick, phone);
        break;
      }
      case 'umbrella': {
        const uPole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.15, 6), chromeMat);
        uPole.position.set(0.24, 1.88, 0);
        const uTop = new THREE.Mesh(new THREE.ConeGeometry(0.66, 0.26, 12), accentMat);
        uTop.position.set(0.24, 2.46, 0);
        g.add(uPole, uTop);
        break;
      }
    }
  }

  g.add(armL, armR);
  g.scale.set(arch.widthScale, arch.heightScale, arch.widthScale);
  g.userData.armL = armL;
  g.userData.armR = armR;
  g.userData.legL = legL;
  g.userData.legR = legR;
  return g;
}

/**
 * Lively roadside Bangladeshi crowd cluster ("জনতার ভিড়") where EVERY SINGLE PERSON is 100% unique!
 * Oriented to face the road so players passing by see all their distinct faces, outfits & props!
 */
export function createRoadsideCrowdCluster(textures: TextureBank, count: number, side: -1 | 1 = -1): THREE.Group {
  const g = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const person = createRealisticHuman(textures, 'random');
    person.position.set((Math.random() - 0.5) * 2.0, 0.28, (i - count / 2) * 1.55 + (Math.random() - 0.5) * 0.5);
    // Face toward the road (left side looks toward +X -> -PI/2; right side looks toward -X -> +PI/2)
    person.rotation.y = (side === -1 ? -Math.PI / 2 : Math.PI / 2) + (Math.random() - 0.5) * 0.9;
    g.add(person);
  }
  return g;
}

export function createTrafficSergeant(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 2.2, 2.2);
  const navy = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.65 });
  const vest = new THREE.MeshStandardMaterial({
    color: 0xa3e635,
    emissive: 0x65a30d,
    emissiveIntensity: 0.45,
    roughness: 0.4
  });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });

  const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 1.0, 0.25, 16), whiteMat);
  stand.position.y = 0.125;
  const legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.62, 5, 8), navy);
  legL.position.set(-0.12, 0.62, 0);
  const legR = legL.clone();
  legR.position.x = 0.12;
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.42, 6, 10), vest);
  torso.position.y = 1.32;
  const head = new THREE.Mesh(H_HEAD_GEO, new THREE.MeshStandardMaterial({ map: textures.humanFaces[2] }));
  head.position.y = 1.82;
  head.rotation.y = -Math.PI / 2; // Faces oncoming player (+Z)
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.56), whiteMat);
  helmet.position.y = 1.87;
  g.add(stand, legL, legR, torso, head, helmet);

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.25, 8), whiteMat);
  pole.position.set(0.55, 1.62, 0);
  const umbrella = new THREE.Mesh(
    new THREE.ConeGeometry(1.62, 0.72, 12),
    new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.45 })
  );
  umbrella.position.set(0.55, 3.38, 0);
  umbrella.castShadow = true;
  g.add(pole, umbrella);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(1.65, 2.1, 28).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.8 })
  );
  ring.position.y = 0.08;
  g.add(ring);
  g.userData.ring = ring;
  return g;
}

// =========================================================================
// BANGLADESHI STALLS, SIDE-RUNNING POWER WIRES, FLAG, ORGANIC TREES & RIVER!
// =========================================================================

export function createRoadsideStall(kind: 'tea' | 'fuchka' | 'coconut', textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  addContactShadow(g, textures, 2.4, 2.8);
  const wood = new THREE.MeshStandardMaterial({ color: 0x854d0e, roughness: 0.88 });

  if (kind === 'tea') {
    const counter = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.0, 2.25), wood);
    counter.position.y = 0.5;
    counter.castShadow = true;
    const postGeo = new THREE.CylinderGeometry(0.05, 0.06, 2.2, 6);
    for (const [px, pz] of [
      [-0.85, -1.02],
      [0.85, -1.02],
      [-0.85, 1.02],
      [0.85, 1.02]
    ]) {
      const post = new THREE.Mesh(postGeo, wood);
      post.position.set(px, 1.1, pz);
      g.add(post);
    }
    const canopy = new THREE.Mesh(
      new THREE.BoxGeometry(2.25, 0.12, 2.55),
      new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.65 })
    );
    canopy.position.y = 2.24;
    canopy.rotation.z = 0.08;
    const kettle = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.23, 0.36, 10), chromeMat);
    kettle.position.set(0, 1.2, -0.4);
    const jar1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 0.38, 10),
      new THREE.MeshStandardMaterial({ color: 0xfacc15, transparent: true, opacity: 0.85 })
    );
    jar1.position.set(0.28, 1.2, 0.38);
    g.add(counter, canopy, kettle, jar1);
  } else if (kind === 'fuchka') {
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(1.54, 0.85, 2.15),
      new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.5 })
    );
    base.position.y = 0.62;
    base.castShadow = true;
    const glassCase = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.68, 1.88), glassMat);
    glassCase.position.y = 1.4;
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 0.12, 2.3),
      new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.45 })
    );
    top.position.y = 1.8;
    const w1 = makeWheel(wheelGeoSmall);
    w1.position.set(-0.8, 0.32, 0);
    const w2 = makeWheel(wheelGeoSmall);
    w2.position.set(0.8, 0.32, 0);
    g.add(base, glassCase, top, w1, w2);
  } else {
    // Authentic wooden Dab (Green Coconut) cart with slanted thatch canopy!
    const mat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.7 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.65, 2.2), wood);
    base.position.y = 0.48;
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(2.1, 0.1, 2.4),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.85 })
    );
    roof.position.y = 2.05;
    roof.rotation.z = -0.1;
    const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.6, 6), wood);
    p1.position.set(-0.8, 1.25, -0.9);
    const p2 = p1.clone();
    p2.position.set(0.8, 1.25, 0.9);
    g.add(base, roof, p1, p2);
    for (let i = 0; i < 8; i++) {
      const nut = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.26, 8), mat);
      nut.position.set((Math.random() - 0.5) * 1.1, 0.92 + (i > 4 ? 0.22 : 0), (Math.random() - 0.5) * 1.4);
      g.add(nut);
    }
  }
  return g;
}

/**
 * Continuous Dhaka Avenue Ornate Golden Streetlamps, Potted Shrubs & Side-Running Power Wires!
 */
export function createSidePowerLines(chunkLen: number, includeRightSide: boolean, textures?: TextureBank): THREE.Group {
  const g = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x52525b, roughness: 0.45, metalness: 0.58 });
  const wireMat = new THREE.LineBasicMaterial({ color: 0x111114 });
  const sides: (-1 | 1)[] = includeRightSide ? [-1, 1] : [-1];
  const half = chunkLen / 2;

  const potMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.85 });
  const shrubMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.78 });

  for (const side of sides) {
    const px = side * 10.5;
    for (const pz of [-half, 0]) {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 0.8, 8), poleMat);
      base.position.set(px, 0.4, pz);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.17, 8.2, 8), poleMat);
      pole.position.set(px, 4.1, pz);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.1, 0.1), darkMetalMat);
      arm.position.set(px - side * 0.25, 7.55, pz);
      // Warm Golden Vintage-Modern Streetlamp Lantern + Soft Golden Halo!
      const streetArm = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.08, 0.08), poleMat);
      streetArm.position.set(px - side * 0.85, 7.95, pz);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.32, 0.32), new THREE.MeshBasicMaterial({ color: 0xfff5c0 }));
      lamp.position.set(px - side * 1.55, 7.75, pz);
      g.add(base, pole, arm, streetArm, lamp);
      if (textures) {
        addGlowSprite(g, textures, 0xffd27d, 2.3, px - side * 1.55, 7.75, pz);
      }

      // Neat Dhaka avenue concrete planter pot + lush green trimmed shrub beside lamp!
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.36, 0.55, 10), potMat);
      pot.position.set(px - side * 0.35, 0.55, pz + 4.8);
      const bush = new THREE.Mesh(new THREE.ConeGeometry(0.58, 0.95, 10), shrubMat);
      bush.position.set(px - side * 0.35, 1.2, pz + 4.8);
      g.add(pot, bush);
    }

    // 4 continuous sagging black cables running cleanly ALONG BOTH SIDES of the road!
    const offsets: [number, number][] = [
      [-0.55, 7.52],
      [-0.18, 7.52],
      [0.18, 7.12],
      [0.45, 6.72]
    ];
    for (const [ox, wy] of offsets) {
      for (const segStart of [-half, 0]) {
        const segEnd = segStart + half;
        const midZ = (segStart + segEnd) / 2;
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(px + ox, wy, segStart),
          new THREE.Vector3(px + ox, wy - 0.52, midZ),
          new THREE.Vector3(px + ox, wy, segEnd)
        ]);
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(10));
        g.add(new THREE.Line(geo, wireMat));
      }
    }
  }
  return g;
}

export function createElectricPoleWithChargeZone(
  textures: TextureBank,
  side: -1 | 1
): { group: THREE.Group; wireAnchorLocal: THREE.Vector3; zoneMesh: THREE.Mesh } {
  const group = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x71717a, roughness: 0.92 });

  const poleMain = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 8.8, 8), poleMat);
  poleMain.position.set(side * 10.4, 4.4, 0);
  poleMain.castShadow = true;

  const arm = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.14, 0.14), darkMetalMat);
  arm.position.set(side * 9.8, 7.6, 0);
  const transformer = new THREE.Mesh(new THREE.BoxGeometry(0.86, 1.2, 0.74), darkMetalMat);
  transformer.position.set(side * 9.85, 5.9, 0);
  const coil = new THREE.Mesh(
    new THREE.TorusGeometry(0.45, 0.06, 6, 16),
    new THREE.MeshBasicMaterial({ color: 0x09090b })
  );
  coil.position.set(side * 10.05, 6.9, 0.22);
  group.add(poleMain, arm, transformer, coil);

  // Subtle glowing yellow warning beacon box (not a giant floating orb!)
  const beacon = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.45, 0.45),
    new THREE.MeshBasicMaterial({ color: 0xfde047 })
  );
  beacon.position.set(side * 9.35, 4.45, 0);
  group.add(beacon);

  const zoneMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 9.4),
    new THREE.MeshBasicMaterial({
      map: textures.chargeZone,
      transparent: true,
      opacity: 0.94,
      depthWrite: false
    })
  );
  zoneMesh.rotation.x = -Math.PI / 2;
  zoneMesh.position.set(side * 7.2, 0.05, 0);
  group.add(zoneMesh);

  return {
    group,
    wireAnchorLocal: new THREE.Vector3(side * 9.6, 5.8, 0),
    zoneMesh
  };
}

/**
 * Iconic Waving Bangladesh National Flag (লাল-সবুজের পতাকা)!
 */
export function createBangladeshFlag(textures: TextureBank, height = 7.5): THREE.Group {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, height, 8), chromeMat);
  pole.position.y = height / 2;
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), H_GOLD_MAT);
  finial.position.y = height + 0.05;

  // Gently rippled flag geometry so it looks waving in the Dhaka breeze!
  const flagGeo = new THREE.PlaneGeometry(2.6, 1.6, 10, 4);
  const pos = flagGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const wave = Math.sin((x + 1.3) * 2.4) * 0.14 * ((x + 1.3) / 2.6);
    pos.setZ(i, wave);
  }
  flagGeo.computeVertexNormals();

  const flag = new THREE.Mesh(
    flagGeo,
    new THREE.MeshStandardMaterial({
      map: textures.bdFlag,
      roughness: 0.55,
      side: THREE.DoubleSide
    })
  );
  flag.position.set(1.34, height - 0.85, 0);
  g.add(pole, finial, flag);
  return g;
}

export function createDhakaBuilding(
  textures: TextureBank,
  variant: number,
  shopIdx: number,
  side: -1 | 1
): THREE.Group {
  const g = new THREE.Group();
  const width = 9.5 + (variant % 3) * 2.2;
  const depth = 10 + ((variant + 1) % 3) * 1.8;
  const height = 11.5 + (variant % 4) * 4.5;

  const bMat = new THREE.MeshStandardMaterial({
    map: textures.buildings[variant % textures.buildings.length],
    bumpMap: textures.buildingBump,
    bumpScale: 0.15,
    roughness: 0.84,
    metalness: 0.06
  });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.95 });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.88 });

  const box = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), [
    bMat,
    bMat,
    roofMat,
    roofMat,
    bMat,
    bMat
  ]);
  box.position.y = height / 2;
  box.receiveShadow = true;
  g.add(box);

  // Rooftop parapet wall + cornice ledge for realistic Dhaka architecture
  const parapet = new THREE.Mesh(new THREE.BoxGeometry(width + 0.35, 0.7, depth + 0.35), trimMat);
  parapet.position.y = height + 0.3;
  g.add(parapet);

  const faceX = -side * (width / 2);
  const balconyMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, roughness: 0.9 });
  const acMat = new THREE.MeshStandardMaterial({ color: 0xe5e7eb, roughness: 0.55 });
  for (let fl = 1; fl <= 2; fl++) {
    const by = 4.8 + fl * 3.1;
    if (by > height - 1.5) break;
    const bal = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.95, 3.2), balconyMat);
    bal.position.set(faceX - side * 0.45, by, (fl % 2 === 0 ? 1 : -1) * 1.8);
    g.add(bal);

    const ac = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.52, 0.72), acMat);
    ac.position.set(faceX - side * 0.22, by + 0.2, (fl % 2 === 0 ? -2.2 : 2.1));
    g.add(ac);
  }

  // Ground-floor corrugated shop awning shade!
  const awningColors = [0x047857, 0xb91c1c, 0x1d4ed8, 0xd97706];
  const awning = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.14, depth * 0.86),
    new THREE.MeshStandardMaterial({ color: awningColors[shopIdx % awningColors.length], roughness: 0.7 })
  );
  awning.position.set(faceX - side * 0.75, 2.55, 0);
  awning.rotation.z = side * 0.24;
  g.add(awning);

  // Authentic Bangladeshi Roadside Wall Poster pasted on lower building wall!
  const poster = new THREE.Mesh(
    new THREE.PlaneGeometry(2.6, 1.3),
    new THREE.MeshBasicMaterial({ map: textures.wallPosters[(variant + shopIdx) % textures.wallPosters.length] })
  );
  poster.position.set(faceX - side * 0.06, 1.35, depth * 0.26);
  poster.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
  g.add(poster);

  const tank = new THREE.Mesh(
    new THREE.CylinderGeometry(0.78, 0.78, 1.4, 12),
    new THREE.MeshStandardMaterial({ color: variant % 2 === 0 ? 0x18181b : 0x1d4ed8, roughness: 0.5 })
  );
  tank.position.set(width * 0.15 * side, height + 1.0, -depth * 0.16);
  g.add(tank);

  // Iconic glowing street-level Dhaka Avenue Signboards (ঢাকা-চট্টগ্রাম বাস সার্ভিস / বাংলাদেশ ডাক বিভাগ) + green hedge box!
  const signIdx = side === -1 ? (shopIdx % 2 === 0 ? 0 : 2) : (shopIdx % 2 === 0 ? 1 : 3);
  const streetSignTex = textures.streetSigns[signIdx % textures.streetSigns.length];
  const signMat = new THREE.MeshStandardMaterial({
    map: streetSignTex,
    emissiveMap: streetSignTex,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity: 0.34,
    roughness: 0.22,
    metalness: 0.1
  });
  const sign = new THREE.Mesh(new THREE.BoxGeometry(0.28, 2.35, depth * 0.88), signMat);
  sign.position.set(faceX - side * 0.25, 2.65, 0);
  g.add(sign);

  // Lush manicured green hedge planter box right below the avenue signboard!
  const hedgeBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.85, 0.55, depth * 0.86),
    new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 })
  );
  hedgeBox.position.set(faceX - side * 0.48, 0.52, 0);
  const hedgeFoliage = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.65, depth * 0.82),
    new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 })
  );
  hedgeFoliage.position.set(faceX - side * 0.48, 1.05, 0);
  g.add(hedgeBox, hedgeFoliage);

  return g;
}

export function createFootOverbridge(textures: TextureBank, billboardIdx: number): THREE.Group {
  const g = new THREE.Group();
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.48, metalness: 0.68 });

  const pL = new THREE.Mesh(new THREE.BoxGeometry(0.95, 7.8, 1.15), steelMat);
  pL.position.set(-11.0, 3.9, 0);
  const pR = pL.clone();
  pR.position.x = 11.0;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(23.2, 0.95, 2.3), steelMat);
  deck.position.set(0, 7.3, 0);
  g.add(pL, pR, deck);

  const board = new THREE.Mesh(
    new THREE.PlaneGeometry(18.0, 3.6),
    new THREE.MeshBasicMaterial({ map: textures.billboards[billboardIdx % textures.billboards.length] })
  );
  board.position.set(0, 8.8, 1.22);
  g.add(board);

  // Waving Bangladesh National Flags mounted atop foot overbridge corners!
  const flagL = createBangladeshFlag(textures, 3.2);
  flagL.position.set(-10.5, 7.8, 0);
  const flagR = createBangladeshFlag(textures, 3.2);
  flagR.position.set(10.5, 7.8, 0);
  g.add(flagL, flagR);

  return g;
}

/**
 * Authentic Bangladeshi Coconut Palm Tree (নারকেল গাছ — curved ringed trunk + graceful arched fronds, ZERO spheres!)
 */
export function createCoconutPalmTree(): THREE.Group {
  const g = new THREE.Group();
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x7c5c3e, roughness: 0.94 });
  const frondMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.72, side: THREE.DoubleSide });
  const frondLightMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.7, side: THREE.DoubleSide });

  // Slightly curved segmented coconut trunk
  let curX = 0;
  let curY = 0;
  for (let i = 0; i < 6; i++) {
    const rBot = 0.24 - i * 0.022;
    const rTop = 0.22 - i * 0.022;
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, 1.15, 7), trunkMat);
    const lean = 0.06 + i * 0.025;
    seg.position.set(curX + lean * 0.5, curY + 0.55, 0);
    seg.rotation.z = -lean;
    seg.castShadow = true;
    g.add(seg);
    curX += lean;
    curY += 1.08;
  }

  // 8 gracefully arching flat palm fronds radiating from crown (zero round blobs!)
  for (let f = 0; f < 8; f++) {
    const angle = (f / 8) * Math.PI * 2;
    const frondGroup = new THREE.Group();
    frondGroup.position.set(curX, curY, 0);
    frondGroup.rotation.y = angle;

    const blade1 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 1.55), f % 2 === 0 ? frondMat : frondLightMat);
    blade1.position.set(0, 0.25, 0.78);
    blade1.rotation.x = -0.28;
    const blade2 = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 1.35), f % 2 === 0 ? frondLightMat : frondMat);
    blade2.position.set(0, 0.02, 2.02);
    blade2.rotation.x = 0.42;
    frondGroup.add(blade1, blade2);
    g.add(frondGroup);
  }
  return g;
}

/**
 * 100% Organic Real 3D Trees (tree_realistic.glb / k_tree_large.glb / Coconut Palm — ZERO round sphere blobs!!)
 */
export function createRealisticTreeOrKrishnachura(isRedBlossom: boolean, glbs: GlbAssetBank): THREE.Group {
  if (isRedBlossom) {
    // Clone real 3D tree GLB and tint ONLY its foliage lush Krishnachura crimson-orange!
    const crimsonMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.78 });
    const orangeMat = new THREE.MeshStandardMaterial({ color: 0xea580c, roughness: 0.78 });
    const real = glbs.clone('tree_real', (root) => {
      let leafIdx = 0;
      root.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const m = obj as THREE.Mesh;
          const mn = ((m.material as THREE.Material)?.name || m.name || '').toLowerCase();
          if (!mn.includes('trunk') && !mn.includes('bark') && !mn.includes('wood') && !mn.includes('stem')) {
            m.material = leafIdx++ % 2 === 0 ? crimsonMat : orangeMat;
          }
        }
      });
    });
    if (real) return real;

    const kTree = glbs.clone('k_tree_large', (root) => {
      root.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const m = obj as THREE.Mesh;
          const mn = ((m.material as THREE.Material)?.name || '').toLowerCase();
          if (mn.includes('leaf') || mn.includes('green') || mn.includes('foliage')) {
            m.material = crimsonMat;
          }
        }
      });
    });
    if (kTree) return kTree;
  } else {
    const real = glbs.clone('tree_real');
    if (real) return real;
    const kTree = glbs.clone('k_tree_large');
    if (kTree) return kTree;
  }

  // Fallback before GLB finishes loading: graceful Coconut Palm or layered-canopy Krishnachura (ZERO round blobs!)
  if (!isRedBlossom) {
    return createCoconutPalmTree();
  }

  const g = new THREE.Group();
  const barkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.95 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.36, 3.6, 8), barkMat);
  trunk.position.y = 1.8;
  g.add(trunk);

  // Branching umbrella canopy made of wide flat layered hexagonal plates (classic Bangladeshi Krishnachura canopy!)
  const blossom1 = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.8 });
  const blossom2 = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.8 });
  const leafBase = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 });
  const plates: [number, number, number, number, number, THREE.Material][] = [
    [0, 3.85, 0, 2.5, 0.65, leafBase],
    [-0.95, 4.35, 0.4, 1.9, 0.55, blossom1],
    [1.05, 4.25, -0.35, 1.85, 0.55, blossom2],
    [0.05, 4.75, 0.05, 1.75, 0.52, blossom1]
  ];
  for (const [px, py, pz, r, h, mat] of plates) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.72, r, h, 7), mat);
    p.position.set(px, py, pz);
    p.castShadow = true;
    g.add(p);
  }
  return g;
}

export function createDhakaMetroViaductSegment(chunkLen: number): THREE.Group {
  const g = new THREE.Group();
  const concrete = new THREE.MeshStandardMaterial({ color: 0xb8b2a8, roughness: 0.9 });
  const pier = new THREE.Mesh(new THREE.BoxGeometry(2.1, 16, 2.4), concrete);
  pier.position.set(-29, 8, 0);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(6.8, 1.2, 3.0), concrete);
  cap.position.set(-29, 15.8, 0);
  const girder = new THREE.Mesh(new THREE.BoxGeometry(6.2, 1.7, chunkLen), concrete);
  girder.position.set(-29, 17.2, 0);
  g.add(pier, cap, girder);
  return g;
}

export function createDhakaMetroTrain(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  const sideMat = new THREE.MeshStandardMaterial({
    map: textures.metroCoach,
    roughness: 0.22,
    metalness: 0.58
  });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, metalness: 0.4 });
  for (let c = 0; c < 4; c++) {
    const coach = new THREE.Mesh(new THREE.BoxGeometry(2.9, 3.1, 14.2), [
      sideMat,
      sideMat,
      whiteMat,
      darkMetalMat,
      whiteMat,
      whiteMat
    ]);
    coach.position.set(0, 1.55, c * 14.8);
    g.add(coach);
  }
  return g;
}

/**
 * Realistic Textured Buriganga / Padma River Water Shader (Dual-Layer Scrolling Water Texture + Sunlit Reflections!)
 */
export function createWaterShaderMaterial(textures: TextureBank): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uWaterMap: { value: textures.waterTex },
      uSunColor: { value: new THREE.Color(0xffe099) }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform sampler2D uWaterMap;
      uniform vec3 uSunColor;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      void main() {
        vec2 uvA = vec2(vWorldPos.x * 0.045 + uTime * 0.025, vWorldPos.z * 0.055 + uTime * 0.045);
        vec2 uvB = vec2(vWorldPos.x * 0.085 - uTime * 0.02, vWorldPos.z * 0.095 - uTime * 0.032);
        vec3 tA = texture2D(uWaterMap, uvA).rgb;
        vec3 tB = texture2D(uWaterMap, uvB).rgb;
        vec3 col = mix(tA, tB, 0.48);

        // Rich river wave shimmer highlights along the current
        float luma = dot(col, vec3(0.299, 0.587, 0.114));
        float glint = pow(smoothstep(0.26, 0.58, luma), 3.0);
        col += uSunColor * glint * 0.36;

        // Soft foam line along the grassy river edge
        float bankFoam = smoothstep(0.045, 0.0, vUv.x);
        col = mix(col, vec3(0.78, 0.85, 0.82), bankFoam * 0.32);

        gl_FragColor = vec4(col, 0.98);
      }
    `,
    transparent: true
  });
}

/**
 * Standing Illuminated Roadside Signboard (SABBIR CODEX / Old Dhaka Street Signs!)
 */
export function createRoadsideSignboard(textures: TextureBank, side: -1 | 1, idx: number): THREE.Group {
  const g = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.45, metalness: 0.72 });
  const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 4.4, 8), poleMat);
  p1.position.set(0, 2.2, -1.6);
  const p2 = p1.clone();
  p2.position.z = 1.6;

  const tex = textures.streetSigns[idx % textures.streetSigns.length];
  const board = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 1.8, 4.4),
    new THREE.MeshStandardMaterial({
      map: tex,
      emissiveMap: tex,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.38,
      roughness: 0.28
    })
  );
  board.position.set(-side * 0.14, 3.6, 0);
  g.add(p1, p2, board);
  return g;
}

/**
 * Iconic Dhaka Street U-Turn Cutout (🔄 ইউ-টার্ন সাইনবোর্ড + সাদা ড্যাশড টার্নিং রোড মার্কিং!)
 */
export function createUTurnZone(textures: TextureBank): THREE.Group {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 4.2, 8), chromeMat);
  pole.position.set(0, 2.1, -5.2);
  const sign = new THREE.Mesh(
    new THREE.BoxGeometry(1.55, 1.55, 0.1),
    new THREE.MeshBasicMaterial({ map: textures.uTurnSign })
  );
  sign.position.set(0, 3.85, -5.2);
  const decal = new THREE.Mesh(
    new THREE.PlaneGeometry(7.2, 7.2),
    new THREE.MeshBasicMaterial({
      map: textures.uTurnRoad,
      transparent: true,
      opacity: 0.92,
      depthWrite: false
    })
  );
  decal.rotation.x = -Math.PI / 2;
  decal.position.set(0, 0.05, 0);
  g.add(pole, sign, decal);
  return g;
}

/**
 * Authentic Satirical Dhaka Street Procession (রাস্তায় মিছিল!)
 * 5 unique non-repeating Bangladeshi marchers carrying a big cloth protest banner & raised placards!
 */
export function createDhakaMichil(textures: TextureBank, idx: number): THREE.Group {
  const g = new THREE.Group();
  const bambooMat = new THREE.MeshStandardMaterial({ color: 0x854d0e, roughness: 0.88 });

  // 2 front banner holders + 3 marchers right behind them!
  const offsets: [number, number][] = [
    [-1.45, -1.2],
    [1.45, -1.2],
    [-1.0, 0.6],
    [0.0, 0.85],
    [1.05, 0.55]
  ];
  const marchers: THREE.Group[] = [];
  for (let i = 0; i < offsets.length; i++) {
    const person = createRealisticHuman(textures, 'random');
    person.position.set(offsets[i][0], 0, offsets[i][1]);
    g.add(person);
    marchers.push(person);
  }

  // Wide fluttering Dhaka cloth protest banner held aloft across front two marchers!
  const poleL = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 2.75, 6), bambooMat);
  poleL.position.set(-1.5, 1.45, -1.35);
  const poleR = poleL.clone();
  poleR.position.x = 1.5;
  const bannerTex = textures.michilBanners[idx % textures.michilBanners.length];
  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(3.3, 0.95),
    new THREE.MeshStandardMaterial({ map: bannerTex, side: THREE.DoubleSide, roughness: 0.65 })
  );
  banner.position.set(0, 2.38, -1.35);
  g.add(poleL, poleR, banner);

  // Small raised placard on back marcher
  const pStick = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.4, 6), bambooMat);
  pStick.position.set(0, 1.75, 0.72);
  const placard = new THREE.Mesh(
    new THREE.BoxGeometry(1.15, 0.58, 0.05),
    new THREE.MeshBasicMaterial({ map: textures.streetSigns[0] })
  );
  placard.position.set(0, 2.78, 0.72);
  g.add(pStick, placard);

  g.userData.marchers = marchers;
  return g;
}

/**
 * Authentic Bangladeshi Wooden Country Boat (নৌকা) with curved hull & arched bamboo canopy (ছই)!
 */
export function createBangladeshiBoat(): THREE.Group {
  const g = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color: 0x3b2416, roughness: 0.88 });
  const canopyColors = [0x15803d, 0x1d4ed8, 0xb91c1c, 0xd97706];
  const canopyMat = new THREE.MeshStandardMaterial({
    color: canopyColors[Math.floor(Math.random() * canopyColors.length)],
    roughness: 0.72
  });

  const hullGeo = extrudeSideProfile(
    [
      [-3.4, 0.65],
      [-2.1, 0.0],
      [2.1, 0.0],
      [3.4, 0.65],
      [2.5, 0.72],
      [-2.5, 0.72]
    ],
    1.55,
    0.08
  );
  const hull = new THREE.Mesh(hullGeo, hullMat);
  hull.position.y = 0.28;
  g.add(hull);

  const arch = new THREE.Mesh(
    new THREE.CylinderGeometry(0.88, 0.88, 2.5, 10, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateY(Math.PI / 2),
    canopyMat
  );
  arch.position.set(0, 0.72, 0.1);
  g.add(arch);

  return g;
}

/**
 * Grand Illuminated Padma / Hatirjheel Cable-Stay River Bridge Segment with Waving Bangladesh Flags!
 */
export function createRiverBridgeSegment(
  chunkLen: number,
  waterMat: THREE.ShaderMaterial,
  withPylonTower: boolean,
  textures: TextureBank
): THREE.Group {
  const g = new THREE.Group();
  const concreteMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.78 });
  const railMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.45, metalness: 0.75 });
  const lampGlow = new THREE.MeshBasicMaterial({ color: 0xfff3b0 });

  const water = new THREE.Mesh(new THREE.PlaneGeometry(180, chunkLen), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, -4.6, 0);
  g.add(water);

  // Under-bridge concrete deck fascia
  const deckSlab = new THREE.Mesh(new THREE.BoxGeometry(20.8, 0.9, chunkLen), concreteMat);
  deckSlab.position.set(0, -0.5, 0);
  g.add(deckSlab);

  for (const sx of [-1, 1]) {
    const barrier = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.05, chunkLen), concreteMat);
    barrier.position.set(sx * 9.85, 0.52, 0);
    g.add(barrier);

    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, chunkLen), railMat);
    rail.position.set(sx * 10.1, 1.48, 0);
    g.add(rail);

    for (const lz of [-14, 14]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 6.4, 8), railMat);
      post.position.set(sx * 10.1, 3.2, lz);
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.16, 0.3), lampGlow);
      lamp.position.set(sx * 9.5, 6.4, lz);
      g.add(post, lamp);
    }
  }

  if (withPylonTower) {
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xe7e5e4, roughness: 0.65, metalness: 0.2 });
    const cableMat = new THREE.LineBasicMaterial({ color: 0xfef08a });
    for (const sx of [-1, 1]) {
      const pylon = new THREE.Mesh(new THREE.BoxGeometry(1.5, 29, 2.2), towerMat);
      pylon.position.set(sx * 11.4, 10.5, 0);
      pylon.castShadow = true;
      const flag = createBangladeshFlag(textures, 4.4);
      flag.position.set(sx * 11.4, 24.5, 0);
      g.add(pylon, flag);

      for (const cz of [-20, -14, -8, 8, 14, 20]) {
        const cGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(sx * 11.2, 23.5 - Math.abs(cz) * 0.28, 0),
          new THREE.Vector3(sx * 10.1, 1.1, cz)
        ]);
        g.add(new THREE.Line(cGeo, cableMat));
      }
    }
    const crossBeam = new THREE.Mesh(new THREE.BoxGeometry(24.2, 1.5, 1.8), towerMat);
    crossBeam.position.set(0, 21.5, 0);
    g.add(crossBeam);
  }

  const boatL = createBangladeshiBoat();
  boatL.position.set(-24 - Math.random() * 14, -4.65, (Math.random() - 0.5) * 24);
  boatL.rotation.y = Math.random() * 0.6;
  const boatR = createBangladeshiBoat();
  boatR.position.set(24 + Math.random() * 14, -4.65, (Math.random() - 0.5) * 24);
  boatR.rotation.y = Math.PI + (Math.random() - 0.5) * 0.6;
  g.add(boatL, boatR);

  return g;
}

/**
 * Dhaka Riverside Promenade (হাতিরঝিল / বুড়িগঙ্গা নদীর পাড়):
 * Sloped lush green grassy embankment + concrete ghat steps + Coconut Palms + BD Flag + realistic rippled river!
 */
export function createRiverfrontRightSide(
  chunkLen: number,
  waterMat: THREE.ShaderMaterial,
  textures: TextureBank
): THREE.Group {
  const g = new THREE.Group();
  const concreteMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.85 });
  const grassBankMat = new THREE.MeshStandardMaterial({ color: 0x3f6212, roughness: 0.94 });
  const railMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.7 });
  const lampGlow = new THREE.MeshBasicMaterial({ color: 0xfff3b0 });

  // Wide realistic rippled sunset river stretching out on the right!
  const water = new THREE.Mesh(new THREE.PlaneGeometry(110, chunkLen), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(70, -2.2, 0);
  g.add(water);

  // Sloped lush grassy riverbank embankment leading cleanly down into the water!
  const grassSlope = new THREE.Mesh(new THREE.PlaneGeometry(5.8, chunkLen), grassBankMat);
  grassSlope.rotation.x = -Math.PI / 2;
  grassSlope.rotation.y = 0.45;
  grassSlope.position.set(15.6, -1.05, 0);
  g.add(grassSlope);

  // Concrete embankment curb & riverside walkway railing
  const curb = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.7, chunkLen), concreteMat);
  curb.position.set(13.5, 0.25, 0);
  const rail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, chunkLen), railMat);
  rail.position.set(13.6, 1.32, 0);
  g.add(curb, rail);

  // Sleek angled lakeside LED streetlamps (no weird floating spheres!)
  for (const lz of [-16, 0, 16]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 5.4, 8), railMat);
    p.position.set(13.6, 2.7, lz);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.1, 0.1), railMat);
    arm.position.set(13.2, 5.38, lz);
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 0.22), lampGlow);
    bulb.position.set(12.9, 5.32, lz);
    g.add(p, arm, bulb);
  }

  // Graceful Bangladeshi Coconut Palm & Waving National Flag on the grassy river edge!
  const palm = createCoconutPalmTree();
  palm.position.set(14.5, -0.25, -10);
  palm.rotation.y = Math.random() * Math.PI * 2;
  const flag = createBangladeshFlag(textures, 6.2);
  flag.position.set(13.8, 0.25, 11);
  g.add(palm, flag);

  // Country boat + floating green water hyacinth patches (কচুরিপানা) near the bank!
  const boat = createBangladeshiBoat();
  boat.position.set(27 + Math.random() * 14, -2.25, (Math.random() - 0.5) * 22);
  boat.rotation.y = (Math.random() - 0.5) * 0.5;
  g.add(boat);

  const kochuriMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.85 });
  for (let k = 0; k < 5; k++) {
    const patch = new THREE.Mesh(new THREE.CylinderGeometry(0.9 + Math.random() * 0.6, 1.0, 0.12, 7), kochuriMat);
    patch.position.set(19 + Math.random() * 6, -2.18, -18 + k * 9 + (Math.random() - 0.5) * 3);
    g.add(patch);
  }

  return g;
}
