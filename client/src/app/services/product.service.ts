import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment }  from '../../environments/environment';

const BASEURL:string = environment.BASEURL;

@Injectable()
export class ProductService {

  // public BASEURL2 = 'https://api.mercadolibre.com';
  item: Object;

  constructor(private http: Http) { }


  // getProducts(term) {
  //   return this.http.get(this.BASEURL2 + this.queryUrl + term)
  //         .map((res) => res.json());
  // }

  getProducts() {
    return this.http.get(`${BASEURL}/sites/MLA/search?q=ipad`)
          .map((res) => res.json());
  }

  getProduct(id){
    return this.http.get(`${BASEURL}/items/${id}`)
          .map(res => res.json())
  }

  // getProductDescription(id){
  //   return this.http.get(`${BASEURL}/items/${id}/description`)
  //         .map(res => res.json())
  // }

  // getProductCategory(id, category_id) {
  //   return this.http.get(`${BASEURL}/categories/${category_id}`)
  //         .map((res) => res.json());
  // }

  getProductCategory() {
    return this.http.get(`${BASEURL}/categories/MLA3526`)
          .map((res) => res.json());
  }

}
