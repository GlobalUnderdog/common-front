import ReactGA from 'react-ga'

const randomId = (length = 10) =>
  [...Array(length)].map(() => ((Math.random() * 36) | 0).toString(36)).join('')

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
