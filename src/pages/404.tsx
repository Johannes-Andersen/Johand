import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { translate } from 'locales'

const FourOhFourPage: FC = () => {
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <Head>
        <title>{translate({ key: 'FourOhFourPage.pageTitle', locale })}</title>
      </Head>
      {translate({ key: 'FourOhFourPage.shortDescription', locale })}
    </>
  )
}

export default FourOhFourPage
