import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { debounceTime, distinctUntilChanged, filter } from 'rxjs'

import * as YoutubeAction from '../../../redux/actions/youtube.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  protected isFilteringBlockVisible = false

  protected inputText = new FormControl('', { nonNullable: true })

  public constructor(private store: Store) {
    this.inputText.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter(value => value.length >= 3)
      )
      .subscribe(newQuery => {
        this.store.dispatch(YoutubeAction.changeQuery({ newQuery }))
      })
  }

  protected toggleSortingBlock() {
    this.isFilteringBlockVisible = !this.isFilteringBlockVisible
  }
}
