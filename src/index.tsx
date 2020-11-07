export * from './components'
export * from './style'

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const inspectlet = require('./inspectlet.js') as (
  id: string | number
) => void
