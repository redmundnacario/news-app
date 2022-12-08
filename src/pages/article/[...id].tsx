import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '@components/common/Spinner'
import { ArticleType } from '@models/entities/news'
import { append, remove } from '@redux/reducers/bookmark'
import { RootState } from '@redux/store'
import { getArticle } from '@services/gaurdian'

const Page = () => {
  const dispatch = useDispatch()
  const bookmark = useSelector((state: RootState) => state.bookmark.articleList)

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

  return article ? (
    <div className="pageContent container">
      <div className="row">
        <div className="co-lg-9">
          <button
            onClick={() => handleAddOrRemoveBookmark()}
            style={
              isBookmarked
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'green' }
            }
          >
            {isBookmarked ? 'REMOVE BOOKMARK' : 'ADD BOOKMARK'}
          </button>
          <p>{article.firstPublicationDate}</p>
          <h1>{article.headline}</h1>
          <p>{article.trailText}</p>
          <p>Author: {article.byline}</p>
        </div>
      </div>
      <div className="row">
        <div
          dangerouslySetInnerHTML={{ __html: article.body }}
          className="col-lg-8"
        ></div>
        <div
          dangerouslySetInnerHTML={{ __html: article.main }}
          className="col-lg-4"
        ></div>
      </div>
    </div>
  ) : (
    <Spinner />
  )
}

export default Page
