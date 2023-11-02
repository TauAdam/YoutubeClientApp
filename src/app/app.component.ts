import { Component } from '@angular/core'

import { mockedData } from '../assets/response'
import { SortingOptions } from './models/sorting'
import { SearchResponse } from './search/search-response.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app'

  searchTag = ''

  searchRes: SearchResponse = mockedData

  searchItems = this.searchRes.items

  showResultItems(tag: string) {
    this.searchTag = `${tag} `
  }

  textForFilter?: string

  handleFilterChange(word: string) {
    this.textForFilter = word
  }

  sortOptions?: SortingOptions

  handleSortChange(sortOptions: SortingOptions) {
    this.sortOptions = sortOptions
  }
}
