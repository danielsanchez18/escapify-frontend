import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentCoreSharedNavbar } from '@components/core/shared/navbar/navbar.component';
import { Bell, LucideAngularModule, Menu, MessageCircle, Search, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'layout-core-dashboard',
  imports: [
    LucideAngularModule,
    ComponentCoreSharedNavbar,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
})
export class LayoutCoreDashboard {

  readonly Search = Search;
  readonly Menu = Menu;
  readonly ChevronRight = ChevronRight;
}
