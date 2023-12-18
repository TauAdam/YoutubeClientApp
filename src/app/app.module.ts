import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { isDevMode, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { CustomButtonComponent } from './custom-button/custom-button.component'
import { YoutubeEffects } from './redux/effects/youtube.effects'
import { AdminReducer } from './redux/reducers/custom-cards.reducer'
import { YoutubeReducer } from './redux/reducers/youtube.reducer'
import { reducers } from './redux/state.models'
import { AuthInterceptor } from './youtube/interceptors/auth.interceptor'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    CustomButtonComponent,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreModule.forFeature('admin', AdminReducer),
    StoreModule.forFeature('youtube', YoutubeReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([YoutubeEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
