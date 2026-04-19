import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { ConfigService } from '../../core/services/config.service';
import { Property } from '../../core/models/property.model';
import { ToastrService } from 'ngx-toastr';
import { getStateNames, getCitiesForState } from '../../core/data/indian-locations';
import { PropertyMapComponent } from '../../shared/property-map/property-map.component';
import {
  resolvePropertyImageUrl,
  getPropertyVideoPlayerKind,
  resolveVideoEmbedUrl,
  resolveNativeVideoUrl,
  type PropertyVideoPlayerKind,
} from '../../core/utils/image-url.util';

@Component({
  selector: 'app-property-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PropertyMapComponent],
  template: `
    <div class="property-form-page">
      <div class="container">
        <div class="form-header">
          <h1>{{ isEdit ? 'Edit Property' : 'List Your Property' }}</h1>
          <p>{{ isEdit ? 'Update your property details' : 'Reach thousands of potential buyers on 1Guntha' }}</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="property-form card">
          <div class="form-section">
            <h3>Basic Information</h3>
            <div class="form-row">
              <div class="form-group">
                <label>Property Title *</label>
                <input type="text" formControlName="title" placeholder="e.g., Beautiful 3BHK Apartment in Prime Location" />
                <span class="error" *ngIf="form.get('title')?.invalid && form.get('title')?.touched">Title is required</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Description</label>
                <textarea formControlName="description" rows="5" placeholder="Describe your property in detail..."></textarea>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Listing Type *</label>
                <select formControlName="listingType">
                  <option value="">Select</option>
                  <option value="SALE">For Sale</option>
                  <option value="RENT">For Rent</option>
                </select>
                <span class="error" *ngIf="form.get('listingType')?.invalid && form.get('listingType')?.touched">Required</span>
              </div>
              <div class="form-group">
                <label>Property Type *</label>
                <select formControlName="propertyType">
                  <option value="">Select</option>
                  <option value="HOUSE">House</option>
                  <option value="APARTMENT">Apartment</option>
                  <option value="LAND">Land</option>
                  <option value="COMMERCIAL">Commercial</option>
                </select>
                <span class="error" *ngIf="form.get('propertyType')?.invalid && form.get('propertyType')?.touched">Required</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Price (₹) *</label>
                <input type="number" formControlName="price" placeholder="Enter price" min="0" />
                <span class="error" *ngIf="form.get('price')?.invalid && form.get('price')?.touched">Valid price required</span>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3>Location Details</h3>
            <div class="form-row">
              <div class="form-group">
                <label>Address *</label>
                <input type="text" formControlName="address" placeholder="Street address" />
                <span class="error" *ngIf="form.get('address')?.invalid && form.get('address')?.touched">Address is required</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Locality</label>
                <input type="text" formControlName="locality" placeholder="Locality/Area" />
              </div>
              <div class="form-group">
                <label>State *</label>
                <select formControlName="state" (change)="onStateChange()">
                  <option value="">Select State / UT</option>
                  <option *ngFor="let s of stateNames" [value]="s">{{ s }}</option>
                </select>
                <span class="error" *ngIf="form.get('state')?.invalid && form.get('state')?.touched">State is required</span>
              </div>
              <div class="form-group">
                <label>City *</label>
                <select formControlName="city">
                  <option value="">Select City</option>
                  <option *ngFor="let c of citiesForState" [value]="c">{{ c }}</option>
                </select>
                <span class="error" *ngIf="form.get('city')?.invalid && form.get('city')?.touched">City is required</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Pincode</label>
                <input type="text" formControlName="pincode" placeholder="Pincode" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group full-width">
                <label>Site location (drop a pin on the map)</label>
                <app-property-map
                  mode="pick"
                  [latitude]="form.get('latitude')?.value"
                  [longitude]="form.get('longitude')?.value"
                  (locationChange)="onMapLocation($event)"
                ></app-property-map>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Latitude (Optional)</label>
                <input type="number" formControlName="latitude" placeholder="e.g., 19.0760" step="any" />
              </div>
              <div class="form-group">
                <label>Longitude (Optional)</label>
                <input type="number" formControlName="longitude" placeholder="e.g., 72.8777" step="any" />
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3>Property Specifications</h3>
            <div class="form-row">
              <div class="form-group">
                <label>Bedrooms</label>
                <input type="number" formControlName="bedrooms" placeholder="Number of bedrooms" min="0" />
              </div>
              <div class="form-group">
                <label>Bathrooms</label>
                <input type="number" formControlName="bathrooms" placeholder="Number of bathrooms" min="0" />
              </div>
              <div class="form-group">
                <label>Area (sq.ft)</label>
                <input type="number" formControlName="areaSqft" placeholder="Total area" min="0" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Amenities (comma-separated)</label>
                <input type="text" formControlName="amenities" placeholder="e.g., Parking, Gym, Swimming Pool, Security" />
                <small>Separate multiple amenities with commas</small>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3>Property Media (Images/Videos)</h3>
            <div class="images-section">
              <div class="add-url-row">
                <div class="form-group add-url-input">
                  <label>Media URL</label>
                  <input type="url" [(ngModel)]="newMediaUrl" [ngModelOptions]="{standalone: true}" placeholder="https://example.com/media.jpg or .mp4" (keydown.enter)="addMediaByUrl(); $event.preventDefault()" />
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <label>Type</label>
                  <select [(ngModel)]="newMediaType" [ngModelOptions]="{standalone: true}">
                    <option value="IMAGE">Image</option>
                    <option value="VIDEO">Video</option>
                  </select>
                </div>
                <button type="button" class="btn btn-primary add-url-btn" (click)="addMediaByUrl()">Add URL</button>
              </div>
              <small class="images-hint">Paste image or video URLs and click Add URL. YouTube (watch or youtu.be) and Google Drive file links play in the app. Drive: use a file link and set sharing to &quot;Anyone with the link&quot;. Direct .mp4/.webm URLs use the built-in player.</small>
              <div class="image-preview-row" *ngFor="let media of mediaItems; let i = index">
                <img *ngIf="media.mediaType === 'IMAGE'" [src]="imagePreviewUrl(media.imageUrl)" alt="Preview" class="image-preview" (error)="onImageError($event)" />
                <div *ngIf="media.mediaType === 'VIDEO'" class="video-preview-wrap">
                  <iframe
                    *ngIf="videoPlayerKind(media.imageUrl) === 'embed'"
                    [src]="safeVideoEmbedUrl(media.imageUrl)"
                    class="video-preview"
                    title="Video preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    referrerpolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  ></iframe>
                  <video
                    *ngIf="videoPlayerKind(media.imageUrl) === 'native'"
                    [src]="nativeVideoPreviewUrl(media.imageUrl)"
                    class="video-preview"
                    controls
                    playsinline
                    preload="metadata"
                  ></video>
                </div>
                <div class="image-actions">
                  <span class="badge badge-type-inline">{{ media.mediaType }}</span>
                  <button type="button" class="btn btn-outline btn-sm" (click)="removeMedia(i)">Remove</button>
                </div>
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn btn-outline" (click)="cancel()">Cancel</button>
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid || submitting">
              {{ submitting ? 'Saving...' : (isEdit ? 'Update Property' : 'List Property') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .property-form-page { padding: 2rem 0 4rem; }
    .form-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .form-header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: var(--text);
      font-weight: 800;
    }
    .form-header p {
      color: var(--text-muted);
      font-size: 1.125rem;
    }
    .property-form {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }
    .form-section {
      margin-bottom: 2.5rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid var(--border-light);
    }
    .form-section:last-of-type {
      border-bottom: none;
    }
    .form-section h3 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      color: var(--text);
    }
    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-group.full-width { grid-column: 1 / -1; }
    .form-group label {
      display: block;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text);
      font-size: 0.875rem;
    }
    .form-group input, .form-group select, .form-group textarea {
      width: 100%;
      min-height: 2.75rem;
      padding: 0.75rem 1rem;
      border: 2px solid var(--border);
      border-radius: var(--radius-sm);
      font-size: 1rem;
      font-family: inherit;
      transition: var(--transition);
      box-sizing: border-box;
      display: block;
    }
    .form-group textarea {
      min-height: auto;
    }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);
    }
    .form-group small {
      display: block;
      margin-top: 0.25rem;
      color: var(--text-muted);
      font-size: 0.75rem;
    }
    .error {
      display: block;
      color: var(--danger);
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    .images-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .add-url-row {
      display: flex;
      gap: 0.75rem;
      align-items: flex-end;
      flex-wrap: wrap;
    }
    .add-url-row .add-url-input {
      flex: 1;
      min-width: 200px;
      margin-bottom: 0;
    }
    .add-url-row .add-url-btn {
      flex-shrink: 0;
    }
    .images-hint {
      margin-bottom: 0.25rem;
    }
    .image-input {
      display: flex;
      gap: 0.5rem;
      align-items: flex-end;
    }
    .image-input input {
      flex: 1;
    }
    .file-input.hidden {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
    }
    .image-preview-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem;
      border: 2px solid var(--border);
      border-radius: var(--radius-sm);
      margin-bottom: 0.75rem;
    }
    .image-preview {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: var(--radius-sm);
    }
    .preview-placeholder {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg);
      color: var(--text-muted);
      font-size: 0.75rem;
      border-radius: var(--radius-sm);
    }
    .image-actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .video-preview-wrap {
      width: 200px;
      max-width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: var(--radius-sm);
      overflow: hidden;
      background: #0f172a;
      position: relative;
    }
    .video-preview {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
      object-fit: contain;
    }
    .badge-type-inline {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 9999px;
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
    }
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 2px solid var(--border-light);
    }
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }
      .form-actions {
        flex-direction: column;
      }
    }
  `],
})
export class PropertyFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  propertyId: number | null = null;
  submitting = false;
  mediaItems: { imageUrl: string; mediaType: 'IMAGE' | 'VIDEO' }[] = [];
  newMediaUrl = '';
  newMediaType: 'IMAGE' | 'VIDEO' = 'IMAGE';
  stateNames = getStateNames();
  citiesForState: string[] = [];

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private config: ConfigService,
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private sanitizer: DomSanitizer
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      listingType: ['', Validators.required],
      propertyType: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      address: ['', Validators.required],
      locality: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [''],
      latitude: [null],
      longitude: [null],
      bedrooms: [null],
      bathrooms: [null],
      areaSqft: [null],
      amenities: [''],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.propertyId = +id;
      this.loadProperty();
    } else {
      this.mediaItems = [];
    }
    this.updateCitiesForState();
  }

  onStateChange() {
    this.form.patchValue({ city: '' });
    this.updateCitiesForState();
  }

  private updateCitiesForState() {
    const state = this.form.get('state')?.value;
    this.citiesForState = state ? getCitiesForState(state) : [];
  }

  onMapLocation(e: { lat: number; lng: number }) {
    this.form.patchValue({ latitude: e.lat, longitude: e.lng });
  }

  loadProperty() {
    if (!this.propertyId) return;
    this.api.get<Property>('/properties/' + this.propertyId).subscribe({
      next: (p) => {
        this.form.patchValue({
          title: p.title,
          description: p.description || '',
          listingType: p.listingType,
          propertyType: p.propertyType,
          price: p.price,
          address: p.address,
          locality: p.locality || '',
          city: p.city || '',
          state: p.state || '',
          pincode: p.pincode || '',
          latitude: p.latitude || null,
          longitude: p.longitude || null,
          bedrooms: p.bedrooms || null,
          bathrooms: p.bathrooms || null,
          areaSqft: p.areaSqft || null,
          amenities: p.amenities || '',
        });
        this.updateCitiesForState();
        if (p.images && p.images.length) {
          this.mediaItems = p.images.map(img => ({
            imageUrl: img.imageUrl,
            mediaType: img.mediaType || 'IMAGE',
          }));
        } else {
          this.mediaItems = [];
        }
      },
      error: () => this.toast.error('Failed to load property'),
    });
  }

  imagePreviewUrl(url: string): string {
    return resolvePropertyImageUrl(url, this.config.apiUrl);
  }

  videoPlayerKind(url: string): PropertyVideoPlayerKind {
    return getPropertyVideoPlayerKind(url);
  }

  safeVideoEmbedUrl(url: string): SafeResourceUrl {
    const embed = resolveVideoEmbedUrl(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(embed || 'about:blank');
  }

  nativeVideoPreviewUrl(url: string): string {
    return resolveNativeVideoUrl(url, this.config.apiUrl);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/160x120?text=Image+unavailable';
    img.onerror = null;
  }

  addMediaByUrl() {
    const url = (this.newMediaUrl || '').trim();
    if (!url) {
      this.toast.warning('Enter a media URL');
      return;
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      this.toast.warning('URL must start with http:// or https://');
      return;
    }
    this.mediaItems.push({
      imageUrl: url,
      mediaType: this.newMediaType,
    });
    this.newMediaUrl = '';
    this.toast.success(`${this.newMediaType === 'VIDEO' ? 'Video' : 'Image'} URL added`);
  }

  removeMedia(index: number) {
    this.mediaItems.splice(index, 1);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const formValue = this.form.value;
    const images = this.mediaItems
      .filter(m => (m.imageUrl || '').trim())
      .map((m, idx) => ({
        imageUrl: (m.imageUrl || '').trim(),
        mediaType: m.mediaType,
        displayOrder: idx,
      }));

    const payload = {
      ...formValue,
      images,
    };

    const isAdmin = this.auth.getRole() === 'ADMIN';
    const obs = this.isEdit
      ? (isAdmin ? this.api.put<Property>('/admin/properties/' + this.propertyId, payload) : this.api.put<Property>('/properties/' + this.propertyId, payload))
      : (isAdmin ? this.api.post<Property>('/admin/properties', payload) : this.api.post<Property>('/properties', payload));

    obs.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Property updated successfully' : 'Property listed successfully! It will be reviewed by admin.');
        this.router.navigate(['/my-properties']);
      },
      error: (e) => {
        this.toast.error(e.error?.message || 'Failed to save property');
        this.submitting = false;
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/my-properties']);
  }
}
