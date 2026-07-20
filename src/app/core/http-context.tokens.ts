import { HttpContextToken } from '@angular/common/http';

/** When true, the global error interceptor does not show a toast (caller handles messaging). */
export const SKIP_GLOBAL_ERROR_TOAST = new HttpContextToken<boolean>(() => false);

/** When true, 404 responses do not trigger a global error toast (optional resources). */
export const SILENT_NOT_FOUND = new HttpContextToken<boolean>(() => false);
