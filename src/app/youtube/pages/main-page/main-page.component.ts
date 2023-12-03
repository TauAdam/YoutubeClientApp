import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

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
  protected searchItems?: Video[]

  private subscription?: Subscription

  public constructor(
    protected youtubeService: YoutubeSearchService,
    protected filteringService: FilteringService,
    protected sortingService: SortingService
  ) {}

  public ngOnInit(): void {
    this.subscription = this.youtubeService.videos$.subscribe(videos => {
      this.searchItems = videos
    })
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
