import { FC } from 'react'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import styles from './index.module.css'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Home: FC = () => {
  const { t } = useTranslation(['HomePage'])

  return (
    <div>
      <Head>
        <title>{t('HomePage:title')}</title>
      </Head>

      <main className={styles.main}>
        <h1>{t('common:siteName')}</h1>
        <p> {t('HomePage:content')}</p>
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
