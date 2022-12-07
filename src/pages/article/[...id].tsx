import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { ArticleType } from '@models/entities/news'
import { getArticle } from '@services/gaurdian'

const Page = () => {
  const router = useRouter()
  const { id } = router.query
  const newLink = id ? (typeof id === 'object' ? id.join('/') : id) : undefined

  const [article, setArticle] = useState<ArticleType | undefined>(undefined)

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
          <p>{article.firstPublicationDate}</p>
          <h1>{article.headline}</h1>
          <p>{article.trailText}</p>
          <p>Author: {article.byline}</p>
        </div>
      </div>
      <div className="row">
        <div
          dangerouslySetInnerHTML={{ __html: article.body }}
          className="col-lg-9"
        ></div>
        <div
          dangerouslySetInnerHTML={{ __html: article.main }}
          className="col-lg-3"
        ></div>
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  )
}

export default Page
