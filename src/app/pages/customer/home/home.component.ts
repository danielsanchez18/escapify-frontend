import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentCustomerHomeClients } from '@components/customer/home/clients/clients.component';
import { ComponentCustomerHomeDemo } from '@components/customer/home/demo/demo.component';
import { ComponentCustomerHomeEslogan } from '@components/customer/home/eslogan/eslogan.component';
import { ComponentCustomerHomeFeatures } from '@components/customer/home/features/features.component';
import { ComponentCustomerHomeHero } from '@components/customer/home/hero/hero.component';
import { ComponentCustomerHomeQuestions } from '@components/customer/home/questions/questions.component';
import { ComponentCustomerHomeReview } from '@components/customer/home/review/review.component';
import { ComponentCustomerHomeServices } from '@components/customer/home/services/services.component';

@Component({
  selector: 'page-customer-home',
  imports: [
    ComponentCustomerHomeHero,
    ComponentCustomerHomeDemo,
    ComponentCustomerHomeReview,
    ComponentCustomerHomeServices,
    ComponentCustomerHomeFeatures,
    ComponentCustomerHomeClients,
    ComponentCustomerHomeQuestions,
    ComponentCustomerHomeEslogan,
  ],
  templateUrl: './home.component.html',
})
export class PageCustomerHome {

  @ViewChild('preguntasFrecuentes') preguntasFrecuentes: ElementRef | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      // Aquí se verifica si el hash de la URL es #preguntas-frecuentes
      if (window.location.hash === '#preguntas-frecuentes') {
        this.scrollToPreguntasFrecuentes();
      }
    });
  }

  ngAfterViewInit() {
    // Hacer scroll si la página ya se carga con el hash #preguntas-frecuentes
    if (window.location.hash === '#preguntas-frecuentes') {
      this.scrollToPreguntasFrecuentes();
    }
  }

  private scrollToPreguntasFrecuentes() {
    if (this.preguntasFrecuentes) {
      this.preguntasFrecuentes.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
