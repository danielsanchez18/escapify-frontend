import { Component } from '@angular/core';
import { Check, LucideAngularModule, Minus } from 'lucide-angular';

@Component({
  selector: 'component-customer-prices-features',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './features.component.html',
})
export class ComponentCustomerPricesFeatures {

  readonly Check = Check;
  readonly Minus = Minus;

}
