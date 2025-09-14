import { Component } from '@angular/core';
import { LucideAngularModule, Store, MapPinHouse, CreditCard, TrendingUp, Focus, TrendingDown, Users } from 'lucide-angular';

@Component({
  selector: 'component-core-user-overview-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.component.html',
})
export class ComponentCoreUserOverviewStats {

  readonly Users = Users;
  readonly MapPinHouse = MapPinHouse;
  readonly CreditCard = CreditCard;
  readonly TrendingUp = TrendingUp;
  readonly TrendingDown = TrendingDown;
  readonly Focus = Focus;

}
