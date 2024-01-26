import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subject, takeUntil } from 'rxjs'

import * as fromAdmin from '../../../redux/selectors/custom-cards.selector'
import { Video } from '../../models/search-response.model'

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit, OnDestroy {
  protected selectedVideo$!: Observable<Video | undefined>

  private currentId?: string

  private destroy$ = new Subject<void>()

  public constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.currentId = params['id']
    })
    if (!this.currentId) {
      return
    }
    this.selectedVideo$ = this.store.select(
      fromAdmin.selectVideoById(this.currentId)
    )
  }

  public ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
