import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCoreDashboardExportSelect } from '@components/core/dashboard/export/select/select.component';
import { ComponentSharedExportFormat } from '@components/shared/export/format/format.component';
import { ComponentSharedExportSummary } from '@components/shared/export/summary/summary.component';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'page-core-dashboard-export',
  imports: [
    RouterLink,
    LucideAngularModule,
    ComponentCoreDashboardExportSelect,
    ComponentSharedExportFormat, ComponentSharedExportSummary
  ],
  templateUrl: './export.component.html',
})
export class PageCoreDashboardExport {

  readonly ChevronDown = ChevronDown;

}
