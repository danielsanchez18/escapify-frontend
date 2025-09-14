import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview.component').then(m => m.PageCoreUserOverview)
  },
  // {
  //   path: 'estadisticas',
  //   loadComponent: () => import('./stats/stats.component').then(m => m.PageCoreUserStats),
  // },
  // {
  //   path: 'exportar',
  //   loadComponent: () => import('./export/export.component').then(m => m.PageCoreUserExport),
  // },
  // {
  //   path: 'agregar',
  //   loadComponent: () => import('./add/add.component').then(m => m.PageCoreUserAdd),
  // }
];


