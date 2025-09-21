import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/user.service';
import { LucideAngularModule, AtSign, Lock, Phone } from 'lucide-angular';

@Component({
  selector: 'component-customer-register-user',
  imports: [
    LucideAngularModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentSharedAlertsError
  ],
  templateUrl: './user.component.html',
})
export class ComponentCustomerRegisterUser {

  private userService = inject(UserService);

  readonly AtSign = AtSign;
  readonly Lock = Lock;
  readonly Phone = Phone;

  userForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      phoneNumber: [null, [Validators.minLength(9), Validators.maxLength(20)]],
      email: [null, [Validators.email, Validators.maxLength(100)]],
      password: [null, [Validators.required]],
    });
  }

  // Eliminar cualquier carácter que no sea un número
  onPhoneNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }

  // Función que se ejecuta al enviair el formulario
  onSubmit(): void {

    const btnSubmit = document.querySelector('#submitButton') as HTMLElement;
    const confirmButton = document.querySelector('#alerts-error .btn-primary') as HTMLElement;

    if (btnSubmit) {
      btnSubmit.textContent = 'Cargando...'; // Cambiamos el texto del botón a "Cargando..."
    }

    if (this.userForm.valid) {
      const user: User = this.userForm.value;

      const formData = new FormData();
      formData.append('user', JSON.stringify(user));

      this.userService.create(formData).subscribe({
        next: (response) => {
          console.log('Usuario creado:', response);
          // window.location.href = '/register/empresa';
        },
        error: (err) => {
          this.errorMessage = err.error.error || 'Error al crear el usuario';

          const errorButton = document.querySelector('#open-error-modal') as HTMLElement;
          errorButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Intentar de nuevo';
          }

          if (btnSubmit) {
            btnSubmit.textContent = 'Crear Cuenta'; // Restauramos el texto del botón a "Crear Cuenta"
          }
        }
      })

    }
  }

}
