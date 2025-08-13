import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview.component').then(m => m.PageCoreDashboardOverview),
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./stats/stats.component').then(m => m.PageCoreDashboardStats),
  },
  {
    path: 'estadisticas/exportar',
    loadComponent: () => import('./export/export.component').then(m => m.PageCoreDashboardExport),
  }
];


