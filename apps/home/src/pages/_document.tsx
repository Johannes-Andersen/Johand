import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        {/* TODO: https://github.com/vercel/next.js/issues/29970 */}
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="application-name" content="Johannes' Website" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Johannes' Website" />
        <meta
          name="description"
          content="Everything you need to know about Johannes, aka. Johand."
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#23272a" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#23272a" />
        <link rel="apple-touch-icon" href="/images/logo-maskable-512.png" />
        <link
          rel="apple-touch-icon"
          sizes="512x152"
          href="/images/logo-512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/images/logo-256.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="128x128"
          href="/images/logo-128.png"
        />
        <link rel="apple-touch-icon" sizes="64x64" href="/images/logo-64.png" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/images/logo.svg" color="#23272a" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://johand.dev" />
        <meta name="twitter:title" content="Johannes Andersen's Website" />
        <meta
          name="twitter:description"
          content="Everything you need to know about Johannes, aka. Johand."
        />
        <meta
          name="twitter:image"
          content="https://johand.dev/images/logo-512.png"
        />
        <meta name="twitter:creator" content="@Johand199" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Johand Web" />
        <meta
          property="og:description"
          content="Everything you need to know about Johannes, aka. Johand"
        />
        <meta property="og:site_name" content="Johannes Andersen Website" />
        <meta property="og:url" content="https://johand.dev" />
        <meta
          property="og:image"
          content="https://johand.dev/images/logo-512.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
