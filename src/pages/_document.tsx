import { Head, Html, Main, NextScript } from 'next/document'
import React, { type ReactElement } from 'react'

export default function Document (): ReactElement {
  return (
    <Html lang="en" className="bg-white text-black dark:bg-neutral-950 dark:text-white">
      <Head />
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
