import { createReducer, on } from '@ngrx/store'
import { Video } from 'src/app/youtube/models/search-response.model'

import { createCustomCard } from '../actions'

export interface AdminPageState {
  items: Video[]
}
const initialState: AdminPageState = {
  items: [],
}
export const AdminReducer = createReducer(
  initialState,
  on(
    createCustomCard,
    (state, { item }): AdminPageState => ({
      ...state,
      items: [...state.items, item],
    })
  )
)
