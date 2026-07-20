import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { extractHttpErrorMessage } from '../utils/http-error-message.util';
import { SILENT_NOT_FOUND, SKIP_GLOBAL_ERROR_TOAST } from '../http-context.tokens';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastrService);

  return next(req).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse) {
        // 401 is handled by auth-refresh (session renewal) or by auth screens with explicit copy.
        const silent404 = err.status === 404 && req.context.get(SILENT_NOT_FOUND);
        if (err.status !== 401 && !req.context.get(SKIP_GLOBAL_ERROR_TOAST) && !silent404) {
          toast.error(extractHttpErrorMessage(err));
        }
      } else {
        toast.error('Something went wrong. Please try again.');
      }
      return throwError(() => err);
    })
  );
};

