// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';

// Services
import { ItemsService } from './services/items.service';

// Routes
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProductListComponent,
    ProductDetailComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
