import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

function extractErrorMessage(err: HttpErrorResponse): string {
  const payload = err.error as any;
  if (payload && typeof payload === 'object') {
    if (typeof payload.message === 'string' && payload.message.trim()) return payload.message;
    if (typeof payload.error === 'string' && payload.error.trim()) return payload.error;
  }
  if (typeof err.error === 'string' && err.error.trim()) return err.error;
  if (err.status === 0) return 'Unable to connect to server. Please check your internet connection.';
  if (err.status === 401) return 'Invalid email or password';
  if (err.status === 403) return 'You do not have permission to perform this action.';
  if (err.status >= 500) return 'Something went wrong on the server. Please try again.';
  return err.message || 'Something went wrong. Please try again.';
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastrService);

  return next(req).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse) {
        const message = extractErrorMessage(err);
        toast.error(message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
      return throwError(() => err);
    })
  );
};

