import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createElement, Fragment, useState } from 'react';
import { withEmotionCache, ThemeContext, jsx, Global, css, keyframes } from '@emotion/core';
export { Global, css, jsx, keyframes } from '@emotion/core';
import { useTheme as useTheme$1, ThemeProvider } from 'emotion-theming';
export { ThemeProvider } from 'emotion-theming';
import { Container as Container$1, Row as Row$1, Col as Col$1, setConfiguration, ScreenClassProvider } from 'react-grid-system';
export { useScreenClass } from 'react-grid-system';
import Link from 'next/link';
import Reveal from 'react-awesome-reveal';
export { AttentionSeeker, Bounce, Fade, Flip, Hinge, JackInTheBox, default as Reveal, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import ReactGA from 'react-ga';
export { default as ReactGA } from 'react-ga';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var colorTypes = [
    'canvas',
    'ink',
    'primary',
    'secondary',
    'error',
    'warning',
    'info',
    'success',
];

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  && prop.charCodeAt(1) === 110
  && prop.charCodeAt(2) < 91;
}
);

var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  (isStringTag === false ||
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

function murmur2(str) {
  var h = 0;
  var k,
      i = 0,
      len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    k >>> 24;
    h =
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  }
  h ^= h >>> 13;
  h =
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};
  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var shouldWarnAboutInterpolatingClassNameFromCss = true;
function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== undefined) {
          var next = interpolation.next;
          if (next !== undefined) {
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }
  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);
          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;
if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
}
var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);
    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i];
    }
  }
  var sourceMap;
  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' +
    match[1];
  }
  var name = murmur2(styles) + identifierName;
  if (process.env.NODE_ENV !== 'production') {
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var testOmitPropsOnStringTag = index;
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' &&
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$1 = typeof document !== 'undefined';
var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }
  var identifierName;
  var shouldForwardProp;
  var targetClassName;
  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) &&
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
        }
        styles.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function (props, context, ref) {
      return createElement(ThemeContext.Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = theme;
        }
        if (typeof props.className === 'string') {
          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;
        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;
          if (
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        newProps.ref = ref || props.innerRef;
        if (process.env.NODE_ENV !== 'production' && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }
        var ele = createElement(finalTag, newProps);
        if (!isBrowser$1 && rules !== undefined) {
          var _ref;
          var serializedNames = serialized.name;
          var next = serialized.next;
          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }
          return createElement(Fragment, null, createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }
        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };
    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

var styled = newStyled;
var useTheme = function () { return useTheme$1(); };

/**
 * Transforms JavaScript numbers into CSS units, defaulting to pixels by
 * default.
 *
 * If a string is passed as argument no transformation happens.
 */
var cssUnit = function (num) {
    return typeof num === 'number' ? num + "px" : num;
};

var Container = styled(Container$1)();
var Row = styled(Row$1)();
var Col = styled(Col$1)();

var minWidth = function (px) { return "(min-width: " + px + "px)"; };
var maxWidth = function (px) { return "(max-width: " + px + "px)"; };
var media = '@media screen and';
var Breakpoints = {
    small: 767,
    medium: 768,
    large: 992,
    xlarge: 1200,
};
var mediaQuery = {
    /**
     * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
     */
    small: media + " " + maxWidth(Breakpoints.small),
    /**
     * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
     * for mobile devices).
     */
    smallLandscape: media + " " + maxWidth(Breakpoints.small) + " and (orientation: landscape)",
    /**
     * Matches all devices from 768px (tablets and desktops)
     */
    medium: media + " " + minWidth(Breakpoints.medium),
    /**
     * Matches only devices from 768px to 991px (tablets)
     */
    mediumOnly: media + " " + minWidth(Breakpoints.medium) + " and " + maxWidth(Breakpoints.large - 1),
    /**
     * Matches desktops and wide tablets
     */
    large: media + " " + minWidth(Breakpoints.large),
    /**
     * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
     */
    largeOnly: media + " " + minWidth(Breakpoints.large) + " and " + maxWidth(Breakpoints.xlarge - 1),
    /**
     * Matches ultra wide desktops (1200px)
     */
    xlarge: media + " " + minWidth(Breakpoints.xlarge),
};

/** @jsx jsx */
var Children = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    setConfiguration(theme.grid.rules);
    return (jsx(Fragment, null,
        jsx(Global, { styles: theme.global.css(theme) }),
        jsx(ScreenClassProvider, null, children)));
};
var GlobalProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (jsx(ThemeProvider, { theme: theme },
        jsx(Children, { children: children })));
};

