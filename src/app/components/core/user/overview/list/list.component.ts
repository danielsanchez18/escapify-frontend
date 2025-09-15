import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ComponentSharedPaginator } from '@components/shared/paginator/paginator.component';
import { ComponentSharedSearch } from '@components/shared/search/search.component';
import { Company } from '@interfaces/enterprise.interface';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { User } from '@interfaces/users.interface';
import { CompanyService } from '@services/company.service';
import { ImageService } from '@services/image.service';
import { Check, CircleCheck, ListFilter, LucideAngularModule, Minus, Tag, Users, MapPinHouse, Crown, CircleX, CircleMinus } from 'lucide-angular';
import { UserService } from '@services/user.service';
import { TokenStorage } from '@core/auth/token-storage';
import { BranchService } from '@services/branch.service';

@Component({
  selector: 'component-core-user-overview-list',
  imports: [
    LucideAngularModule,
    CommonModule, FormsModule, RouterLink,
    ComponentSharedSearch,
    ComponentSharedPaginator,
  ],
  templateUrl: './list.component.html',
})
export class ComponentCoreUserOverviewList {

  readonly ListFilter = ListFilter;
  readonly Check = Check;
  readonly Minus = Minus;
  readonly Tag = Tag;
  readonly CircleCheck = CircleCheck;
  readonly CircleX = CircleX;
  readonly CircleMinus = CircleMinus;
  readonly Users = Users;
  readonly MapPinHouse = MapPinHouse;
  readonly Crown = Crown;

  private userService = inject(UserService);
  private imageService = inject(ImageService);


  users: User[] = [];
  searchByName: string = '';
  searchByEmail: string = '';
  searchByProvider: string = '';
  searchByCurrency: string = '';
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

  userMap: { [id: string]: User } = {};
  userPhotoMap: { [id: string]: string } = {};

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.search(
      this.searchByName,
      this.searchByEmail,
      this.searchByProvider,
      this.startDate,
      this.endDate,
      this.enabled,
      this.deleted,
      this.page,
      this.size,
      this.sort
    ).subscribe(
      (response: PaginatedResponse<User>) => {
        this.users = response.data.content;
        this.totalElements = response.data.totalElements;
        this.totalPages = response.data.totalPages;
        this.calculateNumberOfElements();

        const token = TokenStorage.getAccessToken();

        // Obtener IDs únicos de usuarios creadores
        const userIds = Array.from(new Set(this.users.map(c => c.audit?.createdBy).filter(Boolean)));

        // Cargar usuarios y guardarlos en el mapa
        userIds.forEach(id => {
          if (!this.userMap[id]) {
            this.userService.getById(id).subscribe(
              (response: any) => {
                const user = response.data;
                this.userMap[id] = user;
                if (user.photoUrl) {
                  this.imageService.getProtectedImageUrl(user.photoUrl, token ?? '').then(blobUrl => {
                    this.userPhotoMap[id] = blobUrl;
                  });
                }
              },
              (error) => {
                console.error('Error al cargar usuario', error);
              }
            );
          }
        });

        this.users.forEach(user => {
          if (user.photoUrl) {
            this.imageService.getProtectedImageUrl(user.photoUrl, token ?? '').then(blobUrl => {
              this.userPhotoMap[user.id!] = blobUrl;
            });
          }
        })

      },
      (error) => {
        console.error('Error al cargar las empresas', error);
      }
    )
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber < this.totalPages) {
      this.page = pageNumber;
      this.loadUsers();
    }
  }

  calculateNumberOfElements(): void {
    this.numberOfElements = Math.min((this.page + 1) * this.size, this.totalElements);
  }

  // Método para limpiar la búsqueda desde el componente hijo
  clearSearch(): void {
    this.searchByName = '';
    this.loadUsers();
  }

}
