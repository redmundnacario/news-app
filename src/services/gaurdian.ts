import { ArticleType, NewsType } from '@models/entities/news'

export const getTopNewsStories = async (
  sorting = 'newest'
): Promise<ArticleType[]> => {
  const result = await fetch(
    `https://content.guardianapis.com/search?q=news&order-by=${sorting}&page-size=8&show-fields=headline,trailText,main,body,firstPublicationDate,byline,thumbnail&production-office=us&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`,
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.response.results)
    .catch((e) => {
      console.log(e)
      throw new Error('Something went wrong in fetching news')
    })

  if (result.length) {
    const newResult = result.map((item: NewsType) => {
      return {
        id: item.id,
        headline: item.fields.headline,
        trailText: item.fields.trailText,
        byline: item.fields.byline,
        main: item.fields.main,
        body: item.fields.body,
        thumbnail: item.fields.thumbnail,
        firstPublicationDate: item.fields.firstPublicationDate,
      }
    })
    return newResult
  }

  return []
}

export const getNewsBySearchKeyword = async (
  searchKeyword: string,
  sorting = 'newest'
): Promise<ArticleType[]> => {
  const result = await fetch(
    `https://content.guardianapis.com/search?q=${searchKeyword}&query-fields=headline,trailText&order-by=${sorting}&page-size=9&show-fields=headline,trailText,main,body,firstPublicationDate,byline,thumbnail&production-office=us&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`,
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.response.results)
    .catch(() => {
      throw new Error('Something went wrong in fetching news')
    })

  if (result.length) {
    const newResult = result.map((item: NewsType) => {
      return {
        id: item.id,
        headline: item.fields.headline,
        trailText: item.fields.trailText,
        byline: item.fields.byline,
        main: item.fields.main,
        body: item.fields.body,
        thumbnail: item.fields.thumbnail,
        firstPublicationDate: item.fields.firstPublicationDate,
      }
    })
    return newResult
  }

  return []
}

export const getCategoryNewsStories = async (
  section = 'sport'
): Promise<ArticleType[]> => {
  const result = await fetch(
    `https://content.guardianapis.com/search?q=${section}&order-by=newest&page-size=3&show-fields=headline,trailText,main,body,firstPublicationDate,byline,thumbnail&production-office=us&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`,
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.response.results)
    .catch(() => {
      throw new Error('Something went wrong in fetching news')
    })

  if (result.length) {
    const newResult = result.map((item: NewsType) => {
      return {
        id: item.id,
        headline: item.fields.headline,
        trailText: item.fields.trailText,
        byline: item.fields.byline,
        main: item.fields.main,
        body: item.fields.body,
        thumbnail: item.fields.thumbnail,
        firstPublicationDate: item.fields.firstPublicationDate,
      }
    })
    return newResult
  }

  return []
}

export const getArticle = async (id: string): Promise<ArticleType> => {
  const result = await fetch(
    `https://content.guardianapis.com/${id}?show-fields=headline,trailText,main,body,firstPublicationDate,byline,thumbnail&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`,
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.response.content.fields)
    .catch(() => {
      throw new Error('Something went wrong in fetching article')
    })

  return { id, ...result }
}
