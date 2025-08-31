import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { ComponentCoreCompanyDetailsPrincipal } from '@components/core/company/details/principal/principal.component';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { Company } from '@interfaces/enterprise.interface';
import { CommonModule } from '@angular/common';
import { CompanyService } from '@services/company.service';
import { TokenStorage } from '@core/auth/token-storage';
import { ImageService } from '@services/image.service';

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
export class PageCoreCompanyDetails implements OnInit {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

  private route = inject(ActivatedRoute);
  private companyService = inject(CompanyService);
  private imageService = inject(ImageService);

  company?: Company;
  companyLogoUrl: string = 'img/logo-min.png';
  confirmMessage: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.companyService.getById(id).subscribe({
        next: async (response: any) => {
          this.company = response.data;
          if (this.company?.logoUrl) {
            const token = TokenStorage.getAccessToken() ?? '';
            this.companyLogoUrl = await this.imageService.getProtectedImageUrl(this.company.logoUrl, token);
          }
          if (this.company?.deleted) {
            this.confirmMessage = '¿Está seguro de que desea restaurar esta empresa?';
          }
          if (!this.company?.deleted) {
            this.confirmMessage = '¿Está seguro de que desea eliminar esta empresa?';
          }
        },
        error: (error) => this.errorMessage = 'No se pudo cargar la empresa'
      });
    }
  }

  onConfirmDeleteCompany() {

    if (!this.company?.id) return;

    // Cambia el texto del botón de confirmación a "Eliminando..."
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) confirmButton.textContent = 'Eliminando...';

    this.companyService.delete(this.company.id).subscribe({
      next: (response: any) => {
        // Mensaje de éxito desde el backend o por defecto
        this.successMessage = response.message || 'Empresa eliminada exitosamente';
        // Abre el modal de éxito
        const successButton = document.getElementById('open-success-modal') as HTMLElement;
        successButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      },
      error: (err) => {
        // Mensaje de error desde el backend o por defecto
        this.errorMessage = err.error?.error || 'Error al eliminar la empresa';
        // Abre el modal de error
        const errorButton = document.getElementById('open-error-modal') as HTMLElement;
        errorButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      }
    });

  }

  onConfirmRestoreCompany() {
    if (!this.company?.id) return;

    // Cambia el texto del botón de confirmación a "Restaurando..."
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) confirmButton.textContent = 'Restaurando...';

    this.companyService.restore(this.company.id).subscribe({
      next: (response: any) => {
        this.successMessage = response.message || 'Empresa restaurada exitosamente';
        const successButton = document.getElementById('open-success-modal') as HTMLElement;
        successButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Error al restaurar la empresa';
        const errorButton = document.getElementById('open-error-modal') as HTMLElement;
        errorButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      }
    });

  }

  onConfirmCompanyAction() {
    if (this.company?.deleted) {
      this.onConfirmRestoreCompany();
    }
    if (!this.company?.deleted) {
      this.onConfirmDeleteCompany();
    }
  }

}
