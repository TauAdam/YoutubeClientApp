import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { combineLatest, map, Subscription } from 'rxjs'

import * as fromAdmin from '../../../redux/selectors/custom-cards.selector'
import * as fromYoutube from '../../../redux/selectors/youtube.selector'
import { Video } from '../../models/search-response.model'
import { FilteringService } from '../../services/filtering/filtering.service'
import { SortingService } from '../../services/sorting/sorting.service'
import { YoutubeSearchService } from '../../services/youtube/youtube-search.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  protected videoItems?: Video[]

  private subscription?: Subscription

  protected progress = this.store.select(fromYoutube.selectProgress)

  protected error = this.store.select(fromYoutube.selectError)

  public constructor(
    protected youtubeService: YoutubeSearchService,
    protected filteringService: FilteringService,
    protected sortingService: SortingService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    const customCards$ = this.store.select(fromAdmin.selectCustomCards)
    const youtubeVideos$ = this.store.select(fromYoutube.selectVideos)
    const currentPage$ = this.store.select(fromYoutube.selectCurrentPage)

    this.subscription = combineLatest([
      customCards$,
      youtubeVideos$,
      currentPage$,
    ])
      .pipe(
        map(([customCards, youtubeVideos, page]) => {
          const videos =
            page === 1 ? [...customCards, ...youtubeVideos] : [...youtubeVideos]
          return videos.slice(0, 20)
        })
      )
      .subscribe(videos => {
        this.videoItems = videos
      })
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
