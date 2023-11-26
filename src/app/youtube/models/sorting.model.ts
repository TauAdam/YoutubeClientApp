type Direction = 'asc' | 'desc' | ''
type SortType = 'date' | 'views' | ''
type SortingOptions = {
  type: SortType
  direction: Direction
}
export type { SortingOptions, SortType }
