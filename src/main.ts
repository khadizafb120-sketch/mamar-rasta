import './style.css';
import { MamarRastaGame } from './game';
import { GameUI, loadSettings } from './ui';

function showFatalNotice(msg: string) {
  const existing = document.getElementById('fatal-notice');
  if (existing) {
    existing.textContent = msg;
    return;
  }
  const el = document.createElement('div');
  el.id = 'fatal-notice';
  el.style.cssText =
    'position:fixed;bottom:10px;left:50%;transform:translateX(-50%);z-index:9999;background:#7f1d1d;color:#fef08a;padding:8px 14px;border-radius:10px;font-size:12px;font-weight:700;max-width:92vw;border:1.5px solid #facc15;pointer-events:auto;';
  el.textContent = msg;
  document.body.appendChild(el);
}

window.addEventListener('error', (ev) => {
  showFatalNotice(`⚠️ Error: ${ev.message || 'Unknown error'}`);
});

window.addEventListener('unhandledrejection', (ev) => {
  const reason = ev.reason instanceof Error ? ev.reason.message : String(ev.reason || '');
  if (reason && !reason.toLowerCase().includes('fullscreen') && !reason.toLowerCase().includes('orientation')) {
    showFatalNotice(`⚠️ ${reason}`);
  }
});

function bootstrap() {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null;
  const uiRoot = document.getElementById('ui-root') as HTMLElement | null;
  if (!canvas || !uiRoot) return;

  const settings = loadSettings();
  const ui = new GameUI(uiRoot, settings);

  try {
    const game = new MamarRastaGame(canvas, settings, {
      onHudUpdate: (hud) => ui.updateHud(hud),
      onTicker: (msg) => ui.showTicker(msg),
      onGarageChange: (garage) => ui.updateGarageUi(garage),
      onGameOver: (stats, snap) => ui.showNewspaperGameOver(stats, snap)
    });
    ui.attachGame(game);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    showFatalNotice(`⚠️ 3D চালু করতে সমস্যা হয়েছে: ${msg}`);
  }
}

bootstrap();

if (
  'serviceWorker' in navigator &&
  location.hostname !== 'appassets.androidplatform.net' &&
  (location.protocol === 'https:' || location.hostname === 'localhost')
) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
