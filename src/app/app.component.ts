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
  public title = 'youtube-client-app'

  protected searchTag = ''

  private searchRes: SearchResponse = mockedData

  protected searchItems = this.searchRes.items

  protected textForFilter?: string

  protected sortOptions?: SortingOptions

  protected showResultItems(tag: string) {
    this.searchTag = `${tag} `
  }

  protected handleFilterChange(word: string) {
    this.textForFilter = word
  }

  protected handleSortChange(sortOptions: SortingOptions) {
    this.sortOptions = sortOptions
  }
}
