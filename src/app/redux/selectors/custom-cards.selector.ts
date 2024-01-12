import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AdminPageState } from '../reducers/custom-cards.reducer'
import {
  selectCurrentPage,
  selectFavoriteVideos,
  selectYtVideos,
} from './youtube.selector'

const selectCustomCardsFeature = createFeatureSelector<AdminPageState>('admin')

const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (state: AdminPageState) => state.customCards
)

const selectVideos = createSelector(
  selectCustomCards,
  selectYtVideos,
  selectFavoriteVideos,
  (custom, youtube, favorite) => [...custom, ...youtube, ...favorite]
)
const selectVideoById = (id: string) =>
  createSelector(selectVideos, videos => videos.find(el => el.id === id))

const MAX_ITEMS_PER_PAGE = 20
const selectMainPageVideos = createSelector(
  selectCustomCards,
  selectYtVideos,
  selectCurrentPage,
  (customCards, youtubeVideos, page) => {
    const videos =
      page === 1 ? [...customCards, ...youtubeVideos] : [...youtubeVideos]
    return videos.slice(0, MAX_ITEMS_PER_PAGE)
  }
)

export { selectCustomCards, selectMainPageVideos, selectVideoById }
