export type BlogBlockType = 'TEXT' | 'IMAGE' | 'VIDEO' | 'LINK';

export interface BlogContentBlock {
  id?: number;
  blockType: BlogBlockType;
  content?: string | null;
  mediaUrl?: string | null;
  linkUrl?: string | null;
  caption?: string | null;
  displayOrder?: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImageUrl?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  category?: string | null;
  tags?: string | null;
  published: boolean;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  authorName?: string | null;
  blocks: BlogContentBlock[];
}

export interface BlogPostCreateUpdateRequest {
  title: string;
  excerpt?: string | null;
  coverImageUrl?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  category?: string | null;
  tags?: string | null;
  published: boolean;
  blocks: BlogContentBlock[];
}

export interface BlogFilters {
  categories: string[];
  tags: string[];
}

export const BLOG_CATEGORY_OPTIONS = [
  'Market Updates',
  'Buying Guide',
  'Selling Tips',
  'Investment',
  'Legal & RERA',
  'Home Decor',
];
