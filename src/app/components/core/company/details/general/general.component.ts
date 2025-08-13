import { Component } from '@angular/core';
import { Globe, LucideAngularModule, Mail, Phone } from 'lucide-angular';

@Component({
  selector: 'component-core-company-details-general',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './general.component.html',
})
export class ComponentCoreCompanyDetailsGeneral {

  readonly Globe = Globe;
  readonly Phone = Phone;
  readonly Mail = Mail;

}
