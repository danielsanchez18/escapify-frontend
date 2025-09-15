import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/user.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-core-user-add-form',
  imports: [
    LucideAngularModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    ComponentSharedAlertsConfirm,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError
  ],
  templateUrl: './form.component.html',
})
export class ComponentCoreUserAddForm {

  private userService = inject(UserService);

  userForm!: FormGroup;
  image: File | null = null;

  successMessage: string = '';
  errorMessage: string = '';
  errorMessageValidator: string = '';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      phoneNumber: [null, [Validators.minLength(9), Validators.maxLength(20)]],
      email: [null, [Validators.email, Validators.maxLength(100)]],
      password: [null, [Validators.required]],
    });
  }

  // Función que se ejecuta cuando se selecciona una imagen
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.image = input.files[0]; // Almacenamos la imagen seleccionada

      // Verificar si el tamaño de la imagen es mayor a 2 MB
      if (this.image.size > 2 * 1024 * 1024) {
        this.errorMessageValidator = 'La imagen no debe pesar más de 2 MB.';
        this.image = null; // Limpiamos la imagen
        input.value = ''; // Limpiamos el input del archivo
      } else {
        this.errorMessageValidator = ''; // Limpiar el mensaje de error si la imagen es válida
      }
    }
  }

  // Eliminar cualquier carácter que no sea un número
  onPhoneNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }

  // Función que se ejecuta al enviar el formulario
  onConfirmUser(): void {

    // Cambiar el texto del botón a "Cargando..." cada vez que se haga clic en "Confirmar"
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) {
      confirmButton.textContent = 'Cargando...';  // Cambiamos el texto a "Cargando..."
    }

    if (this.userForm.valid) {
      const user: User = this.userForm.value;

      const formData = new FormData();
      formData.append('user', JSON.stringify(user)); // Convertimos el usuario a JSON

      if (this.image) {
        formData.append('image', this.image); // Añadimos la imagen al FormData si existe
      }

      this.userService.create(formData).subscribe({
        next: (response: any) => {
          this.successMessage = response.message || 'Usuario creado exitosamente';
          const successButton = document.querySelector('#open-success-modal') as HTMLElement;
          successButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        },
        error: (err) => {
          this.errorMessage = err.error.error || 'Error al crear el usuario';
          const errorButton = document.querySelector('#open-error-modal') as HTMLElement;
          errorButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        },
      });
    }
  }

}
