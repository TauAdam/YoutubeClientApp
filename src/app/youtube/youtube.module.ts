import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { CustomButtonComponent } from '../shared/custom-button/custom-button.component'
import { DeleteButtonComponent } from './components/delete-button/delete-button.component'
import { HeartButtonComponent } from './components/heart-button/heart-button.component'
import { PaginationBlockComponent } from './components/pagination-block/pagination-block.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { SearchItemComponent } from './components/search-item/search-item.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { ColoredBorderDirective } from './directives/colored-border.directive'
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component'
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
    DetailedInformationPageComponent,
    DeleteButtonComponent,
    PaginationBlockComponent,
    HeartButtonComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    CustomButtonComponent,
    YoutubeRoutingModule,
  ],
  exports: [SearchResultsComponent, TextFilterPipe, SortSearchResultsPipe],
})
export class YoutubeModule {}
