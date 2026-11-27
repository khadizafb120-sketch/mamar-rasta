import * as THREE from 'three';
import { SoundEngine } from './audio';
import { GlbAssetBank, GlbAssetKey } from './glbLoader';
import {
  PlayerVehicleRig,
  createBangladeshFlag,
  createCargoTruck,
  createDeliveryScooter,
  createDhakaBuilding,
  createDhakaCNG,
  createDhakaMetroTrain,
  createDhakaMetroViaductSegment,
  createDhakaMichil,
  createDhakaMicrobus,
  createElectricPoleWithChargeZone,
  createFootOverbridge,
  createLocalBus,
  createPedalRickshaw,
  createPlayerVehicle,
  createRealisticHuman,
  createRealisticTreeOrKrishnachura,
  createRiverBridgeSegment,
  createRiverfrontRightSide,
  createRoadsideCrowdCluster,
  createRoadsideSignboard,
  createRoadsideStall,
  createSculptedSUV,
  createSculptedSedan,
  createSidePowerLines,
  createTrafficGlbOrCustom,
  createTrafficSergeant,
  createUTurnZone,
  createWaterShaderMaterial
} from './models';
import { TextureBank, createTextureBank } from './textures';
import {
  BRIBE_COST_BASE,
  BUS_NAMES,
  BiomeKind,
  CRASH_QUIPS,
  ControlSettings,
  DeathReason,
  GameModeId,
  GamePhase,
  GarageSaveData,
  HudState,
  LANE_CENTERS,
  MemeClipId,
  MiniMapBlip,
  PlayableVehicleId,
  QualityMode,
  ROAD_HALF_WIDTH,
  RunStats,
  SOUND_BOMB_CUES,
  TickerMessage,
  VehicleModConfig,
  VehicleSpec,
  formatTakaBn,
  getVehicleSpec,
  loadGarageData,
  loadModConfig,
  pickRandom,
  saveGarageData,
  saveModConfig
} from './types';

type TrafficKind = 'car' | 'cng' | 'bike' | 'rickshaw' | 'bus' | 'truck';

type TrafficVariantId =
  | 'k_tractor'
  | 'k_tractor_shovel'
  | 'k_sedan'
  | 'k_sedan_sports'
  | 'k_hatchback'
  | 'k_suv'
  | 'k_suv_luxury'
  | 'k_taxi'
  | 'k_police'
  | 'k_ambulance'
  | 'k_van'
  | 'k_delivery'
  | 'k_delivery_flat'
  | 'k_race'
  | 'pickup_green'
  | 'pickup_red'
  | 'pickup_yellow'
  | 'pickup_purple'
  | 'delivery_van'
  | 'cng'
  | 'moto_street'
  | 'moto_superbike'
  | 'delivery_scooter'
  | 'rickshaw';

const ALL_NON_LETHAL_VARIANTS: TrafficVariantId[] = [
  'k_tractor',
  'k_tractor_shovel',
  'k_sedan',
  'k_sedan_sports',
  'k_hatchback',
  'k_suv',
  'k_suv_luxury',
  'k_taxi',
  'k_police',
  'k_ambulance',
  'k_van',
  'k_delivery',
  'k_delivery_flat',
  'k_race',
  'pickup_green',
  'pickup_red',
  'pickup_yellow',
  'pickup_purple',
  'delivery_van',
  'cng',
  'moto_street',
  'moto_superbike',
  'delivery_scooter',
  'rickshaw'
];

interface TrafficEntity {
  kind: TrafficKind;
  name: string;
  mesh: THREE.Group;
  laneX: number;
  speed: number;
  oncoming: boolean;
  halfW: number;
  halfL: number;
  lethal: boolean;
  smashed: boolean;
  nearMissed: boolean;
  honked: boolean;
  velX: number;
  velY: number;
  velZ: number;
  spinY: number;
  spinX: number;
  lossValue: number;
}

interface PedEntity {
  mesh: THREE.Group;
  dirX: number;
  walkSpeed: number;
  hit: boolean;
  velX: number;
  velY: number;
  velZ: number;
  spin: number;
  bobPhase: number;
}

interface StallEntity {
  kind: 'tea' | 'fuchka' | 'coconut';
  mesh: THREE.Group;
  smashed: boolean;
  velX: number;
  velY: number;
  velZ: number;
  spin: number;
  lossValue: number;
}

interface ChargeSpot {
  side: -1 | 1;
  worldX: number;
  worldZ: number;
  wireWorldX: number;
  wireWorldY: number;
  wireWorldZ: number;
  zoneMesh: THREE.Mesh;
  usedThisPass: boolean;
}

interface SergeantEntity {
  mesh: THREE.Group;
  worldX: number;
  worldZ: number;
  triggered: boolean;
  resolved: boolean;
}

interface MichilEntity {
  mesh: THREE.Group;
  laneX: number;
  worldZ: number;
  speed: number;
  hit: boolean;
  nearMissed: boolean;
  phase: number;
  velX: number;
  velY: number;
  velZ: number;
  spin: number;
}

interface RoadChunk {
  group: THREE.Group;
  zStart: number;
  biome: BiomeKind;
  chargeSpot: ChargeSpot | null;
  uTurnZ: number | null;
  uTurnUsed: boolean;
  stalls: StallEntity[];
}

interface DebrisParticle {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  life: number;
  maxLife: number;
  gravity: number;
}

interface MobChaser {
  mesh: THREE.Group;
  offsetX: number;
  offsetZ: number;
  phase: number;
}

export interface GameCallbacks {
  onHudUpdate: (hud: HudState) => void;
  onTicker: (msg: TickerMessage) => void;
  onGarageChange: (garage: GarageSaveData) => void;
  onGameOver: (stats: RunStats, snapshotDataUrl: string | null) => void;
}

const CHUNK_LEN = 48;
const CHUNK_COUNT = 6;
const SOUND_BOMB_CD = 6.0;
const CHAOS_DURATION = 10.0;

export class MamarRastaGame {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private textures: TextureBank;
  private glbs: GlbAssetBank;
  private waterMat: THREE.ShaderMaterial;
  public audio: SoundEngine;
  private callbacks: GameCallbacks;

  private garage: GarageSaveData;
  private mods: VehicleModConfig;
  private vehicleSpec: VehicleSpec;
  private player!: PlayerVehicleRig;
  private skyDome!: THREE.Mesh;
  private rainPoints!: THREE.Points;
  private hemiLight!: THREE.HemisphereLight;
  private metroTrain!: THREE.Group;
  private metroRelZ = -180;
  private chunks: RoadChunk[] = [];
  private chunkCursorZ = 24;
  private chunkIndexCounter = 0;
  private lastAnnouncedBiome: BiomeKind = 'city';

  private trafficDeck: TrafficVariantId[] = [];
  private traffic: TrafficEntity[] = [];
  private peds: PedEntity[] = [];
  private michils: MichilEntity[] = [];
  private sergeants: SergeantEntity[] = [];
  private particles: DebrisParticle[] = [];
  private mobChasers: MobChaser[] = [];

  private lightningLine!: THREE.Line;
  private lightningGeo!: THREE.BufferGeometry;
  private shockwaveRing!: THREE.Mesh;
  private shockwaveLife = 0;

  private keys = new Set<string>();
  private touchSteer = 0;
  private touchSlow = false;
  private touchGas = false;

  private settings: ControlSettings;

  private phase: GamePhase = 'menu';
  private playerX = -2.35;
  private playerZ = 0;
  private playerVelX = 0;
  private currentHoverY = 0;
  private speed = 14;
  private steerAngle = 0;

  private battery = 100;
  private isCharging = false;
  private chargeToastLock = 0;
  private chaos = 0;
  private chaosActive = false;
  private chaosTimeLeft = 0;
  private chaosShieldUsed = false;

  private mobRage = 0;
  private mobDistance = 28;
  private mobChasing = false;

  private runCashTk = 1000;
  private combo = 0;
  private comboTimer = 0;
  private soundBombTimer = 0;
  private wrongSideDuration = 0;
  private wrongSideMemePlayed = false;

  private sergeantAlertActive = false;
  private sergeantAlertTime = 0;
  private sergeantAlertMaxTime = 3.8;
  private sergeantBribeCost = BRIBE_COST_BASE;
  private activeSergeant: SergeantEntity | null = null;

  private nextTrafficZ = -36;
  private nextPedZ = -56;
  private nextMichilZ = -110;
  private nextSergeantZ = -175;
  private lastPlayerSide = -1;

  private shakeIntensity = 0;
  private crashSpinTimer = 0;
  private dustAccum = 0;
  private tickerIdCounter = 1;
  private hudEmitAccum = 0;
  private fpsFrames = 0;
  private fpsAccum = 0;
  private currentFps = 60;
  private animId = 0;
  private lastTimestamp = 0;
  private pendingSnapshot = false;

  private stats!: RunStats;
  private particleGeo = new THREE.BoxGeometry(0.24, 0.24, 0.24);
  private dustGeo = new THREE.SphereGeometry(0.18, 6, 6);

