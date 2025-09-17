import { Component } from '@angular/core';
import { BrainCircuit, CalendarSync, LucideAngularModule, Trophy, Component as ComponentIcon, Handshake, CircleQuestionMark } from 'lucide-angular';

@Component({
  selector: 'component-customer-home-features',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './features.component.html',
})
export class ComponentCustomerHomeFeatures {

  readonly BrainCircuit = BrainCircuit;
  readonly Trophy = Trophy;
  readonly CalendarSync = CalendarSync;
  readonly Component = ComponentIcon;
  readonly HandShake = Handshake;
  readonly CircleQuestionMark = CircleQuestionMark;

}
