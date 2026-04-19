import {
  HttpBackend,
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, filter, finalize, map, share, switchMap, take, throwError } from 'rxjs';
import { ConfigService } from '../services/config.service';

const RETRY_HEADER = 'X-1g-Auth-Retry';

interface RefreshAuthBody {
  accessToken: string;
  refreshToken: string;
  expiresIn?: number;
  user?: {
    id: number;
    email: string;
    fullName: string;
    mobile: string;
    role: string;
    emailVerified: boolean;
    mobileVerified: boolean;
  };
}

function isAnonymousAuthUrl(url: string): boolean {
  return (
    url.includes('/auth/login') ||
    url.includes('/auth/signup') ||
    url.includes('/auth/verify-signup') ||
    url.includes('/auth/resend-signup-otp') ||
    url.includes('/auth/refresh') ||
    url.includes('/auth/forgot-password')
  );
}

function clearAuthStorage(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  localStorage.removeItem('userRole');
}

let refreshInFlight: Observable<void> | null = null;

function sharedRefresh(backend: HttpBackend, apiUrl: string, refreshToken: string): Observable<void> {
  if (!refreshInFlight) {
    const httpReq = new HttpRequest(
      'POST',
      `${apiUrl}/auth/refresh`,
      { refreshToken },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) },
    );
    refreshInFlight = backend.handle(httpReq).pipe(
      filter((e): e is HttpResponse<RefreshAuthBody> => e instanceof HttpResponse),
      take(1),
      map((e) => {
        const body = e.body;
        if (!body?.accessToken || !body.refreshToken) {
          throw new Error('Invalid refresh response');
        }
        localStorage.setItem('accessToken', body.accessToken);
        localStorage.setItem('refreshToken', body.refreshToken);
        if (body.user) {
          localStorage.setItem('user', JSON.stringify(body.user));
          localStorage.setItem('userRole', body.user.role);
        }
      }),
      share(),
      finalize(() => {
        refreshInFlight = null;
      }),
    );
  }
  return refreshInFlight;
}

export const authRefreshInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: unknown) => {
      if (!(err instanceof HttpErrorResponse) || err.status !== 401) {
        return throwError(() => err);
      }
      if (req.headers.get(RETRY_HEADER) === '1') {
        return throwError(() => err);
      }
      if (isAnonymousAuthUrl(req.url)) {
        return throwError(() => err);
      }
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        return throwError(() => err);
      }

      const backend = inject(HttpBackend);
      const config = inject(ConfigService);
      const toast = inject(ToastrService);

      return sharedRefresh(backend, config.apiUrl, refreshToken).pipe(
        catchError(() => {
          clearAuthStorage();
          toast.error('Your session has expired. Please sign in again.');
          return throwError(() => err);
        }),
        switchMap(() => {
          const access = localStorage.getItem('accessToken');
          if (!access) return throwError(() => err);
          const retryReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${access}`,
              [RETRY_HEADER]: '1',
            },
          });
          return next(retryReq);
        }),
      );
    }),
  );
};
