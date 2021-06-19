import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const { locales, pathname } = router

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {locales?.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`https://johand/dev/${locale}${pathname}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://johand.dev/${pathname}`}
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default appWithTranslation(App)
