import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpContext, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
import {
  BLOG_CATEGORY_OPTIONS,
  BlogContentBlock,
  BlogPost,
  BlogPostCreateUpdateRequest,
} from '../../core/models/blog.model';
import { PageResponse } from '../../core/models/property.model';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from '../../core/services/config.service';
import { resolvePropertyImageUrl } from '../../core/utils/image-url.util';
import { BlogRichTextEditorComponent } from '../../shared/blog-rich-text-editor/blog-rich-text-editor.component';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';
import { SKIP_GLOBAL_ERROR_TOAST } from '../../core/http-context.tokens';
import { extractHttpErrorMessage } from '../../core/utils/http-error-message.util';

@Component({
  selector: 'app-blog-editor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, BlogRichTextEditorComponent, SkeletonLoaderComponent],
  template: `
    <div class="editor-page">
      <div class="container">
        <div class="header card">
          <div>
            <span class="eyebrow">Content Studio</span>
            <h1>Blog Studio</h1>
            <p>Create, edit, and publish property insights for your audience.</p>
          </div>
          <button class="btn btn-primary" (click)="newPost()">+ New Post</button>
        </div>

        @if (saveMessage()) {
          <div class="save-banner" [class.save-banner-error]="saveMessageError()">
            {{ saveMessage() }}
          </div>
        }

        <div class="layout">
          <section class="card list-panel">
            <div class="panel-head">
              <h3>Your Posts</h3>
              <span class="count-badge" *ngIf="!listLoading">{{ posts.length }}</span>
            </div>

            <div class="list-loading" *ngIf="listLoading">
              <app-skeleton-loader height="64px" *ngFor="let i of [1,2,3,4]"></app-skeleton-loader>
            </div>

            <div class="list-error" *ngIf="!listLoading && listError">{{ listError }}</div>

            <div class="post-row" *ngFor="let p of posts" [class.active]="editingId === p.id">
              <div class="post-info">
                <div class="title">{{ p.title }}</div>
                <div class="meta">
                  <span class="status-pill" [class.published]="p.published">{{ p.published ? 'Published' : 'Draft' }}</span>
                  <span *ngIf="p.category"> · {{ p.category }}</span>
                  · {{ p.updatedAt | date:'short' }}
                </div>
              </div>
              <div class="actions">
                <button class="btn btn-outline btn-sm" (click)="editPost(p)">Edit</button>
                <button class="btn btn-outline btn-sm" (click)="togglePublish(p)">{{ p.published ? 'Unpublish' : 'Publish' }}</button>
                <button class="btn btn-outline btn-sm btn-danger" (click)="deletePost(p)">Delete</button>
              </div>
            </div>

            <div class="list-empty" *ngIf="!listLoading && !posts.length && !listError">
              No posts yet. Click <strong>+ New Post</strong> to start writing.
            </div>
          </section>

          <section class="card editor-panel">
            <h3>{{ editingId ? 'Edit Post' : 'Create Post' }}</h3>

            <div class="form-group"><label>Title</label><input [(ngModel)]="draft.title" placeholder="Catchy headline…" /></div>
            <div class="form-group"><label>Excerpt</label><textarea rows="2" [(ngModel)]="draft.excerpt" placeholder="Short summary for the blog listing…"></textarea></div>

            <div class="seo-section">
              <h4>SEO</h4>
              <div class="form-group">
                <label>Meta title</label>
                <input [(ngModel)]="draft.metaTitle" placeholder="Browser tab / search title" maxlength="255" />
              </div>
              <div class="form-group">
                <label>Meta description</label>
                <textarea rows="2" [(ngModel)]="draft.metaDescription" placeholder="Search engine summary" maxlength="500"></textarea>
              </div>
            </div>

            <div class="taxonomy-section">
              <h4>Category & Tags</h4>
              <div class="form-group">
                <label>Category</label>
                <input [(ngModel)]="draft.category" list="blog-categories" placeholder="e.g. Market Updates" />
                <datalist id="blog-categories">
                  <option *ngFor="let c of categoryOptions" [value]="c"></option>
                </datalist>
              </div>
              <div class="form-group">
                <label>Tags</label>
                <input [(ngModel)]="draft.tags" placeholder="investment, nri, tips" />
                <small>Comma-separated tags for filter chips.</small>
              </div>
            </div>

            <div class="form-group">
              <label>Cover Image</label>
              <div class="row">
                <input [(ngModel)]="draft.coverImageUrl" placeholder="Image URL or upload below" />
                <label class="btn btn-outline btn-sm upload-label">
                  Upload
                  <input type="file" accept="image/*" (change)="uploadCover($event)" hidden />
                </label>
              </div>
              <img class="cover-preview" *ngIf="draft.coverImageUrl" [src]="imgUrl(draft.coverImageUrl)" alt="cover" />
            </div>

            <h4 class="blocks-title">Content Blocks <span class="hint">Drag to reorder</span></h4>
            <div
              class="block card"
              *ngFor="let b of draft.blocks; let i = index"
              draggable="true"
              (dragstart)="onDragStart(i)"
              (dragover)="onDragOver($event)"
              (drop)="onDrop(i)"
              [class.dragging]="dragIndex === i"
            >
              <div class="block-handle" title="Drag to reorder">⋮⋮</div>
              <div class="row">
                <select [(ngModel)]="b.blockType">
                  <option value="TEXT">Text</option>
                  <option value="IMAGE">Image</option>
                  <option value="VIDEO">Video</option>
                  <option value="LINK">Link</option>
                </select>
                <button class="btn btn-outline btn-sm" (click)="move(i, -1)" [disabled]="i===0">↑</button>
                <button class="btn btn-outline btn-sm" (click)="move(i, 1)" [disabled]="i===draft.blocks.length-1">↓</button>
                <button class="btn btn-outline btn-sm btn-danger" (click)="removeBlock(i)">Remove</button>
              </div>

              <app-blog-rich-text-editor
                *ngIf="b.blockType === 'TEXT'"
                [(ngModel)]="b.content"
                [ngModelOptions]="{standalone: true}"
              ></app-blog-rich-text-editor>

              <div *ngIf="b.blockType === 'IMAGE' || b.blockType === 'VIDEO'" class="form-group">
                <input [(ngModel)]="b.mediaUrl" placeholder="Media URL" />
                <label class="btn btn-outline btn-sm upload-label">
                  Upload
                  <input type="file" [accept]="b.blockType === 'IMAGE' ? 'image/*' : 'video/*'" (change)="uploadBlockMedia($event, b)" hidden />
                </label>
                <input [(ngModel)]="b.caption" placeholder="Caption (optional)" />
              </div>
              <div *ngIf="b.blockType === 'LINK'" class="form-group">
                <input [(ngModel)]="b.content" placeholder="Link text" />
                <input [(ngModel)]="b.linkUrl" placeholder="https://..." />
              </div>
            </div>

            <div class="row">
              <button class="btn btn-outline" (click)="addBlock('TEXT')">+ Text</button>
              <button class="btn btn-outline" (click)="addBlock('IMAGE')">+ Image</button>
              <button class="btn btn-outline" (click)="addBlock('VIDEO')">+ Video</button>
              <button class="btn btn-outline" (click)="addBlock('LINK')">+ Link</button>
            </div>

            <div class="row actions-end">
              <label class="publish-check"><input type="checkbox" [(ngModel)]="draft.published" /> Publish now</label>
              <button class="btn btn-primary btn-lg" (click)="save()" [disabled]="saving">
                {{ saving ? 'Saving…' : (editingId ? 'Save changes' : 'Save post') }}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .editor-page { padding: 1.5rem 0 3rem; background: var(--bg); min-height: calc(100vh - 80px); }
    .header {
      padding: 1.5rem 1.75rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      border: 1px solid var(--border);
      background: linear-gradient(135deg, #fff 0%, #f0f9ff 100%);
    }
    .eyebrow { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--primary); }
    .header h1 { margin: 0.25rem 0; font-family: var(--font-display); font-size: 1.75rem; }
    .header p { margin: 0; color: var(--text-muted); }
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
    .layout { display: grid; gap: 1.25rem; grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.9fr); }
    .list-panel, .editor-panel { padding: 1.25rem; border: 1px solid var(--border); }
    .panel-head { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }
    .panel-head h3, .editor-panel h3 { margin: 0; font-family: var(--font-display); }
    .count-badge { background: var(--primary-gradient); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.55rem; border-radius: 999px; }
    .list-loading { display: grid; gap: 0.5rem; }
    .list-error, .list-empty { padding: 1.5rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.9375rem; }
    .post-row {
      display: flex; justify-content: space-between; gap: 0.75rem; align-items: center;
      border: 1px solid var(--border); border-radius: var(--radius); padding: 0.85rem;
      margin-bottom: 0.6rem; transition: var(--transition);
    }
    .post-row:hover, .post-row.active { border-color: rgba(14,165,233,0.35); background: rgba(14,165,233,0.04); }
    .title { font-weight: 700; font-size: 0.9375rem; line-height: 1.3; }
    .meta { color: var(--text-muted); font-size: 0.78rem; margin-top: 0.2rem; }
    .status-pill { font-weight: 700; color: var(--warning-text); }
    .status-pill.published { color: var(--success-text); }
    .actions { display: flex; gap: 0.35rem; flex-wrap: wrap; justify-content: flex-end; }
    .form-group { margin-bottom: 0.85rem; }
    .form-group label { display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.875rem; }
    .form-group small { display: block; margin-top: 0.25rem; color: var(--text-muted); font-size: 0.78rem; }
    input, textarea, select {
      width: 100%; padding: 0.62rem 0.75rem;
      border: 1px solid var(--border); border-radius: var(--radius-sm);
      box-sizing: border-box; font-family: inherit; font-size: 0.9375rem;
    }
    input:focus, textarea:focus, select:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(14,165,233,0.12); }
    .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.75rem; }
    .upload-label { cursor: pointer; margin: 0; white-space: nowrap; }
    .cover-preview { width: 100%; max-width: 360px; aspect-ratio: 16/9; object-fit: cover; border-radius: var(--radius); border: 1px solid var(--border); margin-top: 0.5rem; }
    .seo-section, .taxonomy-section { margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px dashed var(--border-light); }
    .seo-section h4, .taxonomy-section h4, .blocks-title {
      margin: 0 0 0.75rem; font-size: 0.8rem; text-transform: uppercase;
      letter-spacing: 0.06em; color: var(--text-muted); font-weight: 700;
    }
    .block { padding: 0.85rem 0.85rem 0.85rem 2rem; margin-bottom: 0.65rem; position: relative; cursor: grab; border: 1px solid var(--border); }
    .block.dragging { opacity: 0.55; box-shadow: var(--shadow-lg); }
    .block-handle { position: absolute; left: 0.5rem; top: 0.75rem; color: var(--text-muted); font-weight: 700; user-select: none; }
    .hint { font-size: 0.75rem; font-weight: 500; color: var(--text-muted); text-transform: none; letter-spacing: 0; }
    .actions-end { justify-content: flex-end; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light); }
    .publish-check { display: flex; gap: 0.4rem; align-items: center; margin-right: auto; font-size: 0.9375rem; }
    .btn-danger { color: #dc2626; border-color: #dc2626; }
    @media (max-width: 1080px) { .layout { grid-template-columns: 1fr; } }
  `],
})
export class BlogEditorDashboardComponent implements OnInit {
  posts: BlogPost[] = [];
  editingId: number | null = null;
  dragIndex: number | null = null;
  categoryOptions = BLOG_CATEGORY_OPTIONS;
  draft: BlogPostCreateUpdateRequest = this.emptyDraft();
  saving = false;
  listLoading = true;
  listError = '';
  saveMessage = signal('');
  saveMessageError = signal(false);

