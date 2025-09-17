import { Component } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'component-customer-home-review',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './review.component.html',
})
export class ComponentCustomerHomeReview {

  readonly Star = Star;

}
