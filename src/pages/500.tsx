import { FC } from 'react'
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const FiveHundredPage: FC = () => {
  const { t } = useTranslation('FiveHundredPage')

  return (
    <>
      <Head>
        <title>{t('FiveHundredPage:pageTitle')}</title>
      </Head>

      {t('FiveHundredPage:shortDescription')}
    </>
  )
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale || '', ['FiveHundredPage'])),
  },
})

export default FiveHundredPage
