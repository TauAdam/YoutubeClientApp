import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'

import { CustomButtonComponent } from '../custom-button/custom-button.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { SearchItemComponent } from './components/search-item/search-item.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { ColoredBorderDirective } from './directives/colored-border.directive'
import { MainPageComponent } from './pages/main-page/main-page.component'
import { SortSearchResultsPipe } from './pipes/sort-search-results.pipe'
import { TextFilterPipe } from './pipes/text-filter.pipe'
import { YoutubeRoutingModule } from './youtube-routing.module'

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SearchBarComponent,
    ColoredBorderDirective,
    MainPageComponent,
    TextFilterPipe,
    SortSearchResultsPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    CustomButtonComponent,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule {}
