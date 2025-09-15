import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCoreUserAddForm } from '@components/core/user/add/form/form.component';

@Component({
  selector: 'page-core-user-add',
  imports: [
    ComponentCoreUserAddForm,
    RouterLink
  ],
  templateUrl: './add.component.html',
})
export class PageCoreUserAdd { }
