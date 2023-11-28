import '@fontsource-variable/inter'
import '../style/globals.css'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'

import SEOConfig from '../../next-seo.config'

type CustomAppProps = AppProps & {
  Component: NextPage & {
    disableLayout?: boolean
  }
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  return Component.disableLayout ? (
    <Component {...pageProps} />
  ) : (
    <PlausibleProvider
      domain='fursona.zip'
      customDomain='https://a.angelo.fyi'
      selfHosted
      trackOutboundLinks
      trackFileDownloads
    >
      <DefaultSeo {...SEOConfig} />

      <div className='stylized-bg min-h-screen'>
        <Component {...pageProps} />
      </div>
    </PlausibleProvider>
  )
}

export default CustomApp
