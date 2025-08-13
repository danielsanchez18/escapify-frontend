import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedExportFormat } from '@components/shared/export/format/format.component';
import { ComponentSharedExportSummary } from '@components/shared/export/summary/summary.component';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'page-core-company-export',
  imports: [
    RouterLink,
    LucideAngularModule,
    ComponentSharedExportFormat, ComponentSharedExportSummary
  ],
  templateUrl: './export.component.html',
})
export class PageCoreCompanyExport {

  readonly ChevronDown = ChevronDown;

}
