import { css } from '@emotion/core'
import {
  Breakpoints,
  ColorTheme,
  CommonStyleProps,
  FontTheme,
  SerializedStyles,
  Theme,
} from '.'

const normalizeMin =
  '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}'

const defaultColorTheme: ColorTheme = {
  accent: {
    dark: '#077C7D',
    normal: '#00B7B8',
    light: '#6AE1E2',
  },
  canvas: {
    dark: '#E9E9E9',
    normal: '#FAFAFA',
    light: '#FFF',
  },
  danger: {
    dark: '#C62828',
    normal: '#F44336',
    light: '#FFEBEE',
  },
  ink: {
    dark: '#000',
    normal: '#444',
    light: '#888',
  },
  primary: {
    dark: '#054B2',
    normal: '#0078D4',
    light: '#1499FF',
  },
  success: {
    dark: '#F8800',
    normal: '#8BC34A',
    light: '#C5DBB2',
  },
  warning: {
    dark: '#C5C00',
    normal: '#E65100',
    light: '#FFE0B2',
  },
}

const defaultFontTheme: FontTheme = {
  sans: 'sans-serif',
  serif: 'serif',
  mono: 'monospace',
  accent: 'sans-serif',
  text: {
    css: ({ color, font }: Theme): SerializedStyles => css`
      /*
      Setting this in HTML so divs, spans and other elements benefit
      from these rules
      */
      html {
        color: ${color.ink.normal};
        font-family: ${font.sans};
        font-size: 18px;
        /*
        Line-height for readability based on
        https://www.w3.org/TR/WCAG20-TECHS/C21.html#C21-description
        */
        line-height: 1.5;
        ::selection {
          background-color: ${color.primary.dark};
          color: ${color.canvas.normal};
        }
        :not(button) > a {
          color: ${color.primary.normal};
          text-decoration: underline;
          cursor: pointer;
        }
      }
    `,
  },
  h1h6: {
    css: ({ color, font }: Theme): SerializedStyles => css`
      color: ${color.ink.light};
      font-family: ${font.accent};
      /*
      Since headers have bigger margins than regular text, we decrease
      line-height in a pinch
      */
      line-height: 1.4;
      font-weight: 600;
    `,
  },
  h1: {
    css: (): SerializedStyles => css`
      font-size: 64px;
    `,
  },
  h2: {
    css: (): SerializedStyles => css`
      font-size: 52px;
    `,
  },
  h3: {
    css: (): SerializedStyles => css`
      font-size: 48px;
    `,
  },
  h4: {
    css: (): SerializedStyles => css`
      font-size: 36px;
    `,
  },
  h5: {
    css: (): SerializedStyles => css`
      font-size: 24px;
      text-transform: uppercase;
    `,
  },
  h6: {
    css: (): SerializedStyles => css`
      font-size: 18px;
      text-transform: uppercase;
    `,
  },
}

export const defaultTheme: Theme = {
  color: defaultColorTheme,
  font: defaultFontTheme,
  radius: {
    big: 8,
    normal: 4,
    small: 2,
  },
  grid: {
    rules: {
      breakpoints: [
        0,
        Breakpoints.medium,
        Breakpoints.large,
        Breakpoints.xlarge,
      ],
      defaultScreenClass: 'xs',
      containerWidths: [576, 768, 992],
      gridColumns: 12,
      gutterWidth: 30,
      maxScreenClass: 'lg',
    },
  },
  global: {
    css: ({ color }: Theme): SerializedStyles => css`
      ${normalizeMin}

      html {
        scroll-behavior: smooth;
        background-color: ${color.canvas.normal};
      }

      body {
        /*
        Sometimes, when using react-awesome-reveal we might trigger some
        unwanted horizontal spacing, creating issues like briefly showing the
        horizontal scrollbar or permanently increasing the width of the page.
        Setting width: 100% with overflow-x: hidden fixes this issue.
        */
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden;
        /*
        In OSes that have visible scrollbars changing to a page without too
        much content might cause components to fickle, since the scrollbar
        will show/hide according to the page's height (for example a simple
        login page will have no scrollbar). We ensure that the overflow-y is
        always scrollable so these OSes can have a consistent look & feel in
        all pages.
        */
        overflow-y: scroll;
      }

      button:focus {
        outline: none;
      }

      /*
      Setting this here since icons.css is replaced with newer icons from time
      to time.
      */
      @keyframes fa-spin {
        from {
          transform: rotateZ(0);
        }
        to {
          transform: rotateZ(359deg);
        }
      }
      .fa-spin {
        animation: fa-spin 2s linear forwards infinite;
      }
    `,
  },
  button: {
    css: (
      { color, font, radius }: Theme,
      p?: CommonStyleProps
    ): SerializedStyles => {
      const buttonColor = p ? p.color : undefined
      return css`
        min-width: 92px;
        padding: 12px 24px;

        font-family: ${font.accent};
        font-weight: 600;
        font-size: 18px;

        background: none;
        border: none;
        border-radius: ${radius.normal};
        box-shadow: 0px 4px 4px #0002;

        /* Colors */

        /* Foreground color */
        color: ${(() => {
          switch (buttonColor) {
            case undefined:
            case 'canvas':
            case 'ink':
              return color.ink.normal
            default:
              return color.canvas.light
          }
        })()};

        /* Default background color */
        background-color: ${(() => {
          switch (buttonColor) {
            case undefined:
            case 'canvas':
            case 'ink':
              return color.canvas.light
            default:
              return color[buttonColor].normal
          }
        })()};

        /* Hover colors */
        transition: background-color ease 0.3s;
        &:hover {
          cursor: pointer;
          background-color: ${(() => {
            switch (buttonColor) {
              case undefined:
              case 'canvas':
              case 'ink':
                return color.canvas.dark
              default:
                return color[buttonColor].dark
            }
          })()};
        }
      `
    },
  },
  textInput: {
    css: ({ color, font, radius }: Theme): SerializedStyles => css`
      /* Wrapper rules */
      display: flex;
      flex-direction: column;
      margin: 15px 0;

      & > input {
        display: flex;
        align-items: center;
        font-family: ${font.sans};
        height: 45px;
        padding: 0 4px;

        background: none;
        background-color: ${color.canvas.light};
        border: 2px solid ${color.ink.light};
        border-radius: ${radius.normal};
        transition: border-color ease 0.2s;
        &:focus {
          border-color: ${color.primary.normal};
        }
        &:disabled {
          color: ${color.ink.light};
          background-color: ${color.canvas.dark};
        }
      }

      & > label {
        color: ${color.primary.normal};
        font-size: 16px;
        margin: 8px 0;
      }
    `,
  },
}
