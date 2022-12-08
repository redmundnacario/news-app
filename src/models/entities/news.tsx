export type NewsType = {
  apiUrl: string
  fields: {
    headline: string
    trailText: string
    byline: string
    main: string
    body: string
    thumbnail: string
    firstPublicationDate: string
  }
  id: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  sectionId: string
  type: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
}

export type ArticleType = {
  id: string
  headline: string
  trailText: string
  byline: string
  main: string
  body: string
  thumbnail: string
  firstPublicationDate: string
}

export type SortType = 'newest' | 'oldest'
