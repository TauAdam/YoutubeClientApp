import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CustomButtonComponent } from './custom-button/custom-button.component'
import { ColoredBorderDirective } from './directives/colored-border.directive'
import { FilterComponent } from './filter/filter.component'
import { HeaderComponent } from './header/header/header.component'
import { LoginInformationBlockComponent } from './header/login-information-block/login-information-block.component'
import { LogoComponent } from './header/logo/logo.component'
import { SortSearchResultsPipe } from './pipes/sort-search-results.pipe'
import { TextFilterPipe } from './pipes/text-filter.pipe'
import { SearchBarComponent } from './search/search-bar/search-bar.component'
import { SearchItemComponent } from './search/search-item/search-item.component'
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { LoginFormComponent } from './login-form/login-form.component'

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
    ColoredBorderDirective,
    TextFilterPipe,
    SortSearchResultsPipe,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    CustomButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
