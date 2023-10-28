import { Component, Input } from "@angular/core";

import { SearchResponse } from "../search-response.model";

@Component({
    selector: "app-search-results",
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent {
    @Input() searchResults!: SearchResponse;
}
