function _templateObject9(){var data=_taggedTemplateLiteral(["\n      .modalOverlay {\n        width: 100%;\n        height: 100vh;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 999;\n\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        background-color: rgba(0, 0, 0, 0.5);\n        backdrop-filter: blur(15px);\n        animation: "," 350ms ease both;\n        &.hiding {\n          animation: "," 350ms ease both;\n        }\n      }\n\n      .modalCard {\n        width: 95%;\n        "," {\n          width: 500px;\n        }\n        & > :first-of-type {\n          border-radius: ",";\n          background-color: ",";\n          min-height: 440px;\n          padding: 25px !important;\n          pointer-events: all;\n\n          /* Usually h1, h2, h3, etc. will have a margin at the top and be centered */\n          & > h1:first-of-type,\n          & > h2:first-of-type,\n          & > h3:first-of-type,\n          & > h4:first-of-type,\n          & > h5:first-of-type {\n            text-align: left;\n            margin-top: 0;\n          }\n        }\n        &:focus {\n          outline: none;\n        }\n        pointer-events: none;\n      }\n    "]);_templateObject9=function _templateObject9(){return data;};return data;}function _templateObject8(){var data=_taggedTemplateLiteral(["\n      ","\n      input, input:before, input:after {\n        border-radius: 999px;\n      }\n      input {\n        &:after {\n          content: ' ';\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background-color: transparent;\n        }\n        &:checked:after {\n          background-image: radial-gradient(\n            circle,\n            "," 30%,\n            #0000 40%\n          );\n        }\n      }\n    "]);_templateObject8=function _templateObject8(){return data;};return data;}function _templateObject7(){var data=_taggedTemplateLiteral(["\n      ","\n\n      & > textarea {\n        display: block;\n        height: 290px;\n        padding: 4px;\n        resize: none;\n      }\n    "]);_templateObject7=function _templateObject7(){return data;};return data;}function _templateObject6(){var data=_taggedTemplateLiteral(["\n        min-width: 92px;\n        padding: 12px 24px;\n\n        font-weight: 600;\n        font-size: 18px;\n\n        background: none;\n        border: none;\n        border-radius: ",";\n        box-shadow: 0px 4px 4px #0002;\n\n        /* Colors */\n\n        /* Foreground color */\n        color: ",";\n\n        /* Default background color */\n        background-color: ",";\n\n        /* Hover colors */\n        transition: background-color ease 0.3s;\n        &:hover {\n          cursor: pointer;\n          background-color: ",";\n        }\n      "]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=_taggedTemplateLiteral(["\n      ","\n\n      html {\n        scroll-behavior: smooth;\n        color: ",";\n        background-color: ",";\n      }\n\n      body {\n        /*\n        Sometimes, when using react-awesome-reveal we might trigger some\n        unwanted horizontal spacing, creating issues like briefly showing the\n        horizontal scrollbar or permanently increasing the width of the page.\n        Setting width: 100% with overflow-x: hidden fixes this issue.\n        */\n        width: 100% !important;\n        max-width: 100% !important;\n        overflow-x: hidden;\n        /*\n        In OSes that have visible scrollbars changing to a page without too\n        much content might cause components to fickle, since the scrollbar\n        will show/hide according to the page's height (for example a simple\n        login page will have no scrollbar). We ensure that the overflow-y is\n        always scrollable so these OSes can have a consistent look & feel in\n        all pages.\n        */\n        overflow-y: scroll;\n      }\n\n      *:focus {\n        outline: none;\n      }\n\n      /*\n      Setting this here since icons.css is replaced with newer icons from time\n      to time.\n      */\n      @keyframes fa-spin {\n        from {\n          transform: rotateZ(0);\n        }\n        to {\n          transform: rotateZ(359deg);\n        }\n      }\n      .fa-spin {\n        animation: fa-spin 2s linear forwards infinite;\n      }\n    "]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  input,\n  label {\n    cursor: pointer;\n    transition: color ease 0.3s, border-color ease 0.1s;\n  }\n\n  input {\n    height: 20px;\n    width: 20px;\n    box-sizing: border-box;\n    position: relative;\n    appearance: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n    margin-right: 10px;\n\n    border-color: ",";\n    background-color: ",";\n    &:hover {\n      background-color: ",";\n    }\n\n    &:before {\n      box-sizing: border-box;\n      content: ' ';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      height: 100%;\n      width: 100%;\n      border-width: 2px;\n      border-radius: ",";\n      border-style: solid;\n      /* Inherits from the actual input so we don't have to re-style for focus/hover here */\n      border-color: inherit;\n      background-color: inherit;\n\n      color: ",";\n      transition: border-color ease 0.3s, background-color ease 0.3s;\n    }\n    &:after {\n      content: ' ';\n      position: absolute;\n      top: 25%;\n      left: 25%;\n      width: 50%;\n      height: 50%;\n      opacity: 0;\n      transition: opacity ease 0.2s;\n      border-radius: ",";\n      border: none;\n      background-color: ",";\n    }\n    &:checked:after {\n      opacity: 1;\n      border-color: ",";\n    }\n\n    &:focus {\n      outline: none;\n      border-color: ",";\n    }\n  }\n\n  label {\n    color: ",";\n  }\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral(["\n  /* Wrapper rules */\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n\n  & > input,\n  & > textarea {\n    display: flex;\n    align-items: center;\n    height: 45px;\n    padding: 0 4px;\n\n    background: none;\n    background-color: ",";\n    border: 2px solid ",";\n    border-radius: ",";\n    transition: border-color ease 0.2s;\n    &:focus {\n      border-color: ",";\n    }\n    &:disabled {\n      color: ",";\n      background-color: ",";\n    }\n  }\n\n  & > label {\n    color: ",";\n    font-size: 16px;\n    margin: 8px 0;\n  }\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  from { opacity: 1}\n  to {opacity: 0}\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  from { opacity: 0 }\n  to { opacity: 1}\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}import{Breakpoints,css as _css,keyframes,mediaQuery}from'.';var normalizeMin='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}';var fadeIn=keyframes(_templateObject());var fadeOut=keyframes(_templateObject2());var defaultColorTheme={secondary:{dark:'#077C7D',main:'#00B7B8',light:'#6AE1E2'},canvas:{dark:'#E9E9E9',main:'#FAFAFA',light:'#FFF'},error:{dark:'#C62828',main:'#F44336',light:'#FFEBEE'},ink:{dark:'#000',main:'#444',light:'#888'},primary:{dark:'#0054B2',main:'#0078D4',light:'#1499FF'},info:{dark:'#0277BD',main:'#03A9F4',light:'#81D4FA'},success:{dark:'#0F8800',main:'#8BC34A',light:'#C5DBB2'},warning:{dark:'#AC5C00',main:'#E69100',light:'#FFE0B2'}};var inputTextAreaBase=function inputTextAreaBase(_ref){var color=_ref.color,radius=_ref.radius;return _css(_templateObject3(),color.canvas.light,color.ink.light,radius.main,color.primary.main,color.ink.light,color.canvas.dark,color.primary.main);};var radioCheckboxBase=function radioCheckboxBase(_ref2){var color=_ref2.color,radius=_ref2.radius;return _css(_templateObject4(),color.primary.main,color.canvas.light,color.canvas.dark,radius.small,color.primary.main,radius.small,color.primary.main,color.primary.dark,color.primary.dark,color.ink.main);};export var guDefaultTheme={color:defaultColorTheme,radius:{big:8,main:4,small:2},grid:{rules:{breakpoints:[0,Breakpoints.medium,Breakpoints.large,Breakpoints.xlarge],defaultScreenClass:'xs',containerWidths:[576,768,992],gridColumns:12,gutterWidth:30,maxScreenClass:'lg'}},global:{css:function css(_ref3){var color=_ref3.color;return _css(_templateObject5(),normalizeMin,color.ink.main,color.canvas.main);}},button:{css:function css(_ref4,p){var color=_ref4.color,radius=_ref4.radius;var buttonColor=p?p.color:undefined;return _css(_templateObject6(),radius.main,function(){switch(buttonColor){case undefined:case'canvas':case'ink':return color.ink.main;default:return color.canvas.light;}}(),function(){switch(buttonColor){case undefined:case'canvas':case'ink':return color.canvas.light;default:return color[buttonColor].main;}}(),function(){switch(buttonColor){case undefined:case'canvas':case'ink':return color.canvas.dark;default:return color[buttonColor].dark;}}());}},input:{css:inputTextAreaBase},textArea:{css:function css(theme){return _css(_templateObject7(),inputTextAreaBase(theme));}},checkbox:{css:radioCheckboxBase},radio:{css:function css(theme){return _css(_templateObject8(),radioCheckboxBase(theme),theme.color.primary.main);}},modal:{css:function css(_ref5){var radius=_ref5.radius,color=_ref5.color;return _css(_templateObject9(),fadeIn,fadeOut,mediaQuery.medium,radius.big,color.canvas.light);}}};