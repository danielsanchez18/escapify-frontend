import { Component } from '@angular/core';
import { ComponentCustomerServicesDownloads } from '@components/customer/services/downloads/downloads.component';
import { ComponentCustomerServicesFeatures } from '@components/customer/services/features/features.component';
import { ComponentCustomerServicesHero } from '@components/customer/services/hero/hero.component';
import { ComponentCustomerServicesModules } from '@components/customer/services/modules/modules.component';

@Component({
  selector: 'page-customer-services',
  imports: [
    ComponentCustomerServicesHero,
    ComponentCustomerServicesFeatures,
    ComponentCustomerServicesModules,
    ComponentCustomerServicesDownloads,
  ],
  templateUrl: './services.component.html',
})
export class PageCustomerServices { }
