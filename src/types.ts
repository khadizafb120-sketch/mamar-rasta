export type GamePhase = 'menu' | 'playing' | 'paused' | 'gameover';

export type DeathReason = 'bus' | 'truck' | 'mob' | 'battery' | 'sergeant';

export type QualityMode = 'low' | 'medium' | 'max' | 'ultra' | 'ultra_max';

export type GameModeId = 'classic' | 'night' | 'rain' | 'freeroam' | 'hardcore';

export type BiomeKind = 'city' | 'riverfront' | 'bridge';

export const DEV_FACEBOOK_URL = 'https://www.facebook.com/share/1AKQ6La7YK/';

export interface QualityOptionSpec {
  id: QualityMode;
  labelBn: string;
  descBn: string;
}

export const QUALITY_OPTIONS: QualityOptionSpec[] = [
  { id: 'low', labelBn: 'লো', descBn: 'দ্রুত ৬০ FPS (বাজেট ফোন)' },
  { id: 'medium', labelBn: 'মিডিয়াম', descBn: 'ব্যালেন্সড ৩ডি গ্রাফিক্স' },
  { id: 'max', labelBn: 'ম্যাক্স', descBn: 'শ্যাডো + রিয়েল রিফ্লেকশন' },
  { id: 'ultra', labelBn: 'আল্ট্রা', descBn: 'হাই ডিটেইল আল্ট্রা গ্রাফিক্স' },
  { id: 'ultra_max', labelBn: 'আল্ট্রা ম্যাক্স', descBn: '২K শ্যাডো + ম্যাক্স রিয়েলিজম' }
];

export interface GameModeSpec {
  id: GameModeId;
  badge: string;
  labelBn: string;
  subBn: string;
}

export const GAME_MODES: GameModeSpec[] = [
  { id: 'classic', badge: '🏙️', labelBn: 'পুরান ঢাকা ক্লাসিক', subBn: 'সোনালি বিকেল • মিছিল • ইউ-টার্ন • নদী' },
  { id: 'night', badge: '🌙', labelBn: 'পুরান ঢাকা নাইট', subBn: 'রাতের নিয়ন ঢাকা • উজ্জ্বল হেডলাইট' },
  { id: 'rain', badge: '🌧️', labelBn: 'বর্ষার ঢাকা', subBn: 'ঝুম বৃষ্টি • ভেজা রাস্তা • ঝড়ো আকাশ' },
  { id: 'freeroam', badge: '🛞', labelBn: 'ফ্রি রোম / মডিং', subBn: 'মৃত্যু নেই • আনলিমিটেড ব্যাটারি' },
  { id: 'hardcore', badge: '🔥', labelBn: 'চরম তাণ্ডব (২× আয়)', subBn: 'বেশি বাস-মিছিল • দ্বিগুণ গ্যারেজ টাকা' }
];

export type ModPanelId = 'classic_art' | 'sabbir_codex' | 'bd_tiger' | 'cyber_neon' | 'funny_slogan';
export type ModRoofId = 'red_fringe' | 'gold_royal' | 'metro_blue' | 'carbon_sport';
export type ModWheelNeonId = 'chrome' | 'gold_spoke' | 'neon_cyan' | 'neon_rgb';
export type ModTopAccessoryId = 'none' | 'sabbir_sign' | 'bd_flag' | 'turbo_wing';

export interface VehicleModConfig {
  bodyColor: number;
  panelStyle: ModPanelId;
  roofStyle: ModRoofId;
  wheelNeon: ModWheelNeonId;
  topAccessory: ModTopAccessoryId;
}

export const MOD_BODY_COLORS: { hex: number; css: string; labelBn: string }[] = [
  { hex: 0x047857, css: '#047857', labelBn: 'পুরান ঢাকা সবুজ' },
  { hex: 0xb91c1c, css: '#b91c1c', labelBn: 'রয়্যাল লাল' },
  { hex: 0xd97706, css: '#d97706', labelBn: 'গোল্ডেন হলুদ' },
  { hex: 0x1d4ed8, css: '#1d4ed8', labelBn: 'ইলেকট্রিক নীল' },
  { hex: 0x18181b, css: '#27272a', labelBn: 'ম্যাট কালো' },
  { hex: 0x7e22ce, css: '#7e22ce', labelBn: 'বেগুনি বস' }
];

