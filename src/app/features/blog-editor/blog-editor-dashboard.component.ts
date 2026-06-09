import { ChangeDetectorRef, Component, DestroyRef, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpContext, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
import { BlogService } from '../../core/services/blog.service';
import {
  BLOG_CATEGORY_OPTIONS,
  BlogContentBlock,
  BlogPost,
  BlogPostCreateUpdateRequest,
} from '../../core/models/blog.model';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  isAllowedImageUrl,
  isAllowedVideoUrl,
  resolvePropertyImageUrl,
  resolveVideoEmbedUrl,
} from '../../core/utils/image-url.util';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BlogRichTextEditorComponent } from '../../shared/blog-rich-text-editor/blog-rich-text-editor.component';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';
import { SKIP_GLOBAL_ERROR_TOAST } from '../../core/http-context.tokens';
import { extractHttpErrorMessage } from '../../core/utils/http-error-message.util';

@Component({
  selector: 'app-blog-editor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, BlogRichTextEditorComponent, SkeletonLoaderComponent, RouterLink],
  template: `
    <div class="studio-page">
      <div class="studio-wrap">
        <header class="studio-card studio-header">
          <div class="studio-header-copy">
            <span class="eyebrow">Content Studio</span>
            <h1>Blog Studio</h1>
            <p>Create, edit, and publish property insights for your audience.</p>
          </div>
          <button type="button" class="btn btn-primary" (click)="newPost()">+ New Post</button>
        </header>

        <div
          #saveBanner
          class="save-banner"
          *ngIf="saveMessage()"
          [class.save-banner-error]="saveMessageError()"
          role="status"
        >
          {{ saveMessage() }}
          <a *ngIf="lastSavedSlug && draft.published" [routerLink]="['/blog', lastSavedSlug]" class="view-live-link">View on blog →</a>
        </div>

        <div class="studio-layout">
          <section class="studio-card studio-list">
            <div class="panel-head">
              <h3>Your Posts</h3>
              <span class="count-badge" *ngIf="!listLoading">{{ posts.length }}</span>
            </div>

            <div class="list-loading" *ngIf="listLoading">
              <app-skeleton-loader height="64px" *ngFor="let i of skeletonItems; trackBy: trackByIndex"></app-skeleton-loader>
            </div>

            <div class="list-error" *ngIf="!listLoading && listError">{{ listError }}</div>

            <div class="post-row" *ngFor="let p of posts; trackBy: trackByPostId" [class.active]="editingId === p.id">
              <div class="post-info">
                <div class="title">{{ p.title }}</div>
                <div class="meta">
                  <span class="status-pill" [class.published]="p.published">{{ p.published ? 'Published' : 'Draft' }}</span>
                  <span *ngIf="p.category"> · {{ p.category }}</span>
                  · {{ p.updatedAt | date:'short' }}
                </div>
              </div>
              <div class="post-actions">
                <button type="button" class="btn btn-outline btn-sm" (click)="editPost(p)">Edit</button>
                <button type="button" class="btn btn-outline btn-sm" (click)="togglePublish(p)">{{ p.published ? 'Unpublish' : 'Publish' }}</button>
                <button type="button" class="btn btn-outline btn-sm btn-danger" (click)="deletePost(p)">Delete</button>
              </div>
            </div>

            <div class="list-empty" *ngIf="!listLoading && !posts.length && !listError">
              No posts yet. Click <strong>+ New Post</strong> to start writing.
            </div>
          </section>

          <section class="studio-card studio-editor">
            <h3>{{ editingId ? 'Edit Post' : 'Create Post' }}</h3>

            <div class="studio-field">
              <label>Title</label>
              <input [(ngModel)]="draft.title" placeholder="Catchy headline…" />
            </div>
            <div class="studio-field">
              <label>Excerpt</label>
              <textarea rows="2" [(ngModel)]="draft.excerpt" placeholder="Short summary for the blog listing…"></textarea>
            </div>

            <div class="studio-section seo-section">
              <h4>SEO</h4>
              <div class="studio-field">
                <label>Meta title</label>
                <input [(ngModel)]="draft.metaTitle" placeholder="Browser tab / search title" maxlength="255" />
              </div>
              <div class="studio-field">
                <label>Meta description</label>
                <textarea rows="2" [(ngModel)]="draft.metaDescription" placeholder="Search engine summary" maxlength="500"></textarea>
              </div>
            </div>

            <div class="studio-section taxonomy-section">
              <h4>Category & Tags</h4>
              <div class="studio-field">
                <label>Category</label>
                <input [(ngModel)]="draft.category" list="blog-categories" placeholder="e.g. Market Updates" />
                <datalist id="blog-categories">
                  <option *ngFor="let c of categoryOptions" [value]="c"></option>
                </datalist>
              </div>
              <div class="studio-field">
                <label>Tags</label>
                <input [(ngModel)]="draft.tags" placeholder="investment, nri, tips" />
                <small>Comma-separated tags for filter chips.</small>
              </div>
            </div>

            <div class="studio-field">
              <label>Cover image URL</label>
              <input [(ngModel)]="draft.coverImageUrl" placeholder="Google Drive or public image URL (https://…)" />
              <small>Google Drive file link (Anyone with the link) or any public image URL.</small>
              <img class="cover-preview" *ngIf="coverPreviewUrl" [src]="coverPreviewUrl" alt="Cover preview" />
            </div>

            <h4 class="blocks-title">Content Blocks <span class="hint">Drag to reorder</span></h4>
            <div
              class="studio-card content-block"
              *ngFor="let b of draft.blocks; let i = index; trackBy: trackByBlockIndex"
              draggable="true"
              (dragstart)="onDragStart(i)"
              (dragover)="onDragOver($event)"
              (drop)="onDrop(i)"
              [class.dragging]="dragIndex === i"
            >
              <div class="block-handle" title="Drag to reorder">⋮⋮</div>
              <div class="studio-inline block-toolbar">
                <select [(ngModel)]="b.blockType">
                  <option value="TEXT">Text</option>
                  <option value="IMAGE">Image</option>
                  <option value="VIDEO">Video</option>
                  <option value="LINK">Link</option>
                </select>
                <button type="button" class="btn btn-outline btn-sm" (click)="move(i, -1)" [disabled]="i===0">↑</button>
                <button type="button" class="btn btn-outline btn-sm" (click)="move(i, 1)" [disabled]="i===draft.blocks.length-1">↓</button>
                <button type="button" class="btn btn-outline btn-sm btn-danger" (click)="removeBlock(i)">Remove</button>
              </div>

              <app-blog-rich-text-editor
                *ngIf="b.blockType === 'TEXT'"
                [(ngModel)]="b.content"
                [ngModelOptions]="{standalone: true}"
              ></app-blog-rich-text-editor>

              <div *ngIf="b.blockType === 'IMAGE' || b.blockType === 'VIDEO'" class="studio-field">
                <input [(ngModel)]="b.mediaUrl" [placeholder]="b.blockType === 'VIDEO' ? 'YouTube or Google Drive video URL' : 'Google Drive or public image URL'" />
                <small *ngIf="b.blockType === 'VIDEO'">YouTube watch/youtu.be link or Google Drive video with link sharing enabled.</small>
                <small *ngIf="b.blockType === 'IMAGE'">Paste a public image URL or Google Drive image link.</small>
                <img *ngIf="b.blockType === 'IMAGE' && blockImagePreview(b.mediaUrl)" class="block-preview" [src]="blockImagePreview(b.mediaUrl)" alt="Preview" />
                <iframe
                  *ngIf="b.blockType === 'VIDEO' && blockVideoEmbed(b.mediaUrl)"
                  class="block-preview-video"
                  [src]="blockVideoEmbed(b.mediaUrl)"
                  title="Video preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
                <input [(ngModel)]="b.caption" placeholder="Caption (optional)" />
              </div>
              <div *ngIf="b.blockType === 'LINK'" class="studio-field">
                <input [(ngModel)]="b.content" placeholder="Link text" />
                <input [(ngModel)]="b.linkUrl" placeholder="https://..." />
              </div>
            </div>

            <div class="studio-inline block-add-row">
              <button type="button" class="btn btn-outline" (click)="addBlock('TEXT')">+ Text</button>
              <button type="button" class="btn btn-outline" (click)="addBlock('IMAGE')">+ Image</button>
              <button type="button" class="btn btn-outline" (click)="addBlock('VIDEO')">+ Video</button>
              <button type="button" class="btn btn-outline" (click)="addBlock('LINK')">+ Link</button>
            </div>

            <div class="studio-inline studio-footer">
              <label class="publish-check"><input type="checkbox" [(ngModel)]="draft.published" /> Publish on /blog</label>
              <button type="button" class="btn btn-primary btn-lg" (click)="save()" [disabled]="saving">
                {{ saving ? 'Saving…' : (editingId ? 'Save changes' : 'Save post') }}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .studio-page { padding: 1.5rem 0 3rem; background: var(--bg); min-height: calc(100vh - 80px); }
    .studio-wrap {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1.5rem;
      box-sizing: border-box;
    }
    .studio-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }
    .studio-header {
      padding: 1.5rem 1.75rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      background: linear-gradient(135deg, #fff 0%, #f0f9ff 100%);
    }
    .eyebrow { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--primary); }
    .studio-header h1 { margin: 0.25rem 0; font-family: var(--font-display); font-size: 1.75rem; }
    .studio-header p { margin: 0; color: var(--text-muted); }
    .save-banner {
      margin-bottom: 1rem;
      padding: 0.85rem 1.25rem;
      border-radius: var(--radius);
      background: var(--success-bg);
      color: var(--success-text);
      font-weight: 600;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    .save-banner-error {
      background: var(--danger-bg);
      color: var(--danger-text-strong);
      border-color: rgba(239, 68, 68, 0.3);
    }
    .view-live-link {
      display: inline-block;
      margin-left: 0.75rem;
      color: inherit;
      font-weight: 700;
      text-decoration: underline;
    }
    .block-preview {
      width: 100%;
      max-width: 420px;
      margin-top: 0.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      display: block;
    }
    .block-preview-video {
      width: 100%;
      max-width: 420px;
      aspect-ratio: 16/9;
      margin-top: 0.5rem;
      border: 0;
      border-radius: var(--radius);
      background: #0f172a;
    }
    .studio-layout {
      display: grid;
      gap: 1.25rem;
      grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
      align-items: start;
    }
    .studio-list, .studio-editor { padding: 1.25rem 1.35rem; }
    .panel-head { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }
    .panel-head h3, .studio-editor > h3 { margin: 0 0 1rem; font-family: var(--font-display); font-size: 1.15rem; }
    .count-badge {
      background: var(--primary-gradient);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.15rem 0.55rem;
      border-radius: 999px;
    }
    .list-loading { display: grid; gap: 0.5rem; }
    .list-error, .list-empty { padding: 1.5rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.9375rem; }
    .post-row {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      align-items: flex-start;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 0.85rem;
      margin-bottom: 0.6rem;
      transition: var(--transition);
    }
    .post-row:hover, .post-row.active { border-color: rgba(14,165,233,0.35); background: rgba(14,165,233,0.04); }
    .title { font-weight: 700; font-size: 0.9375rem; line-height: 1.3; word-break: break-word; }
    .meta { color: var(--text-muted); font-size: 0.78rem; margin-top: 0.2rem; }
    .status-pill { font-weight: 700; color: var(--warning-text); }
    .status-pill.published { color: var(--success-text); }
    .post-actions { display: flex; gap: 0.35rem; flex-wrap: wrap; justify-content: flex-end; flex-shrink: 0; }
    .studio-field { margin-bottom: 0.85rem; }
    .studio-field label {
      display: block;
      margin-bottom: 0.35rem;
      font-weight: 600;
      font-size: 0.875rem;
      text-transform: none;
      letter-spacing: 0;
    }
    .studio-field small { display: block; margin-top: 0.25rem; color: var(--text-muted); font-size: 0.78rem; }
    .studio-field input,
    .studio-field textarea,
    .studio-field select,
    .block-toolbar select {
      width: 100%;
      min-height: 2.5rem;
      padding: 0.62rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      box-sizing: border-box;
      font-family: inherit;
      font-size: 0.9375rem;
      background: var(--surface);
    }
    .studio-field textarea { min-height: 4.5rem; resize: vertical; }
    .studio-field input:focus,
    .studio-field textarea:focus,
    .studio-field select:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(14,165,233,0.12);
    }
    .studio-inline {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 0.75rem;
    }
    .studio-inline-grow { flex: 1 1 220px; min-width: 0; }
    .cover-preview {
      width: 100%;
      max-width: 360px;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      margin-top: 0.5rem;
      display: block;
    }
    .studio-section { margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--border-light); }
    .studio-section h4, .blocks-title {
      margin: 0 0 0.75rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
      font-weight: 700;
    }
    .content-block {
      padding: 0.85rem 0.85rem 0.85rem 2rem;
      margin-bottom: 0.65rem;
      position: relative;
      cursor: grab;
    }
    .content-block.dragging { opacity: 0.55; box-shadow: var(--shadow-lg); }
    .block-handle { position: absolute; left: 0.5rem; top: 0.75rem; color: var(--text-muted); font-weight: 700; user-select: none; }
    .block-toolbar select { width: auto; min-width: 110px; flex: 0 0 auto; }
    .hint { font-size: 0.75rem; font-weight: 500; color: var(--text-muted); text-transform: none; letter-spacing: 0; }
    .block-add-row { margin-top: 0.25rem; }
    .studio-footer {
      justify-content: flex-end;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-light);
    }
    .publish-check { display: flex; gap: 0.4rem; align-items: center; margin-right: auto; font-size: 0.9375rem; }
    .btn-danger { color: #dc2626; border-color: #dc2626; }
    @media (max-width: 1080px) { .studio-layout { grid-template-columns: 1fr; } }
    @media (max-width: 640px) {
      .studio-header { flex-direction: column; align-items: stretch; }
      .post-row { flex-direction: column; }
      .post-actions { justify-content: flex-start; }
    }
  `],
})
export class BlogEditorDashboardComponent implements OnInit {
  @ViewChild('saveBanner') saveBannerRef?: ElementRef<HTMLElement>;

