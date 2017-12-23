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

  constructor(private route: ActivatedRoute, public service: ProductService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getProduct(params['id']);
      });
  }

  getProduct(id) {
    this.service.getProduct(id)
      .subscribe((item) => this.item = item);
  }

  // getProductDescription(id) {
  //   this.service.getProductDescription(id)
  //     .subscribe((item) => this.item = item);
  // }

  buyProduct() {
    console.log('Quiero este producto!')
  }
}
