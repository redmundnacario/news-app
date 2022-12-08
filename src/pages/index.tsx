import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import NewsSection from '@components/common/NewsSection'
import SearchResults from '@components/common/SearchResults'
import useSortArrayObjects from '@hooks/useSortArrayObjects'
import { ArticleType, SortType } from '@models/entities/news'
import { RootState } from '@redux/store'
import {
  getCategoryNewsStories,
  getNewsBySearchKeyword,
  getTopNewsStories,
} from '@services/gaurdian'

export const Page = () => {
  const searchKeyword = useSelector(
    (state: RootState) => state.searchKeyword.key
  )

  const [newsList, setNewsList] = useState<ArticleType[]>([])
  const [otherNews, setOtherNews] = useState<ArticleType[]>([])
  const [sorting, setSorting] = useState<SortType>('newest')
  // const [section] = useState<string>('sport')

  const { sortedData: sortedNewsList } = useSortArrayObjects({
    data: newsList,
    sortType: sorting,
    sortField: 'firstPublicationDate',
  })

  const handleOnChangeSortType = useCallback((value: SortType) => {
    setSorting(value)
  }, [])

  useEffect(() => {
    const fetchBySearch = async () => {
      const _newsList = await getNewsBySearchKeyword(searchKeyword)
      setNewsList(_newsList)
    }

    const fetchData = async () => {
      const _newsList = await getTopNewsStories()
      setNewsList(_newsList)
    }

    const fetchOtherNews = async () => {
      const _otherNews = await getCategoryNewsStories()
      setOtherNews(_otherNews)
    }

    if (searchKeyword !== '') {
      void fetchBySearch()
    } else {
      void fetchData()
      void fetchOtherNews()
    }
  }, [searchKeyword])

  return (
    <div className="pageContent container">
      {searchKeyword === '' ? (
        <NewsSection
          newsList={sortedNewsList}
          otherNews={otherNews}
          handleOnChangeSortType={handleOnChangeSortType}
        />
      ) : (
        <SearchResults
          newsList={sortedNewsList}
          handleOnChangeSortType={handleOnChangeSortType}
        />
      )}
    </div>
  )
}

export default Page
