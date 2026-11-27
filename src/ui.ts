import { MamarRastaGame } from './game';
import {
  NewspaperEdition,
  buildNewspaperEdition,
  exportNewspaperPng,
  loadLeaderboard,
  saveLeaderboardScore
} from './newspaper';
import {
  ControlSettings,
  DEV_FACEBOOK_URL,
  GAME_MODES,
  GameModeId,
  GarageSaveData,
  HudState,
  LeaderboardEntry,
  MOD_BODY_COLORS,
  MOD_PANEL_STYLES,
  MOD_ROOF_STYLES,
  MOD_TOP_ACCESSORIES,
  MOD_WHEEL_NEONS,
  PLAYABLE_VEHICLES,
  PlayableVehicleId,
  QUALITY_OPTIONS,
  QualityMode,
  ROAD_HALF_WIDTH,
  RunStats,
  TickerMessage,
  VehicleModConfig,
  formatTakaBn,
  formatTakaCompactBn,
  getVehicleSpec,
  toBanglaDigits
} from './types';

const SETTINGS_KEY = 'mamarRasta.settings.v3';

export function loadSettings(): ControlSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const validQ: QualityMode[] = ['low', 'medium', 'max', 'ultra', 'ultra_max'];
      const validM: GameModeId[] = ['classic', 'night', 'rain', 'freeroam', 'hardcore'];
      return {
        autoGas: parsed.autoGas ?? true,
        soundEnabled: parsed.soundEnabled ?? true,
        voiceEnabled: parsed.voiceEnabled ?? true,
        quality: validQ.includes(parsed.quality) ? parsed.quality : 'ultra',
        gameMode: validM.includes(parsed.gameMode) ? parsed.gameMode : 'classic',
        driverName: typeof parsed.driverName === 'string' ? parsed.driverName : 'মামার ভাতিজা'
      };
    }
  } catch {
    // fallback
  }
  return {
    autoGas: true,
    soundEnabled: true,
    voiceEnabled: true,
    quality: 'ultra',
    gameMode: 'classic',
    driverName: 'মামার ভাতিজা'
  };
}

function saveSettings(s: ControlSettings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    // ignore
  }
}

/**
 * Automatically switches mobile phones into Fullscreen + Flat Landscape Orientation!
 */
export async function enterLandscapeFullscreen() {
  try {
    const docEl = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> };
    if (!document.fullscreenElement) {
      if (docEl.requestFullscreen) {
        await docEl.requestFullscreen({ navigationUI: 'hide' } as FullscreenOptions);
      } else if (docEl.webkitRequestFullscreen) {
        await docEl.webkitRequestFullscreen();
      }
    }
  } catch {
    // Some browsers disallow fullscreen unless user-gesture; safe ignore
  }
  try {
    const orient = screen.orientation as ScreenOrientation & { lock?: (mode: string) => Promise<void> };
    if (orient && typeof orient.lock === 'function') {
      await orient.lock('landscape');
    }
  } catch {
    // iOS Safari / desktop browsers don't require orientation lock
  }
}

export class GameUI {
  private root: HTMLElement;
  private game!: MamarRastaGame;
  private settings: ControlSettings;

  private menuOverlay!: HTMLElement;
  private garageOverlay!: HTMLElement;
  private modOverlay!: HTMLElement;
  private aboutOverlay!: HTMLElement;
  private aboutReturnTarget: 'menu' | 'gameover' = 'menu';
  private hudOverlay!: HTMLElement;
  private minimapCanvas!: HTMLCanvasElement;
  private minimapCtx!: CanvasRenderingContext2D;
  private minimapAreaEl!: HTMLElement;
  private pauseOverlay!: HTMLElement;
  private newspaperOverlay!: HTMLElement;
  private chaosVignette!: HTMLElement;
  private busWarningBanner!: HTMLElement;

  // Compact tiny bottom-edge ticker (ZERO middle-screen obstruction!)
  private bottomTickerEl!: HTMLElement;
  private tickerTimeout = 0;

  private lossValueEl!: HTMLElement;
  private multBadgeEl!: HTMLElement;
  private comboBadgeEl!: HTMLElement;
  private biomeBadgeEl!: HTMLElement;
  private hudClockEl!: HTMLElement;
  private hudDateEl!: HTMLElement;
  private hudVehBadgeEl!: HTMLElement;
  private cashEl!: HTMLElement;
  private speedEl!: HTMLElement;
  private distEl!: HTMLElement;
  private batteryFillEl!: HTMLElement;
  private batteryTextEl!: HTMLElement;
  private batteryBoxEl!: HTMLElement;
  private chaosFillEl!: HTMLElement;
  private chaosTextEl!: HTMLElement;
  private mobBarBoxEl!: HTMLElement;
  private mobFillEl!: HTMLElement;
  private mobDistEl!: HTMLElement;
  private wrongSideBannerEl!: HTMLElement;

  private soundBombBtn!: HTMLButtonElement;
  private soundBombCdEl!: HTMLElement;
  private chaosBtn!: HTMLButtonElement;
  private gasBtn!: HTMLButtonElement;
  private sergeantPanel!: HTMLElement;
  private sergeantTimerFill!: HTMLElement;
  private sergeantBribeBtn!: HTMLButtonElement;

  private menuWalletEl!: HTMLElement;
  private menuSelectedVehicleEl!: HTMLElement;
  private menuBoardList!: HTMLElement;
  private garageWalletEl!: HTMLElement;
  private garageGridEl!: HTMLElement;
  private garageStatusEl!: HTMLElement;

  private lastEdition: NewspaperEdition | null = null;
  private lastStats: RunStats | null = null;
  private lastSnapshot: string | null = null;

  constructor(root: HTMLElement, settings: ControlSettings) {
    this.root = root;
    this.settings = { ...settings };
    this.buildDom();
  }

  public attachGame(game: MamarRastaGame) {
    this.game = game;
    this.bindInteractions();
    this.renderMenuLeaderboard(loadLeaderboard());
    this.updateGarageUi(game.getGarageData());
    this.renderModStudio(game.getModConfig());
  }

