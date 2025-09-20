import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentCompanyDashboardOverviewChartsComparative } from '@components/company/dashboard/overview/charts-comparative/charts-comparative.component';
import { ComponentCompanyDashboardOverviewChartsTraffic } from '@components/company/dashboard/overview/charts-traffic/charts-traffic.component';
import { ComponentCompanyDashboardOverviewStats } from '@components/company/dashboard/overview/stats/stats.component';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'page-company-overview',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentCompanyDashboardOverviewStats,
    ComponentCompanyDashboardOverviewChartsTraffic,
    ComponentCompanyDashboardOverviewChartsComparative,
],
  templateUrl: './overview.component.html',
})
export class PageCompanyDashboardOverview {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

}