export const MOD_PANEL_STYLES: { id: ModPanelId; labelBn: string }[] = [
  { id: 'classic_art', labelBn: '🎨 পুরান ঢাকা রিকশা আর্ট' },
  { id: 'sabbir_codex', labelBn: '👑 SABBIR CODEX ফটো' },
  { id: 'bd_tiger', labelBn: '🇧🇩 লাল-সবুজ বাংলাদেশ' },
  { id: 'cyber_neon', labelBn: '⚡ সাইবার নিয়ন বস' },
  { id: 'funny_slogan', labelBn: '😂 মামার রাস্তা কমেডি' }
];

export const MOD_ROOF_STYLES: { id: ModRoofId; labelBn: string }[] = [
  { id: 'red_fringe', labelBn: 'লাল ছাদ + হলুদ ঝালর' },
  { id: 'gold_royal', labelBn: 'সোনালি রয়্যাল ছাদ' },
  { id: 'metro_blue', labelBn: 'ঢাকা মেট্রো নীল' },
  { id: 'carbon_sport', labelBn: 'কার্বন স্পোর্টস' }
];

export const MOD_WHEEL_NEONS: { id: ModWheelNeonId; labelBn: string }[] = [
  { id: 'chrome', labelBn: 'ক্রোম রিম' },
  { id: 'gold_spoke', labelBn: 'গোল্ডেন রিম' },
  { id: 'neon_cyan', labelBn: 'সায়ান আন্ডারগ্লো' },
  { id: 'neon_rgb', labelBn: 'ডিস্কো লাল-হলুদ গ্লো' }
];

export const MOD_TOP_ACCESSORIES: { id: ModTopAccessoryId; labelBn: string }[] = [
  { id: 'none', labelBn: 'কোনোটা না' },
  { id: 'sabbir_sign', labelBn: 'SABBIR CODEX লাইট' },
  { id: 'bd_flag', labelBn: '🇧🇩 জাতীয় পতাকা' },
  { id: 'turbo_wing', labelBn: '🏎️ স্পোর্টস স্পয়লার' }
];

const MOD_STORAGE_KEY = 'mamarRasta.mods.v1';

export function defaultModConfig(): VehicleModConfig {
  return {
    bodyColor: 0x047857,
    panelStyle: 'classic_art',
    roofStyle: 'red_fringe',
    wheelNeon: 'chrome',
    topAccessory: 'sabbir_sign'
  };
}

export function loadModConfig(): VehicleModConfig {
  try {
    const raw = localStorage.getItem(MOD_STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        bodyColor: typeof p.bodyColor === 'number' ? p.bodyColor : 0x047857,
        panelStyle: MOD_PANEL_STYLES.some((s) => s.id === p.panelStyle) ? p.panelStyle : 'classic_art',
        roofStyle: MOD_ROOF_STYLES.some((s) => s.id === p.roofStyle) ? p.roofStyle : 'red_fringe',
        wheelNeon: MOD_WHEEL_NEONS.some((s) => s.id === p.wheelNeon) ? p.wheelNeon : 'chrome',
        topAccessory: MOD_TOP_ACCESSORIES.some((s) => s.id === p.topAccessory) ? p.topAccessory : 'sabbir_sign'
      };
    }
  } catch {
    // ignore
  }
  return defaultModConfig();
}

export function saveModConfig(cfg: VehicleModConfig) {
  try {
    localStorage.setItem(MOD_STORAGE_KEY, JSON.stringify(cfg));
  } catch {
    // ignore
  }
}

export interface MiniMapBlip {
  x: number; // -ROAD_HALF_WIDTH .. +ROAD_HALF_WIDTH
  dz: number; // relative forward distance in meters (0..130)
  kind: 'bus' | 'car' | 'charge' | 'sergeant' | 'michil' | 'uturn';
}

