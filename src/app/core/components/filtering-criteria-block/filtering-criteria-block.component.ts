import { Component } from '@angular/core'

import { SortType } from '../../../youtube/models/sorting.model'
import { FilteringService } from '../../../youtube/services/filtering/filtering.service'
import { SortingService } from '../../../youtube/services/sorting/sorting.service'

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export class FilteringCriteriaBlockComponent {
  public constructor(
    protected filteringService: FilteringService,
    protected sortingService: SortingService
  ) {}

  protected handleSorting(type: SortType) {
    this.sortingService.handleSortChange(type)
  }
}
