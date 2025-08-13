import { Component } from '@angular/core';
import { FileCog, LucideAngularModule, Settings, TrendingUp, Check, Building2 } from 'lucide-angular';

@Component({
  selector: 'component-core-dashboard-export-select',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './select.component.html',
})
export class ComponentCoreDashboardExportSelect {

  readonly FileCog = FileCog;

  readonly TrendingUp = TrendingUp;
  readonly Settings = Settings;
  readonly Check = Check;
  readonly Building2 = Building2;

}
