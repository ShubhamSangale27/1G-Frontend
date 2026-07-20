/**
 * Media URL helpers for Google Drive images, public image URLs, and YouTube videos.
 * All media is URL-based — no server uploads.
 */

/** Upgrade http:// to https:// for known media hosts (fixes mixed content on HTTPS sites). */
export function upgradeInsecureMediaUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  const u = url.trim();
  if (!u.startsWith('http://')) return u;
  const rest = u.slice('http://'.length);
  const host = (rest.split('/')[0] || '').toLowerCase();
  if (
    host === 'youtu.be' ||
    host.endsWith('.youtube.com') ||
    host === 'youtube.com' ||
    host === 'm.youtube.com' ||
    host === 'music.youtube.com' ||
    host.includes('googleusercontent.com') ||
    host.includes('googlevideo.com') ||
    host.includes('drive.google.com') ||
    host.includes('img.youtube.com')
  ) {
    return 'https://' + rest;
  }
  return u;
}

/** Extract Google Drive file ID from share/view/uc links. */
export function extractGoogleDriveFileId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const raw = upgradeInsecureMediaUrl(url.trim());
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

/** YouTube watch, embed, shorts, youtu.be → video id. */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const raw = upgradeInsecureMediaUrl(url.trim());
  if (!raw.includes('youtu')) return null;

  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, '').toLowerCase();

    if (host === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0];
      return id && /^[\w-]{6,32}$/.test(id) ? id : null;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
      const v = u.searchParams.get('v');
      if (v && /^[\w-]{6,32}$/.test(v)) return v;
      const embed = u.pathname.match(/^\/embed\/([\w-]{6,32})/);
      if (embed) return embed[1];
      const shorts = u.pathname.match(/^\/shorts\/([\w-]{6,32})/);
      if (shorts) return shorts[1];
      const live = u.pathname.match(/^\/live\/([\w-]{6,32})/);
      if (live) return live[1];
      const watch = u.pathname.match(/^\/watch\/([\w-]{6,32})/);
      if (watch) return watch[1];
    }
  } catch {
    // fall through to regex
  }

  const fromQuery = raw.match(/[?&]v=([\w-]{6,32})(?:&|#|$)/i);
  if (fromQuery) return fromQuery[1];
  const shorts = raw.match(/youtube\.com\/shorts\/([\w-]{6,32})/i);
  if (shorts) return shorts[1];
  const be = raw.match(/youtu\.be\/([\w-]{6,32})/i);
  if (be) return be[1];
  const embed = raw.match(/youtube\.com\/embed\/([\w-]{6,32})/i);
  if (embed) return embed[1];
  return null;
}

export function isGoogleDriveUrl(url: string | undefined): boolean {
  return !!extractGoogleDriveFileId(url || '');
}

export function isYouTubeUrl(url: string | undefined): boolean {
  return !!extractYouTubeVideoId(url || '');
}

/** True when URL is http(s) and suitable as an image source (Drive, YouTube thumb, or direct image). */
export function isAllowedImageUrl(url: string | undefined): boolean {
  const u = upgradeInsecureMediaUrl((url || '').trim());
  if (!u.startsWith('http://') && !u.startsWith('https://')) return false;
  if (extractYouTubeVideoId(u)) return true;
  if (extractGoogleDriveFileId(u)) return true;
  return /\.(jpe?g|png|gif|webp|bmp|svg)(\?.*)?$/i.test(u)
    || u.includes('googleusercontent.com')
    || u.includes('drive.google.com');
}

/** True when URL is a YouTube or Google Drive video link. */
export function isAllowedVideoUrl(url: string | undefined): boolean {
  const u = upgradeInsecureMediaUrl((url || '').trim());
  if (!u.startsWith('http://') && !u.startsWith('https://')) return false;
  return !!extractYouTubeVideoId(u) || !!extractGoogleDriveFileId(u);
}

/**
 * Convert Google Drive file view/share link to a direct image URL so <img> can load it.
 * YouTube links resolve to a static thumbnail for <img>.
 */
export function toDirectImageUrl(url: string | undefined): string {
  if (!url || typeof url !== 'string') return '';
  const u = upgradeInsecureMediaUrl(url.trim());
  if (!u) return '';
  const yt = extractYouTubeVideoId(u);
  if (yt) {
    return `https://img.youtube.com/vi/${yt}/hqdefault.jpg`;
  }
  const fileId = extractGoogleDriveFileId(u);
  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
  }
  return u;
}

/** Resolve image URL for display (Drive → thumbnail, public URLs as-is). */
export function resolvePropertyImageUrl(url: string | undefined, _baseUrl?: string): string {
  const direct = toDirectImageUrl(url);
  if (!direct) return '';
  if (direct.startsWith('http://') || direct.startsWith('https://')) {
    return upgradeInsecureMediaUrl(direct);
  }
  return direct;
}

export type PropertyVideoPlayerKind = 'embed' | 'native';

/** YouTube and Google Drive videos use iframe embed. */
export function getPropertyVideoPlayerKind(url: string | undefined): PropertyVideoPlayerKind {
  const u = upgradeInsecureMediaUrl((url || '').trim());
  if (!u) return 'native';
  if (extractYouTubeVideoId(u)) return 'embed';
  if (extractGoogleDriveFileId(u)) return 'embed';
  return 'native';
}

function siteOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://www.1guntha.com';
}

/**
 * iframe embed URL (YouTube, Drive preview). Caller must sanitize with DomSanitizer.
 */
export function resolveVideoEmbedUrl(url: string | undefined): string {
  const u = upgradeInsecureMediaUrl((url || '').trim());
  if (!u) return '';
  const yt = extractYouTubeVideoId(u);
  if (yt) {
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      origin: siteOrigin(),
    });
    return `https://www.youtube.com/embed/${yt}?${params.toString()}`;
  }
  const did = extractGoogleDriveFileId(u);
  if (did) {
    return `https://drive.google.com/file/d/${did}/preview`;
  }
  return '';
}

/** @deprecated Direct file video — only used for legacy public .mp4 URLs. */
export function resolveNativeVideoUrl(url: string | undefined, _baseUrl?: string): string {
  if (!url || typeof url !== 'string') return '';
  const u = upgradeInsecureMediaUrl(url.trim());
  if (!u) return '';
  if (extractYouTubeVideoId(u) || extractGoogleDriveFileId(u)) return '';
  if (u.startsWith('http://') || u.startsWith('https://')) return u;
  return '';
}

export function resolveVideoCardPosterUrl(url: string | undefined, _baseUrl?: string): string {
  const u = upgradeInsecureMediaUrl((url || '').trim());
  if (!u) return '';
  const yt = extractYouTubeVideoId(u);
  if (yt) return `https://img.youtube.com/vi/${yt}/hqdefault.jpg`;
  const did = extractGoogleDriveFileId(u);
  if (did) return `https://drive.google.com/thumbnail?id=${did}&sz=w800`;
  return '';
}
