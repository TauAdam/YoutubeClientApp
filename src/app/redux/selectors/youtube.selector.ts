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
const selectFavoriteVideos = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.favoriteVideos
)
const selectFavoriteIndexes = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.favorites
)
const selectFavoritesLength = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.favorites.length
)
export {
  selectCurrentPage,
  selectError,
  selectFavoriteIndexes,
  selectFavoritesLength,
  selectFavoriteVideos,
  selectProgress,
  selectQuery,
  selectTokens,
  selectVideos,
}
