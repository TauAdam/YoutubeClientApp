import { SearchItem } from "./search-item.model";

type PageInfo = "totalResults" | "resultsPerPage";
export type SearchResponse = {
    kind: string;
    etag: string;
    pageInfo: Record<PageInfo, number>;
    items: SearchItem[];
};
