import { ArticleType, SortType } from '@models/entities/news'
import React, { FC } from 'react'

import Dropdown from './Dropdown'
import NewsCard from './NewsCard'

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
    <p>Loading</p>
  )
}

export default SearchResults
