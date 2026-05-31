import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { BlogFilters, BlogPost } from '../../core/models/blog.model';
import { PageResponse } from '../../core/models/property.model';
import { resolvePropertyImageUrl } from '../../core/utils/image-url.util';
import { ConfigService } from '../../core/services/config.service';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, SkeletonLoaderComponent],
  template: `
    <div class="blog-page">
      <section class="blog-hero">
        <div class="container hero-inner">
          <div class="hero-copy">
            <span class="eyebrow">Insights & Guides</span>
            <h1>1Guntha Blog</h1>
            <p>Expert advice on buying, selling, investing, and navigating India's property market.</p>
          </div>
          <div class="hero-stats">
            <div class="stat"><strong>{{ posts.length || '—' }}</strong><span>Articles</span></div>
            <div class="stat"><strong>{{ filters.categories.length }}</strong><span>Topics</span></div>
          </div>
        </div>
      </section>

      <div class="container blog-body">
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

        <div class="loading-grid" *ngIf="loading">
          <div class="post-card card skeleton-card" *ngFor="let i of [1,2,3,4,5,6]">
            <app-skeleton-loader height="180px"></app-skeleton-loader>
            <div class="skeleton-body">
              <app-skeleton-loader height="14px" width="40%"></app-skeleton-loader>
              <app-skeleton-loader height="22px" width="90%"></app-skeleton-loader>
              <app-skeleton-loader height="14px" width="70%"></app-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="error card" *ngIf="!loading && loadError">
          <h3>Couldn't load articles</h3>
          <p>{{ loadError }}</p>
          <button type="button" class="btn btn-primary btn-sm" (click)="loadPosts()">Try again</button>
        </div>

        <div class="posts-grid" *ngIf="posts.length && !loading">
          <article class="post-card card" *ngFor="let p of posts; let i = index" [class.featured]="i === 0 && !selectedCategory && !selectedTag">
            <a [routerLink]="['/blog', p.slug]" class="cover-link">
              <img class="cover" [src]="coverUrl(p.coverImageUrl)" [alt]="p.title" loading="lazy" />
              <span class="read-overlay">Read article →</span>
            </a>
            <div class="body">
              <div class="badges" *ngIf="p.category || p.tags">
                <span class="badge badge-category" *ngIf="p.category">{{ p.category }}</span>
                <span class="badge badge-tag" *ngFor="let t of tagList(p.tags) | slice:0:2">#{{ t }}</span>
              </div>
              <h2><a [routerLink]="['/blog', p.slug]">{{ p.title }}</a></h2>
              <p class="meta">By {{ p.authorName || 'Editor' }} · {{ p.publishedAt || p.createdAt | date:'mediumDate' }}</p>
              <p class="excerpt">{{ p.excerpt || 'Read the full article for market insights and practical tips.' }}</p>
              <a class="read-more" [routerLink]="['/blog', p.slug]">Continue reading</a>
            </div>
          </article>
        </div>

        <div class="empty card" *ngIf="!loading && !loadError && !posts.length">
          <div class="empty-icon">📰</div>
          <h3>No articles yet</h3>
          <p>{{ selectedCategory || selectedTag ? 'Try clearing filters to see more posts.' : 'Check back soon for new property insights.' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .blog-page { background: var(--bg); min-height: calc(100vh - 80px); }
    .blog-hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%);
      color: #fff;
      padding: 3.5rem 0;
      margin-bottom: 2rem;
    }
    .hero-inner { display: flex; justify-content: space-between; align-items: flex-end; gap: 2rem; flex-wrap: wrap; }
    .eyebrow {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #7dd3fc;
      margin-bottom: 0.75rem;
    }
    .hero-copy h1 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      margin: 0 0 0.75rem;
      letter-spacing: -0.02em;
    }
    .hero-copy p { margin: 0; max-width: 520px; color: #cbd5e1; font-size: 1.05rem; line-height: 1.6; }
    .hero-stats { display: flex; gap: 1.5rem; }
    .stat {
      text-align: center;
      padding: 1rem 1.25rem;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: var(--radius-lg);
      min-width: 90px;
    }
    .stat strong { display: block; font-size: 1.75rem; font-weight: 800; }
    .stat span { font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }
    .blog-body { padding-bottom: 4rem; }
    .filters { padding: 1.25rem 1.5rem; margin-bottom: 1.75rem; display: grid; gap: 1rem; border: 1px solid var(--border); }
    .filter-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); }
    .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.4rem; }
    .chip {
      border: 1px solid var(--border);
      background: var(--surface);
      border-radius: 999px;
      padding: 0.4rem 0.95rem;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }
    .chip:hover { border-color: var(--primary); color: var(--primary); }
    .chip.active { background: var(--primary-gradient); color: #fff; border-color: transparent; box-shadow: var(--shadow-md); }
    .loading-grid, .posts-grid {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .post-card {
      overflow: hidden;
      border: 1px solid var(--border);
      transition: var(--transition-slow);
      display: flex;
      flex-direction: column;
    }
    .post-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); border-color: rgba(14,165,233,0.25); }
    .post-card.featured { grid-column: span 2; flex-direction: row; }
    @media (max-width: 900px) { .post-card.featured { grid-column: span 1; flex-direction: column; } }
    .cover-link { position: relative; display: block; overflow: hidden; }
    .cover { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; transition: transform 0.4s ease; }
    .post-card.featured .cover { min-height: 100%; aspect-ratio: auto; width: 45%; flex-shrink: 0; }
    @media (max-width: 900px) { .post-card.featured .cover { width: 100%; aspect-ratio: 16/9; } }
    .cover-link:hover .cover { transform: scale(1.04); }
    .read-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(15,23,42,0.75), transparent 50%);
      display: flex; align-items: flex-end; justify-content: flex-start;
      padding: 1rem; color: #fff; font-weight: 600; font-size: 0.9rem;
      opacity: 0; transition: opacity 0.25s;
    }
    .cover-link:hover .read-overlay { opacity: 1; }
    .body { padding: 1.25rem 1.35rem 1.5rem; flex: 1; display: flex; flex-direction: column; }
    .post-card.featured .body { justify-content: center; }
    .badges { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.65rem; }
    .badge { font-size: 0.7rem; font-weight: 700; padding: 0.22rem 0.6rem; border-radius: 999px; }
    .badge-category { background: rgba(14, 165, 233, 0.12); color: var(--primary); }
    .badge-tag { background: var(--bg); color: var(--text-muted); border: 1px solid var(--border-light); }
    .body h2 { margin: 0 0 0.5rem; font-size: 1.15rem; line-height: 1.35; font-family: var(--font-display); }
    .post-card.featured .body h2 { font-size: 1.5rem; }
    .body h2 a { color: var(--text); text-decoration: none; }
    .body h2 a:hover { color: var(--primary); }
    .meta { margin: 0 0 0.65rem; color: var(--text-muted); font-size: 0.82rem; }
    .excerpt { margin: 0 0 1rem; color: var(--text-secondary); font-size: 0.9375rem; line-height: 1.65; flex: 1; }
    .read-more {
      color: var(--primary);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
    .read-more:hover { text-decoration: underline; }
    .skeleton-card .skeleton-body { padding: 1rem; display: grid; gap: 0.5rem; }
    .empty, .error { padding: 3rem 2rem; text-align: center; }
    .empty-icon { font-size: 3rem; margin-bottom: 0.75rem; }
    .empty h3, .error h3 { margin: 0 0 0.5rem; }
    .empty p, .error p { color: var(--text-muted); margin: 0 0 1rem; }
  `],
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  loading = true;
  loadError = '';
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
    this.loadError = '';
    const params: Record<string, string | number | boolean> = { page: 0, size: 24 };
    if (this.selectedCategory) params['category'] = this.selectedCategory;
    if (this.selectedTag) params['tag'] = this.selectedTag;
    this.api.get<PageResponse<BlogPost>>('/blogs/published', params).subscribe({
      next: (res) => {
        this.posts = res.content || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.loadError = 'We could not load blog posts. Please check your connection and try again.';
      },
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
    if (!url) return 'https://placehold.co/1200x675/0ea5e9/ffffff?text=1Guntha+Blog';
    return resolvePropertyImageUrl(url, this.config.apiUrl);
  }
}
