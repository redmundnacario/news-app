import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchKeyword } from '@redux/reducers/searchKeyword'

const SearchBar = () => {
  const dispatch = useDispatch()

  const handeOnchangeSearchKeyword = useCallback(
    (value: string) => {
      dispatch(setSearchKeyword(value.trim()))
    },
    [dispatch]
  )

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handeOnchangeSearchKeyword(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