  constructor(canvas: HTMLCanvasElement, settings: ControlSettings, callbacks: GameCallbacks) {
    this.canvas = canvas;
    this.settings = { ...settings };
    this.callbacks = callbacks;
    this.garage = loadGarageData();
    this.mods = loadModConfig();
    this.vehicleSpec = getVehicleSpec(this.garage.selected);
    this.stats = this.freshStats();

    this.audio = new SoundEngine();
    this.audio.setSoundEnabled(settings.soundEnabled);
    this.audio.setVoiceEnabled(settings.voiceEnabled);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: settings.quality !== 'low',
      powerPreference: 'high-performance'
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xe59c62);
    this.scene.fog = new THREE.FogExp2(0xdd9b64, 0.0056);

    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.2, 340);
    this.textures = createTextureBank();
    this.waterMat = createWaterShaderMaterial(this.textures);
    this.glbs = new GlbAssetBank();

    this.setupEnvironmentAndSky();
    this.setupLighting();
    this.setupSpecialEffects();
    this.setupRainSystem();
    this.applyQuality(settings.quality);
    this.applyGameModeAtmosphere(settings.gameMode);

    this.mountPlayerVehicle(this.garage.selected);

    this.metroTrain = createDhakaMetroTrain(this.textures);
    this.metroTrain.position.set(-28.4, 18.0, -160);
    this.scene.add(this.metroTrain);

    this.setupMobPool();
    this.buildInitialChunks();

    // Load all 29 real 3D GitHub GLB vehicles & organic trees in fast non-blocking batches!
    this.glbs.startBatchedLoad((key: GlbAssetKey) => {
      if (this.phase === 'menu') {
        const needsRefresh =
          (key === 'supercar' && this.garage.selected === 'lamborghini') ||
          (key === 'superbike' && this.garage.selected === 'ninja_h2r') ||
          (key === 'moto_street' && this.garage.selected === 'street_cruiser') ||
          (key === 'k_tractor' && this.garage.selected === 'bd_tractor') ||
          (key === 'k_van' && this.garage.selected === 'dhaka_leguna') ||
          (key === 'k_future_car' && this.garage.selected === 'flying_car');
        if (needsRefresh) this.mountPlayerVehicle(this.garage.selected);
      }
    });

    this.bindEvents();
    this.handleResize();

    this.lastTimestamp = performance.now();
    this.loop(this.lastTimestamp);
  }

  private freshStats(): RunStats {
    return {
      nationalLoss: 0,
      garageEarnedTk: 0,
      vehicleNameBn: this.vehicleSpec ? this.vehicleSpec.nameBn : 'দেশি টেসলা',
      distanceMeters: 0,
      wrongSideMeters: 0,
      topSpeedKmh: 0,
      carsHit: 0,
      cngsHit: 0,
      bikesHit: 0,
      rickshawsHit: 0,
      stallsSmashed: 0,
      pedestriansBumped: 0,
      nearMisses: 0,
      soundBombsUsed: 0,
      chaosActivations: 0,
      bribesPaid: 0,
      bribeTotalTk: 0,
      illegalPowerStolenTk: 0,
      chargeHookups: 0,
      maxCombo: 0,
      survivalSeconds: 0,
      deathReason: 'bus',
      deathDetail: ''
    };
  }

  private setupEnvironmentAndSky() {
    // Dramatic Painted Fiery-Orange & Cobalt-Blue Dhaka Sunset Cloud SkyDome with Radiant Horizon Sun!
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uTime: { value: 0 },
        uSunDir: { value: new THREE.Vector3(0.08, 0.145, -0.985).normalize() }
      },
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uSunDir;
        varying vec3 vDir;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }
        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 4; i++) {
            v += a * noise(p);
            p = p * 2.04 + vec2(17.1, 9.2);
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec3 d = normalize(vDir);
          float h = clamp(d.y, 0.0, 1.0);

          // Rich sunset sky gradient matching reference: glowing gold horizon -> fiery orange -> sunset crimson -> deep cobalt blue zenith!
          vec3 goldHoriz = vec3(1.00, 0.86, 0.44);
          vec3 fieryOrange = vec3(0.98, 0.44, 0.14);
          vec3 magentaSky = vec3(0.68, 0.24, 0.36);
          vec3 cobaltTop = vec3(0.11, 0.24, 0.58);

          vec3 col = mix(goldHoriz, fieryOrange, smoothstep(0.0, 0.18, h));
          col = mix(col, magentaSky, smoothstep(0.16, 0.42, h));
          col = mix(col, cobaltTop, smoothstep(0.36, 0.82, h));

          // Dramatic swirling illuminated sunset cloud bands!
          if (h > 0.02) {
            vec2 cloudUv = d.xz / (h + 0.26) * 0.95 + vec2(uTime * 0.006, -uTime * 0.004);
            float c = fbm(cloudUv * 1.45);
            float cDetail = fbm(cloudUv * 3.1 + vec2(c * 0.9, -c * 0.6));
            float cloudMask = smoothstep(0.42, 0.78, c * 0.65 + cDetail * 0.35) * smoothstep(0.02, 0.16, h) * (1.0 - smoothstep(0.62, 0.96, h));

            float sunAlign = max(0.0, dot(d, uSunDir));
            vec3 cloudDark = mix(vec3(0.38, 0.19, 0.35), vec3(0.95, 0.34, 0.12), pow(sunAlign, 1.5));
            vec3 cloudLit = mix(vec3(1.0, 0.68, 0.26), vec3(1.0, 0.95, 0.68), pow(sunAlign, 2.5));
            vec3 cloudCol = mix(cloudDark, cloudLit, smoothstep(0.35, 0.85, cDetail));
            col = mix(col, cloudCol, cloudMask * 0.88);
          }

          // Blazing golden sunset sun orb + soft atmospheric glow directly down the Dhaka avenue!
          float sunDot = max(0.0, dot(d, uSunDir));
          float sunDisc = smoothstep(0.9962, 0.9978, sunDot);
          float sunInnerGlow = pow(sunDot, 28.0) * 0.85;
          float sunOuterGlow = pow(sunDot, 5.5) * 0.55;
          col += vec3(1.0, 0.62, 0.22) * sunOuterGlow;
          col += vec3(1.0, 0.90, 0.52) * sunInnerGlow;
          col = mix(col, vec3(1.0, 0.99, 0.92), sunDisc);

          gl_FragColor = vec4(col, 1.0);
        }
      `
    });
    this.skyDome = new THREE.Mesh(new THREE.SphereGeometry(280, 28, 18), skyMat);
    this.scene.add(this.skyDome);

    try {
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      const envScene = new THREE.Scene();
      const envDome = new THREE.Mesh(new THREE.SphereGeometry(20, 16, 12), skyMat);
      envScene.add(envDome);
      const rt = pmrem.fromScene(envScene, 0.02);
      this.scene.environment = rt.texture;
      pmrem.dispose();
    } catch {
      // safe fallback
    }
  }

  private setupLighting() {
    this.hemiLight = new THREE.HemisphereLight(0xffe9c2, 0x45352a, 1.1);
    this.scene.add(this.hemiLight);

    // Balanced warm golden Old Dhaka sunlight (rich shadows without washing out paint!)
    const sun = new THREE.DirectionalLight(0xffdfb0, 2.05);
    sun.position.set(24, 38, -28);
    sun.castShadow = this.settings.quality === 'max' || this.settings.quality === 'ultra' || this.settings.quality === 'ultra_max';
    sun.shadow.mapSize.width = this.settings.quality === 'ultra_max' ? 2048 : 1024;
    sun.shadow.mapSize.height = this.settings.quality === 'ultra_max' ? 2048 : 1024;
    sun.shadow.bias = -0.0004;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 160;
    const d = 38;
    sun.shadow.camera.left = -d;
    sun.shadow.camera.right = d;
    sun.shadow.camera.top = d;
    sun.shadow.camera.bottom = -d;
    this.scene.add(sun);
    this.scene.userData.sun = sun;
  }

  private setupRainSystem() {
    const count = 420;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 1] = Math.random() * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 44 - 10;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xcbe8ff,
      size: 0.16,
      transparent: true,
      opacity: 0.72
    });
    this.rainPoints = new THREE.Points(geo, mat);
    this.rainPoints.visible = false;
    this.scene.add(this.rainPoints);
  }

  private applyGameModeAtmosphere(mode: GameModeId) {
    const sun = this.scene?.userData?.sun as THREE.DirectionalLight | undefined;
    if (mode === 'night') {
      this.scene.background = new THREE.Color(0x070d1f);
      this.scene.fog = new THREE.FogExp2(0x0a132c, 0.0085);
      if (this.hemiLight) {
        this.hemiLight.color.setHex(0x3b5b9e);
        this.hemiLight.groundColor.setHex(0x111827);
        this.hemiLight.intensity = 0.78;
      }
      if (sun) {
        sun.color.setHex(0x93c5fd);
        sun.intensity = 0.85;
      }
      if (this.skyDome) this.skyDome.visible = false;
      if (this.rainPoints) this.rainPoints.visible = false;
    } else if (mode === 'rain') {
      this.scene.background = new THREE.Color(0x475c6e);
      this.scene.fog = new THREE.FogExp2(0x52677a, 0.0082);
      if (this.hemiLight) {
        this.hemiLight.color.setHex(0xcbd5e1);
        this.hemiLight.groundColor.setHex(0x27323d);
        this.hemiLight.intensity = 1.05;
      }
      if (sun) {
        sun.color.setHex(0xdbeafe);
        sun.intensity = 1.25;
      }
      if (this.skyDome) this.skyDome.visible = false;
      if (this.rainPoints) this.rainPoints.visible = true;
    } else {
      this.scene.background = new THREE.Color(0xe59c62);
      this.scene.fog = new THREE.FogExp2(0xdd9b64, 0.0056);
      if (this.hemiLight) {
        this.hemiLight.color.setHex(0xffe9c2);
        this.hemiLight.groundColor.setHex(0x45352a);
        this.hemiLight.intensity = 1.1;
      }
      if (sun) {
        sun.color.setHex(0xffdfb0);
        sun.intensity = 2.05;
      }
      if (this.skyDome) this.skyDome.visible = true;
      if (this.rainPoints) this.rainPoints.visible = false;
    }
  }

  private setupSpecialEffects() {
    const pts = new Array(8).fill(0).map(() => new THREE.Vector3());
    this.lightningGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const lMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 2 });
    this.lightningLine = new THREE.Line(this.lightningGeo, lMat);
    this.lightningLine.visible = false;
    this.scene.add(this.lightningLine);

    const swGeo = new THREE.RingGeometry(0.8, 1.45, 36).rotateX(-Math.PI / 2);
    const swMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });
    this.shockwaveRing = new THREE.Mesh(swGeo, swMat);
    this.shockwaveRing.visible = false;
    this.scene.add(this.shockwaveRing);
  }

  private setupMobPool() {
    for (let i = 0; i < 6; i++) {
      // Every single angry mob chaser uses a 100% unique archetype & weapon!
      const m = createRealisticHuman(this.textures, 'angry', i * 3 + 1);
      m.visible = false;
      this.scene.add(m);
      this.mobChasers.push({
        mesh: m,
        offsetX: (i - 2.5) * 0.88,
        offsetZ: 0.65 * (i % 3),
        phase: i * 1.15
      });
    }
  }

  private mountPlayerVehicle(id: PlayableVehicleId) {
    if (this.player) {
      this.scene.remove(this.player.root);
    }
    this.vehicleSpec = getVehicleSpec(id);
    // Prioritize loading real GLB immediately when player picks a GLB-backed vehicle!
    const neededGlb: GlbAssetKey | null =
      id === 'lamborghini'
        ? 'supercar'
        : id === 'ninja_h2r'
        ? 'superbike'
        : id === 'street_cruiser'
        ? 'moto_street'
        : id === 'bd_tractor'
        ? 'k_tractor'
        : id === 'dhaka_leguna'
        ? 'k_van'
        : id === 'flying_car'
        ? 'k_future_car'
        : null;
    if (neededGlb && !this.glbs.has(neededGlb)) {
      this.glbs.loadKey(neededGlb, () => {
        if (this.garage.selected === id && this.phase === 'menu') {
          this.mountPlayerVehicle(id);
        }
      });
    }
    this.player = createPlayerVehicle(id, this.textures, this.glbs, this.mods);
    this.currentHoverY = this.player.baseHoverY;
    this.player.root.position.set(this.playerX, 0, this.playerZ);
    this.player.bodyGroup.position.y = this.currentHoverY;
    this.scene.add(this.player.root);
  }

  public getModConfig(): VehicleModConfig {
    return { ...this.mods };
  }

  public updateModConfig(partial: Partial<VehicleModConfig>): VehicleModConfig {
    this.mods = { ...this.mods, ...partial };
    saveModConfig(this.mods);
    this.mountPlayerVehicle(this.garage.selected);
    this.audio.playCashChime();
    return this.getModConfig();
  }

  public getPlayerXNorm(): number {
    return this.playerX / ROAD_HALF_WIDTH;
  }

  public getGarageData(): GarageSaveData {
    return { ...this.garage, owned: [...this.garage.owned] };
  }

  public selectVehicle(id: PlayableVehicleId): boolean {
    if (!this.garage.owned.includes(id)) return false;
    this.garage.selected = id;
    saveGarageData(this.garage);
    this.mountPlayerVehicle(id);
    this.audio.playCashChime();
    this.callbacks.onGarageChange(this.getGarageData());
    return true;
  }

  public buyVehicle(id: PlayableVehicleId): { ok: boolean; reason?: string } {
    const spec = getVehicleSpec(id);
    if (this.garage.owned.includes(id)) {
      this.selectVehicle(id);
      return { ok: true };
    }
    if (this.garage.walletTk < spec.price) {
      this.audio.playMemeClip('gajab_beijjati', 2, 1.0);
      return { ok: false, reason: 'আরও গাড়ি ভেঙে জাতীয় ক্ষতির টাকা জমাও!' };
    }
    this.garage.walletTk -= spec.price;
    this.garage.owned.push(id);
    this.garage.selected = id;
    saveGarageData(this.garage);
    this.mountPlayerVehicle(id);
    this.audio.playCashChime();
    this.audio.playRandomMeme(['haan_bhai_haan', 'ami_vala_na', 'hila_dala'], 3, 1.1);
    this.callbacks.onGarageChange(this.getGarageData());
    return { ok: true };
  }

  private biomeForChunkIndex(idx: number): BiomeKind {
    // Seamless Dhaka Journey: 5 City chunks -> 3 Riverfront (Hatirjheel/Buriganga) -> 3 Grand River Bridge!
    const cycle = idx % 11;
    if (cycle < 5) return 'city';
    if (cycle < 8) return 'riverfront';
    return 'bridge';
  }

  private buildInitialChunks() {
    for (const c of this.chunks) {
      this.scene.remove(c.group);
    }
    this.chunks = [];
    this.chunkCursorZ = 24;
    this.chunkIndexCounter = 0;
    this.lastAnnouncedBiome = 'city';
    for (let i = 0; i < CHUNK_COUNT; i++) {
      this.spawnNextChunk();
    }
  }

  private spawnNextChunk() {
    const zStart = this.chunkCursorZ;
    const zMid = zStart - CHUNK_LEN / 2;
    const idx = this.chunkIndexCounter++;
    const biome = this.biomeForChunkIndex(idx);
    const group = new THREE.Group();

    // Rich Old Dhaka 4-Lane Asphalt (grounded dry sheen, rain-slick glossy in Monsoon Rain mode!)
    const isRain = this.settings.gameMode === 'rain';
    const roadMat = new THREE.MeshStandardMaterial({
      map: this.textures.road,
      bumpMap: this.textures.roadBump,
      bumpScale: 0.06,
      roughnessMap: this.textures.roadRoughness,
      roughness: isRain ? 0.3 : 0.72,
      metalness: isRain ? 0.28 : 0.1,
      envMapIntensity: isRain ? 1.85 : 1.1
    });
    const road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_HALF_WIDTH * 2, CHUNK_LEN), roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0, zMid);
    road.receiveShadow = true;
    group.add(road);

    // Center median blocks WITH U-Turn Cutout gap every 3rd city chunk!
    const hasUTurn = biome === 'city' && idx > 0 && idx % 3 === 1;
    let uTurnZ: number | null = null;
    if (hasUTurn) {
      const ut = createUTurnZone(this.textures);
      ut.position.set(0, 0, zMid);
      group.add(ut);
      uTurnZ = zMid;
    } else {
      const studMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
      for (let s = 0; s < 4; s++) {
        const stud = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.36), studMat);
        stud.position.set(0, 0.025, zStart - 6 - s * 12);
        group.add(stud);
      }
    }
    const curbW = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.55 });
    const curbB = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.72 });
    if (biome !== 'bridge') {
      for (const side of [-1, 1]) {
        for (let k = 0; k < 12; k++) {
          const cz = zStart - 2 - k * 4;
          const curb = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.28, 3.96), k % 2 === 0 ? curbW : curbB);
          curb.position.set(side * (ROAD_HALF_WIDTH + 0.16), 0.14, cz);
          group.add(curb);
        }
      }
    }

    const swMat = new THREE.MeshStandardMaterial({
      map: this.textures.sidewalk,
      bumpMap: this.textures.sidewalkBump,
      bumpScale: 0.06,
      roughness: 0.92
    });
    const apronMat = new THREE.MeshStandardMaterial({ color: 0x5c5247, roughness: 1 });

    let chargeSpot: ChargeSpot | null = null;
    const stalls: StallEntity[] = [];

    if (biome === 'bridge') {
      // GRAND ILLUMINATED CABLE-STAY RIVER BRIDGE (পদ্মা / হাতিরঝিল সেতু) with Bangladesh Flags!
      const bridgeSeg = createRiverBridgeSegment(CHUNK_LEN, this.waterMat, idx % 11 === 9, this.textures);
      bridgeSeg.position.set(0, 0, zMid);
      group.add(bridgeSeg);
    } else if (biome === 'riverfront') {
      // LEFT SIDE: Dhaka buildings + side-running utility wires + organic trees!
      const swL = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.28, CHUNK_LEN), swMat);
      swL.position.set(-ROAD_HALF_WIDTH - 2.8, 0.14, zMid);
      swL.receiveShadow = true;
      const apronL = new THREE.Mesh(new THREE.PlaneGeometry(52, CHUNK_LEN), apronMat);
      apronL.rotation.x = -Math.PI / 2;
      apronL.position.set(-40, -0.02, zMid);
      group.add(swL, apronL);

      // Continuous Dhaka power lines & glowing avenue streetlamps running cleanly along the left side!
      const sideLines = createSidePowerLines(CHUNK_LEN, false, this.textures);
      sideLines.position.set(0, 0, zMid);
      group.add(sideLines);

      // Right side narrow lakeside promenade sidewalk + grassy bank + rippled river & boats!
      const swR = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.28, CHUNK_LEN), swMat);
      swR.position.set(ROAD_HALF_WIDTH + 2.1, 0.14, zMid);
      group.add(swR);

      const riverRight = createRiverfrontRightSide(CHUNK_LEN, this.waterMat, this.textures);
      riverRight.position.set(0, 0, zMid);
      group.add(riverRight);

      for (let b = 0; b < 2; b++) {
        const bL = createDhakaBuilding(this.textures, idx + b, idx * 3 + b, -1);
        bL.position.set(-18.4, 0, zStart - 12 - b * 24);
        group.add(bL);
      }

      const tL = createRealisticTreeOrKrishnachura(idx % 2 === 0, this.glbs);
      tL.position.set(-11.8, 0.26, zMid);
      group.add(tL);

      // 100% unique roadside crowd enjoying the riverside breeze!
      const crowdR = createRoadsideCrowdCluster(this.textures, 4, 1);
      crowdR.position.set(11.4, 0, zMid + 6);
      group.add(crowdR);

      // Electric charge zone on left city side during riverfront
      if (idx % 2 === 1) {
        const poleBuilt = createElectricPoleWithChargeZone(this.textures, -1);
        poleBuilt.group.position.set(0, 0, zMid);
        group.add(poleBuilt.group);
        chargeSpot = {
          side: -1,
          worldX: -7.2,
          worldZ: zMid,
          wireWorldX: poleBuilt.wireAnchorLocal.x,
          wireWorldY: poleBuilt.wireAnchorLocal.y,
          wireWorldZ: zMid,
          zoneMesh: poleBuilt.zoneMesh,
          usedThisPass: false
        };
      }
    } else {
      // BUSTLING DHAKA CITY (Buildings, Shops, Metro Rail, Side Power Lines, BD Flags, Stalls & 100% Unique Crowds!)
      const swL = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.28, CHUNK_LEN), swMat);
      swL.position.set(-ROAD_HALF_WIDTH - 2.8, 0.14, zMid);
      swL.receiveShadow = true;
      const swR = swL.clone();
      swR.position.x = ROAD_HALF_WIDTH + 2.8;
      group.add(swL, swR);

      const apronL = new THREE.Mesh(new THREE.PlaneGeometry(52, CHUNK_LEN), apronMat);
      apronL.rotation.x = -Math.PI / 2;
      apronL.position.set(-40, -0.02, zMid);
      const apronR = apronL.clone();
      apronR.position.x = 40;
      group.add(apronL, apronR);

      // Continuous Dhaka golden streetlamps, potted shrubs & black power wires ALONG BOTH SIDES!
      const sideLines = createSidePowerLines(CHUNK_LEN, true, this.textures);
      sideLines.position.set(0, 0, zMid);
      group.add(sideLines);

      const viaduct = createDhakaMetroViaductSegment(CHUNK_LEN);
      viaduct.position.set(0, 0, zMid);
      group.add(viaduct);

      for (let b = 0; b < 3; b++) {
        const bz = zStart - 8 - b * 16;
        const bL = createDhakaBuilding(this.textures, idx + b, idx * 3 + b, -1);
        bL.position.set(-18.2, 0, bz);
        const bR = createDhakaBuilding(this.textures, idx + b + 2, idx * 3 + b + 5, 1);
        bR.position.set(18.2, 0, bz);
        group.add(bL, bR);
      }

      if (idx % 2 === 0) {
        const bdFlag = createBangladeshFlag(this.textures, 6.8);
        bdFlag.position.set(12.2, 0.25, zMid + 14);
        group.add(bdFlag);
      }

      const tL = createRealisticTreeOrKrishnachura(idx % 2 === 0, this.glbs);
      tL.position.set(-11.6, 0.26, zMid + 11);
      const tR = createRealisticTreeOrKrishnachura(idx % 2 !== 0, this.glbs);
      tR.position.set(11.6, 0.26, zMid - 10);
      group.add(tL, tR);

      // 100% Unique Non-Repeating Dhaka Roadside Crowds ("জনতার ভিড়") facing the street!
      const crowdL = createRoadsideCrowdCluster(this.textures, 4, -1);
      crowdL.position.set(-11.3, 0, zMid - 6);
      const crowdR = createRoadsideCrowdCluster(this.textures, 4, 1);
      crowdR.position.set(11.3, 0, zMid + 8);
      group.add(crowdL, crowdR);

      // Frequent Foot-Overbridges with huge SABBIR CODEX billboards & standing roadside signboards!
      if (idx > 0 && idx % 2 === 0) {
        const bridge = createFootOverbridge(this.textures, Math.floor(idx / 2));
        bridge.position.set(0, 0, zMid);
        group.add(bridge);
      }

      // Standing illuminated roadside SABBIR CODEX & Old Dhaka signboards on both sides!
      const signL = createRoadsideSignboard(this.textures, -1, idx % 2 === 0 ? 0 : 2);
      signL.position.set(-10.8, 0, zStart - 10);
      const signR = createRoadsideSignboard(this.textures, 1, idx % 2 === 0 ? 1 : 3);
      signR.position.set(10.8, 0, zStart - 34);
      group.add(signL, signR);

      if (idx > 0 && idx % 2 === 1) {
        const side: -1 | 1 = idx % 4 === 1 ? -1 : 1;
        const poleBuilt = createElectricPoleWithChargeZone(this.textures, side);
        poleBuilt.group.position.set(0, 0, zMid);
        group.add(poleBuilt.group);
        chargeSpot = {
          side,
          worldX: side * 7.2,
          worldZ: zMid,
          wireWorldX: poleBuilt.wireAnchorLocal.x,
          wireWorldY: poleBuilt.wireAnchorLocal.y,
          wireWorldZ: zMid,
          zoneMesh: poleBuilt.zoneMesh,
          usedThisPass: false
        };
      }

      if (idx > 0) {
        const kinds: ('tea' | 'fuchka' | 'coconut')[] = ['tea', 'fuchka', 'coconut'];
        for (let s = 0; s < 2; s++) {
          const side: -1 | 1 = (idx + s) % 2 === 0 ? -1 : 1;
          if (chargeSpot && chargeSpot.side === side) continue;
          const kind = kinds[(idx + s) % kinds.length];
          const mesh = createRoadsideStall(kind, this.textures);
          mesh.position.set(side * 8.3, 0, zStart - 12 - s * 22);
          group.add(mesh);
          stalls.push({
            kind,
            mesh,
            smashed: false,
            velX: 0,
            velY: 0,
            velZ: 0,
            spin: 0,
            lossValue: kind === 'fuchka' ? 28000 : kind === 'tea' ? 24000 : 19000
          });
        }
      }
    }

    this.scene.add(group);
    this.chunks.push({ group, zStart, biome, chargeSpot, uTurnZ, uTurnUsed: false, stalls });
    this.chunkCursorZ -= CHUNK_LEN;
  }

  public applyQuality(quality: QualityMode) {
    this.settings.quality = quality;
    const prMap: Record<QualityMode, number> = {
      low: 0.85,
      medium: 1.05,
      max: 1.25,
      ultra: 1.5,
      ultra_max: 2.0
    };
    const exposureMap: Record<QualityMode, number> = {
      low: 1.0,
      medium: 1.04,
      max: 1.08,
      ultra: 1.12,
      ultra_max: 1.16
    };
    const shadowsOn = quality === 'max' || quality === 'ultra' || quality === 'ultra_max';
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, prMap[quality] || 1.25));
    this.renderer.toneMappingExposure = exposureMap[quality] || 1.08;
    this.renderer.shadowMap.enabled = shadowsOn;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const sun = this.scene?.userData?.sun as THREE.DirectionalLight | undefined;
    if (sun) {
      sun.castShadow = shadowsOn;
      const targetSize = quality === 'ultra_max' ? 2048 : 1024;
      if (sun.shadow.mapSize.width !== targetSize) {
        sun.shadow.mapSize.width = targetSize;
        sun.shadow.mapSize.height = targetSize;
        sun.shadow.map?.dispose();
        sun.shadow.map = null;
      }
    }
  }

  public updateSettings(partial: Partial<ControlSettings>) {
    this.settings = { ...this.settings, ...partial };
    if (partial.soundEnabled !== undefined) this.audio.setSoundEnabled(partial.soundEnabled);
    if (partial.voiceEnabled !== undefined) this.audio.setVoiceEnabled(partial.voiceEnabled);
    if (partial.quality !== undefined) this.applyQuality(partial.quality);
    if (partial.gameMode !== undefined) {
      this.applyGameModeAtmosphere(partial.gameMode);
      if (this.phase === 'menu') this.buildInitialChunks();
    }
  }

  public previewRandomMeme() {
    this.audio.unlock();
    const cue = pickRandom(SOUND_BOMB_CUES);
    this.audio.playMemeClip(cue.clip, 3, 1.05);
    this.emitTicker(cue.bn, 'meme');
  }

  public startNewRun() {
    this.audio.unlock();
    this.audio.stopActiveMeme();
    this.clearDynamicEntities();
    this.buildInitialChunks();
    this.mountPlayerVehicle(this.garage.selected);
    this.refillTrafficDeck();

    this.stats = this.freshStats();
    this.playerX = -2.35;
    this.playerZ = 0;
    this.playerVelX = 0;
    this.speed = 13.5;
    this.steerAngle = 0;
    this.currentHoverY = this.player.baseHoverY;

    this.battery = 100;
    this.isCharging = false;
    this.chargeToastLock = 0;
    this.chaos = 0;
    this.chaosActive = false;
    this.chaosTimeLeft = 0;
    this.chaosShieldUsed = false;

    this.mobRage = 0;
    this.mobDistance = 28;
    this.mobChasing = false;
    for (const m of this.mobChasers) m.mesh.visible = false;

    this.runCashTk = 1000;
    this.combo = 0;
    this.comboTimer = 0;
    this.soundBombTimer = 0;
    this.wrongSideDuration = 0;
    this.wrongSideMemePlayed = false;

    this.sergeantAlertActive = false;
    this.sergeantAlertTime = 0;
    this.activeSergeant = null;

    this.nextTrafficZ = -36;
    this.nextPedZ = -56;
    this.nextMichilZ = this.settings.gameMode === 'hardcore' ? -80 : -115;
    this.nextSergeantZ = -175;
    this.lastPlayerSide = -1;
    this.applyGameModeAtmosphere(this.settings.gameMode);
    this.shakeIntensity = 0;
    this.crashSpinTimer = 0;
    this.pendingSnapshot = false;

    this.player.root.position.set(this.playerX, 0, this.playerZ);
    this.player.root.rotation.set(0, 0, 0);
    this.player.bodyGroup.rotation.set(0, 0, 0);
    this.player.chaosAura.visible = false;
    this.lightningLine.visible = false;

    this.phase = 'playing';
    this.audio.playHorn();
    const startClip = this.audio.playRandomMeme(['poribesh_sundor', 'kaise_hain'], 2, 1.0);
    this.emitTicker(
      startClip === 'poribesh_sundor'
        ? `🛺 পরিবেশটা সুন্দর না? ${this.vehicleSpec.nameBn} নিয়ে তাণ্ডব শুরু!`
        : `🛺 ক্যায়সে হ্যায় আপ লোগ! ডানে রং সাইড (২× জাতীয় ক্ষতি)!`,
      'meme'
    );
    this.emitHud();
  }

  public pauseGame() {
    if (this.phase === 'playing') {
      this.phase = 'paused';
      this.emitHud();
    }
  }

  public resumeGame() {
    if (this.phase === 'paused') {
      this.audio.unlock();
      this.phase = 'playing';
      this.lastTimestamp = performance.now();
      this.emitHud();
    }
  }

  public returnToMenu() {
    this.phase = 'menu';
    this.sergeantAlertActive = false;
    this.lightningLine.visible = false;
    this.audio.stopActiveMeme();
    this.mountPlayerVehicle(this.garage.selected);
    this.emitHud();
  }

  public setTouchSteer(val: number) {
    this.touchSteer = Math.max(-1, Math.min(1, val));
  }

  public setTouchSlow(active: boolean) {
    this.touchSlow = active;
  }

  public setTouchGas(active: boolean) {
    this.touchGas = active;
  }

  public triggerHorn() {
    if (this.phase !== 'playing') return;
    this.audio.playHorn();
    for (const p of this.peds) {
      if (!p.hit && Math.abs(p.mesh.position.z - this.playerZ) < 20) {
        p.walkSpeed = Math.min(6.5, p.walkSpeed + 1.8);
      }
    }
  }

  public triggerSoundBomb() {
    if (this.phase !== 'playing' || this.soundBombTimer > 0) return;

    this.audio.unlock();
    const cue = pickRandom(SOUND_BOMB_CUES);
    this.soundBombTimer = SOUND_BOMB_CD;
    this.stats.soundBombsUsed++;
    this.battery = Math.max(4, this.battery - 4.0);
    this.shakeIntensity = Math.max(this.shakeIntensity, 0.55);

    this.audio.playSoundBomb(cue.clip);
    this.emitTicker(cue.bn, 'meme');

    this.shockwaveRing.position.set(this.playerX, 0.25, this.playerZ);
    this.shockwaveRing.scale.set(1, 1, 1);
    this.shockwaveRing.visible = true;
    this.shockwaveLife = 0.68;

    if (this.mobChasing) {
      this.mobDistance = Math.min(30, this.mobDistance + 12.0);
    }
    this.mobRage = Math.max(0, this.mobRage - 20);

    for (const t of this.traffic) {
      const dz = Math.abs(t.mesh.position.z - this.playerZ);
      const dx = t.mesh.position.x - this.playerX;
      if (!t.smashed && !t.lethal && dz < 20 && Math.abs(dx) < 8.5) {
        t.laneX = Math.max(
          -ROAD_HALF_WIDTH + 1.5,
          Math.min(ROAD_HALF_WIDTH - 1.5, t.laneX + (dx >= 0 ? 2.2 : -2.2))
        );
      }
    }
    for (const p of this.peds) {
      if (!p.hit && Math.abs(p.mesh.position.z - this.playerZ) < 19) {
        p.dirX = p.mesh.position.x >= this.playerX ? 1 : -1;
        p.walkSpeed = 7.8;
      }
    }

    if (this.sergeantAlertActive) {
      this.sergeantAlertActive = false;
      if (this.activeSergeant) this.activeSergeant.resolved = true;
      this.activeSergeant = null;
      this.emitTicker('🔊 সাউন্ড বম্বে সার্জেন্ট চমকে গেছে — মামা চম্পট!', 'sergeant');
    }

    this.addChaos(13);
    this.emitHud();
  }

  public triggerChaosMode() {
    if (this.phase !== 'playing' || this.chaosActive || this.chaos < 100) return;

    this.chaosActive = true;
    this.chaosTimeLeft = CHAOS_DURATION;
    this.chaos = 100;
    this.chaosShieldUsed = false;
    this.stats.chaosActivations++;
    this.player.chaosAura.visible = true;
    this.shakeIntensity = 0.72;

    if (this.sergeantAlertActive) {
      this.sergeantAlertActive = false;
      if (this.activeSergeant) this.activeSergeant.resolved = true;
      this.activeSergeant = null;
    }

    this.audio.playChaosStart();
    const flyingMsg =
      this.vehicleSpec.id === 'flying_car'
        ? '🛸 ফ্লাইং মোড অ্যাক্টিভ! এখন বাসের ওপর দিয়ে উড়ে চলবে!'
        : '⚡ ক্যাওস মোড! ৩× জাতীয় ক্ষতি + আনলিমিটেড ব্যাটারি!';
    this.emitTicker(flyingMsg, 'chaos');
    this.emitHud();
  }

  public triggerPayTeaMoney() {
    if (this.phase !== 'playing' || !this.sergeantAlertActive) return;
    if (this.runCashTk < this.sergeantBribeCost) {
      this.audio.playMemeClip('gajab_beijjati', 2, 1.0);
      this.emitTicker('💸 চায়ের টাকা কম — সাউন্ড বম্ব মারো!', 'warn');
      return;
    }
    this.runCashTk -= this.sergeantBribeCost;
    this.stats.bribesPaid++;
    this.stats.bribeTotalTk += this.sergeantBribeCost;
    this.sergeantAlertActive = false;
    if (this.activeSergeant) this.activeSergeant.resolved = true;
    this.activeSergeant = null;

    this.mobRage = Math.max(0, this.mobRage - 30);
    this.mobDistance = Math.min(28, this.mobDistance + 8);
    this.audio.playCashChime();
    const clip = this.audio.playRandomMeme(['acchi_baat', 'dhele_dei'], 3, 1.08);
    this.emitTicker(
      clip === 'dhele_dei'
        ? `☕ চায়ের টাকা ঢেলে দেওয়া হয়েছে — সার্জেন্ট: "ঢেলে দেই?!"`
        : `☕ চায়ের টাকা পরিশোধ — সার্জেন্ট: "বড়ি আচ্ছি বাত কাহি!"`,
      'sergeant'
    );
    this.emitHud();
  }

  private clearDynamicEntities() {
    for (const t of this.traffic) this.scene.remove(t.mesh);
    this.traffic = [];
    for (const p of this.peds) this.scene.remove(p.mesh);
    this.peds = [];
    for (const m of this.michils) this.scene.remove(m.mesh);
    this.michils = [];
    for (const s of this.sergeants) this.scene.remove(s.mesh);
    this.sergeants = [];
    for (const pt of this.particles) this.scene.remove(pt.mesh);
    this.particles = [];
  }

  private bindEvents() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  public dispose() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    this.glbs.dispose();
    this.renderer.dispose();
  }

  private handleResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.fov = w < h ? 72 : 58;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    const tag = (e.target as HTMLElement | null)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    const code = e.code;
    this.keys.add(code);

    if (this.phase === 'playing') {
      if (code === 'Space' || code === 'KeyB') {
        e.preventDefault();
        this.triggerSoundBomb();
      } else if (code === 'KeyH') {
        this.triggerHorn();
      } else if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'KeyF') {
        this.triggerChaosMode();
      } else if (code === 'KeyE') {
        this.triggerPayTeaMoney();
      } else if (code === 'KeyP' || code === 'Escape') {
        this.pauseGame();
      }
    } else if (this.phase === 'paused' && (code === 'KeyP' || code === 'Escape')) {
      this.resumeGame();
    }
  };

  private handleKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
  };

  private loop = (timestamp: number) => {
    this.animId = requestAnimationFrame(this.loop);
    const rawDt = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;
    const dt = Math.min(0.05, Math.max(0.001, rawDt));

    // Animate shimmering river water & sunset clouds!
    this.waterMat.uniforms.uTime.value += dt;
    const skyMat = this.skyDome?.material as THREE.ShaderMaterial | undefined;
    if (skyMat?.uniforms?.uTime) skyMat.uniforms.uTime.value += dt;

    this.fpsFrames++;
    this.fpsAccum += rawDt;
    if (this.fpsAccum >= 0.5) {
      this.currentFps = Math.round(this.fpsFrames / this.fpsAccum);
      this.fpsFrames = 0;
      this.fpsAccum = 0;
    }

    if (this.phase === 'menu') {
      this.updateMenuShowcase(dt);
    } else if (this.phase === 'playing') {
      this.updatePlaying(dt);
    } else if (this.phase === 'gameover') {
      this.updateGameOverIdle(dt);
    }

    this.renderer.render(this.scene, this.camera);

    if (this.pendingSnapshot) {
      this.pendingSnapshot = false;
      let snap: string | null = null;
      try {
        snap = this.renderer.domElement.toDataURL('image/jpeg', 0.85);
      } catch {
        snap = null;
      }
      this.callbacks.onGameOver({ ...this.stats }, snap);
    }
  };

  private updateMenuShowcase(dt: number) {
    this.speed = 11.5;
    this.playerZ -= this.speed * dt;
    this.playerX = -2.35 + Math.sin(this.playerZ * 0.04) * 1.4;
    this.player.root.position.set(this.playerX, 0, this.playerZ);
    const hoverBob = this.player.baseHoverY > 0 ? this.player.baseHoverY + Math.sin(performance.now() * 0.005) * 0.14 : 0;
    this.player.bodyGroup.position.y = hoverBob;
    this.player.bodyGroup.rotation.z = -Math.cos(this.playerZ * 0.04) * 0.08;
    for (const w of this.player.wheels) w.rotation.x -= this.speed * dt * 2.2;

    this.recycleChunks();
    this.updateSkyAndMetro(dt);
    this.updateRain(dt);

    // Sleek angled showroom tracking shot behind & slightly right of your selected vehicle!
    this.camera.position.set(this.playerX * 0.65 + 2.8, 3.6 + hoverBob * 0.4, this.playerZ + 7.6);
    this.camera.lookAt(this.playerX, 1.3 + hoverBob * 0.5, this.playerZ - 5);
    this.audio.updateContinuous(0, false, false, false, this.vehicleSpec.engineType, dt);
  }

  private updateGameOverIdle(dt: number) {
    this.crashSpinTimer += dt;
    this.updateParticles(dt);
    this.updateSmashedEntities(dt);
    this.updateSkyAndMetro(dt);
    const angle = this.crashSpinTimer * 0.42;
    this.camera.position.set(
      this.playerX + Math.sin(angle) * 9.5,
      5.2,
      this.playerZ + Math.cos(angle) * 9.5
    );
    this.camera.lookAt(this.playerX, 1.5, this.playerZ);
    this.audio.updateContinuous(0, false, false, false, this.vehicleSpec.engineType, dt);
  }

  private getCurrentBiome(): BiomeKind {
    for (const c of this.chunks) {
      if (this.playerZ <= c.zStart && this.playerZ >= c.zStart - CHUNK_LEN) {
        return c.biome;
      }
    }
    return 'city';
  }

  private updatePlaying(dt: number) {
    this.stats.survivalSeconds += dt;
    if (this.soundBombTimer > 0) this.soundBombTimer = Math.max(0, this.soundBombTimer - dt);
    if (this.chargeToastLock > 0) this.chargeToastLock -= dt;
    if (this.comboTimer > 0) {
      this.comboTimer -= dt / 4.2;
      if (this.comboTimer <= 0) {
        this.comboTimer = 0;
        this.combo = 0;
      }
    }

    // Check biome transition for subtle ticker notice
    const biome = this.getCurrentBiome();
    if (biome !== this.lastAnnouncedBiome) {
      this.lastAnnouncedBiome = biome;
      if (biome === 'riverfront') {
        this.emitTicker('🌊 হাতিরঝিল / নদীর পাড় — নৌকা ও সোনালি রোদ!', 'biome');
      } else if (biome === 'bridge') {
        this.emitTicker('🌉 পদ্মা / হাতিরঝিল সেতু ব্রিজ — ফুল স্পিড!', 'biome');
      } else {
        this.emitTicker('🏙️ ব্যস্ত ঢাকা মেইন রোড — সাবধানে কাটিং!', 'biome');
      }
    }

    if (this.chaosActive) {
      this.chaosTimeLeft -= dt;
      this.chaos = Math.max(0, (this.chaosTimeLeft / CHAOS_DURATION) * 100);
      const hue = (performance.now() * 0.0024) % 1;
      (this.player.chaosAura.material as THREE.MeshBasicMaterial).color.setHSL(hue, 1, 0.55);
      this.player.chaosAura.rotation.z += dt * 4.2;
      if (this.chaosTimeLeft <= 0) {
        this.chaosActive = false;
        this.chaos = 0;
        this.player.chaosAura.visible = false;
        this.emitTicker('ক্যাওস মোড শেষ — আবার সাবধানে চালাও!', 'meme');
      }
    }

    let steerInput = this.touchSteer;
    if (this.keys.has('ArrowLeft') || this.keys.has('KeyA')) steerInput -= 1;
    if (this.keys.has('ArrowRight') || this.keys.has('KeyD')) steerInput += 1;
    steerInput = Math.max(-1, Math.min(1, steerInput));

    const wantSlow = this.touchSlow || this.keys.has('ArrowDown') || this.keys.has('KeyS');
    const wantGas =
      this.settings.autoGas || this.touchGas || this.keys.has('ArrowUp') || this.keys.has('KeyW');

    this.player.tailLightMat.color.setHex(wantSlow ? 0xff4444 : 0xbb1111);

    const maxSpeed = this.chaosActive ? this.vehicleSpec.chaosSpeedMs : this.vehicleSpec.maxSpeedMs;
    const minCruiseSpeed = this.isCharging ? 4.2 : 5.4;
    const accel = this.chaosActive ? 16.0 : 8.2;

    if (this.battery <= 0 && !this.chaosActive) {
      this.speed = Math.max(0, this.speed - 11.5 * dt);
      if (this.speed <= 0.35) {
        this.triggerGameOver('battery', 'ব্যাটারি ০% — রাস্তার মাঝখানে অচল');
        return;
      }
    } else if (wantSlow) {
      this.speed = Math.max(minCruiseSpeed, this.speed - 12.2 * dt);
    } else if (wantGas) {
      const distBoost = Math.min(3.8, this.stats.distanceMeters * 0.0022);
      this.speed = Math.min(maxSpeed + distBoost, this.speed + accel * dt);
    } else {
      this.speed = Math.max(minCruiseSpeed, this.speed - 3.6 * dt);
    }

    const steerPower = this.vehicleSpec.steerSpeed * (this.chaosActive ? 1.18 : 1.0);
    const targetVelX = steerInput * steerPower;
    this.playerVelX += (targetVelX - this.playerVelX) * Math.min(1, dt * 12.0);
    this.playerX += this.playerVelX * dt;

    const maxPlayerX = ROAD_HALF_WIDTH - 0.55;
    if (this.playerX < -maxPlayerX) {
      this.playerX = -maxPlayerX;
      this.playerVelX = Math.max(0, this.playerVelX * -0.2);
    } else if (this.playerX > maxPlayerX) {
      this.playerX = maxPlayerX;
      this.playerVelX = Math.min(0, this.playerVelX * -0.2);
    }

    const dz = this.speed * dt;
    this.playerZ -= dz;
    this.stats.distanceMeters += dz;

    const speedKmh = this.speed * 3.6;
    if (speedKmh > this.stats.topSpeedKmh) this.stats.topSpeedKmh = speedKmh;

    const wrongSide = this.playerX > 0.7;
    if (wrongSide) {
      this.stats.wrongSideMeters += dz;
      this.wrongSideDuration += dt;
      if (!this.wrongSideMemePlayed && this.wrongSideDuration > 2.4) {
        this.wrongSideMemePlayed = true;
        this.audio.playRandomMeme(['raha_nahi_jata', 'bahut_tez'], 1, 0.95);
      }
      if (!this.chaosActive) this.addChaos(dt * 3.8);
      const trickle = dz * (this.chaosActive ? 95 : 35) * this.vehicleSpec.lossMultiplier;
      this.stats.nationalLoss += trickle;
    } else {
      this.wrongSideDuration = 0;
      this.wrongSideMemePlayed = false;
    }

    // Flying Hover-Car altitude animation (flies ABOVE buses/trucks during Chaos Mode!!)
    const targetHover =
      this.player.baseHoverY > 0
        ? (this.chaosActive ? 3.2 : this.player.baseHoverY) + Math.sin(performance.now() * 0.006) * 0.14
        : 0;
    this.currentHoverY += (targetHover - this.currentHoverY) * Math.min(1, dt * 6);
    for (const jet of this.player.hoverJets) {
      const pulse = 0.85 + Math.sin(performance.now() * 0.025) * 0.25;
      jet.scale.setScalar(pulse);
    }

    // Road dust behind grounded vehicles (cyan plasma sparks for flying car!)
    this.dustAccum += dt;
    if (this.speed > 10 && this.dustAccum > 0.08 && this.particles.length < 75) {
      this.dustAccum = 0;
      const puffCol = this.player.baseHoverY > 0 ? 0x22d3ee : 0xd6b892;
      this.spawnDustPuff(
        this.playerX + (Math.random() > 0.5 ? 0.72 : -0.72),
        this.player.baseHoverY > 0 ? this.currentHoverY + 0.2 : 0.14,
        this.playerZ + 1.3,
        puffCol
      );
    }

    this.steerAngle += (steerInput * 0.42 - this.steerAngle) * Math.min(1, dt * 14);
    this.player.root.position.set(this.playerX, 0, this.playerZ);
    this.player.root.rotation.y = -this.playerVelX * 0.022;
    // Bikes lean inward into turns; 3-wheelers lean outward!
    const isBike = this.vehicleSpec.id === 'ninja_h2r' || this.vehicleSpec.id === 'street_cruiser';
    const targetLean = this.playerVelX * (isBike ? -0.032 : 0.024);
    this.player.bodyGroup.rotation.z += (targetLean - this.player.bodyGroup.rotation.z) * Math.min(1, dt * 10);
    this.player.bodyGroup.position.y =
      this.currentHoverY + (this.player.baseHoverY > 0 ? 0 : Math.sin(this.playerZ * 2.4) * 0.022);
    if (this.player.frontFork) this.player.frontFork.rotation.y = -this.steerAngle;
    if (this.player.driverHead) this.player.driverHead.rotation.y = -this.steerAngle * 0.65;
    for (const w of this.player.wheels) {
      w.rotation.x -= dz * 2.4;
    }

    if (this.player.batteryGlowMat) {
      if (this.isCharging) {
        this.player.batteryGlowMat.color.setHex(0x38bdf8);
        this.player.batteryGlowMat.emissive.setHex(0x38bdf8);
      } else if (this.battery < 22) {
        const pulse = Math.sin(performance.now() * 0.018) > 0;
        this.player.batteryGlowMat.color.setHex(pulse ? 0xef4444 : 0x7f1d1d);
        this.player.batteryGlowMat.emissive.setHex(pulse ? 0xef4444 : 0x450a0a);
      } else if (this.battery < 50) {
        this.player.batteryGlowMat.color.setHex(0xfacc15);
        this.player.batteryGlowMat.emissive.setHex(0xca8a04);
      } else {
        this.player.batteryGlowMat.color.setHex(0x22c55e);
        this.player.batteryGlowMat.emissive.setHex(0x16a34a);
      }
    }

    this.recycleChunks();
    this.spawnAheadEntities();

    this.updateIllegalCharging(dt);
    this.updateUTurnDrifts();
    if (!this.isCharging && !this.chaosActive && this.settings.gameMode !== 'freeroam') {
      const drain = (2.15 + (this.speed / 20) * 1.05) * this.vehicleSpec.batteryDrainMult * dt;
      this.battery = Math.max(0, this.battery - drain);
    } else if (this.settings.gameMode === 'freeroam') {
      this.battery = 100;
    }

    if (this.updateTrafficAndCollisions(dt)) return;
    this.updateStallCollisions(dt);
    this.updatePedestrians(dt);
    this.updateMichils(dt);
    if (this.updateSergeants(dt)) return;
    if (this.updateAngryMob(dt)) return;

    this.updateRain(dt);

    this.updateParticles(dt);
    this.updateShockwave(dt);
    this.updateSkyAndMetro(dt);
    this.updateCamera(dt);

    this.audio.updateContinuous(
      this.speed / this.vehicleSpec.maxSpeedMs,
      true,
      this.isCharging,
      this.chaosActive,
      this.vehicleSpec.engineType,
      dt
    );

    this.hudEmitAccum += dt;
    if (this.hudEmitAccum >= 0.05) {
      this.hudEmitAccum = 0;
      this.emitHud();
    }
  }

  private recycleChunks() {
    while (this.chunks.length > 0 && this.chunks[0].zStart - CHUNK_LEN > this.playerZ + 32) {
      const old = this.chunks.shift()!;
      this.scene.remove(old.group);
      this.spawnNextChunk();
    }
  }

  private refillTrafficDeck() {
    this.trafficDeck = [...ALL_NON_LETHAL_VARIANTS];
    for (let i = this.trafficDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.trafficDeck[i], this.trafficDeck[j]] = [this.trafficDeck[j], this.trafficDeck[i]];
    }
  }

  private drawNextTrafficVariant(): TrafficVariantId {
    if (this.trafficDeck.length === 0) this.refillTrafficDeck();
    return this.trafficDeck.pop()!;
  }

  private spawnAheadEntities() {
    while (this.nextTrafficZ > this.playerZ - 195) {
      const spawnZ = this.nextTrafficZ;
      this.spawnTrafficWave(spawnZ);
      const difficultyTighten = Math.min(7, this.stats.distanceMeters * 0.004);
      const hcBonus = this.settings.gameMode === 'hardcore' ? 4 : 0;
      this.nextTrafficZ -= Math.max(11, 18 + Math.random() * 14 - difficultyTighten - hcBonus);
    }

    // Spawn Dhaka Roadside Processions (রাস্তায় মিছিল!)
    while (this.nextMichilZ > this.playerZ - 185) {
      const chunkAtM = this.chunks.find((c) => this.nextMichilZ <= c.zStart && this.nextMichilZ >= c.zStart - CHUNK_LEN);
      if (!chunkAtM || chunkAtM.biome !== 'bridge') {
        const laneX = Math.random() < 0.55 ? -6.4 : 6.4;
        const mIdx = Math.floor(Math.random() * 3);
        const mMesh = createDhakaMichil(this.textures, mIdx);
        mMesh.position.set(laneX, 0, this.nextMichilZ);
        mMesh.rotation.y = laneX > 0 ? Math.PI : 0;
        this.scene.add(mMesh);
        this.michils.push({
          mesh: mMesh,
          laneX,
          worldZ: this.nextMichilZ,
          speed: laneX > 0 ? 3.2 : -2.8,
          hit: false,
          nearMissed: false,
          phase: Math.random() * 6,
          velX: 0,
          velY: 0,
          velZ: 0,
          spin: 0
        });
      }
      this.nextMichilZ -= this.settings.gameMode === 'hardcore' ? 88 + Math.random() * 45 : 135 + Math.random() * 75;
    }

    while (this.nextPedZ > this.playerZ - 165) {
      // Only spawn crossing pedestrians in City / Riverfront (not mid-bridge!)
      const chunkAtPed = this.chunks.find((c) => this.nextPedZ <= c.zStart && this.nextPedZ >= c.zStart - CHUNK_LEN);
      if (!chunkAtPed || chunkAtPed.biome !== 'bridge') {
        const pedMesh = createRealisticHuman(this.textures, 'random');
        const fromLeft = Math.random() > 0.5;
        pedMesh.position.set(fromLeft ? -9.7 : 9.7, 0, this.nextPedZ);
        // Face direction of walking (humans face -Z locally: -PI/2 faces +X, +PI/2 faces -X!)
        pedMesh.rotation.y = fromLeft ? -Math.PI / 2 : Math.PI / 2;
        this.scene.add(pedMesh);
        this.peds.push({
          mesh: pedMesh,
          dirX: fromLeft ? 1 : -1,
          walkSpeed: 2.2 + Math.random() * 1.8,
          hit: false,
          velX: 0,
          velY: 0,
          velZ: 0,
          spin: 0,
          bobPhase: Math.random() * 6
        });
      }
      this.nextPedZ -= 26 + Math.random() * 24;
    }

    while (this.nextSergeantZ > this.playerZ - 180) {
      const sMesh = createTrafficSergeant(this.textures);
      const spotChoice = Math.random();
      const sx = spotChoice < 0.45 ? 0 : spotChoice < 0.72 ? -8.5 : 8.5;
      sMesh.position.set(sx, 0, this.nextSergeantZ);
      this.scene.add(sMesh);
      this.sergeants.push({
        mesh: sMesh,
        worldX: sx,
        worldZ: this.nextSergeantZ,
        triggered: false,
        resolved: false
      });
      this.nextSergeantZ -= 155 + Math.random() * 85;
    }
  }

  private spawnTrafficWave(spawnZ: number) {
    const lanes = [...LANE_CENTERS];
    const count = Math.random() < 0.5 ? 2 : 1;
    let lethalInWave = 0;

    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * lanes.length);
      const laneX = lanes.splice(idx, 1)[0];
      const oncoming = laneX > 0;

      if (this.traffic.some((t) => Math.abs(t.mesh.position.z - spawnZ) < 16 && Math.abs(t.laneX - laneX) < 1.5)) {
        continue;
      }

      if (lethalInWave === 0 && Math.random() < (oncoming ? 0.26 : 0.14)) {
        this.spawnHeavyVehicle(Math.random() < 0.64 ? 'bus' : 'truck', laneX, spawnZ + (Math.random() - 0.5) * 4, oncoming);
        lethalInWave++;
      } else {
        const variant = this.drawNextTrafficVariant();
        this.spawnUniqueTrafficVariant(variant, laneX, spawnZ + (Math.random() - 0.5) * 5, oncoming);
      }
    }
  }

  private spawnHeavyVehicle(kind: 'bus' | 'truck', laneX: number, z: number, oncoming: boolean) {
    const bIdx = Math.floor(Math.random() * BUS_NAMES.length);
    let mesh: THREE.Group;
    let name: string;
    let halfL = 4.75;

    if (kind === 'bus') {
      mesh = createLocalBus(this.textures, bIdx);
      name = BUS_NAMES[bIdx];
    } else {
      const truckRoll = Math.random();
      if (truckRoll < 0.34) {
        mesh = createTrafficGlbOrCustom('k_garbage_truck', this.textures, this.glbs, () =>
          createCargoTruck(this.textures)
        );
        name = 'সিটি কর্পোরেশন ময়লার গাড়ি';
        halfL = 3.7;
      } else if (truckRoll < 0.65) {
        const kKey: GlbAssetKey = Math.random() < 0.5 ? 'k_truck' : 'k_truck_flat';
        mesh = createTrafficGlbOrCustom(kKey, this.textures, this.glbs, () =>
          createCargoTruck(this.textures)
        );
        name = kKey === 'k_truck_flat' ? 'রড-সিমেন্ট ফ্ল্যাট ট্রাক' : 'হেভি কার্গো ট্রাক';
        halfL = 3.65;
      } else {
        mesh = createCargoTruck(this.textures);
        name = 'মালবাহী ট্রাক';
        halfL = 4.4;
      }
    }

    mesh.position.set(laneX, 0, z);
    mesh.rotation.y = oncoming ? Math.PI : 0;
    this.scene.add(mesh);

    this.traffic.push({
      kind,
      name,
      mesh,
      laneX,
      speed: oncoming ? (kind === 'bus' ? 13.5 : 11.5) : kind === 'bus' ? -8.2 : -7.0,
      oncoming,
      halfW: 1.32,
      halfL,
      lethal: true,
      smashed: false,
      nearMissed: false,
      honked: false,
      velX: 0,
      velY: 0,
      velZ: 0,
      spinY: 0,
      spinX: 0,
      lossValue: 0
    });
  }

  private spawnUniqueTrafficVariant(variant: TrafficVariantId, laneX: number, z: number, oncoming: boolean) {
    let mesh: THREE.Group;
    let kind: TrafficKind = 'car';
    let halfW = 0.95;
    let halfL = 2.1;
    let baseSpeed = 10.5;
    let lossValue = 32000;
    let name = 'প্রাইভেট কার';

    switch (variant) {
      case 'k_tractor':
        mesh = createTrafficGlbOrCustom('k_tractor', this.textures, this.glbs, () =>
          createSculptedSUV(0xdc2626, this.textures)
        );
        name = 'বাংলাদেশী ট্র্যাক্টর';
        halfW = 1.05;
        halfL = 2.0;
        baseSpeed = oncoming ? 8.2 : 6.6;
        lossValue = 34000;
        break;
      case 'k_tractor_shovel':
        mesh = createTrafficGlbOrCustom('k_tractor_shovel', this.textures, this.glbs, () =>
          createSculptedSUV(0xea580c, this.textures)
        );
        name = 'মাটি কাটার ট্র্যাক্টর';
        halfW = 1.08;
        halfL = 2.2;
        baseSpeed = oncoming ? 7.8 : 6.2;
        lossValue = 38000;
        break;
      case 'k_sedan':
        mesh = createTrafficGlbOrCustom(
          'k_sedan',
          this.textures,
          this.glbs,
          () => createSculptedSedan(0xf8fafc, this.textures),
          pickRandom([0xf8fafc, 0x1e293b, 0x94a3b8, 0x2563eb])
        );
        name = 'টয়োটা অ্যালিয়ন';
        baseSpeed = oncoming ? 12.6 : 9.8;
        lossValue = 35000;
        break;
      case 'k_sedan_sports':
        mesh = createTrafficGlbOrCustom(
          'k_sedan_sports',
          this.textures,
          this.glbs,
          () => createSculptedSedan(0xb91c1c, this.textures),
          pickRandom([0xb91c1c, 0x18181b, 0x0ea5e9])
        );
        name = 'হোন্ডা সিভিক স্পোর্টস';
        baseSpeed = oncoming ? 13.4 : 10.6;
        lossValue = 42000;
        break;
      case 'k_hatchback':
        mesh = createTrafficGlbOrCustom(
          'k_hatchback',
          this.textures,
          this.glbs,
          () => createSculptedSedan(0x38bdf8, this.textures),
          pickRandom([0x38bdf8, 0x10b981, 0xf59e0b, 0xe11d48])
        );
        name = 'টয়োটা অ্যাকুয়া';
        halfL = 1.92;
        baseSpeed = oncoming ? 12.2 : 9.4;
        lossValue = 33000;
        break;
      case 'k_suv':
        mesh = createTrafficGlbOrCustom(
          'k_suv',
          this.textures,
          this.glbs,
          () => createSculptedSUV(0x0f172a, this.textures),
          pickRandom([0x0f172a, 0xe2e8f0, 0x166534])
        );
        name = 'পাজেরো / প্রাডো জিপ';
        halfW = 1.04;
        halfL = 2.28;
        baseSpeed = oncoming ? 12.6 : 9.8;
        lossValue = 46000;
        break;
      case 'k_suv_luxury':
        mesh = createTrafficGlbOrCustom(
          'k_suv_luxury',
          this.textures,
          this.glbs,
          () => createSculptedSUV(0x18181b, this.textures),
          pickRandom([0x18181b, 0xf8fafc])
        );
        name = 'ভিআইপি ল্যান্ড ক্রুজার';
        halfW = 1.08;
        halfL = 2.38;
        baseSpeed = oncoming ? 13.0 : 10.2;
        lossValue = 54000;
        break;
      case 'k_taxi':
        mesh = createTrafficGlbOrCustom('k_taxi', this.textures, this.glbs, () =>
          createSculptedSedan(0xfacc15, this.textures)
        );
        name = 'ঢাকা হলুদ ট্যাক্সি';
        baseSpeed = oncoming ? 12.0 : 9.4;
        lossValue = 32000;
        break;
      case 'k_police':
        mesh = createTrafficGlbOrCustom('k_police', this.textures, this.glbs, () =>
          createSculptedSUV(0x1e3a8a, this.textures)
        );
        name = 'ডিএমপি পুলিশ ভ্যান';
        baseSpeed = oncoming ? 13.0 : 10.2;
        lossValue = 45000;
        break;
      case 'k_ambulance':
        mesh = createTrafficGlbOrCustom('k_ambulance', this.textures, this.glbs, () =>
          createDhakaMicrobus(this.textures)
        );
        name = 'ঢাকা অ্যাম্বুলেন্স';
        halfW = 1.04;
        halfL = 2.55;
        baseSpeed = oncoming ? 13.8 : 10.8;
        lossValue = 42000;
        break;
      case 'k_van':
        mesh = createTrafficGlbOrCustom('k_van', this.textures, this.glbs, () =>
          createDhakaMicrobus(this.textures)
        );
        name = 'হাইয়েস মাইক্রোবাস';
        halfW = 0.98;
        halfL = 2.4;
        baseSpeed = oncoming ? 11.8 : 9.0;
        lossValue = 38000;
        break;
      case 'k_delivery':
        mesh = createTrafficGlbOrCustom('k_delivery', this.textures, this.glbs, () =>
          createDhakaMicrobus(this.textures)
        );
        name = 'কুরিয়ার কাভার্ড ভ্যান';
        halfW = 1.05;
        halfL = 2.65;
        baseSpeed = oncoming ? 10.6 : 8.4;
        lossValue = 39000;
        break;
      case 'k_delivery_flat':
        mesh = createTrafficGlbOrCustom('k_delivery_flat', this.textures, this.glbs, () =>
          createSculptedSUV(0x0284c7, this.textures)
        );
        name = 'মিনি পিকআপ ট্রাক';
        halfW = 1.02;
        halfL = 2.5;
        baseSpeed = oncoming ? 10.8 : 8.6;
        lossValue = 36000;
        break;
      case 'k_race':
        mesh = createTrafficGlbOrCustom('k_race', this.textures, this.glbs, () =>
          createSculptedSedan(0xea580c, this.textures)
        );
        name = 'গুলশান স্পোর্টস কার';
        baseSpeed = oncoming ? 14.5 : 11.8;
        lossValue = 58000;
        break;
      case 'pickup_green':
      case 'pickup_red':
      case 'pickup_yellow':
      case 'pickup_purple':
        mesh = createTrafficGlbOrCustom(variant, this.textures, this.glbs, () =>
          createSculptedSUV(0x2563eb, this.textures)
        );
        name = 'পিকআপ ভ্যান';
        halfW = 0.98;
        halfL = 2.1;
        baseSpeed = oncoming ? 11.5 : 9.0;
        lossValue = 34000;
        break;
      case 'delivery_van':
        mesh = createTrafficGlbOrCustom('delivery_van', this.textures, this.glbs, () =>
          createDhakaMicrobus(this.textures)
        );
        name = 'ডেলিভারি ভ্যান';
        halfW = 1.05;
        halfL = 2.45;
        baseSpeed = oncoming ? 10.5 : 8.2;
        lossValue = 36000;
        break;
      case 'cng':
        mesh = createDhakaCNG(this.textures);
        kind = 'cng';
        name = 'সিএনজি অটো';
        halfW = 0.75;
        halfL = 1.32;
        baseSpeed = oncoming ? 10.2 : 8.4;
        lossValue = 24000;
        break;
      case 'moto_street':
        mesh = createTrafficGlbOrCustom('moto_street', this.textures, this.glbs, () =>
          createDeliveryScooter(this.textures)
        );
        kind = 'bike';
        name = 'স্ট্রিট বাইক';
        halfW = 0.45;
        halfL = 1.05;
        baseSpeed = oncoming ? 13.4 : 11.0;
        lossValue = 18000;
        break;
      case 'moto_superbike':
        mesh = createTrafficGlbOrCustom(
          'superbike',
          this.textures,
          this.glbs,
          () => createDeliveryScooter(this.textures),
          pickRandom([0xdc2626, 0x2563eb, 0xf59e0b])
        );
        kind = 'bike';
        name = 'স্পোর্টস বাইক';
        halfW = 0.46;
        halfL = 1.1;
        baseSpeed = oncoming ? 14.8 : 12.2;
        lossValue = 25000;
        break;
      case 'delivery_scooter':
        mesh = createDeliveryScooter(this.textures);
        kind = 'bike';
        name = 'ফুড ডেলিভারি স্কুটার';
        halfW = 0.44;
        halfL = 0.98;
        baseSpeed = oncoming ? 11.2 : 9.2;
        lossValue = 17000;
        break;
      case 'rickshaw':
        mesh = createPedalRickshaw(this.textures);
        kind = 'rickshaw';
        name = 'প্যাডেল রিকশা';
        halfW = 0.68;
        halfL = 1.15;
        baseSpeed = oncoming ? 5.6 : 4.8;
        lossValue = 13000;
        break;
    }

    mesh.position.set(laneX, 0, z);
    mesh.rotation.y = oncoming ? Math.PI : 0;
    this.scene.add(mesh);

    this.traffic.push({
      kind,
      name,
      mesh,
      laneX,
      speed: oncoming ? baseSpeed : -baseSpeed,
      oncoming,
      halfW,
      halfL,
      lethal: false,
      smashed: false,
      nearMissed: false,
      honked: false,
      velX: 0,
      velY: 0,
      velZ: 0,
      spinY: 0,
      spinX: 0,
      lossValue
    });
  }

  private updateIllegalCharging(dt: number) {
    let activeSpot: ChargeSpot | null = null;
    for (const c of this.chunks) {
      const spot = c.chargeSpot;
      if (!spot) continue;
      const pulse = 0.75 + Math.sin(performance.now() * 0.008) * 0.22;
      (spot.zoneMesh.material as THREE.MeshBasicMaterial).opacity = pulse;

      if (Math.abs(this.playerX - spot.worldX) < 2.3 && Math.abs(this.playerZ - spot.worldZ) < 5.1) {
        activeSpot = spot;
      }
    }

    if (activeSpot) {
      this.isCharging = true;
      if (!activeSpot.usedThisPass) {
        activeSpot.usedThisPass = true;
        this.stats.chargeHookups++;
        if (this.chargeToastLock <= 0) {
          this.chargeToastLock = 3.2;
          this.audio.playRandomMeme(['ye_kya_hai', 'raha_nahi_jata'], 2, 0.95);
          this.emitTicker('⚡ হলুদ দাগে অবৈধ হুক লাগানো হয়েছে — ফ্রি চার্জ!', 'charge');
        }
      }

      const speedFactor = this.speed < 10 ? 1.4 : 0.9;
      this.battery = Math.min(100, this.battery + 36 * speedFactor * dt);
      const stolenTk = 1500 * dt;
      this.stats.illegalPowerStolenTk += stolenTk;
      this.stats.nationalLoss += stolenTk;

      const start = new THREE.Vector3(activeSpot.wireWorldX, activeSpot.wireWorldY, activeSpot.wireWorldZ);
      const end = new THREE.Vector3(
        this.playerX + this.player.roofHookPoint.x,
        this.currentHoverY + this.player.roofHookPoint.y,
        this.playerZ + this.player.roofHookPoint.z
      );
      const posAttr = this.lightningGeo.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < 8; i++) {
        const t = i / 7;
        const px = THREE.MathUtils.lerp(start.x, end.x, t) + (i > 0 && i < 7 ? (Math.random() - 0.5) * 0.48 : 0);
        const py = THREE.MathUtils.lerp(start.y, end.y, t) + (i > 0 && i < 7 ? (Math.random() - 0.5) * 0.48 : 0);
        const pz = THREE.MathUtils.lerp(start.z, end.z, t) + (i > 0 && i < 7 ? (Math.random() - 0.5) * 0.48 : 0);
        posAttr.setXYZ(i, px, py, pz);
      }
      posAttr.needsUpdate = true;
      this.lightningLine.visible = true;
      (this.lightningLine.material as THREE.LineBasicMaterial).color.setHex(
        Math.random() > 0.5 ? 0x38bdf8 : 0xfef08a
      );

      if (Math.random() < 0.45) {
        this.spawnDebris(end.x, end.y, end.z, 0xfef08a, 2);
      }
    } else {
      this.isCharging = false;
      this.lightningLine.visible = false;
    }
  }

  private updateTrafficAndCollisions(dt: number): boolean {
    const pHalfW =
      this.vehicleSpec.id === 'ninja_h2r' || this.vehicleSpec.id === 'street_cruiser'
        ? 0.46
        : this.vehicleSpec.id === 'bd_tractor'
        ? 0.94
        : 0.8;
    const pHalfL =
      this.vehicleSpec.id === 'cybertruck' || this.vehicleSpec.id === 'lamborghini' || this.vehicleSpec.id === 'flying_car'
        ? 2.1
        : this.vehicleSpec.id === 'bd_tractor' || this.vehicleSpec.id === 'dhaka_leguna'
        ? 1.85
        : 1.3;

    for (let i = this.traffic.length - 1; i >= 0; i--) {
      const t = this.traffic[i];

      if (t.smashed) {
        t.mesh.position.x += t.velX * dt;
        t.mesh.position.y = Math.max(0, t.mesh.position.y + t.velY * dt);
        t.mesh.position.z += t.velZ * dt;
        t.velY -= 18 * dt;
        t.mesh.rotation.y += t.spinY * dt;
        t.mesh.rotation.x += t.spinX * dt;
      } else {
        t.mesh.position.z += t.speed * dt;
        t.mesh.position.x += (t.laneX - t.mesh.position.x) * Math.min(1, dt * 4);

        const relZ = this.playerZ - t.mesh.position.z;
        if (t.lethal && t.oncoming && !t.honked && relZ > 8 && relZ < 58 && Math.abs(t.mesh.position.x - this.playerX) < 3.4) {
          t.honked = true;
          this.audio.playBusHorn();
        }

        const dx = Math.abs(t.mesh.position.x - this.playerX);
        const dz = Math.abs(t.mesh.position.z - this.playerZ);

        // Flying Car soaring in Chaos Mode glides cleanly OVER buses & trucks!
        const flyingOverBus = this.currentHoverY > 2.4;

        if (!flyingOverBus && dx < t.halfW + pHalfW && dz < t.halfL + pHalfL) {
          if (t.lethal) {
            if (this.settings.gameMode === 'freeroam' || (this.chaosActive && !this.chaosShieldUsed)) {
              if (this.chaosActive && this.settings.gameMode !== 'freeroam') this.chaosShieldUsed = true;
              this.playerVelX = this.playerX < t.mesh.position.x ? -15 : 15;
              this.shakeIntensity = 0.85;
              this.audio.playCrash(true);
              this.audio.playMemeClip('are_maiya', 3, 1.0);
              this.spawnDebris(this.playerX, 1.2, this.playerZ, 0xfacc15, 16);
              this.emitTicker(
                this.settings.gameMode === 'freeroam'
                  ? '🛞 ফ্রি রোম সেফটি! বাসের ধাক্কা সামলে নিলেন!'
                  : '🛡️ ক্যাওস শিল্ডে বাসের ধাক্কা সামলে নিলেন!',
                'chaos'
              );
              t.nearMissed = true;
            } else {
              this.audio.playCrash(true);
              this.shakeIntensity = 1.4;
              this.spawnDebris(this.playerX, 1.3, this.playerZ, 0xef4444, 24);
              this.spawnDebris(this.playerX, 1.1, this.playerZ, 0xfacc15, 16);
              this.triggerGameOver(t.kind === 'bus' ? 'bus' : 'truck', t.name);
              return true;
            }
          } else {
            t.smashed = true;
            const pushDir = t.mesh.position.x >= this.playerX ? 1 : -1;
            const smashBoost = this.vehicleSpec.smashMass;
            t.velX = pushDir * (10 + Math.random() * 7) * Math.min(1.6, smashBoost);
            t.velY = 5.5 + Math.random() * 3.8;
            t.velZ = -this.speed * 0.68;
            t.spinY = pushDir * (5 + Math.random() * 5);
            t.spinX = (Math.random() - 0.5) * 4;

            if (!this.chaosActive) {
              const slowFactor = Math.min(0.96, 0.84 + (smashBoost - 1) * 0.08);
              this.speed = Math.max(7.5, this.speed * slowFactor);
              this.playerVelX -= pushDir * (4.8 / Math.max(1, smashBoost));
            }
            this.shakeIntensity = Math.max(this.shakeIntensity, 0.48);
            this.audio.playCrash(false);
            const crashPool: MemeClipId[] = ['abe_saale', 'kaun_bhauk', 'kya_bola', 'wheeze_laugh', 'kaisi_lagi_swad', 'banjo_laugh'];
            this.audio.playRandomMeme(crashPool, 1, 0.95);
            this.spawnDebris(t.mesh.position.x, 1.0, t.mesh.position.z, 0xf97316, 12);

            if (t.kind === 'car') this.stats.carsHit++;
            else if (t.kind === 'cng') this.stats.cngsHit++;
            else if (t.kind === 'bike') this.stats.bikesHit++;
            else if (t.kind === 'rickshaw') this.stats.rickshawsHit++;

            const gained = this.registerNationalLoss(t.lossValue);
            this.addMobRage(t.kind === 'car' ? 14 : 10);
            this.addChaos(14);

            const quipKind = t.kind as 'car' | 'cng' | 'bike' | 'rickshaw';
            this.emitTicker(`💥 ${t.name} +${formatTakaBn(gained)} — ${pickRandom(CRASH_QUIPS[quipKind])}`, 'loss');
          }
        } else if (
          t.lethal &&
          !t.nearMissed &&
          t.mesh.position.z > this.playerZ + 1.5 &&
          t.mesh.position.z < this.playerZ + 9 &&
          dx < t.halfW + pHalfW + 1.9
        ) {
          t.nearMissed = true;
          this.stats.nearMisses++;
          const bonus = this.registerNationalLoss(18000);
          this.addChaos(19);
          this.audio.playNearMiss();
          this.audio.playRandomMeme(['bahut_tez', 'are_maiya'], 2, 0.95);
          this.emitTicker(
            flyingOverBus
              ? `🛸 বাসের ওপর দিয়ে ফ্লাই-ওভার! +${formatTakaBn(bonus)}`
              : `😱 কানের পাশ দিয়ে! +${formatTakaBn(bonus)} — বহুত তেজ হো রহে হো!`,
            'nearmiss'
          );
        }
      }

      if (t.mesh.position.z > this.playerZ + 38 || t.mesh.position.z < this.playerZ - 260) {
        this.scene.remove(t.mesh);
        this.traffic.splice(i, 1);
      }
    }
    return false;
  }

  private updateStallCollisions(dt: number) {
    for (const c of this.chunks) {
      for (const s of c.stalls) {
        if (s.smashed) {
          s.mesh.position.x += s.velX * dt;
          s.mesh.position.y = Math.max(0, s.mesh.position.y + s.velY * dt);
          s.mesh.position.z += s.velZ * dt;
          s.velY -= 16 * dt;
          s.mesh.rotation.z += s.spin * dt;
          s.mesh.rotation.x += s.spin * 0.7 * dt;
          continue;
        }
        const dx = Math.abs(s.mesh.position.x - this.playerX);
        const dz = Math.abs(s.mesh.position.z - this.playerZ);
        if (dx < 2.0 && dz < 2.2) {
          s.smashed = true;
          const dir = s.mesh.position.x >= this.playerX ? 1 : -1;
          s.velX = dir * 11;
          s.velY = 8.4;
          s.velZ = -this.speed * 0.85;
          s.spin = dir * 7;

          this.stats.stallsSmashed++;
          const gained = this.registerNationalLoss(s.lossValue);
          this.addMobRage(18);
          this.addChaos(18);
          this.shakeIntensity = Math.max(this.shakeIntensity, 0.58);
          this.audio.playCrash(false);
          this.audio.playMemeClip(s.kind === 'tea' ? 'dhele_dei' : 'wheeze_laugh', 2, 1.05);
          this.spawnDebris(s.mesh.position.x, 1.1, s.mesh.position.z, 0x92400e, 14);
          this.spawnDebris(s.mesh.position.x, 1.3, s.mesh.position.z, 0xfef08a, 8);
          this.emitTicker(`🫖 +${formatTakaBn(gained)} — ${pickRandom(CRASH_QUIPS.stall)}`, 'loss');
        }
      }
    }
  }

  private updatePedestrians(dt: number) {
    for (let i = this.peds.length - 1; i >= 0; i--) {
      const p = this.peds[i];
      if (p.hit) {
        p.mesh.position.x += p.velX * dt;
        p.mesh.position.y = Math.max(0, p.mesh.position.y + p.velY * dt);
        p.mesh.position.z += p.velZ * dt;
        p.velY -= 19 * dt;
        p.mesh.rotation.x += p.spin * dt;
        p.mesh.rotation.z += p.spin * 0.8 * dt;
      } else {
        p.mesh.position.x += p.dirX * p.walkSpeed * dt;
        p.bobPhase += dt * 10;
        p.mesh.position.y = Math.abs(Math.sin(p.bobPhase)) * 0.1;
        const legL = p.mesh.userData.legL as THREE.Object3D | null;
        const legR = p.mesh.userData.legR as THREE.Object3D | null;
        if (legL && legR) {
          legL.rotation.x = Math.sin(p.bobPhase) * 0.48;
          legR.rotation.x = -Math.sin(p.bobPhase) * 0.48;
        }

        if (p.mesh.position.x > 10.4) {
          p.dirX = -1;
          p.mesh.rotation.y = Math.PI / 2;
        } else if (p.mesh.position.x < -10.4) {
          p.dirX = 1;
          p.mesh.rotation.y = -Math.PI / 2;
        }

        const dx = Math.abs(p.mesh.position.x - this.playerX);
        const dz = Math.abs(p.mesh.position.z - this.playerZ);
        if (this.currentHoverY < 1.8 && dx < 1.15 && dz < 1.5) {
          p.hit = true;
          const dir = p.mesh.position.x >= this.playerX ? 1 : -1;
          p.velX = dir * (9 + Math.random() * 5);
          p.velY = 8.5;
          p.velZ = -this.speed * 0.5;
          p.spin = dir * 11;

          this.stats.pedestriansBumped++;
          const gained = this.registerNationalLoss(14000);
          this.addMobRage(24);
          this.addChaos(10);
          this.shakeIntensity = Math.max(this.shakeIntensity, 0.38);
          this.audio.playCrash(false);
          this.audio.playRandomMeme(['kaun_bhauk', 'kya_bola', 'abe_saale'], 1, 0.95);
          this.spawnDebris(p.mesh.position.x, 1.0, p.mesh.position.z, 0xfef08a, 8);
          this.emitTicker(`👟 +${formatTakaBn(gained)} — ${pickRandom(CRASH_QUIPS.ped)}`, 'warn');
        }
      }

      if (p.mesh.position.z > this.playerZ + 28) {
        this.scene.remove(p.mesh);
        this.peds.splice(i, 1);
      }
    }
  }

  private updateSergeants(dt: number): boolean {
    for (let i = this.sergeants.length - 1; i >= 0; i--) {
      const s = this.sergeants[i];
      const ring = s.mesh.userData.ring as THREE.Mesh | undefined;
      if (ring) {
        const flash = Math.sin(performance.now() * 0.014) > 0;
        (ring.material as THREE.MeshBasicMaterial).color.setHex(flash ? 0x38bdf8 : 0xef4444);
      }

      if (!s.triggered) {
        const distX = Math.abs(s.worldX - this.playerX);
        const distZ = Math.abs(s.worldZ - this.playerZ);
        if (distZ < 9.5 && distX < 5.8) {
          s.triggered = true;
          if (this.chaosActive) {
            s.resolved = true;
            this.emitTicker('👮 সার্জেন্ট ক্যাওস দেখে স্যালুট দিয়ে সরে গেল!', 'sergeant');
          } else {
            this.sergeantAlertActive = true;
            this.sergeantAlertMaxTime = 3.8;
            this.sergeantAlertTime = this.sergeantAlertMaxTime;
            this.sergeantBribeCost = BRIBE_COST_BASE;
            this.activeSergeant = s;
            this.audio.playWhistle();
            this.audio.playRandomMeme(['ruk_ja', 'ruko_zara'], 2, 1.05);
            this.emitTicker('👮 সার্জেন্ট ধরছে! দ্রুত "চায়ের টাকা" (৳৫০০) দাও বা সাউন্ড বম্ব মারো!', 'sergeant');
          }
        }
      }

      if (s.worldZ > this.playerZ + 32) {
        this.scene.remove(s.mesh);
        this.sergeants.splice(i, 1);
      }
    }

    if (this.sergeantAlertActive) {
      this.sergeantAlertTime -= dt;
      if (this.sergeantAlertTime <= 0) {
        this.sergeantAlertActive = false;
        this.audio.playWhistle();
        this.triggerGameOver('sergeant', 'চায়ের টাকা না দেওয়ায় মামলা ও ডাম্পিং');
        return true;
      }
    }
    return false;
  }

  private updateAngryMob(dt: number): boolean {
    if (this.speed > 13.5 && this.mobRage > 0) {
      this.mobRage = Math.max(0, this.mobRage - dt * 3.2);
    }

    if (this.mobRage >= 25) {
      if (!this.mobChasing) {
        this.mobChasing = true;
        this.mobDistance = 21;
        this.audio.playRandomMeme(['shutiye_lal', 'public_marattok'], 2, 1.1);
        this.emitTicker('😡 পাবলিক ক্ষেপে গেছে — "শুঁটিয়ে লাল করে দেবো!" স্পিড বাড়াও!', 'warn');
      }
    } else if (this.mobChasing && this.mobRage < 12) {
      this.mobChasing = false;
      this.mobDistance = 28;
      for (const m of this.mobChasers) m.mesh.visible = false;
    }

    if (this.mobChasing) {
      const mobSpeed = 11.4 + (this.mobRage / 100) * 5.2;
      const deltaDist = (this.speed - mobSpeed) * dt * 0.9;
      this.mobDistance = Math.min(28, Math.max(0, this.mobDistance + deltaDist));

      const visibleCount = Math.min(this.mobChasers.length, 2 + Math.floor(this.mobRage / 22));
      for (let i = 0; i < this.mobChasers.length; i++) {
        const ch = this.mobChasers[i];
        ch.mesh.visible = i < visibleCount;
        if (!ch.mesh.visible) continue;
        ch.phase += dt * 15;
        const cx = THREE.MathUtils.clamp(this.playerX + ch.offsetX, -ROAD_HALF_WIDTH + 0.6, ROAD_HALF_WIDTH - 0.6);
        ch.mesh.position.set(cx, Math.abs(Math.sin(ch.phase)) * 0.22, this.playerZ + this.mobDistance + ch.offsetZ);
        ch.mesh.rotation.y = 0; // Humans face -Z locally, running straight after player!
        const armL = ch.mesh.userData.armL as THREE.Mesh | undefined;
        const armR = ch.mesh.userData.armR as THREE.Mesh | undefined;
        const legL = ch.mesh.userData.legL as THREE.Object3D | null;
        const legR = ch.mesh.userData.legR as THREE.Object3D | null;
        if (armL && armR) {
          armL.rotation.x = -2.4 + Math.sin(ch.phase) * 0.45;
          armR.rotation.x = -2.4 - Math.sin(ch.phase) * 0.45;
        }
        if (legL && legR) {
          legL.rotation.x = Math.sin(ch.phase) * 0.6;
          legR.rotation.x = -Math.sin(ch.phase) * 0.6;
        }
      }

      if (this.mobDistance <= 2.35 && !this.chaosActive && this.currentHoverY < 1.8) {
        this.audio.playDholaiSlap();
        this.shakeIntensity = 1.3;
        this.spawnDebris(this.playerX, 1.5, this.playerZ, 0xfef08a, 24);
        this.spawnDebris(this.playerX, 1.2, this.playerZ, 0xdc2626, 16);
        this.triggerGameOver('mob', 'উত্তেজিত জনতার পাবলিক ধোলাই');
        return true;
      }
    }
    return false;
  }

  private updateSmashedEntities(dt: number) {
    for (const t of this.traffic) {
      if (!t.smashed) continue;
      t.mesh.position.x += t.velX * dt;
      t.mesh.position.y = Math.max(0, t.mesh.position.y + t.velY * dt);
      t.mesh.position.z += t.velZ * dt;
      t.velY -= 18 * dt;
      t.mesh.rotation.y += t.spinY * dt;
    }
  }

  private updateParticles(dt: number) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.life -= dt;
      pt.mesh.position.x += pt.vx * dt;
      pt.mesh.position.y = Math.max(0.08, pt.mesh.position.y + pt.vy * dt);
      pt.mesh.position.z += pt.vz * dt;
      pt.vy -= pt.gravity * dt;
      pt.mesh.rotation.x += pt.rx * dt;
      pt.mesh.rotation.y += pt.ry * dt;
      const s = Math.max(0.01, pt.life / pt.maxLife);
      pt.mesh.scale.setScalar(s);

      if (pt.life <= 0) {
        this.scene.remove(pt.mesh);
        (pt.mesh.material as THREE.Material).dispose();
        this.particles.splice(i, 1);
      }
    }
  }

  private updateShockwave(dt: number) {
    if (this.shockwaveLife > 0) {
      this.shockwaveLife -= dt;
      const progress = 1 - Math.max(0, this.shockwaveLife / 0.68);
      const scale = 1 + progress * 16;
      this.shockwaveRing.scale.set(scale, scale, 1);
      this.shockwaveRing.position.set(this.playerX, 0.25, this.playerZ);
      (this.shockwaveRing.material as THREE.MeshBasicMaterial).opacity = (1 - progress) * 0.88;
      if (this.shockwaveLife <= 0) {
        this.shockwaveRing.visible = false;
      }
    }
  }

  private spawnDustPuff(x: number, y: number, z: number, colorHex: number) {
    const mat = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.45 });
    const mesh = new THREE.Mesh(this.dustGeo, mat);
    mesh.position.set(x, y, z);
    this.scene.add(mesh);
    this.particles.push({
      mesh,
      vx: (Math.random() - 0.5) * 1.4,
      vy: 0.6 + Math.random() * 0.6,
      vz: 2.2,
      rx: 0,
      ry: 0,
      life: 0.4,
      maxLife: 0.4,
      gravity: 0.6
    });
  }

  private spawnDebris(x: number, y: number, z: number, colorHex: number, count: number) {
    if (this.particles.length > 96) return;
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: colorHex });
      const mesh = new THREE.Mesh(this.particleGeo, mat);
      mesh.position.set(x + (Math.random() - 0.5) * 0.6, y, z + (Math.random() - 0.5) * 0.6);
      this.scene.add(mesh);
      const maxLife = 0.55 + Math.random() * 0.55;
      this.particles.push({
        mesh,
        vx: (Math.random() - 0.5) * 14,
        vy: 4 + Math.random() * 9,
        vz: (Math.random() - 0.5) * 14 - this.speed * 0.25,
        rx: (Math.random() - 0.5) * 12,
        ry: (Math.random() - 0.5) * 12,
        life: maxLife,
        maxLife,
        gravity: 18
      });
    }
  }

  private updateSkyAndMetro(dt: number) {
    this.skyDome.position.set(this.playerX, 0, this.playerZ);

    this.metroRelZ += 34 * dt;
    if (this.metroRelZ > 85) this.metroRelZ = -260;
    this.metroTrain.position.set(-28.4, 18.0, this.playerZ + this.metroRelZ);

    const sun = this.scene.userData.sun as THREE.DirectionalLight | undefined;
    if (sun) {
      sun.position.set(this.playerX + 16, 30, this.playerZ - 48);
      sun.target.position.set(this.playerX, 0, this.playerZ - 12);
      sun.target.updateMatrixWorld();
    }
  }

  private updateCamera(dt: number) {
    const baseFov = window.innerWidth < window.innerHeight ? 72 : 58;
    const speedExtra = Math.min(12, (this.speed / 30) * 10);
    const targetFov = baseFov + (this.chaosActive ? 10 : speedExtra);
    if (Math.abs(this.camera.fov - targetFov) > 0.1) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 6);
      this.camera.updateProjectionMatrix();
    }

    let shakeX = 0;
    let shakeY = 0;
    if (this.shakeIntensity > 0.01) {
      shakeX = (Math.random() - 0.5) * this.shakeIntensity;
      shakeY = (Math.random() - 0.5) * this.shakeIntensity;
      this.shakeIntensity = Math.max(0, this.shakeIntensity - dt * 2.6);
    }

    // Cinematic wide Dhaka avenue perspective matching reference screenshot (auto framed into golden sunset horizon!)
    const camX = this.playerX * 0.72 + shakeX;
    const camY = 3.95 + this.currentHoverY * 0.65 + shakeY;
    const camZ = this.playerZ + 7.9;
    this.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), Math.min(1, dt * 12));
    this.camera.lookAt(this.playerX * 0.45, 2.05 + this.currentHoverY * 0.45, this.playerZ - 26);
  }

  /**
   * Smashing traffic directly boosts National Loss (জাতীয় ক্ষতি) AND pays into Garage Wallet to buy supercars/bikes!
   */
  private registerNationalLoss(baseTk: number): number {
    this.combo++;
    this.comboTimer = 1.0;
    if (this.combo > this.stats.maxCombo) this.stats.maxCombo = this.combo;

    const wrongMult = this.playerX > 0.7 ? 2 : 1;
    const chaosMult = this.chaosActive ? 3 : 1;
    const vehMult = this.vehicleSpec.lossMultiplier;
    const comboBonus = 1 + Math.min(1.5, (this.combo - 1) * 0.18);
    const total = Math.round(baseTk * wrongMult * chaosMult * vehMult * comboBonus);

    this.stats.nationalLoss += total;
    // Credit Garage Wallet directly from your destruction (so smashing cars buys Ninja H2R, Lambo, Flying Car!)
    const hardcoreMult = this.settings.gameMode === 'hardcore' ? 2.0 : 1.0;
    const garageShare = Math.round(total * 0.55 * hardcoreMult);
    this.stats.garageEarnedTk += garageShare;
    this.garage.walletTk += garageShare;
    // Also add pocket tea money directly from crashes (no green road coins!)
    this.runCashTk += 120;
    return total;
  }

  private addMobRage(delta: number) {
    this.mobRage = Math.min(100, this.mobRage + delta);
  }

  private addChaos(delta: number) {
    if (this.chaosActive) return;
    const prev = this.chaos;
    this.chaos = Math.min(100, this.chaos + delta);
    if (prev < 100 && this.chaos >= 100) {
      this.emitTicker('⚡ ক্যাওস ১০০%! এখনই "ক্যাওস" বাটনে চাপ দাও!', 'chaos');
      this.audio.playNearMiss();
    }
  }

  private triggerGameOver(reason: DeathReason, detail: string) {
    this.phase = 'gameover';
    this.stats.deathReason = reason;
    this.stats.deathDetail = detail;
    this.sergeantAlertActive = false;
    this.lightningLine.visible = false;
    this.crashSpinTimer = 0;

    // Persist newly earned Garage Taka right away!
    saveGarageData(this.garage);
    this.callbacks.onGarageChange(this.getGarageData());

    if (reason === 'bus') {
      this.audio.playRandomMeme(['khatam_tata', 'laparwahi', 'nooo_dramatic'], 4, 1.12);
      this.player.bodyGroup.rotation.z = 0.62;
      this.player.bodyGroup.rotation.x = -0.32;
    } else if (reason === 'truck') {
      this.audio.playRandomMeme(['khatam_tata', 'oti_boro', 'nooo_dramatic'], 4, 1.12);
      this.player.bodyGroup.rotation.z = 0.65;
      this.player.bodyGroup.rotation.x = -0.32;
    } else if (reason === 'battery') {
      this.audio.playRandomMeme(['depression', 'funny_cry'], 4, 1.12);
    } else if (reason === 'sergeant') {
      this.audio.playRandomMeme(['gajab_beijjati', 'padhai_likhai', 'cha_dhele_dei_full'], 4, 1.12);
    } else if (reason === 'mob') {
      this.player.bodyGroup.rotation.z = 0.36;
    }

    this.pendingSnapshot = true;
    this.emitHud();
  }

  private emitTicker(text: string, kind: TickerMessage['kind']) {
    this.callbacks.onTicker({
      id: this.tickerIdCounter++,
      text,
      kind
    });
  }

  private hasNearBusAhead(): boolean {
    for (const t of this.traffic) {
      if (!t.lethal || t.smashed) continue;
      const ahead = this.playerZ - t.mesh.position.z;
      if (ahead > 4 && ahead < 46 && Math.abs(t.mesh.position.x - this.playerX) < 2.6) {
        return true;
      }
    }
    return false;
  }

  private updateUTurnDrifts() {
    const curSide = this.playerX >= 0 ? 1 : -1;
    if (curSide !== this.lastPlayerSide) {
      this.lastPlayerSide = curSide;
      for (const c of this.chunks) {
        if (c.uTurnZ !== null && !c.uTurnUsed && Math.abs(this.playerZ - c.uTurnZ) < 6.8) {
          c.uTurnUsed = true;
          const bonus = this.registerNationalLoss(22000);
          this.addChaos(16);
          this.audio.playNearMiss();
          this.spawnDebris(this.playerX, 0.3, this.playerZ, 0x38bdf8, 12);
          this.emitTicker(`🔄 পারফেক্ট ইউ-টার্ন ড্রিফট! +${formatTakaBn(bonus)}`, 'nearmiss');
          break;
        }
      }
    }
  }

  private updateMichils(dt: number) {
    for (let i = this.michils.length - 1; i >= 0; i--) {
      const m = this.michils[i];
      if (m.hit) {
        m.mesh.position.x += m.velX * dt;
        m.mesh.position.y = Math.max(0, m.mesh.position.y + m.velY * dt);
        m.mesh.position.z += m.velZ * dt;
        m.velY -= 17 * dt;
        m.mesh.rotation.y += m.spin * dt;
        m.mesh.rotation.x += m.spin * 0.5 * dt;
      } else {
        m.worldZ += m.speed * dt;
        m.mesh.position.z = m.worldZ;
        m.phase += dt * 9;
        const marchers = (m.mesh.userData.marchers as THREE.Group[] | undefined) || [];
        for (let k = 0; k < marchers.length; k++) {
          const p = marchers[k];
          p.position.y = Math.abs(Math.sin(m.phase + k * 0.7)) * 0.1;
        }

        const dx = Math.abs(m.laneX - this.playerX);
        const dz = Math.abs(m.worldZ - this.playerZ);
        if (this.currentHoverY < 1.8 && dx < 2.15 && dz < 2.3) {
          m.hit = true;
          const dir = m.laneX >= this.playerX ? 1 : -1;
          m.velX = dir * 11;
          m.velY = 8.8;
          m.velZ = -this.speed * 0.6;
          m.spin = dir * 8;
          this.stats.pedestriansBumped += 3;
          const gained = this.registerNationalLoss(42000);
          this.addMobRage(36);
          this.addChaos(22);
          this.shakeIntensity = Math.max(this.shakeIntensity, 0.75);
          this.audio.playCrash(false);
          this.audio.playRandomMeme(['public_marattok', 'shutiye_lal', 'hila_dala'], 3, 1.05);
          this.spawnDebris(m.laneX, 1.4, m.worldZ, 0xef4444, 16);
          this.emitTicker(`📢 মিছিলের মাঝখানে ঢুকে পড়লেন! +${formatTakaBn(gained)} — পাবলিক ক্ষেপছে!`, 'warn');
        } else if (!m.nearMissed && dz < 4.5 && dx < 4.6 && m.worldZ > this.playerZ + 1.0) {
          m.nearMissed = true;
          const bonus = this.registerNationalLoss(15000);
          this.emitTicker(`📢 মিছিল কাটিয়ে ওস্তাদি! +${formatTakaBn(bonus)}`, 'nearmiss');
        }
      }

      if (m.mesh.position.z > this.playerZ + 32 || m.mesh.position.z < this.playerZ - 260) {
        this.scene.remove(m.mesh);
        this.michils.splice(i, 1);
      }
    }
  }

  private updateRain(dt: number) {
    if (!this.rainPoints || !this.rainPoints.visible) return;
    this.rainPoints.position.set(this.playerX, 0, this.playerZ);
    const pos = this.rainPoints.geometry.getAttribute('position') as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) - 24 * dt;
      if (y < 0) y = 18 + Math.random() * 4;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  }

  private getDhakaAreaName(): string {
    const biome = this.getCurrentBiome();
    if (biome === 'bridge') return 'পদ্মা-হাতিরঝিল ব্রিজ';
    if (biome === 'riverfront') return 'বুড়িগঙ্গা / হাতিরঝিল পাড়';
    const areas = ['সদরঘাট • পুরান ঢাকা', 'শাঁখারী বাজার', 'চকবাজার', 'গুলিস্তান মোড়', 'মতিঝিল'];
    const idx = Math.floor(Math.abs(this.stats.distanceMeters) / 220) % areas.length;
    return areas[idx];
  }

  private collectMinimapBlips(): MiniMapBlip[] {
    const blips: MiniMapBlip[] = [];
    for (const t of this.traffic) {
      if (t.smashed) continue;
      const dz = this.playerZ - t.mesh.position.z;
      if (dz > -12 && dz < 120) {
        blips.push({ x: t.mesh.position.x, dz, kind: t.lethal ? 'bus' : 'car' });
      }
    }
    for (const m of this.michils) {
      if (m.hit) continue;
      const dz = this.playerZ - m.worldZ;
      if (dz > -8 && dz < 120) {
        blips.push({ x: m.laneX, dz, kind: 'michil' });
      }
    }
    for (const s of this.sergeants) {
      if (s.resolved) continue;
      const dz = this.playerZ - s.worldZ;
      if (dz > -8 && dz < 120) {
        blips.push({ x: s.worldX, dz, kind: 'sergeant' });
      }
    }
    for (const c of this.chunks) {
      if (c.chargeSpot) {
        const dz = this.playerZ - c.chargeSpot.worldZ;
        if (dz > -8 && dz < 120) {
          blips.push({ x: c.chargeSpot.worldX, dz, kind: 'charge' });
        }
      }
      if (c.uTurnZ !== null) {
        const dz = this.playerZ - c.uTurnZ;
        if (dz > -8 && dz < 120) {
          blips.push({ x: 0, dz, kind: 'uturn' });
        }
      }
    }
    return blips;
  }

  private emitHud() {
    const wrongSide = this.playerX > 0.7;
    const multiplier = (wrongSide ? 2 : 1) * (this.chaosActive ? 3 : 1);
    this.callbacks.onHudUpdate({
      phase: this.phase,
      nationalLoss: Math.round(this.stats.nationalLoss),
      walletTk: Math.round(this.garage.walletTk),
      runCashTk: Math.round(this.runCashTk),
      speedKmh: Math.round(this.speed * 3.6),
      battery: Math.round(this.battery),
      isCharging: this.isCharging,
      chaos: Math.round(this.chaos),
      chaosActive: this.chaosActive,
      chaosTimeLeft: this.chaosTimeLeft,
      mobRage: Math.round(this.mobRage),
      mobDistance: Math.round(this.mobDistance),
      mobChasing: this.mobChasing,
      wrongSide,
      biome: this.getCurrentBiome(),
      dhakaAreaBn: this.getDhakaAreaName(),
      gameMode: this.settings.gameMode,
      quality: this.settings.quality,
      minimapBlips: this.collectMinimapBlips(),
      vehicleId: this.garage.selected,
      combo: this.combo,
      comboTimer: this.comboTimer,
      multiplier,
      soundBombCooldown: this.soundBombTimer / SOUND_BOMB_CD,
      sergeantAlert: {
        active: this.sergeantAlertActive,
        timeLeft: this.sergeantAlertTime,
        maxTime: this.sergeantAlertMaxTime,
        bribeCost: this.sergeantBribeCost,
        canAfford: this.runCashTk >= this.sergeantBribeCost,
        label: 'সার্জেন্ট ধরছে!'
      },
      distanceMeters: Math.round(this.stats.distanceMeters),
      nearBusWarning: this.hasNearBusAhead(),
      fps: this.currentFps
    });
  }
}
