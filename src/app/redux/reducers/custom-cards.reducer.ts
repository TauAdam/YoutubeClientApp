import { createReducer, on } from '@ngrx/store'
import { Video } from 'src/app/youtube/models/search-response.model'

import * as AdminAction from '../actions/custom-cards.actions'

export interface AdminPageState {
  customCards: Video[]
}
const initialState: AdminPageState = {
  customCards: [],
}
export const AdminReducer = createReducer(
  initialState,
  on(
    AdminAction.addCard,
    (state, { newItem }): AdminPageState => ({
      ...state,
      customCards: [...state.customCards, newItem],
    })
  ),
  on(
    AdminAction.deleteCard,
    (state, { id }): AdminPageState => ({
      ...state,
      customCards: state.customCards.filter(card => card.id !== id),
    })
  )
)
