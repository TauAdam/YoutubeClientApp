import { Injectable } from '@angular/core'

import { SortingOptions, SortType } from '../../models/sorting.model'

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  public sortOptions: SortingOptions

  public constructor() {
    this.sortOptions = {
      direction: '',
      type: '',
    }
  }

  private setSortingDirection(type: SortType) {
    if (!this.sortOptions) {
      this.sortOptions = {
        type,
        direction: 'asc',
      }
    }
    if (this.sortOptions.direction === 'asc') {
      this.sortOptions = {
        type,
        direction: 'desc',
      }
    } else {
      this.sortOptions = {
        type,
        direction: 'asc',
      }
    }
  }

  public handleSortChange(sortType: SortType) {
    this.setSortingDirection(sortType)
    this.sortOptions.type = sortType
  }
}
