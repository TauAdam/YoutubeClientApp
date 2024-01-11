import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import * as YoutubeAction from '../../../redux/actions/youtube.actions'
import * as fromYoutube from '../../../redux/selectors/youtube.selector'

@Component({
  selector: 'app-pagination-block',
  templateUrl: './pagination-block.component.html',
  styleUrls: ['./pagination-block.component.scss'],
})
export class PaginationBlockComponent implements OnInit, OnDestroy {
  protected currentPage$ = this.store.select(fromYoutube.selectCurrentPage)

  private tokens$ = this.store.select(fromYoutube.selectTokens)

  protected isPrevButtonDisabled = false

  protected isNextButtonDisabled = false

  private subscription?: Subscription

  public constructor(private store: Store) {}

  public ngOnInit() {
    this.subscription = this.tokens$.pipe().subscribe(tokens => {
      this.isPrevButtonDisabled = tokens.prevPageToken === ''
      this.isNextButtonDisabled = tokens.nextPageToken === ''
    })
  }

  public nextPage() {
    this.store.dispatch(YoutubeAction.goToNextPage())
  }

  public prevPage() {
    this.store.dispatch(YoutubeAction.goToPrevPage())
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
