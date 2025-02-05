import { Routes } from '@angular/router';
import { ProductPageComponent } from './products/pages/product-page/product-page.component';
import { SignalsLayoutComponent } from './signals/layout/signals-layout/signals-layout.component';
import { CounterPagesComponent } from './signals/pages/counter-pages/counter-pages.component';
import { UserInfoPageComponent } from './signals/pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './signals/pages/properties-page/properties-page.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductPageComponent
  },
  {
    path: 'signals',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterPagesComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'counter' }
    ]
  },
  {
    path: '**',
    redirectTo: 'products'
  }

];
