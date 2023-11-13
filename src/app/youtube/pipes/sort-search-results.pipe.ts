import { Pipe, PipeTransform } from '@angular/core'

import { SearchItem } from '../models/search-item.model'
import { SortingOptions, SortType } from '../models/sorting.model'

@Pipe({
  name: 'sortSearchResults',
})
export class SortSearchResultsPipe implements PipeTransform {
  public transform(
    items: SearchItem[],
    sortingOptions?: SortingOptions
  ): SearchItem[] {
    if (!items || !sortingOptions) {
      return items
    }

    const sortedItems = [...items]

    return sortedItems.sort((a, b) => {
      const directionFactor = sortingOptions.direction === 'asc' ? 1 : -1
      const valueA = this.getValueToSortBy(a, sortingOptions.type)
      const valueB = this.getValueToSortBy(b, sortingOptions.type)

      if (valueA < valueB) {
        return -1 * directionFactor
      }
      if (valueA > valueB) {
        return 1 * directionFactor
      }
      return 0
    })
  }

  private getValueToSortBy(item: SearchItem, sortType: SortType) {
    switch (sortType) {
      case 'date':
        return new Date(item.snippet.publishedAt)
      case 'views':
        return parseInt(item.statistics.viewCount, 10)
      default:
        return item
    }
  }
}
