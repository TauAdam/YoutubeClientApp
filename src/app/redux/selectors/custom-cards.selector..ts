import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AdminPageState } from '../reducers/custom-cards.reducer'

const selectCustomCardsFeature = createFeatureSelector<AdminPageState>('admin')

export const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (state: AdminPageState) => state.customCards
)
