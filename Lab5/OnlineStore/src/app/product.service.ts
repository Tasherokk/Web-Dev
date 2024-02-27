import { Injectable } from '@angular/core';
import {Product} from "./product";
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'http://localhost:3000/';

  async getAllProductsByCategory(categoryName: String): Promise<Product[]> {
    const data = await fetch(`${this.url}${categoryName}`);
    return await data.json() ?? [];
  }
  async getAllCategories(): Promise<Category[]> {
    const data = await fetch(`${this.url}categories`);
    return await data.json() ?? {};
  }

  constructor() { }
}
