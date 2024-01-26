import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'

import * as AdminAction from '../../../redux/actions/custom-cards.actions'

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent {
  @Input() public customCardId!: string

  public constructor(private store: Store) {}

  protected onDeleteCard(id: string): void {
    this.store.dispatch(AdminAction.deleteCard({ id }))
  }
}
