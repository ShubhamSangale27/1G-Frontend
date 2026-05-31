import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { BlogFilters, BlogPost } from '../../core/models/blog.model';
import { PageResponse } from '../../core/models/property.model';
import { resolvePropertyImageUrl } from '../../core/utils/image-url.util';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="blog-page">
      <div class="container">
        <div class="hero card">
          <h1>1Guntha Blog</h1>
          <p>Daily insights on property buying, selling, investment, and market updates.</p>
        </div>

        <div class="filters card" *ngIf="filters.categories.length || filters.tags.length">
          <div class="filter-group" *ngIf="filters.categories.length">
            <span class="filter-label">Categories</span>
            <div class="chips">
              <button type="button" class="chip" [class.active]="!selectedCategory" (click)="selectCategory('')">All</button>
              <button type="button" class="chip" *ngFor="let c of filters.categories"
                      [class.active]="selectedCategory === c" (click)="selectCategory(c)">{{ c }}</button>
            </div>
          </div>
          <div class="filter-group" *ngIf="filters.tags.length">
            <span class="filter-label">Tags</span>
            <div class="chips">
              <button type="button" class="chip" [class.active]="!selectedTag" (click)="selectTag('')">All</button>
              <button type="button" class="chip" *ngFor="let t of filters.tags"
                      [class.active]="selectedTag === t" (click)="selectTag(t)">#{{ t }}</button>
            </div>
          </div>
        </div>

        <div class="posts-grid" *ngIf="posts.length && !loading">
          <article class="post-card card" *ngFor="let p of posts">
            <img class="cover" [src]="coverUrl(p.coverImageUrl)" [alt]="p.title" />
            <div class="body">
              <div class="badges" *ngIf="p.category || p.tags">
                <span class="badge badge-category" *ngIf="p.category">{{ p.category }}</span>
                <span class="badge badge-tag" *ngFor="let t of tagList(p.tags)">#{{ t }}</span>
              </div>
              <h2><a [routerLink]="['/blog', p.slug]">{{ p.title }}</a></h2>
              <p class="meta">By {{ p.authorName || 'Editor' }} · {{ p.publishedAt || p.createdAt | date:'mediumDate' }}</p>
              <p class="excerpt">{{ p.excerpt || 'Read the full article for details.' }}</p>
              <a class="read-more" [routerLink]="['/blog', p.slug]">Read More →</a>
            </div>
          </article>
        </div>

        <div class="empty card" *ngIf="!loading && !posts.length">
          No posts match the selected filters.
        </div>
      </div>
    </div>
  `,
  styles: [`
    .blog-page { padding: 2rem 0 3rem; }
    .hero { padding: 2rem; margin-bottom: 1rem; }
    .hero h1 { margin: 0 0 0.5rem; }
    .hero p { margin: 0; color: var(--text-muted); }
    .filters { padding: 1rem 1.1rem; margin-bottom: 1.25rem; display: grid; gap: 0.85rem; }
    .filter-group { display: grid; gap: 0.45rem; }
    .filter-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); }
    .chips { display: flex; flex-wrap: wrap; gap: 0.45rem; }
    .chip {
      border: 1px solid var(--border);
      background: var(--surface);
      border-radius: 999px;
      padding: 0.35rem 0.8rem;
      font-size: 0.84rem;
      cursor: pointer;
      transition: var(--transition);
    }
    .chip:hover { border-color: var(--primary-light); color: var(--primary); }
    .chip.active { background: var(--primary-gradient); color: #fff; border-color: transparent; }
    .posts-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
    .post-card { overflow: hidden; border: 1px solid var(--border); }
    .cover { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }
    .body { padding: 1rem 1.1rem 1.2rem; }
    .badges { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.55rem; }
    .badge { font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 999px; }
    .badge-category { background: rgba(14, 165, 233, 0.12); color: var(--primary); }
    .badge-tag { background: var(--bg); color: var(--text-muted); border: 1px solid var(--border-light); }
    .body h2 { margin: 0 0 0.5rem; font-size: 1.2rem; line-height: 1.3; }
    .body h2 a { color: var(--text); text-decoration: none; }
    .meta { margin: 0 0 0.6rem; color: var(--text-muted); font-size: 0.84rem; }
    .excerpt { margin: 0 0 0.75rem; color: var(--text-secondary); }
    .read-more { color: var(--primary); text-decoration: none; font-weight: 600; }
    .empty { padding: 2rem; text-align: center; color: var(--text-muted); }
  `],
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  loading = true;
  filters: BlogFilters = { categories: [], tags: [] };
  selectedCategory = '';
  selectedTag = '';

  constructor(private api: ApiService, private config: ConfigService) {}

  ngOnInit(): void {
    this.loadFilters();
    this.loadPosts();
  }

  loadFilters(): void {
    this.api.get<BlogFilters>('/blogs/published/filters').subscribe({
      next: (res) => { this.filters = res || { categories: [], tags: [] }; },
    });
  }

  loadPosts(): void {
    this.loading = true;
    const params: Record<string, string | number | boolean> = { page: 0, size: 24 };
    if (this.selectedCategory) params['category'] = this.selectedCategory;
    if (this.selectedTag) params['tag'] = this.selectedTag;
    this.api.get<PageResponse<BlogPost>>('/blogs/published', params).subscribe({
      next: (res) => {
        this.posts = res.content || [];
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadPosts();
  }

  selectTag(tag: string): void {
    this.selectedTag = tag;
    this.loadPosts();
  }

  tagList(tags?: string | null): string[] {
    if (!tags) return [];
    return tags.split(',').map(t => t.trim()).filter(Boolean);
  }

  coverUrl(url?: string | null): string {
    if (!url) return 'https://placehold.co/1200x675?text=Blog';
    return resolvePropertyImageUrl(url, this.config.apiUrl);
  }
}
