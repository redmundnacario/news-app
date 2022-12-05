import Head from 'next/head'
import type { AppProps } from 'next/app'

import Navbar from 'src/components/common/Navbar'
import Footer from 'src/components/common/Footer'

import '@styles/globals.scss'
import '@styles/grid.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Peaks</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="For your daily news." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
