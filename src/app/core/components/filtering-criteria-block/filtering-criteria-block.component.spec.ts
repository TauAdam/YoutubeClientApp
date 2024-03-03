import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MatSortModule, Sort } from '@angular/material/sort'
import { By } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FilteringService } from '../../../youtube/services/filtering/filtering.service'
import { SortingService } from '../../../youtube/services/sorting/sorting.service'
import { FilteringCriteriaBlockComponent } from './filtering-criteria-block.component'

describe('FilteringCriteriaBlockComponent', () => {
  let component: FilteringCriteriaBlockComponent
  let fixture: ComponentFixture<FilteringCriteriaBlockComponent>
  let sortingService: SortingService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteringCriteriaBlockComponent],
      imports: [MatSortModule, FormsModule, BrowserAnimationsModule],
      providers: [FilteringService, SortingService],
    })

    fixture = TestBed.createComponent(FilteringCriteriaBlockComponent)
    component = fixture.componentInstance
    sortingService = TestBed.inject(SortingService)
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })
  it('should call sortingService.handleSortChange on sortData', () => {
    const sortEvent: Sort = { active: 'date', direction: 'asc' }
    const handleSortChangeSpy = jest.spyOn(sortingService, 'handleSortChange')

    component.sortData(sortEvent)
    expect(handleSortChangeSpy).toHaveBeenCalledWith(sortEvent)
  })
  it('should have date and views as sort headers', () => {
    const sortHeaders = fixture.debugElement.queryAll(
      By.css('[mat-sort-header]')
    )
    expect(sortHeaders[0].attributes['mat-sort-header']).toBe('date')
    expect(sortHeaders[1].attributes['mat-sort-header']).toBe('views')
  })
})
