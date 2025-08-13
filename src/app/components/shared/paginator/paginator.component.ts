import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

}
