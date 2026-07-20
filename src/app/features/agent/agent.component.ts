import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';
import { ToastrService } from 'ngx-toastr';

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

interface AgentVisitsResponse {
  content: SiteVisitRow[];
  totalElements: number;
  totalPages: number;
  dueTodayCount: number;
}

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SkeletonLoaderComponent],
  template: `
    <div class="agent-page">
      <div class="container">
        <div class="agent-header">
          <div>
            <span class="eyebrow">Field Operations</span>
            <h1>My Site Visits</h1>
            <p>Upcoming visits first. The customer will tell you their OTP in person — enter it here to complete.</p>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-card card">
            <strong>{{ activeCount }}</strong>
            <span>Active visits</span>
          </div>
          <div class="stat-card card highlight" *ngIf="dueTodayCount > 0">
            <strong>{{ dueTodayCount }}</strong>
            <span>Due today</span>
          </div>
          <div class="stat-card card">
            <strong>{{ completedCount }}</strong>
            <span>Completed</span>
          </div>
        </div>

        <div class="visits-section card">
          <div class="section-header">
            <h2>Assigned Visits</h2>
            <div class="tabs">
              <button type="button" class="tab" [class.active]="filter === 'all'" (click)="setFilter('all')">All</button>
              <button type="button" class="tab" [class.active]="filter === 'active'" (click)="setFilter('active')">Active</button>
              <button type="button" class="tab" [class.active]="filter === 'completed'" (click)="setFilter('completed')">Completed</button>
            </div>
          </div>

          <div class="visits-list" *ngIf="filteredVisits.length && !loading">
            <div class="visit-item" *ngFor="let v of filteredVisits"
                 [class.due-today]="isDueToday(v.scheduledAt) && v.status === 'ASSIGNED'"
                 [class.completed]="v.status === 'COMPLETED'">
              <div class="visit-info">
                <div class="visit-property">{{ v.propertyTitle }}</div>
                <div class="visit-meta">
                  <span>📅 {{ v.scheduledAt | date:'EEE, MMM d · h:mm a' }}</span>
                  <span class="visit-status" [class.status-assigned]="v.status === 'ASSIGNED'"
                        [class.status-completed]="v.status === 'COMPLETED'">{{ v.status }}</span>
                  <span class="due-badge" *ngIf="isDueToday(v.scheduledAt) && v.status === 'ASSIGNED'">Today</span>
                  <span class="upcoming-badge" *ngIf="isUpcoming(v.scheduledAt) && v.status === 'ASSIGNED'">Upcoming</span>
                </div>
                <div class="visit-user" *ngIf="v.userName">Customer: {{ v.userName }}</div>
              </div>

              <div class="visit-actions" *ngIf="v.status === 'ASSIGNED'">
                <div class="inline-otp">
                  <input type="text" [(ngModel)]="otpByVisit[v.id]" placeholder="OTP from customer" maxlength="6" inputmode="numeric" class="otp-input" />
                  <button type="button" class="btn btn-primary btn-sm" (click)="completeVisit(v)" [disabled]="completingId === v.id || !otpByVisit[v.id]?.trim()">
                    {{ completingId === v.id ? 'Completing…' : 'Complete' }}
                  </button>
                </div>
                <a [routerLink]="['/agent/visit', v.id]" class="btn btn-outline btn-sm">Details</a>
              </div>

              <a [routerLink]="['/agent/visit', v.id]" class="btn btn-outline btn-sm" *ngIf="v.status === 'COMPLETED'">View details</a>
            </div>
          </div>

          <div class="empty-state" *ngIf="!filteredVisits.length && !loading">
            <div class="empty-icon">📋</div>
            <p>{{ filter === 'completed' ? 'No completed visits yet.' : 'No site visits assigned to you yet.' }}</p>
          </div>

          <div class="loading-state" *ngIf="loading">
            <app-skeleton-loader height="88px" style="margin-bottom: 0.75rem;" *ngFor="let i of [1,2,3,4]"></app-skeleton-loader>
          </div>

          <div class="pagination-row" *ngIf="totalPages > 1 && !loading">
            <button class="btn btn-outline btn-sm" [disabled]="page === 0" (click)="prevPage()">Previous</button>
            <span class="page-info">Page {{ page + 1 }} of {{ totalPages }}</span>
            <button class="btn btn-outline btn-sm" [disabled]="page >= totalPages - 1" (click)="nextPage()">Next</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .agent-page { padding: 2rem 0 4rem; background: var(--bg); min-height: calc(100vh - 80px); }
    .agent-header { margin-bottom: 1.75rem; }
    .eyebrow { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--primary); }
    .agent-header h1 { font-family: var(--font-display); font-size: 2rem; font-weight: 800; margin: 0.35rem 0 0.5rem; }
    .agent-header p { color: var(--text-muted); margin: 0; }
    .stats-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
    .stat-card { padding: 1.25rem; text-align: center; border: 1px solid var(--border); }
    .stat-card strong { display: block; font-size: 1.75rem; font-weight: 800; color: var(--text); }
    .stat-card span { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
    .stat-card.highlight { background: var(--info-bg); border-color: rgba(14,165,233,0.3); }
    .visits-section { padding: 1.75rem; border: 1px solid var(--border); }
    .section-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light); }
    .section-header h2 { margin: 0; font-size: 1.25rem; font-weight: 700; }
    .tabs { display: flex; gap: 0.35rem; background: var(--bg); padding: 0.25rem; border-radius: var(--radius); border: 1px solid var(--border); }
    .tab { border: none; background: transparent; padding: 0.45rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.875rem; font-weight: 600; cursor: pointer; color: var(--text-muted); }
    .tab.active { background: var(--surface); color: var(--primary); box-shadow: var(--shadow-sm); }
    .visits-list { display: flex; flex-direction: column; gap: 0.85rem; }
    .visit-item {
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;
      padding: 1.25rem; background: var(--surface); border-radius: var(--radius-lg);
      border: 1px solid var(--border); transition: var(--transition);
    }
    .visit-item:hover { box-shadow: var(--shadow-md); }
    .visit-item.due-today { border-color: rgba(14,165,233,0.35); background: linear-gradient(135deg, rgba(14,165,233,0.06), #fff); }
    .visit-item.completed { opacity: 0.85; }
    .visit-property { font-weight: 700; font-size: 1rem; margin-bottom: 0.35rem; }
    .visit-meta { display: flex; gap: 0.65rem; flex-wrap: wrap; font-size: 0.84rem; color: var(--text-muted); align-items: center; }
    .visit-status { padding: 0.15rem 0.55rem; border-radius: 999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
    .status-assigned { background: var(--info-bg); color: var(--info-text); }
    .status-completed { background: var(--success-bg); color: var(--success-text); }
    .due-badge { background: var(--warning-bg); color: var(--warning-text); padding: 0.15rem 0.45rem; border-radius: 999px; font-size: 0.7rem; font-weight: 700; }
    .upcoming-badge { background: rgba(16,185,129,0.12); color: var(--success-text); padding: 0.15rem 0.45rem; border-radius: 999px; font-size: 0.7rem; font-weight: 700; }
    .visit-user { font-size: 0.84rem; color: var(--text-secondary); margin-top: 0.25rem; }
    .visit-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; }
    .inline-otp { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; }
    .otp-input { width: 110px; padding: 0.5rem 0.65rem; border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 1rem; letter-spacing: 0.1em; text-align: center; }
    .empty-state { text-align: center; padding: 2.5rem; color: var(--text-muted); }
    .empty-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .loading-state { padding: 0.5rem 0; }
    .pagination-row { display: flex; align-items: center; gap: 1rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border); }
    .page-info { font-size: 0.875rem; color: var(--text-muted); }
  `],
})
export class AgentComponent implements OnInit {
  visits: SiteVisitRow[] = [];
  loading = true;
  page = 0;
  size = 20;
  totalPages = 0;
  totalElements = 0;
  dueTodayCount = 0;
  filter: 'all' | 'active' | 'completed' = 'active';
  otpByVisit: Record<number, string> = {};
  completingId: number | null = null;