  private buildDom() {
    this.root.innerHTML = `
      <div class="chaos-vignette" id="chaos-vignette"></div>

      <!-- START MENU -->
      <div class="overlay menu-overlay active" id="menu-overlay">
        <div class="menu-card">
          <div class="hero-banner">
            <img src="./art/dhaka-hero.jpg" alt="ঢাকার রাস্তায় দেশি টেসলা" class="hero-img" />
            <div class="hero-scrim"></div>
            <div class="hero-top-badges">
              <span class="rickshaw-ribbon">🇧🇩 আল্ট্রা ৩ডি • ঢাকা সিটি • নদী ও ব্রিজ</span>
              <button class="btn-meme-test" id="btn-meme-test">🔊 মিম টেস্ট</button>
            </div>
            <div class="hero-title-wrap">
              <h1 class="game-title">মামার রাস্তা</h1>
              <p class="game-subtitle">আপনার সন্তানকে দেশি টেসলা দিন — নো লাইসেন্স, নো ব্রেক!</p>
              <div class="creator-row">
                <span class="creator-pill">
                  <img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির" class="cp-face" />
                  <img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" class="cp-face cp-face-2" />
                  <span>নির্মাতা: <strong>সাব্বির Codex ও মাজিদ</strong></span>
                </span>
                <button class="btn-about-mini" id="btn-open-about">👨‍💻 অ্যাবাউট ও ডেভেলপার</button>
              </div>
            </div>
          </div>

          <div class="menu-body">
            <div class="wallet-strip">
              <div class="wallet-info">
                <span class="w-lbl">গ্যারেজ ফান্ড (গাড়ি ভেঙে আয়)</span>
                <strong id="menu-wallet">৳ ০</strong>
              </div>
              <div class="wallet-btns">
                <button class="btn-mod-open" id="btn-open-mod">🔧 মডিং</button>
                <button class="btn-garage-open" id="btn-open-garage">
                  <span>🏎️ গ্যারেজ</span>
                  <small id="menu-selected-veh">দেশি টেসলা</small>
                </button>
              </div>
            </div>

            <div class="driver-input-row">
              <input id="driver-name-input" type="text" maxlength="20" value="${escapeHtml(this.settings.driverName)}" placeholder="চালকের নাম (পত্রিকায় ছাপা হবে)" />
            </div>

            <!-- 5 GAME MODES SELECTOR -->
            <div class="selector-section">
              <div class="sel-title">🎮 গেম মোড বাছাই করুন</div>
              <div class="mode-pills" id="mode-pills">
                ${GAME_MODES.map(
                  (m) => `
                  <button class="mode-chip ${this.settings.gameMode === m.id ? 'active' : ''}" data-mode="${m.id}">
                    <span>${m.badge} ${m.labelBn}</span>
                  </button>`
                ).join('')}
              </div>
            </div>

            <!-- 5-TIER GRAPHICS QUALITY SELECTOR (LOW / MEDIUM / MAX / ULTRA / ULTRA MAX!) -->
            <div class="selector-section">
              <div class="sel-title">🖥️ গ্রাফিক্স কোয়ালিটি</div>
              <div class="quality-pills" id="quality-pills">
                ${QUALITY_OPTIONS.map(
                  (q) => `
                  <button class="qual-chip ${this.settings.quality === q.id ? 'active' : ''}" data-qual="${q.id}">
                    ${q.labelBn}
                  </button>`
                ).join('')}
              </div>
            </div>

            <button class="btn-premium btn-play" id="btn-start-game">
              <span class="btn-gloss"></span>
              <span class="btn-label">🛺 খেলা শুরু করুন (ল্যান্ডস্কেপ ৩ডি)</span>
              <span class="btn-sub">পুরান ঢাকা • মিছিল • ইউ-টার্ন • রিকশা মডিং • লাইভ ম্যাপ!</span>
            </button>

            <div class="menu-toggles">
              <label class="toggle-pill">
                <input type="checkbox" id="opt-autogas" ${this.settings.autoGas ? 'checked' : ''} />
                <span>অটো-গ্যাস</span>
              </label>
              <label class="toggle-pill">
                <input type="checkbox" id="opt-sound" ${this.settings.soundEnabled ? 'checked' : ''} />
                <span>সাউন্ড</span>
              </label>
              <label class="toggle-pill">
                <input type="checkbox" id="opt-voice" ${this.settings.voiceEnabled ? 'checked' : ''} />
                <span>মিম অডিও</span>
              </label>
            </div>

            <div class="menu-board">
              <div class="board-title">🏆 শীর্ষ তাণ্ডবকারী (জাতীয় ক্ষতি)</div>
              <div class="board-list" id="menu-board-list"></div>
            </div>

            <!-- DIRECTLY VISIBLE DEVELOPER SHOWCASE ON START MENU (SABBIR & MAJID PHOTOS!) -->
            <div class="menu-dev-spotlight">
              <div class="mds-header">
                <span>👨‍💻 গেম নির্মাতা • Sabbir Codex Development Team</span>
              </div>
              <div class="mds-poster-wrap" id="btn-open-about-poster">
                <img src="./art/dev-team.jpg?v=5" alt="সাব্বির ও মাজিদ — ডেভেলপার টিম" class="mds-poster-img" />
              </div>
              <div class="mds-duo">
                <div class="mds-person">
                  <img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির Codex" class="mds-avatar" />
                  <div>
                    <strong>সাব্বির (Sabbir Codex)</strong>
                    <small>Developer &amp; Co-Founder</small>
                  </div>
                </div>
                <div class="mds-person">
                  <img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" class="mds-avatar avatar-majid" />
                  <div>
                    <strong>মাজিদ (Majid)</strong>
                    <small>Co-Developer</small>
                  </div>
                </div>
              </div>
              <div class="mds-actions">
                <button class="mds-btn mds-btn-about" id="btn-open-about-card">ℹ️ ডেভেলপার ও অ্যাবাউট</button>
                <a href="${DEV_FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" class="mds-btn mds-btn-fb">📘 ফেসবুক আইডি</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DEVELOPER INFO & ABOUT MODAL (SABBIR CODEX & MAJID!) -->
      <div class="overlay about-overlay" id="about-overlay">
        <div class="about-panel">
          <div class="about-header">
            <div>
              <h2>👨‍💻 ডেভেলপার ইনফো ও গেম অ্যাবাউট</h2>
              <div class="about-sub">Sabbir Codex Development Team • Dream Big, Build Better</div>
            </div>
            <button class="icon-btn" id="btn-close-about" title="বন্ধ করুন">✕</button>
          </div>
          <div class="about-scroll">
            <div class="about-photo-wrap">
              <img src="./art/dev-team.jpg?v=5" alt="Sabbir Codex & Majid Development Team" class="about-team-img" />
            </div>

            <div class="dev-cards-grid">
              <div class="dev-card dev-sabbir">
                <div class="dev-card-top">
                  <img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির Codex" class="dev-card-avatar" />
                  <div>
                    <div class="dev-role-badge">👑 DEVELOPER &amp; CO-FOUNDER</div>
                    <h3>সাব্বির (Sabbir Codex)</h3>
                  </div>
                </div>
                <p>গেমটির মূল ডেভেলপার ও কো-ফাউন্ডার। সম্পূর্ণ ৩ডি গেম আর্কিটেকচার, গ্রাফিক্স ইঞ্জিন, ফিজিক্স, গাড়ির গ্যারেজ সিস্টেম এবং কোডিং ডিজাইন করেছেন।</p>
              </div>
              <div class="dev-card dev-majid">
                <div class="dev-card-top">
                  <img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" class="dev-card-avatar avatar-majid" />
                  <div>
                    <div class="dev-role-badge">⚡ CO-DEVELOPER</div>
                    <h3>মাজিদ (Majid)</h3>
                  </div>
                </div>
                <p>গেমটির কো-ডেভেলপার। ক্রিয়েটিভ কনসেপ্ট, বাংলাদেশী ম্যাপ ও গাড়ির আইডিয়া, মজার ভাইরাল মিম ডিরেকশন ও গেমপ্লে টেস্টিং-এ কো-ডেভেলপমেন্ট করেছেন।</p>
              </div>
            </div>

            <div class="about-story-box">
              <h4>🇧🇩 মামার রাস্তা ৩ডি সম্পর্কে (About Game)</h4>
              <p>
                <strong>মামার রাস্তা (Mamar Rasta 3D)</strong> হলো বাংলাদেশের ঢাকার ব্যস্ত রাস্তা, নদী, ব্রিজ, মেট্রোরেল, দেশি টেসলা, সিএনজি, প্যাডেল রিকশা, বাংলাদেশী ট্র্যাক্টর, নিনজা H2R, ল্যাম্বরগিনি ও ফিউচার ফ্লাইং কার নিয়ে তৈরি একটি ফান ৩ডি ড্রাইভিং গেম!
                রং সাইডে ২× জাতীয় ক্ষতি, পোলের হলুদ দাগে অবৈধ চার্জ, ট্রাফিক সার্জেন্টকে চায়ের টাকা, পাবলিক ধোলাই আর ৩৪+ ভাইরাল বাংলা মিম সাউন্ডের সাথে তৈরি হয়েছে খাঁটি দেশি ভাইব!
              </p>
              <div class="about-motto">“Code • Create • Innovate — Sabbir Codex Development Team”</div>
            </div>

            <a href="${DEV_FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" class="btn-fb-big">
              <span>📘 সাব্বির ও মাজিদের ফেসবুক প্রোফাইল দেখুন</span>
              <small>${DEV_FACEBOOK_URL}</small>
            </a>
          </div>
        </div>
      </div>

      <!-- VEHICLE GARAGE / SHOWROOM MODAL -->
      <div class="overlay garage-overlay" id="garage-overlay">
        <div class="garage-panel">
          <div class="garage-header">
            <div>
              <h2>🏎️ মামার গ্যারেজ ও সুপারকার শোরুম</h2>
              <div class="garage-sub" id="garage-status">গাড়ি ধাক্কা দিয়ে আয় করা টাকায় নতুন গাড়ি আনলক করুন!</div>
            </div>
            <div class="garage-head-right">
              <div class="garage-wallet-pill">💰 <span id="garage-wallet">৳ ০</span></div>
              <button class="icon-btn" id="btn-close-garage" title="বন্ধ করুন">✕</button>
            </div>
          </div>
          <div class="garage-grid" id="garage-grid"></div>
          <div class="garage-footer">
            <button class="btn-premium" id="btn-garage-play"><span class="btn-gloss"></span>🚀 সিলেক্টেড গাড়ি নিয়ে রাস্তায় নামুন!</button>
          </div>
        </div>
      </div>

      <!-- RICKSHAW & VEHICLE MODDING STUDIO MODAL -->
      <div class="overlay mod-overlay" id="mod-overlay">
        <div class="mod-panel">
          <div class="garage-header">
            <div>
              <h2>🔧 রিকশা ও গাড়ি মডিং স্টুডিও</h2>
              <div class="garage-sub">রং, পেছনের প্যানেল, ছাদ, নিয়ন লাইট ও SABBIR CODEX টপ সাইন বদলান!</div>
            </div>
            <button class="icon-btn" id="btn-close-mod" title="বন্ধ করুন">✕</button>
          </div>
          <div class="mod-scroll" id="mod-scroll"></div>
          <div class="garage-footer">
            <button class="btn-premium" id="btn-mod-play"><span class="btn-gloss"></span>🚀 মডিফাইড গাড়ি নিয়ে রাস্তায় নামুন!</button>
          </div>
        </div>
      </div>

      <!-- LIVE GAMEPLAY HUD (PREMIUM NEON-BLUE GLASSMORPHIC LAYOUT MATCHING REFERENCE ART!) -->
      <div class="hud-overlay" id="hud-overlay">
        <div class="hud-top">
          <div class="hud-score-card">
            <div class="hud-clock-row">
              <div>
                <div class="hud-clock" id="hud-clock">৪:৩০ PM</div>
                <div class="hud-date" id="hud-date">শুক্রবার, ২৭ নভে</div>
              </div>
              <span class="biome-pill" id="hud-biome">🏙️ ঢাকা</span>
            </div>
            <div class="hud-loss-row">
              <span class="hud-loss-val" id="hud-loss">৳ ০</span>
              <span class="hud-mult" id="hud-mult">১×</span>
            </div>
            <div class="hud-sub-row">
              <span id="hud-cash">☕ ৳ ১,০০০</span>
              <span id="hud-dist">🛣️ ০ মি.</span>
              <span class="hud-combo" id="hud-combo"></span>
            </div>
          </div>

          <div class="hud-center-slim">
            <div class="wrong-side-banner" id="wrong-side-banner">🚧 রং সাইড ২×</div>
            <div class="bus-warning-banner" id="bus-warning-banner">🚌 সামনে বাস/ট্রাক!</div>
            <div class="sergeant-alert" id="sergeant-panel">
              <div class="sergeant-timer-track"><div class="sergeant-timer-fill" id="sergeant-timer-fill"></div></div>
              <button class="btn-bribe" id="btn-bribe">👮☕ চায়ের টাকা (৳ ৫০০) [E]</button>
            </div>
          </div>

          <div class="hud-right-stack">
            <div class="hud-top-actions">
              <div class="vip-pill">
                <span class="vip-crown">👑</span>
                <span id="hud-veh-badge">দেশি টেসলা</span>
              </div>
              <div class="speed-pill">
                <span class="spd-val" id="hud-speed">০</span>
                <small>KM/H</small>
              </div>
              <button class="icon-btn neon-icon-btn" id="btn-fullscreen" title="ফুলস্ক্রিন ল্যান্ডস্কেপ">⛶</button>
              <button class="icon-btn pause-gold-btn" id="btn-pause" title="বিরতি">⏸</button>
            </div>
            <div class="meter-row">
              <div class="meter-card" id="battery-box">
                <div class="meter-head">
                  <span class="mh-ico">🔋</span>
                  <span class="mh-val" id="battery-text">১০০%</span>
                </div>
                <div class="meter-track"><div class="meter-fill battery-fill" id="battery-fill"></div></div>
              </div>
              <div class="meter-card">
                <div class="meter-head">
                  <span class="mh-ico">⚡</span>
                  <span class="mh-val" id="chaos-text">০%</span>
                </div>
                <div class="meter-track"><div class="meter-fill chaos-fill" id="chaos-fill"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- LIVE DHAKA TACTICAL GPS MINI-MAP RADAR -->
        <div class="hud-minimap-wrap" id="hud-minimap-wrap">
          <div class="mm-head">🗺️ <span id="mm-area">পুরান ঢাকা</span></div>
          <canvas id="hud-minimap" width="84" height="104"></canvas>
        </div>

        <!-- ANGRY MOB COMPACT RADAR -->
        <div class="mob-radar" id="mob-radar">
          <div class="mob-radar-head">
            <span>😡 পাবলিক ধোলাই</span>
            <span id="mob-dist">১৫ মি.</span>
          </div>
          <div class="meter-track"><div class="meter-fill mob-fill" id="mob-fill"></div></div>
        </div>

        <!-- SLEEK BOTTOM-CENTER NEON-GLASS TICKER PILL (MATCHING REFERENCE!) -->
        <div class="bottom-ticker" id="bottom-ticker">
          <span class="tk-info-dot">i</span>
          <span class="tk-text" id="bottom-ticker-text">পরিবেশটা সুন্দর না? বেশি টেনশন নিও না, উপভোগ করুন!</span>
        </div>

        <!-- BIG NEON-BLUE GLASS STEERING + 2x2 ACTION BUTTONS (MATCHING REFERENCE!) -->
        <div class="touch-controls">
          <div class="touch-left" id="touch-steer-pad">
            <button class="steer-btn" id="btn-steer-left" aria-label="বামে">
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="steer-btn" id="btn-steer-right" aria-label="ডানে">
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          <div class="touch-right">
            <div class="action-row-top">
              <button class="action-btn btn-horn" id="btn-horn">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#facc15"><path d="M18 8a3 3 0 0 0-2.1.9L11 11H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v3h2v-3h2l4.9 2.1A3 3 0 0 0 20 15.3V10.7A3 3 0 0 0 18 8z"/></svg>
                <span>হর্ন</span>
              </button>
              <button class="action-btn btn-chaos" id="btn-chaos">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#fde047"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <span>ব্লাস্ট</span>
              </button>
            </div>
            <div class="action-row-bottom">
              <button class="action-btn btn-slow" id="btn-slow">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="#ef4444"><path d="M18 11V6a1 1 0 0 0-2 0v4h-1V4a1 1 0 0 0-2 0v6h-1V3a1 1 0 0 0-2 0v7H9V5a1 1 0 0 0-2 0v8.5l-1.7-1.7a1.1 1.1 0 0 0-1.6 1.5l4.3 5.2A4 4 0 0 0 11.1 20H15a4 4 0 0 0 4-4v-5a1 1 0 0 0-1 0z"/></svg>
                <span>ব্রেক</span>
              </button>
              <button class="action-btn btn-gas ${this.settings.autoGas ? 'hidden' : ''}" id="btn-gas">
                <i>🚀</i>
                <span>গ্যাস</span>
              </button>
              <button class="action-btn btn-bomb" id="btn-sound-bomb">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/><path d="M12 12l4 -3"/><path d="M12 7v1"/><path d="M7 12h1"/><path d="M16 12h1"/></svg>
                <span>মিম বম্ব</span>
                <div class="cd-overlay" id="bomb-cd"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- PAUSE OVERLAY WITH LIVE 5-TIER GRAPHICS SWITCHER -->
      <div class="overlay pause-overlay" id="pause-overlay">
        <div class="pause-card">
          <h2>⏸ চা-বিরতি</h2>
          <p>রাস্তায় যানজট জমে গেছে — গ্রাফিক্স বদলে আবার নামুন!</p>
          <div class="quality-pills pause-qual-pills" id="pause-quality-pills">
            ${QUALITY_OPTIONS.map(
              (q) => `<button class="qual-chip ${this.settings.quality === q.id ? 'active' : ''}" data-qual="${q.id}">${q.labelBn}</button>`
            ).join('')}
          </div>
          <div class="pause-actions">
            <button class="btn-premium" id="btn-resume"><span class="btn-gloss"></span>▶ চালিয়ে যান</button>
            <button class="btn-gold" id="btn-restart-pause">🔄 নতুন করে শুরু</button>
            <button class="btn-ghost" id="btn-menu-pause">🏠 মেইন মেনু</button>
          </div>
        </div>
      </div>

      <!-- GAME OVER: DAINIK JANJOT NEWSPAPER -->
      <div class="overlay newspaper-overlay" id="newspaper-overlay">
        <div class="newspaper-scroll">
          <article class="newspaper-sheet" id="newspaper-sheet"></article>
          <div class="newspaper-actions">
            <button class="btn-premium" id="btn-play-again"><span class="btn-gloss"></span>🛺 আবার খেলুন</button>
            <button class="btn-gold" id="btn-gameover-garage">🏎️ গ্যারেজ / গাড়ি কিনুন</button>
            <button class="btn-ghost" id="btn-save-png">📰 সেভ PNG</button>
            <button class="btn-ghost" id="btn-gameover-about">👨‍💻 ডেভেলপার</button>
            <button class="btn-ghost" id="btn-back-menu">🏠 মেনু</button>
          </div>
        </div>
      </div>
    `;

    this.menuOverlay = this.q('#menu-overlay');
    this.garageOverlay = this.q('#garage-overlay');
    this.modOverlay = this.q('#mod-overlay');
    this.aboutOverlay = this.q('#about-overlay');
    this.hudOverlay = this.q('#hud-overlay');
    this.minimapCanvas = this.q('#hud-minimap') as HTMLCanvasElement;
    this.minimapCtx = this.minimapCanvas.getContext('2d')!;
    this.minimapAreaEl = this.q('#mm-area');
    this.pauseOverlay = this.q('#pause-overlay');
    this.newspaperOverlay = this.q('#newspaper-overlay');
    this.chaosVignette = this.q('#chaos-vignette');
    this.busWarningBanner = this.q('#bus-warning-banner');
    this.bottomTickerEl = this.q('#bottom-ticker');

    this.lossValueEl = this.q('#hud-loss');
    this.multBadgeEl = this.q('#hud-mult');
    this.comboBadgeEl = this.q('#hud-combo');
    this.biomeBadgeEl = this.q('#hud-biome');
    this.hudClockEl = this.q('#hud-clock');
    this.hudDateEl = this.q('#hud-date');
    this.hudVehBadgeEl = this.q('#hud-veh-badge');
    this.cashEl = this.q('#hud-cash');
    this.speedEl = this.q('#hud-speed');
    this.distEl = this.q('#hud-dist');
    this.batteryFillEl = this.q('#battery-fill');
    this.batteryTextEl = this.q('#battery-text');
    this.batteryBoxEl = this.q('#battery-box');
    this.chaosFillEl = this.q('#chaos-fill');
    this.chaosTextEl = this.q('#chaos-text');
    this.mobBarBoxEl = this.q('#mob-radar');
    this.mobFillEl = this.q('#mob-fill');
    this.mobDistEl = this.q('#mob-dist');
    this.wrongSideBannerEl = this.q('#wrong-side-banner');

    this.soundBombBtn = this.q('#btn-sound-bomb') as HTMLButtonElement;
    this.soundBombCdEl = this.q('#bomb-cd');
    this.chaosBtn = this.q('#btn-chaos') as HTMLButtonElement;
    this.gasBtn = this.q('#btn-gas') as HTMLButtonElement;
    this.sergeantPanel = this.q('#sergeant-panel');
    this.sergeantTimerFill = this.q('#sergeant-timer-fill');
    this.sergeantBribeBtn = this.q('#btn-bribe') as HTMLButtonElement;

    this.menuWalletEl = this.q('#menu-wallet');
    this.menuSelectedVehicleEl = this.q('#menu-selected-veh');
    this.menuBoardList = this.q('#menu-board-list');
    this.garageWalletEl = this.q('#garage-wallet');
    this.garageGridEl = this.q('#garage-grid');
    this.garageStatusEl = this.q('#garage-status');
  }

