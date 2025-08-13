import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ComponentSharedPaginator } from '@components/shared/paginator/paginator.component';
import { ComponentSharedSearch } from '@components/shared/search/search.component';
import { Check, CircleCheck, ListFilter, LucideAngularModule, Minus, Tag, Users, MapPinHouse, Crown } from 'lucide-angular';

@Component({
  selector: 'component-core-company-overview-list',
  imports: [
    LucideAngularModule,
    CommonModule, FormsModule, RouterLink,
    ComponentSharedSearch,
    ComponentSharedPaginator,
  ],
  templateUrl: './list.component.html',
})
export class ComponentCoreCompanyOverviewList {

  readonly ListFilter = ListFilter;
  readonly Check = Check;
  readonly Minus = Minus;
  readonly Tag = Tag;
  readonly CircleCheck = CircleCheck;
  readonly Users = Users;
  readonly MapPinHouse = MapPinHouse;
  readonly Crown = Crown;

  searchQuery: string = '';  // Para la búsqueda

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    // Aquí podrías cargar las compañías desde una API o cualquier otro origen de datos
  }

}
