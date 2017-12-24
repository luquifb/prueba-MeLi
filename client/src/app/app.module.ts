import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { FilterPipe } from './pipes/filter.pipe';

import { ProductService } from './services/product.service';
import { ItemsService } from './services/items.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home',  component: SearchBoxComponent },
  { path: 'items?search=:query',  component: SearchBoxComponent },
  { path: 'items/:id', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProductDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
