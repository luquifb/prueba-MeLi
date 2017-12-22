import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchPipe } from './pipes/search.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ProductService } from './services/product.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '',  component: SearchBoxComponent },
  { path: 'items',  component: ProductListComponent },
  { path: 'items/:id', component: ProductDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProductListComponent,
    ProductDetailComponent,
    SearchPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
