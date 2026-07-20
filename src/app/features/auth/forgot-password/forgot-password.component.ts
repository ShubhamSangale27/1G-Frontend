import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { extractHttpErrorMessage } from '../../../core/utils/http-error-message.util';
import { BrandLogoComponent } from '../../../core/components/brand-logo/brand-logo.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, BrandLogoComponent],
  template: `
    <div class="auth-page">
      <div class="auth-background"></div>
      <div class="auth-container">
        <div class="card auth-card">
          <div class="auth-header">
            <app-brand-logo variant="auth" />
            <h1>Reset password</h1>
            <p>{{ step() === 1 ? 'Enter your email to receive an OTP on your registered mobile' : 'Enter OTP and choose a new password' }}</p>
          </div>

          @if (inlineError()) {
            <div class="auth-inline-error" role="alert">{{ inlineError() }}</div>
          }

          @if (step() === 1) {
            <form [formGroup]="emailForm" (ngSubmit)="sendOtp()">
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" formControlName="email" placeholder="Enter your account email" />
                @if (emailForm.get('email')?.invalid && emailForm.get('email')?.touched) {
                  <span class="error">Valid email required</span>
                }
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="emailForm.invalid || submitting()">
                {{ submitting() ? 'Sending OTP…' : 'Send OTP' }}
              </button>
            </form>
          } @else {
            <form [formGroup]="resetForm" (ngSubmit)="resetPassword()">
              <div class="form-group">
                <label>Email</label>
                <input type="text" [value]="emailForm.getRawValue().email" readonly class="readonly" />
              </div>
              @if (maskedMobile()) {
                <p class="hint">OTP sent to mobile ending in {{ maskedMobile() }}</p>
              }
              <div class="form-group">
                <label>OTP (6 digits)</label>
                <input type="text" formControlName="otp" maxlength="6" inputmode="numeric" placeholder="Enter OTP from SMS" />
                @if (resetForm.get('otp')?.invalid && resetForm.get('otp')?.touched) {
                  <span class="error">Enter 6-digit OTP</span>
                }
              </div>
              <div class="form-group">
                <label>New password</label>
                <input type="password" formControlName="newPassword" placeholder="At least 6 characters" />
              </div>
              <div class="form-group">
                <label>Confirm new password</label>
                <input type="password" formControlName="confirmPassword" placeholder="Re-enter password" />
                @if (resetForm.hasError('passwordMismatch') && resetForm.get('confirmPassword')?.touched) {
                  <span class="error">Passwords do not match</span>
                }
              </div>
              <div class="resend-row">
                <button type="button" class="btn btn-outline btn-sm" (click)="resendOtp()" [disabled]="!canResend() || submitting()">
                  Resend OTP
                </button>
                @if (!canResend() && resendCountdown() > 0) {
                  <span class="resend-hint">Resend in {{ formatCountdown(resendCountdown()) }}</span>
                }
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="resetForm.invalid || submitting()">
                {{ submitting() ? 'Resetting…' : 'Reset password' }}
              </button>
            </form>
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
    .auth-inline-error { margin: 0 0 1.25rem; padding: 0.75rem 1rem; border-radius: var(--radius); background: var(--danger-bg); color: var(--danger-text-strong); font-size: 0.9375rem; font-weight: 600; border: 1px solid rgba(239, 68, 68, 0.35); }
    .auth-header { text-align: center; margin-bottom: 2rem; }
    .auth-header h1 { font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text); }
    .auth-header p { color: var(--text-muted); font-size: 0.9375rem; margin: 0; }
    .auth-footer { text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-light); }
    .auth-footer a { color: var(--primary); font-weight: 600; }
    .btn-block { width: 100%; margin-top: 1rem; }
    .readonly { background: var(--bg); color: var(--text-muted); }
    .hint { font-size: 0.875rem; color: var(--text-muted); margin: 0 0 1rem; }
    .resend-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; flex-wrap: wrap; }
    .resend-hint { font-size: 0.8125rem; color: var(--text-muted); }
  `],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  readonly step = signal(1);
  readonly submitting = signal(false);
  readonly inlineError = signal<string | null>(null);
  readonly maskedMobile = signal('');
  readonly resendCountdown = signal(0);
  readonly canResend = signal(true);

  private countdownTimer: ReturnType<typeof setInterval> | null = null;

  emailForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  resetForm = this.fb.nonNullable.group(
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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const saved = sessionStorage.getItem('forgotPasswordEmail');
    if (saved) this.emailForm.patchValue({ email: saved });
  }

  ngOnDestroy(): void {
    this.clearCountdown();
  }

  sendOtp() {
    if (this.emailForm.invalid) return;
    this.inlineError.set(null);
    this.submitting.set(true);
    const { email } = this.emailForm.getRawValue();
    this.auth.forgotPassword(email).subscribe({
      next: (res) => {
        this.submitting.set(false);
        sessionStorage.setItem('forgotPasswordEmail', email);
        this.maskedMobile.set(res.maskedMobile || '');
        this.step.set(2);
        this.startResendCooldown(res.resendAvailableAt);
        this.toast.success(res.message || 'OTP sent if account exists');
      },
      error: (err: unknown) => {
        this.submitting.set(false);
        const msg = err instanceof HttpErrorResponse ? extractHttpErrorMessage(err) : 'Failed to send OTP';
        this.inlineError.set(msg);
        this.toast.error(msg);
      },
    });
  }

  resendOtp() {
    this.sendOtp();
  }

  resetPassword() {
    if (this.resetForm.invalid) return;
    this.inlineError.set(null);
    this.submitting.set(true);
    const email = this.emailForm.getRawValue().email;
    const { otp, newPassword } = this.resetForm.getRawValue();
    this.auth.resetPassword(email, otp, newPassword).subscribe({
      next: (res) => {
        this.submitting.set(false);
        sessionStorage.removeItem('forgotPasswordEmail');
        this.toast.success(res.message || 'Password reset successfully');
        this.router.navigate(['/login']);
      },
      error: (err: unknown) => {
        this.submitting.set(false);
        const msg = err instanceof HttpErrorResponse ? extractHttpErrorMessage(err) : 'Password reset failed';
        this.inlineError.set(msg);
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
      this.canResend.set(true);
      return;
    }
    const target = new Date(resendAvailableAt).getTime();
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000));
      this.resendCountdown.set(remaining);
      this.canResend.set(remaining <= 0);
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
