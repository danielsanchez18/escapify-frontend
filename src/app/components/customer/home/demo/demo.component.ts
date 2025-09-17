import { Component } from '@angular/core';
import { BriefcaseBusiness, ChartPie, LucideAngularModule, LucideChartNoAxesCombined, MessagesSquare, ShoppingBag, Wallet } from 'lucide-angular';

@Component({
  selector: 'component-customer-home-demo',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './demo.component.html',
})
export class ComponentCustomerHomeDemo {

  readonly LucideChartNoAxesCombined = LucideChartNoAxesCombined;
  readonly BriefcaseBusiness = BriefcaseBusiness;
  readonly Wallet = Wallet;
  readonly ChartPie = ChartPie;
  readonly MessagesSquare = MessagesSquare;
  readonly ShoppingBag = ShoppingBag;

}
