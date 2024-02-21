import { Component, Input } from '@angular/core';
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
  template: `
    <section class="listing">
      <div class="listing-div">
        <img class="listing-photo" [src]="product.photo" alt="Exterior photo of {{product.name}}">
      </div>
      <h2 class="listing-heading">{{ product.name }}</h2>
      <p class="listing-description">{{ product.description}}</p>
      <p class="listing-rating">{{ product.rating}}</p>
      <a href="{{product.link}}}">Learn More</a>
      <button type="button" (click)="share()" class="listing-share">Share</button>
    </section>
  `,
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product!: Product;
  share() {
    const url = `https://t.me/share/url?url=${this.product.link}&text=${this.product.name}`;
    window.open(url, '_blank');
  }
}
