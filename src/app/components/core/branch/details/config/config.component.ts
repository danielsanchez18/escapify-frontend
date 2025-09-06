import { Component } from '@angular/core';
import { HandCoins, LucideAngularModule, Truck } from 'lucide-angular';

@Component({
  selector: 'component-core-branch-details-config',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './config.component.html',
})
export class ComponentCoreBranchDetailsConfig {

  readonly Truck = Truck;
  readonly HandCoins = HandCoins;

}
