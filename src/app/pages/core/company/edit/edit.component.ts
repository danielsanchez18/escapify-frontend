import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCoreCompanyEditForm } from '@components/core/company/edit/form/form.component';

@Component({
  selector: 'page-core-company-edit',
  imports: [
    RouterLink,
    ComponentCoreCompanyEditForm
  ],
  templateUrl: './edit.component.html',
})
export class PageCoreCompanyEdit { }
