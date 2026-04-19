import { HttpContextToken } from '@angular/common/http';

/** When true, the global error interceptor does not show a toast (caller handles messaging). */
export const SKIP_GLOBAL_ERROR_TOAST = new HttpContextToken<boolean>(() => false);