var normalizeMin = '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}';
var defaultColorTheme = {
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
};
var defaultTheme = {
    color: defaultColorTheme,
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
        css: function (_a) {
            var color = _a.color;
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n\n      html {\n        scroll-behavior: smooth;\n        color: ", ";\n        background-color: ", ";\n      }\n\n      body {\n        /*\n        Sometimes, when using react-awesome-reveal we might trigger some\n        unwanted horizontal spacing, creating issues like briefly showing the\n        horizontal scrollbar or permanently increasing the width of the page.\n        Setting width: 100% with overflow-x: hidden fixes this issue.\n        */\n        width: 100% !important;\n        max-width: 100% !important;\n        overflow-x: hidden;\n        /*\n        In OSes that have visible scrollbars changing to a page without too\n        much content might cause components to fickle, since the scrollbar\n        will show/hide according to the page's height (for example a simple\n        login page will have no scrollbar). We ensure that the overflow-y is\n        always scrollable so these OSes can have a consistent look & feel in\n        all pages.\n        */\n        overflow-y: scroll;\n      }\n\n      button:focus {\n        outline: none;\n      }\n\n      /*\n      Setting this here since icons.css is replaced with newer icons from time\n      to time.\n      */\n      @keyframes fa-spin {\n        from {\n          transform: rotateZ(0);\n        }\n        to {\n          transform: rotateZ(359deg);\n        }\n      }\n      .fa-spin {\n        animation: fa-spin 2s linear forwards infinite;\n      }\n    "], ["\n      ", "\n\n      html {\n        scroll-behavior: smooth;\n        color: ", ";\n        background-color: ", ";\n      }\n\n      body {\n        /*\n        Sometimes, when using react-awesome-reveal we might trigger some\n        unwanted horizontal spacing, creating issues like briefly showing the\n        horizontal scrollbar or permanently increasing the width of the page.\n        Setting width: 100% with overflow-x: hidden fixes this issue.\n        */\n        width: 100% !important;\n        max-width: 100% !important;\n        overflow-x: hidden;\n        /*\n        In OSes that have visible scrollbars changing to a page without too\n        much content might cause components to fickle, since the scrollbar\n        will show/hide according to the page's height (for example a simple\n        login page will have no scrollbar). We ensure that the overflow-y is\n        always scrollable so these OSes can have a consistent look & feel in\n        all pages.\n        */\n        overflow-y: scroll;\n      }\n\n      button:focus {\n        outline: none;\n      }\n\n      /*\n      Setting this here since icons.css is replaced with newer icons from time\n      to time.\n      */\n      @keyframes fa-spin {\n        from {\n          transform: rotateZ(0);\n        }\n        to {\n          transform: rotateZ(359deg);\n        }\n      }\n      .fa-spin {\n        animation: fa-spin 2s linear forwards infinite;\n      }\n    "])), normalizeMin, color.ink.main, color.canvas.main);
        },
    },
    button: {
        css: function (_a, p) {
            var color = _a.color, radius = _a.radius;
            var buttonColor = p ? p.color : undefined;
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        min-width: 92px;\n        padding: 12px 24px;\n\n        font-weight: 600;\n        font-size: 18px;\n\n        background: none;\n        border: none;\n        border-radius: ", ";\n        box-shadow: 0px 4px 4px #0002;\n\n        /* Colors */\n\n        /* Foreground color */\n        color: ", ";\n\n        /* Default background color */\n        background-color: ", ";\n\n        /* Hover colors */\n        transition: background-color ease 0.3s;\n        &:hover {\n          cursor: pointer;\n          background-color: ", ";\n        }\n      "], ["\n        min-width: 92px;\n        padding: 12px 24px;\n\n        font-weight: 600;\n        font-size: 18px;\n\n        background: none;\n        border: none;\n        border-radius: ", ";\n        box-shadow: 0px 4px 4px #0002;\n\n        /* Colors */\n\n        /* Foreground color */\n        color: ",
                ";\n\n        /* Default background color */\n        background-color: ",
                ";\n\n        /* Hover colors */\n        transition: background-color ease 0.3s;\n        &:hover {\n          cursor: pointer;\n          background-color: ",
                ";\n        }\n      "])), radius.normal, (function () {
                switch (buttonColor) {
                    case undefined:
                    case 'canvas':
                    case 'ink':
                        return color.ink.main;
                    default:
                        return color.canvas.light;
                }
            })(), (function () {
                switch (buttonColor) {
                    case undefined:
                    case 'canvas':
                    case 'ink':
                        return color.canvas.light;
                    default:
                        return color[buttonColor].main;
                }
            })(), (function () {
                switch (buttonColor) {
                    case undefined:
                    case 'canvas':
                    case 'ink':
                        return color.canvas.dark;
                    default:
                        return color[buttonColor].dark;
                }
            })());
        },
    },
    textInput: {
        css: function (_a) {
            var color = _a.color, radius = _a.radius;
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      /* Wrapper rules */\n      display: flex;\n      flex-direction: column;\n      margin: 15px 0;\n\n      & > input {\n        display: flex;\n        align-items: center;\n        height: 45px;\n        padding: 0 4px;\n\n        background: none;\n        background-color: ", ";\n        border: 2px solid ", ";\n        border-radius: ", ";\n        transition: border-color ease 0.2s;\n        &:focus {\n          border-color: ", ";\n        }\n        &:disabled {\n          color: ", ";\n          background-color: ", ";\n        }\n      }\n\n      & > label {\n        color: ", ";\n        font-size: 16px;\n        margin: 8px 0;\n      }\n    "], ["\n      /* Wrapper rules */\n      display: flex;\n      flex-direction: column;\n      margin: 15px 0;\n\n      & > input {\n        display: flex;\n        align-items: center;\n        height: 45px;\n        padding: 0 4px;\n\n        background: none;\n        background-color: ", ";\n        border: 2px solid ", ";\n        border-radius: ", ";\n        transition: border-color ease 0.2s;\n        &:focus {\n          border-color: ", ";\n        }\n        &:disabled {\n          color: ", ";\n          background-color: ", ";\n        }\n      }\n\n      & > label {\n        color: ", ";\n        font-size: 16px;\n        margin: 8px 0;\n      }\n    "])), color.canvas.light, color.ink.light, radius.normal, color.primary.main, color.ink.light, color.canvas.dark, color.primary.main);
        },
    },
};
var templateObject_1, templateObject_2, templateObject_3;

