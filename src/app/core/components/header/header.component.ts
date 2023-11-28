import { Component, OnInit } from '@angular/core'
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs'

import { YoutubeSearchService } from '../../../youtube/services/youtube/youtube-search.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  protected isFilteringBlockVisible = false

  protected inputText = ''

  protected searchQuery$ = new Subject<string>()

  public constructor(private youtubeService: YoutubeSearchService) {}

  protected toggleSortingBlock() {
    this.isFilteringBlockVisible = !this.isFilteringBlockVisible
  }

  public ngOnInit(): void {
    this.searchQuery$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(value => {
        if (value.length >= 3) {
          this.youtubeService.searchTagSubject.next(value)
          this.youtubeService.showResults = true
        }
      })
  }
}
