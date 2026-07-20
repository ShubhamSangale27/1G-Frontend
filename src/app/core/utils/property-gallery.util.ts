import type { PropertyImage } from '../models/property.model';
import {
  extractYouTubeVideoId,
  getPropertyVideoPlayerKind,
  resolveVideoEmbedUrl,
  upgradeInsecureMediaUrl,
} from './image-url.util';

export type GallerySlideKind = 'photo' | 'video-embed';

export interface GallerySlide {
  kind: GallerySlideKind;
  sourceUrl: string;
  /** Resolved once for iframe embed (YouTube, Drive). */
  embedPlayUrl?: string;
}

/**
 * Gallery for property detail: photos + YouTube / Google Drive videos.
 * YouTube links stored as IMAGE are auto-promoted to video embeds.
 */
export function buildGallerySlides(images: PropertyImage[] | undefined): GallerySlide[] {
  if (!images?.length) return [];
  const sorted = [...images].sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  const out: GallerySlide[] = [];
  for (const item of sorted) {
    const url = (item.imageUrl || '').trim();
    if (!url) continue;
    const mt = item.mediaType || 'IMAGE';
    const u = upgradeInsecureMediaUrl(url);

    if (mt === 'VIDEO' || extractYouTubeVideoId(u) || getPropertyVideoPlayerKind(url) === 'embed') {
      const embed = resolveVideoEmbedUrl(url);
      if (embed) {
        out.push({ kind: 'video-embed', sourceUrl: url, embedPlayUrl: embed });
        continue;
      }
    }

    out.push({ kind: 'photo', sourceUrl: url });
  }
  return out;
}
