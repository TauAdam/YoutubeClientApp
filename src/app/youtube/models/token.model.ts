type PageTokens = {
  prevPageToken: string
  nextPageToken: string
}
type TokenType = keyof PageTokens
export type { PageTokens, TokenType }
