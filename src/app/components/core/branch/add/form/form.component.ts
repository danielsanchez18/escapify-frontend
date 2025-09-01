import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { ComponentSharedSearch } from '@components/shared/search/search.component';
import { TokenStorage } from '@core/auth/token-storage';
import { Branch, Company } from '@interfaces/enterprise.interface';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { BranchService } from '@services/branch.service';
import { CompanyService } from '@services/company.service';
import { ImageService } from '@services/image.service';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'component-core-branch-add-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    LucideAngularModule,
    ComponentSharedSearch,
    ComponentSharedAlertsConfirm,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError,
  ],
  templateUrl: './form.component.html',
})
export class ComponentCoreBranchAddForm {

  readonly X = X;

  companies: Company[] = [];
  searchByName: string = '';
  searchByTag: string = '';
  searchByCountry: string = '';
  searchByCurrency: string = '';
  startDate: string | null = null;
  endDate: string | null = null;
  enabled: boolean = true;
  deleted: boolean = false;
  page: number = 0;
  size: number = 5;
  sort: string = '';
  totalElements: number = 0;
  numberOfElements: number = 0;
  totalPages: number = 0;

  logoMap: { [companyId: string]: string } = {};

  companySelected: Company | null = null;

  branchForm!: FormGroup;
  image: File | null = null;

  successMessage: string = '';
  errorMessage: string = '';
  errorMessageValidator: string = '';

  private companyService = inject(CompanyService);
  private branchService = inject(BranchService);
  private imageService = inject(ImageService);


  constructor(private fb: FormBuilder) {
    this.branchForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      phoneNumber: [null, [Validators.minLength(9), Validators.maxLength(20)]],
      address: [null, [Validators.required, Validators.maxLength(100)]],
      country: [null, [Validators.required, Validators.maxLength(20)]],
      city: [null, [Validators.required, Validators.maxLength(20)]],
      companyId: [null, Validators.required],
    });
  }

  loadCompanies(): void {
    if (!this.searchByName) {
      this.companies = [];
      return;
    }

    if (this.searchByName && this.searchByName.length < 3) {
      return;
    }

    this.companyService.search(
      this.searchByName,
      this.searchByTag,
      this.searchByCountry,
      this.searchByCurrency,
      this.startDate,
      this.endDate,
      this.enabled,
      this.deleted,
      this.page,
      this.size,
      this.sort
    ).subscribe(
      (response: PaginatedResponse<Company>) => {
        this.companies = response.data.content;
        this.totalElements = response.data.totalElements;
        this.totalPages = response.data.totalPages;

        const token = TokenStorage.getAccessToken();
        this.companies.forEach(company => {
          if (company.logoUrl) {
            this.imageService.getProtectedImageUrl(company.logoUrl, token ?? '').then(blobUrl => {
              this.logoMap[company.id!] = blobUrl;
            });
          }
        });
      },
      (error) => {
        console.error('Error al cargar las empresas', error);
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

  onCompanySelected(company: Company): void {
    this.companySelected = company;
    this.companies = [];
    this.searchByName = '';
    this.branchForm.patchValue({ companyId: company.id });
    this.branchForm.patchValue({ country: company.country });
    console.log('Empresa seleccionada:', company);
  }

  // Función que se ejecuta al enviar el formulario
  onConfirmBranch(): void {

    // Cambiar el texto del botón a "Cargando..." cada vez que se haga clic en "Confirmar"
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) {
      confirmButton.textContent = 'Cargando...';  // Cambiamos el texto a "Cargando..."
    }

    if (this.branchForm.valid) {
      const branch: Branch = this.branchForm.value;

      const formData = new FormData();
      formData.append('branch', JSON.stringify(branch));

      if (this.image) {
        formData.append('image', this.image);
      }

      this.branchService.create(formData).subscribe({
        next: (response: any) => {
          this.successMessage = response.message || 'Sucursal creada exitosamente.';
          const successButton = document.querySelector('#open-success-modal') as HTMLElement;
          successButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        },
        error: (err) => {
          this.errorMessage = err.error.error || 'Error al crear la sucursal.';
          const errorButton = document.querySelector('#open-error-modal') as HTMLElement;
          errorButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        }
      });
    }

  }

}
