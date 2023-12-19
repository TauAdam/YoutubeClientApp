import { createAction, props } from '@ngrx/store'

import { Video } from '../../youtube/models/search-response.model'

export enum ADMIN {
  CREATE = '[Admin] Create new card',
  DELETE_CARD = '[Admin] Delete card',
}

export const createCustomCard = createAction(
  ADMIN.CREATE,
  props<{ newItem: Video }>()
)
export const deleteCustomCard = createAction(
  ADMIN.DELETE_CARD,
  props<{ id: string }>()
)
