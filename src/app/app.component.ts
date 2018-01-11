import { Component } from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  q: string;

  constructor(
    private searchService: SearchService
  ) {}

  onKeydown(evt) {
    if (evt.key === 'Enter') {
      this.searchService.doSearch(evt.target.value);
    }
  }

}
