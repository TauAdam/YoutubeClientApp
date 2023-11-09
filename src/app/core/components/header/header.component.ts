import { Component, EventEmitter, Output } from '@angular/core'

import { SortingOptions } from '../../../youtube/models/sorting.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchQuery = new EventEmitter<string>()

  @Output() filterWord = new EventEmitter<string>()

  @Output() sorting = new EventEmitter<SortingOptions>()

  submitForm(value: string) {
    this.searchQuery.emit(value)
  }

  isSortingVisible = false

  toggleSortingBlock() {
    this.isSortingVisible = !this.isSortingVisible
  }

  onFilterChange(word: string) {
    this.filterWord.emit(word)
  }

  onSortChange(sortOptions: SortingOptions) {
    this.sorting.emit(sortOptions)
  }
}
