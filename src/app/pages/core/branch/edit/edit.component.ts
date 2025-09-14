import { Component } from '@angular/core';
import { ComponentCoreBranchEditForm } from '@components/core/branch/edit/form/form.component';

@Component({
  selector: 'page-core-branch-edit',
  imports: [
    ComponentCoreBranchEditForm
  ],
  templateUrl: './edit.component.html',
})
export class PageCoreBranchEdit { }
