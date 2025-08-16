import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Copy, Globe, LucideAngularModule, Mail, Phone, Tag, MapPin, Coins } from 'lucide-angular';

@Component({
  selector: 'component-core-company-details-general',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './general.component.html',
})
export class ComponentCoreCompanyDetailsGeneral {

  readonly Globe = Globe;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Copy = Copy;
  readonly Tag = Tag;
  readonly MapPin = MapPin;
  readonly Coins = Coins;

}
