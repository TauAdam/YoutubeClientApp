import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SearchItem } from '../../models/search-item.model'
import { YoutubeSearchService } from '../../services/youtube/youtube-search.service'

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  protected selectedVideo!: SearchItem

  public constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeSearchService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const itemId = params['id']
      if (itemId) {
        this.onSelectVideo(itemId)
      }
    })
  }

  protected onSelectVideo(id: string) {
    const videoSelectionResult = this.youtubeService.getSelectedVideo(id)
    if (videoSelectionResult) {
      this.selectedVideo = videoSelectionResult
    }
  }
}
