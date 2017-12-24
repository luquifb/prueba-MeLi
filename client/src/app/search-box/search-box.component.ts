import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ProductService } from '../services/product.service';
import { ItemsService } from '../services/items.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
// export class SearchBoxComponent implements OnInit {
//   items:any;
//
//   constructor(private router: Router, public service: ProductService) { }
//
//   ngOnInit() {
//      this.service.getProductCategory()
//        .subscribe(category_id => this.category = category_id);
//   }
//
//   searchProducts() {
//     console.log("quiero buscar..")
//     this.service.getProducts()
//       .subscribe(items => this.items = items);
//
//      this.service.getProductCategory()
//       .subscribe(category_id => this.category = category_id);
//   }

export class SearchBoxComponent {
  results: Object;
  searchTerm$ = new Subject<string>();
  // category;

  constructor(private router: Router, private service: ItemsService) {
    this.service.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
        console.log("entro");
      });
    }

}