  private readonly skipToast = new HttpContext().set(SKIP_GLOBAL_ERROR_TOAST, true);

  constructor(private api: ApiService, private toast: ToastrService, private config: ConfigService) {}

  ngOnInit(): void { this.loadPosts(); }

  loadPosts(): void {
    this.listLoading = true;
    this.listError = '';
    this.api.get<PageResponse<BlogPost>>('/blogs/editor/mine', { page: 0, size: 100 }).subscribe({
      next: (res) => {
        this.posts = res.content || [];
        this.listLoading = false;
      },
      error: () => {
        this.listLoading = false;
        this.listError = 'Could not load your posts.';
      },
    });
  }

  imgUrl(url?: string | null): string {
    if (!url) return 'https://placehold.co/1200x675?text=Blog';
    return resolvePropertyImageUrl(url, this.config.apiUrl);
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
    this.draft = this.emptyDraft();
    this.clearSaveMessage();
  }

  editPost(p: BlogPost): void {
    this.editingId = p.id;
    this.draft = {
      title: p.title, excerpt: p.excerpt || '', coverImageUrl: p.coverImageUrl || '',
      metaTitle: p.metaTitle || '', metaDescription: p.metaDescription || '',
      category: p.category || '', tags: p.tags || '', published: p.published,
      blocks: (p.blocks || []).map((b, i) => ({ ...b, displayOrder: i })),
    };
    this.clearSaveMessage();
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
        this.showSaveMessage(`${b.blockType} block needs an uploaded file or URL.`, true); return;
      }
      if (b.blockType === 'LINK' && (!b.content?.trim() || !b.linkUrl?.trim())) {
        this.showSaveMessage('Link blocks need text and URL.', true); return;
      }
    }
    this.saving = true;
    this.clearSaveMessage();
    this.normalizeOrders();
    const req = { ...this.draft, blocks: this.draft.blocks.map(b => ({ ...b })) };
    const obs = this.editingId
      ? this.api.put<BlogPost>(`/blogs/editor/${this.editingId}`, req, this.skipToast)
      : this.api.post<BlogPost>('/blogs/editor', req, this.skipToast);
    obs.subscribe({
      next: (saved) => {
        this.saving = false;
        this.editingId = saved.id;
        const msg = saved.published ? 'Post saved and published successfully!' : 'Post saved as draft.';
        this.showSaveMessage(msg, false);
        this.toast.success(msg);
        this.loadPosts();
      },
      error: (e: unknown) => {
        this.saving = false;
        const msg = this.extractError(e);
        this.showSaveMessage(msg, true);
        this.toast.error(msg);
      },
    });
  }

  togglePublish(p: BlogPost): void {
    this.api.put<BlogPost>(`/blogs/editor/${p.id}/publish?published=${!p.published}`, {}, this.skipToast).subscribe({
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
    this.api.delete(`/blogs/editor/${p.id}`).subscribe({
      next: () => {
        this.toast.success('Post deleted');
        this.loadPosts();
        if (this.editingId === p.id) this.newPost();
      },
      error: (e: unknown) => this.toast.error(this.extractError(e)),
    });
  }

  uploadCover(ev: Event): void {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.api.uploadFile('/upload', file).subscribe({
      next: (res) => { this.draft.coverImageUrl = res.url; this.toast.success('Cover uploaded'); },
      error: () => this.toast.error('Upload failed'),
    });
  }

  uploadBlockMedia(ev: Event, block: BlogContentBlock): void {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.api.uploadFile('/upload', file).subscribe({
      next: (res) => { block.mediaUrl = res.url; this.toast.success('Media uploaded'); },
      error: () => this.toast.error('Upload failed'),
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
}
