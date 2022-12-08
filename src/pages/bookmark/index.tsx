import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import NewsCard from '@components/common/NewsCard'
import Dropdown from '@components/common/Dropdown'
import Spinner from '@components/common/Spinner'
import useSortArrayObjects from '@hooks/useSortArrayObjects'
import { SortType } from '@models/entities/news'
import { RootState } from '@redux/store'

import styles from '@styles/components/common/NewsSection.module.scss'

const Page = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark.articleList)

  const [sorting, setSorting] = useState<SortType>('newest')

  const { sortedData: sortedBookmark } = useSortArrayObjects({
    data: bookmark,
    sortType: sorting,
    sortField: 'firstPublicationDate',
  })

  const handleOnChangeSortType = (value: SortType) => {
    setSorting(value)
  }

  return bookmark ? (
    <div className="pageContent container">
      <Dropdown handleOnChange={handleOnChangeSortType} />
      <h1>All Bookmark</h1>
      <div className="row">
        {sortedBookmark.map((_bookmark) => (
          <div
            key={_bookmark.id}
            className={`col-md-4 col-sm-12 ${styles.mainStory}`}
          >
            <NewsCard data={_bookmark} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  )
}

export default Page
