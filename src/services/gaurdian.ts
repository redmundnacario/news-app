import { ArticleType, NewsType } from '@models/entities/news'

export const getTopNewsStories = async (
  sorting = 'newest'
): Promise<NewsType[]> => {
  const result = await fetch(
    `https://content.guardianapis.com/news?order-by=${sorting}&page-size=8&show-fields=trailText,headline,thumbnail&production-office=us&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`,
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

  return result
}

export const getCategoryNewsStories = async (
  section = 'sport'
): Promise<NewsType[]> => {
  const result = await fetch(
    `https://content.guardianapis.com/${section}?order-by=newest&page-size=3&show-fields=trailText,headline,thumbnail&production-office=us&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`,
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

  return result
}

export const getArticle = async (id: string): Promise<ArticleType> => {
  const result = await fetch(
    `https://content.guardianapis.com/${id}?show-fields=headline,trailText,main,body,firstPublicationDate,byline&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`,
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
