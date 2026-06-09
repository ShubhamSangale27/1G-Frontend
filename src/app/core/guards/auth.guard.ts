import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.isLoggedIn() && auth.getToken()) return true;
  auth.clearSession();
  router.navigate(['/login']);
  return false;
};
