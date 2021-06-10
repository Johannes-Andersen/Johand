import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: FC = () => {
  const { t } = useTranslation(['footer', 'common'])
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div>
      <Head>
        <title>{t('common:title')}</title>

        <meta name="description" content={t('common:description')} />
      </Head>

      <main>
        <p>{t('common:currentLocale', { locale: locale })}</p>
        <p>{t('common:defaultLocale', { locale: defaultLocale })}</p>
        <p>
          {t('common:configuredLocales', {
            locales: JSON.stringify(locales),
          })}
        </p>
        <p> {t('common:content')}</p>
      </main>

      <footer>{t('footer:content')}</footer>
    </div>
  )
}

export const getStaticProps = async ({
  locale,
}: Record<string, string>): Promise<{
  props: {
    _nextI18Next: {
      initialI18nStore: unknown
      initialLocale: string
      userConfig: UserConfig | null
    }
  }
}> => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
})

export default Home
