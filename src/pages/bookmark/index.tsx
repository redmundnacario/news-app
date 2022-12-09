import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import NewsCard from '@components/common/NewsCard'
import Spinner from '@components/common/Spinner'
import TitleBar from '@components/common/TitleBar'
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
      <div className="mt-1">
        <TitleBar
          title={'All bookmark'}
          showBookmarkButton={false}
          handleOnChangeSortType={handleOnChangeSortType}
        />
        <div className="row">
          {sortedBookmark.map((_bookmark) => (
            <div
              key={_bookmark.id}
              className={`col col-lg-4 col-sm-12 px-1 mb-2 ${styles.otherStory}`}
            >
              <NewsCard data={_bookmark} hideTrailText={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  )
}

export default Page
