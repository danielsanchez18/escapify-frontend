import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview.component').then(m => m.PageCompanyDashboardOverview),
  },
  // {
  //   path: 'estadisticas',
  //   loadComponent: () => import('./stats/stats.component').then(m => m.PageCompanyDashboardStats),
  // },
  // {
  //   path: 'estadisticas/exportar',
  //   loadComponent: () => import('./export/export.component').then(m => m.PageCompanyDashboardExport),
  // }
];


