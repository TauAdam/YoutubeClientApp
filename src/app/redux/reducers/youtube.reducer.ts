import { createReducer, on } from '@ngrx/store'
import { Video } from 'src/app/youtube/models/search-response.model'

import { PageTokens } from '../../youtube/models/token.model'
import * as YoutubeAction from '../actions/youtube.actions'

export interface YoutubePageState {
  videos: Video[]
  searchQuery: string
  progress: boolean
  error: string
  currentPage: number
  tokens: PageTokens
  favorites: Array<string>
  favoriteVideos: Video[]
}
const initialState: YoutubePageState = {
  videos: [],
  searchQuery: '',
  progress: false,
  error: '',
  currentPage: 1,
  tokens: {
    nextPageToken: '',
    prevPageToken: '',
  },
  favorites: [],
  favoriteVideos: [],
}
export const YoutubeReducer = createReducer(
  initialState,
  on(
    YoutubeAction.getVideosSuccess,
    (state, { newVideos }): YoutubePageState => ({
      ...state,
      videos: newVideos,
      progress: false,
    })
  ),
  on(
    YoutubeAction.changeQuery,
    (state, { newQuery }): YoutubePageState => ({
      ...state,
      searchQuery: newQuery,
      progress: true,
    })
  ),
  on(
    YoutubeAction.setError,
    (state, { newError }): YoutubePageState => ({
      ...state,
      progress: false,
      error: newError,
    })
  ),
  on(
    YoutubeAction.goToNextPage,
    (state): YoutubePageState => ({
      ...state,
      currentPage: state.currentPage + 1,
    })
  ),
  on(
    YoutubeAction.goToPrevPage,
    (state): YoutubePageState => ({
      ...state,
      currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
    })
  ),
  on(
    YoutubeAction.setTokens,
    (state, { newTokens }): YoutubePageState => ({
      ...state,
      tokens: newTokens,
    })
  ),
  on(YoutubeAction.likeVideo, (state, { newId }): YoutubePageState => {
    const index = state.videos.findIndex(item => item.id === newId)
    if (index > -1) {
      const videoList = [...state.videos]
      videoList[index] = {
        ...videoList[index],
        favorite: true,
      }
      return {
        ...state,
        favorites: [...state.favorites, newId],
        favoriteVideos: [...state.favoriteVideos, videoList[index]],
      }
    }
    return state
  }),
  on(YoutubeAction.dislikeVideo, (state, { newId }): YoutubePageState => {
    const index = state.videos.findIndex(item => item.id === newId)
    const favoriteCard = state.favoriteVideos.find(el => el.id === newId)
    if (index > -1 || favoriteCard) {
      const videoList = [...state.videos]
      videoList[index] = {
        ...videoList[index],
        favorite: false,
      }
      return {
        ...state,
        videos: videoList,
        favorites: state.favorites.filter(el => el !== newId),
        favoriteVideos: state.favoriteVideos.filter(el => el.id !== newId),
      }
    }
    return state
  })
)
