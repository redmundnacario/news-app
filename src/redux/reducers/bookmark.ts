import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ArticleType } from '@models/entities/news'
import { initialState } from '@store/state/bookmark'

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<ArticleType>) => {
      state.articleList.push(action.payload)
    },
    remove: (state, action: PayloadAction<ArticleType>) => {
      const newList = state.articleList.filter(
        (article) => article.id !== action.payload.id
      )
      state.articleList = newList
    },
  },
})

export const { append, remove } = bookmarkSlice.actions

export default bookmarkSlice.reducer
