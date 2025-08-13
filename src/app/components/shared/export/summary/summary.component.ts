import { Component } from '@angular/core';
import { Check, LucideAngularModule, Download } from 'lucide-angular';

@Component({
  selector: 'component-shared-export-summary',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './summary.component.html',
})
export class ComponentSharedExportSummary {

  readonly Check = Check;
  readonly Download = Download;

}
