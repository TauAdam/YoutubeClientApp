import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, of } from 'rxjs'

import { YoutubeSearchService } from '../../youtube/services/youtube/youtube-search.service'
import {
  changeQuery,
  getYoutubeError,
  getYoutubeVideosSuccess,
} from '../actions/youtube.actions'

@Injectable()
export class YoutubeEffects {
  public constructor(
    private readonly youtubeService: YoutubeSearchService,
    private readonly actions$: Actions
  ) {}

  private getSearchVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeQuery),
      exhaustMap(() =>
        this.youtubeService.getYoutubeVideos().pipe(
          map(newVideos => getYoutubeVideosSuccess({ newVideos })),
          catchError(newError => of(getYoutubeError({ newError })))
        )
      )
    )
  })
}
