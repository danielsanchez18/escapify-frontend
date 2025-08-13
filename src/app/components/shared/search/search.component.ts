import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'component-shared-search',
  imports: [
    CommonModule, FormsModule,
    LucideAngularModule
  ],
  templateUrl: './search.component.html',
})
export class ComponentSharedSearch {

  @Input() placeholder: string = 'Buscar...';
  @Input() searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();

  readonly Search = Search;

  onSearchInput(): void {
    this.searchQueryChange.emit(this.searchQuery);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.onSearchInput();
  }

}
