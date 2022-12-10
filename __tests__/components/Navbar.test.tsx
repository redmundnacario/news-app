import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Navbar from '@components/layout/Navbar'
import { store, persistor } from '@store/store'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('Navbar', () => {
  it('should contain title and closed search bar', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
        </PersistGate>
      </Provider>
    )

    const title = screen.getByText('The Peaks')
    expect(title).toBeInTheDocument()

    const searchBar = screen.getByTestId('searchbar')
    expect(searchBar).toBeInTheDocument()

    fireEvent.click(searchBar)

    const searchBarInput = screen.getByTestId('searchbar-open')
    expect(searchBarInput).toBeInTheDocument()
  })
})
