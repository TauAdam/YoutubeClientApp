import { combineReducers } from '@ngrx/store'

import { AdminReducer } from './reducers/custom.reducer'

export const reducers = combineReducers({
  adminPage: AdminReducer,
})
