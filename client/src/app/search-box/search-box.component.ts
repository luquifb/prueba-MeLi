import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ItemsService } from '../services/items.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent {
  results: Object;
  searchTerm$ = new Subject<string>();
  category: String;

  constructor(private service: ItemsService) {
    this.service.getProductCategory()
      .subscribe((category) => this.category = category);
    this.service.search(this.searchTerm$)
      .subscribe((results) => this.results = results.results);
   }

}
