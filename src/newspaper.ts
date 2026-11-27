import {
  DEV_FACEBOOK_URL,
  LeaderboardEntry,
  RunStats,
  formatTakaBn,
  formatTakaCompactBn,
  getRankForLoss,
  toBanglaDigits
} from './types';

export interface NewspaperEdition {
  issueNo: string;
  dateBn: string;
  headline: string;
  subhead: string;
  storyParagraphs: string[];
  witnessQuote: string;
  photoCaption: string;
  rankTitle: string;
  rankBadge: string;
  totalLossFormatted: string;
  compactLoss: string;
}

const STORAGE_BOARD_KEY = 'mamarRasta.leaderboard.v1';
const STORAGE_ISSUE_KEY = 'mamarRasta.issueNo.v1';

const BN_MONTHS = [
  'জানুয়ারি',
  'ফেব্রুয়ারি',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টেম্বর',
  'অক্টোবর',
  'নভেম্বর',
  'ডিসেম্বর'
];

function getTodayBn(): string {
  const now = new Date();
  return `${toBanglaDigits(now.getDate())} ${BN_MONTHS[now.getMonth()]} ${toBanglaDigits(now.getFullYear())}`;
}

function nextIssueNumber(): number {
  try {
    const raw = localStorage.getItem(STORAGE_ISSUE_KEY);
    const n = raw ? parseInt(raw, 10) + 1 : 420;
    localStorage.setItem(STORAGE_ISSUE_KEY, String(n));
    return n;
  } catch {
    return 420;
  }
}

