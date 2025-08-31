import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthStore } from '../auth/auth.store';

export const PermissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const store = inject(AuthStore);
  const router = inject(Router);

  const requiredPermission = route.data['requiredPermission'] as string;
  const hasPermission = store.hasPermission(requiredPermission);

  if (hasPermission) {
    return true;
  }

  router.navigate(['/error']);
  return false;
};
