import React from 'react'
import { useSelector } from 'react-redux'

import NewsCard from '@components/common/NewsCard'
import { RootState } from '@redux/store'

import styles from '@styles/components/common/NewsSection.module.scss'

const Page = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark.articleList)

  return bookmark ? (
    <div className="pageContent container">
      <h1>All Bookmark</h1>
      <div className="row">
        {bookmark.map((_bookmark) => (
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
    <p>Loading</p>
  )
}

export default Page
