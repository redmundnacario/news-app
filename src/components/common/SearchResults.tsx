import { ArticleType, SortType } from '@models/entities/news'
import React, { FC } from 'react'

import Dropdown from './Dropdown'
import NewsCard from './NewsCard'
import Spinner from './Spinner'

import styles from '@styles/components/common/NewsSection.module.scss'

type SearchResultsPropsType = {
  newsList: ArticleType[]
  handleOnChangeSortType: (value: SortType) => void
}

const SearchResults: FC<SearchResultsPropsType> = (props) => {
  const { newsList, handleOnChangeSortType } = props
  return newsList.length ? (
    <div className="row">
      <Dropdown handleOnChange={handleOnChangeSortType} />
      <div className="row">
        {newsList.map((_news) => (
          <div
            key={_news.id}
            className={`col-md-4 col-sm-12 ${styles.mainStory}`}
          >
            <NewsCard data={_news} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  )
}

export default SearchResults
