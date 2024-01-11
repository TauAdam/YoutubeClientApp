import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AdminPageState } from '../reducers/custom-cards.reducer'
import { selectYtVideos } from './youtube.selector'

const selectCustomCardsFeature = createFeatureSelector<AdminPageState>('admin')

const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (state: AdminPageState) => state.customCards
)
const selectCustomCardById = (id: string) =>
  createSelector(selectCustomCards, customCards =>
    customCards.find(el => el.id === id)
  )
const selectVideos = createSelector(
  selectCustomCards,
  selectYtVideos,
  (custom, youtube) => [...custom, ...youtube]
)
const selectVideoById = (id: string) =>
  createSelector(selectVideos, videos => videos.find(el => el.id === id))

export { selectCustomCardById, selectCustomCards, selectVideoById }
