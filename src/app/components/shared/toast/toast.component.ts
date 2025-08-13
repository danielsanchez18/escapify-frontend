import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-shared-toast',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './toast.component.html',
})
export class ComponentSharedToast {

  @Input() btnDelete: boolean = false;
  @Input() btnEdit: boolean = false;
  @Input() btnExport: boolean = false;

}
