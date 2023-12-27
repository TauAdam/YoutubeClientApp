import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, shareReplay, switchMap } from 'rxjs/operators'

import * as YoutubeAction from '../../../redux/actions/youtube.actions'
import * as fromYoutube from '../../../redux/selectors/youtube.selector'
import {
  SearchResponse,
  VideosResponse,
} from '../../models/search-response.model'
import { TokenType } from '../../models/token.model'

const enum Endpoint {
  VIDEOS = 'videos',
  SEARCH = 'search',
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeSearchService {
  private pageTokens$ = this.store.select(fromYoutube.selectTokens)

  public constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  public getVideosById(id: string) {
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics')
    return this.http
      .get<VideosResponse>(Endpoint.VIDEOS, { params })
      .pipe(map(res => res.items.map(el => ({ ...el, custom: false }))))
  }

  public getYoutubeVideos(tokenType?: TokenType) {
    return this.store.select(fromYoutube.selectQuery).pipe(
      switchMap(searchTag => this.getVideoList(searchTag, tokenType)),
      shareReplay(1)
    )
  }

  private getVideoList(query: string, tokenType?: TokenType) {
    let params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '20')
      .set('q', query)

    this.pageTokens$.subscribe(tokens => {
      if (tokenType && tokens[tokenType]) {
        params = params.set('pageToken', tokens[tokenType])
      }
    })
    return this.http.get<SearchResponse>(Endpoint.SEARCH, { params }).pipe(
      map(response => {
        const newTokens = {
          nextPageToken: response.nextPageToken || '',
          prevPageToken: response.prevPageToken || '',
        }
        this.store.dispatch(YoutubeAction.setTokens({ newTokens }))
        return response
      }),
      map(res => res.items.map(el => el.id.videoId).join(',')),
      switchMap(idString => this.getVideosById(idString))
    )
  }

  public getNextPageResults() {
    return this.getYoutubeVideos('nextPageToken')
  }

  public getPrevPageResults() {
    return this.getYoutubeVideos('prevPageToken')
  }
}
