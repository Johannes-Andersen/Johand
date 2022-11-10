import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Atkinson_Hyperlegible } from '@next/font/google'

const hyperlegible = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={hyperlegible.className}>
      <Component {...pageProps} />
    </main>
  )
}
