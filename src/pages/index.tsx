import { FC } from 'react'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './index.module.css'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Home: FC = () => {
  const { t } = useTranslation(['HomePage'])
  const router = useRouter()
  const { locale, pathname, query, asPath } = router

  const changeLanguage = (newLocale: string): void => {
    console.debug(newLocale)
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=7889231; SameSite=strict; Secure`
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <div>
      <Head>
        <title>{t('HomePage:title')}</title>
      </Head>

      <main className={styles.main}>
        <h1>{t('common:siteName')}</h1>
        <p> {t('HomePage:content')}</p>

        <select
          className={styles.languageSelect}
          name="Language"
          aria-label="Language"
          value={locale}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="nb-NO">Norwegian (Bokmål)</option>
        </select>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale || '', ['common', 'HomePage'])),
  },
})

export default Home
