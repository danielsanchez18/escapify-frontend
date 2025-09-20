import { Routes } from '@angular/router';
import { PageError } from '@pages/error/error.component';
import { PageLogin } from '@pages/login/login.component';
import { PermissionGuard } from './core/guards/permission.guard';
import { LoginGuard } from './core/guards/login.guard';
import { PageSignUp } from '@pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/customer/customer.routes').then(m => m.CUSTOMER_ROUTES),
  },
  {
    path: 'ingresar',
    component: PageLogin,
    // canActivate: [LoginGuard]
  },
  {
    path: 'registrar',
    component: PageSignUp
  },
  {
    path: 'core',
    // canActivate: [PermissionGuard],
    // data: { requiredPermission: 'ACCESS.FULL' },
    loadChildren: () => import('./layouts/core/core.routes').then(m => m.CORE_ROUTES),
  },
  {
    path: 'error',
    component: PageError
  }
];
