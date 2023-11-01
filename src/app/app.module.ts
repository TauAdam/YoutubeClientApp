import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FilterComponent } from './filter/filter.component'
import { HeaderComponent } from './header/header/header.component'
import { LoginInformationBlockComponent } from './header/login-information-block/login-information-block.component'
import { LogoComponent } from './header/logo/logo.component'
import { SearchBarComponent } from './search/search-bar/search-bar.component'
import { SearchItemComponent } from './search/search-item/search-item.component'
import { SearchResultsComponent } from './search/search-results/search-results.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchBarComponent,
    LogoComponent,
    LoginInformationBlockComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
