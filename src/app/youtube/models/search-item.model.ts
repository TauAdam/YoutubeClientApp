type Statistics =
  | 'viewCount'
  | 'likeCount'
  | 'dislikeCount'
  | 'favoriteCount'
  | 'commentCount'

type Thumbnail = {
  url: string
  width: number
  height: number
}

type Thumbnails = 'default' | 'medium' | 'high' | 'standard' | 'maxres'

type Localized = 'title' | 'description'
type Snippet = {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Record<Thumbnails, Thumbnail>
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Record<Localized, string>
  defaultAudioLanguage: string
}

export type SearchItem = {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  statistics: Record<Statistics, string>
}
