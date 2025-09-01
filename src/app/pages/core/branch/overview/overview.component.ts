import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCoreBranchOverviewStats } from '@components/core/branch/overview/stats/stats.component';
import { ComponentCoreBranchOverviewList } from '@components/core/branch/overview/list/list.component';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'page-core-branch-overview',
  imports: [
    LucideAngularModule,
    RouterLink,
    ComponentCoreBranchOverviewStats,
    ComponentCoreBranchOverviewList,
  ],
  templateUrl: './overview.component.html',
})
export class PageCoreBranchOverview {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;


}
