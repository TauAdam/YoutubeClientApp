import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject, takeUntil } from 'rxjs'

import { SearchItem } from '../../models/search-item.model'
import { YoutubeSearchService } from '../../services/youtube/youtube-search.service'

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit, OnDestroy {
  protected selectedVideo!: SearchItem

  private destroy$ = new Subject<void>()

  public constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeSearchService
  ) {}

  public ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const itemId = params['id']
      if (itemId) {
        this.onSelectVideo(itemId)
      }
    })
  }

  public ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  protected onSelectVideo(id: string) {
    const videoSelectionResult = this.youtubeService.getSelectedVideo(id)
    if (videoSelectionResult) {
      this.selectedVideo = videoSelectionResult
    }
  }
}
