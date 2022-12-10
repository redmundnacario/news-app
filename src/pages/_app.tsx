import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, persistor } from '@store/store'
import { PersistGate } from 'redux-persist/integration/react'

import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'
import { withAlert } from '@hoc/withAlert'

import '@styles/globals.scss'
import '@styles/grid.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>The Peaks News by Redmund Nacario</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta name="description" content="For your daily news." />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <main>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </PersistGate>
    </Provider>
  )
}

export default withAlert(App)
