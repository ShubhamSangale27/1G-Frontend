import {
  extractGoogleDriveFileId,
  extractYouTubeVideoId,
  getPropertyVideoPlayerKind,
  isAllowedImageUrl,
  isAllowedVideoUrl,
  resolvePropertyImageUrl,
  resolveVideoEmbedUrl,
} from './image-url.util';

describe('image-url.util', () => {
  it('extracts YouTube id from watch URL', () => {
    expect(extractYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
  });

  it('extracts YouTube id from youtu.be URL', () => {
    expect(extractYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ?si=abc')).toBe('dQw4w9WgXcQ');
  });

  it('extracts YouTube id from shorts URL', () => {
    expect(extractYouTubeVideoId('https://www.youtube.com/shorts/abcdEF12xyz')).toBe('abcdEF12xyz');
  });

  it('builds YouTube embed with origin', () => {
    const embed = resolveVideoEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    expect(embed).toContain('youtube.com/embed/dQw4w9WgXcQ');
    expect(embed).toContain('origin=');
    expect(embed).toContain('playsinline=1');
  });

  it('extracts Google Drive file id', () => {
    expect(extractGoogleDriveFileId('https://drive.google.com/file/d/1abcXYZ/view?usp=sharing')).toBe('1abcXYZ');
    expect(extractGoogleDriveFileId('https://drive.google.com/uc?export=view&id=1abcXYZ')).toBe('1abcXYZ');
  });

  it('resolves Drive image to thumbnail', () => {
    const img = resolvePropertyImageUrl('https://drive.google.com/file/d/1abcXYZ/view');
    expect(img).toContain('drive.google.com/thumbnail?id=1abcXYZ');
  });

  it('classifies YouTube as embed player', () => {
    expect(getPropertyVideoPlayerKind('https://youtu.be/dQw4w9WgXcQ')).toBe('embed');
  });

  it('validates allowed image URLs', () => {
    expect(isAllowedImageUrl('https://example.com/photo.jpg')).toBe(true);
    expect(isAllowedImageUrl('https://drive.google.com/file/d/abc/view')).toBe(true);
    expect(isAllowedImageUrl('not-a-url')).toBe(false);
  });

  it('validates allowed video URLs', () => {
    expect(isAllowedVideoUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
    expect(isAllowedVideoUrl('https://drive.google.com/file/d/abc/view')).toBe(true);
    expect(isAllowedVideoUrl('https://example.com/video.mp4')).toBe(false);
  });
});