export function buildNewspaperEdition(stats: RunStats, driverName: string): NewspaperEdition {
  const name = driverName.trim() || 'মামার ভাতিজা';
  const vehicle = stats.vehicleNameBn || 'দেশি টেসলা';
  const issueNo = toBanglaDigits(nextIssueNumber());
  const dateBn = getTodayBn();
  const rank = getRankForLoss(stats.nationalLoss);
  const compactLoss = formatTakaCompactBn(stats.nationalLoss);
  const totalVehicles = stats.carsHit + stats.cngsHit + stats.bikesHit + stats.rickshawsHit;

  let headline = '';
  let subhead = '';
  let photoCaption = '';
  let witnessQuote = '';

  switch (stats.deathReason) {
    case 'mob':
      headline = `${vehicle} নিয়ে তাণ্ডব: পাবলিক ধোলাইয়ে "${name}"-এর মাথা ঘোলা!`;
      subhead = `${compactLoss} জাতীয় ক্ষতি করে পালাতে গিয়ে উত্তেজিত জনতার খপ্পরে চালক`;
      photoCaption = 'ফাইল ফটো: ধোলাইয়ের পর চালকের প্রথম প্রতিক্রিয়া — "এমন একটা বাড়ি দিলো, আঁআআ কইরা উঠলাম!"';
      witnessQuote = '“জনতা চিৎকার করছিল — শুঁটিয়ে লাল করে দেবো! চালক তখনও ব্রেক খুঁজছিলেন।” — প্রত্যক্ষদর্শী চা-দোকানি';
      break;
    case 'bus':
      headline = `খতম! টাটা! বাই বাই! রং সাইডে লোকাল বাসের চাকায় ${vehicle} চ্যাপ্টা`;
      subhead = `${toBanglaDigits(Math.round(stats.distanceMeters))} মিটার তাণ্ডবের পর "${stats.deathDetail || 'বলাকা পরিবহন'}"-এর বাম্পারে সমাপ্তি`;
      photoCaption = 'ঘটনাস্থল: বাসের হেলপার জানান, "মামা একদম গেটলক গতিতে ঢুকে পড়ছিল!"';
      witnessQuote = '“দেখা আপনে লাপরওয়াহি কা নতিজা! আমরা হর্ন মারতে মারতে গলা ফাটায়া ফেলছি।” — বাস চালক';
      break;
    case 'truck':
      headline = `মালবাহী ট্রাকের সাথে ওয়ান-টু-ওয়ান: ${vehicle}-এর পার্টস এখন মতিঝিল!`;
      subhead = `${totalVehicles > 0 ? `${toBanglaDigits(totalVehicles)}টি গাড়ি গুঁতিয়ে` : 'পাগলাটে গতির'} শেষে ভারী ট্রাকের পেছনে সমাপ্তি`;
      photoCaption = 'ঘটনাস্থল: ট্রাকের পেছনে বড় করে লেখা ছিল — "হর্ন দিন, দূরত্ব বজায় রাখুন"!';
      witnessQuote = '“অতি বড় হয়ো না ঝড়ে পড়ে যাবে — ট্রাকের সামনে ব্রেক ছাড়া গাড়ি আনছে!” — পথচারী';
      break;
    case 'battery':
      headline = `হলুদ দাগে চার্জ না নেওয়ার শাস্তি: রাস্তায় অচল ${vehicle}, চালক ডিপ্রেশনে!`;
      subhead = `ব্যাটারি ০% হয়ে যাওয়ায় মাঝরাস্তায় থমকে দাঁড়ান "${name}", সৃষ্টি হয় ৫ কিলোমিটার যানজট`;
      photoCaption = 'ঘটনাস্থল: চার্জ শেষ হওয়ায় যাত্রী নিজেই এখন গাড়ি ঠেলছেন।';
      witnessQuote = '“চালক গাড়ি থেকে নেমেই বললেন — আমি ডিপ্রেশনে থাকি ভাই, মা কসম!” — যাত্রী';
      break;
    case 'sergeant':
      headline = `চায়ের টাকা না দেওয়ায় গজব বেইজ্জতি: সার্জেন্টের হাতে ${vehicle} ডাম্পিং!`;
      subhead = `নো লাইসেন্স, নো ব্রেক — সাথে ${compactLoss} জাতীয় ক্ষতির মামলা কাঁধে নিয়ে হাঁটছেন "${name}"`;
      photoCaption = 'ঘটনাস্থল: সার্জেন্ট জানিয়েছেন, "এক কাপ চা ঢেলে দিলেই তো সব মিটে যেত!"';
      witnessQuote = '“পড়াই-লিখাই মে ধ্যান লাগাও, লেকিন নেহি — রং সাইডে গাড়ি চালাইতেই হবে!” — প্রত্যক্ষদর্শী';
      break;
  }

  const p1 =
    `নিজস্ব প্রতিবেদক, ঢাকা: গতকাল ব্যস্ত সড়কে "পরিবেশটা সুন্দর না? এখন হইচই হবে!" স্লোগান দিয়ে ${vehicle} নিয়ে নজিরবিহীন তাণ্ডব চালিয়েছেন চালক ${name}। ` +
    `মাত্র ${toBanglaDigits(Math.round(stats.survivalSeconds))} সেকেন্ডের এই অভিযানে তিনি মোট ${formatTakaBn(stats.nationalLoss)} মূল্যের জাতীয় ক্ষতি সাধন করেন (গ্যারেজ আয়: ${formatTakaBn(stats.garageEarnedTk)})।`;

  const p2Parts: string[] = [];
  if (stats.wrongSideMeters > 20) {
    p2Parts.push(`প্রায় ${toBanglaDigits(Math.round(stats.wrongSideMeters))} মিটার রাস্তা বুক ফুলিয়ে রং সাইডে চালিয়েছেন`);
  }
  if (totalVehicles > 0) {
    p2Parts.push(`ধাক্কা দিয়েছেন ${toBanglaDigits(totalVehicles)}টি গাড়ি, সিএনজি, ট্র্যাক্টর ও বাইকে`);
  }
  if (stats.stallsSmashed > 0) {
    p2Parts.push(`রাস্তার পাশের ${toBanglaDigits(stats.stallsSmashed)}টি চা-স্টল ও ফুচকার দোকান "ঢেলে দেই" বলে উড়িয়ে দিয়েছেন`);
  }
  if (stats.illegalPowerStolenTk > 0) {
    p2Parts.push(`ইলেকট্রিক পোলের হলুদ দাগ থেকে ${formatTakaBn(stats.illegalPowerStolenTk)}-এর অবৈধ বিদ্যুৎ চুরি করেছেন`);
  }
  if (stats.bribesPaid > 0) {
    p2Parts.push(`পথে ${toBanglaDigits(stats.bribesPaid)} বার ট্রাফিক সার্জেন্টকে "চায়ের টাকা" (${formatTakaBn(stats.bribeTotalTk)}) ঢেলে দিয়ে পার পেয়েছেন`);
  }

  const p2 =
    p2Parts.length > 0
      ? `প্রত্যক্ষদর্শীরা জানান, ${p2Parts.join(', ')}। সাউন্ড বম্ব ফাটিয়ে তিনি ${toBanglaDigits(stats.soundBombsUsed)} বার পুরো এলাকায় মিম-আতঙ্ক ছড়িয়ে দেন।`
      : `প্রত্যক্ষদর্শীরা জানান, তিনি পুরো রাস্তা জুড়ে হর্ন আর ভাইরাল সাউন্ড বম্ব ফাটিয়ে সবাইকে তটস্থ করে রেখেছিলেন।`;

  const p3 =
    `সর্বোচ্চ গতি ছিল ঘণ্টায় ${toBanglaDigits(Math.round(stats.topSpeedKmh))} কি.মি. এবং সর্বোচ্চ কম্বো ${toBanglaDigits(stats.maxCombo)}×। ` +
    `দৈনিক যানজট সম্পাদকীয় বোর্ড তাঁকে "${rank.title}" উপাধিতে ভূষিত করেছে।`;

  return {
    issueNo,
    dateBn,
    headline,
    subhead,
    storyParagraphs: [p1, p2, p3],
    witnessQuote,
    photoCaption,
    rankTitle: rank.title,
    rankBadge: rank.badge,
    totalLossFormatted: formatTakaBn(stats.nationalLoss),
    compactLoss
  };
}

