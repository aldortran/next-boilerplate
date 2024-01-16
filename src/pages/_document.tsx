import { Head, Html, Main, NextScript } from 'next/document'
import React, { type ReactElement } from 'react'

export default function Document (): ReactElement {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