// Not declared in ./util since we don't want to export this function outside the package
var handleCSSRule = function (rules, defaultRule) {
    if (!rules)
        return { css: defaultRule.css };
    if (rules.replace)
        return {
            css: rules.css,
        };
    return {
        css: function (theme, props) {
            // Overwrites values from defaultStyle with the ones passed by ThemeCSSFunc
            var styles = [defaultRule.css, rules.css]
                .flat(2)
                .map(function (st) { return st(theme, props); })
                .flat(); // TS Complains if we don't have this, even though we've used flat()
            return styles;
        },
    };
};
var makeTheme = function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27;
    // This ternary operation allow us to avoid `TypeError: theme is undefined`
    var _28 = theme
        ? theme
        : {}, color = _28.color, radius = _28.radius, grid = _28.grid, button = _28.button, global = _28.global, textInput = _28.textInput;
    return {
        color: {
            secondary: {
                dark: (_b = (_a = color === null || color === void 0 ? void 0 : color.secondary) === null || _a === void 0 ? void 0 : _a.dark) !== null && _b !== void 0 ? _b : defaultTheme.color.secondary.dark,
                main: (_d = (_c = color === null || color === void 0 ? void 0 : color.secondary) === null || _c === void 0 ? void 0 : _c.main) !== null && _d !== void 0 ? _d : defaultTheme.color.secondary.main,
                light: (_f = (_e = color === null || color === void 0 ? void 0 : color.secondary) === null || _e === void 0 ? void 0 : _e.light) !== null && _f !== void 0 ? _f : defaultTheme.color.secondary.light,
            },
            canvas: {
                dark: (_h = (_g = color === null || color === void 0 ? void 0 : color.canvas) === null || _g === void 0 ? void 0 : _g.dark) !== null && _h !== void 0 ? _h : defaultTheme.color.canvas.dark,
                main: (_k = (_j = color === null || color === void 0 ? void 0 : color.canvas) === null || _j === void 0 ? void 0 : _j.main) !== null && _k !== void 0 ? _k : defaultTheme.color.canvas.main,
                light: (_m = (_l = color === null || color === void 0 ? void 0 : color.canvas) === null || _l === void 0 ? void 0 : _l.light) !== null && _m !== void 0 ? _m : defaultTheme.color.canvas.light,
            },
            error: {
                dark: (_p = (_o = color === null || color === void 0 ? void 0 : color.error) === null || _o === void 0 ? void 0 : _o.dark) !== null && _p !== void 0 ? _p : defaultTheme.color.error.dark,
                main: (_r = (_q = color === null || color === void 0 ? void 0 : color.error) === null || _q === void 0 ? void 0 : _q.main) !== null && _r !== void 0 ? _r : defaultTheme.color.error.main,
                light: (_t = (_s = color === null || color === void 0 ? void 0 : color.error) === null || _s === void 0 ? void 0 : _s.light) !== null && _t !== void 0 ? _t : defaultTheme.color.error.light,
            },
            info: {
                dark: (_v = (_u = color === null || color === void 0 ? void 0 : color.info) === null || _u === void 0 ? void 0 : _u.dark) !== null && _v !== void 0 ? _v : defaultTheme.color.info.dark,
                main: (_x = (_w = color === null || color === void 0 ? void 0 : color.info) === null || _w === void 0 ? void 0 : _w.main) !== null && _x !== void 0 ? _x : defaultTheme.color.info.main,
                light: (_z = (_y = color === null || color === void 0 ? void 0 : color.info) === null || _y === void 0 ? void 0 : _y.light) !== null && _z !== void 0 ? _z : defaultTheme.color.info.light,
            },
            ink: {
                dark: (_1 = (_0 = color === null || color === void 0 ? void 0 : color.ink) === null || _0 === void 0 ? void 0 : _0.dark) !== null && _1 !== void 0 ? _1 : defaultTheme.color.ink.dark,
                main: (_3 = (_2 = color === null || color === void 0 ? void 0 : color.ink) === null || _2 === void 0 ? void 0 : _2.main) !== null && _3 !== void 0 ? _3 : defaultTheme.color.ink.main,
                light: (_5 = (_4 = color === null || color === void 0 ? void 0 : color.ink) === null || _4 === void 0 ? void 0 : _4.light) !== null && _5 !== void 0 ? _5 : defaultTheme.color.ink.light,
            },
            primary: {
                dark: (_7 = (_6 = color === null || color === void 0 ? void 0 : color.primary) === null || _6 === void 0 ? void 0 : _6.dark) !== null && _7 !== void 0 ? _7 : defaultTheme.color.primary.dark,
                main: (_9 = (_8 = color === null || color === void 0 ? void 0 : color.primary) === null || _8 === void 0 ? void 0 : _8.main) !== null && _9 !== void 0 ? _9 : defaultTheme.color.primary.main,
                light: (_11 = (_10 = color === null || color === void 0 ? void 0 : color.primary) === null || _10 === void 0 ? void 0 : _10.light) !== null && _11 !== void 0 ? _11 : defaultTheme.color.primary.light,
            },
            success: {
                dark: (_13 = (_12 = color === null || color === void 0 ? void 0 : color.success) === null || _12 === void 0 ? void 0 : _12.dark) !== null && _13 !== void 0 ? _13 : defaultTheme.color.success.dark,
                main: (_15 = (_14 = color === null || color === void 0 ? void 0 : color.success) === null || _14 === void 0 ? void 0 : _14.main) !== null && _15 !== void 0 ? _15 : defaultTheme.color.success.main,
                light: (_17 = (_16 = color === null || color === void 0 ? void 0 : color.success) === null || _16 === void 0 ? void 0 : _16.light) !== null && _17 !== void 0 ? _17 : defaultTheme.color.success.light,
            },
            warning: {
                dark: (_19 = (_18 = color === null || color === void 0 ? void 0 : color.warning) === null || _18 === void 0 ? void 0 : _18.dark) !== null && _19 !== void 0 ? _19 : defaultTheme.color.warning.dark,
                main: (_21 = (_20 = color === null || color === void 0 ? void 0 : color.warning) === null || _20 === void 0 ? void 0 : _20.main) !== null && _21 !== void 0 ? _21 : defaultTheme.color.warning.main,
                light: (_23 = (_22 = color === null || color === void 0 ? void 0 : color.warning) === null || _22 === void 0 ? void 0 : _22.light) !== null && _23 !== void 0 ? _23 : defaultTheme.color.warning.light,
            },
        },
        grid: {
            replace: (_24 = grid === null || grid === void 0 ? void 0 : grid.replace) !== null && _24 !== void 0 ? _24 : false,
            rules: (grid === null || grid === void 0 ? void 0 : grid.replace) && (grid === null || grid === void 0 ? void 0 : grid.rules)
                ? grid.rules
                : __assign(__assign({}, defaultTheme.grid.rules), grid === null || grid === void 0 ? void 0 : grid.rules),
        },
        radius: {
            big: cssUnit((_25 = radius === null || radius === void 0 ? void 0 : radius.big) !== null && _25 !== void 0 ? _25 : defaultTheme.radius.big),
            normal: cssUnit((_26 = radius === null || radius === void 0 ? void 0 : radius.normal) !== null && _26 !== void 0 ? _26 : defaultTheme.radius.normal),
            small: cssUnit((_27 = radius === null || radius === void 0 ? void 0 : radius.small) !== null && _27 !== void 0 ? _27 : defaultTheme.radius.small),
        },
        global: handleCSSRule(global, defaultTheme.global),
        button: handleCSSRule(button, defaultTheme.button),
        textInput: handleCSSRule(textInput, defaultTheme.textInput),
    };
};

