import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCoreCompanyAddForm } from '@components/core/company/add/form/form.component';

@Component({
  selector: 'page-core-company-add',
  imports: [
    RouterLink,
    ComponentCoreCompanyAddForm
  ],
  templateUrl: './add.component.html',
})
export class PageCoreCompanyAdd { }
