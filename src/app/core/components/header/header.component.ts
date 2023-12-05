import { Component } from '@angular/core'

import { YoutubeSearchService } from '../../../youtube/services/youtube/youtube-search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected isFilteringBlockVisible = false

  protected inputText = ''

  public constructor(private youtubeService: YoutubeSearchService) {}

  protected toggleSortingBlock() {
    this.isFilteringBlockVisible = !this.isFilteringBlockVisible
  }

  protected onSearchQueryChange(query: string): void {
    this.youtubeService.setSearchQuery(query)
    this.youtubeService.showResults = true
  }
}
