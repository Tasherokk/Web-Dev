import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import {RouterLink} from "@angular/router";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: `./product.component.html`,
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();

  @Input() product!: Product;
  share() {
    const url = `https://t.me/share/url?url=${this.product.link}&text=${this.product.name}`;
    window.open(url, '_blank');
  }

  putLike() {
    this.product.likes ++;
  }
  onRemove() {
    this.remove.emit(this.product);
  }

}
