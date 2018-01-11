import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

  today = new Date();
  todayAmericanFormat = `${this.today.getMonth() + 1}/${this.today.getDate()}/${this.today.getFullYear()}`;

  appendix = ['-site:angularjs.org', 'angular'];

  queryParams = [
    ['tbs', `cdr:1,cd_min:${this.todayAmericanFormat},cd_max:7/31/2016`]
  ];


  constructor() {
    const mockQuery = 'ngif bla blub';
    const q = this.buildQuery(mockQuery);
    this.doSearch(q);
  }

  buildQuery(userInput: string) {
    userInput = userInput.replace(/\s/g, '+');
    return `q=${userInput}+${this.appendix.reduce((previousValue, currentValue) => `${previousValue}+${currentValue}`)}` +
    `&${this.queryParams.map(paramPair => `${paramPair[0]}=${paramPair[1]}`).join('&')}`;
  }

  doSearch(q: string) {
    window.location.href = 'https://www.google.com/search?' + q;
  }

}
