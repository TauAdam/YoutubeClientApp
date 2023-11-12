import { Component, EventEmitter, Output } from '@angular/core'

import { SortingOptions } from '../../models/sorting'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() private searchQuery = new EventEmitter<string>()

  @Output() private filterWord = new EventEmitter<string>()

  @Output() private sorting = new EventEmitter<SortingOptions>()

  protected isSortingVisible = false

  protected submitForm(value: string) {
    this.searchQuery.emit(value)
  }

  protected toggleSortingBlock() {
    this.isSortingVisible = !this.isSortingVisible
  }

  protected onFilterChange(word: string) {
    this.filterWord.emit(word)
  }

  protected onSortChange(sortOptions: SortingOptions) {
    this.sorting.emit(sortOptions)
  }
}
