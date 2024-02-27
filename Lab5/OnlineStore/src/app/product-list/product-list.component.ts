import {Component, inject, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import { Product } from '../product';
import { ProductService } from '../product.service';
import {CategoryService} from "../category.service";
import {isFatalLinkerError} from "@angular/compiler-cli/linker";
import {ProductComponent} from "../product/product.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    FormsModule
  ],
  templateUrl: 'product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() productsList: Product[] = [];

  constructor() {
  }

  removeChild(product: Product) {
    const index = this.productsList.findIndex(p => p === product);
    if (index !== -1) {
      this.productsList.splice(index, 1);
    }
  }

}
