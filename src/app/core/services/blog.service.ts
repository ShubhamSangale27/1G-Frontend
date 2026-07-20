import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { BlogFilters, BlogPost } from '../models/blog.model';
import { PageResponse } from '../models/property.model';

/** Normalise list API body whether or not it is wrapped in PageResponse. */
export function normalizeBlogPage(res: PageResponse<BlogPost> | BlogPost[] | null | undefined): BlogPost[] {
  if (!res) return [];
  if (Array.isArray(res)) return res;
  return res.content ?? [];
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private api: ApiService) {}

  getPublished(page = 0, size = 24, category?: string, tag?: string): Observable<BlogPost[]> {
    const params: Record<string, string | number | boolean> = { page, size };
    if (category) params['category'] = category;
    if (tag) params['tag'] = tag;
    return this.api.get<PageResponse<BlogPost>>('/blogs/published', params).pipe(
      map(normalizeBlogPage),
    );
  }

  getPublishedBySlug(slug: string): Observable<BlogPost> {
    return this.api.get<BlogPost>(`/blogs/published/${encodeURIComponent(slug)}`);
  }

  getFilters(): Observable<BlogFilters> {
    return this.api.get<BlogFilters>('/blogs/published/filters');
  }

  getEditorPosts(page = 0, size = 100): Observable<BlogPost[]> {
    return this.api.get<PageResponse<BlogPost>>('/blogs/editor/mine', { page, size }).pipe(
      map(normalizeBlogPage),
    );
  }
}