  private readonly api = inject(ApiService);
  private readonly blog = inject(BlogService);
  private readonly toast = inject(ToastrService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly embedCache = new Map<string, SafeResourceUrl>();

  posts: BlogPost[] = [];
  editingId: number | null = null;
  dragIndex: number | null = null;
  categoryOptions = BLOG_CATEGORY_OPTIONS;
  draft: BlogPostCreateUpdateRequest = this.emptyDraft();
  lastSavedSlug = '';
  saving = false;
  listLoading = true;
  listError = '';
  saveMessage = signal('');
  saveMessageError = signal(false);
  readonly skeletonItems = [0, 1, 2, 3];

  private readonly skipToast = new HttpContext().set(SKIP_GLOBAL_ERROR_TOAST, true);

  get coverPreviewUrl(): string {
    const url = (this.draft.coverImageUrl || '').trim();
    if (!url || !isAllowedImageUrl(url)) return '';
    return resolvePropertyImageUrl(url);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(silent = false): void {
    if (!silent) {
      this.listLoading = true;
      this.listError = '';
    }
    this.blog.getEditorPosts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (items) => {
          this.posts = items;
          this.listLoading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.listLoading = false;
          this.listError = 'Could not load your posts.';
          this.cdr.detectChanges();
        },
      });
  }

