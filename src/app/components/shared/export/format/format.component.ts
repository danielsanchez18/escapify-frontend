import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { File, FileSpreadsheetIcon, LucideAngularModule, Table, Download } from 'lucide-angular';

@Component({
  selector: 'component-shared-export-format',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './format.component.html',
})
export class ComponentSharedExportFormat {

  readonly Download = Download;
  readonly Table = Table;
  readonly File = File;
  readonly FileSpreadsheetIcon = FileSpreadsheetIcon;

}
