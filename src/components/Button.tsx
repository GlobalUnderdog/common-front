/** @jsx jsx */
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { TagManager, GUAnalytics, ReactGA, dataLayer } from '../lib'
import { GUCommonStyleProps, jsx, useTheme } from '../style'

export type GUButtonProps = GUCommonStyleProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    /**
     * If present it will automatically log clicks on this button using
     * Google Analytics.
     */
    analytics?: GUAnalytics
    /**
     * If present it will automatically log clicks on this button to Google
     * Tag Manager.
     */
    tagManager?: GUAnalytics
  }

export const GUButton: React.FC<GUButtonProps> = (props) => {
  const theme = useTheme()
  const { analytics, tagManager } = props
  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Using await since props.onClick can be a Async Function
    if (props.onClick) await props.onClick(e)

    if (analytics) ReactGA.event({ category: 'Button Click', ...analytics })

    if (tagManager) {
      TagManager.dataLayer({
        dataLayerName: dataLayer(),
        dataLayer: { category: 'Button Click', ...tagManager },
      })
    }
  }

  return (
    <button css={theme.button.css(theme, props)} {...props} onClick={onClick}>
      {props.children}
    </button>
  )
}
