import TagManager, { TagManagerArgs } from 'react-gtm-module'
import { googleAnalyticsInit, setDataLayer } from './googleGA'
import { guStatusConfig } from './guStatus'
import { inspectlet } from './inspectlet'
import { trpcConfig } from './trpc'

export * from './googleGA'
export * from './guStatus'
export * from './inspectlet'
export * from './trpc'

export const guLibConfig = (env: {
  serverUrl?: string
  googleUa?: string
  inspectletId?: string
  serverTimeout?: string | number
  googleTm?: TagManagerArgs
}): void => {
  const { serverUrl, googleUa, inspectletId, serverTimeout, googleTm } = env

  if (serverUrl) {
    guStatusConfig(serverUrl)
    const timeout = serverTimeout ? +serverTimeout : undefined
    trpcConfig(serverUrl, timeout)
  }
  if (googleUa) googleAnalyticsInit(googleUa)
  if (inspectletId) inspectlet(inspectletId)

  if (googleTm) {
    TagManager.initialize(googleTm)
    setDataLayer(googleTm?.dataLayerName)
  }
}
