import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Star, Check, Tag, CircleCheck, CircleX } from 'lucide-angular';

@Component({
  selector: 'component-customer-register-plans',
  imports: [
    LucideAngularModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './plans.component.html',
})
export class ComponentCustomerRegisterPlans {

  readonly Star = Star;
  readonly Check = Check;
  readonly Tag = Tag;
  readonly CircleCheck = CircleCheck;
  readonly CircleX = CircleX;

  isAnnual: boolean = false;
  hasCoupon: boolean = false;
  couponCode: String = '';
  couponValid: any;
  couponTried: boolean = false;

  selectedPlan: any = null;

  // Example coupons
  readonly coupons = [
    { code: 'DESCUENTO10', discount: 10 },
    { code: 'PROMO20', discount: 20 },
    { code: 'OFERTA30', discount: 30 }
  ];

  readonly plans = [
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
      selected: false,
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
      selected: false
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
      selected: false
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

  selectPlan(plan: any) {
    this.plans.forEach(p => p.selected = false);
    plan.selected = true;
    this.selectedPlan = plan;
  }

  applyCoupon() {
    this.hasCoupon = true;
  }

  validateCoupon() {
    this.couponTried = true;
    this.couponValid = this.coupons.find(c => c.code === this.couponCode.trim().toUpperCase());
  }

  onCouponInputChange() {
    this.couponTried = false;
  }

}
