import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Products Page'
  }
];

export default routeConfig;
