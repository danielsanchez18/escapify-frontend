import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../auth/auth.store';
import { AuthService } from '@services/auth.service';

export const LoginGuard: CanActivateFn = () => {

  const store = inject(AuthStore);
  const router = inject(Router);
  const authService = inject(AuthService);

  // Si el usuario no está en el store pero hay token, cargar usuario
  if (!store.isLoggedIn() && window.localStorage.getItem('access_token')) {
    return authService.loadCurrentUser().then(() => {
      if (store.isLoggedIn()) {
        router.navigate(['/core']);
        return false;
      }
      return true;
    });
  }

  if (store.isLoggedIn()) {
    router.navigate(['/core']);
    return false;
  }
  return true;

};
