import { Component } from '@angular/core';
import { ArrowUp, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-customer-services-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentCustomerServicesStats {

  readonly ArrowUp = ArrowUp;

}
