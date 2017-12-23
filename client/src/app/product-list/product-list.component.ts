import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items:any;
  category;

  constructor(private router: Router, public service: ProductService) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(items => this.items = items);

    this.service.getProductCategory()
      .subscribe(category_id => this.category = category_id);
      
  }

}
