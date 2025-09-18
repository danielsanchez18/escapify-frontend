import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Check, MessagesSquare } from 'lucide-angular';

@Component({
  selector: 'component-customer-prices-plans',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './plans.component.html',
})
export class ComponentCustomerPricesPlans {

  readonly Check = Check;
  readonly MessagesSquare = MessagesSquare;

  isAnnual: boolean = true;

  readonly plans = [
    {
      name: 'Free',
      price_monthly: 0,
      price_annual: 0,
    },
    {
      name: 'Startup',
      price_monthly: 15,
      price_annual: 30,
    },
    {
      name: 'Team',
      price_monthly: 45,
      price_annual: 90,
    },
    {
      name: 'Enterprise',
      price_monthly: 199,
      price_annual: 399,
    },
  ]

  features_free = [
    '5 GB Cloud Storage',
    '5 API Requests/min',
    '1 Team Member',
    '1 Project Template',
    '50 Build Minutes/month',
    'Email Support',
    'Basic Analytics'
  ]

}