  emptyDraft(): BlogPostCreateUpdateRequest {
    return {
      title: '', excerpt: '', coverImageUrl: '', metaTitle: '', metaDescription: '',
      category: '', tags: '', published: false,
      blocks: [{ blockType: 'TEXT', content: '', displayOrder: 0 }],
    };
  }

  newPost(): void {
    this.editingId = null;
    this.lastSavedSlug = '';
    this.draft = this.emptyDraft();
    this.clearSaveMessage();
  }

  editPost(p: BlogPost): void {
    this.editingId = p.id;
    this.lastSavedSlug = p.slug;
    this.draft = {
      title: p.title, excerpt: p.excerpt || '', coverImageUrl: p.coverImageUrl || '',
      metaTitle: p.metaTitle || '', metaDescription: p.metaDescription || '',
      category: p.category || '', tags: p.tags || '', published: p.published,
      blocks: (p.blocks || []).map((b, i) => ({ ...b, displayOrder: i })),
    };
    this.clearSaveMessage();
    this.cdr.detectChanges();
  }

  blockImagePreview(url?: string | null): string {
    const u = (url || '').trim();
    if (!u || !isAllowedImageUrl(u)) return '';
    return resolvePropertyImageUrl(u);
  }

  blockVideoEmbed(url?: string | null): SafeResourceUrl | undefined {
    const u = (url || '').trim();
    if (!u || !isAllowedVideoUrl(u)) return undefined;
    const embed = resolveVideoEmbedUrl(u);
    if (!embed) return undefined;
    let cached = this.embedCache.get(embed);
    if (!cached) {
      cached = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
      this.embedCache.set(embed, cached);
    }
    return cached;
  }

