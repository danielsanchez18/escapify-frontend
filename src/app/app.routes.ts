import { Routes } from '@angular/router';
import { PageLogin } from '@pages/login/login.component';

export const routes: Routes = [
  {
    path: 'ingresar', component: PageLogin
  },
  {

    path: 'core',
    loadChildren: () => import('./layouts/core/core.routes').then(m => m.CORE_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'ingresar'
  }
];
