import { Routes } from "@angular/router";
import { LayoutCustomerMain } from "./main/main.component";
import { PageCustomerHome } from "@pages/customer/home/home.component";

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    component: LayoutCustomerMain,
    children: [
      {
        path: '',
        loadComponent: () => import('@pages/customer/home/home.component').then(c => c.PageCustomerHome)
      },
      {
        path: 'servicios',
        loadComponent: () => import('@pages/customer/services/services.component').then(c => c.PageCustomerServices)
      }
    ]
  }
];
