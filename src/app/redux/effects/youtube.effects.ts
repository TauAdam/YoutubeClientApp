import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs'

import { YoutubeSearchService } from '../../youtube/services/youtube/youtube-search.service'
import * as YoutubeAction from '../actions/youtube.actions'

@Injectable()
export class YoutubeEffects {
  public constructor(
    private readonly youtubeService: YoutubeSearchService,
    private readonly actions$: Actions
  ) {}

  private searchResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeAction.changeQuery),
      exhaustMap(() =>
        this.youtubeService.getYoutubeVideos().pipe(
          map(newVideos => YoutubeAction.getVideosSuccess({ newVideos })),
          catchError(newError => of(YoutubeAction.setError({ newError })))
        )
      )
    )
  })

  private prevPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeAction.goToPrevPage),
      switchMap(() =>
        this.youtubeService.getPrevPageResults().pipe(
          map(newVideos => YoutubeAction.getVideosSuccess({ newVideos })),
          catchError(newError => of(YoutubeAction.setError({ newError })))
        )
      )
    )
  })

  private nextPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeAction.goToNextPage),
      switchMap(() =>
        this.youtubeService.getNextPageResults().pipe(
          map(newVideos => YoutubeAction.getVideosSuccess({ newVideos })),
          catchError(newError => of(YoutubeAction.setError({ newError })))
        )
      )
    )
  })
}
