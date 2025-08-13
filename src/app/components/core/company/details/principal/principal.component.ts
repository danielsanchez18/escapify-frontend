import { Component } from '@angular/core';
import { LucideAngularModule, Crown, List, MapPin, ClipboardCheck } from 'lucide-angular';
import { ComponentCoreCompanyDetailsGeneral } from "../general/general.component";

@Component({
  selector: 'component-core-company-details-principal',
  imports: [
    LucideAngularModule,
    ComponentCoreCompanyDetailsGeneral
],
  templateUrl: './principal.component.html',
})
export class ComponentCoreCompanyDetailsPrincipal {

  readonly Crown = Crown;
  readonly List = List;
  readonly MapPin = MapPin;
  readonly ClipboardCheck = ClipboardCheck;

}