export type PlayableVehicleId =
  | 'deshi_tesla'
  | 'dhaka_cng'
  | 'bd_tractor'
  | 'street_cruiser'
  | 'ninja_h2r'
  | 'dhaka_leguna'
  | 'cybertruck'
  | 'lamborghini'
  | 'flying_car';

export interface VehicleSpec {
  id: PlayableVehicleId;
  nameBn: string;
  subtitleBn: string;
  badge: string;
  price: number;
  maxSpeedMs: number;
  chaosSpeedMs: number;
  steerSpeed: number;
  smashMass: number;
  batteryDrainMult: number;
  lossMultiplier: number;
  engineType: 'electric' | 'cng' | 'superbike' | 'v12' | 'cyber' | 'hover';
  hoverHeight: number;
  accentHex: string;
  funnyDescBn: string;
}

export const PLAYABLE_VEHICLES: VehicleSpec[] = [
  {
    id: 'deshi_tesla',
    nameBn: 'দেশি টেসলা (অটো-রিকশা)',
    subtitleBn: 'ফ্রি স্টার্টার • নো লাইসেন্স, নো ব্রেক',
    badge: '🛺',
    price: 0,
    maxSpeedMs: 18.0,
    chaosSpeedMs: 25.5,
    steerSpeed: 13.4,
    smashMass: 1.0,
    batteryDrainMult: 1.0,
    lossMultiplier: 1.0,
    engineType: 'electric',
    hoverHeight: 0,
    accentHex: '#10b981',
    funnyDescBn: 'পুরান ঢাকার রিকশা আর্ট, ব্রেক নাই — শুধু হর্ন আর সাহস!'
  },
  {
    id: 'dhaka_cng',
    nameBn: 'সুপার সিএনজি টার্বো',
    subtitleBn: 'মিটারে যামু না • হাই-স্পিড গলি কাটিং',
    badge: '🟢',
    price: 60000,
    maxSpeedMs: 20.5,
    chaosSpeedMs: 28.0,
    steerSpeed: 15.2,
    smashMass: 1.15,
    batteryDrainMult: 0.9,
    lossMultiplier: 1.15,
    engineType: 'cng',
    hoverHeight: 0,
    accentHex: '#22c55e',
    funnyDescBn: 'ফাঁক পেলেই ঢুকে পড়ে! মিটার বন্ধ, টার্বো চালু!'
  },
  {
    id: 'bd_tractor',
    nameBn: 'বাংলাদেশী ট্র্যাক্টর পাওয়ার',
    subtitleBn: 'রিয়েল ৩ডি ট্র্যাক্টর • সামনে যা পড়বে চ্যাপ্টা!',
    badge: '🚜',
    price: 110000,
    maxSpeedMs: 19.5,
    chaosSpeedMs: 27.5,
    steerSpeed: 13.8,
    smashMass: 2.6,
    batteryDrainMult: 0.78,
    lossMultiplier: 1.4,
    engineType: 'cng',
    hoverHeight: 0,
    accentHex: '#ef4444',
    funnyDescBn: 'মাঠ থেকে সোজা ঢাকার মেইন রোডে! কার-সিএনজি ধাক্কায় উড়ে যায়!'
  },
  {
    id: 'street_cruiser',
    nameBn: 'ঢাকা স্ট্রিট বাইক ৩ডি',
    subtitleBn: 'রিয়েল ৩ডি বাইক • পাতলা গ্যাপে নিখুঁত কাটিং',
    badge: '🏍️',
    price: 160000,
    maxSpeedMs: 23.2,
    chaosSpeedMs: 31.5,
    steerSpeed: 16.6,
    smashMass: 0.95,
    batteryDrainMult: 0.85,
    lossMultiplier: 1.35,
    engineType: 'superbike',
    hoverHeight: 0,
    accentHex: '#f97316',
    funnyDescBn: 'দুই বাসের মাঝখানে ১ ফিট গ্যাপ? মামার কাছে হাইওয়ে!'
  },
  {
    id: 'ninja_h2r',
    nameBn: 'কাওয়াসাকি নিনজা H2R',
    subtitleBn: 'রিয়েল ৩ডি সুপারবাইক • সুপারচার্জড রকেট',
    badge: '⚡',
    price: 260000,
    maxSpeedMs: 28.5,
    chaosSpeedMs: 38.5,
    steerSpeed: 18.4,
    smashMass: 1.15,
    batteryDrainMult: 0.88,
    lossMultiplier: 1.55,
    engineType: 'superbike',
    hoverHeight: 0,
    accentHex: '#4ade80',
    funnyDescBn: 'সার্জেন্ট চোখ পিটপিট করার আগেই হাওয়া! নিনজা গ্রিন বিস্ট!'
  },
  {
    id: 'dhaka_leguna',
    nameBn: 'ঢাকা লেগুনা এক্সপ্রেস',
    subtitleBn: 'রিয়েল ৩ডি ভ্যান • হেভি স্ম্যাশ পাওয়ার',
    badge: '🚐',
    price: 350000,
    maxSpeedMs: 22.0,
    chaosSpeedMs: 30.5,
    steerSpeed: 14.0,
    smashMass: 2.25,
    batteryDrainMult: 0.8,
    lossMultiplier: 1.65,
    engineType: 'cng',
    hoverHeight: 0,
    accentHex: '#38bdf8',
    funnyDescBn: 'পেছনে হেলপার ঝুলছে, ব্রেক নাই — সামনে যা পড়ে সব উড়ায়া দেয়!'
  },
  {
    id: 'cybertruck',
    nameBn: 'টেসলা সাইবারট্রাক',
    subtitleBn: 'বুলেটপ্রুফ স্টিল • হেভি স্ম্যাশ মেশিন',
    badge: '🔺',
    price: 520000,
    maxSpeedMs: 26.8,
    chaosSpeedMs: 36.5,
    steerSpeed: 15.0,
    smashMass: 2.85,
    batteryDrainMult: 0.72,
    lossMultiplier: 1.9,
    engineType: 'cyber',
    hoverHeight: 0,
    accentHex: '#94a3b8',
    funnyDescBn: 'আসল দেশি বনাম বিদেশি টেসলা! প্রাইভেট কার খেলনার মতো ওড়ে!'
  },
  {
    id: 'lamborghini',
    nameBn: 'ল্যাম্বরগিনি অ্যাভেনটাডোর SVJ',
    subtitleBn: 'রিয়েল ৩ডি সুপারকার • V12 রোর + ২.১× ক্ষতি',
    badge: '🏎️',
    price: 850000,
    maxSpeedMs: 31.8,
    chaosSpeedMs: 42.5,
    steerSpeed: 18.0,
    smashMass: 1.8,
    batteryDrainMult: 0.78,
    lossMultiplier: 2.15,
    engineType: 'v12',
    hoverHeight: 0,
    accentHex: '#a3e635',
    funnyDescBn: 'ঢাকার রাস্তায় ল্যাম্বরগিনি! দেখেই পাবলিক সেলফি তোলার জন্য দৌড়াবে!'
  },
  {
    id: 'flying_car',
    nameBn: 'ফিউচার ফ্লাইং কার ২০৯৯',
    subtitleBn: 'রিয়েল ৩ডি ফিউচার হোভার-কার • বাসের ওপর দিয়ে ওড়ে!',
    badge: '🛸',
    price: 1200000,
    maxSpeedMs: 34.0,
    chaosSpeedMs: 45.5,
    steerSpeed: 19.2,
    smashMass: 2.5,
    batteryDrainMult: 0.65,
    lossMultiplier: 2.6,
    engineType: 'hover',
    hoverHeight: 1.05,
    accentHex: '#22d3ee',
    funnyDescBn: 'জ্যামে আটকানোর দিন শেষ! রাস্তার ওপরে ভেসে চলে, ক্যাওসে আকাশে ওড়ে!'
  }
];