var Button = styled.button(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (p) { return p.theme.button.css(p.theme, { color: p.color }); });
var templateObject_1$1;

var globalVariables = function (links) { return css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n  body {\n    margin-top: var(--navbarHeight);\n  }\n"], ["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n  body {\n    margin-top: var(--navbarHeight);\n  }\n"])), links, mediaQuery.medium); };
var Wrapper = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content, but the Modal */\n  z-index: 888;\n\n  /* Container */\n  & > div {\n    display: flex;\n    align-items: center;\n\n    ", " {\n      flex-flow: row wrap;\n      justify-content: space-between;\n    }\n    height: 100%;\n\n    & > img {\n      width: 80px;\n      object-fit: contain;\n    }\n\n    .toggleNavLinks {\n      width: var(--navbarHeight);\n      height: var(--navbarHeight);\n      font-size: 18px;\n\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      &:focus {\n        outline: none;\n      }\n\n      background: none;\n      border: none;\n      color: ", ";\n      transition: color ease 0.3s;\n      ", " {\n        display: none;\n      }\n    }\n\n    & > .links {\n      display: flex;\n      align-items: center;\n\n      ", " {\n        width: 100%;\n        height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n        padding: 0;\n        margin: 0;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n\n        opacity: ", ";\n        pointer-events: ", ";\n        /*\n    The animation is faster when showing the menu in order for the text\n    to render inside the wrapper.\n    */\n        transition: opacity ease ", ";\n      }\n\n      ", " {\n        flex: 4;\n        justify-content: flex-end;\n      }\n    }\n  }\n\n  a {\n    font-size: 16px;\n    text-decoration: none;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n    transition: color ease 0.2s;\n    ", " {\n      margin-bottom: 25px;\n      display: flex;\n      align-items: center;\n      margin: 0;\n    }\n    ", " {\n      margin-right: 25px;\n    }\n\n    font-weight: 400;\n    &.bold {\n      font-weight: 700;\n    }\n  }\n"], ["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ",
    ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content, but the Modal */\n  z-index: 888;\n\n  /* Container */\n  & > div {\n    display: flex;\n    align-items: center;\n\n    ", " {\n      flex-flow: row wrap;\n      justify-content: space-between;\n    }\n    height: 100%;\n\n    & > img {\n      width: 80px;\n      object-fit: contain;\n    }\n\n    .toggleNavLinks {\n      width: var(--navbarHeight);\n      height: var(--navbarHeight);\n      font-size: 18px;\n\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      &:focus {\n        outline: none;\n      }\n\n      background: none;\n      border: none;\n      color: ",
    ";\n      transition: color ease 0.3s;\n      ", " {\n        display: none;\n      }\n    }\n\n    & > .links {\n      display: flex;\n      align-items: center;\n\n      ", " {\n        width: 100%;\n        height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n        padding: 0;\n        margin: 0;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n\n        opacity: ", ";\n        pointer-events: ", ";\n        /*\n    The animation is faster when showing the menu in order for the text\n    to render inside the wrapper.\n    */\n        transition: opacity ease ", ";\n      }\n\n      ", " {\n        flex: 4;\n        justify-content: flex-end;\n      }\n    }\n  }\n\n  a {\n    font-size: 16px;\n    text-decoration: none;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n    transition: color ease 0.2s;\n    ", " {\n      margin-bottom: 25px;\n      display: flex;\n      align-items: center;\n      margin: 0;\n    }\n    ", " {\n      margin-right: 25px;\n    }\n\n    font-weight: 400;\n    &.bold {\n      font-weight: 700;\n    }\n  }\n"])), function (p) { return (p.expanded ? '--navbarExpandedHeight' : '--navbarHeight'); }, function (p) { return p.theme.color.ink.light; }, function (p) { return p.theme.color.canvas.light; }, function (p) {
    return p.expanded ? "0 2px 2px " + p.theme.color.ink.main + "25" : 'none';
}, mediaQuery.small, function (_a) {
    var expanded = _a.expanded, theme = _a.theme;
    return expanded ? theme.color.primary.main : theme.color.ink.light;
}, mediaQuery.medium, mediaQuery.small, function (p) { return (p.expanded ? 1 : 0); }, function (p) { return (p.expanded ? 'visible' : 'none'); }, function (p) { return (p.expanded ? '0.7s' : '0.15s'); }, mediaQuery.medium, function (p) { return p.theme.color.ink.light; }, function (p) { return p.theme.color.primary.main; }, mediaQuery.small, mediaQuery.medium);
var NavLink = function (_a) {
    var href = _a.href, label = _a.label, button = _a.button, color = _a.color, setExpanded = _a.setExpanded, onClick = _a.onClick;
    var theme = useTheme();
    var childOnClick = function () {
        if (onClick)
            onClick();
        setExpanded(false);
    };
    var Child = function (_a) {
        var href = _a.href;
        return button ? (jsx(Button, { color: color, onClick: childOnClick }, label)) : (jsx("a", { onClick: childOnClick, href: href, style: { color: color ? theme.color[color].main : undefined } }, label));
    };
    return href ? (jsx(Link, { href: href, passHref: true },
        jsx(Child, null))) : (jsx(Child, null));
};
var Navbar = function (_a) {
    var links = _a.links, logo = _a.logo, css = _a.css, className = _a.className;
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    // Declaring all links here so we can use Array.length for CSS heights,
    // note that in this case Preact doesn't need `key` prop in components.
    var mappedLinks = links.map(function (_a) {
        var href = _a.href, label = _a.label, color = _a.color, button = _a.button, onClick = _a.onClick;
        return (jsx(NavLink, { href: href, label: label, setExpanded: setExpanded, color: color, button: button, onClick: onClick }));
    });
    return (jsx(Fragment, null,
        jsx(Global, { styles: globalVariables(links.length) }),
        jsx(Wrapper, { expanded: expanded, css: css, className: className },
            jsx(Container, null,
                jsx(Link, { href: '/' }, logo !== null && logo !== void 0 ? logo : jsx("div", null)),
                jsx("button", { className: 'toggleNavLinks', onClick: function () { return setExpanded(!expanded); } },
                    jsx("i", { className: 'fa fa-menu' })),
                jsx("div", { className: 'links' }, mappedLinks)))));
};
var templateObject_1$2, templateObject_2$1;

