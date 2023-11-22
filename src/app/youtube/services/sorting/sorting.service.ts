import { Injectable } from '@angular/core'
import { Sort } from '@angular/material/sort'

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  public sortOptions!: Sort

  public handleSortChange(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return
    }
    this.sortOptions = sort
  }
}
