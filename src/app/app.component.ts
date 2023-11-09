import { Component } from '@angular/core'

import { mockedData } from '../assets/response'
import { SearchResponse } from './youtube/models/search-response.model'
import { SortingOptions } from './youtube/models/sorting.model'

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
