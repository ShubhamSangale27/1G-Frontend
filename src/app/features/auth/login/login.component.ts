import { Component, NgZone, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';
import { extractHttpErrorMessage } from '../../../core/utils/http-error-message.util';
import { BrandLogoComponent } from '../../../core/components/brand-logo/brand-logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, BrandLogoComponent],
  template: `
    <div class="auth-page">
      <div class="auth-background"></div>
      <div class="auth-container">
        <div class="card auth-card">
          <div class="auth-header">
            <app-brand-logo variant="auth" />
            <h1>Welcome Back</h1>
            <p>Login to your account to continue</p>
          </div>
          @if (inlineError()) {
            <div class="auth-inline-error" role="alert">{{ inlineError() }}</div>
          }
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" formControlName="email" placeholder="Enter your email" />
              @if (form.get('email')?.invalid && form.get('email')?.touched) {
                <span class="error">Valid email required</span>
              }
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" formControlName="password" placeholder="Enter your password" />
              @if (form.get('password')?.invalid && form.get('password')?.touched) {
                <span class="error">Password is required</span>
              }
              <div class="forgot-row">
                <a routerLink="/forgot-password">Forgot password?</a>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="form.invalid || submitting()">
              {{ submitting() ? 'Signing in…' : 'Login' }}
            </button>
          </form>
          <div class="auth-footer">
            <p>Don't have an account? <a routerLink="/signup">Sign up now</a></p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
      background: var(--bg);
    }
    .auth-background {
      position: absolute;
      inset: 0;
      background: var(--primary-gradient);
      opacity: 0.05;
      z-index: 0;
    }
    .auth-container {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 450px;
    }
    .auth-card {
      padding: 3rem;
      border: 2px solid var(--border);
      box-shadow: var(--shadow-2xl);
    }
    .auth-inline-error {
      margin: 0 0 1.25rem;
      padding: 0.75rem 1rem;
      border-radius: var(--radius);
      background: var(--danger-bg);
      color: var(--danger-text-strong);
      font-size: 0.9375rem;
      font-weight: 600;
      border: 1px solid rgba(239, 68, 68, 0.35);
    }
    .auth-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .auth-header h1 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      color: var(--text);
    }
    .auth-header p {
      color: var(--text-muted);
      font-size: 1rem;
      margin: 0;
    }
    .auth-footer {
      text-align: center;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-light);
    }
    .auth-footer p {
      color: var(--text-muted);
      font-size: 0.9375rem;
      margin: 0;
    }
    .auth-footer a {
      color: var(--primary);
      font-weight: 600;
    }
    .btn-block {
      width: 100%;
      margin-top: 1rem;
    }
    .forgot-row {
      margin-top: 0.5rem;
      text-align: right;
    }
    .forgot-row a {
      font-size: 0.875rem;
      color: var(--primary);
      font-weight: 600;
      text-decoration: none;
    }
  `],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  readonly inlineError = signal<string | null>(null);
  readonly submitting = signal(false);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router,
    private ngZone: NgZone,
  ) {}

  onSubmit() {
    if (this.form.invalid) return;
    this.inlineError.set(null);
    const { email, password } = this.form.getRawValue();
    this.submitting.set(true);
    this.auth.login(email, password).subscribe({
      next: (res) => {
        this.submitting.set(false);
        this.ngZone.run(() => {
          this.toast.success(`Welcome back, ${res.user.fullName}`);
          this.router.navigate(['/dashboard']);
        });
      },
      error: (err: unknown) => {
        this.submitting.set(false);
        const msg =
          err instanceof HttpErrorResponse
            ? extractHttpErrorMessage(err)
            : 'Sign in failed. Please try again.';
        this.inlineError.set(msg);
        this.ngZone.run(() => this.toast.error(msg));
      },
    });
  }
}
