import { defaultTheme } from './defaultTheme'
import { Theme, ThemeBase } from './theme'
import { cssUnit, ThemeCSSRule } from './util'

// Not declared in ./util since we don't want to export this function outside the package
const handleCSSRule = (
  rules: ThemeCSSRule | undefined,
  defaultRule: ThemeCSSRule
): ThemeCSSRule => {
  if (!rules) return { css: defaultRule.css }
  if (rules.replace)
    return {
      css: rules.css,
    }
  return {
    css: (theme, props) => {
      // Overwrites values from defaultStyle with the ones passed by ThemeCSSFunc
      const styles = [defaultRule.css, rules.css]
        .flat(2)
        .map((st) => st(theme, props))
        .flat() // TS Complains if we don't have this, even though we've used flat()
      return styles
    },
  }
}

export const makeTheme = (theme?: Partial<ThemeBase<false>>): Theme => {
  // This ternary operation allow us to avoid `TypeError: theme is undefined`
  const {
    color,
    radius,
    grid,
    button,
    global,
    input,
    checkbox,
    radio,
    modal,
    modalAnimTimeMS,
  } = theme ? theme : ({} as Theme)
  return {
    color: {
      secondary: {
        dark: color?.secondary?.dark ?? defaultTheme.color.secondary.dark,
        main: color?.secondary?.main ?? defaultTheme.color.secondary.main,
        light: color?.secondary?.light ?? defaultTheme.color.secondary.light,
      },
      canvas: {
        dark: color?.canvas?.dark ?? defaultTheme.color.canvas.dark,
        main: color?.canvas?.main ?? defaultTheme.color.canvas.main,
        light: color?.canvas?.light ?? defaultTheme.color.canvas.light,
      },
      error: {
        dark: color?.error?.dark ?? defaultTheme.color.error.dark,
        main: color?.error?.main ?? defaultTheme.color.error.main,
        light: color?.error?.light ?? defaultTheme.color.error.light,
      },
      info: {
        dark: color?.info?.dark ?? defaultTheme.color.info.dark,
        main: color?.info?.main ?? defaultTheme.color.info.main,
        light: color?.info?.light ?? defaultTheme.color.info.light,
      },
      ink: {
        dark: color?.ink?.dark ?? defaultTheme.color.ink.dark,
        main: color?.ink?.main ?? defaultTheme.color.ink.main,
        light: color?.ink?.light ?? defaultTheme.color.ink.light,
      },
      primary: {
        dark: color?.primary?.dark ?? defaultTheme.color.primary.dark,
        main: color?.primary?.main ?? defaultTheme.color.primary.main,
        light: color?.primary?.light ?? defaultTheme.color.primary.light,
      },
      success: {
        dark: color?.success?.dark ?? defaultTheme.color.success.dark,
        main: color?.success?.main ?? defaultTheme.color.success.main,
        light: color?.success?.light ?? defaultTheme.color.success.light,
      },
      warning: {
        dark: color?.warning?.dark ?? defaultTheme.color.warning.dark,
        main: color?.warning?.main ?? defaultTheme.color.warning.main,
        light: color?.warning?.light ?? defaultTheme.color.warning.light,
      },
    },
    grid: {
      replace: grid?.replace ?? false,
      rules:
        grid?.replace && grid?.rules
          ? grid.rules
          : {
              ...defaultTheme.grid.rules,
              ...grid?.rules,
            },
    },
    radius: {
      big: cssUnit(radius?.big ?? defaultTheme.radius.big),
      main: cssUnit(radius?.main ?? defaultTheme.radius.main),
      small: cssUnit(radius?.small ?? defaultTheme.radius.small),
    },
    global: handleCSSRule(global, defaultTheme.global),
    button: handleCSSRule(button, defaultTheme.button),
    input: handleCSSRule(input, defaultTheme.input),
    checkbox: handleCSSRule(checkbox, defaultTheme.checkbox),
    radio: handleCSSRule(radio, defaultTheme.radio),
    modal: handleCSSRule(modal, defaultTheme.modal),
    modalAnimTimeMS: modalAnimTimeMS ?? defaultTheme.modalAnimTimeMS,
  }
}
