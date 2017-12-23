import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ProductService } from './services/product.service';
import { ItemsService } from './services/items.service';

import { SearcherComponent } from './searcher/searcher.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '',  component: SearchBoxComponent },
  { path: 'items?search=',  component: SearchBoxComponent },
  { path: 'items/:id', component: ProductDetailComponent },
  // { path: 'search', component: SearcherComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProductListComponent,
    ProductDetailComponent,
    FilterPipe,
    CapitalizePipe,
    SearcherComponent
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
