import { Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by product name" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)" (submit)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
            <app-product *ngFor="let product of filteredProductsList"
                [product]="product">
            </app-product>
    </section>
  `,
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  filteredProductsList: Product[] = [];
  productsList: Product[] = [];
  productService: ProductService = inject(ProductService);

  filterResults(text: string) {
    if (!text) {
      this.filteredProductsList = this.productsList;
      return;
    }

    this.filteredProductsList = this.productsList.filter(
      product => product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.productService.getAllProducts().then((housingLocationList: Product[]) => {
      this.productsList = housingLocationList;
      this.filteredProductsList = housingLocationList;
    });
  }

}