  addBlock(type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'LINK'): void {
    this.draft.blocks.push({ blockType: type, content: type === 'TEXT' ? '' : undefined, displayOrder: this.draft.blocks.length });
  }

  removeBlock(i: number): void {
    this.draft.blocks.splice(i, 1);
    this.normalizeOrders();
  }

  move(i: number, dir: number): void {
    const j = i + dir;
    if (j < 0 || j >= this.draft.blocks.length) return;
    [this.draft.blocks[i], this.draft.blocks[j]] = [this.draft.blocks[j], this.draft.blocks[i]];
    this.normalizeOrders();
  }

  onDragStart(index: number): void { this.dragIndex = index; }
  onDragOver(event: DragEvent): void { event.preventDefault(); }
  onDrop(index: number): void {
    if (this.dragIndex === null || this.dragIndex === index) return;
    const moved = this.draft.blocks.splice(this.dragIndex, 1)[0];
    this.draft.blocks.splice(index, 0, moved);
    this.dragIndex = null;
    this.normalizeOrders();
  }

  save(): void {
    if (this.saving) return;
    if (!this.draft.title.trim()) { this.showSaveMessage('Title is required.', true); return; }
    if (!this.draft.blocks.length) { this.showSaveMessage('Add at least one content block.', true); return; }
    for (const b of this.draft.blocks) {
      if (b.blockType === 'TEXT' && this.isHtmlBlank(b.content)) {
        this.showSaveMessage('Each text block needs content.', true); return;
      }
      if ((b.blockType === 'IMAGE' || b.blockType === 'VIDEO') && !b.mediaUrl?.trim()) {
        this.showSaveMessage(`${b.blockType} block needs a URL.`, true); return;
      }
      if (b.blockType === 'IMAGE' && !isAllowedImageUrl(b.mediaUrl ?? undefined)) {
        this.showSaveMessage('Image blocks need a Google Drive or public image URL.', true); return;
      }
      if (b.blockType === 'VIDEO' && !isAllowedVideoUrl(b.mediaUrl ?? undefined)) {
        this.showSaveMessage('Video blocks need a YouTube or Google Drive URL.', true); return;
      }
      if (b.blockType === 'LINK' && (!b.content?.trim() || !b.linkUrl?.trim())) {
        this.showSaveMessage('Link blocks need text and URL.', true); return;
      }
    }
    const cover = (this.draft.coverImageUrl || '').trim();
    if (cover && !isAllowedImageUrl(cover)) {
      this.showSaveMessage('Cover must be a Google Drive or public image URL.', true);
      return;
    }
    this.saving = true;
    this.normalizeOrders();
    const req = { ...this.draft, blocks: this.draft.blocks.map(b => ({ ...b })) };
    const obs = this.editingId
      ? this.api.put<BlogPost>(`/blogs/editor/${this.editingId}`, req, this.skipToast)
      : this.api.post<BlogPost>('/blogs/editor', req, this.skipToast);
    obs.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (saved) => {
        this.saving = false;
        this.editingId = saved.id;
        this.lastSavedSlug = saved.slug;
        const msg = saved.published
          ? 'Post saved and published! It is now visible on the blog page.'
          : 'Post saved as draft. Check "Publish on /blog" and save again to make it public.';
        this.showSaveMessage(msg, false);
        this.toast.success(msg, 'Blog Studio');
        this.loadPosts(true);
        this.cdr.detectChanges();
        setTimeout(() => this.saveBannerRef?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 0);
      },
      error: (e: unknown) => {
        this.saving = false;
        const msg = this.extractError(e);
        this.showSaveMessage(msg, true);
        this.toast.error(msg);
        this.cdr.detectChanges();
      },
    });
  }

  togglePublish(p: BlogPost): void {
    this.api.put<BlogPost>(`/blogs/editor/${p.id}/publish?published=${!p.published}`, {}, this.skipToast)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          const msg = !p.published ? 'Post published!' : 'Post moved to draft.';
          this.toast.success(msg);
          this.showSaveMessage(msg, false);
          this.loadPosts();
        },
        error: (e: unknown) => this.toast.error(this.extractError(e)),
      });
  }

  deletePost(p: BlogPost): void {
    if (!confirm(`Delete "${p.title}"?`)) return;
    this.api.delete(`/blogs/editor/${p.id}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.toast.success('Post deleted');
          this.loadPosts();
          if (this.editingId === p.id) this.newPost();
        },
        error: (e: unknown) => this.toast.error(this.extractError(e)),
      });
  }

  private normalizeOrders(): void {
    this.draft.blocks.forEach((b, i) => b.displayOrder = i);
  }

  private isHtmlBlank(html?: string | null): boolean {
    if (!html) return true;
    const text = html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    return !text;
  }

  private extractError(e: unknown): string {
    if (e instanceof HttpErrorResponse) {
      if (e.error?.message) return e.error.message;
      if (e.error?.errors) return Object.values(e.error.errors as Record<string, string>).join(', ');
      return extractHttpErrorMessage(e);
    }
    return 'Something went wrong.';
  }

  private showSaveMessage(msg: string, isError: boolean): void {
    this.saveMessage.set(msg);
    this.saveMessageError.set(isError);
  }

  private clearSaveMessage(): void {
    this.saveMessage.set('');
    this.saveMessageError.set(false);
  }

  trackByPostId = (_: number, p: BlogPost) => p.id;
  trackByBlockIndex = (i: number) => i;
  trackByIndex = (i: number) => i;
}
