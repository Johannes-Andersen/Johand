import type { AppProps } from 'next/app'
import { FC } from 'react'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import '../styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const { locales, pathname } = router

  return (
    <>
      <Head>
        {locales?.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`/${locale}${pathname}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={pathname} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
