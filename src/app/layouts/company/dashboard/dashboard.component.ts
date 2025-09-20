import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentCompanySharedNavbar } from '@components/company/shared/navbar/navbar.component';
import { ChevronRight, LucideAngularModule, Menu, Search } from 'lucide-angular';

@Component({
  selector: 'layout-company-dashboard',
  imports: [
    LucideAngularModule,
    ComponentCompanySharedNavbar,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
})
export class LayoutCompanyDashboard {

  readonly Search = Search;
  readonly Menu = Menu;
  readonly ChevronRight = ChevronRight;

}
