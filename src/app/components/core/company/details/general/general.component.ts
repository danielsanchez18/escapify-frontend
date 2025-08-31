import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TokenStorage } from '@core/auth/token-storage';
import { Company } from '@interfaces/enterprise.interface';
import { User } from '@interfaces/users.interface';
import { CompanyService } from '@services/company.service';
import { ImageService } from '@services/image.service';
import { UserService } from '@services/user.service';
import { Copy, Globe, LucideAngularModule, Mail, Phone, Tag, MapPin, Coins, CopyCheck } from 'lucide-angular';

@Component({
  selector: 'component-core-company-details-general',
  imports: [
    LucideAngularModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './general.component.html',
})
export class ComponentCoreCompanyDetailsGeneral {

  readonly Globe = Globe;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Copy = Copy;
  readonly CopyCheck = CopyCheck;
  readonly Tag = Tag;
  readonly MapPin = MapPin;
  readonly Coins = Coins;

  private route = inject(ActivatedRoute);
  private companyService = inject(CompanyService);
  private imageService = inject(ImageService);
  private userService = inject(UserService);

  company?: Company;
  companyLogoUrl: string = 'img/logo-min.png';
  createdByUser?: User;
  updatedByUser?: User;
  createdByPhotoUrl: string = '/img/logo-min.png';
  updatedByPhotoUrl: string = '/img/logo-min.png';
  errorMessage: string = '';

  isCopied = false;
  isCopyDisabled = false;

  ngOnInit() {
    const token = TokenStorage.getAccessToken() ?? '';
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.companyService.getById(id).subscribe({
        next: async (response: any) => {

          this.company = response.data;
          if (this.company?.logoUrl) {
            this.companyLogoUrl = await this.imageService.getProtectedImageUrl(this.company.logoUrl, token);
          }

          const createdById = this.company?.audit?.createdBy;
          if (createdById) {
            this.userService.getById(createdById).subscribe({
              next: async (res: any) => {
                this.createdByUser = res.data;
                if (this.createdByUser?.photoUrl) {
                  this.createdByPhotoUrl = await this.imageService.getProtectedImageUrl(this.createdByUser.photoUrl, token);
                }
              },
              error: (error) => {
                this.createdByUser = { name: 'Desconocido', lastname: '', photoUrl: this.createdByPhotoUrl } as User;
                console.error('No se pudo cargar el usuario creador', error);
              }
            });
          }

          const updatedById = this.company?.audit?.updatedBy;
          if (updatedById) {
            this.userService.getById(updatedById).subscribe({
              next: async (res: any) => {
                this.updatedByUser = res.data;
                if (this.updatedByUser?.photoUrl) {
                  this.updatedByPhotoUrl = await this.imageService.getProtectedImageUrl(this.updatedByUser.photoUrl, token);
                }
              },
              error: (error) => {
                this.updatedByUser = { name: 'Desconocido', lastname: '', photoUrl: this.updatedByPhotoUrl } as User;
                console.error('No se pudo cargar el usuario actualizador', error);
              }
            });
          }

        },
        error: (error) => this.errorMessage = 'No se pudo cargar la empresa'
      });
    }
  }

  copyCompanyId(id?: string) {
    if (!id || this.isCopyDisabled) return;
    navigator.clipboard.writeText(id);
    this.isCopied = true;
    this.isCopyDisabled = true;
    setTimeout(() => {
      this.isCopied = false;
      this.isCopyDisabled = false;
    }, 5000);
  }

}
