import { FC } from 'react'
import Head from 'next/head'

import { UserConfig, useTranslation } from 'next-i18next'
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
    ...(await serverSideTranslations(locale, ['FiveHundredPage'])),
  },
})

export default FiveHundredPage
