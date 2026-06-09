import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { ConfigService } from '../../core/services/config.service';
import { CarouselSlide } from '../../core/models/carousel.model';
import { Property, PageResponse } from '../../core/models/property.model';
import { ToastrService } from 'ngx-toastr';
import { IndianPricePipe } from '../../shared/pipes/indian-price.pipe';
import { resolvePropertyImageUrl } from '../../core/utils/image-url.util';

interface SiteVisitRow {
  id: number;
  userId: number;
  userName: string;
  propertyId: number;
  propertyTitle: string;
  agentId?: number;
  agentName?: string;
  scheduledAt: string;
  userNotes?: string;
  status: string;
  createdAt: string;
}

interface AgentRow {
  id: number;
  email: string;
  fullName: string;
  role: string;
}

interface UserRow {
  id: number;
  email: string;
  fullName: string;
  mobile: string;
  role: string;
  active?: boolean;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IndianPricePipe],
  template: `
    <div class="admin-page">
      <div class="container">
        <div class="admin-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage properties, approvals, and site analytics</p>
          </div>
        </div>

        <div class="metrics-grid" *ngIf="metrics">
          <div class="metric-card card">
            <div class="metric-icon">🏠</div>
            <div class="metric-content">
              <div class="metric-value">{{ metrics.totalProperties || 0 }}</div>
              <div class="metric-label">Total Properties</div>
            </div>
          </div>
          <div class="metric-card card">
            <div class="metric-icon">👁</div>
            <div class="metric-content">
              <div class="metric-value">{{ metrics.totalViews ?? 0 }}</div>
              <div class="metric-label">Total Views</div>
            </div>
          </div>
          <div class="metric-card card">
            <div class="metric-icon">⏳</div>
            <div class="metric-content">
              <div class="metric-value">{{ metrics.pendingProperties || 0 }}</div>
              <div class="metric-label">Pending Approval</div>
            </div>
          </div>
          <div class="metric-card card">
            <div class="metric-icon">📅</div>
            <div class="metric-content">
              <div class="metric-value">{{ metrics.pendingSiteVisits || 0 }}</div>
              <div class="metric-label">Pending Visits</div>
            </div>
          </div>
          <div class="metric-card card">
            <div class="metric-icon">💰</div>
            <div class="metric-content">
              <div class="metric-value">₹ {{ (metrics.revenueLast30Days || 0) | number:'1.0-0' }}</div>
              <div class="metric-label">Revenue (30d)</div>
            </div>
          </div>
        </div>

        <div class="pending-section card carousel-section">
          <div class="section-header">
            <h2>Homepage Carousel</h2>
            <span class="badge badge-info">{{ carouselSlides.length }} Slides</span>
          </div>
          <p class="carousel-hint">Paste a public image URL or Google Drive image link. For Google Drive, set sharing to &quot;Anyone with the link&quot;. Images load directly from the URL — no file uploads. Any image size will auto-fit the carousel.</p>

          <div class="carousel-add-form">
            <div class="carousel-form-row">
              <div class="form-group">
                <label>Image URL *</label>
                <input type="text" class="form-input" [(ngModel)]="newCarousel.imageUrl" placeholder="https://… or Google Drive link" />
              </div>
              <div class="form-group">
                <label>Link URL (optional)</label>
                <input type="text" class="form-input" [(ngModel)]="newCarousel.linkUrl" placeholder="https://…" />
              </div>
              <div class="form-group">
                <label>Alt text</label>
                <input type="text" class="form-input" [(ngModel)]="newCarousel.altText" placeholder="Banner description" />
              </div>
              <button type="button" class="btn btn-primary" (click)="addCarouselSlide()" [disabled]="savingCarousel">
                {{ savingCarousel ? 'Adding…' : 'Add slide' }}
              </button>
            </div>
            <div class="carousel-live-preview" *ngIf="newCarouselPreviewUrl()">
              <span class="preview-label">Preview</span>
              <img [src]="newCarouselPreviewUrl()" alt="New slide preview" class="carousel-preview-img" (error)="onCarouselImageError($event)" />
            </div>
          </div>

          <div class="loading-state" *ngIf="loadingCarousel">
            <p>Loading carousel slides…</p>
          </div>

          <div class="carousel-list" *ngIf="!loadingCarousel && carouselSlides.length">
            <div class="carousel-item" *ngFor="let slide of carouselSlides; let i = index">
              <img [src]="carouselImageUrl(slide.imageUrl)" [alt]="slide.altText || 'Carousel slide'" class="carousel-thumb" (error)="onCarouselImageError($event)" />
              <div class="carousel-item-fields">
                <div class="form-group">
                  <label>Image URL</label>
                  <input type="text" class="form-input sm" [(ngModel)]="slide.imageUrl" />
                </div>
                <div class="form-group">
                  <label>Link URL</label>
                  <input type="text" class="form-input sm" [(ngModel)]="slide.linkUrl" />
                </div>
                <div class="form-group">
                  <label>Alt text</label>
                  <input type="text" class="form-input sm" [(ngModel)]="slide.altText" />
                </div>
                <label class="active-toggle">
                  <input type="checkbox" [(ngModel)]="slide.active" (change)="saveCarouselSlide(slide)" />
                  Active on homepage
                </label>
              </div>
              <div class="carousel-item-actions">
                <button type="button" class="btn btn-outline btn-sm" (click)="moveCarouselSlide(i, -1)" [disabled]="i === 0 || reorderingCarousel[slide.id]">↑</button>
                <button type="button" class="btn btn-outline btn-sm" (click)="moveCarouselSlide(i, 1)" [disabled]="i === carouselSlides.length - 1 || reorderingCarousel[slide.id]">↓</button>
                <button type="button" class="btn btn-primary btn-sm" (click)="saveCarouselSlide(slide)" [disabled]="savingCarouselId[slide.id]">
                  {{ savingCarouselId[slide.id] ? 'Saving…' : 'Save' }}
                </button>
                <button type="button" class="btn btn-outline btn-sm btn-danger" (click)="deleteCarouselSlide(slide)" [disabled]="deletingCarousel[slide.id]">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div class="empty-state" *ngIf="!loadingCarousel && !carouselSlides.length">
            <div class="empty-icon">🖼</div>
            <p>No carousel slides yet. Add an image URL above or the homepage will show default banners.</p>
          </div>
        </div>

        <div class="pending-section card">
          <div class="section-header">
            <h2>Pending Property Approvals</h2>
            <span class="badge badge-warning">{{ pending.length }} Pending</span>
          </div>
          <div class="pending-list" *ngIf="pending.length && !loadingPending">
            <div class="pending-item" *ngFor="let p of pending">
              <div class="pending-info">
                <div class="pending-title">{{ p.title }}</div>
                <div class="pending-meta">
                  <span>Owner: {{ p.ownerName }}</span>
                  <span>Price: {{ p.price | indianPrice }}</span>
                  <span>Type: {{ p.propertyType }}</span>
                </div>
              </div>
              <div class="pending-actions">
                <button class="btn btn-primary btn-sm" (click)="approve(p.id)">
                  ✓ Approve
                </button>
                <button class="btn btn-outline btn-sm" (click)="reject(p.id)">
                  ✗ Reject
                </button>
              </div>
            </div>
          </div>
          <div class="empty-state" *ngIf="!pending.length && !loadingPending">
            <div class="empty-icon">✅</div>
            <p>All properties have been reviewed. No pending approvals.</p>
          </div>
          <div class="loading-state" *ngIf="loadingPending">
            <p>Loading pending properties...</p>
          </div>
        </div>

        <div class="pending-section card all-properties-section">
          <div class="section-header">
            <h2>All Properties</h2>
            <div class="header-actions">
              <select class="form-select" [(ngModel)]="filterAllProperties" (ngModelChange)="loadAllProperties()">
                <option value="all">All</option>
                <option value="featured">Featured only</option>
                <option value="new">New (last 7 days)</option>
              </select>
              <a routerLink="/property/new" class="btn btn-primary">+ Add Property</a>
            </div>
          </div>
          <div class="visits-table-wrap" *ngIf="allPropertiesResponse?.content?.length && !loadingAllProperties">
            <table class="visits-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Featured</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let p of (allPropertiesResponse?.content ?? [])" [class.new-row]="isNewProperty(p.createdAt)">
                  <td>
                    <a [routerLink]="['/property', p.id]" target="_blank">{{ p.title }}</a>
                    <span class="badge-new" *ngIf="isNewProperty(p.createdAt)">New</span>
                  </td>
                  <td>{{ p.ownerName }}</td>
                  <td><span class="status-badge" [class]="'status-' + (p.status || '').toLowerCase().replace('_','')">{{ p.status }}</span></td>
                  <td>
                    <button type="button" class="btn btn-outline btn-sm" (click)="toggleFeatured(p)" [disabled]="updatingFeatured[p.id]">
                      {{ p.featured ? '★ Featured' : '☆ Mark featured' }}
                    </button>
                  </td>
                  <td>{{ p.createdAt | date:'short' }}</td>
                  <td>
                    <button type="button" class="btn btn-outline btn-sm" (click)="openViewers(p.id)">Views</button>
                    <button type="button" class="btn btn-outline btn-sm" (click)="openLikers(p.id)">Likes</button>
                    <a [routerLink]="['/property', p.id, 'edit']" class="btn btn-outline btn-sm">Edit</a>
                    <button type="button" class="btn btn-outline btn-sm btn-danger" (click)="deleteProperty(p.id)" [disabled]="deleting[p.id]">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="empty-state" *ngIf="allPropertiesResponse && (!allPropertiesResponse.content.length) && !loadingAllProperties">
            <p>No properties match the filter.</p>
          </div>
          <div class="loading-state" *ngIf="loadingAllProperties">
            <p>Loading properties...</p>
          </div>
          <div class="pagination-row" *ngIf="allPropertiesResponse && allPropertiesResponse.totalPages > 1 && !loadingAllProperties">
            <button type="button" class="btn btn-outline btn-sm" [disabled]="pageAllProperties === 0" (click)="prevPropertiesPage()">← Previous</button>
            <span>Page {{ pageAllProperties + 1 }} of {{ allPropertiesResponse.totalPages }}</span>
            <button type="button" class="btn btn-outline btn-sm" [disabled]="pageAllProperties >= allPropertiesResponse.totalPages - 1" (click)="nextPropertiesPage()">Next →</button>
          </div>
        </div>

        <div class="modal-overlay" *ngIf="usersModalTitle" (click)="closeUsersModal()">
          <div class="modal-content" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h3>{{ usersModalTitle }}</h3>
              <button type="button" class="modal-close" (click)="closeUsersModal()">×</button>
            </div>
            <div class="modal-body">
              <p *ngIf="loadingModalUsers" class="modal-status">Loading...</p>
              <p *ngIf="modalError && !loadingModalUsers" class="modal-status modal-error">{{ modalError }}</p>
              <div class="users-list" *ngIf="!loadingModalUsers && !modalError && modalUsers.length">
                <div class="user-row" *ngFor="let u of modalUsers">
                  <div class="user-name">{{ u.fullName }}</div>
                  <div class="user-email">{{ u.email }}</div>
                  <div class="user-mobile" *ngIf="u.mobile">{{ u.mobile }}</div>
                </div>
              </div>
              <p *ngIf="!loadingModalUsers && !modalError && !modalUsers.length" class="modal-status modal-empty">{{ modalEmptyMessage }}</p>
            </div>
          </div>
        </div>

        <div class="pending-section card user-management-section">
          <div class="section-header">
            <h2>User Management</h2>
            <span class="badge badge-info">{{ allUsers.length }} Users</span>
          </div>
          <div class="visits-table-wrap" *ngIf="allUsers.length && !loadingUsers">
            <table class="visits-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let u of allUsers">
                  <td>{{ u.fullName }}</td>
                  <td>{{ u.email }}</td>
                  <td>
                    <div class="role-cell">
                      <span class="status-badge" [class.status-assigned]="u.role === 'AGENT'" [class.status-completed]="u.role === 'ADMIN'">
                        {{ u.role }}
                      </span>
                      <div class="role-actions">
                        <select class="form-select sm" [ngModel]="u.role"
                                (ngModelChange)="changeUserRole(u, $event)"
                                [disabled]="changingUserRole[u.id] || u.id === currentUserId">
                          <option value="USER">USER</option>
                          <option value="BLOG">BLOG</option>
                          <option value="ADMIN">ADMIN</option>
                          <option value="AGENT">AGENT</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="status-badge" [class.status-completed]="u.active" [class.status-rejected]="u.active === false">
                      {{ u.active ? 'ACTIVE' : 'SUSPENDED' }}
                    </span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-outline btn-sm"
                            (click)="toggleUserStatus(u)"
                            [disabled]="updatingUserStatus[u.id] || deletingUser[u.id] || u.id === currentUserId">
                      {{ u.active ? 'Suspend' : 'Activate' }}
                    </button>
                    <button type="button" class="btn btn-outline btn-sm btn-danger"
                            (click)="deleteUser(u)"
                            [disabled]="deletingUser[u.id] || u.id === currentUserId">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="loading-state" *ngIf="loadingUsers">
            <p>Loading users...</p>
          </div>
        </div>

        <div class="pending-section card site-visits-section">
          <div class="section-header">
            <h2>Pending Site Visit Requests</h2>
            <span class="badge badge-warning">{{ pendingVisits.length }} Pending</span>
          </div>
          <div class="pending-list" *ngIf="pendingVisits.length && !loadingVisits">
            <div class="pending-item visit-item" *ngFor="let v of pendingVisits">
              <div class="pending-info">
                <div class="pending-title">{{ v.propertyTitle }}</div>
                <div class="pending-meta">
                  <span>User: {{ v.userName }}</span>
                  <span>Scheduled: {{ v.scheduledAt | date:'short' }}</span>
                  <span *ngIf="v.userNotes">Notes: {{ v.userNotes }}</span>
                </div>
              </div>
              <div class="pending-actions assign-actions">
                <select class="form-select" [(ngModel)]="selectedAgentId[v.id]" [disabled]="!agents.length">
                  <option [ngValue]="null">Select agent</option>
                  <option *ngFor="let a of agents" [ngValue]="a.id">{{ a.fullName }} ({{ a.role }})</option>
                </select>
                <button class="btn btn-primary btn-sm" (click)="assignAgent(v.id)" [disabled]="!selectedAgentId[v.id] || assigning[v.id]">
                  {{ assigning[v.id] ? 'Assigning...' : 'Assign Agent' }}
                </button>
              </div>
            </div>
          </div>
          <div class="empty-state" *ngIf="!pendingVisits.length && !loadingVisits">
            <div class="empty-icon">📅</div>
            <p>No pending site visit requests.</p>
          </div>
          <div class="loading-state" *ngIf="loadingVisits">
            <p>Loading pending site visits...</p>
          </div>
        </div>

        <div class="pending-section card all-visits-section">
          <div class="section-header">
            <h2>Manage All Site Visits</h2>
            <span class="badge badge-info" *ngIf="allVisitsResponse">Due today: {{ allVisitsResponse.dueTodayCount }}</span>
          </div>
          <div class="filters-row">
            <div class="filter-group">
              <label>From date</label>
              <input type="datetime-local" [(ngModel)]="filterFrom" class="form-input" />
            </div>
            <div class="filter-group">
              <label>To date</label>
              <input type="datetime-local" [(ngModel)]="filterTo" class="form-input" />
            </div>
            <div class="filter-group">
              <label>Assigned to</label>
              <select class="form-select" [(ngModel)]="filterAgentId">
                <option [ngValue]="null">All agents</option>
                <option *ngFor="let a of agents" [ngValue]="a.id">{{ a.fullName }} ({{ a.role }})</option>
              </select>
            </div>
            <button type="button" class="btn btn-primary" (click)="loadAllVisits()">Apply filters</button>
          </div>
          <div class="visits-table-wrap" *ngIf="allVisitsResponse?.content?.length && !loadingAllVisits">
            <table class="visits-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>User</th>
                  <th>Scheduled</th>
                  <th>Assigned to</th>
                  <th>Status</th>
                  <th>Reassign</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let v of (allVisitsResponse?.content ?? [])" [class.due-today]="isDueToday(v.scheduledAt)">
                  <td>{{ v.propertyTitle }}</td>
                  <td>{{ v.userName }}</td>
                  <td>{{ v.scheduledAt | date:'short' }}</td>
                  <td>{{ v.agentName || '—' }}</td>
                  <td><span class="status-badge" [class]="'status-' + (v.status || '').toLowerCase()">{{ v.status }}</span></td>
                  <td>
                    <select class="form-select sm" [(ngModel)]="reassignAgentId[v.id]" [disabled]="reassigning[v.id]">
                      <option [ngValue]="null">Select agent</option>
                      <option *ngFor="let a of agents" [ngValue]="a.id">{{ a.fullName }}</option>
                    </select>
                    <button type="button" class="btn btn-outline btn-sm" (click)="reassignVisit(v.id)" [disabled]="!reassignAgentId[v.id] || reassigning[v.id]" *ngIf="canReassign(v)">
                      {{ reassigning[v.id] ? '...' : 'Reassign' }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="empty-state" *ngIf="allVisitsResponse && (!allVisitsResponse.content.length) && !loadingAllVisits">
            <p>No site visits match the filters.</p>
          </div>
          <div class="loading-state" *ngIf="loadingAllVisits">
            <p>Loading all visits...</p>
          </div>
          <div class="pagination-row" *ngIf="allVisitsResponse && allVisitsResponse.totalPages > 1 && !loadingAllVisits">
            <button type="button" class="btn btn-outline btn-sm" [disabled]="pageAllVisits === 0" (click)="prevVisitsPage()">← Previous</button>
            <span>Page {{ pageAllVisits + 1 }} of {{ allVisitsResponse.totalPages }}</span>
            <button type="button" class="btn btn-outline btn-sm" [disabled]="pageAllVisits >= allVisitsResponse.totalPages - 1" (click)="nextVisitsPage()">Next →</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-page { padding: 2rem 0 4rem; }
    .admin-header {
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 3px solid var(--border-light);
      position: relative;
    }
    .admin-header::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 120px;
      height: 3px;
      background: var(--primary-gradient);
      border-radius: 2px;
    }
    .admin-header h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 0.75rem;
      letter-spacing: -0.5px;
    }
    .admin-header p {
      color: var(--text-muted);
      font-size: 1.1875rem;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    .metric-card {
      padding: 2rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      border: 2px solid var(--border);
      transition: var(--transition-slow);
      position: relative;
      overflow: hidden;
    }
    .metric-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--primary-gradient);
      transform: scaleY(0);
      transition: transform 0.3s;
    }
    .metric-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary-light);
    }
    .metric-card:hover::before {
      transform: scaleY(1);
    }
    .metric-icon {
      font-size: 3rem;
      filter: drop-shadow(0 4px 8px rgba(14, 165, 233, 0.2));
    }
    .metric-content {
      flex: 1;
    }
    .metric-value {
      font-size: 2.25rem;
      font-weight: 800;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.1;
    }
    .metric-label {
      font-size: 0.9375rem;
      color: var(--text-muted);
      margin-top: 0.375rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .pending-section {
      padding: 2.5rem;
      border: 2px solid var(--border);
    }
    .carousel-hint {
      margin: 0 0 1.25rem;
      color: var(--text-muted);
      font-size: 0.875rem;
      line-height: 1.5;
    }
    .carousel-add-form {
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-light);
    }
    .carousel-form-row {
      display: grid;
      grid-template-columns: 2fr 1.5fr 1fr auto;
      gap: 0.75rem;
      align-items: end;
    }
    .carousel-live-preview {
      margin-top: 1rem;
    }
    .preview-label {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .carousel-preview-img {
      width: 100%;
      max-height: 140px;
      object-fit: cover;
      border-radius: var(--radius-sm);
      border: 2px solid var(--border);
    }
    .carousel-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .carousel-item {
      display: grid;
      grid-template-columns: 140px 1fr auto;
      gap: 1rem;
      align-items: start;
      padding: 1rem;
      background: var(--bg);
      border: 2px solid var(--border);
      border-radius: var(--radius);
    }
    .carousel-thumb {
      width: 140px;
      height: 70px;
      object-fit: cover;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border);
    }
    .carousel-item-fields {
      display: grid;
      gap: 0.5rem;
    }
    .carousel-item-fields .form-group {
      margin: 0;
    }
    .carousel-item-fields label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
    }
    .active-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    .carousel-item-actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      min-width: 5.5rem;
    }
    @media (max-width: 900px) {
      .carousel-form-row {
        grid-template-columns: 1fr;
      }
      .carousel-item {
        grid-template-columns: 1fr;
      }
      .carousel-thumb {
        width: 100%;
        height: 120px;
      }
      .carousel-item-actions {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1.25rem;
      border-bottom: 3px solid var(--border-light);
      position: relative;
    }
    .section-header::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 80px;
      height: 3px;
      background: var(--primary-gradient);
      border-radius: 2px;
    }
    .section-header h2 {
      margin: 0;
      font-size: 1.625rem;
      font-weight: 800;
      color: var(--text);
    }
    .pending-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .pending-item {
      padding: 1.5rem;
      background: var(--bg);
      border-radius: var(--radius);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      border: 2px solid var(--border);
      transition: var(--transition);
    }
    .pending-item:hover {
      background: var(--surface);
      border-color: var(--primary-light);
      box-shadow: var(--shadow-md);
    }
    .pending-info {
      flex: 1;
    }
    .pending-title {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--text);
      margin-bottom: 0.5rem;
    }
    .pending-meta {
      display: flex;
      gap: 1.5rem;
      font-size: 0.875rem;
      color: var(--text-muted);
      flex-wrap: wrap;
    }
    .pending-meta span {
      font-weight: 500;
    }
    .pending-actions {
      display: flex;
      gap: 0.75rem;
    }
    .empty-state {
      text-align: center;
      padding: 3rem 2rem;
    }
    .empty-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    .empty-state p {
      color: var(--text-muted);
      font-size: 1.125rem;
    }
    .loading-state {
      text-align: center;
      padding: 2rem;
      color: var(--text-muted);
    }
    .site-visits-section {
      margin-top: 2rem;
    }
    .visit-item .assign-actions {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      flex-wrap: wrap;
    }
    .form-select {
      min-width: 180px;
      min-height: 2.5rem;
      padding: 0.5rem 0.75rem;
      border: 2px solid var(--border);
      border-radius: var(--radius-sm);
      font-size: 0.9375rem;
      box-sizing: border-box;
    }
    .all-visits-section { margin-top: 2rem; }
    .filters-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: flex-end;
      margin-bottom: 1.5rem;
    }
    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .filter-group label { font-size: 0.875rem; font-weight: 600; }
    .form-input {
      min-height: 2.5rem;
      padding: 0.5rem 0.75rem;
      border: 2px solid var(--border);
      border-radius: var(--radius-sm);
      font-size: 0.9375rem;
      box-sizing: border-box;
    }
    .visits-table-wrap { overflow-x: auto; margin-bottom: 1rem; }
    .visits-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9375rem;
    }
    .visits-table th, .visits-table td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border);
    }
    .visits-table th { font-weight: 700; color: var(--text-muted); }
    .visits-table tr.due-today { background: rgba(14, 165, 233, 0.08); }
    .status-badge {
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: capitalize;
    }
    /** Property rows use .replace('_','') once → e.g. PENDING_APPROVAL → pendingapproval */
    .status-pendingapproval,
    .status-pending_assignment { background: var(--status-pending-bg); color: var(--status-pending-text); }
    .status-approved { background: var(--success-bg); color: var(--success-text); }
    .status-assigned { background: var(--info-bg); color: var(--info-text); }
    .status-completed { background: var(--success-bg); color: var(--success-text); }
    .status-cancelled { background: var(--status-neutral-bg); color: var(--status-neutral-text); }
    .status-rejected { background: var(--danger-bg); color: var(--danger-text-strong); }
    .form-select.sm { min-width: 140px; }
    .role-cell {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .role-actions .form-select {
      min-width: 110px;
      min-height: 2.1rem;
      padding: 0.25rem 0.5rem;
    }
    .pagination-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    .badge-info { background: var(--info-bg); color: var(--info-text); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; }
    .all-properties-section { margin-top: 2rem; }
    .header-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
    .badge-new { background: var(--success-bg); color: var(--success-text); padding: 0.2rem 0.5rem; border-radius: 9999px; font-size: 0.7rem; font-weight: 600; margin-left: 0.5rem; }
    .new-row { background: rgba(16, 185, 129, 0.06); }
    .btn-danger { color: var(--danger, #dc2626); border-color: var(--danger, #dc2626); }
    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem; }
    .modal-content { background: var(--surface); border-radius: var(--radius-lg); max-width: 480px; width: 100%; max-height: 80vh; overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-2xl); }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); }
    .modal-header h3 { margin: 0; font-size: 1.25rem; }
    .modal-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted); }
    .modal-body { padding: 1rem 1.5rem; overflow-y: auto; }
    .users-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .user-row { padding: 0.75rem; background: var(--bg); border-radius: var(--radius-sm); border: 1px solid var(--border); }
    .user-name { font-weight: 600; margin-bottom: 0.25rem; }
    .user-email { font-size: 0.875rem; color: var(--text-muted); }
    .user-mobile { font-size: 0.875rem; color: var(--text-muted); }
    .modal-status { margin: 0; padding: 1rem 0; text-align: center; color: var(--text-muted); }
    .modal-status.modal-error { color: var(--danger); font-weight: 500; }
    .modal-status.modal-empty { color: var(--text-muted); }
    @media (max-width: 768px) {
      .admin-page { padding: 1rem 0 2rem; }
      .admin-header h1 { font-size: 1.75rem; }
      .metrics-grid { grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
      .pending-section { padding: 1.25rem; }
      .section-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
      .pending-item { flex-direction: column; align-items: flex-start; }
      .header-actions { flex-direction: column; align-items: flex-start; }
      .visits-table-wrap { font-size: 0.875rem; }
      .visits-table th, .visits-table td { padding: 0.5rem 0.5rem; }
    }
    @media (max-width: 480px) {
      .metrics-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class AdminComponent implements OnInit {
  metrics: { totalProperties?: number; totalViews?: number; pendingProperties?: number; pendingSiteVisits?: number; revenueLast30Days?: number } | null = null;
  pending: Property[] = [];
  pendingVisits: SiteVisitRow[] = [];
  agents: AgentRow[] = [];
  selectedAgentId: Record<number, number | null> = {};
  assigning: Record<number, boolean> = {};
  loadingPending = true;
  loadingVisits = true;
  allVisitsResponse: { content: SiteVisitRow[]; totalElements: number; totalPages: number; dueTodayCount: number } | null = null;
  filterFrom = '';
  filterTo = '';
  filterAgentId: number | null = null;
  loadingAllVisits = false;
  pageAllVisits = 0;
  reassignAgentId: Record<number, number | null> = {};
  reassigning: Record<number, boolean> = {};
  allPropertiesResponse: PageResponse<Property> | null = null;
  filterAllProperties: 'all' | 'featured' | 'new' = 'all';
  pageAllProperties = 0;
  loadingAllProperties = false;
  updatingFeatured: Record<number, boolean> = {};
  deleting: Record<number, boolean> = {};
  usersModalTitle = '';
  modalUsers: UserRow[] = [];
  loadingModalUsers = false;
  modalError = '';
  modalEmptyMessage = '';
  allUsers: UserRow[] = [];
  loadingUsers = false;
  updatingUserStatus: Record<number, boolean> = {};
  deletingUser: Record<number, boolean> = {};
  changingUserRole: Record<number, boolean> = {};
  currentUserId: number | null = null;
  carouselSlides: CarouselSlide[] = [];
  loadingCarousel = false;
  savingCarousel = false;
  savingCarouselId: Record<number, boolean> = {};
  deletingCarousel: Record<number, boolean> = {};
  reorderingCarousel: Record<number, boolean> = {};
  newCarousel = { imageUrl: '', linkUrl: '', altText: '' };

  constructor(
    private api: ApiService,
    private config: ConfigService,
    private toast: ToastrService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    const userRaw = localStorage.getItem('user');
    if (userRaw) {
      try {
        const parsed = JSON.parse(userRaw);
        this.currentUserId = parsed?.id ?? null;
      } catch {
        this.currentUserId = null;
      }
    }
    this.api.get<Record<string, number>>('/admin/metrics').subscribe({
      next: (m) => {
        this.metrics = m as typeof this.metrics;
        this.cdr.markForCheck();
      },
    });
    this.api.get<Property[]>('/admin/properties/pending', { page: 0, size: 50 }).subscribe({
      next: (list) => {
        this.pending = Array.isArray(list) ? list : [];
        this.loadingPending = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingPending = false;
        this.cdr.markForCheck();
      },
    });
    this.loadAgents();
    this.loadPendingVisits();
    this.loadAllVisits();
    this.loadAllProperties();
    this.loadAllUsers();
    this.loadCarouselSlides();
  }

  isNewProperty(createdAt: string | undefined): boolean {
    if (!createdAt) return false;
    const d = new Date(createdAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return d >= weekAgo;
  }

  prevPropertiesPage() {
    this.pageAllProperties--;
    this.loadAllProperties();
  }

  nextPropertiesPage() {
    this.pageAllProperties++;
    this.loadAllProperties();
  }

  prevVisitsPage() {
    this.pageAllVisits--;
    this.loadAllVisits();
  }

  nextVisitsPage() {
    this.pageAllVisits++;
    this.loadAllVisits();
  }

  loadAllProperties() {
    this.loadingAllProperties = true;
    const params: Record<string, string | number | boolean> = { page: this.pageAllProperties, size: 20 };
    if (this.filterAllProperties === 'featured') params['featuredOnly'] = true;
    if (this.filterAllProperties === 'new') params['newOnly'] = true;
    this.api.get<PageResponse<Property>>('/admin/properties', params).subscribe({
      next: (res) => {
        this.allPropertiesResponse = res;
        this.loadingAllProperties = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingAllProperties = false;
        this.toast.error('Failed to load properties');
        this.cdr.markForCheck();
      },
    });
  }

  toggleFeatured(p: Property) {
    if (!p.id) return;
    this.updatingFeatured[p.id] = true;
    const featured = !p.featured;
    this.api.put<Property>('/admin/properties/' + p.id + '/featured?featured=' + featured, {}).subscribe({
      next: (updated) => {
        this.updatingFeatured[p.id!] = false;
        p.featured = updated.featured;
        this.toast.success(updated.featured ? 'Marked as featured' : 'Removed from featured');
      },
      error: (e) => {
        this.updatingFeatured[p.id!] = false;
        this.toast.error(e.error?.message || 'Failed');
      },
    });
  }

  deleteProperty(id: number) {
    if (!confirm('Delete this property? This cannot be undone.')) return;
    this.deleting[id] = true;
    this.api.delete('/admin/properties/' + id).subscribe({
      next: () => {
        this.deleting[id] = false;
        this.toast.success('Property deleted');
        this.loadAllProperties();
        if (this.metrics?.totalProperties != null) this.metrics.totalProperties--;
      },
      error: (e) => {
        this.deleting[id] = false;
        this.toast.error(e.error?.message || 'Delete failed');
      },
    });
  }

  private parseUsersResponse(res: unknown): UserRow[] {
    if (Array.isArray(res)) return res as UserRow[];
    if (res && typeof res === 'object' && Array.isArray((res as any).content)) return (res as any).content as UserRow[];
    return [];
  }

  openViewers(propertyId: number) {
    this.usersModalTitle = 'Users who viewed this property';
    this.modalEmptyMessage = '0 views';
    this.modalUsers = [];
    this.modalError = '';
    this.loadingModalUsers = true;
    this.cdr.detectChanges();
    this.api.get<UserRow[] | { content: UserRow[] }>('/admin/properties/' + propertyId + '/viewers').subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.modalUsers = this.parseUsersResponse(res);
          this.loadingModalUsers = false;
          this.modalError = '';
          this.cdr.detectChanges();
        });
      },
      error: () => {
        this.ngZone.run(() => {
          this.loadingModalUsers = false;
          this.modalError = 'Error loading viewers. Please try again.';
          this.modalUsers = [];
          this.toast.error('Failed to load viewers');
          this.cdr.detectChanges();
        });
      },
    });
  }

  openLikers(propertyId: number) {
    this.usersModalTitle = 'Users who liked this property';
    this.modalEmptyMessage = '0 likes';
    this.modalUsers = [];
    this.modalError = '';
    this.loadingModalUsers = true;
    this.cdr.detectChanges();
    this.api.get<UserRow[] | { content: UserRow[] }>('/admin/properties/' + propertyId + '/likers').subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.modalUsers = this.parseUsersResponse(res);
          this.loadingModalUsers = false;
          this.modalError = '';
          this.cdr.detectChanges();
        });
      },
      error: () => {
        this.ngZone.run(() => {
          this.loadingModalUsers = false;
          this.modalError = 'Error loading likes. Please try again.';
          this.modalUsers = [];
          this.toast.error('Failed to load likers');
          this.cdr.detectChanges();
        });
      },
    });
  }

  closeUsersModal() {
    this.usersModalTitle = '';
    this.modalUsers = [];
    this.modalError = '';
    this.modalEmptyMessage = '';
  }

  loadAllUsers() {
    this.loadingUsers = true;
    this.api.get<UserRow[]>('/admin/users').subscribe({
      next: (users) => {
        this.allUsers = users || [];
        this.loadingUsers = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingUsers = false;
        this.toast.error('Failed to load users');
        this.cdr.markForCheck();
      },
    });
  }

  toggleUserStatus(user: UserRow) {
    const nextActive = !user.active;
    this.updatingUserStatus[user.id] = true;
    this.api.put<UserRow>('/admin/users/' + user.id + '/status?active=' + nextActive, {}).subscribe({
      next: (updated) => {
        this.updatingUserStatus[user.id] = false;
        user.active = updated.active;
        this.toast.success(updated.active ? 'User activated' : 'User suspended');
      },
      error: (e) => {
        this.updatingUserStatus[user.id] = false;
        this.toast.error(e.error?.message || 'Failed to update status');
      },
    });
  }

  changeUserRole(user: UserRow, nextRole: string) {
    if (!nextRole || nextRole === user.role || user.id === this.currentUserId) return;
    this.changingUserRole[user.id] = true;
    this.api.put<UserRow>('/admin/users/' + user.id + '/role?role=' + nextRole, {}).subscribe({
      next: (updated) => {
        this.changingUserRole[user.id] = false;
        user.role = updated.role;
        this.toast.success('User role updated');
      },
      error: (e) => {
        this.changingUserRole[user.id] = false;
        this.toast.error(e.error?.message || 'Failed to update role');
      },
    });
  }

  deleteUser(user: UserRow) {
    if (!confirm(`Delete user ${user.fullName}? This also deletes properties and related data.`)) return;
    this.deletingUser[user.id] = true;
    this.api.delete('/admin/users/' + user.id).subscribe({
      next: () => {
        this.deletingUser[user.id] = false;
        this.allUsers = this.allUsers.filter(u => u.id !== user.id);
        this.toast.success('User deleted');
      },
      error: (e) => {
        this.deletingUser[user.id] = false;
        this.toast.error(e.error?.message || 'Failed to delete user');
      },
    });
  }

  loadAllVisits() {
    this.loadingAllVisits = true;
    const params: Record<string, string | number> = { page: this.pageAllVisits, size: 20 };
    if (this.filterFrom) params['from'] = new Date(this.filterFrom).toISOString();
    if (this.filterTo) params['to'] = new Date(this.filterTo).toISOString();
    if (this.filterAgentId != null) params['agentId'] = this.filterAgentId;
    this.api.get<typeof this.allVisitsResponse>('/admin/sitevisits', params).subscribe({
      next: (res) => {
        this.allVisitsResponse = res;
        this.loadingAllVisits = false;
      },
      error: () => {
        this.loadingAllVisits = false;
        this.toast.error('Failed to load visits');
      },
    });
  }

  isDueToday(scheduledAt: string): boolean {
    if (!scheduledAt) return false;
    const d = new Date(scheduledAt);
    const today = new Date();
    return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
  }

  canReassign(v: SiteVisitRow): boolean {
    return v.status === 'PENDING_ASSIGNMENT' || v.status === 'ASSIGNED';
  }

  reassignVisit(visitId: number) {
    const agentId = this.reassignAgentId[visitId];
    if (!agentId) return;
    this.reassigning[visitId] = true;
    this.api.put('/admin/sitevisits/' + visitId + '/reassign?agentId=' + agentId, {}).subscribe({
      next: () => {
        this.reassigning[visitId] = false;
        this.toast.success('Visit reassigned');
        this.loadAllVisits();
        this.loadPendingVisits();
        if (this.metrics != null && this.metrics.pendingSiteVisits != null) {
          this.api.get<Record<string, number>>('/admin/metrics').subscribe({ next: (m) => (this.metrics = m as typeof this.metrics) });
        }
      },
      error: (e) => {
        this.reassigning[visitId] = false;
        this.toast.error(e.error?.message || 'Reassign failed');
      },
    });
  }

  loadAgents() {
    this.api.get<AgentRow[]>('/admin/agents').subscribe({
      next: (list) => (this.agents = list),
      error: () => this.toast.error('Failed to load agents'),
    });
  }

  loadPendingVisits() {
    this.loadingVisits = true;
    this.api.get<SiteVisitRow[]>('/admin/sitevisits/pending', { page: 0, size: 50 }).subscribe({
      next: (list) => {
        this.pendingVisits = list;
        this.loadingVisits = false;
      },
      error: () => {
        this.loadingVisits = false;
        this.toast.error('Failed to load pending site visits');
      },
    });
  }

  assignAgent(visitId: number) {
    const agentId = this.selectedAgentId[visitId];
    if (!agentId) return;
    this.assigning[visitId] = true;
    this.api.put('/admin/sitevisits/' + visitId + '/assign?agentId=' + agentId, {}).subscribe({
      next: () => {
        this.assigning[visitId] = false;
        this.toast.success('Agent assigned');
        this.pendingVisits = this.pendingVisits.filter((v) => v.id !== visitId);
        if (this.metrics && this.metrics.pendingSiteVisits != null) this.metrics.pendingSiteVisits--;
      },
      error: (e) => {
        this.assigning[visitId] = false;
        this.toast.error(e.error?.message || 'Failed to assign agent');
      },
    });
  }

  approve(id: number) {
    this.api.put('/admin/properties/' + id + '/approve', {}).subscribe({
      next: () => {
        this.toast.success('Property approved');
        this.pending = this.pending.filter((p) => p.id !== id);
      },
      error: (e) => this.toast.error(e.error?.message || 'Failed'),
    });
  }

  reject(id: number) {
    this.api.put('/admin/properties/' + id + '/reject', {}).subscribe({
      next: () => {
        this.toast.success('Property rejected');
        this.pending = this.pending.filter((p) => p.id !== id);
      },
      error: (e) => this.toast.error(e.error?.message || 'Failed'),
    });
  }

  loadCarouselSlides() {
    this.loadingCarousel = true;
    this.api.get<CarouselSlide[]>('/admin/carousel/slides').subscribe({
      next: (slides) => {
        this.carouselSlides = Array.isArray(slides) ? slides : [];
        this.loadingCarousel = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingCarousel = false;
        this.toast.error('Failed to load carousel slides');
        this.cdr.markForCheck();
      },
    });
  }

  carouselImageUrl(url: string): string {
    return resolvePropertyImageUrl(url, this.config.apiUrl) || url;
  }

  newCarouselPreviewUrl(): string {
    const raw = (this.newCarousel.imageUrl || '').trim();
    if (!raw) return '';
    return this.carouselImageUrl(raw.startsWith('http') ? raw : `https://${raw.replace(/^\/+/, '')}`);
  }

  onCarouselImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/280x140?text=Preview+unavailable';
    img.onerror = null;
  }

  addCarouselSlide() {
    const imageUrl = (this.newCarousel.imageUrl || '').trim();
    if (!imageUrl) {
      this.toast.warning('Image URL is required');
      return;
    }
    this.savingCarousel = true;
    this.api.post<CarouselSlide>('/admin/carousel/slides', {
      imageUrl,
      linkUrl: (this.newCarousel.linkUrl || '').trim() || undefined,
      altText: (this.newCarousel.altText || '').trim() || undefined,
      active: true,
    }).subscribe({
      next: () => {
        this.savingCarousel = false;
        this.newCarousel = { imageUrl: '', linkUrl: '', altText: '' };
        this.toast.success('Carousel slide added');
        this.loadCarouselSlides();
      },
      error: (e) => {
        this.savingCarousel = false;
        this.toast.error(e.error?.message || 'Failed to add slide');
        this.cdr.markForCheck();
      },
    });
  }

  saveCarouselSlide(slide: CarouselSlide) {
    this.savingCarouselId[slide.id] = true;
    this.api.put<CarouselSlide>('/admin/carousel/slides/' + slide.id, {
      imageUrl: (slide.imageUrl || '').trim(),
      linkUrl: (slide.linkUrl || '').trim() || null,
      altText: (slide.altText || '').trim() || null,
      displayOrder: slide.displayOrder,
      active: slide.active,
    }).subscribe({
      next: (updated) => {
        this.savingCarouselId[slide.id] = false;
        Object.assign(slide, updated);
        this.toast.success('Carousel slide saved');
        this.cdr.markForCheck();
      },
      error: (e) => {
        this.savingCarouselId[slide.id] = false;
        this.toast.error(e.error?.message || 'Failed to save slide');
        this.loadCarouselSlides();
      },
    });
  }

  moveCarouselSlide(index: number, delta: number) {
    const targetIndex = index + delta;
    if (targetIndex < 0 || targetIndex >= this.carouselSlides.length) return;
    const slides = [...this.carouselSlides];
    [slides[index], slides[targetIndex]] = [slides[targetIndex], slides[index]];
    slides.forEach((slide, idx) => {
      slide.displayOrder = idx;
      this.reorderingCarousel[slide.id] = true;
    });
    this.carouselSlides = slides;
    this.cdr.markForCheck();
    forkJoin(
      slides.map(slide =>
        this.api.put<CarouselSlide>('/admin/carousel/slides/' + slide.id, { displayOrder: slide.displayOrder })
      )
    ).subscribe({
      next: () => {
        slides.forEach(slide => { this.reorderingCarousel[slide.id] = false; });
        this.toast.success('Slide order updated');
        this.loadCarouselSlides();
      },
      error: () => {
        slides.forEach(slide => { this.reorderingCarousel[slide.id] = false; });
        this.toast.error('Failed to reorder slides');
        this.loadCarouselSlides();
      },
    });
  }

  deleteCarouselSlide(slide: CarouselSlide) {
    if (!confirm('Delete this carousel slide?')) return;
    this.deletingCarousel[slide.id] = true;
    this.api.delete('/admin/carousel/slides/' + slide.id).subscribe({
      next: () => {
        this.deletingCarousel[slide.id] = false;
        this.toast.success('Carousel slide deleted');
        this.loadCarouselSlides();
      },
      error: (e) => {
        this.deletingCarousel[slide.id] = false;
        this.toast.error(e.error?.message || 'Failed to delete slide');
        this.cdr.markForCheck();
      },
    });
  }
}
