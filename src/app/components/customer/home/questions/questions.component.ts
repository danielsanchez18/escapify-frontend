import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown, ChevronUp } from 'lucide-angular';

@Component({
  selector: 'component-customer-home-questions',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './questions.component.html',
})
export class ComponentCustomerHomeQuestions {

  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;

}
