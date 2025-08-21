import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { ComponentCoreCompanyDetailsPrincipal } from '@components/core/company/details/principal/principal.component';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { Company } from '@interfaces/company.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-core-company-details',
  imports: [
    RouterModule,
    CommonModule,
    LucideAngularModule,
    ComponentSharedToast,
    ComponentCoreCompanyDetailsPrincipal,
    ComponentSharedAlertsConfirm,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError
],
  templateUrl: './details.component.html',
})
export class PageCoreCompanyDetails {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

  company!: Company;
  successMessage: string = '';
  errorMessage: string = '';

  onConfirmDeleteCompany() {
  }

}
