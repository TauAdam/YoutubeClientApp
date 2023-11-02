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

  handleSorting(type: SortType) {
    this.sortingOptions = {
      type,
      direction: 'asc',
    }
    this.sortItems.emit(this.sortingOptions)
  }
}
