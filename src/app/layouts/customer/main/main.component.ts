import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentCustomerSharedFooter } from '@components/customer/shared/footer/footer.component';
import { ComponentCustomerSharedNavbar } from '@components/customer/shared/navbar/navbar.component';

@Component({
  selector: 'layout-customer-main',
  imports: [
    ComponentCustomerSharedNavbar,
    ComponentCustomerSharedFooter,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
})
export class LayoutCustomerMain { }
