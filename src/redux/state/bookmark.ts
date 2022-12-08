import { ArticleType } from '@models/entities/news'

export interface BookmarkState {
  articleList: ArticleType[]
}

export const initialState: BookmarkState = {
  articleList: [],
}
