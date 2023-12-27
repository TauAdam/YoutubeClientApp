import { createAction, props } from '@ngrx/store'

import { Video } from '../../youtube/models/search-response.model'
import { PageTokens } from '../../youtube/models/token.model'

enum YouTubePage {
  SET_ERROR = '[Youtube Api] Set error',
  GET_VIDEOS_SUCCESS = '[Youtube Api] Set response',
  CHANGE_QUERY = '[Youtube Api] Change query',
  TO_NEXT_PAGE = '[Youtube Api] Get next page',
  TO_PREV_PAGE = '[Youtube Api] Get prev page',
  SAVE_PAGE_TOKENS = '[Youtube Api] Save page tokens',
}

const getVideosSuccess = createAction(
  YouTubePage.GET_VIDEOS_SUCCESS,
  props<{ newVideos: Video[] }>()
)
const changeQuery = createAction(
  YouTubePage.CHANGE_QUERY,
  props<{ newQuery: string }>()
)
const setError = createAction(
  YouTubePage.SET_ERROR,
  props<{ newError: string }>()
)
const goToNextPage = createAction(YouTubePage.TO_NEXT_PAGE)

const goToPrevPage = createAction(YouTubePage.TO_PREV_PAGE)
const setTokens = createAction(
  YouTubePage.SAVE_PAGE_TOKENS,
  props<{ newTokens: PageTokens }>()
)

export {
  changeQuery,
  getVideosSuccess,
  goToNextPage,
  goToPrevPage,
  setError,
  setTokens,
}
