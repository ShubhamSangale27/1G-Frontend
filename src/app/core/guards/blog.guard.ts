import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const blogGuard = () => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  const role = auth.getRole();
  if (role === 'BLOG' || role === 'ADMIN') return true;
  router.navigate(['/']);
  return false;
};

