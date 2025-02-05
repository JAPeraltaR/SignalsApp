import { Routes } from '@angular/router';
import { ProductPageComponent } from './products/pages/product-page/product-page.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductPageComponent
  },
  {
    path: '**',
    redirectTo: 'products'
  }

];
