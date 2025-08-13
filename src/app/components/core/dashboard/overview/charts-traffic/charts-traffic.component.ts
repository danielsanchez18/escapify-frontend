import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'component-core-dashboard-overview-charts-traffic',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './charts-traffic.component.html',
})
export class ComponentCoreDashboardOverviewChartsTraffic {

  readonly TrendingUp = TrendingUp;
  readonly ChevronDown = ChevronDown;

}
