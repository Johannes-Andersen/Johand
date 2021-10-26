import { FC } from 'react'
import Head from 'next/head'

import { UserConfig, useTranslation } from 'next-i18next'
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

export const getStaticProps = async ({
  locale,
}: Record<string, string>): Promise<{
  props: {
    _nextI18Next: {
      initialI18nStore: unknown
      userConfig: UserConfig | null
    }
  }
}> => ({
  props: {
    ...(await serverSideTranslations(locale, ['FourOhFourPage'])),
  },
})

export default FourOhFourPage
