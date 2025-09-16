import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCoreRoleOverviewList } from '@components/core/role/overview/list/list.component';

@Component({
  selector: 'page-core-role-overview',
  imports: [
    RouterLink,
    ComponentCoreRoleOverviewList,
  ],
  templateUrl: './overview.component.html',
})
export class PageCoreRoleOverview {


}
