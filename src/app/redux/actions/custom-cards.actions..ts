import { createAction, props } from '@ngrx/store'

import { Video } from '../../youtube/models/search-response.model'

export enum ADMIN {
  CREATE = '[Admin] Create new card',
}

export const createCustomCard = createAction(
  ADMIN.CREATE,
  props<{ newItem: Video }>()
)
