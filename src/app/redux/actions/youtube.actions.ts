import { createAction, props } from '@ngrx/store'

import { Video } from '../../youtube/models/search-response.model'

export enum YouTubeCard {
  GET_VIDEOS_ERROR = '[Youtube Api] Get error',
  GET_VIDEOS_SUCCESS = '[Youtube Api] Get response',
  CHANGE_QUERY = '[Youtube Api] Change query',
}

export const getYoutubeVideosSuccess = createAction(
  YouTubeCard.GET_VIDEOS_SUCCESS,
  props<{ newVideos: Video[] }>()
)
export const changeQuery = createAction(
  YouTubeCard.CHANGE_QUERY,
  props<{ newQuery: string }>()
)
export const getYoutubeError = createAction(
  YouTubeCard.GET_VIDEOS_ERROR,
  props<{ newError: string }>()
)
