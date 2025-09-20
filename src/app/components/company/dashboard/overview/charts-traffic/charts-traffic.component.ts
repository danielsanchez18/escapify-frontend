import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'component-company-dashboard-overview-charts-traffic',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './charts-traffic.component.html',
})
export class ComponentCompanyDashboardOverviewChartsTraffic {

  readonly TrendingUp = TrendingUp;
  readonly ChevronDown = ChevronDown;

}
