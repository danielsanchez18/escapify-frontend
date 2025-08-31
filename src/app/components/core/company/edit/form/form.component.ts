import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { Company } from '@interfaces/enterprise.interface';
import { CompanyService } from '@services/company.service';

@Component({
  selector: 'component-core-company-edit-form',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ComponentSharedAlertsConfirm, ComponentSharedAlertsSuccess, ComponentSharedAlertsError
  ],
  templateUrl: './form.component.html',
})
export class ComponentCoreCompanyEditForm implements OnInit {

  private companyService = inject(CompanyService);
  private route = inject(ActivatedRoute);

  companyForm!: FormGroup;
  company?: Company;
  originalCompanyData: any;
  image: File | null = null;

  companyId!: string;
  successMessage: string = '';
  errorMessage: string = '';
  errorMessageValidator: string = '';

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('id') || '';
    if (this.companyId) {
      this.getCompanyDetails(this.companyId);
    }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.companyForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: [null, [Validators.maxLength(255)]],
      tag: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      phoneNumber: [null, [Validators.minLength(9), Validators.maxLength(20)]],
      country: [null, [Validators.required]],
      currency: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.maxLength(100)]],
      website: [null, [Validators.pattern('^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6})?(\/[^\s]*)?$')]],
    });
  }

  // Obtener los detalles de la empresa
  getCompanyDetails(id: string): void {
    this.companyService.getById(id).subscribe(
      (company: any) => {
        this.company = company.data;
        this.originalCompanyData = { ...company.data }; // Guardamos una copia de los datos originales
        this.companyForm.patchValue({
          name: company.data.name,
          description: company.data.description,
          tag: company.data.tag,
          phoneNumber: company.data.phoneNumber,
          country: company.data.country,
          currency: company.data.currency,
          email: company.data.email,
          website: company.data.website,
        });

        // Si ya existe una URL para la imagen, la mantenemos en el formulario
        if (company.data.logoUrl) {
          this.companyForm.patchValue({
            logoUrl: company.data.logoUrl
          });
        }
      },
      (error) => {
        this.errorMessage = error.error.error || 'Error al actualizar la empresa';
        console.error("Error al actualizar la empresa:", this.errorMessage);
      }
    );
  }

  // Eliminar cualquier carácter que no sea un número
  onPhoneNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
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

  // Función que se ejecuta al enviar el formulario
  onConfirmCompany(): void {
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) {
      confirmButton.textContent = 'Cargando...';  // Cambiamos el texto a "Cargando..."
    }

    if (this.companyForm.valid) {
      const company: Company = this.companyForm.value;
      const formData = new FormData();

      formData.append('company', JSON.stringify(company)); // Convertimos la empresa a JSON

      if (this.image) {
        formData.append('image', this.image);
      } else if (this.company?.logoUrl) {
        formData.append('logoUrl', this.company.logoUrl);
      }

      this.companyService.update(this.companyId, formData).subscribe({
        next: (response: any) => {
          this.successMessage = response.message || 'Empresa actualizada exitosamente';
          const successButton = document.querySelector('#open-success-modal') as HTMLElement;
          successButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        },
        error: (err) => {
          this.errorMessage = err.error.error || 'Error al actualizar la empresa';
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
