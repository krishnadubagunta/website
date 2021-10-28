import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/nae0eth.css" />
          <link
            href='/favicon.ico'
            rel='icon'
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
