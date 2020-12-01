import ReactGA from 'react-ga'
export { default as ReactGA } from 'react-ga'
export { default as TagManager } from 'react-gtm-module'

export interface GUAnalytics {
  /** Will default to 'Button Click' on `<GUButton/>` and 'Link Click' on `<Link/>` */
  category?: string
  action: string
  label?: string
  payload?: unknown
}

const randomId = (length = 10) =>
  [...Array(length)].map(() => ((Math.random() * 36) | 0).toString(36)).join('')

let _dataLayer: string | undefined = undefined
/** Returns the current data layer from Google Tag Manager */
export const dataLayer = (): string | undefined => _dataLayer
/**
 * NOT to be used outside `common-front`. Used internally withing the
 * package to avoid unnecessary hooks/complicated containers to store this
 * the data layer used by GTM.
 */
export const setDataLayer = (s: string | undefined): void => {
  _dataLayer = s
}

export const googleAnalyticsInit = (googleUa: string): void => {
  const userId = localStorage.getItem('google_ua_id') ?? randomId()

  ReactGA.initialize(googleUa, {
    titleCase: false,
    gaOptions: {
      userId,
    },
  })

  localStorage.setItem('google_ua_id', userId)
}

export const googleAnalyticsTrackPage = (path: string): void => {
  ReactGA.pageview(path)
}
