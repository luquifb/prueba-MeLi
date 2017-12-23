import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})

export class SearcherComponent {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private service: ItemsService) {
    this.service.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
        console.log("entro");
      });

    }
}
