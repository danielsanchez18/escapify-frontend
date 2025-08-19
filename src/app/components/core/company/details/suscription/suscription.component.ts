import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Crown, ArrowUpRight, ListFilter } from 'lucide-angular';

@Component({
  selector: 'component-core-company-details-suscription',
  imports: [
    LucideAngularModule,
     CommonModule,
      RouterModule
  ],
  templateUrl: './suscription.component.html',
})
export class ComponentCoreCompanyDetailsSuscription {

  readonly Crown = Crown;
  readonly ArrowUpRight = ArrowUpRight;
  readonly ListFilter = ListFilter;

}
