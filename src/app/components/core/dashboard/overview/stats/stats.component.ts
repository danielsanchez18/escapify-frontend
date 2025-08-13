import { Component } from '@angular/core';
import { CreditCard, LucideAngularModule, MapPinHouse, Store, TrendingUp, UserPlus } from 'lucide-angular';

@Component({
  selector: 'component-core-dashboard-overview-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentCoreDashboardOverviewStats {

  readonly Store = Store;
  readonly MapPinHouse = MapPinHouse;
  readonly CreditCard = CreditCard;
  readonly UserPlus = UserPlus;
  readonly TrendingUp = TrendingUp;

}
