/**
 * Lightweight end-to-end checks for media URL helpers (no Karma required).
 * Run: node scripts/verify-media-urls.mjs
 */

function upgradeInsecureMediaUrl(url) {
  if (!url || typeof url !== 'string') return '';
  const u = url.trim();
  if (!u.startsWith('http://')) return u;
  const rest = u.slice('http://'.length);
  const host = (rest.split('/')[0] || '').toLowerCase();
  if (host.includes('youtu') || host.includes('drive.google.com')) return 'https://' + rest;
  return u;
}

function extractYouTubeVideoId(url) {
  const raw = upgradeInsecureMediaUrl(url);
  if (!raw.includes('youtu')) return null;
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, '').toLowerCase();
    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0];
      return id && /^[\w-]{6,32}$/.test(id) ? id : null;
    }
    if (host.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) return v;
      const embed = u.pathname.match(/^\/embed\/([\w-]{6,32})/);
      if (embed) return embed[1];
      const shorts = u.pathname.match(/^\/shorts\/([\w-]{6,32})/);
      if (shorts) return shorts[1];
    }
  } catch { /* */ }
  const m = raw.match(/[?&]v=([\w-]{6,32})/);
  return m ? m[1] : null;
}

function resolveVideoEmbedUrl(url) {
  const yt = extractYouTubeVideoId(url);
  if (!yt) return '';
  return `https://www.youtube.com/embed/${yt}?rel=0&modestbranding=1&playsinline=1&origin=https%3A%2F%2Fwww.1guntha.com`;
}

const cases = [
  ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'dQw4w9WgXcQ'],
  ['https://youtu.be/dQw4w9WgXcQ?si=abc', 'dQw4w9WgXcQ'],
  ['https://www.youtube.com/embed/dQw4w9WgXcQ', 'dQw4w9WgXcQ'],
  ['https://youtube.com/shorts/l-wG-dsoGHU', 'l-wG-dsoGHU'],
];

let failed = 0;
for (const [url, expected] of cases) {
  const id = extractYouTubeVideoId(url);
  const embed = resolveVideoEmbedUrl(url);
  if (id !== expected || !embed.includes(expected)) {
    console.error('FAIL', url, { id, embed });
    failed++;
  } else {
    console.log('OK  ', url, '→', embed);
  }
}

if (failed) {
  console.error(`\n${failed} test(s) failed`);
  process.exit(1);
}
console.log('\nAll media URL checks passed.');
