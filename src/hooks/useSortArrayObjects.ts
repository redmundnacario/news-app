import { useEffect, useState } from 'react'

import { ArticleType, SortType } from '@models/entities/news'

type useSortArrayObjectsPropsType = {
  data: ArticleType[]
  sortType: SortType
  sortField: keyof ArticleType
}

const useSortArrayObjects = (props: useSortArrayObjectsPropsType) => {
  const { data, sortType, sortField } = props
  const [sortedData, setSortedData] = useState<typeof data>(data)

  useEffect(() => {
    const sortedNewsList = [...data].sort((a, b) => {
      return sortType === 'newest'
        ? new Date(a[sortField]) > new Date(b[sortField])
          ? -1
          : 1
        : new Date(a[sortField]) > new Date(b[sortField])
        ? 1
        : -1
    })
    setSortedData(sortedNewsList)
  }, [sortType, data, sortField])

  return {
    sortedData,
  }
}

export default useSortArrayObjects
