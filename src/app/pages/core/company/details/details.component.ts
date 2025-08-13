import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { ComponentCoreCompanyDetailsPrincipal } from '@components/core/company/details/principal/principal.component';

@Component({
  selector: 'page-core-company-details',
  imports: [
    RouterLink,
    LucideAngularModule,
    ComponentSharedToast,
    ComponentCoreCompanyDetailsPrincipal
],
  templateUrl: './details.component.html',
})
export class PageCoreCompanyDetails {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

}
