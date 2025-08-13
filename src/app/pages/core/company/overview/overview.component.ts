import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';
import { ComponentCoreCompanyOverviewStats } from '@components/core/company/overview/stats/stats.component';
import { ComponentCoreCompanyOverviewList } from "@components/core/company/overview/list/list.component";

@Component({
  selector: 'page-core-company-overview',
  imports: [
    RouterModule,
    LucideAngularModule,
    ComponentCoreCompanyOverviewStats,
    ComponentCoreCompanyOverviewList
],
  templateUrl: './overview.component.html',
})
export class PageCoreCompanyOverview {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

}
