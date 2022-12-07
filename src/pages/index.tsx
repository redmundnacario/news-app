import { useEffect, useState } from 'react'

import { getCategoryNewsStories, getTopNewsStories } from '@services/gaurdian'
import NewsSection from '@components/common/NewsSection'
import { NewsType } from '@models/entities/news'

type SortType = 'newest' | 'oldest' | 'relevance'

export const Page = () => {
  const [newsList, setNewsList] = useState<NewsType[]>([])
  const [otherNews, setOtherNews] = useState<NewsType[]>([])
  const [sorting] = useState<SortType>('newest')
  const [section] = useState<string>('sport')

  useEffect(() => {
    const fetchData = async () => {
      const _newsList = await getTopNewsStories(sorting)
      setNewsList(_newsList)
    }
    void fetchData()
  }, [sorting])

  useEffect(() => {
    const fetchData = async () => {
      const _otherNews = await getCategoryNewsStories(section)
      setOtherNews(_otherNews)
    }
    void fetchData()
  }, [section])

  return (
    <div className="pageContent container">
      <NewsSection newsList={newsList} otherNews={otherNews} />
    </div>
  )
}

export default Page
