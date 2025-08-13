import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChevronRight, LucideAngularModule, Download } from 'lucide-angular';

@Component({
  selector: 'page-core-dashboard-stats',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './stats.component.html',
})
export class PageCoreDashboardStats {

  readonly ChevronRight = ChevronRight;
  readonly Download = Download;

}
