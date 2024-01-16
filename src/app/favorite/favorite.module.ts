import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { YoutubeModule } from '../youtube/youtube.module'
import { FavoritePageComponent } from './favorite-page/favorite-page.component'
import { FavoriteRoutingModule } from './favorite-routing.module'

@NgModule({
  declarations: [FavoritePageComponent],
  imports: [CommonModule, FavoriteRoutingModule, YoutubeModule],
})
export class FavoriteModule {}
