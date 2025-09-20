import { Routes } from "@angular/router";
import { LayoutCompanyDashboard } from "./dashboard/dashboard.component";

export const COMPANY_ROUTES: Routes = [
  {
    path: '',
    component: LayoutCompanyDashboard,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@pages/company/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
        data: { breadcrumb: 'Overview' }
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];
