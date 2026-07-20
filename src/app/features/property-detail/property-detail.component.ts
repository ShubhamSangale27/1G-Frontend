import { Component, OnInit, HostListener, ChangeDetectorRef, NgZone, signal } from '@angular/core';
import { HttpContext } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ConfigService } from '../../core/services/config.service';
import { Property } from '../../core/models/property.model';
import { ToastrService } from 'ngx-toastr';
import { SkeletonLoaderComponent } from '../../shared/skeleton-loader/skeleton-loader.component';
import { PropertyMapComponent } from '../../shared/property-map/property-map.component';
import { IndianPricePipe } from '../../shared/pipes/indian-price.pipe';
import {
  resolvePropertyImageUrl,
  resolveVideoCardPosterUrl,
} from '../../core/utils/image-url.util';
import { buildGallerySlides, type GallerySlide } from '../../core/utils/property-gallery.util';

interface RenderableGallerySlide extends GallerySlide {
  safeEmbedUrl?: SafeResourceUrl;
  thumbUrl: string;
}
import { SILENT_NOT_FOUND } from '../../core/http-context.tokens';

/** User's active site visit for this property (PENDING_ASSIGNMENT or ASSIGNED). Used to show Reschedule instead of Book. */
interface SiteVisitDto {
  id: number;
  scheduledAt: string;
  status: string;
}

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, SkeletonLoaderComponent, PropertyMapComponent, IndianPricePipe],
  template: `
    <div class="property-detail-wrapper">
    <div class="property-detail-page" *ngIf="property && !loading">
      <div class="container">
        <div class="breadcrumb">
          <a routerLink="/">Home</a> / <a routerLink="/search">Properties</a> / <span>{{ property.title }}</span>
        </div>
        
        <div class="property-header">
          <div class="header-left">
            <h1>{{ property.title }}</h1>
            <div class="property-location">
              <span>📍</span> {{ property.address }}, {{ property.city }}{{ property.state ? ', ' + property.state : '' }}
            </div>
            <div class="property-badges">
              <span class="badge badge-listing">{{ property.listingType }}</span>
              <span class="badge badge-type">{{ property.propertyType }}</span>
              <span class="badge badge-premium" *ngIf="property.isPremium">⭐ Premium</span>
            </div>
          </div>
          <div class="header-right">
            <div class="price-section">
              <div class="price">{{ property.price | indianPrice }}</div>
              <div class="price-label">{{ property.listingType === 'RENT' ? 'per month' : 'total price' }}</div>
            </div>
            <div class="action-buttons">
              <ng-container *ngIf="hasActiveSession()">
                <button class="btn btn-primary btn-lg" (click)="bookVisit()" *ngIf="!myVisitForProperty">
                  📅 Book Site Visit
                </button>
                <div class="existing-visit-actions" *ngIf="myVisitForProperty">
                  <span class="visit-status-badge" [class.assigned]="myVisitForProperty.status === 'ASSIGNED'">{{ visitStatusLabel() }}</span>
                  <span class="visit-scheduled">{{ myVisitForProperty.scheduledAt | date:'medium' }}</span>
                  <div class="visit-otp-box" *ngIf="myVisitForProperty.status === 'ASSIGNED' && visitOtp">
                    <span class="otp-label">Your visit OTP</span>
                    <strong class="otp-code">{{ visitOtp }}</strong>
                    <span class="otp-hint">Keep this private. Share it with the agent only in person when the visit is finished.</span>
                    <button type="button" class="btn btn-outline btn-sm" (click)="resendVisitOtp()" [disabled]="resendingOtp">Resend OTP</button>
                  </div>
                  <p class="visit-pending-msg" *ngIf="myVisitForProperty.status === 'PENDING_ASSIGNMENT'">
                    Waiting for admin to assign an agent. You'll receive an OTP via SMS when assigned.
                  </p>
                  <button class="btn btn-primary btn-lg" (click)="openReschedule()">📅 Reschedule visit</button>
                </div>
              </ng-container>
              <button class="btn btn-outline" (click)="toggleWatchlist()" *ngIf="auth.user()">
                {{ inWatchlist ? '❤️ Liked' : '🤍 Like' }}
              </button>
              <a routerLink="/login" class="btn btn-primary btn-lg" *ngIf="!hasActiveSession()">Login to Book Visit</a>
            </div>
          </div>
        </div>

        <div class="gallery-section">
          <ng-container *ngIf="gallerySlides.length">
            <div class="main-image" *ngIf="currentSlide as slide">
              <span class="verified-badge">✔ Verified</span>
              <ng-container [ngSwitch]="slide.kind">
                <img
                  *ngSwitchCase="'photo'"
                  class="hero-photo hero-media zoomable"
                  [src]="imageFullUrl(slide.sourceUrl)"
                  [alt]="property.title"
                  (click)="openZoom(imageFullUrl(slide.sourceUrl))"
                />
                <iframe
                  *ngSwitchCase="'video-embed'"
                  class="hero-embed hero-media"
                  [src]="slide.safeEmbedUrl"
                  title="Property video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  referrerpolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                ></iframe>
              </ng-container>
              <button type="button" class="gallery-nav prev" (click)="prevGallery(); $event.stopPropagation()" *ngIf="gallerySlides.length > 1">‹</button>
              <button type="button" class="gallery-nav next" (click)="nextGallery(); $event.stopPropagation()" *ngIf="gallerySlides.length > 1">›</button>
              <div class="image-counter" *ngIf="gallerySlides.length > 1">
                {{ galleryIndex + 1 }} / {{ gallerySlides.length }}
              </div>
            </div>
          </ng-container>
          <div class="main-image main-image-empty" *ngIf="!gallerySlides.length">
            <span class="verified-badge">✔ Verified</span>
            <img class="hero-photo hero-media" [src]="heroPlaceholderUrl" [alt]="property.title" />
          </div>
          <div class="thumbnail-grid" *ngIf="gallerySlides.length > 1">
            <button
              type="button"
              *ngFor="let slide of gallerySlides; let i = index"
              [class.active]="galleryIndex === i"
              (click)="galleryIndex = i; $event.stopPropagation()"
              (dblclick)="slide.kind === 'photo' && openZoom(imageFullUrl(slide.sourceUrl))"
            >
              <img [src]="slide.thumbUrl" alt="" loading="lazy" />
              <span class="thumb-video-icon" *ngIf="slide.kind !== 'photo'" aria-hidden="true">▶</span>
            </button>
          </div>
        </div>
        <div class="zoom-overlay" *ngIf="zoomOpen" (click)="closeZoom()">
          <img [src]="zoomUrl" alt="Zoom" (click)="$event.stopPropagation()" class="zoom-image" />
          <button type="button" class="zoom-close" (click)="closeZoom()">×</button>
        </div>

        <div class="property-content">
          <div class="main-content">
            <section class="info-section card">
              <h2>Property Details</h2>
              <div class="details-grid">
                <div class="detail-item" *ngIf="property.bedrooms">
                  <div class="detail-icon">🛏️</div>
                  <div>
                    <div class="detail-label">Bedrooms</div>
                    <div class="detail-value">{{ property.bedrooms }} BHK</div>
                  </div>
                </div>
                <div class="detail-item" *ngIf="property.bathrooms">
                  <div class="detail-icon">🚿</div>
                  <div>
                    <div class="detail-label">Bathrooms</div>
                    <div class="detail-value">{{ property.bathrooms }}</div>
                  </div>
                </div>
                <div class="detail-item" *ngIf="property.areaSqft">
                  <div class="detail-icon">📐</div>
                  <div>
                    <div class="detail-label">Area</div>
                    <div class="detail-value">{{ property.areaSqft }} sq.ft</div>
                  </div>
                </div>
                <div class="detail-item">
                  <div class="detail-icon">🏠</div>
                  <div>
                    <div class="detail-label">Type</div>
                    <div class="detail-value">{{ property.propertyType }}</div>
                  </div>
                </div>
              </div>
            </section>

            <section class="description-section card" *ngIf="property.description">
              <h2>Description</h2>
              <p>{{ property.description }}</p>
            </section>

            <section class="amenities-section card" *ngIf="property.amenities">
              <h2>Amenities</h2>
              <div class="amenities-list">
                <span *ngFor="let amenity of amenitiesList" class="amenity-item">✓ {{ amenity }}</span>
              </div>
            </section>

            <section class="location-section card">
              <h2>Location</h2>
              <app-property-map
                mode="view"
                [latitude]="property.latitude ?? null"
                [longitude]="property.longitude ?? null"
              ></app-property-map>
              <div class="location-details">
                <p><strong>Address:</strong> {{ property.address }}</p>
                <p *ngIf="property.locality"><strong>Locality:</strong> {{ property.locality }}</p>
                <p><strong>City:</strong> {{ property.city }}</p>
                <p *ngIf="property.state"><strong>State:</strong> {{ property.state }}</p>
                <p *ngIf="property.pincode"><strong>Pincode:</strong> {{ property.pincode }}</p>
              </div>
            </section>

            <section class="analytics-section card" *ngIf="property.viewCount !== undefined">
              <h2>Property Insights</h2>
              <div class="analytics-grid">
                <div class="analytics-item">
                  <div class="analytics-icon">👁️</div>
                  <div>
                    <div class="analytics-value">{{ property.viewCount || 0 }}</div>
                    <div class="analytics-label">Views</div>
                  </div>
                </div>
                <div class="analytics-item">
                  <div class="analytics-icon">📞</div>
                  <div>
                    <div class="analytics-value">{{ property.clickCount || 0 }}</div>
                    <div class="analytics-label">Clicks</div>
                  </div>
                </div>
                <div class="analytics-item">
                  <div class="analytics-icon">📅</div>
                  <div>
                    <div class="analytics-value">{{ property.visitCount || 0 }}</div>
                    <div class="analytics-label">Site Visits</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside class="sidebar">
            <div class="contact-card card">
              <h3>Contact Owner</h3>
              <div class="owner-info" *ngIf="property.ownerName">
                <div class="owner-avatar">{{ property.ownerName.charAt(0) }}</div>
                <div>
                  <div class="owner-name">{{ property.ownerName }}</div>
                  <div class="owner-role">Property Owner</div>
                </div>
              </div>
              <ng-container *ngIf="hasActiveSession()">
                <button class="btn btn-primary btn-block" (click)="bookVisit()" *ngIf="!myVisitForProperty">
                  📅 Book Site Visit
                </button>
                <div class="existing-visit-sidebar" *ngIf="myVisitForProperty">
                  <span class="visit-status-badge" [class.assigned]="myVisitForProperty.status === 'ASSIGNED'">{{ visitStatusLabel() }}</span>
                  <p class="visit-scheduled-text">{{ myVisitForProperty.scheduledAt | date:'medium' }}</p>
                  <div class="visit-otp-box" *ngIf="myVisitForProperty.status === 'ASSIGNED' && visitOtp">
                    <span class="otp-label">Visit OTP</span>
                    <strong class="otp-code">{{ visitOtp }}</strong>
                    <button type="button" class="btn btn-outline btn-sm btn-block" (click)="resendVisitOtp()" [disabled]="resendingOtp">Resend OTP</button>
                  </div>
                  <p class="visit-pending-msg" *ngIf="myVisitForProperty.status === 'PENDING_ASSIGNMENT'">Agent assignment pending — OTP will be sent via SMS.</p>
                  <button class="btn btn-primary btn-block" (click)="openReschedule()">📅 Reschedule</button>
                </div>
              </ng-container>
              <a routerLink="/login" class="btn btn-primary btn-block" *ngIf="!hasActiveSession()">Login to Contact</a>
            </div>

            <div class="quick-info card">
              <h3>Quick Facts</h3>
              <div class="quick-facts">
                <div class="fact-item">
                  <span class="fact-label">Property ID</span>
                  <span class="fact-value">#{{ property.id }}</span>
                </div>
                <div class="fact-item" *ngIf="property.createdAt">
                  <span class="fact-label">Listed</span>
                  <span class="fact-value">{{ property.createdAt | date:'MMM d, y' }}</span>
                </div>
                <div class="fact-item" *ngIf="property.isPremium && property.premiumExpiresAt">
                  <span class="fact-label">Premium Until</span>
                  <span class="fact-value">{{ property.premiumExpiresAt | date:'MMM d, y' }}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <div class="container" *ngIf="loading">
      <div class="loading-skeleton">
        <app-skeleton-loader height="400px" style="margin-bottom: 2rem;"></app-skeleton-loader>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
          <div>
            <app-skeleton-loader height="200px" style="margin-bottom: 1rem;"></app-skeleton-loader>
            <app-skeleton-loader height="200px"></app-skeleton-loader>
          </div>
          <app-skeleton-loader height="300px"></app-skeleton-loader>
        </div>
      </div>
    </div>

    <div class="container" *ngIf="!property && !loading">
      <div class="not-found">
        <div class="not-found-icon">🏠</div>
        <h2>{{ loadError ? 'Unable to load property' : 'Property Not Found' }}</h2>
        <p>{{ loadError || "The property you're looking for doesn't exist or has been removed." }}</p>
        <a routerLink="/search" class="btn btn-primary">Browse Properties</a>
      </div>
    </div>
    </div>

    @if (bookVisitOpen()) {
      <div class="pv-dialog-root" role="presentation">
        <div class="pv-dialog-backdrop" (click)="closeBookVisitDialog()" aria-hidden="true"></div>
        <div
          class="pv-dialog-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pv-book-title"
          (click)="$event.stopPropagation()"
        >
          <div class="pv-dialog-header">
            <h3 id="pv-book-title">Book Site Visit</h3>
            <button type="button" class="pv-dialog-close" (click)="closeBookVisitDialog()" aria-label="Close">×</button>
          </div>
          <form (ngSubmit)="submitVisit()" class="pv-dialog-body pv-dialog-form">
            <div class="form-group pv-datetime-block">
              <div class="pv-date-field">
                <label for="pv-visit-date">Date</label>
                <input id="pv-visit-date" type="date" [(ngModel)]="visitDateOnly" name="visitDateOnly" required />
              </div>
              <div class="pv-time-field">
                <label for="pv-visit-time">Time</label>
                <input id="pv-visit-time" type="time" [(ngModel)]="visitTimeOnly" name="visitTimeOnly" step="300" required />
              </div>
            </div>
            <div class="form-group">
              <label>Additional Notes (Optional)</label>
              <textarea [(ngModel)]="visitNotes" name="visitNotes" rows="4" placeholder="Any special requirements or questions..."></textarea>
            </div>
            <div class="pv-dialog-actions">
              <button type="button" class="btn btn-outline" (click)="closeBookVisitDialog()">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    }

    @if (rescheduleVisitOpen()) {
      <div class="pv-dialog-root" role="presentation">
        <div class="pv-dialog-backdrop" (click)="closeRescheduleVisitDialog()" aria-hidden="true"></div>
        <div
          class="pv-dialog-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pv-reschedule-title"
          (click)="$event.stopPropagation()"
        >
          <div class="pv-dialog-header">
            <h3 id="pv-reschedule-title">Reschedule Site Visit</h3>
            <button type="button" class="pv-dialog-close" (click)="closeRescheduleVisitDialog()" aria-label="Close">×</button>
          </div>
          <form (ngSubmit)="submitReschedule()" class="pv-dialog-body pv-dialog-form">
            <div class="form-group pv-datetime-block">
              <div class="pv-date-field">
                <label for="pv-reschedule-date">Date</label>
                <input id="pv-reschedule-date" type="date" [(ngModel)]="rescheduleDateOnly" name="rescheduleDateOnly" required />
              </div>
              <div class="pv-time-field">
                <label for="pv-reschedule-time">Time</label>
                <input id="pv-reschedule-time" type="time" [(ngModel)]="rescheduleTimeOnly" name="rescheduleTimeOnly" step="300" required />
              </div>
            </div>
            <div class="pv-dialog-actions">
              <button type="button" class="btn btn-outline" (click)="closeRescheduleVisitDialog()">Cancel</button>
              <button type="submit" class="btn btn-primary" [disabled]="rescheduling">{{ rescheduling ? 'Updating...' : 'Reschedule Visit' }}</button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
  styles: [`
    :host { display: block; min-height: 60vh; width: 100%; box-sizing: border-box; }
    .property-detail-wrapper { min-height: 60vh; width: 100%; max-width: 100%; overflow-x: hidden; box-sizing: border-box; }
    .property-detail-page { padding: 2rem 0 4rem; width: 100%; box-sizing: border-box; }
    .breadcrumb {
      margin-bottom: 1.5rem;
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    .breadcrumb a { color: var(--primary); }
    .breadcrumb span { color: var(--text-muted); }
    .property-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid var(--border-light);
    }
    .header-left h1 {
      font-size: 2rem;
      margin-bottom: 0.75rem;
      color: var(--text);
    }
    .property-location {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    .property-badges {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .header-right {
      text-align: right;
    }
    .price-section {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%);
      border-radius: var(--radius-lg);
      border: 2px solid rgba(14, 165, 233, 0.1);
    }
    .price {
      font-size: 2.5rem;
      font-weight: 800;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.1;
      letter-spacing: -1px;
    }
    .price-label {
      font-size: 0.9375rem;
      color: var(--text-muted);
      margin-top: 0.5rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 200px;
      align-items: stretch;
    }
    .gallery-section {
      margin-bottom: 3rem;
    }
    .main-image {
      position: relative;
      aspect-ratio: 16/10;
      border-radius: var(--radius-xl);
      overflow: hidden;
      margin-bottom: 1.25rem;
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
      box-shadow: var(--shadow-xl);
      border: 2px solid var(--border-light);
    }
    .main-image .hero-media {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .main-image .hero-photo,
    .main-image .hero-embed,
    .main-image .hero-video {
      position: absolute;
      inset: 0;
    }
    .main-image .hero-embed,
    .main-image .hero-video {
      object-fit: contain;
      background: #0f172a;
    }
    .main-image .hero-photo {
      transition: transform 0.4s;
    }
    .main-image:hover .hero-photo {
      transform: scale(1.02);
    }
    .gallery-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.9);
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
      z-index: 5;
    }
    .gallery-nav:hover {
      background: white;
      box-shadow: var(--shadow-lg);
    }
    .gallery-nav.prev { left: 1rem; }
    .gallery-nav.next { right: 1rem; }
    .image-counter {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      backdrop-filter: blur(4px);
      z-index: 5;
    }
    .verified-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: 6;
      background: var(--verified-gradient);
      color: #fff;
      padding: 0.35rem 0.7rem;
      border-radius: var(--radius-sm);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    .thumbnail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 0.75rem;
    }
    .thumbnail-grid button {
      position: relative;
      aspect-ratio: 1;
      border: 3px solid transparent;
      border-radius: var(--radius-sm);
      padding: 0;
      overflow: hidden;
      cursor: pointer;
      transition: var(--transition);
      opacity: 0.7;
      background: var(--bg-secondary);
    }
    .thumbnail-grid button img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .thumb-video-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
      color: #fff;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.75);
      pointer-events: none;
      background: rgba(15, 23, 42, 0.35);
    }
    .thumbnail-grid button:hover,
    .thumbnail-grid button.active {
      opacity: 1;
      border-color: var(--primary);
      transform: scale(1.05);
    }
    .property-content {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 2rem;
      min-width: 0;
    }
    .property-content .main-content,
    .property-content .sidebar {
      min-width: 0;
    }
    .info-section, .description-section, .amenities-section, .location-section, .analytics-section {
      padding: 2.5rem;
      margin-bottom: 2rem;
      border: 1px solid var(--border);
    }
    .info-section h2, .description-section h2, .amenities-section h2, .location-section h2, .analytics-section h2 {
      font-size: 1.625rem;
      margin-bottom: 2rem;
      padding-bottom: 1.25rem;
      border-bottom: 3px solid var(--border-light);
      font-weight: 800;
      color: var(--text);
      position: relative;
    }
    .info-section h2::after, .description-section h2::after, .amenities-section h2::after, .location-section h2::after, .analytics-section h2::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--primary-gradient);
      border-radius: 2px;
    }
    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }
    .detail-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: var(--bg);
      border-radius: var(--radius);
    }
    .detail-icon {
      font-size: 2rem;
    }
    .detail-label {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }
    .detail-value {
      font-weight: 600;
      color: var(--text);
    }
    .amenities-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .amenity-item {
      padding: 0.5rem 1rem;
      background: var(--bg);
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
    .map-container {
      margin-bottom: 1.5rem;
    }
    .map {
      width: 100%;
      height: 400px;
      border-radius: var(--radius);
      background: var(--bg-secondary);
    }
    .location-details p {
      margin: 0.5rem 0;
      color: var(--text-secondary);
    }
    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .analytics-item {
      text-align: center;
      padding: 1.5rem;
      background: var(--bg);
      border-radius: var(--radius);
    }
    .analytics-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    .analytics-value {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 0.25rem;
    }
    .analytics-label {
      font-size: 0.875rem;
      color: var(--text-muted);
    }
    .sidebar {
      position: sticky;
      top: 100px;
      height: fit-content;
    }
    .contact-card, .quick-info {
      padding: 2rem;
      margin-bottom: 1.5rem;
      border: 2px solid var(--border);
    }
    .contact-card h3, .quick-info h3 {
      margin-bottom: 1.5rem;
      font-size: 1.375rem;
      font-weight: 700;
      color: var(--text);
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--border-light);
    }
    .owner-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-light);
    }
    .owner-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.25rem;
    }
    .owner-name {
      font-weight: 600;
      color: var(--text);
    }
    .owner-role {
      font-size: 0.875rem;
      color: var(--text-muted);
    }
    .quick-facts {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .fact-item {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border-light);
    }
    .fact-label {
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    .fact-value {
      font-weight: 600;
      color: var(--text);
    }
    /* Site visit dialogs: separate backdrop + panel (avoids global .card overflow:hidden clipping). */
    .pv-dialog-root {
      position: fixed;
      inset: 0;
      z-index: 600000;
      pointer-events: none;
    }
    .pv-dialog-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.55);
      pointer-events: auto;
    }
    .pv-dialog-panel {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: min(96vw, 640px);
      max-height: min(92vh, 860px);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      pointer-events: auto;
      background: var(--surface);
      color: var(--text);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-2xl);
      border: 1px solid var(--border);
      z-index: 1;
    }
    .pv-dialog-header {
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-light);
    }
    .pv-dialog-header h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--text);
    }
    .pv-dialog-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-muted);
      padding: 0;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
      line-height: 1;
    }
    .pv-dialog-close:hover {
      background: var(--bg);
      color: var(--text);
    }
    .pv-dialog-body {
      padding: 1.5rem 1.75rem;
    }
    .pv-dialog-body.pv-dialog-form {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 2rem;
    }
    .pv-datetime-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 1.25rem;
      margin-bottom: 0.25rem;
    }
    .pv-date-field label,
    .pv-time-field label {
      display: block;
      margin-bottom: 0.35rem;
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
    .pv-date-field input,
    .pv-time-field input {
      width: 100%;
      box-sizing: border-box;
      min-height: 2.75rem;
      padding: 0.5rem 0.65rem;
      font-size: 1rem;
    }
    @media (max-width: 520px) {
      .pv-datetime-block {
        grid-template-columns: 1fr;
      }
    }
    .pv-dialog-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: flex-end;
      align-items: center;
      margin-top: auto;
      padding-top: 1.25rem;
      flex-shrink: 0;
      border-top: 1px solid var(--border-light);
      background: var(--surface);
    }
    .loading-skeleton, .not-found {
      padding: 4rem 0;
      text-align: center;
    }
    .not-found-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    @media (max-width: 1024px) {
      .property-content {
        grid-template-columns: 1fr;
      }
      .sidebar {
        position: static;
      }
      .property-header {
        flex-direction: column;
      }
      .header-right {
        text-align: left;
      }
      .action-buttons {
        flex-direction: row;
      }
    }
    @media (max-width: 768px) {
      .property-header { gap: 1rem; }
      .property-detail-page .container { padding-left: 1rem; padding-right: 1rem; }
    }
    .zoomable {
      cursor: zoom-in;
    }
    .zoom-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.9);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: zoom-out;
    }
    .zoom-image {
      max-width: 95vw;
      max-height: 95vh;
      object-fit: contain;
      cursor: default;
    }
    .existing-visit-actions, .existing-visit-sidebar {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .visit-status-badge {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      background: var(--status-pending-bg);
      color: var(--status-pending-text);
      width: fit-content;
    }
    .visit-status-badge.assigned { background: var(--success-bg); color: var(--success-text); }
    .visit-otp-box {
      padding: 0.75rem 1rem;
      background: var(--info-bg);
      border: 1px solid rgba(14,165,233,0.25);
      border-radius: var(--radius);
    }
    .otp-label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem; }
    .otp-code { display: block; font-size: 1.5rem; letter-spacing: 0.2em; font-family: monospace; color: var(--primary-dark); margin-bottom: 0.35rem; }
    .otp-hint { display: block; font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.5rem; }
    .visit-pending-msg { font-size: 0.85rem; color: var(--text-muted); margin: 0; }
    .visit-scheduled, .visit-scheduled-text {
      font-size: 0.9rem;
      color: var(--text-muted);
    }
    .zoom-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 48px;
      height: 48px;
      border: none;
      background: rgba(255,255,255,0.2);
      color: white;
      font-size: 2rem;
      line-height: 1;
      border-radius: 50%;
      cursor: pointer;
    }
  `],
})
export class PropertyDetailComponent implements OnInit {
  property: Property | null = null;
  loading = true;
  loadError = '';
  gallerySlides: RenderableGallerySlide[] = [];
  galleryIndex = 0;
  inWatchlist = false;
  /** Avoid global error toast when optional "my visit" is absent (404 legacy) or 204. */
  private readonly silentOptionalVisitCtx = new HttpContext().set(SILENT_NOT_FOUND, true);

  readonly bookVisitOpen = signal(false);
  visitDateOnly = '';
  visitTimeOnly = '';
  visitNotes = '';
  myVisitForProperty: SiteVisitDto | null = null;
  visitOtp = '';
  resendingOtp = false;
  readonly rescheduleVisitOpen = signal(false);
  rescheduleDateOnly = '';
  rescheduleTimeOnly = '';
  rescheduling = false;
  zoomOpen = false;
  zoomUrl = '';

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private config: ConfigService,
    public auth: AuthService,
    private toast: ToastrService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.bookVisitOpen()) {
      this.bookVisitOpen.set(false);
      return;
    }
    if (this.rescheduleVisitOpen()) {
      this.rescheduleVisitOpen.set(false);
      return;
    }
    this.zoomOpen = false;
  }

  closeBookVisitDialog(): void {
    this.bookVisitOpen.set(false);
  }

  closeRescheduleVisitDialog(): void {
    this.rescheduleVisitOpen.set(false);
  }

  imageFullUrl(url: string): string {
    return resolvePropertyImageUrl(url);
  }

  openZoom(url: string) {
    if (!url) return;
    this.zoomUrl = url;
    this.zoomOpen = true;
  }

  closeZoom() {
    this.zoomOpen = false;
  }

  hasActiveSession(): boolean {
    return !!this.auth.user() && !!this.auth.getToken();
  }

  readonly heroPlaceholderUrl = 'https://placehold.co/1200x675?text=Property';

  get currentSlide(): RenderableGallerySlide | null {
    if (!this.gallerySlides.length) return null;
    const i = Math.min(Math.max(0, this.galleryIndex), this.gallerySlides.length - 1);
    return this.gallerySlides[i];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || id === 'new') {
      this.loading = false;
      this.loadError = 'Invalid property URL. Use a valid property link from search or home.';
      return;
    }
    this.loadError = '';
    this.api.get<Property & { data?: Property }>('/properties/' + id, { includeAnalytics: true }).subscribe({
      next: (res) => {
        this.ngZone.run(() => {
          const raw = res && (res as any).data != null ? (res as any).data : res;
          const p = raw && typeof raw === 'object' && (raw.id != null || raw.title != null) ? raw : null;
          this.property = p as Property | null;
          this.loading = false;
          this.loadError = this.property ? '' : 'Invalid response from server.';
          this.rebuildGallery();
          if (this.hasActiveSession() && this.property) {
            this.api.get<{ inWatchlist: boolean }>('/properties/' + id + '/watchlist').subscribe({
              next: (r) => {
                this.inWatchlist = r.inWatchlist;
                this.cdr.detectChanges();
              },
              error: () => {},
            });
            this.loadMyVisitForProperty();
          }
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.loading = false;
          this.loadError = err.status === 401
            ? 'Please log in again to view this property.'
            : (err.error?.message || 'Failed to load property.');
          this.cdr.detectChanges();
        });
      },
    });
  }

  /** Load current user's active site visit for this property so we show Reschedule instead of Book when one exists. */
  loadMyVisitForProperty() {
    if (!this.property?.id || !this.hasActiveSession()) return;
    this.api
      .get<SiteVisitDto | null>('/sitevisits/my/for-property/' + this.property.id, undefined, this.silentOptionalVisitCtx)
      .subscribe({
        next: (v) => {
          this.myVisitForProperty = v ?? null;
          if (v?.status === 'ASSIGNED') this.loadVisitOtp(v.id);
          else this.visitOtp = '';
          this.cdr.detectChanges();
        },
        error: () => {
          this.myVisitForProperty = null;
          this.cdr.detectChanges();
        },
      });
  }

  rebuildGallery(): void {
    this.gallerySlides = buildGallerySlides(this.property?.images).map((slide) =>
      this.toRenderableSlide(slide),
    );
    this.galleryIndex = 0;
  }

  private toRenderableSlide(slide: GallerySlide): RenderableGallerySlide {
    const thumbUrl = slide.kind === 'photo'
      ? this.imageFullUrl(slide.sourceUrl)
      : (resolveVideoCardPosterUrl(slide.sourceUrl)
        || 'https://placehold.co/200x200/0f172a/94a3b8?text=%E2%96%B6');
    return {
      ...slide,
      thumbUrl,
      safeEmbedUrl: slide.kind === 'video-embed' && slide.embedPlayUrl
        ? this.sanitizer.bypassSecurityTrustResourceUrl(slide.embedPlayUrl)
        : undefined,
    };
  }

  prevGallery(): void {
    if (this.gallerySlides.length < 2) return;
    this.galleryIndex = (this.galleryIndex - 1 + this.gallerySlides.length) % this.gallerySlides.length;
  }

  nextGallery(): void {
    if (this.gallerySlides.length < 2) return;
    this.galleryIndex = (this.galleryIndex + 1) % this.gallerySlides.length;
  }

  private pad2(n: number): string {
    return String(n).padStart(2, '0');
  }

  private defaultDateTimeParts(d = new Date()): { ymd: string; hm: string } {
    return {
      ymd: `${d.getFullYear()}-${this.pad2(d.getMonth() + 1)}-${this.pad2(d.getDate())}`,
      hm: `${this.pad2(d.getHours())}:${this.pad2(d.getMinutes())}`,
    };
  }

  private combineLocalDateTimeToIso(dateOnly: string, timeOnly: string): string | null {
    const d = (dateOnly || '').trim();
    const t = (timeOnly || '').trim();
    if (!d || !t) return null;
    const [y, mo, day] = d.split('-').map((x) => parseInt(x, 10));
    const timeParts = t.split(':');
    const h = parseInt(timeParts[0] || '0', 10);
    const mi = parseInt(timeParts[1] || '0', 10);
    if (!y || !mo || !day || Number.isNaN(h) || Number.isNaN(mi)) return null;
    const dt = new Date(y, mo - 1, day, h, mi, 0, 0);
    if (Number.isNaN(dt.getTime())) return null;
    return dt.toISOString();
  }

  get amenitiesList(): string[] {
    if (!this.property?.amenities) return [];
    return this.property.amenities.split(',').map(a => a.trim()).filter(a => a);
  }

  bookVisit() {
    if (!this.hasActiveSession()) {
      this.toast.info('Please login again to book a visit.');
      return;
    }
    if (this.myVisitForProperty) {
      this.toast.info('You already have a site visit for this property. Use Reschedule to change the date.');
      return;
    }
    const { ymd, hm } = this.defaultDateTimeParts();
    this.visitDateOnly = ymd;
    this.visitTimeOnly = hm;
    this.ngZone.run(() => {
      this.bookVisitOpen.set(true);
      this.cdr.detectChanges();
    });
  }

  submitVisit() {
    if (!this.property) return;
    if (this.myVisitForProperty) {
      this.toast.info('You already have an active site visit request for this property.');
      this.bookVisitOpen.set(false);
      return;
    }
    const scheduledAt = this.combineLocalDateTimeToIso(this.visitDateOnly, this.visitTimeOnly);
    if (!scheduledAt) {
      this.toast.warning('Please choose a valid date and time.');
      return;
    }
    this.api.post<SiteVisitDto>('/sitevisits', { propertyId: this.property.id, scheduledAt, userNotes: this.visitNotes }).subscribe({
      next: (v) => {
        this.toast.success('Visit requested! An admin will assign an agent — you will get an OTP via SMS when assigned.');
        this.bookVisitOpen.set(false);
        this.visitDateOnly = '';
        this.visitTimeOnly = '';
        this.visitNotes = '';
        this.myVisitForProperty = v;
      },
      error: (e) => {
        if (e?.status === 401) {
          this.toast.info('Session expired. Please login again.');
          this.router.navigate(['/login']);
          return;
        }
        this.toast.error(e.error?.message || 'Failed to book visit');
      },
    });
  }

  openReschedule() {
    if (!this.myVisitForProperty) return;
    const { ymd, hm } = this.defaultDateTimeParts(new Date(this.myVisitForProperty.scheduledAt));
    this.rescheduleDateOnly = ymd;
    this.rescheduleTimeOnly = hm;
    this.ngZone.run(() => {
      this.rescheduleVisitOpen.set(true);
      this.cdr.detectChanges();
    });
  }

  submitReschedule() {
    if (!this.myVisitForProperty) return;
    const scheduledAt = this.combineLocalDateTimeToIso(this.rescheduleDateOnly, this.rescheduleTimeOnly);
    if (!scheduledAt) {
      this.toast.warning('Please choose a valid date and time.');
      return;
    }
    this.rescheduling = true;
    this.api.put<SiteVisitDto>(`/sitevisits/${this.myVisitForProperty.id}/reschedule`, { scheduledAt }).subscribe({
      next: (v) => {
        this.myVisitForProperty = v;
        this.rescheduleVisitOpen.set(false);
        this.rescheduleDateOnly = '';
        this.rescheduleTimeOnly = '';
        this.rescheduling = false;
        this.toast.success('Visit rescheduled successfully.');
      },
      error: (e) => {
        this.rescheduling = false;
        if (e?.status === 401) {
          this.toast.info('Session expired. Please login again.');
          this.router.navigate(['/login']);
          return;
        }
        this.toast.error(e.error?.message || 'Failed to reschedule');
      },
    });
  }

  toggleWatchlist() {
    if (!this.property || !this.hasActiveSession()) return;
    if (this.inWatchlist) {
      this.api.delete('/properties/' + this.property.id + '/watchlist').subscribe({
        next: () => {
          this.inWatchlist = false;
          this.toast.success('Removed from likes');
        },
      });
    } else {
      this.api.post('/properties/' + this.property.id + '/watchlist', {}).subscribe({
        next: () => {
          this.inWatchlist = true;
          this.toast.success('Added to likes');
        },
      });
    }
  }

  visitStatusLabel(): string {
    if (!this.myVisitForProperty) return '';
    return this.myVisitForProperty.status === 'ASSIGNED' ? 'Agent assigned' : 'Pending assignment';
  }

  loadVisitOtp(visitId: number) {
    this.api.get<{ otp: string }>(`/sitevisits/${visitId}/otp`).subscribe({
      next: (res) => { this.visitOtp = res.otp; this.cdr.detectChanges(); },
      error: () => { this.visitOtp = ''; },
    });
  }

  resendVisitOtp() {
    if (!this.myVisitForProperty) return;
    this.resendingOtp = true;
    this.api.post<{ otp: string; message?: string }>(`/sitevisits/${this.myVisitForProperty.id}/resend-otp`, {}).subscribe({
      next: (res) => {
        this.visitOtp = res.otp;
        this.resendingOtp = false;
        this.toast.success(res.message || 'OTP resent to your mobile');
        this.cdr.detectChanges();
      },
      error: (e) => {
        this.resendingOtp = false;
        this.toast.error(e.error?.message || 'Failed to resend OTP');
      },
    });
  }
}
