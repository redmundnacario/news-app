import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { ArticleType } from '@models/entities/news'
import NewsCard from './NewsCard'

import styles from '@styles/components/common/NewsSection.module.scss'

type NewsSectionPropsType = {
  newsList: ArticleType[]
  otherNews: ArticleType[]
}

const NewsSection: FC<NewsSectionPropsType> = (props) => {
  const { newsList, otherNews } = props
  console.log(newsList)
  const router = useRouter()

  return newsList.length && otherNews.length ? (
    <>
      <div className="row">
        <button onClick={() => router.push('/bookmark')}>VIEW BOOKMARK</button>
        <div className="row">
          <h1>Top Stories</h1>
        </div>
        <div className="row">
          <div className={`col-md-6 col-sm-12 ${styles.mainStory}`}>
            <NewsCard data={newsList[0]} />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className={`col-md-6 col-sm-12 ${styles.sideStory}`}>
                <NewsCard data={newsList[1]} />
              </div>
              <div className={`col-md-6 col-sm-12 ${styles.sideStory}`}>
                <NewsCard data={newsList[2]} />
              </div>
            </div>
            <div className="row">
              <div className={`col-md-6 col-sm-12 ${styles.sideStory}`}>
                <NewsCard data={newsList[3]} />
              </div>
              <div className={`col-md-6 col-sm-12 ${styles.sideStory}`}>
                <NewsCard data={newsList[4]} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`col-md-4 col-sm-12 ${styles.otherStory}`}>
            <NewsCard data={newsList[5]} />
          </div>
          <div className={`col-md-4 col-sm-12 ${styles.otherStory}`}>
            <NewsCard data={newsList[6]} />
          </div>
          <div className={`col-md-4 col-sm-12 ${styles.otherStory}`}>
            <NewsCard data={newsList[7]} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <h1>Sports</h1>
        </div>
        <div className={`col-md-4 col-sm-12 ${styles.mainStory}`}>
          <NewsCard data={otherNews[0]} />
        </div>
        <div className={`col-md-4 col-sm-12 ${styles.mainStory}`}>
          <NewsCard data={otherNews[1]} />
        </div>
        <div className={`col-md-4 col-sm-12 ${styles.mainStory}`}>
          <NewsCard data={otherNews[2]} />
        </div>
      </div>
    </>
  ) : (
    <div>Loading</div>
  )
}
export default NewsSection
