import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
