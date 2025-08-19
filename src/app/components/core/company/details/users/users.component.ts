import { Component } from '@angular/core';
import { ComponentSharedSearch } from '@components/shared/search/search.component';
import { LucideAngularModule, TrendingUp, ChevronDown, ListFilter } from 'lucide-angular';

@Component({
  selector: 'component-core-company-details-users',
  imports: [
    LucideAngularModule,
    ComponentSharedSearch,
  ],
  templateUrl: './users.component.html',
})
export class ComponentCoreCompanyDetailsUsers {

  readonly TrendingUp = TrendingUp;
  readonly ChevronDown = ChevronDown;
  readonly ListFilter = ListFilter;

  searchQuery: string = '';

  loadUsers() {
  }

}
