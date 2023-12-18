import { combineReducers } from '@ngrx/store'

import { AdminReducer } from './reducers/custom-cards.reducer'
import { YoutubeReducer } from './reducers/youtube.reducer'

export const reducers = combineReducers({
  adminPage: AdminReducer,
  youtube: YoutubeReducer,
})
