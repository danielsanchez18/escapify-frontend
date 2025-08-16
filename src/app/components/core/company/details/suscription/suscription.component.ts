import { Component } from '@angular/core';
import { LucideAngularModule, Crown, ArrowUpRight, ListFilter } from 'lucide-angular';

@Component({
  selector: 'component-core-company-details-suscription',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './suscription.component.html',
})
export class ComponentCoreCompanyDetailsSuscription {

  readonly Crown = Crown;
  readonly ArrowUpRight = ArrowUpRight;
  readonly ListFilter = ListFilter;

}
