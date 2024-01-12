import { createFeatureSelector, createSelector } from '@ngrx/store'

import { YoutubePageState } from '../reducers/youtube.reducer'

const selectYoutubeFeature = createFeatureSelector<YoutubePageState>('youtube')

const selectYtVideos = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.videos
)
const selectQuery = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.searchQuery
)
const selectProgress = createSelector(
  selectYoutubeFeature,
  (state: YoutubePageState) => state.isInProgress
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
const selectFavoritesCount = createSelector(
  selectFavoriteVideos,
  videos => videos.length
)
const selectFavoriteStatusById = (id: string) =>
  createSelector(selectFavoriteVideos, videos =>
    videos.some(item => item.id === id)
  )

export {
  selectCurrentPage,
  selectError,
  selectFavoritesCount,
  selectFavoriteStatusById,
  selectFavoriteVideos,
  selectProgress,
  selectQuery,
  selectTokens,
  selectYtVideos,
}
