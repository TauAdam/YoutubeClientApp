import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { mockedData } from '../../../../assets/response'
import { SearchResponse } from '../../models/search-response.model'

@Injectable({
  providedIn: 'root',
})
export class YoutubeSearchService {
  private searchRes: SearchResponse = mockedData

  private searchTagSubject = new Subject<string>()

  public searchTag$ = this.searchTagSubject.asObservable()

  public searchByTag(tag: string) {
    this.searchTagSubject.next(`${tag} `)
  }

  public getSearchItems() {
    return this.searchRes.items
  }

  public getSelectedVideo(id: string) {
    return this.searchRes.items.find(item => item.id === id)
  }
}
