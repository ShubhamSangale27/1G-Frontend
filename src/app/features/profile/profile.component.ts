import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../core/services/auth.service';
import { ApiService } from '../../core/services/api.service';
import { ConfigService } from '../../core/services/config.service';
import { ToastrService } from 'ngx-toastr';
import { extractHttpErrorMessage } from '../../core/utils/http-error-message.util';
import { resolvePropertyImageUrl } from '../../core/utils/image-url.util';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  template: `
    <div class="profile-page">
      <div class="container">
        <div class="profile-header">
          <div>
            <h1>My Profile</h1>
            <p>Update your photo, name, and email. Mobile number cannot be changed here.</p>
          </div>
          <a routerLink="/dashboard" class="btn btn-outline btn-sm">← Dashboard</a>
        </div>

        <div class="profile-grid">
          <div class="card profile-card">
            <h2>Profile details</h2>
            <form [formGroup]="profileForm" (ngSubmit)="saveProfile()">
              <div class="avatar-section">
                <div class="avatar-wrap">
                  @if (profileImagePreview()) {
                    <img [src]="profileImagePreview()" alt="Profile" class="avatar-img" />
                  } @else {
                    <div class="avatar-placeholder">{{ initials() }}</div>
                  }
                </div>
                <div class="avatar-actions">
                  <label class="btn btn-outline btn-sm upload-btn">
                    {{ uploadingPhoto() ? 'Uploading…' : 'Change photo' }}
                    <input type="file" accept="image/*" (change)="onPhotoSelected($event)" hidden [disabled]="uploadingPhoto()" />
                  </label>
                  @if (profileImagePreview()) {
                    <button type="button" class="btn btn-outline btn-sm" (click)="removePhoto()">Remove</button>
                  }
                </div>
              </div>

              <div class="form-group">
                <label>Full name</label>
                <input type="text" formControlName="fullName" />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" formControlName="email" />
                @if (profileForm.get('email')?.invalid && profileForm.get('email')?.touched) {
                  <span class="error">Valid email required</span>
                }
              </div>
              <div class="form-group">
                <label>Mobile (read-only)</label>
                <input type="text" formControlName="mobile" readonly class="readonly" />
                <span class="hint">Contact support to change your mobile number.</span>
              </div>

              <button type="submit" class="btn btn-primary" [disabled]="profileForm.invalid || savingProfile()">
                {{ savingProfile() ? 'Saving…' : 'Save profile' }}
              </button>
            </form>
          </div>

          <div class="card profile-card">
            <h2>Change password</h2>
            <p class="section-desc">We'll send an OTP to your registered mobile to confirm the change.</p>

            @if (passwordInlineError()) {
              <div class="inline-error" role="alert">{{ passwordInlineError() }}</div>
            }

            <div class="otp-row">
              <button type="button" class="btn btn-outline btn-sm" (click)="sendPasswordOtp()" [disabled]="sendingPasswordOtp() || !canResendPasswordOtp()">
                {{ sendingPasswordOtp() ? 'Sending…' : 'Send OTP' }}
              </button>
              @if (!canResendPasswordOtp() && passwordOtpCountdown() > 0) {
                <span class="hint">Resend in {{ formatCountdown(passwordOtpCountdown()) }}</span>
              }
              @if (passwordOtpMaskedMobile()) {
                <span class="hint">Sent to mobile ending {{ passwordOtpMaskedMobile() }}</span>
              }
            </div>

            <form [formGroup]="passwordForm" (ngSubmit)="changePassword()">
              <div class="form-group">
                <label>OTP</label>
                <input type="text" formControlName="otp" maxlength="6" inputmode="numeric" placeholder="6-digit OTP" />
              </div>
              <div class="form-group">
                <label>New password</label>
                <input type="password" formControlName="newPassword" placeholder="At least 6 characters" />
              </div>
              <div class="form-group">
                <label>Confirm new password</label>
                <input type="password" formControlName="confirmPassword" />
                @if (passwordForm.hasError('passwordMismatch') && passwordForm.get('confirmPassword')?.touched) {
                  <span class="error">Passwords do not match</span>
                }
              </div>
              <button type="submit" class="btn btn-primary" [disabled]="passwordForm.invalid || changingPassword()">
                {{ changingPassword() ? 'Updating…' : 'Update password' }}
              </button>
            </form>
          </div>

          @if (auth.getRole() !== 'ADMIN') {
            <div class="card profile-card danger-card">
              <h2>Delete account</h2>
              <p class="section-desc">Permanently delete your account and all associated data. This action cannot be undone.</p>

              @if (deleteInlineError()) {
                <div class="inline-error" role="alert">{{ deleteInlineError() }}</div>
              }

              <form [formGroup]="deleteForm" (ngSubmit)="confirmDeleteAccount()">
                <div class="form-group">
                  <label>Confirm your password</label>
                  <input type="password" formControlName="password" placeholder="Enter your password" />
                </div>
                <button type="submit" class="btn btn-danger" [disabled]="deleteForm.invalid || deletingAccount()">
                  {{ deletingAccount() ? 'Deleting…' : 'Delete my account' }}
                </button>
              </form>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-page { padding: 2rem 0 4rem; min-height: calc(100vh - 80px); background: var(--bg); }
    .profile-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
    .profile-header h1 { margin: 0 0 0.35rem; font-size: 2rem; }
    .profile-header p { margin: 0; color: var(--text-muted); }
    .profile-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    @media (min-width: 900px) { .profile-grid { grid-template-columns: 1.2fr 1fr; } }
    .profile-card { padding: 1.75rem; }
    .danger-card { border: 1px solid rgba(239, 68, 68, 0.35); }
    .danger-card h2 { color: var(--danger-text-strong, #b91c1c); }
    .btn-danger { background: var(--danger, #dc2626); color: white; border: none; }
    .btn-danger:hover:not(:disabled) { filter: brightness(0.95); }
    .profile-card h2 { margin: 0 0 1.25rem; font-size: 1.25rem; }
    .section-desc { color: var(--text-muted); margin: -0.75rem 0 1rem; font-size: 0.9375rem; }
    .avatar-section { display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .avatar-wrap { width: 96px; height: 96px; border-radius: 50%; overflow: hidden; border: 3px solid var(--border); background: var(--bg); flex-shrink: 0; }
    .avatar-img { width: 100%; height: 100%; object-fit: cover; }
    .avatar-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; color: white; background: var(--primary-gradient); }
    .avatar-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .upload-btn { cursor: pointer; margin: 0; }
    .readonly { background: var(--bg); color: var(--text-muted); }
    .hint { display: block; font-size: 0.8125rem; color: var(--text-muted); margin-top: 0.35rem; }
    .inline-error { margin-bottom: 1rem; padding: 0.75rem 1rem; border-radius: var(--radius); background: var(--danger-bg); color: var(--danger-text-strong); font-size: 0.875rem; border: 1px solid rgba(239, 68, 68, 0.35); }
    .otp-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1rem; }
  `],
})
export class ProfileComponent implements OnInit, OnDestroy {
  readonly savingProfile = signal(false);
  readonly uploadingPhoto = signal(false);
  readonly sendingPasswordOtp = signal(false);
  readonly changingPassword = signal(false);
  readonly deletingAccount = signal(false);
  readonly profileImagePreview = signal<string | null>(null);
  readonly passwordInlineError = signal<string | null>(null);
  readonly deleteInlineError = signal<string | null>(null);
  readonly passwordOtpMaskedMobile = signal('');
  readonly passwordOtpCountdown = signal(0);
  readonly canResendPasswordOtp = signal(true);

