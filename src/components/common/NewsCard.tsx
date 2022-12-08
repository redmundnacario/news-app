/* eslint-disable @next/next/no-img-element */
import { ArticleType } from '@models/entities/news'
import React, { FC } from 'react'

import styles from '@styles/components/common/NewsCard.module.scss'
import Link from 'next/link'

type NewsCardPropsType = {
  data: ArticleType
}

const NewsCard: FC<NewsCardPropsType> = (props) => {
  const { data } = props

  return (
    <Link href={`/article/${data.id}`}>
      <div className={styles.newsCard}>
        <div
          className={`row ${styles.image}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${data.thumbnail})`,
          }}
        ></div>
        <div className={styles.newsCardFooter}>
          <span>{data.headline}</span>
          <span>{data.trailText}</span>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