  private q(sel: string): HTMLElement {
    return this.root.querySelector(sel) as HTMLElement;
  }

  private bindInteractions() {
    const nameInput = this.q('#driver-name-input') as HTMLInputElement;
    nameInput.addEventListener('input', () => {
      this.settings.driverName = nameInput.value;
      saveSettings(this.settings);
      this.game.updateSettings({ driverName: this.settings.driverName });
    });

    const startWithLandscape = () => {
      this.garageOverlay.classList.remove('active');
      this.modOverlay.classList.remove('active');
      this.aboutOverlay.classList.remove('active');
      enterLandscapeFullscreen();
      this.game.startNewRun();
    };

    this.q('#btn-start-game').addEventListener('click', startWithLandscape);
    this.q('#btn-garage-play').addEventListener('click', startWithLandscape);
    this.q('#btn-mod-play').addEventListener('click', startWithLandscape);
    this.q('#btn-play-again').addEventListener('click', startWithLandscape);

    this.q('#btn-open-mod').addEventListener('click', () => {
      this.renderModStudio(this.game.getModConfig());
      this.menuOverlay.classList.remove('active');
      this.modOverlay.classList.add('active');
    });
    this.q('#btn-close-mod').addEventListener('click', () => {
      this.modOverlay.classList.remove('active');
      this.menuOverlay.classList.add('active');
    });

    // 5 Game Mode Chips
    this.root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const m = btn.dataset.mode as GameModeId;
        this.settings.gameMode = m;
        saveSettings(this.settings);
        this.game.updateSettings({ gameMode: m });
        this.root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((b) =>
          b.classList.toggle('active', b.dataset.mode === m)
        );
      });
    });

    // 5-Tier Graphics Quality Chips (synced across Menu & Pause!)
    this.root.querySelectorAll<HTMLButtonElement>('[data-qual]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const q = btn.dataset.qual as QualityMode;
        this.settings.quality = q;
        saveSettings(this.settings);
        this.game.updateSettings({ quality: q });
        this.root.querySelectorAll<HTMLButtonElement>('[data-qual]').forEach((b) =>
          b.classList.toggle('active', b.dataset.qual === q)
        );
      });
    });

    this.q('#btn-meme-test').addEventListener('click', () => {
      this.game.previewRandomMeme();
    });

    const openAbout = (from: 'menu' | 'gameover') => {
      this.aboutReturnTarget = from;
      this.menuOverlay.classList.remove('active');
      this.newspaperOverlay.classList.remove('active');
      this.aboutOverlay.classList.add('active');
    };
    this.q('#btn-open-about').addEventListener('click', () => openAbout('menu'));
    this.q('#btn-open-about-card').addEventListener('click', () => openAbout('menu'));
    this.q('#btn-open-about-poster').addEventListener('click', () => openAbout('menu'));
    this.q('#btn-gameover-about').addEventListener('click', () => openAbout('gameover'));
    this.q('#btn-close-about').addEventListener('click', () => {
      this.aboutOverlay.classList.remove('active');
      if (this.aboutReturnTarget === 'gameover') {
        this.newspaperOverlay.classList.add('active');
      } else {
        this.menuOverlay.classList.add('active');
      }
    });

    this.q('#btn-open-garage').addEventListener('click', () => {
      this.updateGarageUi(this.game.getGarageData());
      this.menuOverlay.classList.remove('active');
      this.garageOverlay.classList.add('active');
    });
    this.q('#btn-gameover-garage').addEventListener('click', () => {
      this.game.returnToMenu();
      this.updateGarageUi(this.game.getGarageData());
      this.menuOverlay.classList.remove('active');
      this.garageOverlay.classList.add('active');
    });
    this.q('#btn-close-garage').addEventListener('click', () => {
      this.garageOverlay.classList.remove('active');
      this.menuOverlay.classList.add('active');
    });

    this.q('#btn-fullscreen').addEventListener('click', () => {
      enterLandscapeFullscreen();
    });

    const bindCheck = (id: string, fn: (checked: boolean) => void) => {
      const el = this.q(id) as HTMLInputElement;
      el.addEventListener('change', () => fn(el.checked));
    };
    bindCheck('#opt-autogas', (v) => {
      this.settings.autoGas = v;
      saveSettings(this.settings);
      this.game.updateSettings({ autoGas: v });
      this.gasBtn.classList.toggle('hidden', v);
    });
    bindCheck('#opt-sound', (v) => {
      this.settings.soundEnabled = v;
      saveSettings(this.settings);
      this.game.updateSettings({ soundEnabled: v });
    });
    bindCheck('#opt-voice', (v) => {
      this.settings.voiceEnabled = v;
      saveSettings(this.settings);
      this.game.updateSettings({ voiceEnabled: v });
    });

    this.q('#btn-pause').addEventListener('click', () => this.game.pauseGame());
    this.q('#btn-resume').addEventListener('click', () => this.game.resumeGame());
    this.q('#btn-restart-pause').addEventListener('click', startWithLandscape);
    this.q('#btn-menu-pause').addEventListener('click', () => this.game.returnToMenu());

    this.q('#btn-back-menu').addEventListener('click', () => {
      this.renderMenuLeaderboard(loadLeaderboard());
      this.game.returnToMenu();
    });
    this.q('#btn-save-png').addEventListener('click', () => {
      if (this.lastEdition && this.lastStats) {
        exportNewspaperPng(this.lastEdition, this.lastStats, this.lastSnapshot);
      }
    });

    const bindTap = (el: HTMLElement, fn: () => void) => {
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        fn();
      });
    };
    bindTap(this.q('#btn-horn'), () => this.game.triggerHorn());
    bindTap(this.soundBombBtn, () => this.game.triggerSoundBomb());
    bindTap(this.chaosBtn, () => this.game.triggerChaosMode());
    bindTap(this.sergeantBribeBtn, () => this.game.triggerPayTeaMoney());

    const steerPad = this.q('#touch-steer-pad');
    const leftBtn = this.q('#btn-steer-left');
    const rightBtn = this.q('#btn-steer-right');
    const slowBtn = this.q('#btn-slow');

    // Ergonomic Touch-Slide + Tap Steering Pad: tap either big arrow OR slide thumb left/right seamlessly!
    let steerPointerId: number | null = null;
    const applySteerFromClientX = (clientX: number) => {
      const rect = steerPad.getBoundingClientRect();
      const midX = rect.left + rect.width / 2;
      const isLeft = clientX < midX;
      this.game.setTouchSteer(isLeft ? -1 : 1);
      leftBtn.classList.toggle('pressed', isLeft);
      rightBtn.classList.toggle('pressed', !isLeft);
    };
    const clearSteer = () => {
      steerPointerId = null;
      this.game.setTouchSteer(0);
      leftBtn.classList.remove('pressed');
      rightBtn.classList.remove('pressed');
    };

    steerPad.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      steerPointerId = e.pointerId;
      steerPad.setPointerCapture?.(e.pointerId);
      applySteerFromClientX(e.clientX);
    });
    steerPad.addEventListener('pointermove', (e) => {
      if (steerPointerId === e.pointerId) {
        e.preventDefault();
        applySteerFromClientX(e.clientX);
      }
    });
    const endSteer = (e: PointerEvent) => {
      if (steerPointerId === null || steerPointerId === e.pointerId) {
        e.preventDefault();
        clearSteer();
      }
    };
    steerPad.addEventListener('pointerup', endSteer);
    steerPad.addEventListener('pointercancel', endSteer);
    steerPad.addEventListener('lostpointercapture', () => clearSteer());

    const bindHold = (btn: HTMLElement, onChange: (down: boolean) => void) => {
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        btn.setPointerCapture?.(e.pointerId);
        onChange(true);
      });
      const release = (e: Event) => {
        e.preventDefault();
        onChange(false);
      };
      btn.addEventListener('pointerup', release);
      btn.addEventListener('pointercancel', release);
      btn.addEventListener('lostpointercapture', release);
    };

    bindHold(slowBtn, (d) => {
      slowBtn.classList.toggle('pressed', d);
      this.game.setTouchSlow(d);
    });
    bindHold(this.gasBtn, (d) => {
      this.gasBtn.classList.toggle('pressed', d);
      this.game.setTouchGas(d);
    });
  }

  public updateGarageUi(garage: GarageSaveData) {
    const selectedSpec = getVehicleSpec(garage.selected);
    this.menuWalletEl.textContent = formatTakaCompactBn(garage.walletTk);
    this.menuSelectedVehicleEl.textContent = `${selectedSpec.badge} ${selectedSpec.nameBn}`;
    this.garageWalletEl.textContent = formatTakaBn(garage.walletTk);

    this.garageGridEl.innerHTML = PLAYABLE_VEHICLES.map((v) => {
      const owned = garage.owned.includes(v.id);
      const selected = garage.selected === v.id;
      const canBuy = garage.walletTk >= v.price;
      const speedPct = Math.min(100, Math.round((v.maxSpeedMs / 34) * 100));
      const powerPct = Math.min(100, Math.round((v.smashMass / 2.8) * 100));

      let btnHtml = '';
      if (selected) {
        btnHtml = `<button class="veh-btn veh-selected" disabled>✓ সিলেক্টেড</button>`;
      } else if (owned) {
        btnHtml = `<button class="veh-btn veh-equip" data-veh-select="${v.id}">সিলেক্ট করুন</button>`;
      } else {
        btnHtml = `<button class="veh-btn ${canBuy ? 'veh-buy' : 'veh-locked'}" data-veh-buy="${v.id}">
          ${canBuy ? '🔓 কিনুন' : '🔒 দাম'} ${formatTakaCompactBn(v.price)}
        </button>`;
      }

      return `
        <div class="veh-card ${selected ? 'is-selected' : ''}" style="--veh-accent:${v.accentHex}">
          <div class="veh-head">
            <span class="veh-badge">${v.badge}</span>
            <div class="veh-titles">
              <div class="veh-name">${escapeHtml(v.nameBn)}</div>
              <div class="veh-sub">${escapeHtml(v.subtitleBn)}</div>
            </div>
            <span class="veh-mult">${toBanglaDigits(v.lossMultiplier)}×</span>
          </div>
          <p class="veh-desc">${escapeHtml(v.funnyDescBn)}</p>
          <div class="veh-bars">
            <div class="vb-row"><span>গতি</span><div class="vb-track"><div style="width:${speedPct}%"></div></div></div>
            <div class="vb-row"><span>ধাক্কা</span><div class="vb-track"><div style="width:${powerPct}%"></div></div></div>
          </div>
          ${btnHtml}
        </div>
      `;
    }).join('');

    this.garageGridEl.querySelectorAll<HTMLButtonElement>('[data-veh-select]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.vehSelect as PlayableVehicleId;
        this.game.selectVehicle(id);
        this.garageStatusEl.textContent = `✓ ${getVehicleSpec(id).nameBn} সিলেক্ট হয়েছে!`;
      });
    });

    this.garageGridEl.querySelectorAll<HTMLButtonElement>('[data-veh-buy]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.vehBuy as PlayableVehicleId;
        const res = this.game.buyVehicle(id);
        this.garageStatusEl.textContent = res.ok
          ? `🎉 অভিনন্দন! ${getVehicleSpec(id).nameBn} এখন আপনার গ্যারেজে!`
          : `⚠️ ${res.reason || 'টাকা কম!'}`;
      });
    });
  }

  private renderModStudio(mods: VehicleModConfig) {
    const container = this.q('#mod-scroll');
    container.innerHTML = `
      <div class="mod-group">
        <div class="mod-g-title">🎨 বডি কালার (Paint)</div>
        <div class="mod-swatch-row">
          ${MOD_BODY_COLORS.map(
            (c) => `
            <button class="mod-swatch ${mods.bodyColor === c.hex ? 'active' : ''}" data-mod-color="${c.hex}" style="--sw:${c.css}">
              <span class="sw-dot"></span><span>${c.labelBn}</span>
            </button>`
          ).join('')}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">🖼️ পেছনের প্যানেল ডিজাইন (Rear Panel Art)</div>
        <div class="mod-opt-grid">
          ${MOD_PANEL_STYLES.map(
            (p) => `<button class="mod-opt-btn ${mods.panelStyle === p.id ? 'active' : ''}" data-mod-panel="${p.id}">${p.labelBn}</button>`
          ).join('')}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">⛺ ছাদ / হুড স্টাইল (Roof Canopy)</div>
        <div class="mod-opt-grid">
          ${MOD_ROOF_STYLES.map(
            (r) => `<button class="mod-opt-btn ${mods.roofStyle === r.id ? 'active' : ''}" data-mod-roof="${r.id}">${r.labelBn}</button>`
          ).join('')}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">🛞 রিম ও আন্ডারগ্লো নিয়ন লাইট</div>
        <div class="mod-opt-grid">
          ${MOD_WHEEL_NEONS.map(
            (w) => `<button class="mod-opt-btn ${mods.wheelNeon === w.id ? 'active' : ''}" data-mod-wheel="${w.id}">${w.labelBn}</button>`
          ).join('')}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">✨ ছাদের এক্সট্রা অ্যাক্সেসরি (Top Mod)</div>
        <div class="mod-opt-grid">
          ${MOD_TOP_ACCESSORIES.map(
            (a) => `<button class="mod-opt-btn ${mods.topAccessory === a.id ? 'active' : ''}" data-mod-acc="${a.id}">${a.labelBn}</button>`
          ).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll<HTMLButtonElement>('[data-mod-color]').forEach((b) =>
      b.addEventListener('click', () => this.renderModStudio(this.game.updateModConfig({ bodyColor: Number(b.dataset.modColor) })))
    );
    container.querySelectorAll<HTMLButtonElement>('[data-mod-panel]').forEach((b) =>
      b.addEventListener('click', () => this.renderModStudio(this.game.updateModConfig({ panelStyle: b.dataset.modPanel as VehicleModConfig['panelStyle'] })))
    );
    container.querySelectorAll<HTMLButtonElement>('[data-mod-roof]').forEach((b) =>
      b.addEventListener('click', () => this.renderModStudio(this.game.updateModConfig({ roofStyle: b.dataset.modRoof as VehicleModConfig['roofStyle'] })))
    );
    container.querySelectorAll<HTMLButtonElement>('[data-mod-wheel]').forEach((b) =>
      b.addEventListener('click', () => this.renderModStudio(this.game.updateModConfig({ wheelNeon: b.dataset.modWheel as VehicleModConfig['wheelNeon'] })))
    );
    container.querySelectorAll<HTMLButtonElement>('[data-mod-acc]').forEach((b) =>
      b.addEventListener('click', () => this.renderModStudio(this.game.updateModConfig({ topAccessory: b.dataset.modAcc as VehicleModConfig['topAccessory'] })))
    );
  }

  private drawMinimap(hud: HudState) {
    const ctx = this.minimapCtx;
    const W = this.minimapCanvas.width;
    const H = this.minimapCanvas.height;
    ctx.clearRect(0, 0, W, H);

    // Road background
    ctx.fillStyle = '#0b1426';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(10, 0, W - 20, H);

    // Double yellow median line
    ctx.fillStyle = '#facc15';
    ctx.fillRect(W / 2 - 2, 0, 1.5, H);
    ctx.fillRect(W / 2 + 1, 0, 1.5, H);

    // Side edges
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(9, 0, 1.5, H);
    ctx.fillRect(W - 10.5, 0, 1.5, H);

    const mapX = (worldX: number) => 12 + ((worldX + ROAD_HALF_WIDTH) / (ROAD_HALF_WIDTH * 2)) * (W - 24);
    const mapY = (dz: number) => H - 16 - (dz / 120) * (H - 22);

    for (const b of hud.minimapBlips) {
      const bx = mapX(b.x);
      const by = mapY(b.dz);
      if (by < 2 || by > H - 2) continue;
      if (b.kind === 'bus') {
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(bx - 3.5, by - 5.5, 7, 11);
      } else if (b.kind === 'car') {
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(bx - 2.5, by - 3.5, 5, 7);
      } else if (b.kind === 'charge') {
        ctx.fillStyle = '#fde047';
        ctx.fillRect(bx - 4, by - 4, 8, 8);
      } else if (b.kind === 'uturn') {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(bx, by, 3.8, 0, Math.PI * 2);
        ctx.fill();
      } else if (b.kind === 'michil') {
        ctx.fillStyle = '#f97316';
        ctx.fillRect(bx - 7, by - 3, 14, 6);
      } else if (b.kind === 'sergeant') {
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(bx, by, 4.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Player live marker triangle at bottom!
    const px = 12 + ((this.game.getPlayerXNorm() + 1) / 2) * (W - 24);
    const py = H - 14;
    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.moveTo(px, py - 6);
    ctx.lineTo(px - 5, py + 5);
    ctx.lineTo(px + 5, py + 5);
    ctx.closePath();
    ctx.fill();
  }

  public updateHud(hud: HudState) {
    const garageOpen = this.garageOverlay.classList.contains('active');
    const modOpen = this.modOverlay.classList.contains('active');
    const aboutOpen = this.aboutOverlay.classList.contains('active');
    this.menuOverlay.classList.toggle('active', hud.phase === 'menu' && !garageOpen && !modOpen && !aboutOpen);
    this.hudOverlay.classList.toggle('active', hud.phase === 'playing' || hud.phase === 'paused');
    this.pauseOverlay.classList.toggle('active', hud.phase === 'paused');
    this.newspaperOverlay.classList.toggle('active', hud.phase === 'gameover' && !aboutOpen);

    if (hud.phase !== 'playing' && hud.phase !== 'paused') {
      this.chaosVignette.classList.remove('active');
      return;
    }

    this.minimapAreaEl.textContent = hud.dhakaAreaBn;
    this.drawMinimap(hud);

    const now = new Date();
    const h12 = now.getHours() % 12 || 12;
    const mins = String(now.getMinutes()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    this.hudClockEl.textContent = `${toBanglaDigits(h12)}:${toBanglaDigits(mins)} ${ampm}`;
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    this.hudDateEl.textContent = `${days[now.getDay()]}, ${toBanglaDigits(now.getDate())} নভে`;
    this.hudVehBadgeEl.textContent = getVehicleSpec(hud.vehicleId).nameBn.split(' ')[0];

    this.lossValueEl.textContent = formatTakaCompactBn(hud.nationalLoss);
    this.multBadgeEl.textContent = `${toBanglaDigits(hud.multiplier)}×`;
    this.multBadgeEl.classList.toggle('hot', hud.multiplier > 1);
    this.cashEl.textContent = `☕ ${formatTakaBn(hud.runCashTk)}`;
    this.distEl.textContent = `🛣️ ${toBanglaDigits(hud.distanceMeters)} মি.`;
    this.speedEl.textContent = toBanglaDigits(hud.speedKmh);

    this.biomeBadgeEl.textContent = hud.dhakaAreaBn;

    if (hud.combo > 1) {
      this.comboBadgeEl.textContent = `🔥${toBanglaDigits(hud.combo)}×`;
      this.comboBadgeEl.style.opacity = '1';
    } else {
      this.comboBadgeEl.textContent = '';
      this.comboBadgeEl.style.opacity = '0';
    }

    this.batteryFillEl.style.width = `${hud.battery}%`;
    this.batteryTextEl.textContent = hud.isCharging
      ? `⚡${toBanglaDigits(hud.battery)}%`
      : `${toBanglaDigits(hud.battery)}%`;
    this.batteryBoxEl.classList.toggle('charging', hud.isCharging);
    this.batteryBoxEl.classList.toggle('critical', !hud.isCharging && hud.battery <= 22);

    this.chaosFillEl.style.width = `${hud.chaos}%`;
    this.chaosTextEl.textContent = hud.chaosActive
      ? `${toBanglaDigits(Math.ceil(hud.chaosTimeLeft))}s`
      : `${toBanglaDigits(hud.chaos)}%`;
    const chaosReady = !hud.chaosActive && hud.chaos >= 100;
    this.chaosBtn.classList.toggle('ready', chaosReady);
    this.chaosBtn.classList.toggle('running', hud.chaosActive);
    this.chaosVignette.classList.toggle('active', hud.chaosActive);

    this.wrongSideBannerEl.classList.toggle('active', hud.wrongSide);
    this.busWarningBanner.classList.toggle('active', hud.nearBusWarning);

    this.soundBombCdEl.style.height = `${Math.round(hud.soundBombCooldown * 100)}%`;
    this.soundBombBtn.classList.toggle('cooling', hud.soundBombCooldown > 0.01);

    this.mobBarBoxEl.classList.toggle('active', hud.mobChasing);
    if (hud.mobChasing) {
      const dangerPct = Math.max(8, Math.min(100, Math.round((1 - hud.mobDistance / 28) * 100)));
      this.mobFillEl.style.width = `${dangerPct}%`;
      this.mobDistEl.textContent = `${toBanglaDigits(hud.mobDistance)} মি.`;
      this.mobBarBoxEl.classList.toggle('danger', hud.mobDistance < 9);
    }

    this.sergeantPanel.classList.toggle('active', hud.sergeantAlert.active);
    if (hud.sergeantAlert.active) {
      const pct = Math.max(0, (hud.sergeantAlert.timeLeft / hud.sergeantAlert.maxTime) * 100);
      this.sergeantTimerFill.style.width = `${pct}%`;
      this.sergeantBribeBtn.textContent = hud.sergeantAlert.canAfford
        ? `👮☕ চায়ের টাকা (${formatTakaBn(hud.sergeantAlert.bribeCost)}) [E]`
        : `👮💸 টাকা কম — মিম বম্ব মারো!`;
      this.sergeantBribeBtn.classList.toggle('cant-afford', !hud.sergeantAlert.canAfford);
    }
  }

  /**
   * Compact, single-line tiny bottom-edge ticker — ZERO road obstruction!
   */
  public showTicker(msg: TickerMessage) {
    this.bottomTickerEl.className = `bottom-ticker active tk-${msg.kind}`;
    const txt = this.q('#bottom-ticker-text');
    if (txt) txt.textContent = msg.text;
    window.clearTimeout(this.tickerTimeout);
    this.tickerTimeout = window.setTimeout(() => {
      this.bottomTickerEl.classList.remove('active');
    }, 2800);
  }

  public showNewspaperGameOver(stats: RunStats, snapshotDataUrl: string | null) {
    const edition = buildNewspaperEdition(stats, this.settings.driverName);
    const board = saveLeaderboardScore(stats, this.settings.driverName);
    this.lastEdition = edition;
    this.lastStats = stats;
    this.lastSnapshot = snapshotDataUrl;

    const totalVehicles = stats.carsHit + stats.cngsHit + stats.bikesHit + stats.rickshawsHit;
    const sheet = this.q('#newspaper-sheet');
    sheet.innerHTML = `
      <div class="np-masthead">
        <div class="np-stamp">ঢাকা স্পেশাল<br/>সীলমোহরকৃত</div>
        <div class="np-kicker">ঢাকা থেকে প্রকাশিত • জাতীয় তাণ্ডব ক্রোড়পত্র</div>
        <h2 class="np-title">দৈনিক যানজট</h2>
        <div class="np-slogan">“সত্যের সন্ধানে, যানজটের মাঝখানে”</div>
        <div class="np-meta">
          <span>সংখ্যা: ${edition.issueNo}</span>
          <span>তারিখ: ${edition.dateBn}</span>
          <span>মূল্য: ৫ টাকা (চা ছাড়া)</span>
        </div>
      </div>

      <div class="np-headline-block">
        <span class="np-breaking-tag">ব্রেকিং নিউজ • ${escapeHtml(stats.vehicleNameBn)}</span>
        <h3 class="np-headline">${escapeHtml(edition.headline)}</h3>
        <p class="np-subhead">${escapeHtml(edition.subhead)}</p>
      </div>

      <div class="np-body-grid">
        <div class="np-photo-col">
          <div class="np-photo-frame">
            ${
              snapshotDataUrl
                ? `<img src="${snapshotDataUrl}" alt="ঘটনাস্থলের ছবি" />`
                : `<img src="./art/dhaka-hero.jpg" alt="ঢাকার রাস্তা" />`
            }
          </div>
          <div class="np-caption">${escapeHtml(edition.photoCaption)}</div>
          <blockquote class="np-quote">${escapeHtml(edition.witnessQuote)}</blockquote>
          <div class="np-story">
            ${edition.storyParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
          </div>
        </div>

        <aside class="np-ledger-col">
          <div class="np-ledger-box">
            <div class="np-ledger-header">জাতীয় ক্ষতির খতিয়ান</div>
            <div class="np-big-loss">${edition.compactLoss}</div>
            <div class="np-earned-pill">💰 গ্যারেজে জমা: +${formatTakaCompactBn(stats.garageEarnedTk)}</div>
            <div class="np-rank-pill">${edition.rankBadge} ${escapeHtml(edition.rankTitle)}</div>
            <ul class="np-stat-list">
              <li><span>গাড়ি</span><b>${escapeHtml(stats.vehicleNameBn)}</b></li>
              <li><span>দূরত্ব / রং সাইড</span><b>${toBanglaDigits(Math.round(stats.distanceMeters))} / ${toBanglaDigits(Math.round(stats.wrongSideMeters))} মি.</b></li>
              <li><span>সর্বোচ্চ গতি</span><b>${toBanglaDigits(Math.round(stats.topSpeedKmh))} km/h</b></li>
              <li><span>গাড়ি/বাইক ধাক্কা</span><b>${toBanglaDigits(totalVehicles)} টি</b></li>
              <li><span>দোকান ধ্বংস</span><b>${toBanglaDigits(stats.stallsSmashed)} টি</b></li>
              <li><span>অবৈধ চার্জ</span><b>${formatTakaBn(stats.illegalPowerStolenTk)}</b></li>
              <li><span>চায়ের টাকা ঘুষ</span><b>${toBanglaDigits(stats.bribesPaid)} বার</b></li>
            </ul>
          </div>

          <div class="np-board-box">
            <div class="np-ledger-header">🏆 শীর্ষ তাণ্ডবকারী</div>
            <ol class="np-board-list">
              ${board
                .slice(0, 5)
                .map(
                  (entry, i) => `
                <li>
                  <span class="np-b-rank">${toBanglaDigits(i + 1)}.</span>
                  <span class="np-b-name">${escapeHtml(entry.name)}</span>
                  <span class="np-b-val">${formatTakaCompactBn(entry.loss)}</span>
                </li>`
                )
                .join('')}
            </ol>
          </div>
        </aside>
      </div>
      <div class="np-dev-credit-card">
        <img src="./art/dev-team.jpg?v=5" alt="Sabbir Codex & Majid" class="np-dev-thumb" />
        <div class="np-dev-info">
          <div class="np-dev-title">প্রকাশক ও গেম নির্মাতা: <strong>সাব্বির (Developer &amp; Co-Founder) এবং মাজিদ (Co-Developer)</strong></div>
          <div class="np-dev-sub">Sabbir Codex Development Team • মামার রাস্তা ৩ডি</div>
          <div class="np-dev-mini-avatars">
            <span><img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির" /> সাব্বির</span>
            <span><img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" /> মাজিদ</span>
          </div>
        </div>
        <a href="${DEV_FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" class="np-fb-btn">
          📘 ফেসবুক আইডি
        </a>
      </div>
    `;

    this.renderMenuLeaderboard(board);
    this.q('.newspaper-scroll').scrollTop = 0;
  }

  private renderMenuLeaderboard(board: LeaderboardEntry[]) {
    if (!board.length) {
      this.menuBoardList.innerHTML = `<div class="board-empty">এখনও কোনো রেকর্ড নেই — প্রথম তাণ্ডব শুরু করুন!</div>`;
      return;
    }
    this.menuBoardList.innerHTML = board
      .slice(0, 4)
      .map(
        (b, idx) => `
      <div class="board-row">
        <span class="br-pos">${toBanglaDigits(idx + 1)}</span>
        <span class="br-name">${escapeHtml(b.name)} <small>(${escapeHtml(b.rank)})</small></span>
        <span class="br-loss">${formatTakaCompactBn(b.loss)}</span>
      </div>`
      )
      .join('');
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
