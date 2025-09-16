import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TokenStorage } from '@core/auth/token-storage';
import { Branch } from '@interfaces/enterprise.interface';
import { User } from '@interfaces/users.interface';
import { BranchService } from '@services/branch.service';
import { ImageService } from '@services/image.service';
import { UserService } from '@services/user.service';
import { Copy, CopyCheck, LucideAngularModule, MapPin, Phone } from 'lucide-angular';

@Component({
  selector: 'component-core-branch-details-general',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './general.component.html',
})
export class ComponentCoreBranchDetailsGeneral {

  readonly Copy = Copy;
  readonly CopyCheck = CopyCheck;
  readonly MapPin = MapPin;
  readonly Phone = Phone;

  private route = inject(ActivatedRoute);
  private branchService = inject(BranchService);
  private imageService = inject(ImageService);
  private userService = inject(UserService);

  branch?: Branch;
  branchLogoUrl: string = 'img/logo-sucursal.png';
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
      this.branchService.getById(id).subscribe({
        next: async (response: any) => {
          this.branch = response.data;

          if (this.branch?.logoUrl) {
            this.branchLogoUrl = await this.imageService.getProtectedImageUrl(this.branch.logoUrl, token);
          }

          const createdById = this.branch?.audit?.createdBy;
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

          const updatedById = this.branch?.audit?.updatedBy;
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
        error: (error) => this.errorMessage = 'No se pudo cargar la sucursal'
      });
    }
  }

  copyBranchId(id?: string) {
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
