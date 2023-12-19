import { createReducer, on } from '@ngrx/store'
import { Video } from 'src/app/youtube/models/search-response.model'

import {
  createCustomCard,
  deleteCustomCard,
} from '../actions/custom-cards.actions.'

export interface AdminPageState {
  customCards: Video[]
}
const initialState: AdminPageState = {
  customCards: [],
}
export const AdminReducer = createReducer(
  initialState,
  on(
    createCustomCard,
    (state, { newItem }): AdminPageState => ({
      ...state,
      customCards: [...state.customCards, newItem],
    })
  ),
  on(
    deleteCustomCard,
    (state, { id }): AdminPageState => ({
      ...state,
      customCards: state.customCards.filter(card => card.id !== id),
    })
  )
)
