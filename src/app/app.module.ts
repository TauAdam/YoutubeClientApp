import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchResultsComponent,
        SearchItemComponent,
        SearchBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
