import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCoreUserOverviewList } from '@components/core/user/overview/list/list.component';
import { ComponentCoreUserOverviewStats } from '@components/core/user/overview/stats/stats.component';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'page-core-user-overview',
  imports: [
    LucideAngularModule,
    RouterLink,
    ComponentCoreUserOverviewStats,
    ComponentCoreUserOverviewList,
  ],
  templateUrl: './overview.component.html',
})
export class PageCoreUserOverview {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

}
