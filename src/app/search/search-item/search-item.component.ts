import { Component, Input, OnInit } from '@angular/core'

import { SearchItem } from '../search-item.model'

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() item!: SearchItem

  videoThumbnail!: string

  viewsCount!: string

  likesCount!: string

  dislikesCount!: string

  commentsCount!: string

  videoTitle!: string

  ngOnInit(): void {
    this.videoThumbnail = this.item.snippet.thumbnails.medium.url

    this.viewsCount = this.item.statistics.viewCount

    this.likesCount = this.item.statistics.likeCount

    this.dislikesCount = this.item.statistics.dislikeCount

    this.commentsCount = this.item.statistics.commentCount

    this.videoTitle = this.item.snippet.title
  }
}
