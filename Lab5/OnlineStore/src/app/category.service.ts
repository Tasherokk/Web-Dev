  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryName: String = "";
  constructor() { }

  setCategoryName(categoryName: String) {
    this.categoryName = categoryName;
  }

  getCategoryName(): String {
    return this.categoryName;
  }

}
