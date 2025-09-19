import { Component } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';

@Component({
  selector: 'component-customer-home-hero',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './hero.component.html',
})
export class ComponentCustomerHomeHero {

  readonly Star = Star;

}
