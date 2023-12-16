import { createAction, props } from '@ngrx/store'

import { Video } from '../../youtube/models/search-response.model'

export enum CustomCard {
  CREATE = '[Admin] Create',
}

export const createCustomCard = createAction(
  CustomCard.CREATE,
  props<{ item: Video }>()
)
