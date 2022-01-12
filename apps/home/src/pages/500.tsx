import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { translate } from '../locales'

const FiveHundredPage: FC = () => {
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <Head>
        <title>{translate({ key: 'FiveHundredPage.pageTitle', locale })}</title>
      </Head>
      {translate({ key: 'FiveHundredPage.shortDescription', locale })}
    </>
  )
}

export default FiveHundredPage
