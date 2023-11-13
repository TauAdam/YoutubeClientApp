import { Component } from '@angular/core'

import { YoutubeSearchService } from '../../../youtube/services/youtube/youtube-search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected isFilteringBlockVisible = false

  public constructor(private youtubeService: YoutubeSearchService) {}

  protected submitForm(value: string) {
    this.youtubeService.searchByTag(value)
  }

  protected toggleSortingBlock() {
    this.isFilteringBlockVisible = !this.isFilteringBlockVisible
  }
}