  private profileImageUrl: string | null = null;
  private countdownTimer: ReturnType<typeof setInterval> | null = null;

  profileForm = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: [{ value: '', disabled: true }],
  });

  passwordForm = this.fb.nonNullable.group(
    {
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: (group: AbstractControl): ValidationErrors | null => {
      const p = group.get('newPassword')?.value;
      const c = group.get('confirmPassword')?.value;
      return p === c ? null : { passwordMismatch: true };
    }},
  );

  deleteForm = this.fb.nonNullable.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private api: ApiService,
    private config: ConfigService,
    private toast: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.auth.getProfile().subscribe({
      next: (user) => this.applyUser(user),
      error: () => {
        const u = this.auth.user();
        if (u) this.applyUser(u);
      },
    });
  }

  ngOnDestroy(): void {
    this.clearCountdown();
  }

  initials(): string {
    const name = this.profileForm.getRawValue().fullName || this.auth.user()?.fullName || '?';
    return name.charAt(0).toUpperCase();
  }

  applyUser(user: User) {
    this.profileForm.patchValue({
      fullName: user.fullName,
      email: user.email,
      mobile: user.mobile || '',
    });
    this.profileImageUrl = user.profileImageUrl || null;
    this.profileImagePreview.set(
      user.profileImageUrl ? resolvePropertyImageUrl(user.profileImageUrl, this.config.apiUrl) : null,
    );
    this.auth.updateLocalUser(user);
  }

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.toast.error('Please choose an image file');
      return;
    }
    this.uploadingPhoto.set(true);
    this.api.uploadFile('/upload', file).subscribe({
      next: (res) => {
        this.uploadingPhoto.set(false);
        this.profileImageUrl = res.url;
        this.profileImagePreview.set(resolvePropertyImageUrl(res.url, this.config.apiUrl));
        this.toast.success('Photo uploaded. Save profile to apply.');
        input.value = '';
      },
      error: (err: unknown) => {
        this.uploadingPhoto.set(false);
        const msg = err instanceof HttpErrorResponse ? extractHttpErrorMessage(err) : 'Upload failed';
        this.toast.error(msg);
        input.value = '';
      },
    });
  }

  removePhoto() {
    this.profileImageUrl = null;
    this.profileImagePreview.set(null);
  }

  saveProfile() {
    if (this.profileForm.invalid) return;
    this.savingProfile.set(true);
    const { fullName, email } = this.profileForm.getRawValue();
    this.auth.updateProfile({ fullName, email, profileImageUrl: this.profileImageUrl }).subscribe({
      next: (user) => {
        this.savingProfile.set(false);
        this.applyUser(user);
        this.toast.success('Profile updated');
      },
      error: (err: unknown) => {
        this.savingProfile.set(false);
        const msg = err instanceof HttpErrorResponse ? extractHttpErrorMessage(err) : 'Failed to save profile';
        this.toast.error(msg);
      },
    });
  }

  sendPasswordOtp() {
    this.passwordInlineError.set(null);
    this.sendingPasswordOtp.set(true);
    this.auth.sendChangePasswordOtp().subscribe({
      next: (res) => {
        this.sendingPasswordOtp.set(false);
        this.passwordOtpMaskedMobile.set(res.maskedMobile || '');
        this.startResendCooldown(res.resendAvailableAt);
        this.toast.success(res.message || 'OTP sent');
      },
      error: (err: unknown) => {
        this.sendingPasswordOtp.set(false);
        const msg = err instanceof HttpErrorResponse ? extractHttpErrorMessage(err) : 'Failed to send OTP';
        this.passwordInlineError.set(msg);
        this.toast.error(msg);
      },
    });
  }

  changePassword() {
    if (this.passwordForm.invalid) return;
    this.passwordInlineError.set(null);
    this.changingPassword.set(true);
    const { otp, newPassword } = this.passwordForm.getRawValue();
    this.auth.changePassword(otp, newPassword).subscribe({
      next: (res) => {
        this.changingPassword.set(false);
        this.passwordForm.reset();
        this.toast.success(res.message || 'Password changed. Please log in again.');
        this.auth.logout();
      },
      error: (err: unknown) => {
        this.changingPassword.set(false);
        const msg = err instanceof HttpErrorResponse ? extractHttpErrorMessage(err) : 'Password change failed';
        this.passwordInlineError.set(msg);
        this.toast.error(msg);
      },
    });
  }

  confirmDeleteAccount() {
    if (this.deleteForm.invalid) return;
    const { password } = this.deleteForm.getRawValue();
    if (!confirm('Permanently delete your account? This cannot be undone.')) return;

    this.deleteInlineError.set(null);
    this.deletingAccount.set(true);
    this.auth.deleteAccount(password).subscribe({
      next: () => {
        this.deletingAccount.set(false);
        this.toast.success('Your account has been deleted.');
        this.auth.clearSession();
        this.router.navigate(['/']);
      },
      error: (err: unknown) => {
        this.deletingAccount.set(false);
        const msg = err instanceof HttpErrorResponse ? extractHttpErrorMessage(err) : 'Account deletion failed';
        this.deleteInlineError.set(msg);
        this.toast.error(msg);
      },
    });
  }

  formatCountdown(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  private startResendCooldown(resendAvailableAt?: string) {
    this.clearCountdown();
    if (!resendAvailableAt) {
      this.canResendPasswordOtp.set(true);
      return;
    }
    const target = new Date(resendAvailableAt).getTime();
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000));
      this.passwordOtpCountdown.set(remaining);
      this.canResendPasswordOtp.set(remaining <= 0);
      if (remaining <= 0) this.clearCountdown();
    };
    tick();
    this.countdownTimer = setInterval(tick, 1000);
  }

  private clearCountdown() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }
}
