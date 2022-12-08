import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import bookmarkReducer from './reducers/bookmark'
import searchKeywordReducer from './reducers/searchKeyword'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, bookmarkReducer)

export const store = configureStore({
  reducer: {
    bookmark: persistedReducer,
    searchKeyword: searchKeywordReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
