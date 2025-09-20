import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ComponentCustomerSharedNavbar } from '@components/customer/shared/navbar/navbar.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { AuthRequest } from '@interfaces/authentication.interface';
import { AuthService } from '@services/auth.service';
import { AtSign, Lock, LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'page-login',
  imports: [
    LucideAngularModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentCustomerSharedNavbar,
    ComponentSharedAlertsError,
],
  templateUrl: './login.component.html',
})
export class PageLogin {

  errorMessage = '';
  titleError = '';

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly AtSign = AtSign;
  readonly Lock = Lock;

  // Flag de carga
  loading = signal(false);

  // Formulario reactivo
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false]
  });

  async onSubmit() {
    if (this.form.invalid) return;

    this.loading.set(true);

    try {

      await this.authService.login(this.form.value as AuthRequest);
      this.loading.set(false);
      this.router.navigate(['/core']); // redirigir al core

    } catch (err: any) {

      this.loading.set(false);
      // Detectar error de credenciales inválidas (401 o mensaje específico)
      if (err?.status === 401 || err?.status === 403 || err?.error?.message?.toLowerCase().includes('invalid') || err?.error?.message?.toLowerCase().includes('credenciales')) {
        this.titleError = 'Credenciales inválidas';
        this.errorMessage = 'Por favor verifica tu correo y contraseña.';
      } else {
        this.titleError = 'Error de conexión';
        this.errorMessage = 'Error interno, inténtelo más tarde';
      }
      // Mostrar mensaje en el modal
      const errorModalBtn = document.getElementById('open-error-modal');
      if (errorModalBtn) {
        errorModalBtn.click();
      }

    }
  }

}
