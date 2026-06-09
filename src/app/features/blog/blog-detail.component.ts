import { ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, Meta, SafeHtml, SafeResourceUrl, Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, distinctUntilChanged, filter, map, of, switchMap, tap } from 'rxjs';
import { BlogPost, BlogContentBlock } from '../../core/models/blog.model';
import { BlogService } from '../../core/services/blog.service';
import { resolvePropertyImageUrl, resolveVideoEmbedUrl } from '../../core/utils/image-url.util';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';
import { extractHttpErrorMessage } from '../../core/utils/http-error-message.util';

interface RenderBlock extends BlogContentBlock {
  html?: SafeHtml;
  embedUrl?: SafeResourceUrl;
  imageUrl?: string;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SkeletonLoaderComponent],
  template: `
    <div class="blog-detail-page">
      <div class="blog-wrap">
        <a routerLink="/blog" class="back">← Back to Blog</a>

        <div class="blog-surface loading" *ngIf="loading">
          <app-skeleton-loader height="280px" style="margin-bottom:1rem;border-radius:var(--radius-lg);"></app-skeleton-loader>
          <app-skeleton-loader height="32px" width="70%"></app-skeleton-loader>
          <app-skeleton-loader height="14px" width="40%" style="margin-top:0.75rem;"></app-skeleton-loader>
        </div>

        <div class="blog-surface not-found" *ngIf="!loading && loadError">
          <div class="nf-icon">📄</div>
          <h2>Article not found</h2>
          <p>{{ loadError }}</p>
          <a routerLink="/blog" class="btn btn-primary">Browse all articles</a>
        </div>

        <article class="blog-surface article" *ngIf="!loading && post">
          <div class="article-hero" *ngIf="post.coverImageUrl">
            <img class="hero-image" [src]="heroImageUrl" [alt]="post.title" />
          </div>
          <div class="article-inner">
            <div class="badges" *ngIf="post.category || post.tags">
              <span class="badge badge-category" *ngIf="post.category">{{ post.category }}</span>
              <span class="badge badge-tag" *ngFor="let t of tagList; trackBy: trackByStr">#{{ t }}</span>
            </div>
            <h1>{{ post.title }}</h1>
            <p class="meta">By {{ post.authorName || 'Editor' }} · {{ postDate | date:'medium' }}</p>

            <div class="content">
              <ng-container *ngFor="let b of renderBlocks; trackBy: trackByBlockId">
                <div class="text-block blog-rich-text" *ngIf="b.blockType === 'TEXT'" [innerHTML]="b.html"></div>
                <figure class="media-block" *ngIf="b.blockType === 'IMAGE'">
                  <img [src]="b.imageUrl" [alt]="b.caption || post.title" loading="lazy" />
                  <figcaption *ngIf="b.caption">{{ b.caption }}</figcaption>
                </figure>
                <figure class="media-block" *ngIf="b.blockType === 'VIDEO' && b.embedUrl">
                  <iframe
                    [src]="b.embedUrl"
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  ></iframe>
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
    :host { display: block; }
    .blog-detail-page { padding: 2rem 0 4rem; background: var(--bg); min-height: calc(100vh - 80px); }
    .blog-wrap {
      width: 100%;
      max-width: 860px;
      margin: 0 auto;
      padding: 0 1.5rem;
      box-sizing: border-box;
    }
    .blog-surface {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }
    .back {
      color: var(--primary);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      margin-bottom: 1.25rem;
      font-weight: 600;
    }
    .back:hover { text-decoration: underline; }
    .loading { padding: 1.5rem; }
    .not-found { padding: 2.5rem 2rem; text-align: center; }
    .nf-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .not-found h2 { margin: 0 0 0.5rem; }
    .not-found p { color: var(--text-muted); margin: 0 0 1.25rem; }
    .article { overflow: hidden; padding: 0; }
    .article-hero { max-height: 400px; overflow: hidden; background: var(--bg-secondary); }
    .hero-image { width: 100%; height: 400px; object-fit: cover; display: block; }
    .article-inner { padding: 2rem 2.25rem 2.5rem; }
    .badges { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem; }
    .badge { font-size: 0.72rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 999px; }
    .badge-category { background: rgba(14, 165, 233, 0.12); color: var(--primary); }
    .badge-tag { background: var(--bg); color: var(--text-muted); border: 1px solid var(--border-light); }
    .article h1 {
      font-family: var(--font-display);
      margin: 0 0 0.5rem;
      font-size: clamp(1.75rem, 3vw, 2.35rem);
      line-height: 1.2;
    }
    .meta {
      margin: 0 0 1.75rem;
      color: var(--text-muted);
      font-size: 0.9375rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--border-light);
    }
    .content { display: grid; gap: 1.25rem; }
    .text-block { font-size: 1.0625rem; line-height: 1.8; }
    .media-block { margin: 0; }
    .media-block img, .media-block iframe, .media-block video {
      width: 100%;
      border: 0;
      border-radius: var(--radius);
      aspect-ratio: 16/9;
      background: #0f172a;
      object-fit: contain;
    }
    .media-block figcaption { margin-top: 0.5rem; color: var(--text-muted); font-size: 0.875rem; text-align: center; }
    .link-block { margin: 0; padding: 1rem 1.15rem; background: var(--info-bg); border-radius: var(--radius); }
    .link-block a { color: var(--primary); font-weight: 700; text-decoration: none; word-break: break-word; }
    @media (max-width: 640px) {
      .article-inner { padding: 1.25rem 1rem 2rem; }
      .hero-image { height: 220px; }
    }
  `],
})
export class BlogDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly blog = inject(BlogService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  post: BlogPost | null = null;
  renderBlocks: RenderBlock[] = [];
  heroImageUrl = '';
  tagList: string[] = [];
  postDate = '';
  loading = true;
  loadError = '';

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(p => p.get('slug')?.trim() || ''),
      filter(slug => !!slug),
      distinctUntilChanged(),
      tap(() => {
        this.loading = true;
        this.loadError = '';
        this.post = null;
        this.renderBlocks = [];
        this.cdr.markForCheck();
      }),
      switchMap(slug =>
        this.blog.getPublishedBySlug(slug).pipe(
          catchError((err: unknown) => {
            this.loadError = err instanceof HttpErrorResponse
              ? extractHttpErrorMessage(err)
              : 'This article could not be loaded.';
            return of(null);
          }),
        ),
      ),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((res) => {
      this.loading = false;
      if (res) {
        this.applyPost(res);
      }
      this.cdr.markForCheck();
    });
  }

  private applyPost(p: BlogPost): void {
    this.post = p;
    this.postDate = p.publishedAt || p.createdAt;
    this.tagList = p.tags ? p.tags.split(',').map(t => t.trim()).filter(Boolean) : [];
    this.heroImageUrl = p.coverImageUrl
      ? resolvePropertyImageUrl(p.coverImageUrl)
      : '';
    this.renderBlocks = [...(p.blocks || [])]
      .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
      .map(b => this.toRenderBlock(b));
    this.applySeo(p);
  }

  private toRenderBlock(b: BlogContentBlock): RenderBlock {
    const block: RenderBlock = { ...b };
    if (b.blockType === 'TEXT') {
      const raw = (b.content || '').trim();
      const html = raw.startsWith('<') ? raw : `<p>${this.escapeHtml(raw)}</p>`;
      block.html = this.sanitizer.bypassSecurityTrustHtml(html);
    } else if (b.blockType === 'IMAGE') {
      block.imageUrl = resolvePropertyImageUrl(b.mediaUrl || '');
    } else if (b.blockType === 'VIDEO') {
      const embed = resolveVideoEmbedUrl(b.mediaUrl || '');
      if (embed) {
        block.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
      }
    }
    return block;
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  private applySeo(p: BlogPost): void {
    const pageTitle = p.metaTitle?.trim() || p.title;
    const description = p.metaDescription?.trim() || p.excerpt?.trim() || `Read ${p.title} on 1Guntha Blog.`;
    this.title.setTitle(`${pageTitle} | 1Guntha Blog`);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    if (p.coverImageUrl) {
      this.meta.updateTag({ property: 'og:image', content: this.heroImageUrl });
    }
  }

  trackByBlockId = (_: number, b: RenderBlock) => b.id ?? b.displayOrder ?? _;
  trackByStr = (_: number, v: string) => v;
}
