import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, Meta, SafeHtml, SafeResourceUrl, Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { BlogPost, BlogContentBlock } from '../../core/models/blog.model';
import { ConfigService } from '../../core/services/config.service';
import { resolvePropertyImageUrl, resolveNativeVideoUrl, resolveVideoEmbedUrl, getPropertyVideoPlayerKind } from '../../core/utils/image-url.util';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';
import { extractHttpErrorMessage } from '../../core/utils/http-error-message.util';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SkeletonLoaderComponent],
  template: `
    <div class="blog-detail-page">
      <div class="container">
        <a routerLink="/blog" class="back">← Back to Blog</a>

        <div class="loading card" *ngIf="loading">
          <app-skeleton-loader height="320px" style="margin-bottom:1rem;border-radius:var(--radius-lg);"></app-skeleton-loader>
          <app-skeleton-loader height="36px" width="70%"></app-skeleton-loader>
          <app-skeleton-loader height="16px" width="40%" style="margin-top:0.75rem;"></app-skeleton-loader>
          <app-skeleton-loader height="14px" width="100%" style="margin-top:1.5rem;"></app-skeleton-loader>
          <app-skeleton-loader height="14px" width="95%" style="margin-top:0.5rem;"></app-skeleton-loader>
        </div>

        <div class="not-found card" *ngIf="!loading && loadError">
          <div class="nf-icon">📄</div>
          <h2>Article not found</h2>
          <p>{{ loadError }}</p>
          <a routerLink="/blog" class="btn btn-primary">Browse all articles</a>
        </div>

        <article class="card article" *ngIf="post as p">
          <div class="article-hero" *ngIf="p.coverImageUrl">
            <img class="hero-image" [src]="imgUrl(p.coverImageUrl)" [alt]="p.title" />
            <div class="hero-gradient"></div>
          </div>
          <div class="article-inner">
            <div class="badges" *ngIf="p.category || p.tags">
              <span class="badge badge-category" *ngIf="p.category">{{ p.category }}</span>
              <span class="badge badge-tag" *ngFor="let t of tagList(p.tags)">#{{ t }}</span>
            </div>
            <h1>{{ p.title }}</h1>
            <p class="meta">By {{ p.authorName || 'Editor' }} · {{ p.publishedAt || p.createdAt | date:'medium' }}</p>

            <div class="content">
              <ng-container *ngFor="let b of sortedBlocks(p.blocks)">
                <div class="text-block blog-rich-text" *ngIf="b.blockType === 'TEXT'" [innerHTML]="safeHtml(b.content)"></div>
                <figure class="media-block" *ngIf="b.blockType === 'IMAGE'">
                  <img [src]="imgUrl(b.mediaUrl)" [alt]="b.caption || 'Blog image'" loading="lazy" />
                  <figcaption *ngIf="b.caption">{{ b.caption }}</figcaption>
                </figure>
                <figure class="media-block" *ngIf="b.blockType === 'VIDEO'">
                  <iframe *ngIf="isEmbedVideo(b)" [src]="safeVideo(b)" allowfullscreen title="Video"></iframe>
                  <video *ngIf="!isEmbedVideo(b)" [src]="nativeVideo(b)" controls playsinline preload="metadata"></video>
                  <figcaption *ngIf="b.caption">{{ b.caption }}</figcaption>
                </figure>
                <p class="link-block" *ngIf="b.blockType === 'LINK'">
                  <a [href]="b.linkUrl || '#'" target="_blank" rel="noopener noreferrer">{{ b.content }}</a>
                </p>
              </ng-container>
            </div>
          </div>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .blog-detail-page { padding: 2rem 0 4rem; background: var(--bg); min-height: calc(100vh - 80px); }
    .back {
      color: var(--primary);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
      font-size: 0.9375rem;
    }
    .back:hover { text-decoration: underline; }
    .loading { padding: 1.5rem; }
    .not-found { padding: 3rem 2rem; text-align: center; }
    .nf-icon { font-size: 3rem; margin-bottom: 0.75rem; }
    .not-found h2 { margin: 0 0 0.5rem; }
    .not-found p { color: var(--text-muted); margin: 0 0 1.5rem; }
    .article { overflow: hidden; border: 1px solid var(--border); padding: 0; }
    .article-hero { position: relative; max-height: 420px; overflow: hidden; }
    .hero-image { width: 100%; height: 420px; object-fit: cover; display: block; }
    .hero-gradient { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,23,42,0.4), transparent); }
    .article-inner { padding: 2rem 2.25rem 2.5rem; max-width: 780px; margin: 0 auto; }
    .badges { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.85rem; }
    .badge { font-size: 0.72rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 999px; }
    .badge-category { background: rgba(14, 165, 233, 0.12); color: var(--primary); }
    .badge-tag { background: var(--bg); color: var(--text-muted); border: 1px solid var(--border-light); }
    .article h1 {
      font-family: var(--font-display);
      margin: 0 0 0.5rem;
      font-size: clamp(1.75rem, 3vw, 2.5rem);
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    .meta { margin: 0 0 2rem; color: var(--text-muted); font-size: 0.9375rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-light); }
    .content { display: grid; gap: 1.25rem; }
    .text-block { font-size: 1.0625rem; }
    .media-block { margin: 0; }
    .media-block img, .media-block iframe, .media-block video {
      width: 100%; border: 0; border-radius: var(--radius-lg); aspect-ratio: 16/9;
      background: #0f172a; object-fit: contain; box-shadow: var(--shadow-md);
    }
    .media-block figcaption { margin-top: 0.5rem; color: var(--text-muted); font-size: 0.875rem; text-align: center; }
    .link-block { margin: 0; padding: 1rem 1.25rem; background: var(--info-bg); border-radius: var(--radius); }
    .link-block a { color: var(--primary); font-weight: 700; text-decoration: none; word-break: break-word; }
    .link-block a:hover { text-decoration: underline; }
    @media (max-width: 640px) {
      .article-inner { padding: 1.25rem 1rem 2rem; }
      .hero-image { height: 240px; }
    }
  `],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  post: BlogPost | null = null;
  loading = true;
  loadError = '';
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private config: ConfigService,
    private sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (!slug) {
        this.loading = false;
        this.loadError = 'Invalid blog URL.';
        return;
      }
      this.loadPost(slug);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  loadPost(slug: string): void {
    this.loading = true;
    this.loadError = '';
    this.post = null;
    this.api.get<BlogPost>(`/blogs/published/${encodeURIComponent(slug)}`).subscribe({
      next: (res) => {
        this.post = res;
        this.loading = false;
        this.applySeo(res);
      },
      error: (err: unknown) => {
        this.loading = false;
        this.loadError = err instanceof HttpErrorResponse
          ? extractHttpErrorMessage(err)
          : 'This article could not be loaded.';
      },
    });
  }

  applySeo(p: BlogPost): void {
    const pageTitle = p.metaTitle?.trim() || p.title;
    const description = p.metaDescription?.trim() || p.excerpt?.trim() || `Read ${p.title} on 1Guntha Blog.`;
    this.title.setTitle(`${pageTitle} | 1Guntha Blog`);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    if (p.coverImageUrl) {
      this.meta.updateTag({ property: 'og:image', content: this.imgUrl(p.coverImageUrl) });
    }
  }

  sortedBlocks(blocks: BlogContentBlock[]): BlogContentBlock[] {
    return [...(blocks || [])].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  }

  tagList(tags?: string | null): string[] {
    if (!tags) return [];
    return tags.split(',').map(t => t.trim()).filter(Boolean);
  }

  safeHtml(content?: string | null): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content || '');
  }

  imgUrl(url?: string | null): string {
    if (!url) return 'https://placehold.co/1200x675/0ea5e9/ffffff?text=1Guntha+Blog';
    return resolvePropertyImageUrl(url, this.config.apiUrl);
  }

  isEmbedVideo(block: BlogContentBlock): boolean {
    return getPropertyVideoPlayerKind(block.mediaUrl || '') === 'embed';
  }

  safeVideo(block: BlogContentBlock): SafeResourceUrl {
    const embed = resolveVideoEmbedUrl(block.mediaUrl || '');
    return this.sanitizer.bypassSecurityTrustResourceUrl(embed || 'about:blank');
  }

  nativeVideo(block: BlogContentBlock): string {
    return resolveNativeVideoUrl(block.mediaUrl || '', this.config.apiUrl);
  }
}
