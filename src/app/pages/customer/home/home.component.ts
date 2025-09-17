import { Component } from '@angular/core';
import { ComponentCustomerHomeClients } from '@components/customer/home/clients/clients.component';
import { ComponentCustomerHomeDemo } from '@components/customer/home/demo/demo.component';
import { ComponentCustomerHomeEslogan } from '@components/customer/home/eslogan/eslogan.component';
import { ComponentCustomerHomeFeatures } from '@components/customer/home/features/features.component';
import { ComponentCustomerHomeHero } from '@components/customer/home/hero/hero.component';
import { ComponentCustomerHomeQuestions } from '@components/customer/home/questions/questions.component';
import { ComponentCustomerHomeReview } from '@components/customer/home/review/review.component';
import { ComponentCustomerHomeServices } from '@components/customer/home/services/services.component';

@Component({
  selector: 'page-customer-home',
  imports: [
    ComponentCustomerHomeHero,
    ComponentCustomerHomeDemo,
    ComponentCustomerHomeReview,
    ComponentCustomerHomeServices,
    ComponentCustomerHomeFeatures,
    ComponentCustomerHomeClients,
    ComponentCustomerHomeQuestions,
    ComponentCustomerHomeEslogan,
  ],
  templateUrl: './home.component.html',
})
export class PageCustomerHome { }
