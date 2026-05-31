import { Injectable, signal, computed } from '@angular/core';
import { HttpContext } from '@angular/common/http';
import { SKIP_GLOBAL_ERROR_TOAST } from '../http-context.tokens';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

export interface User {
  id: number;
  email: string;
  fullName: string;
  mobile: string;
  role: string;
  emailVerified: boolean;
  mobileVerified: boolean;
  active?: boolean;
  profileImageUrl?: string;
}

export interface PasswordOtpResponse {
  message: string;
  maskedMobile?: string;
  resendAttemptsUsed?: number;
  resendAttemptsRemaining?: number;
  resendAvailableAt?: string;
  maxResendAttemptsPerDay?: number;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
}

/** Returned after signup; no tokens until OTP is verified. */
export interface SignupResponse {
  message: string;
  email: string;
  mobile: string;
  resendAttemptsUsed?: number;
  resendAttemptsRemaining?: number;
  resendAvailableAt?: string;
  maxResendAttemptsPerDay?: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<User | null>(null);
  user = this.userSignal.asReadonly();
  isLoggedIn = computed(() => !!this.userSignal());

  private readonly skipGlobalErrorToast = new HttpContext().set(SKIP_GLOBAL_ERROR_TOAST, true);

  constructor(
    private api: ApiService,
    private router: Router
  ) {
    const u = localStorage.getItem('user');
    if (u) this.userSignal.set(JSON.parse(u));
  }

  /** Login POST; caller runs toasts/navigation inside NgZone. Session is set in `tap` on success. */
  login(email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('/auth/login', { email, password }, this.skipGlobalErrorToast).pipe(
      tap((res) => this.setSession(res)),
    );
  }

  /** Signup POST; caller handles OTP redirect UI. */
  signup(email: string, password: string, fullName: string, mobile: string): Observable<SignupResponse> {
    return this.api.post<SignupResponse>('/auth/signup', { email, password, fullName, mobile }, this.skipGlobalErrorToast);
  }

  resendSignupOtp(email: string, mobile: string) {
    return this.api.post<SignupResponse>('/auth/resend-signup-otp', { email, mobile }, this.skipGlobalErrorToast);
  }

  logout() {
    this.api.post('/auth/logout', {}).subscribe({ error: () => {} });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    this.userSignal.set(null);
    this.router.navigate(['/']);
  }

  private setSession(res: AuthResponse) {
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    localStorage.setItem('user', JSON.stringify(res.user));
    localStorage.setItem('userRole', res.user.role);
    this.userSignal.set(res.user);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  /** Call after OTP verification (verify-signup) to set session; caller should redirect (e.g. to /dashboard). */
  completeSignup(authResponse: AuthResponse): void {
    this.setSession(authResponse);
  }

  /** Call after OTP verification to update user flags locally. */
  setEmailAndMobileVerified(): void {
    const u = this.userSignal();
    if (u) {
      const updated = { ...u, emailVerified: true, mobileVerified: true };
      this.userSignal.set(updated);
      localStorage.setItem('user', JSON.stringify(updated));
    }
  }

  /** Call after email verification via link to update user locally. */
  updateUserEmailVerified(): void {
    const u = this.userSignal();
    if (u) {
      const updated = { ...u, emailVerified: true };
      this.userSignal.set(updated);
      localStorage.setItem('user', JSON.stringify(updated));
    }
  }

  /** Send email verification link to current user's email (requires auth). */
  sendEmailVerification() {
    return this.api.post('/auth/send-email-verification', {});
  }

  getProfile() {
    return this.api.get<User>('/users/me');
  }

  updateProfile(body: { fullName: string; email: string; profileImageUrl?: string | null }) {
    return this.api.put<User>('/users/me', body).pipe(
      tap((user) => this.updateLocalUser(user)),
    );
  }

  forgotPassword(email: string) {
    return this.api.post<PasswordOtpResponse>('/auth/forgot-password', { email }, this.skipGlobalErrorToast);
  }

  resetPassword(email: string, otp: string, newPassword: string) {
    return this.api.post<{ message: string }>('/auth/reset-password', { email, otp, newPassword }, this.skipGlobalErrorToast);
  }

  sendChangePasswordOtp() {
    return this.api.post<PasswordOtpResponse>('/auth/change-password/send-otp', {}, this.skipGlobalErrorToast);
  }

  changePassword(otp: string, newPassword: string) {
    return this.api.post<{ message: string }>('/auth/change-password', { otp, newPassword }, this.skipGlobalErrorToast);
  }

  updateLocalUser(user: User): void {
    this.userSignal.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
