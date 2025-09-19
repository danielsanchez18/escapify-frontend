import { Routes } from "@angular/router";
import { LayoutCustomerMain } from "./main/main.component";
import { PageCustomerHome } from "@pages/customer/home/home.component";
import { PageCustomerServices } from "@pages/customer/services/services.component";
import { PageCustomerPrices } from "@pages/customer/prices/prices.component";
import { PageCustomerClients } from "@pages/customer/clients/clients.component";
import { PageCustomerDemo } from "@pages/customer/demo/demo.component";
import { PageCustomerTry } from "@pages/customer/try/try.component";
import { PageCustomerPartnerts } from "@pages/customer/partnerts/partnerts.component";
import { PageCustomerContacts } from "@pages/customer/contacts/contacts.component";
import { PageCustomerReport } from "@pages/customer/report/report.component";
import { PageCustomerPolicies } from "@pages/customer/policies/policies.component";

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    component: LayoutCustomerMain,
    children: [
      { path: '',             component: PageCustomerHome      },
      { path: 'servicios',    component: PageCustomerServices  },
      { path: 'precios',      component: PageCustomerPrices    },
      { path: 'clientes',     component: PageCustomerClients   },
      { path: 'demo',         component: PageCustomerDemo      },
      { path: 'probar',       component: PageCustomerTry       },
      { path: 'afiliados',    component: PageCustomerPartnerts },
      { path: 'contactanos',  component: PageCustomerContacts  },
      { path: 'politicas',    component: PageCustomerPolicies  },
      { path: 'reportar-actividad', component: PageCustomerReport  }
    ]
  }
];
