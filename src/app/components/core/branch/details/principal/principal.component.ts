import { Component, Input } from '@angular/core';
import { Branch } from '@interfaces/enterprise.interface';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, List, Users, ClipboardCheck, ChartPie, Cog } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-core-branch-details-principal',
  imports: [
    RouterModule,
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './principal.component.html',
})
export class ComponentCoreBranchDetailsPrincipal {

  @Input() branch?: Branch;
  @Input() branchLogoUrl: string = 'img/logo-min.png';

  readonly List = List;
  readonly Users = Users;
  readonly ClipboardCheck = ClipboardCheck;
  readonly ChartPie = ChartPie;
  readonly Cog = Cog;

}
