import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentSharedPaginator } from '@components/shared/paginator/paginator.component';
import { ComponentSharedSearch } from '@components/shared/search/search.component';
import { User } from '@interfaces/users.interface';
import { CircleCheck, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-core-branch-details-personal',
  imports: [
    ComponentSharedSearch,
    ComponentSharedPaginator,
    CommonModule,
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './personal.component.html',
})
export class ComponentCoreBranchDetailsPersonal {

  readonly CircleCheck = CircleCheck;

  searchByName: string = '';
  users: User[] = [];

  page: number = 0;
  size: number = 5;
  sort: string = 'audit,desc';
  totalElements: number = 0;
  numberOfElements: number = 0;
  totalPages: number = 0;

  loadUsers() {
    // Implementación de la lógica para cargar usuarios según el nombre
  }

  changePage( page: number ) {

  }

}
