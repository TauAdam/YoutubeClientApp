import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Subject, switchMap } from 'rxjs'

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
  public searchTagSubject = new Subject<string>()

  public searchTag$ = this.searchTagSubject.asObservable()

  public constructor(private http: HttpClient) {}

  public getVideos(id: string) {
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics')
    return this.http
      .get<VideosResponse>(Endpoint.VIDEOS, { params })
      .pipe(map(res => res.items))
  }

  public getSearchVideos$() {
    return this.searchTagSubject.pipe(map(value => this.getSearchVideos(value)))
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
