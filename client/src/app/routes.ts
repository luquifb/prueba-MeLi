import { Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'items?search=',  component: ProductListComponent },
  { path: 'items/:id', component: ProductDetailComponent },
];
