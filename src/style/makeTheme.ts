import { PartialDeep } from 'type-fest'
import { defaultTheme } from './defaultTheme'
import { GUTheme } from './theme'
import { cssUnit, ThemeCSSRule } from './util'

// Not declared in ./util since we don't want to export this function outside the package
const handleCSSRule = (
  rules: ThemeCSSRule | Partial<ThemeCSSRule> | undefined,
  defaultRule: ThemeCSSRule
): ThemeCSSRule => {
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
        ...defaultTheme.color.secondary,
        ...color?.secondary,
      },
      canvas: {
        ...defaultTheme.color.canvas,
        ...color?.canvas,
      },
      error: {
        ...defaultTheme.color.error,
        ...color?.error,
      },
      info: {
        ...defaultTheme.color.info,
        ...color?.info,
      },
      ink: {
        ...defaultTheme.color.ink,
        ...color?.ink,
      },
      primary: {
        ...defaultTheme.color.primary,
        ...color?.primary,
      },
      success: {
        ...defaultTheme.color.success,
        ...color?.success,
      },
      warning: {
        ...defaultTheme.color.warning,
        ...color?.warning,
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
      ...radius,
      big: cssUnit(radius?.big ?? defaultTheme.radius.big),
      main: cssUnit(radius?.main ?? defaultTheme.radius.main),
      small: cssUnit(radius?.small ?? defaultTheme.radius.small),
    },
    global: handleCSSRule(global, defaultTheme.global),
    button: handleCSSRule(button, defaultTheme.button),
    input: handleCSSRule(input, defaultTheme.input),
    textArea: handleCSSRule(textArea, defaultTheme.textArea),
    checkbox: handleCSSRule(checkbox, defaultTheme.checkbox),
    radio: handleCSSRule(radio, defaultTheme.radio),
    modal: handleCSSRule(modal, defaultTheme.modal),
    ...extended,
  } as T
}
