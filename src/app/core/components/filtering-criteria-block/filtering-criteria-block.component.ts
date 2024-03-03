import { Component } from '@angular/core'
import { Sort } from '@angular/material/sort'

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

  public sortData(sort: Sort) {
    this.sortingService.handleSortChange(sort)
  }
}
