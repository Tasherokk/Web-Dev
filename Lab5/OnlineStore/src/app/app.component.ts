import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import {ProductService} from "./product.service";
import {NgForOf, NgIf} from "@angular/common";
import {Category} from "./category";
import {ProductListComponent} from "./product-list/product-list.component";
import {Product} from "./product";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgForOf, ProductListComponent, NgIf,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineStore';
  categoryList: String[] = [];
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAllCategories().then((categoryList: Category[]) => {
      this.categoryList = categoryList.map(category => category.name);
    });
  }

  passCategoryName(categoryName: String) {
    if(!categoryName) {
      this.productList = []
    }
    else this.productService.getAllProductsByCategory(categoryName).then((productList: Product[]) => {
      this.productList = productList;
    });
  }

}
