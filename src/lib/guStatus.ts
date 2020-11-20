import { trpc } from './trpc'

declare global {
  interface Window {
    guStatus: (x: number, y: number) => Promise<void>
  }
}

/**
 * Returns the back-end URL + a simple calculation done with `trpc`
 */
export const guStatusConfig = (backend: string): void => {
  window.guStatus = async (x: number, y: number): Promise<void> => {
    const start = new Date().valueOf()
    window.console.log(`Pinging ${backend} with add(${x}, ${y})`)

    const resp = await trpc.add(x, y)

    const finish = new Date().valueOf()
    console.log(`${backend} responded:`)
    console.log({ ...resp, responseMS: finish - start })
  }
}
