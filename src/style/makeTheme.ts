import { PartialDeep } from 'type-fest'
import { guDefaultTheme } from './defaultTheme'
import { GUTheme } from './theme'
import { cssUnit, GUThemeCSSRule } from './util'

// Not declared in ./util since we don't want to export this function outside the package
const handleCSSRule = (
  rules: GUThemeCSSRule | Partial<GUThemeCSSRule> | undefined,
  defaultRule: GUThemeCSSRule
): GUThemeCSSRule => {
  if (!rules?.css) return { css: defaultRule.css }
  const rulesCss = rules.css // Typescript still thinks rules.css is empty by this point2

  if (rules.replace)
    return {
      css: rules.css,
    }

  return {
    css: (theme, props) => {
      // Overwrites values from defaultStyle with the ones passed by ThemeCSSFunc
      const styles = [defaultRule.css, rulesCss]
        .flat(2)
        .map((st) => st(theme, props))
        .flat() // TS Complains if we don't have this, even though we've used flat()
      return styles
    },
  }
}

export const makeTheme = <T extends GUTheme = GUTheme>(
  theme?: PartialDeep<T>
): T => {
  // This ternary operation allow us to avoid `TypeError: theme is undefined`
  const {
    color,
    radius,
    grid,
    button,
    global,
    input,
    textArea,
    checkbox,
    radio,
    modal,
    ...extended
  } = theme ? theme : ({} as T)
  return {
    color: {
      secondary: {
        ...guDefaultTheme.color.secondary,
        ...color?.secondary,
      },
      canvas: {
        ...guDefaultTheme.color.canvas,
        ...color?.canvas,
      },
      error: {
        ...guDefaultTheme.color.error,
        ...color?.error,
      },
      info: {
        ...guDefaultTheme.color.info,
        ...color?.info,
      },
      ink: {
        ...guDefaultTheme.color.ink,
        ...color?.ink,
      },
      primary: {
        ...guDefaultTheme.color.primary,
        ...color?.primary,
      },
      success: {
        ...guDefaultTheme.color.success,
        ...color?.success,
      },
      warning: {
        ...guDefaultTheme.color.warning,
        ...color?.warning,
      },
    },
    grid: {
      replace: grid?.replace ?? false,
      rules:
        grid?.replace && grid?.rules
          ? grid.rules
          : {
              ...guDefaultTheme.grid.rules,
              ...grid?.rules,
            },
    },
    radius: {
      ...radius,
      big: cssUnit(radius?.big ?? guDefaultTheme.radius.big),
      main: cssUnit(radius?.main ?? guDefaultTheme.radius.main),
      small: cssUnit(radius?.small ?? guDefaultTheme.radius.small),
    },
    global: handleCSSRule(global, guDefaultTheme.global),
    button: handleCSSRule(button, guDefaultTheme.button),
    input: handleCSSRule(input, guDefaultTheme.input),
    textArea: handleCSSRule(textArea, guDefaultTheme.textArea),
    checkbox: handleCSSRule(checkbox, guDefaultTheme.checkbox),
    radio: handleCSSRule(radio, guDefaultTheme.radio),
    modal: handleCSSRule(modal, guDefaultTheme.modal),
    ...extended,
  } as T
}
