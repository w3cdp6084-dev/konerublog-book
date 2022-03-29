import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang="ja-JP" className="dark">
      <Head>
        <meta name="application-name" content="MyApp" />
      </Head>
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument