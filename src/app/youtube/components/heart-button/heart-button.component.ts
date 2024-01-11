import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'

import * as YoutubeAction from '../../../redux/actions/youtube.actions'
import { Video } from '../../models/search-response.model'

@Component({
  selector: 'app-heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: ['./heart-button.component.scss'],
})
export class HeartButtonComponent {
  @Input() public card!: Video

  public constructor(private store: Store) {}

  protected toggleFavoriteStatus(): void {
    const newId = this.card.id
    const action = this.card.favorite
      ? YoutubeAction.dislikeVideo({ newId })
      : YoutubeAction.likeVideo({ newId })

    this.store.dispatch(action)
  }
}
