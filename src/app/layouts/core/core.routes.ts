import { Routes } from "@angular/router";
import { LayoutCoreDashboard } from "./dashboard/dashboard.component";

export const CORE_ROUTES: Routes = [
  {
    path: '',
    component: LayoutCoreDashboard,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@pages/core/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
        data: { breadcrumb: 'Overview' }
      },
      {
        path: 'empresas',
        loadChildren: () => import('@pages/core/company/company.routes').then(m => m.COMPANY_ROUTES),
        data: { breadcrumb: 'Empresas' }
      },
      {
        path: 'sucursales',
        loadChildren: () => import('@pages/core/branch/branch.routes').then(m => m.BRANCH_ROUTES),
        data: { breadcrumb: 'Sucursales' }
      },
      {
        path: 'usuarios',
        loadChildren: () => import('@pages/core/user/user.routes').then(m => m.USER_ROUTES),
        data: { breadcrumb: 'Usuarios' }
      },
      {
        path: 'roles',
        loadChildren: () => import('@pages/core/role/role.routes').then(m => m.ROLE_ROUTES),
        data: { breadcrumb: 'Roles' }
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];
