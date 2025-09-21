import { Component } from '@angular/core';
import { Image, LucideAngularModule, Trash2, Upload } from 'lucide-angular';

@Component({
  selector: 'component-customer-register-company',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './company.component.html',
})
export class ComponentCustomerRegisterCompany {

  readonly Upload = Upload;
  readonly Image = Image;
  readonly Trash2 = Trash2;

}
