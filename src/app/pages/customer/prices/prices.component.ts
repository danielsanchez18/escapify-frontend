import { Component } from '@angular/core';
import { ComponentCustomerHomeEslogan } from '@components/customer/home/eslogan/eslogan.component';
import { ComponentCustomerHomeQuestions } from '@components/customer/home/questions/questions.component';
import { ComponentCustomerPricesFeatures } from '@components/customer/prices/features/features.component';
import { ComponentCustomerPricesPlans } from '@components/customer/prices/plans/plans.component';

@Component({
  selector: 'page-customer-prices',
  imports: [
    ComponentCustomerPricesPlans,
    ComponentCustomerPricesFeatures,
    ComponentCustomerHomeQuestions,
    ComponentCustomerHomeEslogan,
  ],
  templateUrl: './prices.component.html',
})
export class PageCustomerPrices { }
