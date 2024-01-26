import { createAction, props } from '@ngrx/store'

import { Video } from '../../youtube/models/search-response.model'

enum ADMIN {
  CREATE = '[Admin] Create new card',
  DELETE_CARD = '[Admin] Delete card',
}

const addCard = createAction(ADMIN.CREATE, props<{ newItem: Video }>())
const deleteCard = createAction(ADMIN.DELETE_CARD, props<{ id: string }>())
export { addCard, deleteCard }
