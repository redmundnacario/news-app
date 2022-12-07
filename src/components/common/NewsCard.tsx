/* eslint-disable @next/next/no-img-element */
import { NewsType } from '@models/entities/news'
import React, { FC } from 'react'

import styles from '@styles/components/common/NewsCard.module.scss'
import Link from 'next/link'

type NewsCardPropsType = {
  data: NewsType
}

const NewsCard: FC<NewsCardPropsType> = (props) => {
  const { data } = props
  // const splittedlink = data.id.split('/')
  // const newLink = splittedlink[splittedlink.length - 1]

  return (
    <Link href={`/article/${data.id}`}>
      <div className={styles.newsCard}>
        <div
          className={`row ${styles.image}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${data.fields.thumbnail})`,
          }}
        ></div>
        <div className={styles.newsCardFooter}>
          <span>{data.fields.headline}</span>
          <span>{data.fields.trailText}</span>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
