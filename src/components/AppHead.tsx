import React from 'react'
import Head from 'next/head'

export interface AppMetadata {
  title: string
  description: string
  url: string
  /** image must be an absolute (not just relative) url */
  image?: string
}

export const AppHead: React.FC<AppMetadata> = ({
  title,
  description,
  url,
  image,
  children,
}) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='manifest' href='/site.webmanifest' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />

      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <link ref='canonical' href={url} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image && <meta property='og:image' content={image} />}

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      {image && <meta property='twitter:image' content={image} />}

      {children}
    </Head>
  )
}
