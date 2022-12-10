/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '@components/common/Spinner'
import Alert, { AlertPropsType } from '@components/layout/Alert'
import { useAlertContext } from '@hoc/withAlert'
import { ArticleType } from '@models/entities/news'
import { append, remove } from '@redux/reducers/bookmark'
import { RootState } from '@redux/store'
import { getArticle } from '@services/gaurdian'

import styles from '@styles/article.module.scss'

const Page = () => {
  const dispatch = useDispatch()
  const bookmark = useSelector((state: RootState) => state.bookmark.articleList)

  const { setShowAlert, setAlertElementParams } = useAlertContext()

  const [isBookmarked, setIsBookmarked] = useState<boolean | undefined>(
    undefined
  )

  const router = useRouter()
  const { id } = router.query
  const newLink = id ? (typeof id === 'object' ? id.join('/') : id) : undefined

  const [article, setArticle] = useState<ArticleType | undefined>(undefined)

  const handleAddOrRemoveBookmark = () => {
    if (article) {
      if (isBookmarked) {
        dispatch(remove(article))
      } else {
        dispatch(append(article))
      }
      setAlertElementParams({
        element: (
          <Alert
            variant={isBookmarked ? 'danger' : 'success'}
            content={
              <span style={{ color: '#ffffff', fontSize: '14px' }}>
                <i
                  className="fa fa-bookmark"
                  style={{ marginRight: '12px' }}
                ></i>
                {isBookmarked ? 'REMOVED FROM BOOKMARKS' : 'SAVED TO BOOKMARKS'}
              </span>
            }
          />
        ) as unknown as React.FC<AlertPropsType>,
        autoDismissible: true,
        timeDelay: 1000,
      })
      setShowAlert(true)
    }
  }

  useEffect(() => {
    if (article) {
      const _isBookmarkedArray = bookmark.find(
        (_article) => _article.id === article.id
      )
      if (_isBookmarkedArray) {
        setIsBookmarked(true)
      } else {
        setIsBookmarked(false)
      }
    }
  }, [article, bookmark])

  useEffect(() => {
    if (newLink) {
      const fetchData = async () => {
        const _article = await getArticle(newLink)
        setArticle(_article)
      }
      void fetchData()
    }
  }, [newLink])

  const [image, setImage] = useState<{ src: string; alt: string } | undefined>(
    undefined
  )

  useEffect(() => {
    if (article?.main) {
      const doc = new DOMParser().parseFromString(article.main, 'text/xml')
      const img = doc.firstChild?.childNodes[1]
      if (img) {
        const src = (img as Element).getAttribute('src')
        const alt = (img as Element).getAttribute('alt')
        if (src && alt) {
          setImage({ src, alt })
        }
      }
    }
  }, [article?.main])

  return article ? (
    <div className="pageContent container px-1 mt-1">
      <div className={`row mb-1 mt-2 ${styles.verdanaText}`}>
        <div className={`col-lg-8 ${styles.titleContainer}`}>
          <button
            className={styles.actionButton}
            onClick={() => handleAddOrRemoveBookmark()}
          >
            <span>
              <i className={`fa fa-bookmark ${styles.icon}`}></i>
              {isBookmarked ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
            </span>
          </button>
          <p>{article.firstPublicationDate}</p>
          <h1 className={styles.title}>{article.headline}</h1>
          <h2 className={styles.title}>{article.trailText}</h2>
          <p>Author: {article.byline}</p>
        </div>
      </div>
      <div className={`row mb-2 ${styles.verdanaText}`}>
        <div
          dangerouslySetInnerHTML={{ __html: article.body }}
          className={`col-lg-8 ${styles.verdanaText}`}
        ></div>
        {image && (
          <div className="col-lg-4 px-1">
            <img src={image.src} alt={image.alt} className={styles.image} />
            <p className={styles.alt}>{image.alt}</p>
          </div>
        )}
      </div>
    </div>
  ) : (
    <Spinner />
  )
}

export default Page
