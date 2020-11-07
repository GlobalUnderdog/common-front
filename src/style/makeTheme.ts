import { defaultTheme } from './defaultTheme'
import { Theme, ThemeBase } from './theme'
import { cssUnit, parseColor, ThemeCSSRule } from './util'

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
  const { color, font, radius, grid, button, global, textInput } = theme
    ? theme
    : ({} as Theme)
  return {
    color: {
      accent: {
        dark: parseColor(color?.accent?.dark ?? defaultTheme.color.accent.dark),
        normal: parseColor(
          color?.accent?.normal ?? defaultTheme.color.accent.normal
        ),
        light: parseColor(
          color?.accent?.light ?? defaultTheme.color.accent.light
        ),
      },
      canvas: {
        dark: parseColor(color?.canvas?.dark ?? defaultTheme.color.canvas.dark),
        normal: parseColor(
          color?.canvas?.normal ?? defaultTheme.color.canvas.normal
        ),
        light: parseColor(
          color?.canvas?.light ?? defaultTheme.color.canvas.light
        ),
      },
      danger: {
        dark: parseColor(color?.danger?.dark ?? defaultTheme.color.danger.dark),
        normal: parseColor(
          color?.danger?.normal ?? defaultTheme.color.danger.normal
        ),
        light: parseColor(
          color?.danger?.light ?? defaultTheme.color.danger.light
        ),
      },
      ink: {
        dark: parseColor(color?.ink?.dark ?? defaultTheme.color.ink.dark),
        normal: parseColor(color?.ink?.normal ?? defaultTheme.color.ink.normal),
        light: parseColor(color?.ink?.light ?? defaultTheme.color.ink.light),
      },
      primary: {
        dark: parseColor(
          color?.primary?.dark ?? defaultTheme.color.primary.dark
        ),
        normal: parseColor(
          color?.primary?.normal ?? defaultTheme.color.primary.normal
        ),
        light: parseColor(
          color?.primary?.light ?? defaultTheme.color.primary.light
        ),
      },
      success: {
        dark: parseColor(
          color?.success?.dark ?? defaultTheme.color.success.dark
        ),
        normal: parseColor(
          color?.success?.normal ?? defaultTheme.color.success.normal
        ),
        light: parseColor(
          color?.success?.light ?? defaultTheme.color.success.light
        ),
      },
      warning: {
        dark: parseColor(
          color?.warning?.dark ?? defaultTheme.color.warning.dark
        ),
        normal: parseColor(
          color?.warning?.normal ?? defaultTheme.color.warning.normal
        ),
        light: parseColor(
          color?.warning?.light ?? defaultTheme.color.warning.light
        ),
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
    font: {
      accent: font?.accent
        ? `"${font.accent}, sans-serif"`
        : defaultTheme.font.accent,
      mono: font?.mono ? `"${font.mono}, monospace"` : defaultTheme.font.mono,
      sans: font?.sans ? `"${font.sans}, sans-serif"` : defaultTheme.font.sans,
      serif: font?.serif ? `"${font.serif}, serif"` : defaultTheme.font.serif,
      text: handleCSSRule(font?.text, defaultTheme.font.text),
      h1h6: handleCSSRule(font?.h1h6, defaultTheme.font.h1h6),
      h1: handleCSSRule(font?.h1, defaultTheme.font.h1),
      h2: handleCSSRule(font?.h2, defaultTheme.font.h2),
      h3: handleCSSRule(font?.h3, defaultTheme.font.h3),
      h4: handleCSSRule(font?.h4, defaultTheme.font.h4),
      h5: handleCSSRule(font?.h5, defaultTheme.font.h5),
      h6: handleCSSRule(font?.h6, defaultTheme.font.h6),
    },
    radius: {
      big: cssUnit(radius?.big ?? defaultTheme.radius.big),
      normal: cssUnit(radius?.normal ?? defaultTheme.radius.normal),
      small: cssUnit(radius?.small ?? defaultTheme.radius.small),
    },
    global: handleCSSRule(global, defaultTheme.global),
    button: handleCSSRule(button, defaultTheme.button),
    textInput: handleCSSRule(textInput, defaultTheme.textInput),
  }
}
