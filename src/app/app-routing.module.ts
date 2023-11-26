import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { authGuard } from './core/guards/auth.guard'
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: '**', component: NotFoundPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}