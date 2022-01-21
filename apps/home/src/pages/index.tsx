import { FC } from 'react'
import Head from 'next/head'
import styles from './index.module.css'

const Home: FC = () => (
  <div>
    <Head>
      <title>Johand | Home</title>
    </Head>

    <main className={styles.main}>
      <h1>Johand</h1>
      <p>Yes... This is it. A website.</p>

      <select
        className={styles.languageSelect}
        name="Language"
        aria-label="Language"
      >
        <option value="en">English</option>
        <option value="nb-NO">Norwegian (Bokmål)</option>
      </select>
    </main>
  </div>
)

export default Home
