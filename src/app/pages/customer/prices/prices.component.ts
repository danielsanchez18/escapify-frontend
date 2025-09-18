import { Component } from '@angular/core';
import { ComponentCustomerHomeEslogan } from '@components/customer/home/eslogan/eslogan.component';
import { ComponentCustomerHomeQuestions } from '@components/customer/home/questions/questions.component';
import { ComponentCustomerPricesFeatures } from '@components/customer/prices/features/features.component';
import { ComponentCustomerPricesPlans } from '@components/customer/prices/plans/plans.component';
import { ComponentCustomerHomeClients } from "@components/customer/home/clients/clients.component";

@Component({
  selector: 'page-customer-prices',
  imports: [
    ComponentCustomerPricesPlans,
    ComponentCustomerPricesFeatures,
    ComponentCustomerHomeClients,
    ComponentCustomerHomeQuestions,
    ComponentCustomerHomeEslogan,
    ComponentCustomerHomeClients
],
  templateUrl: './prices.component.html',
})
export class PageCustomerPrices { }
