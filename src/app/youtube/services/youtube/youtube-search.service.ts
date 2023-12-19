import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, shareReplay, switchMap } from 'rxjs/operators'

import { selectYoutubeSearch } from '../../../redux/selectors/youtube.selector'
import {
  SearchResponse,
  VideosResponse,
} from '../../models/search-response.model'

const enum Endpoint {
  VIDEOS = 'videos',
  SEARCH = 'search',
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeSearchService {
  public constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  public getVideos(id: string) {
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics')
    return this.http
      .get<VideosResponse>(Endpoint.VIDEOS, { params })
      .pipe(map(res => res.items.map(el => ({ ...el, custom: false }))))
  }

  public getYoutubeVideos() {
    return this.store.select(selectYoutubeSearch).pipe(
      switchMap(searchTag => this.getSearchVideos(searchTag)),
      shareReplay(1)
    )
  }

  private getSearchVideos(query: string) {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('q', query)
    return this.http.get<SearchResponse>(Endpoint.SEARCH, { params }).pipe(
      map(res => res.items.map(el => el.id.videoId).join(',')),
      switchMap(idString => this.getVideos(idString))
    )
  }
}
