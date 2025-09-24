import { Component } from '@angular/core';
import { ComponentCustomerRegisterUser } from '@components/customer/register/user/user.component';
import { LucideAngularModule, CircleQuestionMark, House } from 'lucide-angular';
import { ComponentCustomerRegisterCompany } from "@components/customer/register/company/company.component";
import { ComponentCustomerRegisterPlans } from '@components/customer/register/plans/plans.component';
import { ComponentCustomerRegisterPayment } from '@components/customer/register/payment/payment.component';

@Component({
  selector: 'page-register',
  imports: [
    LucideAngularModule,
    ComponentCustomerRegisterUser,
    ComponentCustomerRegisterCompany,
    ComponentCustomerRegisterPlans,
    ComponentCustomerRegisterPayment
],
  templateUrl: './register.component.html',
})
export class PageRegister {

  readonly CircleQuestionMark = CircleQuestionMark;
  readonly House = House;

}
