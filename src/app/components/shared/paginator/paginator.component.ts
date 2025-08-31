import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, ChevronRight, ChevronLeft, EllipsisIcon } from 'lucide-angular';

@Component({
  selector: 'component-shared-paginator',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './paginator.component.html',
})
export class ComponentSharedPaginator {

  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;
  readonly ElipsisIcon = EllipsisIcon;

  @Input() page: number = 0;
  @Input() totalPages: number = 0;
  @Input() numberOfElements: number = 0;
  @Input() totalElements: number = 0;

  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.pageChange.emit(page);
    }
  }

}
