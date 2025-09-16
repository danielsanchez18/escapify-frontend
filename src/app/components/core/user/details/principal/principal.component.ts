import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '@interfaces/users.interface';
import { Check, LucideAngularModule, Minus, X, ClipboardMinus, ArrowRightLeft } from 'lucide-angular';

@Component({
  selector: 'component-core-user-details-principal',
  imports: [
    LucideAngularModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './principal.component.html',
})
export class ComponentCoreUserDetailsPrincipal {

  readonly Check = Check;
  readonly X = X;
  readonly Minus = Minus;

  readonly ClipboardMinus = ClipboardMinus;
  readonly ArrowRightLeft = ArrowRightLeft;

  @Input() user?: User;
  @Input() userPhotoUrl: string = 'img/logo-min.png';


}
