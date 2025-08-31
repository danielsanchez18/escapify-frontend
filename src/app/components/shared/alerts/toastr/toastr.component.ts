import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-shared-alerts-toastr',
  imports: [
    CommonModule
  ],
  templateUrl: './toastr.component.html',
})
export class ComponentSharedAlertsToastr {

  @Input() message: string = '';
  @Input() show: boolean = false;

  ngOnChanges() {
    if (this.show) {
      setTimeout(() => this.show = false, 10000); // 10 segundos
    }
  }

}
