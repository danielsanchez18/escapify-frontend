import { Component } from '@angular/core';
import { LucideAngularModule, BrainCircuit, HandCoins, ChartPie, MonitorCog, Mails, TrendingUpDown } from 'lucide-angular';

@Component({
  selector: 'component-customer-services-features',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './features.component.html',
})
export class ComponentCustomerServicesFeatures {

  readonly BrainCircuit = BrainCircuit;
  readonly HandCoins = HandCoins;
  readonly ChartPie = ChartPie;
  readonly MonitorCog = MonitorCog;
  readonly Mails = Mails;
  readonly TrendingUpDown = TrendingUpDown;

}
