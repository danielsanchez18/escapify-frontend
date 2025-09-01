import { Component } from '@angular/core';
import { LucideAngularModule, Store, MapPinHouse, CreditCard, TrendingUp, Focus, TrendingDown } from 'lucide-angular';

@Component({
  selector: 'component-core-branch-overview-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentCoreBranchOverviewStats {

  readonly Store = Store;
  readonly MapPinHouse = MapPinHouse;
  readonly CreditCard = CreditCard;
  readonly TrendingUp = TrendingUp;
  readonly TrendingDown = TrendingDown;
  readonly Focus = Focus;

}
