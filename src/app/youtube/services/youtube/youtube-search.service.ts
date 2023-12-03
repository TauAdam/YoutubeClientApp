import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators'

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
  public showResults = false

  public searchTagSubject = new Subject<string>()

  public videos$ = this.searchTagSubject.pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    filter(value => value.length >= 3),
    switchMap(searchTag => this.getSearchVideos(searchTag))
  )

  public constructor(private http: HttpClient) {}

  public setSearchQuery(query: string) {
    this.searchTagSubject.next(query)
  }

  public getVideos(id: string) {
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics')
    return this.http
      .get<VideosResponse>(Endpoint.VIDEOS, { params })
      .pipe(map(res => res.items))
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
