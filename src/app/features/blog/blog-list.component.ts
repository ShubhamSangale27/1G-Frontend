import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogFilters, BlogPost } from '../../core/models/blog.model';
import { BlogService } from '../../core/services/blog.service';
import { resolvePropertyImageUrl } from '../../core/utils/image-url.util';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, SkeletonLoaderComponent],
  template: `
    <div class="blog-page">
      <section class="blog-hero">
        <div class="blog-wrap hero-inner">
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

      <div class="blog-wrap blog-body">
        <div class="blog-surface filters" *ngIf="filters.categories.length || filters.tags.length">
          <div class="filter-group" *ngIf="filters.categories.length">
            <span class="filter-label">Categories</span>
            <div class="chips">
              <button type="button" class="chip" [class.active]="!selectedCategory" (click)="selectCategory('')">All</button>
              <button type="button" class="chip" *ngFor="let c of filters.categories; trackBy: trackByStr"
                      [class.active]="selectedCategory === c" (click)="selectCategory(c)">{{ c }}</button>
            </div>
          </div>
          <div class="filter-group" *ngIf="filters.tags.length">
            <span class="filter-label">Tags</span>
            <div class="chips">
              <button type="button" class="chip" [class.active]="!selectedTag" (click)="selectTag('')">All</button>
              <button type="button" class="chip" *ngFor="let t of filters.tags; trackBy: trackByStr"
                      [class.active]="selectedTag === t" (click)="selectTag(t)">#{{ t }}</button>
            </div>
          </div>
        </div>

        <div class="loading-grid" *ngIf="loading">
          <div class="blog-surface skeleton-card" *ngFor="let i of skeletonItems; trackBy: trackByIndex">
            <app-skeleton-loader height="180px"></app-skeleton-loader>
            <div class="skeleton-body">
              <app-skeleton-loader height="14px" width="40%"></app-skeleton-loader>
              <app-skeleton-loader height="22px" width="90%"></app-skeleton-loader>
            </div>
          </div>
        </div>

        <div class="blog-surface error" *ngIf="!loading && loadError">
          <h3>Couldn't load articles</h3>
          <p>{{ loadError }}</p>
          <button type="button" class="btn btn-primary btn-sm" (click)="loadPosts()">Try again</button>
        </div>

        <div class="posts-grid" *ngIf="!loading && !loadError && posts.length">
          <article class="blog-surface post-card" *ngFor="let p of posts; trackBy: trackByPostId; let i = index"
                   [class.post-card--lead]="i === 0 && !selectedCategory && !selectedTag">
            <a [routerLink]="['/blog', p.slug]" class="cover-link">
              <img class="cover" [src]="coverUrls[p.id]" [alt]="p.title" loading="lazy" />
            </a>
            <div class="body">
              <div class="badges" *ngIf="p.category || p.tags">
                <span class="badge badge-category" *ngIf="p.category">{{ p.category }}</span>
                <span class="badge badge-tag" *ngFor="let t of tagLists[p.id]; trackBy: trackByStr">#{{ t }}</span>
              </div>
              <h2><a [routerLink]="['/blog', p.slug]">{{ p.title }}</a></h2>
              <p class="meta">By {{ p.authorName || 'Editor' }} · {{ postDate(p) | date:'mediumDate' }}</p>
              <p class="excerpt">{{ p.excerpt || 'Read the full article for market insights and practical tips.' }}</p>
              <a class="read-more" [routerLink]="['/blog', p.slug]">Continue reading →</a>
            </div>
          </article>
        </div>

        <div class="blog-surface empty" *ngIf="!loading && !loadError && !posts.length">
          <div class="empty-icon">📰</div>
          <h3>No articles yet</h3>
          <p>{{ selectedCategory || selectedTag ? 'Try clearing filters to see more posts.' : 'Check back soon for new property insights.' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .blog-page { background: var(--bg); min-height: calc(100vh - 80px); }
    .blog-wrap {
      width: 100%;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      box-sizing: border-box;
    }
    .blog-surface {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }
    .blog-hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%);
      color: #fff;
      padding: 3rem 0;
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
      font-size: clamp(2rem, 4vw, 2.75rem);
      font-weight: 800;
      margin: 0 0 0.75rem;
    }
    .hero-copy p { margin: 0; max-width: 520px; color: #cbd5e1; font-size: 1.05rem; line-height: 1.6; }
    .hero-stats { display: flex; gap: 1rem; }
    .stat {
      text-align: center;
      padding: 0.85rem 1.15rem;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: var(--radius-lg);
      min-width: 88px;
    }
    .stat strong { display: block; font-size: 1.5rem; font-weight: 800; }
    .stat span { font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; }
    .blog-body { padding-bottom: 3rem; }
    .filters { padding: 1.25rem 1.5rem; margin-bottom: 1.5rem; display: grid; gap: 1rem; }
    .filter-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); }
    .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.35rem; }
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
    .chip.active { background: var(--primary-gradient); color: #fff; border-color: transparent; }
    .loading-grid, .posts-grid {
      display: grid;
      gap: 1.25rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    .post-card {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .post-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
    .post-card--lead { grid-column: 1 / -1; flex-direction: row; min-height: 260px; }
    @media (max-width: 768px) { .post-card--lead { flex-direction: column; min-height: 0; } }
    .cover-link { display: block; flex-shrink: 0; overflow: hidden; background: var(--bg-secondary); }
    .cover { width: 100%; height: 200px; object-fit: cover; display: block; }
    .post-card--lead .cover { width: 42%; height: auto; min-height: 260px; }
    @media (max-width: 768px) { .post-card--lead .cover { width: 100%; min-height: 200px; height: 200px; } }
    .body { padding: 1.25rem 1.35rem 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 0.35rem; }
    .badges { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.25rem; }
    .badge { font-size: 0.7rem; font-weight: 700; padding: 0.22rem 0.6rem; border-radius: 999px; }
    .badge-category { background: rgba(14, 165, 233, 0.12); color: var(--primary); }
    .badge-tag { background: var(--bg); color: var(--text-muted); border: 1px solid var(--border-light); }
    .body h2 { margin: 0; font-size: 1.15rem; line-height: 1.35; font-family: var(--font-display); }
    .post-card--lead .body h2 { font-size: 1.45rem; }
    .body h2 a { color: var(--text); text-decoration: none; }
    .body h2 a:hover { color: var(--primary); }
    .meta { margin: 0; color: var(--text-muted); font-size: 0.82rem; }
    .excerpt { margin: 0; color: var(--text-secondary); font-size: 0.9375rem; line-height: 1.65; flex: 1; }
    .read-more { color: var(--primary); text-decoration: none; font-weight: 700; font-size: 0.875rem; margin-top: 0.35rem; }
    .read-more:hover { text-decoration: underline; }
    .skeleton-card .skeleton-body { padding: 1rem; display: grid; gap: 0.5rem; }
    .empty, .error { padding: 2.5rem 2rem; text-align: center; margin-top: 0.5rem; }
    .empty-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .empty h3, .error h3 { margin: 0 0 0.5rem; }
    .empty p, .error p { color: var(--text-muted); margin: 0 0 1rem; }
  `],
})
export class BlogListComponent implements OnInit {
  private readonly blog = inject(BlogService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  posts: BlogPost[] = [];
  coverUrls: Record<number, string> = {};
  tagLists: Record<number, string[]> = {};
  loading = true;
  loadError = '';
  filters: BlogFilters = { categories: [], tags: [] };
  selectedCategory = '';
  selectedTag = '';
  readonly skeletonItems = [0, 1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.blog.getFilters().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.filters = res || { categories: [], tags: [] };
        this.cdr.markForCheck();
      },
    });
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.loadError = '';
    this.blog.getPublished(0, 24, this.selectedCategory || undefined, this.selectedTag || undefined)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (items) => {
          this.posts = items;
          this.coverUrls = {};
          this.tagLists = {};
          for (const p of items) {
            this.coverUrls[p.id] = p.coverImageUrl
              ? resolvePropertyImageUrl(p.coverImageUrl)
              : 'https://placehold.co/800x450/0ea5e9/ffffff?text=1Guntha+Blog';
            this.tagLists[p.id] = this.parseTags(p.tags).slice(0, 2);
          }
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.loading = false;
          this.loadError = 'We could not load blog posts. Please check your connection and try again.';
          this.cdr.detectChanges();
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

  postDate(p: BlogPost): string {
    return p.publishedAt || p.createdAt;
  }

  parseTags(tags?: string | null): string[] {
    if (!tags) return [];
    return tags.split(',').map(t => t.trim()).filter(Boolean);
  }

  trackByPostId = (_: number, p: BlogPost) => p.id;
  trackByStr = (_: number, v: string) => v;
  trackByIndex = (i: number) => i;
}
