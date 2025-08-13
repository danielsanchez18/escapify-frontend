import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AtSign, Github, Lock, LucideAngularModule, Mail} from 'lucide-angular';

@Component({
  selector: 'page-login',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
})
export class PageLogin {

  readonly AtSign = AtSign;
  readonly Lock = Lock;
  readonly Mail = Mail;
  readonly Github = Github;

}
