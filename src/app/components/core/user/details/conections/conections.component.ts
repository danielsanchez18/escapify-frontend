import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/user.service';

@Component({
  selector: 'component-core-user-details-conections',
  imports: [],
  templateUrl: './conections.component.html',
})
export class ComponentCoreUserDetailsConections {

  user?: User;
  errorMessage: string = '';

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.userService.getById(id).subscribe({
        next: async (response: any) => {
          this.user = response.data;
        },
        error: (error) => this.errorMessage = error?.error?.message || 'Error al cargar el usuario'
      })
    }
  }

}
