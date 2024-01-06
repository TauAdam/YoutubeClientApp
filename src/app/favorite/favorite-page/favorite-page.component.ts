import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import * as fromYoutube from '../../redux/selectors/youtube.selector'
import { FilteringService } from '../../youtube/services/filtering/filtering.service'
import { SortingService } from '../../youtube/services/sorting/sorting.service'

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent {
  protected favoriteVideos$ = this.store.select(fromYoutube.selectFavorites)

  public constructor(
    protected filteringService: FilteringService,
    protected sortingService: SortingService,
    private store: Store
  ) {}
}
