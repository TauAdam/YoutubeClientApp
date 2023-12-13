import { Pipe, PipeTransform } from '@angular/core'

import { Video } from '../models/search-response.model'

@Pipe({
  name: 'textFilter',
})
export class TextFilterPipe implements PipeTransform {
  public transform(items: Video[], text?: string): Video[] {
    if (!text) return items
    return items.filter(item =>
      item.snippet.title.toLowerCase().includes(text.toLowerCase())
    )
  }
}