var translateDirection = function (direction, distance) {
    if (distance === void 0) { distance = '100%'; }
    switch (direction) {
        case 'up':
            return "translate3d(0, " + distance + ", 0)";
        case 'down':
            return "translate3d(0, -" + distance + ", 0)";
        case 'left':
            return "translate3d(" + distance + ", 0, 0)";
        case 'right':
            return "translate3d(-" + distance + ", 0, 0)";
    }
};
var animation = function (direction, distance) { return keyframes(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  from {\n    transform: ", ";\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: ", ";\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])), translateDirection(direction, distance)); };
var SlideFade = function (_a) {
    var direction = _a.direction, distance = _a.distance, props = __rest(_a, ["direction", "distance"]);
    return (jsx(Reveal, __assign({}, props, { keyframes: animation(direction !== null && direction !== void 0 ? direction : 'left', distance !== null && distance !== void 0 ? distance : '100%') })));
};
var templateObject_1$3;

var Input = function (props) {
    var theme = useTheme();
    var id = props.id, label = props.label;
    return (jsx("div", { css: theme.textInput.css(theme, props), className: props.className },
        label && jsx("label", { htmlFor: id }, label),
        jsx("input", __assign({}, props, { className: undefined }))));
};
Input.defaultProps = { type: 'text' };

