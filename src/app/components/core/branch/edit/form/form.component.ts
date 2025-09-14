import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { Branch } from '@interfaces/enterprise.interface';
import { BranchService } from '@services/branch.service';

@Component({
  selector: 'component-core-branch-edit-form',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ComponentSharedAlertsConfirm,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError
  ],
  templateUrl: './form.component.html',
})
export class ComponentCoreBranchEditForm {

  private branchService = inject(BranchService);
  private route = inject(ActivatedRoute);

  branchForm!: FormGroup;
  branch?: Branch;
  originalBranchData: any;
  image: File | null = null;

  branchId!: string;
  successMessage: string = '';
  errorMessage: string = '';
  errorMessageValidator: string = '';

  ngOnInit() {
    this.branchId = this.route.snapshot.paramMap.get('id') || '';
    if (this.branchId) {
      this.getBranchDetails(this.branchId);
    }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.branchForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      phoneNumber: [null, [Validators.minLength(9), Validators.maxLength(20)]],
      address: [null, [Validators.required, Validators.maxLength(100)]],
      city: [null, [Validators.required, Validators.maxLength(20)]],
      country: [null, [Validators.required, Validators.maxLength(20)]],
    })
  }

  getBranchDetails(id: string): void {
    this.branchService.getById(id).subscribe(
      (branch: any) => {
        this.branch = branch.data;
        this.originalBranchData = { ...branch.data };
        this.branchForm.patchValue({
          name: branch.data.name,
          phoneNumber: branch.data.phoneNumber,
          address: branch.data.address,
          city: branch.data.city,
          country: branch.data.country,
        });

        if (branch.data.imageUrl) {
          this.branchForm.patchValue({
            logoUrl: branch.data.logoUrl
          });
        }
      },
      (error) => {
        this.errorMessage = error.error.error || 'Error al obtener los detalles de la sucursal.';
        console.error('Error al obtener los detalles de la sucursal:', error);
      }
    )
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
  onConfirmBranch(): void {
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) {
      confirmButton.textContent = 'Cargando...';
    }

    if (this.branchForm.valid) {
      const branch: Branch = this.branchForm.value;
      const formData = new FormData();

      formData.append('branch', JSON.stringify(branch)); // Convertimos la sucursal a JSON

      if (this.image) {
        formData.append('image', this.image);
      } else if (this.branch?.logoUrl) {
        formData.append('logoUrl', this.branch.logoUrl);
      }

      this.branchService.update(this.branchId, formData).subscribe({
        next: (response: any) => {
          this.successMessage = response.message || 'Sucursal actualizada con éxito.';
          const successButton = document.querySelector('#open-success-modal') as HTMLElement;
          successButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        },
        error: (err) => {
          this.errorMessage = err.error.error || 'Error al actualizar la sucursal';
          const errorButton = document.querySelector('#open-error-modal') as HTMLElement;
          errorButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        }
      })
    }
  }

}
