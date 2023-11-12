import { Pipe, PipeTransform } from '@angular/core'

import { SearchItem } from '../search/search-item.model'

@Pipe({
  name: 'textFilter',
})
export class TextFilterPipe implements PipeTransform {
  public transform(items: SearchItem[], text?: string): SearchItem[] {
    if (!text) return items
    return items.filter(item =>
      item.snippet.title.toLowerCase().includes(text.toLowerCase())
    )
  }
}
