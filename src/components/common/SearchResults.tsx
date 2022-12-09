import { ArticleType, SortType } from '@models/entities/news'
import React, { FC } from 'react'

import NewsCard from './NewsCard'
import Spinner from './Spinner'
import TitleBar from './TitleBar'

import styles from '@styles/components/common/NewsSection.module.scss'

type SearchResultsPropsType = {
  newsList: ArticleType[]
  handleOnChangeSortType: (value: SortType) => void
}

const SearchResults: FC<SearchResultsPropsType> = (props) => {
  const { newsList, handleOnChangeSortType } = props
  return newsList.length ? (
    <div className="row mt-1">
      <TitleBar
        title={'Search results'}
        handleOnChangeSortType={handleOnChangeSortType}
      />
      <div className="row">
        {newsList.map((_news) => (
          <div
            key={_news.id}
            className={`col col-lg-4 col-sm-12 px-1 mb-2 ${styles.otherStory}`}
          >
            <NewsCard data={_news} hideTrailText={true} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  )
}

export default SearchResults
