import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
// import { ProductService } from '../services/product.service';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  item;

  constructor(private route: ActivatedRoute, public service: ItemsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.seeProduct(params['id']);
      });
  }

  seeProduct(id) {
    this.service.seeProduct(id)
      .subscribe((item) => this.item = item);
  }

  // seeProductDescription(id) {
  //   this.service.seeProductDescription(id)
  //     .subscribe((item) => this.item = item);
  // }

  buyProduct(id) {
    console.log('Quiero este producto: ' + id)
  }
}
