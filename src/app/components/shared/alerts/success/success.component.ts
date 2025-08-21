import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CircleCheck, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-shared-alerts-success',
  imports: [
    LucideAngularModule,
    CommonModule,
  ],
  templateUrl: './success.component.html',
})
export class ComponentSharedAlertsSuccess {

  readonly CircleCheck = CircleCheck;

  @Input() title: string = 'Completado';
  @Input() message!: string;
  @Input() value!: string;
  @Input() btnPrimary: string = 'Aceptar';
  @Input() btnSecondary!: string;
  @Input() linkPrimary!: string;


}
