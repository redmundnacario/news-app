import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSearchKeyword } from '@store/reducers/searchKeyword'
import { RootState } from '@store/store'

import styles from '@styles/components/common/SearchBar.module.scss'

const SearchBar = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const searchKeyword = useSelector(
    (state: RootState) => state.searchKeyword.key
  )

  const searchBarRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handeOnchangeSearchKeyword = useCallback(
    (value: string) => {
      const _value = value.trim()
      dispatch(setSearchKeyword(value.trim()))
      if (_value !== '') {
        router.push('/search')
      } else {
        setIsOpen(false)
        router.push('/')
      }
    },
    [dispatch, router]
  )

  const handleClickOutside = (e: Event) => {
    const target = e.target as HTMLDivElement

    if (searchBarRef.current && !searchBarRef.current.contains(target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchBarRef])

  return (
    <div
      ref={searchBarRef}
      onClick={() => setIsOpen(!isOpen ? !isOpen : isOpen)}
      data-testid="searchbar"
    >
      {isOpen ? (
        <input
          className={styles.inputSearchBar}
          type="text"
          onChange={(e) => handeOnchangeSearchKeyword(e.target.value)}
          defaultValue={searchKeyword}
          placeholder="Search all news"
          data-testid="searchbar-open"
        />
      ) : (
        <div className={styles.logoNotClicked}>
          <i className="fa fa-search" data-testid="searchbar-closed"></i>
        </div>
      )}
    </div>
  )
}

export default SearchBar
