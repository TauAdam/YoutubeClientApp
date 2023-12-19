import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, mergeMap, Subject, takeUntil } from 'rxjs'

import { selectCustomCard } from '../../../redux/selectors/custom-cards.selector.'
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
    private youtubeService: YoutubeSearchService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.destroy$),
        mergeMap(params => {
          const itemId = params['id']
          const customCard$ = this.store.select(selectCustomCard(itemId))

          return customCard$.pipe(
            map(custom => (custom ? [custom] : [])),
            mergeMap(result => {
              if (result.length > 0) {
                return result
              }
              return this.youtubeService.getVideos(itemId)
            })
          )
        })
      )
      .subscribe(videoSelectionResult => {
        this.selectedVideo = Array.isArray(videoSelectionResult)
          ? videoSelectionResult[0]
          : videoSelectionResult
      })
  }

  public ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
