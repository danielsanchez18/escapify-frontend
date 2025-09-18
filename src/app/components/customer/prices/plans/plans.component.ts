import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Check, MessagesSquare } from 'lucide-angular';

@Component({
  selector: 'component-customer-prices-plans',
  imports: [
    CommonModule,
    LucideAngularModule,
  ],
  templateUrl: './plans.component.html',
})
export class ComponentCustomerPricesPlans {

  readonly Check = Check;
  readonly MessagesSquare = MessagesSquare;

  isAnnual: boolean = true;

  readonly plans = [
    {
      name: 'Free',
      price_monthly: 0,
      price_annual: 0,
      displayPrice: 0,
      features: [
        '5 GB Cloud Storage',
        '5 API Requests/min',
        '1 Team Member',
        '1 Project Template',
        '50 Build Minutes/month',
        'Email Support',
        'Basic Analytics'
      ],
    },
    {
      name: 'Startup',
      price_monthly: 15,
      price_annual: 30,
      displayPrice: 0,
      features: [
        '5 GB Cloud Storage',
        '5 API Requests/min',
        '1 Team Member',
        '1 Project Template',
        '50 Build Minutes/month',
        'Email Support',
        'Basic Analytics'
      ],
      highlighted: true
    },
    {
      name: 'Team',
      price_monthly: 45,
      price_annual: 90,
      displayPrice: 0,
      features: [
        '5 GB Cloud Storage',
        '5 API Requests/min',
        '1 Team Member',
        '1 Project Template',
        '50 Build Minutes/month',
        'Email Support',
        'Basic Analytics'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price_monthly: 199,
      price_annual: 399,
      displayPrice: 0,
      features: [
        '5 GB Cloud Storage',
        '5 API Requests/min',
        '1 Team Member',
        '1 Project Template',
        '50 Build Minutes/month',
        'Email Support',
        'Basic Analytics'
      ],
      highlighted: true
    },
  ]

  ngOnInit() {
    this.plans.forEach(plan => {
      plan.displayPrice = this.isAnnual ? plan.price_annual : plan.price_monthly;
    });
  }

  toggleAnnualPricing(): void {
    this.isAnnual = !this.isAnnual;
    this.animatePlanPrices();
  }

  private animatePlanPrices() {
  this.plans.forEach(plan => {
    const targetPrice = this.isAnnual ? plan.price_annual : plan.price_monthly;
    this.animatePrice(plan, targetPrice);
  });
  }

  private animatePrice(plan: any, target: number, duration: number = 600) {
    const start = performance.now();
    const initial = plan.displayPrice ?? 0;

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      plan.displayPrice = Math.round(initial + (target - initial) * progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

}
