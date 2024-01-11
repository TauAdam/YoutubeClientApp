import { createReducer, on } from '@ngrx/store'
import { Video } from 'src/app/youtube/models/search-response.model'

import { PageTokens } from '../../youtube/models/token.model'
import * as YoutubeAction from '../actions/youtube.actions'

export interface YoutubePageState {
  videos: Video[]
  searchQuery: string
  isInProgress: boolean
  error: string
  currentPage: number
  tokens: PageTokens
  favorites: Array<string>
  favoriteVideos: Video[]
}
const initialState: YoutubePageState = {
  videos: [],
  searchQuery: '',
  isInProgress: false,
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
      isInProgress: false,
    })
  ),
  on(
    YoutubeAction.changeQuery,
    (state, { newQuery }): YoutubePageState => ({
      ...state,
      videos: [],
      searchQuery: newQuery,
      isInProgress: true,
    })
  ),
  on(
    YoutubeAction.setError,
    (state, { newError }): YoutubePageState => ({
      ...state,
      isInProgress: false,
      error: newError,
    })
  ),
  on(
    YoutubeAction.goToNextPage,
    (state): YoutubePageState => ({
      ...state,
      isInProgress: true,
      currentPage: state.currentPage + 1,
    })
  ),
  on(
    YoutubeAction.goToPrevPage,
    (state): YoutubePageState => ({
      ...state,
      isInProgress: true,
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
    const favoriteCard = state.favoriteVideos.find(el => el.id === newId)

    if (index > -1 || favoriteCard) {
      const videoList = [...state.videos]
      videoList[index] = {
        ...videoList[index],
        favorite: true,
      }
      return {
        ...state,
        videos: videoList,
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
