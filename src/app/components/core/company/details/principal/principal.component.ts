import { Component } from '@angular/core';
import { LucideAngularModule, Crown, List, MapPin, ClipboardCheck, Users, ChartPie } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-core-company-details-principal',
  imports: [
    LucideAngularModule,
    LucideAngularModule,
    RouterModule,
    CommonModule
],
  templateUrl: './principal.component.html',
})
export class ComponentCoreCompanyDetailsPrincipal {

  readonly Crown = Crown;
  readonly List = List;
  readonly MapPin = MapPin;
  readonly ClipboardCheck = ClipboardCheck;
  readonly Users = Users;
  readonly ChartPie = ChartPie;

}