var inspectlet = function (inspectletId) {
    window.__insp = window.__insp || [];
    window.__insp.push(['wid', inspectletId]);
    window.ldinsp = function () {
        var _a;
        if (typeof window.__inspld != 'undefined')
            return;
        window.__inspld = 1;
        var insp = document.createElement('script');
        insp.type = 'text/javascript';
        insp.async = true;
        insp.id = 'inspsync';
        insp.src =
            ('https:' == document.location.protocol ? 'https' : 'http') +
                '://cdn.inspectlet.com/inspectlet.js?wid=' +
                inspectletId +
                '&r=' +
                Math.floor(new Date().getTime() / 3600000);
        var x = document.getElementsByTagName('script')[0];
        (_a = x.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(insp, x);
    };
    setTimeout(window.ldinsp, 0);
};

var randomId = function (length) {
    if (length === void 0) { length = 10; }
    return __spreadArrays(Array(length)).map(function () { return ((Math.random() * 36) | 0).toString(36); }).join('');
};
var googleAnalyticsInit = function (googleUa) {
    var _a;
    var userId = (_a = localStorage.getItem('google_ua_id')) !== null && _a !== void 0 ? _a : randomId();
    ReactGA.initialize(googleUa, {
        titleCase: false,
        gaOptions: {
            userId: userId,
        },
    });
    localStorage.setItem('google_ua_id', userId);
};
var googleAnalyticsTrackPage = function (path) {
    ReactGA.pageview(path);
};

export { Breakpoints, Button, Col, Container, GlobalProvider, Input, Navbar, Row, SlideFade, colorTypes, cssUnit, defaultTheme, googleAnalyticsInit, googleAnalyticsTrackPage, inspectlet, makeTheme, mediaQuery, styled, useTheme };
