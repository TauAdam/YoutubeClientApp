import { Component, Input } from '@angular/core'

import { Video } from '../../models/search-response.model'

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() public item!: Video
}
