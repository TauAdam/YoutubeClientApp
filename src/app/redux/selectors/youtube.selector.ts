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
const selectFavorites = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.videos.filter(el => el.favorite)
)
const selectFavoritesIndexes = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.favorites
)
const selectFavoritesLength = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.videos.filter(el => el.favorite).length
)
export {
  selectCurrentPage,
  selectError,
  selectFavorites,
  selectFavoritesIndexes,
  selectFavoritesLength,
  selectProgress,
  selectQuery,
  selectTokens,
  selectVideos,
}
