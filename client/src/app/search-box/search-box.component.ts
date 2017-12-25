import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private service: ItemsService) {
    this.service.getProductCategory()
      .subscribe((category) => this.category = category);
    this.service.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
    });
   }

}
