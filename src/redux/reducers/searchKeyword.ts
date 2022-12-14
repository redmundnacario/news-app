import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { initialState } from '@store/state/searchKeyword'

export const searchKeywordSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.key = action.payload
    },
  },
})

export const { setSearchKeyword } = searchKeywordSlice.actions

export default searchKeywordSlice.reducer
