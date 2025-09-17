import { Component } from '@angular/core';
import { ComponentCustomerHomeEslogan } from '@components/customer/home/eslogan/eslogan.component';
import { ComponentCustomerServicesDownloads } from '@components/customer/services/downloads/downloads.component';
import { ComponentCustomerServicesFeatures } from '@components/customer/services/features/features.component';
import { ComponentCustomerServicesHero } from '@components/customer/services/hero/hero.component';
import { ComponentCustomerServicesModules } from '@components/customer/services/modules/modules.component';
import { ComponentCustomerServicesStats } from '@components/customer/services/stats/stats.component';

@Component({
  selector: 'page-customer-services',
  imports: [
    ComponentCustomerServicesHero,
    ComponentCustomerServicesFeatures,
    ComponentCustomerServicesModules,
    ComponentCustomerServicesDownloads,
    ComponentCustomerServicesStats,
    ComponentCustomerHomeEslogan,
  ],
  templateUrl: './services.component.html',
})
export class PageCustomerServices { }
