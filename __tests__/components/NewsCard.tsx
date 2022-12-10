import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NewsCard from '@components/common/NewsCard'
import { ArticleType } from '@models/entities/news'

const data: ArticleType = {
  id: 'media/2022/dec/10/media-layoffs-cnn-buzzfeed-gannett-recount-protocol',
  headline:
    'Concern as US media hit with wave of layoffs amid rise of disinformation',
  trailText:
    'Wider economic uncertainty is behind cuts at companies including CNN, BuzzFeed and Gannett, executives say',
  byline: 'Lauren Aratani',
  main: '<figure class="element element-image" data-media-id="4d9e99b3b6f419111ab16ed785552fc4b16f362b"> <img src="https://media.guim.co.uk/4d9e99b3b6f419111ab16ed785552fc4b16f362b/0_176_4000_2399/1000.jpg" alt="CNN center in Atlanta, Georgia" width="1000" height="600" class="gu-image" /> <figcaption> <span class="element-image__caption">CNN began laying off hundreds of employees in November.</span> <span class="element-image__credit">Photograph: Daniel Slim/AFP/Getty Images</span> </figcaption> </figure>',
  body: '<p>A wave of layoffs</p>',
  firstPublicationDate: '2022-12-10T10:00:04Z',
  thumbnail:
    'https://media.guim.co.uk/4d9e99b3b6f419111ab16ed785552fc4b16f362b/0_176_4000_2399/500.jpg',
}

describe('Dropdown', () => {
  it('should render and changes value when option was clicked', () => {
    render(<NewsCard data={data} />)

    const headline = screen.getByTestId('card-headline')
    const text = screen.getByTestId('card-text')
    expect(headline).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
