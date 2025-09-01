import { Component } from '@angular/core';
import { ComponentCoreBranchAddForm } from '@components/core/branch/add/form/form.component';

@Component({
  selector: 'page-core-branch-add',
  imports: [
    ComponentCoreBranchAddForm
  ],
  templateUrl: './add.component.html',
})
export class PageCoreBranchAdd { }
