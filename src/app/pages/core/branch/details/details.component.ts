import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComponentCoreBranchDetailsPrincipal } from '@components/core/branch/details/principal/principal.component';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { TokenStorage } from '@core/auth/token-storage';
import { Branch } from '@interfaces/enterprise.interface';
import { BranchService } from '@services/branch.service';
import { ImageService } from '@services/image.service';

@Component({
  selector: 'page-core-branch-details',
  imports: [
    RouterModule,
    CommonModule,
    ComponentCoreBranchDetailsPrincipal,
    ComponentSharedToast,
    ComponentSharedAlertsConfirm,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError
  ],
  templateUrl: './details.component.html',
})
export class PageCoreBranchDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private branchService = inject(BranchService);
  private imageService = inject(ImageService);

  branch?: Branch;
  branchLogoUrl: string = 'img/logo-min.png';
  confirmMessage: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.branchService.getById(id).subscribe({
        next: async (response: any) => {
          this.branch = response.data;
          if (this.branch?.logoUrl) {
            const token = TokenStorage.getAccessToken() ?? '';
            this.branchLogoUrl = await this.imageService.getProtectedImageUrl(this.branch.logoUrl, token);
          }
          if (this.branch?.deleted) {
            this.confirmMessage = '¿Está seguro de que desea restaurar esta sucursal?';
          }
          if (!this.branch?.deleted) {
            this.confirmMessage = '¿Está seguro de que desea eliminar esta sucursal?';
          }
        },
        error: (err) => {
          this.errorMessage = err.error?.error || 'Error al obtener la sucursal';
          console.log(err);

          const errorButton = document.getElementById('open-error-modal') as HTMLElement;
          errorButton?.click();

          const confirmButton = document.querySelector('#alerts-error .btn-primary') as HTMLElement;
          if (confirmButton) confirmButton.textContent = 'Regresar';
          confirmButton.addEventListener('click', () => {
            window.location.href = '/core/sucursales';
          });
        }
      });
    }
  }

  onConfirmDeleteBranch() {

    if (!this.branch?.id) return;

    // Cambia el texto del botón de confirmación a "Eliminando..."
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) confirmButton.textContent = 'Eliminando...';

    this.branchService.delete(this.branch.id).subscribe({
      next: (response: any) => {
        // Mensaje de éxito desde el backend o por defecto
        this.successMessage = response.message || 'Sucursal eliminada exitosamente';
        // Abre el modal de éxito
        const successButton = document.getElementById('open-success-modal') as HTMLElement;
        successButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      },
      error: (err) => {
        // Mensaje de error desde el backend o por defecto
        this.errorMessage = err.error?.error || 'Error al eliminar la sucursal';
        // Abre el modal de error
        const errorButton = document.getElementById('open-error-modal') as HTMLElement;
        errorButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      }
    });

  }

  onConfirmRestoreBranch() {
    if (!this.branch?.id) return;

    // Cambia el texto del botón de confirmación a "Restaurando..."
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) confirmButton.textContent = 'Restaurando...';

    this.branchService.restore(this.branch.id).subscribe({
      next: (response: any) => {
        // Mensaje de éxito desde el backend o por defecto
        this.successMessage = response.message || 'Sucursal restaurada exitosamente';
        // Abre el modal de éxito
        const successButton = document.getElementById('open-success-modal') as HTMLElement;
        successButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      },
      error: (err) => {
        // Mensaje de error desde el backend o por defecto
        this.errorMessage = err.error?.error || 'Error al restaurar la sucursal';
        // Abre el modal de error
        const errorButton = document.getElementById('open-error-modal') as HTMLElement;
        errorButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      }
    });

  }

  onConfirmBranchAction() {
    if (this.branch?.deleted) {
      this.onConfirmRestoreBranch();
    }
    if (!this.branch?.deleted) {
      this.onConfirmDeleteBranch();
    }
  }

}
