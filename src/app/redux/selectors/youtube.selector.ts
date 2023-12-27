import { createFeatureSelector, createSelector } from '@ngrx/store'

import { YoutubePageState } from '../reducers/youtube.reducer'

const selectYoutubeFeature = createFeatureSelector<YoutubePageState>('youtube')

const selectVideos = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.videos
)
const selectQuery = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.searchQuery
)
const selectProgress = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.progress
)
const selectError = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.error
)
const selectCurrentPage = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.currentPage
)
const selectTokens = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.tokens
)
export {
  selectCurrentPage,
  selectError,
  selectProgress,
  selectQuery,
  selectTokens,
  selectVideos,
}
