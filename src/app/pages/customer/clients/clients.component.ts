import { Component } from '@angular/core';
import { ComponentCustomerClientsHero } from '@components/customer/clients/hero/hero.component';
import { ComponentCustomerClientsList } from '@components/customer/clients/list/list.component';
import { ComponentCustomerHomeEslogan } from '@components/customer/home/eslogan/eslogan.component';

@Component({
  selector: 'page-customer-clients',
  imports: [
    ComponentCustomerClientsHero,
    ComponentCustomerClientsList,
    ComponentCustomerHomeEslogan
  ],
  templateUrl: './clients.component.html',
})
export class PageCustomerClients { }
