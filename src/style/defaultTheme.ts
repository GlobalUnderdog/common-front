import {
  Breakpoints,
  CommonStyleProps,
  css,
  ColorTheme,
  GUTheme,
  keyframes,
  mediaQuery,
} from '.'
import { ThemeCSSFunc } from './util'

const normalizeMin =
  '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}'

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1}
`
const fadeOut = keyframes`
  from { opacity: 1}
  to {opacity: 0}
`

const defaultColorTheme: ColorTheme = {
  secondary: {
    dark: '#077C7D',
    main: '#00B7B8',
    light: '#6AE1E2',
  },
  canvas: {
    dark: '#E9E9E9',
    main: '#FAFAFA',
    light: '#FFF',
  },
  error: {
    dark: '#C62828',
    main: '#F44336',
    light: '#FFEBEE',
  },
  ink: {
    dark: '#000',
    main: '#444',
    light: '#888',
  },
  primary: {
    dark: '#0054B2',
    main: '#0078D4',
    light: '#1499FF',
  },
  info: {
    dark: '#0277BD',
    main: '#03A9F4',
    light: '#81D4FA',
  },
  success: {
    dark: '#0F8800',
    main: '#8BC34A',
    light: '#C5DBB2',
  },
  warning: {
    dark: '#AC5C00',
    main: '#E69100',
    light: '#FFE0B2',
  },
}

const inputTextAreaBase: ThemeCSSFunc = ({ color, radius }) => css`
  /* Wrapper rules */
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  & > input,
  & > textarea {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 4px;

    background: none;
    background-color: ${color.canvas.light};
    border: 2px solid ${color.ink.light};
    border-radius: ${radius.main};
    transition: border-color ease 0.2s;
    &:focus {
      border-color: ${color.primary.main};
    }
    &:disabled {
      color: ${color.ink.light};
      background-color: ${color.canvas.dark};
    }
  }

  & > label {
    color: ${color.primary.main};
    font-size: 16px;
    margin: 8px 0;
  }
`

const radioCheckboxBase: ThemeCSSFunc = ({ color, radius }) => css`
  display: flex;
  align-items: center;
  margin: 5px 0;

  input {
    height: 20px;
    width: 20px;
    box-sizing: border-box;
    position: relative;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-right: 10px;

    border-color: ${color.primary.main};
    background-color: ${color.canvas.light};
    &:hover {
      background-color: ${color.canvas.dark};
    }

    &:before {
      box-sizing: border-box;
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;

      height: 100%;
      width: 100%;
      border-width: 2px;
      border-radius: ${radius.small};
      border-style: solid;
      /* Inherits from the actual input so we don't have to re-style for focus/hover here */
      border-color: inherit;
      background-color: inherit;

      color: ${color.primary.main};
      transition: border-color ease 0.3s, background-color ease 0.3s;
    }
    &:after {
      content: ' ';
      position: absolute;
      top: 25%;
      left: 25%;
      width: 50%;
      height: 50%;
      opacity: 0;
      transition: opacity ease 0.2s;
      border-radius: ${radius.small};
      border: none;
    }
    &:checked:after {
      opacity: 1;
      background-color: ${color.primary.main};
    }

    &:focus {
      outline: none;
      border-color: ${color.primary.dark};
    }
  }

  label {
    color: ${color.ink.main};
  }
`

export const defaultTheme = {
  color: defaultColorTheme,
  radius: {
    big: 8,
    main: 4,
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
    css: ({ color }) => css`
      ${normalizeMin}

      html {
        scroll-behavior: smooth;
        color: ${color.ink.main};
        background-color: ${color.canvas.main};
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

      *:focus {
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
    css: ({ color, radius }, p?: CommonStyleProps) => {
      const buttonColor = p ? p.color : undefined
      return css`
        min-width: 92px;
        padding: 12px 24px;

        font-weight: 600;
        font-size: 18px;

        background: none;
        border: none;
        border-radius: ${radius.main};
        box-shadow: 0px 4px 4px #0002;

        /* Colors */

        /* Foreground color */
        color: ${(() => {
          switch (buttonColor) {
            case undefined:
            case 'canvas':
            case 'ink':
              return color.ink.main
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
              return color[buttonColor].main
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
  input: {
    css: inputTextAreaBase,
  },
  textArea: {
    css: (theme) => css`
      ${inputTextAreaBase(theme)}

      & > textarea {
        display: block;
        height: 290px;
        padding: 4px;
        resize: none;
      }
    `,
  },
  checkbox: {
    css: radioCheckboxBase,
  },
  radio: {
    css: (theme) => css`
      ${radioCheckboxBase(theme)}
      input, input:before, input:after {
        border-radius: 999px;
      }
    `,
  },
  modal: {
    css: ({ radius, color }) => css`
      .modalOverlay {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(15px);
        animation: ${fadeIn} 350ms ease both;
        &.hiding {
          animation: ${fadeOut} 350ms ease both;
        }
      }

      .modalCard {
        width: 95%;
        ${mediaQuery.medium} {
          width: 500px;
        }
        & > :first-of-type {
          border-radius: ${radius.big};
          background-color: ${color.canvas.light};
          min-height: 440px;
          padding: 25px !important;
          pointer-events: all;

          /* Usually h1, h2, h3, etc. will have a margin at the top and be centered */
          & > h1:first-of-type,
          & > h2:first-of-type,
          & > h3:first-of-type,
          & > h4:first-of-type,
          & > h5:first-of-type {
            text-align: left;
            margin-top: 0;
          }
        }
        &:focus {
          outline: none;
        }
        pointer-events: none;
      }
    `,
  },
} as GUTheme
