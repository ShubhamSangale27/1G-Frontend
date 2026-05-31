import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, Meta, SafeHtml, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ApiService } from '../../core/services/api.service';
import { BlogPost, BlogContentBlock } from '../../core/models/blog.model';
import { ConfigService } from '../../core/services/config.service';
import { resolvePropertyImageUrl, resolveNativeVideoUrl, resolveVideoEmbedUrl, getPropertyVideoPlayerKind } from '../../core/utils/image-url.util';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="blog-detail-page" *ngIf="post as p">
      <div class="container">
        <a routerLink="/blog" class="back">← Back to Blog</a>
        <article class="card article">
          <div class="badges" *ngIf="p.category || p.tags">
            <span class="badge badge-category" *ngIf="p.category">{{ p.category }}</span>
            <span class="badge badge-tag" *ngFor="let t of tagList(p.tags)">#{{ t }}</span>
          </div>
          <h1>{{ p.title }}</h1>
          <p class="meta">By {{ p.authorName || 'Editor' }} · {{ p.publishedAt || p.createdAt | date:'medium' }}</p>
          <img *ngIf="p.coverImageUrl" class="hero-image" [src]="imgUrl(p.coverImageUrl)" [alt]="p.title" />

          <div class="content">
            <ng-container *ngFor="let b of sortedBlocks(p.blocks)">
              <div class="text-block rich-text" *ngIf="b.blockType === 'TEXT'" [innerHTML]="safeHtml(b.content)"></div>
              <figure class="media-block" *ngIf="b.blockType === 'IMAGE'">
                <img [src]="imgUrl(b.mediaUrl)" [alt]="b.caption || 'Blog image'" />
                <figcaption *ngIf="b.caption">{{ b.caption }}</figcaption>
              </figure>
              <figure class="media-block" *ngIf="b.blockType === 'VIDEO'">
                <iframe *ngIf="isEmbedVideo(b)" [src]="safeVideo(b)" allowfullscreen></iframe>
                <video *ngIf="!isEmbedVideo(b)" [src]="nativeVideo(b)" controls playsinline preload="metadata"></video>
                <figcaption *ngIf="b.caption">{{ b.caption }}</figcaption>
              </figure>
              <p class="link-block" *ngIf="b.blockType === 'LINK'">
                <a [href]="b.linkUrl || '#'" target="_blank" rel="noopener noreferrer">{{ b.content }}</a>
              </p>
            </ng-container>
          </div>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .blog-detail-page { padding: 2rem 0 3rem; }
    .back { color: var(--primary); text-decoration: none; display: inline-block; margin-bottom: 1rem; }
    .article { padding: 1.4rem 1.4rem 2rem; }
    .badges { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.65rem; }
    .badge { font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 999px; }
    .badge-category { background: rgba(14, 165, 233, 0.12); color: var(--primary); }
    .badge-tag { background: var(--bg); color: var(--text-muted); border: 1px solid var(--border-light); }
    .article h1 { margin: 0 0 0.4rem; font-size: clamp(1.6rem, 2.5vw, 2.4rem); line-height: 1.25; }
    .meta { margin: 0 0 1.1rem; color: var(--text-muted); }
    .hero-image { width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: var(--radius); margin-bottom: 1rem; }
    .content { display: grid; gap: 1rem; }
    .text-block { margin: 0; line-height: 1.8; font-size: 1.05rem; color: var(--text-secondary); }
    .rich-text h2 { font-size: 1.45rem; margin: 0.75rem 0 0.35rem; color: var(--text); }
    .rich-text h3 { font-size: 1.2rem; margin: 0.65rem 0 0.3rem; color: var(--text); }
    .rich-text p { margin: 0.35rem 0; }
    .rich-text ul { margin: 0.35rem 0 0.35rem 1.25rem; }
    .rich-text a { color: var(--primary); }
    .media-block { margin: 0; }
    .media-block img, .media-block iframe, .media-block video {
      width: 100%; border: 0; border-radius: var(--radius); aspect-ratio: 16/9; background: #0f172a; object-fit: contain;
    }
    .media-block figcaption { margin-top: 0.45rem; color: var(--text-muted); font-size: 0.88rem; }
    .link-block { margin: 0; }
    .link-block a { color: var(--primary); font-weight: 600; text-decoration: none; word-break: break-word; }
  `],
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private config: ConfigService,
    private sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return;
    this.api.get<BlogPost>(`/blogs/published/${slug}`).subscribe({
      next: (res) => {
        this.post = res;
        this.applySeo(res);
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
    if (!url) return 'https://placehold.co/1200x675?text=Blog';
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
