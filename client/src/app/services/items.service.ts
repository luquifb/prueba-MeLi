import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ItemsService {
  baseUrl: string = 'https://api.mercadolibre.com';
  locationUrl: string = '/sites/MLA';
  queryUrl: string = '/search?q=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http.get(this.baseUrl + this.locationUrl + this.queryUrl + term)
          .map((res) => res.json());
  }

  seeProduct(id){
    return this.http.get(`${this.baseUrl}/items/${id}`)
          .map(res => res.json())
  }

  seeProductDescription(id){
    return this.http.get(`${this.baseUrl}/items/${id}/description`)
          .map(res => res.json())
  }

  // getProductCategory(category_id) {
  //   return this.http.get(`${this.baseUrl}/categories/${category_id}`)
  //         .map((res) => res.json());
  // }

  getProductCategory() {
    return this.http.get(`${this.baseUrl}/categories/MLA31356`)
          .map((res) => res.json());
  }

}
