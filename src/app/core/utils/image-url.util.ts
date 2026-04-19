/**
 * Extract Google Drive file ID from share/view/uc links.
 * Supports: /file/d/ID, /open?id=ID, /uc?export=view|download&id=ID
 */
function extractGoogleDriveFileId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const raw = url.trim();
  if (!raw.includes('drive.google.com')) return null;
  if (/\/folders\//i.test(raw)) return null;

  const fileMatch = raw.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return fileMatch[1];

  const openMatch = raw.match(/\/open\?(?:[^#]*&)?id=([a-zA-Z0-9_-]+)/);
  if (openMatch) return openMatch[1];

  try {
    const parsed = new URL(raw);
    const id = parsed.searchParams.get('id');
    if (!id || !/^[a-zA-Z0-9_-]+$/.test(id)) return null;
    const path = parsed.pathname || '';
    if (path === '/uc' || path.startsWith('/uc')) return id;
    if (path === '/thumbnail' || path.startsWith('/thumbnail')) return id;
  } catch {
    return null;
  }
  return null;
}

/** YouTube watch, embed, shorts, youtu.be → video id (11 chars typical). */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const raw = url.trim();
  if (!raw.includes('youtu')) return null;
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, '').toLowerCase();
    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
      const v = u.searchParams.get('v');
      if (v && /^[\w-]{11}$/.test(v)) return v;
      const embed = u.pathname.match(/^\/embed\/([\w-]{11})/);
      if (embed) return embed[1];
      const shorts = u.pathname.match(/^\/shorts\/([\w-]{11})/);
      if (shorts) return shorts[1];
      const live = u.pathname.match(/^\/live\/([\w-]{11})/);
      if (live) return live[1];
    }
  } catch {
    const watch = raw.match(/[?&]v=([\w-]{11})\b/);
    if (watch) return watch[1];
    const shorts = raw.match(/youtube\.com\/shorts\/([\w-]{11})/i);
    if (shorts) return shorts[1];
    const be = raw.match(/youtu\.be\/([\w-]{11})/i);
    if (be) return be[1];
  }
  return null;
}

export function isGoogleDriveUrl(url: string | undefined): boolean {
  return !!extractGoogleDriveFileId(url || '');
}

export function isYouTubeUrl(url: string | undefined): boolean {
  return !!extractYouTubeVideoId(url || '');
}

/**
 * Convert Google Drive file view/share link to a direct image URL so <img> can load it.
 * https://drive.google.com/thumbnail?id=FILE_ID&sz=w1200
 */
export function toDirectImageUrl(url: string | undefined): string {
  if (!url || typeof url !== 'string') return '';
  const u = url.trim();
  if (!u) return '';
  const fileId = extractGoogleDriveFileId(u);
  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
  }
  return u;
}

/**
 * Resolve a property image URL for display: converts Drive view links to direct URLs,
 * and prepends baseUrl for relative paths.
 */
export function resolvePropertyImageUrl(url: string | undefined, baseUrl?: string): string {
  const direct = toDirectImageUrl(url);
  if (!direct) return '';
  if (direct.startsWith('http://') || direct.startsWith('https://')) return direct;
  const base = (baseUrl || '').replace(/\/$/, '');
  return base ? (direct.startsWith('/') ? base + direct : base + '/' + direct) : direct;
}

export type PropertyVideoPlayerKind = 'embed' | 'native';

/** YouTube and Google Drive videos must use an iframe embed, not <video src>. */
export function getPropertyVideoPlayerKind(url: string | undefined): PropertyVideoPlayerKind {
  const u = (url || '').trim();
  if (!u) return 'native';
  if (extractYouTubeVideoId(u)) return 'embed';
  if (extractGoogleDriveFileId(u)) return 'embed';
  return 'native';
}

/**
 * URL for iframe embed (YouTube embed player, Drive preview). Caller must sanitize with DomSanitizer.
 */
export function resolveVideoEmbedUrl(url: string | undefined): string {
  const u = (url || '').trim();
  if (!u) return '';
  const yt = extractYouTubeVideoId(u);
  if (yt) {
    return `https://www.youtube.com/embed/${yt}?rel=0&modestbranding=1`;
  }
  const did = extractGoogleDriveFileId(u);
  if (did) {
    return `https://drive.google.com/file/d/${did}/preview`;
  }
  return '';
}

/**
 * URL for HTML5 <video src> — direct file URLs and same-origin relative paths only.
 */
export function resolveNativeVideoUrl(url: string | undefined, baseUrl?: string): string {
  if (!url || typeof url !== 'string') return '';
  const u = url.trim();
  if (!u) return '';
  if (extractYouTubeVideoId(u) || extractGoogleDriveFileId(u)) return '';
  if (u.startsWith('http://') || u.startsWith('https://')) return u;
  const base = (baseUrl || '').replace(/\/$/, '');
  return base ? (u.startsWith('/') ? base + u : base + '/' + u) : u;
}

/**
 * @deprecated Use resolveNativeVideoUrl / resolveVideoEmbedUrl + getPropertyVideoPlayerKind instead.
 */
export function resolvePropertyVideoUrl(url: string | undefined, baseUrl?: string): string {
  const embed = resolveVideoEmbedUrl(url);
  if (embed) return embed;
  return resolveNativeVideoUrl(url, baseUrl);
}

/** Poster / card image for a video URL (listing cards when there is no separate image). */
export function resolveVideoCardPosterUrl(url: string | undefined, baseUrl?: string): string {
  const u = (url || '').trim();
  if (!u) return '';
  const yt = extractYouTubeVideoId(u);
  if (yt) return `https://img.youtube.com/vi/${yt}/hqdefault.jpg`;
  const did = extractGoogleDriveFileId(u);
  if (did) return `https://drive.google.com/thumbnail?id=${did}&sz=w800`;
  const native = resolveNativeVideoUrl(u, baseUrl);
  if (native && /\.(mp4|webm|ogg)(\?.*)?$/i.test(native)) {
    return 'https://placehold.co/400x250/0f172a/94a3b8?text=%E2%96%B6+Video';
  }
  return '';
}
