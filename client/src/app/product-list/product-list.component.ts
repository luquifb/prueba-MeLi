import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items:any;
  category;

  constructor(private router: Router,private route: ActivatedRoute, public service: ItemsService) { }

  ngOnInit() {
    // this.service.searchEntries(term)
    //   .subscribe(items => this.items = items);
  //   this.route.params
  //     .subscribe(params => {
  //       this.searchEntries(params['term']);
  }

  // seeProducts(term) {
  //   this.service.searchEntries(term)
  //     .subscribe(items => this.items = items);
  // }

}
