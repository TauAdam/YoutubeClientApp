import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject, switchMap, takeUntil } from 'rxjs'

import { Video } from '../../models/search-response.model'
import { YoutubeSearchService } from '../../services/youtube/youtube-search.service'

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit, OnDestroy {
  protected selectedVideo?: Video

  private destroy$ = new Subject<void>()

  public constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeSearchService
  ) {}

  public ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => {
          const itemId = params['id']
          if (itemId) {
            return this.youtubeService.getVideos(itemId)
          }
          return []
        })
      )
      .subscribe(([videoSelectionResult]) => {
        this.selectedVideo = videoSelectionResult
      })
  }

  public ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
