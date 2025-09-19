import { Routes } from "@angular/router";
import { LayoutCustomerMain } from "./main/main.component";
import { PageCustomerHome } from "@pages/customer/home/home.component";
import { PageCustomerServices } from "@pages/customer/services/services.component";
import { PageCustomerPrices } from "@pages/customer/prices/prices.component";
import { PageCustomerClients } from "@pages/customer/clients/clients.component";

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    component: LayoutCustomerMain,
    children: [
      {
        path: '',
        component: PageCustomerHome
      },
      {
        path: 'servicios',
        component: PageCustomerServices
      },
      {
        path: 'precios',
        component: PageCustomerPrices
      },
      {
        path: 'clientes',
        component: PageCustomerClients
      }
    ]
  }
];
