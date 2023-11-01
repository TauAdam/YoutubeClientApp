import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchQuery = new EventEmitter()

  submitForm(value: string) {
    this.searchQuery.emit(value)
  }

  isSortingVisible = false

  toggleSortingBlock() {
    this.isSortingVisible = !this.isSortingVisible
  }
}
