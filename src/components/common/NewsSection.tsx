import React, { FC } from 'react'

import { ArticleType, SortType } from '@models/entities/news'
import NewsCard from './NewsCard'
import Spinner from './Spinner'
import TitleBar from './TitleBar'

import styles from '@styles/components/common/NewsSection.module.scss'

type NewsSectionPropsType = {
  newsList: ArticleType[]
  otherNews: ArticleType[]
  handleOnChangeSortType: (value: SortType) => void
}

const NewsSection: FC<NewsSectionPropsType> = (props) => {
  const { newsList, otherNews, handleOnChangeSortType } = props

  return newsList.length && otherNews.length ? (
    <>
      <div className="row mt-1">
        <TitleBar
          title={'Top stories'}
          handleOnChangeSortType={handleOnChangeSortType}
        />
        <div className="row mb-1">
          <div
            className={`col px-1 col-lg-6 col-sm-12 mbs-1 ${styles.mainStory}`}
          >
            <NewsCard data={newsList[0]} />
          </div>
          <div className={`col col-lg-6 col-sm-12 mb-1 ${styles.sideStories}`}>
            <div className={`col col-sm-12 ${styles.sideStory}`}>
              <NewsCard data={newsList[1]} hideTrailText={true} />
            </div>
            <div className={`col col-sm-12 ${styles.sideStory}`}>
              <NewsCard data={newsList[2]} hideTrailText={true} />
            </div>

            <div className={`col col-sm-12 ${styles.hiddenImageStory}`}>
              <NewsCard
                data={newsList[3]}
                hideTrailText={true}
                hideImage={true}
              />
            </div>
            <div className={`col col-sm-12 ${styles.hiddenImageStory}`}>
              <NewsCard
                data={newsList[4]}
                hideTrailText={true}
                hideImage={true}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className={`col px-1 col-sm-12 col-xl-4 pb-1 ${styles.otherStory}`}
          >
            <NewsCard data={newsList[5]} />
          </div>
          <div
            className={`col px-1 col-sm-12 col-xl-4 pb-1 ${styles.otherStory}`}
          >
            <NewsCard data={newsList[6]} />
          </div>
          <div
            className={`col px-1 col-sm-12 col-xl-4 pb-1 ${styles.otherStory}`}
          >
            <NewsCard data={newsList[7]} />
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="row px-1">
          <h1>Sports</h1>
        </div>
        <div
          className={`col px-1 col-sm-12 col-xl-4 pb-1 ${styles.otherStory}`}
        >
          <NewsCard data={otherNews[0]} hideTrailText={true} />
        </div>
        <div
          className={`col px-1 col-sm-12 col-xl-4 pb-1 ${styles.otherStory}`}
        >
          <NewsCard data={otherNews[1]} hideTrailText={true} />
        </div>
        <div
          className={`col px-1 col-sm-12 col-xl-4 pb-1 ${styles.otherStory}`}
        >
          <NewsCard data={otherNews[2]} hideTrailText={true} />
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  )
}
export default NewsSection
