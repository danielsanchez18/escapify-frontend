import { Component } from '@angular/core';
import { LayoutGrid, LucideAngularModule, Menu } from 'lucide-angular';

@Component({
  selector: 'component-core-role-overview-list',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './list.component.html',
})
export class ComponentCoreRoleOverviewList {

  readonly LayoutGrid = LayoutGrid;
  readonly Menu = Menu;

}
