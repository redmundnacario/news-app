import { useCallback, useEffect, useState } from 'react'

import NewsSection from '@components/common/NewsSection'
import useSortArrayObjects from '@hooks/useSortArrayObjects'
import { ArticleType, SortType } from '@models/entities/news'
import { getCategoryNewsStories, getTopNewsStories } from '@services/gaurdian'

export const Page = () => {
  const [newsList, setNewsList] = useState<ArticleType[]>([])
  const [otherNews, setOtherNews] = useState<ArticleType[]>([])
  const [sorting, setSorting] = useState<SortType>('newest')

  const { sortedData: sortedNewsList } = useSortArrayObjects({
    data: newsList,
    sortType: sorting,
    sortField: 'firstPublicationDate',
  })

  const handleOnChangeSortType = useCallback((value: SortType) => {
    setSorting(value)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const _newsList = await getTopNewsStories()
      setNewsList(_newsList)
    }

    const fetchOtherNews = async () => {
      const _otherNews = await getCategoryNewsStories()
      setOtherNews(_otherNews)
    }

    void fetchData()
    void fetchOtherNews()
  }, [])

  return (
    <div className="pageContent container">
      <NewsSection
        newsList={sortedNewsList}
        otherNews={otherNews}
        handleOnChangeSortType={handleOnChangeSortType}
      />
    </div>
  )
}

export default Page
