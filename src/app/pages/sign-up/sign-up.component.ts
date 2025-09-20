import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentCustomerSharedNavbar } from '@components/customer/shared/navbar/navbar.component';
import { LucideAngularModule, AtSign, Lock } from 'lucide-angular';

@Component({
  selector: 'page-sign-up',
  imports: [
    LucideAngularModule,
    CommonModule,
    ComponentCustomerSharedNavbar
  ],
  templateUrl: './sign-up.component.html',
})
export class PageSignUp {

  readonly AtSign = AtSign;
  readonly Lock = Lock;

}
