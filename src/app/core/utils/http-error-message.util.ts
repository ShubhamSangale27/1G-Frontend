import { HttpErrorResponse } from '@angular/common/http';

/** Parses backend error payloads and HTTP status into a user-facing string. */
export function extractHttpErrorMessage(err: unknown): string {
  if (!(err instanceof HttpErrorResponse)) {
    return 'Something went wrong. Please try again.';
  }
  const payload = err.error as Record<string, unknown> | string | null | undefined;
  if (payload && typeof payload === 'object') {
    const message = payload['message'];
    if (typeof message === 'string' && message.trim()) return message.trim();
    const errorField = payload['error'];
    if (typeof errorField === 'string' && errorField.trim()) return errorField.trim();
  }
  if (typeof err.error === 'string' && err.error.trim()) return err.error.trim();
  if (err.status === 0) return 'Unable to connect to the server. Please check your internet connection.';
  if (err.status === 401) return 'Invalid email or password.';
  if (err.status === 403) return 'You do not have permission to perform this action.';
  if (err.status >= 500) return 'Something went wrong on the server. Please try again.';
  return err.message || 'Something went wrong. Please try again.';
}
