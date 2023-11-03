import { Component, EventEmitter, Output } from '@angular/core'

import { SortingOptions, SortType } from '../models/sorting'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filterTag = new EventEmitter<string>()

  @Output() sortItems = new EventEmitter<SortingOptions>()

  tag = ''

  onFilterItems() {
    this.filterTag.emit(this.tag)
  }

  sortingOptions?: SortingOptions

  setSortingDirection(type: SortType) {
    if (!this.sortingOptions) {
      this.sortingOptions = {
        type,
        direction: 'asc',
      }
    }
    if (this.sortingOptions.direction === 'asc') {
      this.sortingOptions = {
        type,
        direction: 'desc',
      }
    } else {
      this.sortingOptions = {
        type,
        direction: 'asc',
      }
    }
  }

  handleSorting(type: SortType) {
    this.setSortingDirection(type)
    this.sortItems.emit(this.sortingOptions)
  }
}
