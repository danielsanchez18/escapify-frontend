import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComponentCoreUserDetailsPrincipal } from '@components/core/user/details/principal/principal.component';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { ComponentSharedToast } from '@components/shared/toast/toast.component';
import { TokenStorage } from '@core/auth/token-storage';
import { User } from '@interfaces/users.interface';
import { ImageService } from '@services/image.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'page-core-user-details',
  imports: [
    CommonModule,
    RouterModule,
    ComponentCoreUserDetailsPrincipal,
    ComponentSharedToast,
    ComponentSharedAlertsConfirm,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError
  ],
  templateUrl: './details.component.html',
})
export class PageCoreUserDetails {

  user?: User;
  userPhotoUrl: string = 'img/logo-min.png';
  confirmMessage: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private imageService = inject(ImageService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(id).subscribe({
        next: async (response: any) => {
          this.user = response.data;
          if (this.user?.photoUrl) {
            const token = TokenStorage.getAccessToken() ?? '';
            this.userPhotoUrl = await this.imageService.getProtectedImageUrl(this.user.photoUrl, token);
          }
          if (this.user?.deleted) {
            this.confirmMessage = '¿Está seguro de que desea restaurar este usuario?';
          }
          if (!this.user?.deleted) {
            this.confirmMessage = '¿Está seguro de que desea eliminar este usuario?';
          }
        },
        error: (error) => {

          this.errorMessage = error.error?.error || 'Error al obtener el usuario';
          console.log(error);

          const errorButton = document.getElementById('open-error-modal') as HTMLElement;
          errorButton?.click();

          const confirmButton = document.querySelector('#alerts-error .btn-primary') as HTMLElement;
          if (confirmButton) confirmButton.textContent = 'Regresar';

          confirmButton.addEventListener('click', () => {
            window.location.href = '/core/usuarios';
          });
        }
      });
    }
  }

  onConfirmDeleteUser() {

    if (!this.user?.id) return;

    // Cambia el texto del botón de confirmación a "Eliminando..."
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) confirmButton.textContent = 'Eliminando...';

    this.userService.delete(this.user.id).subscribe({
      next: (response: any) => {
        // Mensaje de éxito desde el backend o por defecto
        this.successMessage = response.message || 'Usuario eliminado exitosamente';
        // Abre el modal de éxito
        const successButton = document.getElementById('open-success-modal') as HTMLElement;
        successButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      },
      error: (err) => {
        // Mensaje de error desde el backend o por defecto
        this.errorMessage = err.error?.error || 'Error al eliminar el usuario';
        // Abre el modal de error
        const errorButton = document.getElementById('open-error-modal') as HTMLElement;
        errorButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      }
    });

  }

  onConfirmRestoreUser() {
    if (!this.user?.id) return;

    // Cambia el texto del botón de confirmación a "Restaurando..."
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) confirmButton.textContent = 'Restaurando...';

    this.userService.restore(this.user.id).subscribe({
      next: (response: any) => {
        this.successMessage = response.message || 'Usuario restaurado exitosamente';
        const successButton = document.getElementById('open-success-modal') as HTMLElement;
        successButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Error al restaurar el usuario';
        const errorButton = document.getElementById('open-error-modal') as HTMLElement;
        errorButton?.click();
        if (confirmButton) confirmButton.textContent = 'Confirmar';
      }
    });

  }

  onConfirmUserAction() {
    if (this.user?.deleted) {
      this.onConfirmRestoreUser();
    }
    if (!this.user?.deleted) {
      this.onConfirmDeleteUser();
    }
  }

}
