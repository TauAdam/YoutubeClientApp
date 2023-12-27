import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AdminPageState } from '../reducers/custom-cards.reducer'

const selectCustomCardsFeature = createFeatureSelector<AdminPageState>('admin')

const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (state: AdminPageState) => state.customCards
)
const selectCustomCard = (id: string) =>
  createSelector(selectCustomCards, customCards =>
    customCards.find(el => el.id === id)
  )
export { selectCustomCard, selectCustomCards }
