import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Video } from '../../models/search-response.model'
import { FilteringService } from '../../services/filtering/filtering.service'
import { SortingService } from '../../services/sorting/sorting.service'
import { YoutubeSearchService } from '../../services/youtube/youtube-search.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  protected searchItems?: Observable<Video[]>

  public constructor(
    protected youtubeService: YoutubeSearchService,
    protected filteringService: FilteringService,
    protected sortingService: SortingService
  ) {}

  public ngOnInit(): void {
    this.youtubeService.getSearchVideos$().subscribe(videos => {
      this.searchItems = videos
    })
  }
}
