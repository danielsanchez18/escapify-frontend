import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CircleQuestionMark, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-shared-alerts-confirm',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './confirm.component.html',
})
export class ComponentSharedAlertsConfirm {

  readonly CircleQuestionMark = CircleQuestionMark;

  @Input() title: string = 'Confirmar';
  @Input() message!: string;
  @Input() value!: string;
  @Input() btnPrimary: string = 'Confirmar';
  @Input() btnSecondary: string = 'Cancelar';

  // Nueva variable para manejar el estado del botón
  btnText: string = this.btnPrimary;  // Empezamos con el texto que viene de @Input()

  @Output() confirmAction = new EventEmitter<void>();

  // Método que se llama cuando se confirma la acción
  onConfirm() {
    this.btnText = 'Cargando...';  // Cambiamos el texto del botón a "Cargando"
    this.confirmAction.emit();  // Emitimos la señal para confirmar
  }

}
