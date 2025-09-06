import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TokenStorage } from '@core/auth/token-storage';
import { Branch, Company } from '@interfaces/enterprise.interface';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { BranchService } from '@services/branch.service';
import { CompanyService } from '@services/company.service';
import { ImageService } from '@services/image.service';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
  selector: 'component-core-company-details-branchs',
  imports: [
    RouterLink,
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './branchs.component.html',
})
export class ComponentCoreCompanyDetailsBranchs {

  readonly Plus = Plus;

  private route = inject(ActivatedRoute);
  private companyService = inject(CompanyService);
  private branchService = inject(BranchService);
  private imageService = inject(ImageService);

  company?: Company;
  branches: Branch[] = [];
  searchByName: string = '';
  searchByAddress: string = '';
  searchByCity: string = '';
  searchByCountry: string = '';
  searchByCompanyId: string = '';
  startDate: string | null = null;
  endDate: string | null = null;
  enabled: boolean | null = null;
  deleted: boolean | null = null;
  page: number = 0;
  size: number = 5;
  sort: string = 'audit,desc';
  totalElements: number = 0;
  numberOfElements: number = 0;
  totalPages: number = 0;

  logoMap: { [branchId: string]: string } = {};

  ngOnInit(): void {
    this.loadCompany();
  }

  loadBranches(): void {
    if (!this.company?.id) return;
    this.branchService.getByCompanyId(
      this.company.id,
      this.page,
      this.size,
    ).subscribe(
      (response: PaginatedResponse<Branch>) => {
        this.branches = response.data.content;
        const token = TokenStorage.getAccessToken();
        this.branches.forEach(branch => {
          if (branch.logoUrl) {
            this.imageService.getProtectedImageUrl(branch.logoUrl, token ?? '').then(blobUrl => {
              this.logoMap[branch.id!] = blobUrl;
            });
          }
        });
      },
      (error) => {
        console.error('Error al cargar las sucursales', error);
      }
    )
  }

  loadCompany(): void {
    const id = this.route.parent?.snapshot.paramMap.get('id');
    console.log('ID de la empresa:', id);
    if (id) {
      this.companyService.getById(id).subscribe(
        (response: any) => {
          this.company = response.data;
          console.log('Empresa cargada:', this.company);
          this.loadBranches();
        },
        (error) => {
          console.error('Error al cargar la empresa', error);
        }
      );
    }
  }

}
