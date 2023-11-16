import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component'

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
