import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

import * as fromAdmin from '../../../redux/selectors/custom-cards.selector'
import * as fromYoutube from '../../../redux/selectors/youtube.selector'
import { FilteringService } from '../../services/filtering/filtering.service'
import { SortingService } from '../../services/sorting/sorting.service'
import { YoutubeSearchService } from '../../services/youtube/youtube-search.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  protected videoItems$ = this.store.select(fromAdmin.selectMainPageVideos)

  protected isInProgress$ = this.store.select(fromYoutube.selectProgress)

  protected errorMessage$ = this.store.select(fromYoutube.selectError)

  public constructor(
    protected youtubeService: YoutubeSearchService,
    protected filteringService: FilteringService,
    protected sortingService: SortingService,
    private store: Store
  ) {}
}
