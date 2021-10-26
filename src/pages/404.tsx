import { FC } from 'react'
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const FourOhFourPage: FC = () => {
  const { t } = useTranslation('FourOhFourPage')

  return (
    <>
      <Head>
        <title>{t('FourOhFourPage:pageTitle')}</title>
      </Head>

      {t('FourOhFourPage:shortDescription')}
    </>
  )
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale || '', ['FourOhFourPage'])),
  },
})

export default FourOhFourPage
