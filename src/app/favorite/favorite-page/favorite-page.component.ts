import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as fromYoutube from '../../redux/selectors/youtube.selector'
import { Video } from '../../youtube/models/search-response.model'
import { FilteringService } from '../../youtube/services/filtering/filtering.service'
import { SortingService } from '../../youtube/services/sorting/sorting.service'

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit {
  protected favoriteVideos$!: Observable<Video[]>

  public constructor(
    protected filteringService: FilteringService,
    protected sortingService: SortingService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.favoriteVideos$ = this.store.select(fromYoutube.selectFavoriteVideos)
  }
}
