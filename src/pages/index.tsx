import { FC } from 'react'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Home: FC = () => {
  const { t } = useTranslation(['HomePage'])
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div>
      <Head>
        <title>{t('HomePage:title')}</title>
      </Head>

      <main>
        <p>{t('common:siteName')}</p>
        <p>{t('HomePage:currentLocale', { locale: locale })}</p>
        <p>{t('HomePage:defaultLocale', { locale: defaultLocale })}</p>
        <p>
          {t('HomePage:configuredLocales', {
            locales: JSON.stringify(locales),
          })}
        </p>
        <p> {t('HomePage:content')}</p>
      </main>

      <footer>{t('HomePage:description')}</footer>
    </div>
  )
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale || '', ['common', 'HomePage'])),
  },
})

export default Home
