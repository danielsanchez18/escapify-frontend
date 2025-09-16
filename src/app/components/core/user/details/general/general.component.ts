import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TokenStorage } from '@core/auth/token-storage';
import { User } from '@interfaces/users.interface';
import { ImageService } from '@services/image.service';
import { UserService } from '@services/user.service';
import { Check, Copy, LucideAngularModule, CopyCheck, AtSign, Phone, UserCog, Info } from 'lucide-angular';

@Component({
  selector: 'component-core-user-details-general',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './general.component.html',
})
export class ComponentCoreUserDetailsGeneral {

  readonly Copy = Copy;
  readonly CopyCheck = CopyCheck;
  readonly Check = Check;

  readonly Info = Info;
  readonly UserCog = UserCog;
  readonly AtSign = AtSign;
  readonly Phone = Phone;

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private imageService = inject(ImageService);

  user?: User;
  userPhotoUrl: string = '/img/logo-min.png';
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
      this.userService.getById(id).subscribe({
        next: async (response: any) => {
          this.user = response.data;

          if (this.user?.photoUrl) {
            this.userPhotoUrl = await this.imageService.getProtectedImageUrl(this.user.photoUrl, token);
          }

          const createdById = this.user?.audit?.createdBy;
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

          const updatedById = this.user?.audit?.updatedBy;
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
        error: (error) => this.errorMessage = error?.error?.message || 'Error al cargar el usuario'
      })
    }
  }

  copyUserId(id?: string) {
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