export function loadLeaderboard(): LeaderboardEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_BOARD_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, 8);
  } catch {
    return [];
  }
}

export function saveLeaderboardScore(stats: RunStats, driverName: string): LeaderboardEntry[] {
  const existing = loadLeaderboard();
  const rank = getRankForLoss(stats.nationalLoss);
  const entry: LeaderboardEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    name: driverName.trim() || 'মামার ভাতিজা',
    loss: Math.round(stats.nationalLoss),
    rank: rank.title,
    deathReason: stats.deathReason,
    date: getTodayBn(),
    distance: Math.round(stats.distanceMeters)
  };
  const updated = [...existing, entry]
    .sort((a, b) => b.loss - a.loss)
    .slice(0, 8);
  try {
    localStorage.setItem(STORAGE_BOARD_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
  return updated;
}

export function exportNewspaperPng(
  edition: NewspaperEdition,
  stats: RunStats,
  snapshotDataUrl: string | null
): Promise<void> {
  return new Promise((resolve) => {
    const W = 960;
    const H = 1320;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d')!;

    const drawEverything = (img: HTMLImageElement | null, teamImg: HTMLImageElement | null) => {
      ctx.fillStyle = '#f2e8cf';
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < 3600; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(60, 45, 25, 0.055)' : 'rgba(255, 255, 255, 0.06)';
        ctx.fillRect(Math.random() * W, Math.random() * H, 2, 2);
      }

      ctx.strokeStyle = '#1c1917';
      ctx.lineWidth = 6;
      ctx.strokeRect(24, 24, W - 48, H - 48);
      ctx.lineWidth = 2;
      ctx.strokeRect(34, 34, W - 68, H - 68);

      ctx.save();
      ctx.translate(W - 132, 108);
      ctx.rotate(0.14);
      ctx.strokeStyle = '#991b1b';
      ctx.lineWidth = 4;
      ctx.strokeRect(-72, -26, 144, 52);
      ctx.fillStyle = '#991b1b';
      ctx.textAlign = 'center';
      ctx.font = '800 18px "Hind Siliguri", sans-serif';
      ctx.fillText('ঢাকা স্পেশাল', 0, -2);
      ctx.font = '700 15px "Hind Siliguri", sans-serif';
      ctx.fillText('সীলমোহরকৃত', 0, 18);
      ctx.restore();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#991b1b';
      ctx.font = '900 78px "Noto Serif Bengali", "Baloo Da 2", serif';
      ctx.fillText('দৈনিক যানজট', W / 2, 122);

      ctx.fillStyle = '#292524';
      ctx.font = '700 22px "Hind Siliguri", sans-serif';
      ctx.fillText('“সত্যের সন্ধানে, যানজটের মাঝখানে” • মামার রাস্তা স্পেশাল সংস্করণ', W / 2, 160);

      ctx.strokeStyle = '#1c1917';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(46, 178);
      ctx.lineTo(W - 46, 178);
      ctx.moveTo(46, 214);
      ctx.lineTo(W - 46, 214);
      ctx.stroke();

      ctx.font = '600 18px "Hind Siliguri", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`সংখ্যা: ${edition.issueNo}`, 54, 202);
      ctx.textAlign = 'center';
      ctx.fillText(`তারিখ: ${edition.dateBn}`, W / 2, 202);
      ctx.textAlign = 'right';
      ctx.fillText('মূল্য: ৫ টাকা (চা ছাড়া)', W - 54, 202);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#111827';
      ctx.font = '900 37px "Noto Serif Bengali", "Baloo Da 2", serif';
      const headLines = wrapText(ctx, edition.headline, W - 110);
      let y = 266;
      for (const line of headLines) {
        ctx.fillText(line, W / 2, y);
        y += 46;
      }

      ctx.fillStyle = '#991b1b';
      ctx.font = '700 22px "Hind Siliguri", sans-serif';
      const subLines = wrapText(ctx, edition.subhead, W - 120);
      for (const line of subLines) {
        ctx.fillText(line, W / 2, y + 4);
        y += 30;
      }

      const photoY = y + 18;
      const photoW = 540;
      const photoH = 315;
      const photoX = 54;
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(photoX, photoY, photoW, photoH);
      if (img) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(photoX + 4, photoY + 4, photoW - 8, photoH - 8);
        ctx.clip();
        ctx.filter = 'sepia(0.36) contrast(1.16) saturate(0.9)';
        ctx.drawImage(img, photoX + 4, photoY + 4, photoW - 8, photoH - 8);
        ctx.restore();
      }
      ctx.strokeStyle = '#1c1917';
      ctx.lineWidth = 3;
      ctx.strokeRect(photoX, photoY, photoW, photoH);

      const boxX = photoX + photoW + 24;
      const boxW = W - boxX - 54;
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(boxX, photoY, boxW, 46);
      ctx.fillStyle = '#fef08a';
      ctx.textAlign = 'center';
      ctx.font = '700 22px "Baloo Da 2", sans-serif';
      ctx.fillText('জাতীয় ক্ষতির খতিয়ান', boxX + boxW / 2, photoY + 30);

      ctx.strokeStyle = '#1c1917';
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX, photoY, boxW, photoH);

      ctx.fillStyle = '#b91c1c';
      ctx.font = '900 32px "Baloo Da 2", sans-serif';
      ctx.fillText(edition.compactLoss, boxX + boxW / 2, photoY + 94);

      const rows: [string, string][] = [
        ['গাড়ি', stats.vehicleNameBn],
        ['উপাধি', edition.rankTitle],
        ['দূরত্ব', `${toBanglaDigits(Math.round(stats.distanceMeters))} মি.`],
        ['রং সাইড', `${toBanglaDigits(Math.round(stats.wrongSideMeters))} মি.`],
        ['গাড়ি/বাইক ধাক্কা', `${toBanglaDigits(stats.carsHit + stats.cngsHit + stats.bikesHit + stats.rickshawsHit)} টি`],
        ['অবৈধ চার্জ', `${formatTakaBn(stats.illegalPowerStolenTk)}`],
        ['গ্যারেজ আয়', `${formatTakaBn(stats.garageEarnedTk)}`]
      ];
      ctx.font = '600 17px "Hind Siliguri", sans-serif';
      let ry = photoY + 132;
      for (const [k, v] of rows) {
        ctx.fillStyle = '#44403c';
        ctx.textAlign = 'left';
        ctx.fillText(k, boxX + 12, ry);
        ctx.fillStyle = '#111827';
        ctx.textAlign = 'right';
        ctx.fillText(v, boxX + boxW - 12, ry);
        ry += 26;
      }

      ctx.textAlign = 'left';
      ctx.fillStyle = '#44403c';
      ctx.font = 'italic 600 17px "Hind Siliguri", sans-serif';
      ctx.fillText(edition.photoCaption, photoX, photoY + photoH + 26, photoW);

      let sy = photoY + photoH + 54;
      ctx.fillStyle = 'rgba(153, 27, 27, 0.08)';
      ctx.fillRect(54, sy, W - 108, 56);
      ctx.fillStyle = '#991b1b';
      ctx.fillRect(54, sy, 8, 56);
      ctx.font = 'italic 700 20px "Hind Siliguri", sans-serif';
      ctx.fillText(edition.witnessQuote, 76, sy + 35, W - 144);
      sy += 84;

      ctx.fillStyle = '#1c1917';
      ctx.font = '500 22px "Hind Siliguri", sans-serif';
      for (const para of edition.storyParagraphs) {
        const lines = wrapText(ctx, para, W - 110);
        for (const line of lines) {
          if (sy > H - 120) break;
          ctx.fillText(line, 55, sy);
          sy += 31;
        }
        sy += 12;
      }

      // Developer Credit Footer + Team Photo + Facebook Link!
      ctx.strokeStyle = '#1c1917';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(54, H - 126);
      ctx.lineTo(W - 54, H - 126);
      ctx.stroke();

      if (teamImg) {
        ctx.drawImage(teamImg, 56, H - 116, 112, 84);
        ctx.strokeStyle = '#1c1917';
        ctx.lineWidth = 2;
        ctx.strokeRect(56, H - 116, 112, 84);
      }

      ctx.textAlign = teamImg ? 'left' : 'center';
      const tx = teamImg ? 184 : W / 2;
      ctx.fillStyle = '#1c1917';
      ctx.font = '800 20px "Hind Siliguri", sans-serif';
      ctx.fillText('গেম নির্মাতা: সাব্বির (Developer & Co-Founder) এবং মাজিদ (Co-Developer)', tx, H - 86, W - tx - 56);
      ctx.fillStyle = '#44403c';
      ctx.font = '700 17px "Hind Siliguri", sans-serif';
      ctx.fillText('Sabbir Codex Development Team • মামার রাস্তা ৩ডি', tx, H - 62, W - tx - 56);
      ctx.fillStyle = '#1d4ed8';
      ctx.font = '700 17px "Hind Siliguri", sans-serif';
      ctx.fillText(`Facebook: ${DEV_FACEBOOK_URL}`, tx, H - 38, W - tx - 56);

      const link = document.createElement('a');
      link.download = `dainik-janjot-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      resolve();
    };

    const loadImg = (src: string | null): Promise<HTMLImageElement | null> =>
      new Promise((res) => {
        if (!src) return res(null);
        const im = new Image();
        im.onload = () => res(im);
        im.onerror = () => res(null);
        im.src = src;
      });

    Promise.all([loadImg(snapshotDataUrl), loadImg('./art/dev-team.jpg?v=5')]).then(([snapImg, teamImg]) => {
      drawEverything(snapImg, teamImg);
    });
  });
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const w of words) {
    const test = current ? `${current} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}
