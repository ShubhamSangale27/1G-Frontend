import type { PropertyImage } from '../models/property.model';
import {
  extractYouTubeVideoId,
  extractVimeoVideoId,
  getPropertyVideoPlayerKind,
  resolveNativeVideoUrl,
  resolveVideoEmbedUrl,
  upgradeInsecureMediaUrl,
} from './image-url.util';

export type GallerySlideKind = 'photo' | 'video-embed' | 'video-native';

export interface GallerySlide {
  kind: GallerySlideKind;
  sourceUrl: string;
  /** Resolved once for <video src> (native uploads / direct mp4). */
  nativePlayUrl?: string;
  /** Resolved once for iframe embed (YouTube, Drive, Vimeo). */
  embedPlayUrl?: string;
}

/**
 * Single ordered gallery for property detail: photos + playable videos (including YouTube
 * links wrongly stored as IMAGE). Drive links stay as photos unless mediaType is VIDEO.
 */
export function buildGallerySlides(images: PropertyImage[] | undefined, apiBaseUrl?: string): GallerySlide[] {
  if (!images?.length) return [];
  const sorted = [...images].sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  const out: GallerySlide[] = [];
  for (const item of sorted) {
    const url = (item.imageUrl || '').trim();
    if (!url) continue;
    const mt = item.mediaType || 'IMAGE';
    const u = upgradeInsecureMediaUrl(url);

    if (mt === 'VIDEO') {
      const k = getPropertyVideoPlayerKind(url);
      if (k === 'embed') {
        out.push({ kind: 'video-embed', sourceUrl: url, embedPlayUrl: resolveVideoEmbedUrl(url) || undefined });
      } else {
        out.push({ kind: 'video-native', sourceUrl: url, nativePlayUrl: resolveNativeVideoUrl(url, apiBaseUrl) || undefined });
      }
      continue;
    }

    if (extractYouTubeVideoId(u) || extractVimeoVideoId(u)) {
      out.push({ kind: 'video-embed', sourceUrl: url, embedPlayUrl: resolveVideoEmbedUrl(url) || undefined });
      continue;
    }

    out.push({ kind: 'photo', sourceUrl: url });
  }
  return out;
}
