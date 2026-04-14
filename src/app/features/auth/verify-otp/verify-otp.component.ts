import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { AuthService, AuthResponse } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

const PENDING_VERIFY_KEY = 'pendingVerification';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  template: `
    <div class="auth-page">
      <div class="auth-background"></div>
      <div class="auth-container">
        <div class="card auth-card">
          <div class="auth-header">
            <div class="auth-logo">📱</div>
            <h1>Verify your mobile</h1>
            <p>Enter the 6-digit OTP sent to your mobile to complete registration</p>
          </div>
          @if (email && mobile) {
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label>Email</label>
                <input type="text" [value]="email" readonly class="readonly" />
              </div>
              <div class="form-group">
                <label>Mobile</label>
                <input type="text" [value]="mobile" readonly class="readonly" />
              </div>
              <div class="form-group">
                <label>OTP (6 digits)</label>
                <input type="text" formControlName="mobileOtp" placeholder="Enter OTP from SMS" maxlength="6" inputmode="numeric" />
                @if (form.get('mobileOtp')?.invalid && form.get('mobileOtp')?.touched) {
                  <span class="error">Enter 6-digit OTP</span>
                }
              </div>
              <p class="hint">We sent an OTP to your mobile via MSG91. Enter it above to verify.</p>
              <div class="resend-row">
                <button type="button" class="btn btn-outline btn-sm" (click)="resendOtp()" [disabled]="!canResend || resending">
                  {{ resending ? 'Resending...' : 'Resend OTP' }}
                </button>
                <span class="resend-hint" *ngIf="!canResend && resendCountdownSeconds > 0">
                  Resend available in {{ formatCountdown(resendCountdownSeconds) }}
                </span>
                <span class="resend-hint" *ngIf="resendAttemptsRemaining <= 0">
                  Daily resend limit reached. Try again after 24 hours.
                </span>
              </div>
              <p class="hint">Resends used today: {{ resendAttemptsUsed }} / {{ maxResendAttemptsPerDay }}</p>
              <button type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="form.invalid || submitting">
                {{ submitting ? 'Verifying...' : 'Verify & Continue' }}
              </button>
            </form>
          } @else {
            <p class="message">No pending verification found. Please <a routerLink="/signup">sign up</a> first.</p>
          }
          <div class="auth-footer">
            <p><a routerLink="/login">Back to Login</a></p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; position: relative; background: var(--bg); }
    .auth-background { position: absolute; inset: 0; background: var(--primary-gradient); opacity: 0.05; z-index: 0; }
    .auth-container { position: relative; z-index: 1; width: 100%; max-width: 450px; }
    .auth-card { padding: 3rem; border: 2px solid var(--border); box-shadow: var(--shadow-2xl); }
    .auth-header { text-align: center; margin-bottom: 2rem; }
    .auth-logo { font-size: 3rem; margin-bottom: 0.75rem; }
    .auth-header h1 { font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text); }
    .auth-header p { color: var(--text-muted); font-size: 0.9375rem; margin: 0; }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem; }
    .form-group input { width: 100%; padding: 0.75rem 1rem; border: 2px solid var(--border); border-radius: var(--radius); font-size: 1rem; }
    .form-group input.readonly { background: var(--bg); color: var(--text-muted); }
    .form-group .error { color: var(--danger, #dc2626); font-size: 0.875rem; margin-top: 0.25rem; display: block; }
    .hint { font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 1rem; background: var(--bg); padding: 0.75rem; border-radius: var(--radius); }
    .resend-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
    .resend-hint { font-size: 0.8125rem; color: var(--text-muted); }
    .btn-block { width: 100%; margin-top: 0.5rem; }
    .message { text-align: center; color: var(--text-muted); }
    .message a { color: var(--primary); font-weight: 600; }
    .auth-footer { text-align: center; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light); }
    .auth-footer p { margin: 0; font-size: 0.875rem; color: var(--text-muted); }
    .auth-footer a { color: var(--primary); font-weight: 600; }
  `],
})
export class VerifyOtpComponent implements OnInit, OnDestroy {
  email: string | null = null;
  mobile: string | null = null;
  resendAttemptsUsed = 0;
  resendAttemptsRemaining = 3;
  maxResendAttemptsPerDay = 3;
  resendAvailableAt: Date | null = null;
  resendCountdownSeconds = 0;
  private resendTimerId: ReturnType<typeof setInterval> | null = null;
  form = this.fb.nonNullable.group({
    mobileOtp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^\d+$/)]],
  });
  submitting = false;
  resending = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pending = sessionStorage.getItem(PENDING_VERIFY_KEY);
    if (pending) {
      try {
        const { email, mobile, resendAttemptsUsed, resendAttemptsRemaining, resendAvailableAt, maxResendAttemptsPerDay } = JSON.parse(pending);
        this.email = email ?? null;
        this.mobile = mobile ?? null;
        this.resendAttemptsUsed = Number.isFinite(resendAttemptsUsed) ? resendAttemptsUsed : 0;
        this.resendAttemptsRemaining = Number.isFinite(resendAttemptsRemaining) ? resendAttemptsRemaining : 3;
        this.maxResendAttemptsPerDay = Number.isFinite(maxResendAttemptsPerDay) ? maxResendAttemptsPerDay : 3;
        this.resendAvailableAt = resendAvailableAt ? new Date(resendAvailableAt) : null;
        this.startResendCountdown();
      } catch {
        sessionStorage.removeItem(PENDING_VERIFY_KEY);
      }
    }
  }

  ngOnDestroy(): void {
    this.stopResendCountdown();
  }

  onSubmit(): void {
    if (this.form.invalid || !this.email || !this.mobile) return;
    const { mobileOtp } = this.form.getRawValue();
    this.submitting = true;
    this.api.post<AuthResponse>('/auth/verify-signup', {
      email: this.email,
      mobile: this.mobile,
      mobileOtp,
    }).subscribe({
      next: (res) => {
        sessionStorage.removeItem(PENDING_VERIFY_KEY);
        this.auth.completeSignup(res);
        setTimeout(() => {
          this.toast.success('Registration complete. You are now logged in.');
          this.router.navigate(['/dashboard']);
        }, 0);
      },
      error: (err) => {
        const msg = err.error?.message || 'Verification failed. Check OTP and try again.';
        setTimeout(() => {
          this.submitting = false;
          this.toast.error(msg);
        }, 0);
      },
    });
  }

  get canResend(): boolean {
    if (!this.email || !this.mobile) return false;
    if (this.resendAttemptsRemaining <= 0) return false;
    return this.resendCountdownSeconds <= 0;
  }

  resendOtp(): void {
    if (!this.email || !this.mobile || !this.canResend || this.resending) return;
    this.resending = true;
    this.auth.resendSignupOtp(this.email, this.mobile).subscribe({
      next: (res) => {
        this.resending = false;
        this.resendAttemptsUsed = res.resendAttemptsUsed ?? this.resendAttemptsUsed + 1;
        this.resendAttemptsRemaining = res.resendAttemptsRemaining ?? Math.max(0, this.maxResendAttemptsPerDay - this.resendAttemptsUsed);
        this.maxResendAttemptsPerDay = res.maxResendAttemptsPerDay ?? this.maxResendAttemptsPerDay;
        this.resendAvailableAt = res.resendAvailableAt ? new Date(res.resendAvailableAt) : null;
        sessionStorage.setItem(PENDING_VERIFY_KEY, JSON.stringify({
          email: this.email,
          mobile: this.mobile,
          resendAttemptsUsed: this.resendAttemptsUsed,
          resendAttemptsRemaining: this.resendAttemptsRemaining,
          resendAvailableAt: this.resendAvailableAt ? this.resendAvailableAt.toISOString() : null,
          maxResendAttemptsPerDay: this.maxResendAttemptsPerDay,
        }));
        this.startResendCountdown();
        this.toast.success(res.message || 'OTP resent successfully.');
      },
      error: (err) => {
        this.resending = false;
        this.toast.error(err.error?.message || 'Unable to resend OTP right now.');
      },
    });
  }

  formatCountdown(totalSeconds: number): string {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  }

  private startResendCountdown(): void {
    this.stopResendCountdown();
    const computeSeconds = () => {
      if (!this.resendAvailableAt) return 0;
      const diffMs = this.resendAvailableAt.getTime() - Date.now();
      return diffMs > 0 ? Math.ceil(diffMs / 1000) : 0;
    };
    this.resendCountdownSeconds = computeSeconds();
    this.resendTimerId = setInterval(() => {
      this.resendCountdownSeconds = computeSeconds();
      if (this.resendCountdownSeconds <= 0) {
        this.stopResendCountdown();
      }
    }, 1000);
  }

  private stopResendCountdown(): void {
    if (this.resendTimerId) {
      clearInterval(this.resendTimerId);
      this.resendTimerId = null;
    }
  }
}
