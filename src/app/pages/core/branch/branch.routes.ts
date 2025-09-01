import { Routes } from '@angular/router';

export const BRANCH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview.component').then(m => m.PageCoreBranchOverview)
  },
  // {
  //   path: 'estadisticas',
  //   loadComponent: () => import('./stats/stats.component').then(m => m.PageCoreCompanyStats),
  // },
  // {
  //   path: 'exportar',
  //   loadComponent: () => import('./export/export.component').then(m => m.PageCoreCompanyExport),
  // },
  {
    path: 'agregar',
    loadComponent: () => import('./add/add.component').then(m => m.PageCoreBranchAdd),
  },
];


