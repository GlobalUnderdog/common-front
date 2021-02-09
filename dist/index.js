'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
require('@babel/runtime/helpers/esm/extends');
require('@babel/runtime/helpers/extends');
var jsxRuntime = require('react/jsx-runtime');
var Head = _interopDefault(require('next/head'));
var styled = _interopDefault(require('@emotion/styled'));
var react$1 = require('@emotion/react');
var reactGridSystem = require('react-grid-system');
var common = require('@globalunderdog/common');
var ReactModal = _interopDefault(require('react-modal'));
var Link = _interopDefault(require('next/link'));
var Reveal = require('react-awesome-reveal');
var Reveal__default = _interopDefault(Reveal);
var TagManager = _interopDefault(require('react-gtm-module'));
var ReactGA = _interopDefault(require('react-ga'));
var client = require('@tianhuil/simple-trpc/dist/client');

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = function () {
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-ms-input-placeholder|-moz-read-write|-moz-read-only){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet;
}();

var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var i="@import";var p="@keyframes";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return (e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function L(){return z(G,E)}function N(){return E}function P(e,r){return C(G,e,r)}function Q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R(e){return q=B=1,D=A(G=e),E=0,[]}function T(e){return G="",e}function U(e){return g(P(E-1,Y(e===91?e+2:e===40?e+1:e)))}function W(e){while(F=L())if(F<33)K();else break;return Q(e)>2||Q(F)>3?"":" "}function Y(e){while(K())switch(F){case e:return E;case 34:case 39:return Y(e===34||e===39?e:F);case 40:if(e===41)Y(e);break;case 92:K();break}return E}function Z(e,r){while(K())if(e+F===47+10)break;else if(e+F===42+42&&L()===47)break;return "/*"+P(r,E-1)+"*"+d(e===47?e:K())}function _(e){while(!Q(L()))K();return P(e,E)}function ee(e){return T(re("",null,null,null,[""],e=R(e),0,[0],e))}function re(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var w=1;var b=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(b)switch(p=k,k=K()){case 34:case 39:case 91:case 40:z+=U(k);break;case 9:case 10:case 13:case 32:z+=W(p);break;case 47:switch(L()){case 42:case 47:O(ce(Z(K(),N()),r,a),i);break;default:z+="/";}break;case 123*w:u[f++]=A(z)*$;case 125*w:case 59:case 0:switch(k){case 0:case 125:b=0;case 59+o:if(h>0)O(h>32?ne(z+";",c,a,l-1):ne(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ae(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)re(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:re(e,j,j,c&&O(ae(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:re(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,w=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:switch(z+=d(k),k*w){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(L()===45)z+=U(K());v=L(),o=A(m=z+=_(N())),k++;break;case 45:if(p===45&&A(z)==2)w=0;}}return t}function ae(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var w=0,b=0,$=0;w<c;++w)for(var d=0,m=C(e,v+1,v=k(b=u[w])),x=e;d<p;++d)if(x=g(b>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function ce(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function ne(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function te(c,n){switch(m(c,n)){case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 102:n=z(c,n+3);case 109:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(n==108?"$3":"$2-$3"))+c;case 115:return ~j(c,"stretch")?te(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:case 111:return y(c,c,a+c)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function se(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function ue(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A(a=se(e.children,s))?e.return=e.value+"{"+a+"}":""}function ie(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function fe(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function oe(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=te(c.value,c.length);break;case p:return se([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return se([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return se([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return ""}))}}

var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};
var toRules = function toRules(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (Q(character)) {
      case 0:
        if (character === 38 && L() === 12) {
          points[index] = 1;
        }
        parsed[index] += _(E - 1);
        break;
      case 2:
        parsed[index] += U(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = L() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += d(character);
    }
  } while (character = K());
  return parsed;
};
var getRules = function getRules(value, points) {
  return T(toRules(R(value), points));
};
var fixedElements = new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent ||
  !element.length) {
    return;
  }
  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (
    value.charCodeAt(0) === 108 &&
    value.charCodeAt(2) === 98) {
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;
      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }
      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};
var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
var isBrowser = typeof document !== 'undefined';
var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [oe];
var createCache = function createCache(options) {
  var key = options.key;
  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (isBrowser && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function (node) {
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (process.env.NODE_ENV !== 'production') {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');
      if (attrib[0] !== key) {
        return;
      }
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [ue, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== c) {
          currentSheet.insert(element.value + "{}");
        }
      }
    } : fe(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = ie(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return se(ee(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [ue];
    var _serializer = ie(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis(styles) {
      return se(ee(styles), _serializer);
    };
    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);
      if (cache.compat === undefined) {
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        if (
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e$1=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g$1=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q$1=b?
Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t$1=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m$1:case e$1:case g$1:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k$1;var ContextProvider=h;var Element=c$1;var ForwardRef=n$1;var Fragment=e$1;var Lazy=t$1;var Memo=r$1;var Portal=d$1;
var Profiler=g$1;var StrictMode=f;var Suspense=p$1;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e$1};var isLazy=function(a){return z$1(a)===t$1};
var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d$1};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z$1;
var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {
if (process.env.NODE_ENV !== "production") {
  (function() {
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}
function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;
        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;
            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }
  return undefined;
}
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {
if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
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
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!isBrowser$1 && stylesForSSR.length !== 0) {
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
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
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
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
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
          return handleInterpolation(mergedProps, registered, result);
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
  return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
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
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
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
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
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
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
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

var isBrowser$2 = typeof document !== 'undefined';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var EmotionCacheContext = react.createContext(
typeof HTMLElement !== 'undefined' ? createCache({
  key: 'css'
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache(func) {
  return react.forwardRef(function (props, ref) {
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!isBrowser$2) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = react.useContext(EmotionCacheContext);
      if (cache === null) {
        cache = createCache({
          key: 'css'
        });
        return react.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = react.createContext({});
var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (process.env.NODE_ENV !== 'production' && typeof props.css === 'string' &&
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  if (process.env.NODE_ENV !== 'production') {
    var error = new Error();
    if (error.stack) {
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);
      if (!match) {
        match = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
      }
      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }
  return newProps;
};
var Emotion = withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }
  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, undefined, typeof cssProp === 'function' || Array.isArray(cssProp) ? react.useContext(ThemeContext) : undefined);
  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }
  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = react.createElement(type, newProps);
  if (!isBrowser$2 && rules !== undefined) {
    var _ref;
    var serializedNames = serialized.name;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }
    return react.createElement(react.Fragment, null, react.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }
  return ele;
});
if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}

function jsx(type, props, key) {
  if (!hasOwnProperty.call(props, 'css')) {
    return jsxRuntime.jsx(type, props, key);
  }
  return jsxRuntime.jsx(Emotion, createEmotionProps(type, props), key);
}
function jsxs(type, props, key) {
  if (!hasOwnProperty.call(props, 'css')) {
    return jsxRuntime.jsxs(type, props, key);
  }
  return jsxRuntime.jsxs(Emotion, createEmotionProps(type, props), key);
}

var AppHead = function (_a) {
    var title = _a.title, description = _a.description, url = _a.url, image = _a.image, children = _a.children;
    return (jsxs(Head, { children: [jsx("meta", { charSet: 'UTF-8' }, void 0),
            jsx("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }, void 0),
            jsx("link", { rel: 'manifest', href: '/site.webmanifest' }, void 0),
            jsx("link", { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }, void 0),
            jsx("link", { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }, void 0),
            jsx("link", { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }, void 0),
            jsx("title", { children: title }, void 0),
            jsx("meta", { name: 'title', content: title }, void 0),
            jsx("meta", { name: 'description', content: description }, void 0),
            jsx("link", { ref: 'canonical', href: url }, void 0),
            jsx("meta", { property: 'og:type', content: 'website' }, void 0),
            jsx("meta", { property: 'og:url', content: url }, void 0),
            jsx("meta", { property: 'og:title', content: title }, void 0),
            jsx("meta", { property: 'og:description', content: description }, void 0),
            image && jsx("meta", { property: 'og:image', content: image }, void 0),
            jsx("meta", { property: 'twitter:card', content: 'summary_large_image' }, void 0),
            jsx("meta", { property: 'twitter:url', content: url }, void 0),
            jsx("meta", { property: 'twitter:title', content: title }, void 0),
            jsx("meta", { property: 'twitter:description', content: description }, void 0),
            image && jsx("meta", { property: 'twitter:image', content: image }, void 0), children] }, void 0));
};

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
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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

var guColorTypes = [
    'canvas',
    'ink',
    'primary',
    'secondary',
    'error',
    'warning',
    'info',
    'success',
];

/**
 * Transforms JavaScript numbers into CSS units, defaulting to pixels by
 * default.
 *
 * If a string is passed as argument no transformation happens.
 */
var cssUnit = function (num) {
    return typeof num === 'number' ? num + "px" : num;
};

var Container = styled(reactGridSystem.Container)();
var Row = styled(reactGridSystem.Row)();
var Col = styled(reactGridSystem.Col)();

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

var Children = function (_a) {
    var children = _a.children;
    var theme = react$1.useTheme();
    reactGridSystem.setConfiguration(theme.grid.rules);
    return (jsxs(react.Fragment, { children: [jsx(react$1.Global, { styles: theme.global.css(theme) }, void 0),
            jsx(react$1.Global, { styles: theme.modal.css(theme) }, void 0),
            jsx(reactGridSystem.ScreenClassProvider, { children: children }, void 0)] }, void 0));
};
var GUProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (jsx(react$1.ThemeProvider, __assign({ theme: theme }, { children: jsx(Children, { children: children }, void 0) }), void 0));
};

var normalizeMin = '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}';
var fadeIn = react$1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { opacity: 0 }\n  to { opacity: 1}\n"], ["\n  from { opacity: 0 }\n  to { opacity: 1}\n"])));
var fadeOut = react$1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from { opacity: 1}\n  to {opacity: 0}\n"], ["\n  from { opacity: 1}\n  to {opacity: 0}\n"])));
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
var inputTextAreaBase = function (_a) {
    var color = _a.color, radius = _a.radius;
    return react$1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* Wrapper rules */\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n\n  & > input,\n  & > textarea {\n    display: flex;\n    align-items: center;\n    height: 45px;\n    padding: 0 4px;\n\n    background: none;\n    background-color: ", ";\n    border: 2px solid ", ";\n    border-radius: ", ";\n    transition: border-color ease 0.2s;\n    &:focus {\n      border-color: ", ";\n    }\n    &:disabled {\n      color: ", ";\n      background-color: ", ";\n    }\n  }\n\n  & > label {\n    color: ", ";\n    font-size: 16px;\n    margin: 8px 0;\n  }\n"], ["\n  /* Wrapper rules */\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n\n  & > input,\n  & > textarea {\n    display: flex;\n    align-items: center;\n    height: 45px;\n    padding: 0 4px;\n\n    background: none;\n    background-color: ", ";\n    border: 2px solid ", ";\n    border-radius: ", ";\n    transition: border-color ease 0.2s;\n    &:focus {\n      border-color: ", ";\n    }\n    &:disabled {\n      color: ", ";\n      background-color: ", ";\n    }\n  }\n\n  & > label {\n    color: ", ";\n    font-size: 16px;\n    margin: 8px 0;\n  }\n"])), color.canvas.light, color.ink.light, radius.main, color.primary.main, color.ink.light, color.canvas.dark, color.primary.main);
};
var radioCheckboxBase = function (_a) {
    var color = _a.color, radius = _a.radius;
    return react$1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  input,\n  label {\n    cursor: pointer;\n    transition: color ease 0.3s, border-color ease 0.1s;\n  }\n\n  input {\n    height: 20px;\n    width: 20px;\n    box-sizing: border-box;\n    position: relative;\n    appearance: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    margin-right: 10px;\n\n    border-color: ", ";\n    background-color: ", ";\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:before {\n      box-sizing: border-box;\n      content: ' ';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      height: 100%;\n      width: 100%;\n      border-width: 2px;\n      border-radius: ", ";\n      border-style: solid;\n      /* Inherits from the actual input so we don't have to re-style for focus/hover here */\n      border-color: inherit;\n      background-color: inherit;\n\n      color: ", ";\n      transition: border-color ease 0.3s, background-color ease 0.3s;\n    }\n    &:after {\n      content: ' ';\n      position: absolute;\n      top: 25%;\n      left: 25%;\n      width: 50%;\n      height: 50%;\n      opacity: 0;\n      transition: opacity ease 0.2s;\n      border-radius: ", ";\n      border: none;\n      background-color: ", ";\n    }\n    &:checked:after {\n      opacity: 1;\n      border-color: ", ";\n    }\n\n    &:focus {\n      outline: none;\n      border-color: ", ";\n    }\n  }\n\n  label {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  input,\n  label {\n    cursor: pointer;\n    transition: color ease 0.3s, border-color ease 0.1s;\n  }\n\n  input {\n    height: 20px;\n    width: 20px;\n    box-sizing: border-box;\n    position: relative;\n    appearance: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    margin-right: 10px;\n\n    border-color: ", ";\n    background-color: ", ";\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:before {\n      box-sizing: border-box;\n      content: ' ';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      height: 100%;\n      width: 100%;\n      border-width: 2px;\n      border-radius: ", ";\n      border-style: solid;\n      /* Inherits from the actual input so we don't have to re-style for focus/hover here */\n      border-color: inherit;\n      background-color: inherit;\n\n      color: ", ";\n      transition: border-color ease 0.3s, background-color ease 0.3s;\n    }\n    &:after {\n      content: ' ';\n      position: absolute;\n      top: 25%;\n      left: 25%;\n      width: 50%;\n      height: 50%;\n      opacity: 0;\n      transition: opacity ease 0.2s;\n      border-radius: ", ";\n      border: none;\n      background-color: ", ";\n    }\n    &:checked:after {\n      opacity: 1;\n      border-color: ", ";\n    }\n\n    &:focus {\n      outline: none;\n      border-color: ", ";\n    }\n  }\n\n  label {\n    color: ", ";\n  }\n"])), color.primary.main, color.canvas.light, color.canvas.dark, radius.small, color.primary.main, radius.small, color.primary.main, color.primary.dark, color.primary.dark, color.ink.main);
};
var guDefaultTheme = {
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
        css: function (_a) {
            var color = _a.color;
            return react$1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", "\n\n      html {\n        scroll-behavior: smooth;\n        color: ", ";\n        background-color: ", ";\n      }\n\n      body {\n        /*\n        Sometimes, when using react-awesome-reveal we might trigger some\n        unwanted horizontal spacing, creating issues like briefly showing the\n        horizontal scrollbar or permanently increasing the width of the page.\n        Setting width: 100% with overflow-x: hidden fixes this issue.\n        */\n        width: 100% !important;\n        max-width: 100% !important;\n        overflow-x: hidden;\n        /*\n        In OSes that have visible scrollbars changing to a page without too\n        much content might cause components to fickle, since the scrollbar\n        will show/hide according to the page's height (for example a simple\n        login page will have no scrollbar). We ensure that the overflow-y is\n        always scrollable so these OSes can have a consistent look & feel in\n        all pages.\n        */\n        overflow-y: scroll;\n      }\n\n      *:focus {\n        outline: none;\n      }\n\n      /*\n      Setting this here since icons.css is replaced with newer icons from time\n      to time.\n      */\n      @keyframes fa-spin {\n        from {\n          transform: rotateZ(0);\n        }\n        to {\n          transform: rotateZ(359deg);\n        }\n      }\n      .fa-spin {\n        animation: fa-spin 2s linear forwards infinite;\n      }\n    "], ["\n      ", "\n\n      html {\n        scroll-behavior: smooth;\n        color: ", ";\n        background-color: ", ";\n      }\n\n      body {\n        /*\n        Sometimes, when using react-awesome-reveal we might trigger some\n        unwanted horizontal spacing, creating issues like briefly showing the\n        horizontal scrollbar or permanently increasing the width of the page.\n        Setting width: 100% with overflow-x: hidden fixes this issue.\n        */\n        width: 100% !important;\n        max-width: 100% !important;\n        overflow-x: hidden;\n        /*\n        In OSes that have visible scrollbars changing to a page without too\n        much content might cause components to fickle, since the scrollbar\n        will show/hide according to the page's height (for example a simple\n        login page will have no scrollbar). We ensure that the overflow-y is\n        always scrollable so these OSes can have a consistent look & feel in\n        all pages.\n        */\n        overflow-y: scroll;\n      }\n\n      *:focus {\n        outline: none;\n      }\n\n      /*\n      Setting this here since icons.css is replaced with newer icons from time\n      to time.\n      */\n      @keyframes fa-spin {\n        from {\n          transform: rotateZ(0);\n        }\n        to {\n          transform: rotateZ(359deg);\n        }\n      }\n      .fa-spin {\n        animation: fa-spin 2s linear forwards infinite;\n      }\n    "])), normalizeMin, color.ink.main, color.canvas.main);
        },
    },
    button: {
        css: function (_a, p) {
            var color = _a.color, radius = _a.radius;
            var buttonColor = p ? p.color : undefined;
            return react$1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        min-width: 92px;\n        padding: 12px 24px;\n\n        font-weight: 600;\n        font-size: 18px;\n\n        background: none;\n        border: none;\n        border-radius: ", ";\n        box-shadow: 0px 4px 4px #0002;\n\n        /* Colors */\n\n        /* Foreground color */\n        color: ", ";\n\n        /* Default background color */\n        background-color: ", ";\n\n        /* Hover colors */\n        transition: background-color ease 0.3s;\n        &:hover {\n          cursor: pointer;\n          background-color: ", ";\n        }\n      "], ["\n        min-width: 92px;\n        padding: 12px 24px;\n\n        font-weight: 600;\n        font-size: 18px;\n\n        background: none;\n        border: none;\n        border-radius: ", ";\n        box-shadow: 0px 4px 4px #0002;\n\n        /* Colors */\n\n        /* Foreground color */\n        color: ",
                ";\n\n        /* Default background color */\n        background-color: ",
                ";\n\n        /* Hover colors */\n        transition: background-color ease 0.3s;\n        &:hover {\n          cursor: pointer;\n          background-color: ",
                ";\n        }\n      "])), radius.main, (function () {
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
    input: {
        css: inputTextAreaBase,
    },
    textArea: {
        css: function (theme) { return react$1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      ", "\n\n      & > textarea {\n        display: block;\n        height: 290px;\n        padding: 4px;\n        resize: none;\n      }\n    "], ["\n      ", "\n\n      & > textarea {\n        display: block;\n        height: 290px;\n        padding: 4px;\n        resize: none;\n      }\n    "])), inputTextAreaBase(theme)); },
    },
    checkbox: {
        css: radioCheckboxBase,
    },
    radio: {
        css: function (theme) { return react$1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      ", "\n      input, input:before, input:after {\n        border-radius: 999px;\n      }\n      input {\n        &:after {\n          content: ' ';\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background-color: transparent;\n        }\n        &:checked:after {\n          background-image: radial-gradient(\n            circle,\n            ", " 30%,\n            #0000 40%\n          );\n        }\n      }\n    "], ["\n      ", "\n      input, input:before, input:after {\n        border-radius: 999px;\n      }\n      input {\n        &:after {\n          content: ' ';\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background-color: transparent;\n        }\n        &:checked:after {\n          background-image: radial-gradient(\n            circle,\n            ", " 30%,\n            #0000 40%\n          );\n        }\n      }\n    "])), radioCheckboxBase(theme), theme.color.primary.main); },
    },
    modal: {
        css: function (_a) {
            var radius = _a.radius, color = _a.color;
            return react$1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      .modalOverlay {\n        width: 100%;\n        height: 100vh;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 999;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(15px);\n        animation: ", " 350ms ease both;\n        &.hiding {\n          animation: ", " 350ms ease both;\n        }\n      }\n\n      .modalCard {\n        width: 95%;\n        ", " {\n          width: 500px;\n        }\n        & > :first-of-type {\n          border-radius: ", ";\n          background-color: ", ";\n          min-height: 440px;\n          padding: 25px !important;\n          pointer-events: all;\n\n          /* Usually h1, h2, h3, etc. will have a margin at the top and be centered */\n          & > h1:first-of-type,\n          & > h2:first-of-type,\n          & > h3:first-of-type,\n          & > h4:first-of-type,\n          & > h5:first-of-type {\n            text-align: left;\n            margin-top: 0;\n          }\n        }\n        &:focus {\n          outline: none;\n        }\n        pointer-events: none;\n      }\n    "], ["\n      .modalOverlay {\n        width: 100%;\n        height: 100vh;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 999;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(15px);\n        animation: ", " 350ms ease both;\n        &.hiding {\n          animation: ", " 350ms ease both;\n        }\n      }\n\n      .modalCard {\n        width: 95%;\n        ", " {\n          width: 500px;\n        }\n        & > :first-of-type {\n          border-radius: ", ";\n          background-color: ", ";\n          min-height: 440px;\n          padding: 25px !important;\n          pointer-events: all;\n\n          /* Usually h1, h2, h3, etc. will have a margin at the top and be centered */\n          & > h1:first-of-type,\n          & > h2:first-of-type,\n          & > h3:first-of-type,\n          & > h4:first-of-type,\n          & > h5:first-of-type {\n            text-align: left;\n            margin-top: 0;\n          }\n        }\n        &:focus {\n          outline: none;\n        }\n        pointer-events: none;\n      }\n    "])), fadeIn, fadeOut, mediaQuery.medium, radius.big, color.canvas.light);
        },
    },
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

// Not declared in ./util since we don't want to export this function outside the package
var handleCSSRule = function (rules, defaultRule) {
    if (!(rules === null || rules === void 0 ? void 0 : rules.css))
        return { css: defaultRule.css };
    var rulesCss = rules.css; // Typescript still thinks rules.css is empty by this point2
    if (rules.replace)
        return {
            css: rules.css,
        };
    return {
        css: function (theme, props) {
            // Overwrites values from defaultStyle with the ones passed by ThemeCSSFunc
            var styles = [defaultRule.css, rulesCss]
                .flat(2)
                .map(function (st) { return st(theme, props); })
                .flat(); // TS Complains if we don't have this, even though we've used flat()
            return styles;
        },
    };
};
var makeTheme = function (theme) {
    var _a, _b, _c, _d;
    // This ternary operation allow us to avoid `TypeError: theme is undefined`
    var _e = theme ? theme : {}, color = _e.color, radius = _e.radius, grid = _e.grid, button = _e.button, global = _e.global, input = _e.input, textArea = _e.textArea, checkbox = _e.checkbox, radio = _e.radio, modal = _e.modal, extended = __rest(_e, ["color", "radius", "grid", "button", "global", "input", "textArea", "checkbox", "radio", "modal"]);
    return __assign({ color: {
            secondary: __assign(__assign({}, guDefaultTheme.color.secondary), color === null || color === void 0 ? void 0 : color.secondary),
            canvas: __assign(__assign({}, guDefaultTheme.color.canvas), color === null || color === void 0 ? void 0 : color.canvas),
            error: __assign(__assign({}, guDefaultTheme.color.error), color === null || color === void 0 ? void 0 : color.error),
            info: __assign(__assign({}, guDefaultTheme.color.info), color === null || color === void 0 ? void 0 : color.info),
            ink: __assign(__assign({}, guDefaultTheme.color.ink), color === null || color === void 0 ? void 0 : color.ink),
            primary: __assign(__assign({}, guDefaultTheme.color.primary), color === null || color === void 0 ? void 0 : color.primary),
            success: __assign(__assign({}, guDefaultTheme.color.success), color === null || color === void 0 ? void 0 : color.success),
            warning: __assign(__assign({}, guDefaultTheme.color.warning), color === null || color === void 0 ? void 0 : color.warning),
        }, grid: {
            replace: (_a = grid === null || grid === void 0 ? void 0 : grid.replace) !== null && _a !== void 0 ? _a : false,
            rules: (grid === null || grid === void 0 ? void 0 : grid.replace) && (grid === null || grid === void 0 ? void 0 : grid.rules)
                ? grid.rules
                : __assign(__assign({}, guDefaultTheme.grid.rules), grid === null || grid === void 0 ? void 0 : grid.rules),
        }, radius: __assign(__assign({}, radius), { big: cssUnit((_b = radius === null || radius === void 0 ? void 0 : radius.big) !== null && _b !== void 0 ? _b : guDefaultTheme.radius.big), main: cssUnit((_c = radius === null || radius === void 0 ? void 0 : radius.main) !== null && _c !== void 0 ? _c : guDefaultTheme.radius.main), small: cssUnit((_d = radius === null || radius === void 0 ? void 0 : radius.small) !== null && _d !== void 0 ? _d : guDefaultTheme.radius.small) }), global: handleCSSRule(global, guDefaultTheme.global), button: handleCSSRule(button, guDefaultTheme.button), input: handleCSSRule(input, guDefaultTheme.input), textArea: handleCSSRule(textArea, guDefaultTheme.textArea), checkbox: handleCSSRule(checkbox, guDefaultTheme.checkbox), radio: handleCSSRule(radio, guDefaultTheme.radio), modal: handleCSSRule(modal, guDefaultTheme.modal) }, extended);
};

var GUButton = styled.button(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (p) { return p.theme.button.css(p.theme, p); });
var templateObject_1$1;

var GUCheckbox = function (_a) {
    var className = _a.className, label = _a.label, labelFirst = _a.labelFirst, props = __rest(_a, ["className", "label", "labelFirst"]);
    var theme = react$1.useTheme();
    return (jsx("div", __assign({ css: theme.checkbox.css(theme, props), className: className }, { children: labelFirst ? (jsxs(react.Fragment, { children: [label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0),
                jsx("input", __assign({}, props, { type: 'checkbox' }), void 0)] }, void 0)) : (jsxs(react.Fragment, { children: [jsx("input", __assign({}, props, { type: 'checkbox' }), void 0),
                label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0)] }, void 0)) }), void 0));
};

/**
 * Automatically hides children when `loading === true`, also allows the
 * usage of `<Loading/>` Component inside it.
 */
var GUForm = styled.form(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: relative;\n  /*\n  We don't want to mess any component opacity when loading === false,\n  considering that there might be elements with opacity = 0.2 we only\n  load the opacity rule when loading === true\n  */\n  ", "\n"], ["\n  position: relative;\n  /*\n  We don't want to mess any component opacity when loading === false,\n  considering that there might be elements with opacity = 0.2 we only\n  load the opacity rule when loading === true\n  */\n  ",
    "\n"])), function (p) {
    return p.loading
        ? react$1.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n          & > * {\n            opacity: 0;\n            transition: ease 0.2s;\n          }\n        "], ["\n          & > * {\n            opacity: 0;\n            transition: ease 0.2s;\n          }\n        "]))) : '';
});
var _GULoading = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  opacity: ", " !important;\n  transition: opacity ease 0.2s;\n  pointer-events: ", ";\n\n  i {\n    color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  opacity: ", " !important;\n  transition: opacity ease 0.2s;\n  pointer-events: ", ";\n\n  i {\n    color: ", ";\n  }\n"
    /**
     * Can be used as the last child of a `<Form />` element to automatically
     * create a loading indicator.
     */
])), function (p) { return (p.loading ? 1 : 0); }, function (p) { return (p.loading ? 'all' : 'none'); }, function (p) { return p.theme.color.ink.main; });
/**
 * Can be used as the last child of a `<Form />` element to automatically
 * create a loading indicator.
 */
var GULoading = function (_a) {
    var loading = _a.loading, className = _a.className;
    return (jsx(_GULoading, __assign({ loading: loading, className: className }, { children: jsx("i", { className: 'fa fa-loading fa-spin' }, void 0) }), void 0));
};
var templateObject_1$2, templateObject_2$1, templateObject_3$1;

var GUInput = function (_a) {
    var className = _a.className, labelSecond = _a.labelSecond, props = __rest(_a, ["className", "labelSecond"]);
    var theme = react$1.useTheme();
    var label = props.label;
    return (jsx("div", __assign({ css: theme.input.css(theme, props), className: className }, { children: labelSecond ? (jsxs(react.Fragment, { children: [jsx("input", __assign({}, props), void 0),
                label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0)] }, void 0)) : (jsxs(react.Fragment, { children: [label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0),
                jsx("input", __assign({}, props), void 0)] }, void 0)) }), void 0));
};
GUInput.defaultProps = { type: 'text' };

var commonModalProps = function (hiding, className) { return ({
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: true,
    shouldFocusAfterRender: true,
    overlayClassName: "modalOverlay " + (hiding ? 'hiding' : ''),
    className: "modalCard " + (className !== null && className !== void 0 ? className : '') + " " + (hiding ? 'hiding' : ''),
}); };
var GUModal = function (_a) {
    var children = _a.children, setOpen = _a.setOpen, className = _a.className, onRequestClose = _a.onRequestClose, isOpen = _a.isOpen, props = __rest(_a, ["children", "setOpen", "className", "onRequestClose", "isOpen"]);
    var theme = react$1.useTheme();
    react.useEffect(function () {
        ReactModal.setAppElement('body');
    }, []);
    var _b = react.useState(false), hiding = _b[0], setHiding = _b[1];
    var hideModal = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setHiding(true);
                    // + 30ms so very slow computers can have smooth animations (usually
                    // in these cases the js timeout might finish about 10-20 ms earlier
                    // than the CSS animation)
                    return [4 /*yield*/, common.wait(380)];
                case 1:
                    // + 30ms so very slow computers can have smooth animations (usually
                    // in these cases the js timeout might finish about 10-20 ms earlier
                    // than the CSS animation)
                    _a.sent();
                    setOpen(false);
                    setHiding(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (jsx(ReactModal, __assign({}, commonModalProps(hiding, className), { css: theme.modal.css(theme), isOpen: isOpen || hiding, onRequestClose: function () { return __awaiter(void 0, void 0, void 0, function () {
            var shouldClose, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!onRequestClose) return [3 /*break*/, 2];
                        return [4 /*yield*/, onRequestClose()];
                    case 1:
                        _a = (_b = (_c.sent())) !== null && _b !== void 0 ? _b : true;
                        return [3 /*break*/, 3];
                    case 2:
                        _a = true;
                        _c.label = 3;
                    case 3:
                        shouldClose = _a;
                        if (!shouldClose) return [3 /*break*/, 5];
                        return [4 /*yield*/, hideModal()];
                    case 4:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        setOpen(true);
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); } }, props, { children: jsx(Container, { children: children }, void 0) }), void 0));
};

var globalVariables = function (links) { return react$1.css(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n  body {\n    margin-top: var(--navbarHeight);\n  }\n"], ["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n  body {\n    margin-top: var(--navbarHeight);\n  }\n"])), links, mediaQuery.medium); };
var Wrapper = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content, but the Modal */\n  z-index: 888;\n\n  /* Container */\n  & > div {\n    display: flex;\n    align-items: center;\n\n    ", " {\n      flex-flow: row wrap;\n      justify-content: space-between;\n    }\n    height: 100%;\n\n    & > img {\n      width: 80px;\n      object-fit: contain;\n    }\n\n    .toggleNavLinks {\n      width: var(--navbarHeight);\n      height: var(--navbarHeight);\n      font-size: 18px;\n\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      &:focus {\n        outline: none;\n      }\n\n      background: none;\n      border: none;\n      color: ", ";\n      transition: color ease 0.3s;\n      ", " {\n        display: none;\n      }\n    }\n\n    & > .links {\n      display: flex;\n      align-items: center;\n\n      ", " {\n        width: 100%;\n        height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n        padding: 0;\n        margin: 0;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n\n        opacity: ", ";\n        pointer-events: ", ";\n        /*\n    The animation is faster when showing the menu in order for the text\n    to render inside the wrapper.\n    */\n        transition: opacity ease ", ";\n      }\n\n      ", " {\n        flex: 4;\n        justify-content: flex-end;\n      }\n    }\n  }\n\n  a {\n    font-size: 16px;\n    text-decoration: none;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n    transition: color ease 0.2s;\n    ", " {\n      margin-bottom: 25px;\n      display: flex;\n      align-items: center;\n      margin: 0;\n    }\n    ", " {\n      margin-right: 25px;\n    }\n\n    font-weight: 400;\n    &.bold {\n      font-weight: 700;\n    }\n  }\n"], ["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ",
    ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content, but the Modal */\n  z-index: 888;\n\n  /* Container */\n  & > div {\n    display: flex;\n    align-items: center;\n\n    ", " {\n      flex-flow: row wrap;\n      justify-content: space-between;\n    }\n    height: 100%;\n\n    & > img {\n      width: 80px;\n      object-fit: contain;\n    }\n\n    .toggleNavLinks {\n      width: var(--navbarHeight);\n      height: var(--navbarHeight);\n      font-size: 18px;\n\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      &:focus {\n        outline: none;\n      }\n\n      background: none;\n      border: none;\n      color: ",
    ";\n      transition: color ease 0.3s;\n      ", " {\n        display: none;\n      }\n    }\n\n    & > .links {\n      display: flex;\n      align-items: center;\n\n      ", " {\n        width: 100%;\n        height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n        padding: 0;\n        margin: 0;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n\n        opacity: ", ";\n        pointer-events: ", ";\n        /*\n    The animation is faster when showing the menu in order for the text\n    to render inside the wrapper.\n    */\n        transition: opacity ease ", ";\n      }\n\n      ", " {\n        flex: 4;\n        justify-content: flex-end;\n      }\n    }\n  }\n\n  a {\n    font-size: 16px;\n    text-decoration: none;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n    transition: color ease 0.2s;\n    ", " {\n      margin-bottom: 25px;\n      display: flex;\n      align-items: center;\n      margin: 0;\n    }\n    ", " {\n      margin-right: 25px;\n    }\n\n    font-weight: 400;\n    &.bold {\n      font-weight: 700;\n    }\n  }\n"])), function (p) { return (p.expanded ? '--navbarExpandedHeight' : '--navbarHeight'); }, function (p) { return p.theme.color.ink.light; }, function (p) { return p.theme.color.canvas.light; }, function (p) {
    return p.expanded ? "0 2px 2px " + p.theme.color.ink.main + "25" : 'none';
}, mediaQuery.small, function (_a) {
    var expanded = _a.expanded, theme = _a.theme;
    return expanded ? theme.color.primary.main : theme.color.ink.light;
}, mediaQuery.medium, mediaQuery.small, function (p) { return (p.expanded ? 1 : 0); }, function (p) { return (p.expanded ? 'visible' : 'none'); }, function (p) { return (p.expanded ? '0.7s' : '0.15s'); }, mediaQuery.medium, function (p) { return p.theme.color.ink.light; }, function (p) { return p.theme.color.primary.main; }, mediaQuery.small, mediaQuery.medium);
var NavLink = function (_a) {
    var href = _a.href, label = _a.label, button = _a.button, color = _a.color, setExpanded = _a.setExpanded, onClick = _a.onClick, child = _a.child;
    if (child) {
        return href ? (jsx(Link, __assign({ href: href, passHref: true }, { children: child }), void 0)) : (jsx(react.Fragment, { children: child }, void 0));
    }
    // Compatibility code for older versions of common-front
    var theme = react$1.useTheme();
    // Forwarded click required by Next Link for non `<a/>`
    var childOnClick = function (forwardedClick) {
        if (onClick)
            onClick();
        setExpanded(false);
    };
    // Forwards the right events for Next.js Link
    var Child = function (_a) {
        var href = _a.href, onClick = _a.onClick;
        return button ? (jsx(GUButton, __assign({ color: color, onClick: function (e) { return childOnClick(onClick ? onClick(e) : undefined); } }, { children: label }), void 0)) : (jsx("a", __assign({ onClick: function (e) { return childOnClick(onClick ? onClick(e) : undefined); }, href: href, style: { color: color ? theme.color[color].main : undefined } }, { children: label }), void 0));
    };
    return href ? (jsx(Link, __assign({ href: href, passHref: true }, { children: jsx(Child, {}, void 0) }), void 0)) : (jsx(Child, {}, void 0));
};
/**
 * Navbar introduces 3 css variables which are available globally in the app:
 *
 *  * `var(--navbarHeight)`: actual height of the navbar;
 *  * `var(--navbarLinkHeight)`: height of each link in the navbar when expanded;
 *  * `var(--navbarExpandedHeight)`: total size of the expanded navbar;
 *
 * You can replace these values using Theme.global.css
 */
var GUNavbar = function (_a) {
    var links = _a.links, logo = _a.logo, css = _a.css, className = _a.className;
    var _b = react.useState(false), expanded = _b[0], setExpanded = _b[1];
    // Declaring all links here so we can use Array.length for CSS heights,
    // note that in this case Preact doesn't need `key` prop in components.
    var mappedLinks = links.map(function (props, index) {
        var _a;
        return (jsx(NavLink, __assign({}, props, { setExpanded: setExpanded }), "navbar-el-" + index + "-" + ((_a = props.href) !== null && _a !== void 0 ? _a : props.label)));
    });
    return (jsxs(react.Fragment, { children: [jsx(react$1.Global, { styles: globalVariables(links.length) }, void 0),
            jsx(Wrapper, __assign({ expanded: expanded, css: css, className: className }, { children: jsxs(Container, { children: [jsx(Link, __assign({ href: '/' }, { children: logo !== null && logo !== void 0 ? logo : jsx("div", {}, void 0) }), void 0),
                        jsx("button", __assign({ className: 'toggleNavLinks', onClick: function () { return setExpanded(!expanded); } }, { children: jsx("i", { className: 'fa fa-menu' }, void 0) }), void 0),
                        jsx("div", __assign({ className: 'links' }, { children: mappedLinks }), void 0)] }, void 0) }), void 0)] }, void 0));
};
var templateObject_1$3, templateObject_2$2;

var GURadio = function (_a) {
    var className = _a.className, label = _a.label, labelFirst = _a.labelFirst, props = __rest(_a, ["className", "label", "labelFirst"]);
    var theme = react$1.useTheme();
    return (jsx("div", __assign({ css: theme.radio.css(theme, props), className: className }, { children: labelFirst ? (jsxs(react.Fragment, { children: [label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0),
                jsx("input", __assign({}, props, { type: 'radio' }), void 0)] }, void 0)) : (jsxs(react.Fragment, { children: [jsx("input", __assign({}, props, { type: 'radio' }), void 0),
                label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0)] }, void 0)) }), void 0));
};

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
var animation = function (direction, distance) { return react$1.keyframes(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  from {\n    transform: ", ";\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: ", ";\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])), translateDirection(direction, distance)); };
var SlideFade = function (_a) {
    var direction = _a.direction, distance = _a.distance, props = __rest(_a, ["direction", "distance"]);
    return (jsx(Reveal__default, __assign({}, props, { keyframes: animation(direction !== null && direction !== void 0 ? direction : 'left', distance !== null && distance !== void 0 ? distance : '100%') }), void 0));
};
var templateObject_1$4;

var GUTextArea = function (_a) {
    var className = _a.className, labelSecond = _a.labelSecond, props = __rest(_a, ["className", "labelSecond"]);
    var theme = react$1.useTheme();
    var label = props.label;
    return (jsx("div", __assign({ css: theme.textArea.css(theme, props), className: className }, { children: labelSecond ? (jsxs(react.Fragment, { children: [jsx("textarea", __assign({}, props), void 0),
                label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0)] }, void 0)) : (jsxs(react.Fragment, { children: [label && jsx("label", __assign({ htmlFor: props.id }, { children: label }), void 0),
                jsx("textarea", __assign({}, props), void 0)] }, void 0)) }), void 0));
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

/**
 * The default client uses localhost:8080 as its url and 3000ms as timeout,
 * use trpcConfig to change these values (this is automatically set up if
 * guLibConfig is called)
 */
exports.trpc = client.makeClient(client.httpConnector('http://localhost:8080', { timeout: 3000 }));
var trpcConfig = function (url, timeout) {
    if (timeout === void 0) { timeout = 3000; }
    exports.trpc = client.makeClient(client.httpConnector(url, { timeout: timeout }));
};

/**
 * Returns the back-end URL + a simple calculation done with `trpc`
 */
var guStatusConfig = function (backend) {
    window.guStatus = function (x, y) { return __awaiter(void 0, void 0, void 0, function () {
        var start, resp, finish;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = new Date().valueOf();
                    window.console.log("Pinging " + backend + " with add(" + x + ", " + y + ")");
                    return [4 /*yield*/, exports.trpc.add(x, y)];
                case 1:
                    resp = _a.sent();
                    finish = new Date().valueOf();
                    console.log(backend + " responded:");
                    console.log(__assign(__assign({}, resp), { responseMS: finish - start }));
                    return [2 /*return*/];
            }
        });
    }); };
};

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

var guLibConfig = function (env) {
    var serverUrl = env.serverUrl, googleUa = env.googleUa, inspectletId = env.inspectletId, serverTimeout = env.serverTimeout, googleTm = env.googleTm;
    if (serverUrl) {
        guStatusConfig(serverUrl);
        var timeout = serverTimeout ? +serverTimeout : undefined;
        trpcConfig(serverUrl, timeout);
    }
    if (googleUa)
        googleAnalyticsInit(googleUa);
    if (inspectletId)
        inspectlet(inspectletId);
    if (googleTm)
        TagManager.initialize(googleTm);
};

exports.styled = styled;
Object.defineProperty(exports, 'Global', {
  enumerable: true,
  get: function () {
    return react$1.Global;
  }
});
Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function () {
    return react$1.ThemeProvider;
  }
});
Object.defineProperty(exports, 'css', {
  enumerable: true,
  get: function () {
    return react$1.css;
  }
});
Object.defineProperty(exports, 'jsx', {
  enumerable: true,
  get: function () {
    return react$1.jsx;
  }
});
Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function () {
    return react$1.keyframes;
  }
});
Object.defineProperty(exports, 'useTheme', {
  enumerable: true,
  get: function () {
    return react$1.useTheme;
  }
});
Object.defineProperty(exports, 'Hidden', {
  enumerable: true,
  get: function () {
    return reactGridSystem.Hidden;
  }
});
Object.defineProperty(exports, 'Visible', {
  enumerable: true,
  get: function () {
    return reactGridSystem.Visible;
  }
});
Object.defineProperty(exports, 'useScreenClass', {
  enumerable: true,
  get: function () {
    return reactGridSystem.useScreenClass;
  }
});
Object.defineProperty(exports, 'AttentionSeeker', {
  enumerable: true,
  get: function () {
    return Reveal.AttentionSeeker;
  }
});
Object.defineProperty(exports, 'Bounce', {
  enumerable: true,
  get: function () {
    return Reveal.Bounce;
  }
});
Object.defineProperty(exports, 'Fade', {
  enumerable: true,
  get: function () {
    return Reveal.Fade;
  }
});
Object.defineProperty(exports, 'Flip', {
  enumerable: true,
  get: function () {
    return Reveal.Flip;
  }
});
Object.defineProperty(exports, 'Hinge', {
  enumerable: true,
  get: function () {
    return Reveal.Hinge;
  }
});
Object.defineProperty(exports, 'JackInTheBox', {
  enumerable: true,
  get: function () {
    return Reveal.JackInTheBox;
  }
});
exports.Reveal = Reveal__default;
Object.defineProperty(exports, 'Roll', {
  enumerable: true,
  get: function () {
    return Reveal.Roll;
  }
});
Object.defineProperty(exports, 'Rotate', {
  enumerable: true,
  get: function () {
    return Reveal.Rotate;
  }
});
Object.defineProperty(exports, 'Slide', {
  enumerable: true,
  get: function () {
    return Reveal.Slide;
  }
});
Object.defineProperty(exports, 'Zoom', {
  enumerable: true,
  get: function () {
    return Reveal.Zoom;
  }
});
exports.ReactGA = ReactGA;
exports.AppHead = AppHead;
exports.Breakpoints = Breakpoints;
exports.Col = Col;
exports.Container = Container;
exports.GUButton = GUButton;
exports.GUCheckbox = GUCheckbox;
exports.GUForm = GUForm;
exports.GUInput = GUInput;
exports.GULoading = GULoading;
exports.GUModal = GUModal;
exports.GUNavbar = GUNavbar;
exports.GUProvider = GUProvider;
exports.GURadio = GURadio;
exports.GUTextArea = GUTextArea;
exports.Row = Row;
exports.SlideFade = SlideFade;
exports.cssUnit = cssUnit;
exports.googleAnalyticsInit = googleAnalyticsInit;
exports.googleAnalyticsTrackPage = googleAnalyticsTrackPage;
exports.guColorTypes = guColorTypes;
exports.guDefaultTheme = guDefaultTheme;
exports.guLibConfig = guLibConfig;
exports.guStatusConfig = guStatusConfig;
exports.inspectlet = inspectlet;
exports.makeTheme = makeTheme;
exports.mediaQuery = mediaQuery;
exports.trpcConfig = trpcConfig;
