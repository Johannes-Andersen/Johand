import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './index.module.css'
import { translate } from '../locales'

const Home: FC = () => {
  const router = useRouter()
  const { locale, pathname, query, asPath } = router

  const changeLanguage = (newLocale: string): void => {
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=7889231; SameSite=strict; Secure`
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <div>
      <Head>
        <title>{translate({ key: 'HomePage.title', locale })}</title>
      </Head>

      <main className={styles.main}>
        <h1>{translate({ key: 'common.siteName', locale })}</h1>
        <p>{translate({ key: 'HomePage.content', locale })}</p>

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

export default Home
