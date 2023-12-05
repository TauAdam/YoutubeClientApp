import { Pipe, PipeTransform } from '@angular/core'
import { Sort } from '@angular/material/sort'

import { Video } from '../models/search-response.model'

@Pipe({
  name: 'sortSearchResults',
})
export class SortSearchResultsPipe implements PipeTransform {
  public transform(items: Video[], sortingOptions?: Sort): Video[] {
    if (!items || !sortingOptions) {
      return items
    }

    const sortedItems = [...items]

    return sortedItems.sort((a, b) => {
      const directionFactor = sortingOptions.direction === 'asc' ? 1 : -1
      const valueA = this.getValueToSortBy(a, sortingOptions.active)
      const valueB = this.getValueToSortBy(b, sortingOptions.active)

      if (valueA < valueB) {
        return -1 * directionFactor
      }
      if (valueA > valueB) {
        return 1 * directionFactor
      }
      return 0
    })
  }

  private getValueToSortBy(item: Video, sortType: string) {
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
