const minWidth = (px: number) => `(min-width: ${px}px)`
const maxWidth = (px: number) => `(max-width: ${px}px)`
const media = '@media screen and'

export const Breakpoints = {
  small: 767,
  medium: 768,
  large: 992,
  xlarge: 1200,
} as const

interface MediaQuery {
  readonly small: string
  readonly smallLandscape: string
  readonly medium: string
  readonly mediumOnly: string
  readonly large: string
  readonly largeOnly: string
  readonly xlarge: string
}

export const mediaQuery: MediaQuery = {
  /**
   * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
   */
  small: `${media} ${maxWidth(Breakpoints.small)}`,
  /**
   * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
   * for mobile devices).
   */
  smallLandscape: `${media} ${maxWidth(
    Breakpoints.small
  )} and (orientation: landscape)`,

  /**
   * Matches all devices from 768px (tablets and desktops)
   */
  medium: `${media} ${minWidth(Breakpoints.medium)}`,
  /**
   * Matches only devices from 768px to 991px (tablets)
   */
  mediumOnly: `${media} ${minWidth(Breakpoints.medium)} and ${maxWidth(
    Breakpoints.large - 1
  )}`,

  /**
   * Matches desktops and wide tablets
   */
  large: `${media} ${minWidth(Breakpoints.large)}`,

  /**
   * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
   */
  largeOnly: `${media} ${minWidth(Breakpoints.large)} and ${maxWidth(
    Breakpoints.xlarge - 1
  )}`,

  /**
   * Matches ultra wide desktops (1200px)
   */
  xlarge: `${media} ${minWidth(Breakpoints.xlarge)}`,
}