export function getVehicleSpec(id: PlayableVehicleId): VehicleSpec {
  return PLAYABLE_VEHICLES.find((v) => v.id === id) || PLAYABLE_VEHICLES[0];
}

export interface GarageSaveData {
  walletTk: number;
  owned: PlayableVehicleId[];
  selected: PlayableVehicleId;
}

const GARAGE_STORAGE_KEY = 'mamarRasta.garage.v2';

export function loadGarageData(): GarageSaveData {
  try {
    const raw = localStorage.getItem(GARAGE_STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      const owned: PlayableVehicleId[] = Array.isArray(p.owned) ? p.owned : ['deshi_tesla'];
      if (!owned.includes('deshi_tesla')) owned.unshift('deshi_tesla');
      const selected: PlayableVehicleId = owned.includes(p.selected) ? p.selected : 'deshi_tesla';
      return {
        walletTk: typeof p.walletTk === 'number' && Number.isFinite(p.walletTk) ? Math.max(0, Math.round(p.walletTk)) : 0,
        owned,
        selected
      };
    }
  } catch {
    // ignore
  }
  return { walletTk: 0, owned: ['deshi_tesla'], selected: 'deshi_tesla' };
}

export function saveGarageData(data: GarageSaveData) {
  try {
    localStorage.setItem(GARAGE_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

export interface ControlSettings {
  autoGas: boolean;
  soundEnabled: boolean;
  voiceEnabled: boolean;
  quality: QualityMode;
  gameMode: GameModeId;
  driverName: string;
}

export interface RunStats {
  nationalLoss: number;
  garageEarnedTk: number;
  vehicleNameBn: string;
  distanceMeters: number;
  wrongSideMeters: number;
  topSpeedKmh: number;
  carsHit: number;
  cngsHit: number;
  bikesHit: number;
  rickshawsHit: number;
  stallsSmashed: number;
  pedestriansBumped: number;
  nearMisses: number;
  soundBombsUsed: number;
  chaosActivations: number;
  bribesPaid: number;
  bribeTotalTk: number;
  illegalPowerStolenTk: number;
  chargeHookups: number;
  maxCombo: number;
  survivalSeconds: number;
  deathReason: DeathReason;
  deathDetail: string;
}

export interface SergeantAlertState {
  active: boolean;
  timeLeft: number;
  maxTime: number;
  bribeCost: number;
  canAfford: boolean;
  label: string;
}

export interface HudState {
  phase: GamePhase;
  nationalLoss: number;
  walletTk: number;
  runCashTk: number;
  speedKmh: number;
  battery: number;
  isCharging: boolean;
  chaos: number;
  chaosActive: boolean;
  chaosTimeLeft: number;
  mobRage: number;
  mobDistance: number;
  mobChasing: boolean;
  wrongSide: boolean;
  biome: BiomeKind;
  dhakaAreaBn: string;
  gameMode: GameModeId;
  quality: QualityMode;
  minimapBlips: MiniMapBlip[];
  vehicleId: PlayableVehicleId;
  combo: number;
  comboTimer: number;
  multiplier: number;
  soundBombCooldown: number;
  sergeantAlert: SergeantAlertState;
  distanceMeters: number;
  nearBusWarning: boolean;
  fps: number;
}

export interface TickerMessage {
  id: number;
  text: string;
  kind: 'meme' | 'loss' | 'chaos' | 'charge' | 'sergeant' | 'warn' | 'nearmiss' | 'biome';
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  loss: number;
  rank: string;
  deathReason: DeathReason;
  date: string;
  distance: number;
}

export interface RankInfo {
  minLoss: number;
  title: string;
  badge: string;
  color: string;
}

export const ROAD_HALF_WIDTH = 9.4;
export const LANE_CENTERS = [-6.7, -2.35, 2.35, 6.7] as const;
export const NORMAL_LANES = [-6.7, -2.35] as const;
export const WRONG_LANES = [2.35, 6.7] as const;

export const BRIBE_COST_BASE = 500;

export const RANKS: RankInfo[] = [
  { minLoss: 0, title: 'নবীন দেশি টেসলা চালক', badge: '🛺', color: '#a3e635' },
  { minLoss: 80000, title: 'গলির অঘোষিত ত্রাস', badge: '⚡', color: '#facc15' },
  { minLoss: 250000, title: 'রং সাইড গ্র্যান্ডমাস্টার', badge: '🔥', color: '#fb923c' },
  { minLoss: 550000, title: 'ঢাকার রাস্তার জীবন্ত আতঙ্ক', badge: '💀', color: '#f87171' },
  { minLoss: 1000000, title: 'জাতীয় ক্ষতির ব্র্যান্ড অ্যাম্বাসেডর', badge: '👑', color: '#e879f9' },
  { minLoss: 2000000, title: 'মামার রাস্তার দলিলধারী সম্রাট', badge: '🏆', color: '#38bdf8' }
];

export function getRankForLoss(loss: number): RankInfo {
  let chosen = RANKS[0];
  for (const r of RANKS) {
    if (loss >= r.minLoss) chosen = r;
  }
  return chosen;
}

const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

export function toBanglaDigits(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

export function formatIndianNumber(n: number): string {
  const rounded = Math.max(0, Math.round(n));
  const str = String(rounded);
  if (str.length <= 3) return str;
  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  const formattedRest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return `${formattedRest},${lastThree}`;
}

export function formatTakaBn(amount: number): string {
  return `৳ ${toBanglaDigits(formatIndianNumber(amount))}`;
}

export function formatTakaCompactBn(amount: number): string {
  if (amount >= 10000000) {
    return `৳ ${toBanglaDigits((amount / 10000000).toFixed(2))} কোটি`;
  }
  if (amount >= 100000) {
    return `৳ ${toBanglaDigits((amount / 100000).toFixed(2))} লাখ`;
  }
  return formatTakaBn(amount);
}

export type MemeClipId =
  | 'khatam_tata'
  | 'kaise_hain'
  | 'kaun_bhauk'
  | 'gajab_beijjati'
  | 'kaisi_lagi_swad'
  | 'kya_bola'
  | 'ruk_ja'
  | 'ye_kya_hai'
  | 'raha_nahi_jata'
  | 'bahut_tez'
  | 'laparwahi'
  | 'are_maiya'
  | 'abe_saale'
  | 'acchi_baat'
  | 'wheeze_laugh'
  | 'ruko_zara'
  | 'hila_dala'
  | 'funny_cry'
  | 'depression'
  | 'bari_dilo_dholai'
  | 'ustha_marum'
  | 'shutiye_lal'
  | 'oti_boro'
  | 'poribesh_sundor'
  | 'bujhpata'
  | 'cha_dhele_dei_full'
  | 'dhele_dei'
  | 'haan_bhai_haan'
  | 'padhai_likhai'
  | 'banjo_laugh'
  | 'hasi_pay_marse'
  | 'ami_vala_na'
  | 'public_marattok'
  | 'nooo_dramatic';

export interface MemeCue {
  clip: MemeClipId;
  bn: string;
}

export const SOUND_BOMB_CUES: MemeCue[] = [
  { clip: 'ustha_marum', bn: '🔊 ইস! আবার ইংরেজি মারাও! কপালে উষ্টা মারুম!' },
  { clip: 'bujhpata', bn: '🔊 বুঝলে বুঝপাতা, না বুঝলে তেজপাতা!' },
  { clip: 'ami_vala_na', bn: '🔊 আমি তো ভালা না — ভালা লইয়া থাইক্কো! কথা ক্লিয়ার?' },
  { clip: 'hila_dala', bn: '🔊 কিউঁ, হিলা ডালা না?! ব্রেক ছাড়া তাণ্ডব!' },
  { clip: 'dhele_dei', bn: '🔊 একটু চা খাবেন? ঢেলে দেই?!' },
  { clip: 'kaisi_lagi_swad', bn: '🔊 হাঁ ভাই, কেমন লাগলো? আ গেয়া সোয়াদ?!' },
  { clip: 'ruko_zara', bn: '🔊 রুকো জারা, সবর করো! ধাক্কা-মুক্কি ছাড়া সাইড দাও!' },
  { clip: 'haan_bhai_haan', bn: '🔊 আরে হাঁ ভাই হাঁ! রাস্তা আমার মামার!' },
  { clip: 'bahut_tez', bn: '🔊 বহুত তেজ হো রহে হো হ্যাঁ?!' },
  { clip: 'banjo_laugh', bn: '🔊 হাহাহা! ব্রেক ফেইল, খেলা হবে!' }
];

export const CRASH_QUIPS: Record<'car' | 'cng' | 'bike' | 'rickshaw' | 'stall' | 'ped', string[]> = {
  car: [
    'কারের বাম্পার উড়ে গেল — "রাস্তা কি তোর মামার?!"',
    'করোলার লুকিং গ্লাস খতম! জাতীয় ক্ষতি বাড়লো!',
    'স্যারের গাড়িতে স্ক্র্যাচ! আবে সালে!'
  ],
  cng: [
    'সিএনজির সাথে গ্র্যান্ড টক্কর! মিটার ছাড়াই উসুল!',
    'সিএনজি ঘুরে গেল — "ভাই ব্রেক বাড়িতে ফালায়া আইছেন?!"'
  ],
  bike: [
    'বাইকার উড়ে ফুটপাতে — রাইড ক্যানসেল!',
    'ওস্তাদের কাটিংয়ে বাইকের আয়না উধাও!'
  ],
  rickshaw: [
    'প্যাডেল রিকশা চক্কর খেলো! পুরান ঢাকা লাইভ!',
    'রিকশার হুড আকাশে!'
  ],
  stall: [
    'চা-স্টল উড়ায়া দিছেন! ঢেলে দেই?!',
    'ফুচকার গাড়ি চ্যাপ্টা! টক পানি ভাসছে!',
    'ডাবওয়ালার ডাব গড়াগড়ি খাচ্ছে!'
  ],
  ped: [
    'রিলস দেখতে গিয়ে পথচারীর জুতা আকাশে!',
    'পথচারী ক্ষেপছে — "শুঁটিয়ে লাল করে দে!"'
  ]
};

export interface ShopSignSpec {
  name: string;
  sub: string;
  icon: 'tea' | 'biryani' | 'pharmacy' | 'salon' | 'battery' | 'hardware' | 'fuchka' | 'bakery';
  bg: string;
  accent: string;
}

export const SHOP_SIGNS: ShopSignSpec[] = [
  { name: 'মামা চা-স্টল ও ফ্লেক্সিলোড', sub: 'বাকি চাইলে লজ্জা পাবেন • স্পেশাল মালাই চা', icon: 'tea', bg: '#991b1b', accent: '#fde047' },
  { name: 'ভাই ভাই কাচ্চি ও তেহারী ঘর', sub: 'খাঁটি বাসমতি কাচ্চি ১২০৳ • বোরহানি ফ্রি', icon: 'biryani', bg: '#065f46', accent: '#facc15' },
  { name: 'ডিজিটাল সেলুন ও ফটোকপি', sub: 'ব্যাংকক কাটিং • ৩ টাকায় রঙিন ফটোকপি', icon: 'salon', bg: '#1e3a8a', accent: '#38bdf8' },
  { name: 'ব্যাটারি চার্জ গ্যারেজ ২৪/৭', sub: 'দেশি টেসলার ফাস্ট চার্জ • ব্রেক সারানো হয় না', icon: 'battery', bg: '#c2410c', accent: '#fef08a' },
  { name: 'সততা ফার্মেসি ও কনফেকশনারী', sub: 'মাথাব্যথার ওষুধ ও ঠান্ডা পানি পাওয়া যায়', icon: 'pharmacy', bg: '#0f766e', accent: '#a7f3d0' },
  { name: 'হাজী নান্না বিরিয়ানি হাউজ', sub: 'আসল পুরান ঢাকার স্বাদ • ২৪ ঘণ্টা খোলা', icon: 'biryani', bg: '#7f1d1d', accent: '#fbbf24' },
  { name: 'বিসমিল্লাহ ফুচকা ও চটপটি', sub: 'বেশি ঝাল, বেশি টক • রাস্তার পাশেই বসুন', icon: 'fuchka', bg: '#6d28d9', accent: '#fde047' },
  { name: 'মামার বেকারী ও মিষ্টান্ন ভাণ্ডার', sub: 'গরম সিঙ্গারা, পুরি ও রসমালাই', icon: 'bakery', bg: '#b45309', accent: '#fef3c7' },
  { name: 'নিউ ঢাকা হার্ডওয়্যার ও মোটরস', sub: 'অটো-রিকশার হর্ন ও রঙিন ঝালর মিলে', icon: 'hardware', bg: '#1f2937', accent: '#f97316' },
  { name: 'গাজী টি-স্টল ও পান-সুপারি', sub: 'আড্ডা ফ্রি, চা ১০ টাকা • টিভি চলছে', icon: 'tea', bg: '#14532d', accent: '#facc15' }
];

export interface BusLiverySpec {
  name: string;
  route: string;
  slogan: string;
  plate: string;
  top: string;
  bottom: string;
  stripe: string;
}

export const BUS_LIVERIES: BusLiverySpec[] = [
  { name: 'বলাকা পরিবহন', route: 'সায়দাবাদ ↔ গাজীপুর', slogan: 'সিটিং সার্ভিস • গেটলক (কিন্তু সব মোড়ে থামে)', plate: 'ঢাকা মেট্রো-ব ১১-৪৫৮৯', top: '#b91c1c', bottom: '#fef3c7', stripe: '#1d4ed8' },
  { name: 'রাইদা এক্সপ্রেস', route: 'পোস্তগোলা ↔ দিয়াবাড়ি', slogan: 'ভাড়া বাড়তি, ব্রেক ঘাটতি • দোয়া নিয়ে উঠুন', plate: 'ঢাকা মেট্রো-ব ১৪-২২০১', top: '#15803d', bottom: '#f8fafc', stripe: '#ea580c' },
  { name: 'তুরাগ লোকাল', route: 'যাত্রাবাড়ী ↔ উত্তরা', slogan: 'আগে গেলে বাঘে খায়, পিছে গেলে তুরাগে খায়', plate: 'ঢাকা মেট্রো-ব ১২-৮৮৩৪', top: '#1d4ed8', bottom: '#e0f2fe', stripe: '#eab308' },
  { name: 'আজমেরী গ্লোরী', route: 'সদরঘাট ↔ চন্দ্রা', slogan: 'সিট না থাকলেও দাঁড়িয়ে সুপারফাস্ট যাত্রা', plate: 'ঢাকা মেট্রো-ব ১৫-৬৬১৯', top: '#c2410c', bottom: '#fff7ed', stripe: '#15803d' },
  { name: 'অনাবিল সুপার', route: 'সাইনবোর্ড ↔ গাজীপুর', slogan: 'রং সাইড ওস্তাদদের যমদূত • হর্ন শুনে সরুন', plate: 'ঢাকা মেট্রো-ব ১৩-৯০১২', top: '#7e22ce', bottom: '#fae8ff', stripe: '#facc15' },
  { name: 'ভিক্টর ক্লাসিক', route: 'সদরঘাট ↔ আব্দুল্লাহপুর', slogan: 'দরজা খোলা, মন খোলা • স্টুডেন্ট হাফ পাস', plate: 'ঢাকা মেট্রো-ব ১১-৭৭৪০', top: '#0f766e', bottom: '#ecfeff', stripe: '#ef4444' }
];

export const BUS_NAMES = BUS_LIVERIES.map((b) => b.name);

export const BILLBOARD_TEXTS = [
  'SABBIR CODEX • মামার রাস্তা ৩ডি • সাব্বির ও মাজিদ',
  'SABBIR CODEX DEVELOPMENT TEAM • নো লাইসেন্স, নো ব্রেক!',
  'রাস্তা কি তোর মামার? — হ্যাঁ ভাই, দলিল আছে! • SABBIR CODEX',
  'সাবধান! হলুদ দাগে অবৈধ চার্জ সম্পূর্ণ নিষেধ (কিন্তু ফ্রি!)',
  'পুরান ঢাকা এক্সপ্রেস • আগে গেলে বাঘে খায়, পিছে গেলে বলাকা বাসে খায়!',
  'SABBIR CODEX গ্যারেজ — রিকশা মডিং ও সুপারকার শোরুম!',
  'এক কাপ চায়ের টাকা পকেটে রাখুন, সার্জেন্ট সামনেই!'
];

export function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
