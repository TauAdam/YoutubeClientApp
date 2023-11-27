import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Subject, switchMap } from 'rxjs'

import {
  SearchResponse,
  VideosResponse,
} from '../../models/search-response.model'

const environment = {
  API_VIDEOS: 'https://www.googleapis.com/youtube/v3/videos',
  API_SEARCH: 'https://www.googleapis.com/youtube/v3/search',
  API_KEY: 'AIzaSyBc0QTdotfjuDugdgCLM2KO8sG64x0hrvk',
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
      .set('key', environment.API_KEY)
      .set('id', id)
      .set('part', 'snippet,statistics')
    return this.http
      .get<VideosResponse>(environment.API_VIDEOS, { params })
      .pipe(map(res => res.items))
  }

  public getSearchVideos$() {
    return this.searchTagSubject.pipe(map(value => this.getSearch(value)))
  }

  private getSearch(query: string) {
    const params = new HttpParams()
      .set('key', environment.API_KEY)
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('q', query)
    return this.http
      .get<SearchResponse>(environment.API_SEARCH, { params })
      .pipe(
        map(res => res.items.map(el => el.id.videoId).join(',')),
        switchMap(idString => this.getVideos(idString))
      )
  }
}
