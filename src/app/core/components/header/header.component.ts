import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs'

import * as YoutubeAction from '../../../redux/actions/youtube.actions'
import * as fromYoutube from '../../../redux/selectors/youtube.selector'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription?: Subscription

  protected isFilteringBlockVisible = false

  protected inputText = new FormControl('', { nonNullable: true })

  protected favoriteVideosLength$ = this.store.select(
    fromYoutube.selectFavoritesCount
  )

  public constructor(private store: Store) {}

  public ngOnInit(): void {
    this.subscription = this.inputText.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter(value => value.length >= 3)
      )
      .subscribe(newQuery => {
        this.store.dispatch(YoutubeAction.changeQuery({ newQuery }))
      })
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  protected toggleSortingBlock() {
    this.isFilteringBlockVisible = !this.isFilteringBlockVisible
  }
}
