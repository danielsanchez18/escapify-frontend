import { Routes } from '@angular/router';
import { PageError } from '@pages/error/error.component';
import { PageLogin } from '@pages/login/login.component';
import { PermissionGuard } from './core/guards/permission.guard';
import { LoginGuard } from './core/guards/login.guard';
import { PageRegister } from '@pages/register/register.component';

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
    path: 'core',
    // canActivate: [PermissionGuard],
    // data: { requiredPermission: 'ACCESS.FULL' },
    loadChildren: () => import('./layouts/core/core.routes').then(m => m.CORE_ROUTES),
  },
  {
    path: 'registrar',
    component: PageRegister
  },
  {
    path: 'empresa',
    loadChildren: () => import('./layouts/company/company.routes').then(m => m.COMPANY_ROUTES),
  },
  {
    path: '**',
    redirectTo: '/'
  },
  {
    path: 'error',
    component: PageError
  }
];
