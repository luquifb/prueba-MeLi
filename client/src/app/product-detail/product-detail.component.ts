import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  item;

  constructor(private route:ActivatedRoute, public service: ProductService) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe(params => {
    //     this.getProduct(params['id']);
    //   });
    this.service.getProduct()
      .subscribe(item => this.item = item);
  }

  // getProduct() {
  //   this.service.getProduct()
  //     .subscribe((item) => this.item = item);
  // }
}
