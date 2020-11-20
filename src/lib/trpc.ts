import { httpConnector, makeClient } from '@tianhuil/simple-trpc/dist/client'
import { IContactCollectionRpc } from '@globalunderdog/common'

/**
 * The default client uses localhost:8080 as its url and 3000ms as timeout,
 * use trpcConfig to change these values (this is automatically set up if
 * guLibConfig is called)
 */
export let trpc = makeClient<IContactCollectionRpc>(
  httpConnector('http://localhost:8080', { timeout: 3000 })
)

export const trpcConfig = (url: string, timeout = 3000): void => {
  trpc = makeClient<IContactCollectionRpc>(httpConnector(url, { timeout }))
}
