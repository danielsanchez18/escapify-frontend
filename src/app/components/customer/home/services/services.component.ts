import { Component } from '@angular/core';
import { LucideAngularModule, ChevronRight, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'component-customer-home-services',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './services.component.html',
})
export class ComponentCustomerHomeServices {

  readonly ChevronRight = ChevronRight;
  readonly ArrowRight = ArrowRight;

}
