import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { SortType } from '@models/entities/news'
import Dropdown from './Dropdown'

import styles from '@styles/components/common/TitleBar.module.scss'

type TitleBarPropsType = {
  title: string
  showBookmarkButton?: boolean
  handleOnChangeSortType: (value: SortType) => void
}

const TitleBar: FC<TitleBarPropsType> = (props) => {
  const { title, showBookmarkButton = true, handleOnChangeSortType } = props
  const router = useRouter()

  return (
    <div className={`row px-1 ${styles.container}`}>
      <h1>{title}</h1>
      <div className={styles.actionContainer}>
        {showBookmarkButton && (
          <button
            onClick={() => router.push('/bookmark')}
            className={styles.actionButton}
          >
            VIEW BOOKMARK
          </button>
        )}
        <Dropdown handleOnChange={handleOnChangeSortType} />
      </div>
    </div>
  )
}

export default TitleBar
