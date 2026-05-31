import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-blog-editor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, BlogRichTextEditorComponent],
  template: `
    <div class="editor-page">
      <div class="container">
        <div class="header card">
          <div>
            <h1>Blog Studio</h1>
            <p>Create, edit, publish, and update posts daily.</p>
          </div>
          <button class="btn btn-primary" (click)="newPost()">+ New Post</button>
        </div>

        <div class="layout">
          <section class="card list-panel">
            <h3>Your Posts</h3>
            <div class="post-row" *ngFor="let p of posts">
              <div>
                <div class="title">{{ p.title }}</div>
                <div class="meta">
                  {{ p.published ? 'Published' : 'Draft' }}
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
          </section>

          <section class="card editor-panel">
            <h3>{{ editingId ? 'Edit Post' : 'Create Post' }}</h3>

            <div class="form-group"><label>Title</label><input [(ngModel)]="draft.title" /></div>
            <div class="form-group"><label>Excerpt</label><textarea rows="2" [(ngModel)]="draft.excerpt"></textarea></div>

            <div class="seo-section">
              <h4>SEO</h4>
              <div class="form-group">
                <label>Meta title</label>
                <input [(ngModel)]="draft.metaTitle" placeholder="Shown in browser tab and search results" maxlength="255" />
              </div>
              <div class="form-group">
                <label>Meta description</label>
                <textarea rows="2" [(ngModel)]="draft.metaDescription" placeholder="Short summary for search engines" maxlength="500"></textarea>
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
                <input [(ngModel)]="draft.tags" placeholder="Comma-separated, e.g. investment, nri, tips" />
                <small>Used for filter chips on the blog page.</small>
              </div>
            </div>

            <div class="form-group">
              <label>Cover Image URL</label>
              <div class="row">
                <input [(ngModel)]="draft.coverImageUrl" />
                <input type="file" accept="image/*" (change)="uploadCover($event)" />
              </div>
              <img class="cover-preview" *ngIf="draft.coverImageUrl" [src]="imgUrl(draft.coverImageUrl)" alt="cover" />
            </div>

            <h4>Content Blocks <span class="hint">Drag blocks to reorder</span></h4>
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
                <input type="file" [accept]="b.blockType === 'IMAGE' ? 'image/*' : 'video/*'" (change)="uploadBlockMedia($event, b)" />
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
              <button class="btn btn-primary" (click)="save()">Save Post</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .editor-page { padding: 1.5rem 0 2.5rem; }
    .header { padding: 1.2rem; margin-bottom: 1rem; display: flex; justify-content: space-between; gap: 1rem; align-items: center; }
    .header h1 { margin: 0 0 0.25rem; }
    .header p { margin: 0; color: var(--text-muted); }
    .layout { display: grid; gap: 1rem; grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.8fr); }
    .list-panel, .editor-panel { padding: 1rem; }
    .list-panel h3, .editor-panel h3 { margin: 0 0 0.8rem; }
    .post-row { display: flex; justify-content: space-between; gap: 0.8rem; align-items: center; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.6rem; }
    .title { font-weight: 700; }
    .meta { color: var(--text-muted); font-size: 0.82rem; }
    .actions { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: flex-end; }
    .form-group { margin-bottom: 0.7rem; }
    .form-group label { display: block; margin-bottom: 0.25rem; font-weight: 600; }
    .form-group small { display: block; margin-top: 0.25rem; color: var(--text-muted); font-size: 0.78rem; }
    input, textarea, select { width: 100%; padding: 0.58rem 0.65rem; border: 1px solid var(--border); border-radius: var(--radius-sm); box-sizing: border-box; }
    .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.7rem; }
    .row > input[type="file"] { width: auto; }
    .cover-preview { width: 100%; max-width: 340px; aspect-ratio: 16/9; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border); }
    .seo-section, .taxonomy-section { margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px dashed var(--border-light); }
    .seo-section h4, .taxonomy-section h4 { margin: 0 0 0.6rem; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); }
    .block { padding: 0.7rem 0.7rem 0.7rem 2rem; margin-bottom: 0.6rem; position: relative; cursor: grab; transition: box-shadow 0.15s, opacity 0.15s; }
    .block.dragging { opacity: 0.55; box-shadow: var(--shadow-lg); }
    .block-handle { position: absolute; left: 0.45rem; top: 0.65rem; color: var(--text-muted); font-weight: 700; user-select: none; }
    .hint { font-size: 0.78rem; font-weight: 500; color: var(--text-muted); text-transform: none; letter-spacing: 0; }
    .actions-end { justify-content: flex-end; margin-top: 0.6rem; }
    .publish-check { display: flex; gap: 0.4rem; align-items: center; margin-right: auto; }
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

  constructor(private api: ApiService, private toast: ToastrService, private config: ConfigService) {}

  ngOnInit(): void { this.loadPosts(); }

  loadPosts(): void {
    this.api.get<PageResponse<BlogPost>>('/blogs/editor/mine', { page: 0, size: 100 }).subscribe({
      next: (res) => { this.posts = res.content || []; },
    });
  }

  imgUrl(url?: string | null): string {
    if (!url) return 'https://placehold.co/1200x675?text=Blog';
    return resolvePropertyImageUrl(url, this.config.apiUrl);
  }

  emptyDraft(): BlogPostCreateUpdateRequest {
    return {
      title: '',
      excerpt: '',
      coverImageUrl: '',
      metaTitle: '',
      metaDescription: '',
      category: '',
      tags: '',
      published: false,
      blocks: [{ blockType: 'TEXT', content: '', displayOrder: 0 }],
    };
  }

  newPost(): void {
    this.editingId = null;
    this.draft = this.emptyDraft();
  }

  editPost(p: BlogPost): void {
    this.editingId = p.id;
    this.draft = {
      title: p.title,
      excerpt: p.excerpt || '',
      coverImageUrl: p.coverImageUrl || '',
      metaTitle: p.metaTitle || '',
      metaDescription: p.metaDescription || '',
      category: p.category || '',
      tags: p.tags || '',
      published: p.published,
      blocks: (p.blocks || []).map((b, i) => ({ ...b, displayOrder: i })),
    };
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
    const t = this.draft.blocks[i];
    this.draft.blocks[i] = this.draft.blocks[j];
    this.draft.blocks[j] = t;
    this.normalizeOrders();
  }

  onDragStart(index: number): void {
    this.dragIndex = index;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(index: number): void {
    if (this.dragIndex === null || this.dragIndex === index) return;
    const moved = this.draft.blocks.splice(this.dragIndex, 1)[0];
    this.draft.blocks.splice(index, 0, moved);
    this.dragIndex = null;
    this.normalizeOrders();
  }

  save(): void {
    if (!this.draft.title.trim()) { this.toast.warning('Title is required'); return; }
    if (!this.draft.blocks.length) { this.toast.warning('At least one block is required'); return; }
    this.normalizeOrders();
    const req = { ...this.draft, blocks: this.draft.blocks.map(b => ({ ...b })) };
    const obs = this.editingId
      ? this.api.put<BlogPost>(`/blogs/editor/${this.editingId}`, req)
      : this.api.post<BlogPost>('/blogs/editor', req);
    obs.subscribe({
      next: () => {
        this.toast.success('Post saved');
        this.loadPosts();
        if (!this.editingId) this.newPost();
      },
      error: (e) => this.toast.error(e.error?.message || 'Failed to save post'),
    });
  }

  togglePublish(p: BlogPost): void {
    this.api.put<BlogPost>(`/blogs/editor/${p.id}/publish?published=${!p.published}`, {}).subscribe({
      next: () => { this.toast.success(!p.published ? 'Post published' : 'Post moved to draft'); this.loadPosts(); },
      error: (e) => this.toast.error(e.error?.message || 'Failed'),
    });
  }

  deletePost(p: BlogPost): void {
    if (!confirm(`Delete "${p.title}"?`)) return;
    this.api.delete(`/blogs/editor/${p.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.loadPosts(); if (this.editingId === p.id) this.newPost(); },
      error: (e) => this.toast.error(e.error?.message || 'Failed'),
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
}
