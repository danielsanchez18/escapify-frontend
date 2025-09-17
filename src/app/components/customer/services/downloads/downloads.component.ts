import { Component } from '@angular/core';
import { ArrowRight, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-customer-services-downloads',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './downloads.component.html',
})
export class ComponentCustomerServicesDownloads {

  readonly ChevronRight = ChevronRight;
  readonly ArrowRight = ArrowRight;

}
