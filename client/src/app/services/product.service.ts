import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  public BASEURL = 'https://api.mercadolibre.com';
  item:object;

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(`${this.BASEURL}/sites/MLA/items?search=`)
          .map((res) => res.json());
  }

  // getProduct(id){
  //   return this.http.get(`${this.BASEURL}/items/${id}`)
  //         .map(res => res.json())
  // }

  getProduct(){
    return this.http.get(`${this.BASEURL}/items/MLA672160044`)
          .map(res => res.json())
  }
}

// categories: https://api.mercadolibre.com/sites/categories/{category_id}
// https://api.mercadolibre.com/sites/MLA/categories
