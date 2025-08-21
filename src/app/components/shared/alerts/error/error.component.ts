import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CircleX, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-shared-alerts-error',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './error.component.html',
})
export class ComponentSharedAlertsError {

  readonly CircleX = CircleX;

  @Input() title: string = 'Error';
  @Input() message!: string;
  @Input() btnPrimary: string = 'Intentar de nuevo';
  @Input() btnSecondary!: string;

}
