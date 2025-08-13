import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentCoreDashboardOverviewChartsComparative } from '@components/core/dashboard/overview/charts-comparative/charts-comparative.component';
import { ComponentCoreDashboardOverviewChartsTraffic } from '@components/core/dashboard/overview/charts-traffic/charts-traffic.component';
import { ComponentCoreDashboardOverviewStats } from '@components/core/dashboard/overview/stats/stats.component';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'page-dashboard-overview',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentCoreDashboardOverviewStats,
    ComponentCoreDashboardOverviewChartsTraffic,
    ComponentCoreDashboardOverviewChartsComparative,
],
  templateUrl: './overview.component.html',
})
export class PageCoreDashboardOverview {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

}
