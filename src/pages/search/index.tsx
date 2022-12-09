import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import SearchResults from '@components/common/SearchResults'
import useSortArrayObjects from '@hooks/useSortArrayObjects'
import { ArticleType, SortType } from '@models/entities/news'
import { RootState } from '@redux/store'
import { getNewsBySearchKeyword } from '@services/gaurdian'

export const Page = () => {
  const searchKeyword = useSelector(
    (state: RootState) => state.searchKeyword.key
  )
  const router = useRouter()

  const [newsList, setNewsList] = useState<ArticleType[]>([])
  const [sorting, setSorting] = useState<SortType>('newest')

  const { sortedData: sortedNewsList } = useSortArrayObjects({
    data: newsList,
    sortType: sorting,
    sortField: 'firstPublicationDate',
  })

  const handleOnChangeSortType = useCallback((value: SortType) => {
    setSorting(value)
  }, [])

  if (searchKeyword === '') {
    router.back()
  }

  useEffect(() => {
    const fetchBySearch = async () => {
      const _newsList = await getNewsBySearchKeyword(searchKeyword)
      setNewsList(_newsList)
    }
    if (searchKeyword !== '') {
      void fetchBySearch()
    }
  }, [searchKeyword])

  return (
    <div className="pageContent container">
      <SearchResults
        newsList={sortedNewsList}
        handleOnChangeSortType={handleOnChangeSortType}
      />
    </div>
  )
}

export default Page
