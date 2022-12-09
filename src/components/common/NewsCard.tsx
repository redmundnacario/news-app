/* eslint-disable @next/next/no-img-element */
import { ArticleType } from '@models/entities/news'
import React, { FC } from 'react'

import styles from '@styles/components/common/NewsCard.module.scss'
import Link from 'next/link'

type NewsCardPropsType = {
  data: ArticleType
  hideTrailText?: boolean
  hideImage?: boolean
}

const NewsCard: FC<NewsCardPropsType> = (props) => {
  const { data, hideTrailText = false, hideImage = false } = props

  return (
    <Link href={`/article/${data.id}`}>
      <div className={styles.newsCard}>
        <div
          className={`row ${styles.image}`}
          style={
            !hideImage
              ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${data.thumbnail})`,
                }
              : {}
          }
        ></div>
        <div
          className={
            hideImage ? styles.newsCardFooterHiddenImage : styles.newsCardFooter
          }
        >
          <p>{data.headline}</p>
          {!hideTrailText && <span>{data.trailText}</span>}
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
