
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  public searchTerm: string;
  // Event occured when the search term is changed by the user
  @Output() onSearchTermChange = new EventEmitter<string>();

  constructor() {
    this.searchTerm = '';
  }

  // This method is invoked whenever the input in the search box changes
  searchTermChanged() {
    this.onSearchTermChange.emit(this.searchTerm);
  }
  // Checks whether the search box is empty or not
  isSearchTermEmpty() {
    return this.searchTerm === '' ? true : false;
  }

  // Clears off the search filter value and trigger the change
  clearSearchFilter() {
    this.searchTerm = '';
    this.searchTermChanged();
  }

}
