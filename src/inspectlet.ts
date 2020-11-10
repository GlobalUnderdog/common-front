declare global {
  interface Window {
    // Not renaming these variables in case the script from inspectlet
    // CDN uses them.
    __insp: Array<number | string>[] | undefined
    __inspld: number | undefined
    ldinsp: VoidFunction | undefined
  }
}

export const inspectlet = (inspectletId: string | number): void => {
  window.__insp = window.__insp || []
  window.__insp.push(['wid', inspectletId])
  window.ldinsp = function () {
    if (typeof window.__inspld != 'undefined') return
    window.__inspld = 1
    const insp = document.createElement('script')
    insp.type = 'text/javascript'
    insp.async = true
    insp.id = 'inspsync'
    insp.src =
      ('https:' == document.location.protocol ? 'https' : 'http') +
      '://cdn.inspectlet.com/inspectlet.js?wid=' +
      inspectletId +
      '&r=' +
      Math.floor(new Date().getTime() / 3600000)
    const x = document.getElementsByTagName('script')[0]
    x.parentNode?.insertBefore(insp, x)
  }
  setTimeout(window.ldinsp, 0)
}
