import '../styles/globals.css'

import type { AppProps } from 'next/app'
import React, { type ReactElement } from 'react'

export default function MyApp ({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}
