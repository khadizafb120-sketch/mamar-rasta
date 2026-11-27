import { MemeClipId, VehicleSpec, pickRandom } from './types';

// Only pre-warm 2 tiny starter clips; all remaining 32 meme clips load lazily on demand!
// This prevents flooding slow mobile connections / tunnels with 34 simultaneous MP3 requests.
const WARM_CLIPS: MemeClipId[] = ['poribesh_sundor', 'ustha_marum'];

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private motorOsc: OscillatorNode | null = null;
  private motorOsc2: OscillatorNode | null = null;
  private motorFilter: BiquadFilterNode | null = null;
  private motorGain: GainNode | null = null;
  private chargeOsc: OscillatorNode | null = null;
  private chargeGain: GainNode | null = null;

  private memeBuffers = new Map<MemeClipId, AudioBuffer>();
  private loadingClips = new Set<MemeClipId>();
  private warmStarted = false;
  private activeMemeSource: AudioBufferSourceNode | null = null;
  private activeHtmlAudio: HTMLAudioElement | null = null;
  private activeMemePriority = 0;
  private lastMemeAt = 0;

  private soundEnabled = true;
  private voiceEnabled = true;
  private chaosBeatTimer = 0;
  private chaosStep = 0;

  public unlock() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.soundEnabled ? 0.62 : 0;
      this.masterGain.connect(this.ctx.destination);
      this.setupMotorLoop();
      this.setupChargeLoop();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    if (!this.warmStarted) {
      this.warmStarted = true;
      for (const id of WARM_CLIPS) this.cacheClipInBackground(id);
    }
  }

  private cacheClipInBackground(id: MemeClipId) {
    if (!this.ctx || this.memeBuffers.has(id) || this.loadingClips.has(id)) return;
    this.loadingClips.add(id);
    const ctx = this.ctx;
    fetch(`./memes/${id}.mp3`)
      .then((res) => (res.ok ? res.arrayBuffer() : null))
      .then((buf) => (buf ? ctx.decodeAudioData(buf.slice(0)) : null))
      .then((decoded) => {
        if (decoded) this.memeBuffers.set(id, decoded);
      })
      .catch(() => {})
      .finally(() => {
        this.loadingClips.delete(id);
      });
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(enabled ? 0.62 : 0, this.ctx.currentTime, 0.04);
    }
    if (!enabled) this.stopActiveMeme();
  }

  public setVoiceEnabled(enabled: boolean) {
    this.voiceEnabled = enabled;
    if (!enabled) this.stopActiveMeme();
  }

  public stopActiveMeme() {
    try {
      if (this.activeMemeSource) {
        this.activeMemeSource.onended = null;
        this.activeMemeSource.stop();
        this.activeMemeSource.disconnect();
        this.activeMemeSource = null;
      }
    } catch {
      // ignore
    }
    try {
      if (this.activeHtmlAudio) {
        this.activeHtmlAudio.pause();
        this.activeHtmlAudio.currentTime = 0;
        this.activeHtmlAudio = null;
      }
    } catch {
      // ignore
    }
    this.activeMemePriority = 0;
  }

  public playMemeClip(clip: MemeClipId, priority = 2, volume = 1.0) {
    if (!this.soundEnabled || !this.voiceEnabled) return;
    this.unlock();

    const nowMs = performance.now();
    if ((this.activeMemeSource || this.activeHtmlAudio) && priority < this.activeMemePriority) {
      return;
    }
    if (priority <= 1 && nowMs - this.lastMemeAt < 1400) {
      return;
    }

    this.stopActiveMeme();
    this.activeMemePriority = priority;
    this.lastMemeAt = nowMs;

    const decoded = this.memeBuffers.get(clip);
    if (decoded && this.ctx && this.masterGain) {
      const src = this.ctx.createBufferSource();
      src.buffer = decoded;
      const g = this.ctx.createGain();
      g.gain.value = Math.min(1.35, volume * 1.15);
      src.connect(g);
      g.connect(this.masterGain);
      src.onended = () => {
        if (this.activeMemeSource === src) {
          this.activeMemeSource = null;
          this.activeMemePriority = 0;
        }
      };
      this.activeMemeSource = src;
      src.start(0);
      return;
    }

    // Play immediately via lightweight streaming HTMLAudioElement AND cache decoded buffer for instant replay!
    this.cacheClipInBackground(clip);
    try {
      const audio = new Audio(`./memes/${clip}.mp3`);
      audio.volume = Math.min(1, volume * 0.92);
      audio.onended = () => {
        if (this.activeHtmlAudio === audio) {
          this.activeHtmlAudio = null;
          this.activeMemePriority = 0;
        }
      };
      audio.onerror = () => {
        if (this.activeHtmlAudio === audio) {
          this.activeHtmlAudio = null;
          this.activeMemePriority = 0;
        }
      };
      this.activeHtmlAudio = audio;
      audio.play().catch(() => {});
    } catch {
      // ignore
    }
  }

  public playRandomMeme(clips: readonly MemeClipId[], priority = 2, volume = 1.0): MemeClipId {
    const chosen = pickRandom(clips);
    this.playMemeClip(chosen, priority, volume);
    return chosen;
  }

  private setupMotorLoop() {
    if (!this.ctx || !this.masterGain) return;
    this.motorGain = this.ctx.createGain();
    this.motorGain.gain.value = 0;

    this.motorFilter = this.ctx.createBiquadFilter();
    this.motorFilter.type = 'bandpass';
    this.motorFilter.frequency.value = 340;
    this.motorFilter.Q.value = 1.6;

    this.motorOsc = this.ctx.createOscillator();
    this.motorOsc.type = 'sawtooth';
    this.motorOsc.frequency.value = 105;

    this.motorOsc2 = this.ctx.createOscillator();
    this.motorOsc2.type = 'triangle';
    this.motorOsc2.frequency.value = 215;

    this.motorOsc.connect(this.motorFilter);
    this.motorOsc2.connect(this.motorFilter);
    this.motorFilter.connect(this.motorGain);
    this.motorGain.connect(this.masterGain);

    this.motorOsc.start();
    this.motorOsc2.start();
  }

  private setupChargeLoop() {
    if (!this.ctx || !this.masterGain) return;
    this.chargeGain = this.ctx.createGain();
    this.chargeGain.gain.value = 0;

    this.chargeOsc = this.ctx.createOscillator();
    this.chargeOsc.type = 'sawtooth';
    this.chargeOsc.frequency.value = 100;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 980;
    filter.Q.value = 4.2;

    this.chargeOsc.connect(filter);
    filter.connect(this.chargeGain);
    this.chargeGain.connect(this.masterGain);
    this.chargeOsc.start();
  }

  public updateContinuous(
    speedRatio: number,
    isPlaying: boolean,
    isCharging: boolean,
    chaosActive: boolean,
    engineType: VehicleSpec['engineType'],
    dt: number
  ) {
    if (
      !this.ctx ||
      !this.motorGain ||
      !this.motorOsc ||
      !this.motorOsc2 ||
      !this.motorFilter ||
      !this.chargeGain ||
      !this.chargeOsc
    ) {
      return;
    }
    const now = this.ctx.currentTime;
    const c = Math.max(0, Math.min(1.6, speedRatio));
    const memePlaying = !!(this.activeMemeSource || this.activeHtmlAudio);
    const duck = memePlaying ? 0.32 : 1.0;

    let f1 = 92 + c * 185;
    let f2 = 205 + c * 410;
    let filt = 360 + c * 400;

    if (engineType === 'superbike') {
      f1 = 155 + c * 390;
      f2 = 310 + c * 780;
      filt = 720 + c * 950;
    } else if (engineType === 'v12') {
      f1 = 78 + c * 225;
      f2 = 117 + c * 338;
      filt = 460 + c * 700;
    } else if (engineType === 'hover') {
      f1 = 180 + c * 240;
      f2 = 360 + c * 520;
      filt = 920 + c * 600;
    } else if (engineType === 'cyber') {
      f1 = 120 + c * 260;
      f2 = 240 + c * 520;
      filt = 640 + c * 500;
    } else if (engineType === 'cng') {
      f1 = 72 + c * 145;
      f2 = 144 + c * 290;
      filt = 310 + c * 300;
    }

    const targetMotorVol = isPlaying && this.soundEnabled ? (0.02 + c * 0.052) * duck : 0;
    this.motorGain.gain.setTargetAtTime(targetMotorVol, now, 0.08);
    this.motorOsc.frequency.setTargetAtTime(f1 + (chaosActive ? 45 : 0), now, 0.07);
    this.motorOsc2.frequency.setTargetAtTime(f2 + (chaosActive ? 90 : 0), now, 0.07);
    this.motorFilter.frequency.setTargetAtTime(filt, now, 0.08);

    const chargeVol = isPlaying && isCharging && this.soundEnabled ? 0.1 * duck : 0;
    this.chargeGain.gain.setTargetAtTime(chargeVol, now, 0.04);
    if (isCharging) {
      this.chargeOsc.frequency.setValueAtTime(115 + Math.random() * 85, now);
    }

    if (isPlaying && chaosActive && this.soundEnabled) {
      this.chaosBeatTimer -= dt;
      if (this.chaosBeatTimer <= 0) {
        this.chaosBeatTimer = 0.19;
        this.playChaosBeatStep(this.chaosStep++, duck);
      }
    }
  }

  private playChaosBeatStep(step: number, duck: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const notes = [220, 261.63, 293.66, 329.63, 392, 329.63, 293.66, 261.63];

    if (step % 2 === 0) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(145, now);
      osc.frequency.exponentialRampToValueAtTime(48, now + 0.12);
      gain.gain.setValueAtTime(0.18 * duck, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.15);
    }

    const lead = this.ctx.createOscillator();
    const lg = this.ctx.createGain();
    lead.type = 'square';
    lead.frequency.setValueAtTime(notes[step % notes.length] * (step % 4 === 0 ? 1.5 : 1), now);
    lg.gain.setValueAtTime(0.04 * duck, now);
    lg.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
    lead.connect(lg);
    lg.connect(this.masterGain);
    lead.start(now);
    lead.stop(now + 0.14);
  }

  public playHorn() {
    if (!this.soundEnabled) return;
    this.unlock();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    [510, 645].forEach((f) => {
      const osc = this.ctx!.createOscillator();
      const g = this.ctx!.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, now);
      osc.frequency.setValueAtTime(f * 1.07, now + 0.11);
      g.gain.setValueAtTime(0.001, now);
      g.gain.linearRampToValueAtTime(0.13, now + 0.02);
      g.gain.setValueAtTime(0.13, now + 0.18);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      const lp = this.ctx!.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 2100;
      osc.connect(lp);
      lp.connect(g);
      g.connect(this.masterGain!);
      osc.start(now);
      osc.stop(now + 0.29);
    });
  }

  public playBusHorn() {
    if (!this.soundEnabled) return;
    this.unlock();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    [138, 173, 207].forEach((f) => {
      const osc = this.ctx!.createOscillator();
      const g = this.ctx!.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, now);
      g.gain.setValueAtTime(0.001, now);
      g.gain.linearRampToValueAtTime(0.13, now + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

      const lp = this.ctx!.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 900;
      osc.connect(lp);
      lp.connect(g);
      g.connect(this.masterGain!);
      osc.start(now);
      osc.stop(now + 0.66);
    });
  }

  public playSoundBomb(clip: MemeClipId) {
    if (!this.soundEnabled) return;
    this.unlock();
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      const sub = this.ctx.createOscillator();
      const sg = this.ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(165, now);
      sub.frequency.exponentialRampToValueAtTime(38, now + 0.36);
      sg.gain.setValueAtTime(0.32, now);
      sg.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      sub.connect(sg);
      sg.connect(this.masterGain);
      sub.start(now);
      sub.stop(now + 0.4);
    }
    this.playMemeClip(clip, 3, 1.12);
  }

  public playCrash(heavy = false) {
    if (!this.soundEnabled) return;
    this.unlock();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const dur = heavy ? 0.52 : 0.22;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.34));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = heavy ? 950 : 1900;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(heavy ? 0.45 : 0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);

    const thump = this.ctx.createOscillator();
    const tg = this.ctx.createGain();
    thump.type = 'triangle';
    thump.frequency.setValueAtTime(heavy ? 115 : 185, now);
    thump.frequency.exponentialRampToValueAtTime(34, now + (heavy ? 0.35 : 0.14));
    tg.gain.setValueAtTime(heavy ? 0.4 : 0.22, now);
    tg.gain.exponentialRampToValueAtTime(0.001, now + (heavy ? 0.38 : 0.16));
    thump.connect(tg);
    tg.connect(this.masterGain);
    thump.start(now);
    thump.stop(now + (heavy ? 0.4 : 0.18));
  }

  public playWhistle() {
    if (!this.soundEnabled) return;
    this.unlock();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    const g = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(2650, now);
    lfo.frequency.value = 34;
    lfoGain.gain.value = 180;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    g.gain.setValueAtTime(0.001, now);
    g.gain.linearRampToValueAtTime(0.18, now + 0.03);
    g.gain.setValueAtTime(0.18, now + 0.38);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.52);

    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(now);
    lfo.start(now);
    osc.stop(now + 0.55);
    lfo.stop(now + 0.55);
  }

  public playCashChime() {
    if (!this.soundEnabled) return;
    this.unlock();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    [880, 1174.66, 1567.98].forEach((f, idx) => {
      const osc = this.ctx!.createOscillator();
      const g = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);
      g.gain.setValueAtTime(0.15, now + idx * 0.06);
      g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.18);
      osc.connect(g);
      g.connect(this.masterGain!);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.2);
    });
  }

  public playNearMiss() {
    if (!this.soundEnabled) return;
    this.unlock();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(980, now + 0.14);
    g.gain.setValueAtTime(0.12, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.19);
  }

  public playChaosStart() {
    if (!this.soundEnabled) return;
    this.unlock();
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      [330, 440, 554.37, 659.25, 880].forEach((f, idx) => {
        const osc = this.ctx!.createOscillator();
        const g = this.ctx!.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, now + idx * 0.05);
        g.gain.setValueAtTime(0.12, now + idx * 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.22);
        osc.connect(g);
        g.connect(this.masterGain!);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.24);
      });
    }
    this.playRandomMeme(['hila_dala', 'ustha_marum', 'ami_vala_na'], 3, 1.15);
  }

  public playDholaiSlap() {
    if (!this.soundEnabled) return;
    this.unlock();
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      [0, 0.13, 0.26].forEach((t) => {
        const osc = this.ctx!.createOscillator();
        const g = this.ctx!.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(300 - t * 240, now + t);
        osc.frequency.exponentialRampToValueAtTime(58, now + t + 0.08);
        g.gain.setValueAtTime(0.2, now + t);
        g.gain.exponentialRampToValueAtTime(0.001, now + t + 0.09);
        osc.connect(g);
        g.connect(this.masterGain!);
        osc.start(now + t);
        osc.stop(now + t + 0.1);
      });
    }
    this.playRandomMeme(['bari_dilo_dholai', 'hasi_pay_marse'], 4, 1.15);
  }
}
