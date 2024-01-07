import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, startWith } from 'rxjs'

import * as YoutubeAction from '../../../redux/actions/youtube.actions'
import * as fromYoutube from '../../../redux/selectors/youtube.selector'
import { Video } from '../../models/search-response.model'

@Component({
  selector: 'app-heart-button',
  templateUrl: './heart-button.component.html',
  styleUrls: ['./heart-button.component.scss'],
})
export class HeartButtonComponent {
  @Input() public card!: Video

  protected isFavorite = this.store
    .select(fromYoutube.selectFavoriteIndexes)
    .pipe(
      map(indexes => {
        return indexes.includes(this.card.id)
      }),
      startWith(false)
    )

  public constructor(private store: Store) {}

  protected toggleFavoriteStatus(): void {
    const newId = this.card.id
    const action = this.card.favorite
      ? YoutubeAction.dislikeVideo({ newId })
      : YoutubeAction.likeVideo({ newId })

    this.store.dispatch(action)
    this.card.favorite = !this.card.favorite
  }
}
