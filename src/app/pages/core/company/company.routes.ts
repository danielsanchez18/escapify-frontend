import { Routes } from '@angular/router';

export const COMPANY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./overview/overview.component').then(m => m.PageCoreCompanyOverview)
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./stats/stats.component').then(m => m.PageCoreCompanyStats),
  },
  {
    path: 'exportar',
    loadComponent: () => import('./export/export.component').then(m => m.PageCoreCompanyExport),
  },
  {
    path: 'agregar',
    loadComponent: () => import('./add/add.component').then(m => m.PageCoreCompanyAdd),
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details.component').then(m => m.PageCoreCompanyDetails),
    children: [
      {
        path: '',
        loadComponent: () => import('@components/core/company/details/general/general.component').then(m => m.ComponentCoreCompanyDetailsGeneral),
      },
      {
        path: 'suscripcion',
        loadComponent: () => import('@components/core/company/details/suscription/suscription.component').then(m => m.ComponentCoreCompanyDetailsSuscription),
      },
      {
        path: 'sucursales',
        loadComponent: () => import('@components/core/company/details/branchs/branchs.component').then(m => m.ComponentCoreCompanyDetailsBranchs),
      },
      {
        path: 'usuarios',
        loadComponent: () => import('@components/core/company/details/users/users.component').then(m => m.ComponentCoreCompanyDetailsUsers),
      },
      {
        path: 'auditoria',
        loadComponent: () => import('@components/core/company/details/audit/audit.component').then(m => m.ComponentCoreCompanyDetailsAudit),
      },
      {
        path: 'estadisticas',
        loadComponent: () => import('@components/core/company/details/stats/stats.component').then(m => m.ComponentCoreCompanyDetailsStats),
      },
    ]
  },
  {
    path: ':id/editar',
    loadComponent: () => import('./edit/edit.component').then(m => m.PageCoreCompanyEdit),
  },
  // {
  //   path: ':id/estadisticas',
  //   loadComponent: () => import('./details-stats/details-stats.component').then(m => m.PageCompanyDetailsStats),
  // },
  // {
  //   path: ':id/exportar',
  //   loadComponent: () => import('./details-export/details-export.component').then(m => m.PageCompanyDetailsExport),
  // }
];


