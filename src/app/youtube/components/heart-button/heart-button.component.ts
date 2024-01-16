import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import * as YoutubeAction from '../../../redux/actions/youtube.actions'
import * as fromYoutube from '../../../redux/selectors/youtube.selector'
import { Video } from '../../models/search-response.model'

@Component({
  selector: 'app-heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: ['./heart-button.component.scss'],
})
export class HeartButtonComponent implements OnInit, OnDestroy {
  @Input() public card!: Video

  protected isFavorite!: boolean

  private subscription?: Subscription

  public constructor(private store: Store) {}

  public ngOnInit(): void {
    const status$ = this.store.select(
      fromYoutube.selectFavoriteStatusById(this.card.id)
    )
    this.subscription = status$.subscribe(favorite => {
      this.isFavorite = favorite
    })
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  protected toggleFavoriteStatus(): void {
    const newId = this.card.id
    const action = this.isFavorite
      ? YoutubeAction.dislikeVideo({ newId })
      : YoutubeAction.likeVideo({ newId })

    this.store.dispatch(action)
  }
}
