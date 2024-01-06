import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { adminAuthGuard, authGuard } from './core/guards/auth.guard'
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
  {
    path: 'admin',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    canMatch: [adminAuthGuard],
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./favorite/favorite.module').then(m => m.FavoriteModule),
    canMatch: [adminAuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
