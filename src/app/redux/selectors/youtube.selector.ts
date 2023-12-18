import { createFeatureSelector, createSelector } from '@ngrx/store'

import { YoutubePageState } from '../reducers/youtube.reducer'

const selectYoutubeFeature = createFeatureSelector<YoutubePageState>('youtube')

export const selectYoutubeVideos = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.videos
)
export const selectYoutubeSearch = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.searchQuery
)
export const selectYoutubeProgress = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.progress
)
