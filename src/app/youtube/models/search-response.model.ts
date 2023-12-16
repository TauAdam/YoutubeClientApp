export type SearchResponse = {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: Item[]
}

export type VideosResponse = {
  kind: string
  etag: string
  items: Video[]
  pageInfo: PageInfo
}
type PageInfo = Record<'totalResults' | 'resultsPerPage', number>

type Item = {
  kind: string
  etag: string
  id: Id
  snippet: Snippet
}

type Snippet = {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}
export type Video = {
  kind?: string
  etag?: string
  id: string
  snippet: VideoSnippet
  statistics: Statistics
}
type VideoSnippet = {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  tags?: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Localized
  defaultAudioLanguage?: string
  defaultLanguage?: string
}

type Statistics = {
  viewCount: string
  likeCount?: string
  favoriteCount: string
  commentCount: string
}

type Thumbnails = Record<
  'default' | 'medium' | 'high' | 'standard' | 'maxres',
  Thumbnail
>
type Thumbnail = {
  url: string
  width: number
  height: number
}
type Id = Record<'kind' | 'videoId', string>

type Localized = Record<'title' | 'description', string>
