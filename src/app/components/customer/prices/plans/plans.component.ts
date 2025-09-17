import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Check } from 'lucide-angular';

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
