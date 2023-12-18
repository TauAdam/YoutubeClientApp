import { createReducer, on } from '@ngrx/store'
import { Video } from 'src/app/youtube/models/search-response.model'

import {
  changeQuery,
  getYoutubeError,
  getYoutubeVideosSuccess,
} from '../actions/youtube.actions'

export interface YoutubePageState {
  videos: Video[]
  searchQuery: string
  progress: boolean
}
const initialState: YoutubePageState = {
  videos: [],
  searchQuery: '',
  progress: false,
}
export const YoutubeReducer = createReducer(
  initialState,
  on(
    getYoutubeVideosSuccess,
    (state, { newVideos }): YoutubePageState => ({
      ...state,
      videos: [...state.videos, ...newVideos],
      progress: false,
    })
  ),
  on(
    changeQuery,
    (state, { newQuery }): YoutubePageState => ({
      ...state,
      searchQuery: newQuery,
      progress: true,
    })
  ),
  on(getYoutubeError, (state, { newError }): YoutubePageState => {
    console.log(newError)
    return {
      ...state,
      progress: false,
    }
  })
)
