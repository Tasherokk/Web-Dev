import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, RouterModule,],
  template: `
    <main>
      <a [routerLink]="['/']">
      <header class="brand-name">
        <img style="width: 100px" class="brand-logo" src="https://www.ecomva.com/wp-content/uploads/2023/02/Group-7182.png" alt="logo" aria-hidden="true">
      </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
}
