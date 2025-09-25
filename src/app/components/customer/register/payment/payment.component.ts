import { Component } from '@angular/core';
import { LockKeyhole, LucideAngularModule, CreditCard, Gift, ShieldCheck, Lock, CalendarDays } from 'lucide-angular';

@Component({
  selector: 'component-customer-register-payment',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './payment.component.html',
})
export class ComponentCustomerRegisterPayment {

  readonly LockKeyhole = LockKeyhole;
  readonly CreditCard = CreditCard;
  readonly Gift = Gift;
  readonly ShieldCheck = ShieldCheck;
  readonly Lock = Lock;
  readonly CalendarDays = CalendarDays;

}