  constructor(
    public auth: AuthService,
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private toast: ToastrService,
  ) {}

  ngOnInit() { this.load(); }

  get filteredVisits(): SiteVisitRow[] {
    if (this.filter === 'active') return this.visits.filter(v => v.status === 'ASSIGNED');
    if (this.filter === 'completed') return this.visits.filter(v => v.status === 'COMPLETED');
    return this.visits;
  }

  get activeCount(): number { return this.visits.filter(v => v.status === 'ASSIGNED').length; }
  get completedCount(): number { return this.visits.filter(v => v.status === 'COMPLETED').length; }

  setFilter(f: 'all' | 'active' | 'completed') { this.filter = f; }

  load() {
    this.loading = true;
    this.api.get<AgentVisitsResponse>('/agent/sitevisits', { page: this.page, size: this.size }).subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          this.visits = res?.content ?? [];
          this.totalElements = res?.totalElements ?? 0;
          this.totalPages = res?.totalPages ?? 0;
          this.dueTodayCount = res?.dueTodayCount ?? 0;
          this.loading = false;
          this.cdr.detectChanges();
        });
      },
      error: () => {
        this.ngZone.run(() => { this.loading = false; this.cdr.detectChanges(); });
      },
    });
  }

  completeVisit(v: SiteVisitRow) {
    const otp = this.otpByVisit[v.id]?.trim();
    if (!otp) return;
    this.completingId = v.id;
    this.api.post<unknown>(`/agent/sitevisits/${v.id}/complete?otp=${encodeURIComponent(otp)}`, {}).subscribe({
      next: () => {
        this.ngZone.run(() => {
          this.toast.success('Visit marked complete!');
          v.status = 'COMPLETED';
          delete this.otpByVisit[v.id];
          this.completingId = null;
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.toast.error(err.error?.message || 'Invalid OTP or visit cannot be completed');
          this.completingId = null;
          this.cdr.detectChanges();
        });
      },
    });
  }

  isDueToday(scheduledAt: string): boolean {
    if (!scheduledAt) return false;
    const d = new Date(scheduledAt);
    const today = new Date();
    return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
  }

  isUpcoming(scheduledAt: string): boolean {
    return new Date(scheduledAt).getTime() > Date.now();
  }

  prevPage() { if (this.page > 0) { this.page--; this.load(); } }
  nextPage() { if (this.page < this.totalPages - 1) { this.page++; this.load(); } }
}
