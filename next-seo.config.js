// @ts-check

/**
 * @type {import('next-seo').NextSeoProps}
 */
const defaultSEOConfig = {
  defaultTitle: 'fursona.zip',
  titleTemplate: '%s | fursona.zip',

  description: "Your fursona's home on the web. A place to share your fursona with the world.",

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.SITE_URL ?? 'https://fursona.zip',
    site_name: 'fursona.zip'
  }
}

export default defaultSEOConfig
