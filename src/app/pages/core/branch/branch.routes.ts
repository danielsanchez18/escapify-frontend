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
  {
    path: ':id',
    loadComponent: () => import('./details/details.component').then(m => m.PageCoreBranchDetails),
    children: [
      {
        path: '',
        loadComponent: () => import('@components/core/branch/details/general/general.component').then(m => m.ComponentCoreBranchDetailsGeneral),
      },
      {
        path: 'personal',
        loadComponent: () => import('@components/core/branch/details/personal/personal.component').then(m => m.ComponentCoreBranchDetailsPersonal),
      },
      {
        path: 'auditoria',
        loadComponent: () => import('@components/core/branch/details/audit/audit.component').then(m => m.ComponentCoreBranchDetailsAudit),
      },
      {
        path: 'estadisticas',
        loadComponent: () => import('@components/core/branch/details/stats/stats.component').then(m => m.ComponentCoreBranchDetailsStats),
      },
      {
        path: 'configuracion-operativa',
        loadComponent: () => import('@components/core/branch/details/config/config.component').then(m => m.ComponentCoreBranchDetailsConfig),
      }
    ]
  },
  {
    path: ':id/editar',
    loadComponent: () => import('./edit/edit.component').then(m => m.PageCoreBranchEdit),
  }
];


