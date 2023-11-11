import { Component, EventEmitter, Output } from '@angular/core'

import { SortingOptions, SortType } from '../models/sorting'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() private filterTag = new EventEmitter<string>()

  @Output() private sortItems = new EventEmitter<SortingOptions>()

  protected tag = ''

  protected sortingOptions?: SortingOptions

  protected onFilterItems() {
    this.filterTag.emit(this.tag)
  }

  private setSortingDirection(type: SortType) {
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

  protected handleSorting(type: SortType) {
    this.setSortingDirection(type)
    this.sortItems.emit(this.sortingOptions)
  }
}
