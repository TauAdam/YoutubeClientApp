import { Component } from '@angular/core'

import { mockedData } from '../../../assets/response'
import { SearchResponse } from '../search-response.model'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchRes: SearchResponse = mockedData

  searchResultItems = this.searchRes.items
}
