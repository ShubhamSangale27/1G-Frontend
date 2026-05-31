import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const blogGuard = () => {
  const router = inject(Router);
  const role = localStorage.getItem('userRole');
  if (role === 'BLOG' || role === 'ADMIN') return true;
  router.navigate(['/']);
  return false;
};

