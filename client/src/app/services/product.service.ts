import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment }  from '../../environments/environment';

const BASEURL:string = environment.BASEURL;

@Injectable()
export class ProductService {
  // public BASEURL = 'https://api.mercadolibre.com';
  item:object;

  constructor(private http: Http) { }

  // getProducts(query) {
  //   return this.http.get(`${BASEURL}/items?search=${query}`)
  //         .map((res) => res.json());
  // }

  getProducts() {
    return this.http.get(`${BASEURL}/sites/MLA/search?q=carpas`)
          .map((res) => res.json());
  }

  getProduct(id){
    return this.http.get(`${BASEURL}/items/${id}`)
          .map(res => res.json())
  }

}

// categories: https://api.mercadolibre.com/sites/categories/{category_id}
// https://api.mercadolibre.com/sites/MLA/categories
