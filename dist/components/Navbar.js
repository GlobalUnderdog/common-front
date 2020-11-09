"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var link_1 = tslib_1.__importDefault(require("next/link"));
var react_1 = require("react");
var style_1 = require("../style");
var Button_1 = require("./Button");
var globalVariables = function (links) { return style_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n  body {\n    margin-top: var(--navbarHeight);\n  }\n"], ["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n  body {\n    margin-top: var(--navbarHeight);\n  }\n"])), links, style_1.mediaQuery.medium); };
var Wrapper = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content, but the Modal */\n  z-index: 888;\n"], ["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ",
    ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content, but the Modal */\n  z-index: 888;\n"])), function (p) { return (p.expanded ? '--navbarExpandedHeight' : '--navbarHeight'); }, function (p) { return p.theme.color.ink.light; }, function (p) { return p.theme.color.canvas.light; }, function (p) {
    return p.expanded ? "0 2px 2px " + p.theme.color.ink.normal + "25" : 'none';
});
var StyledContainer = style_1.styled(style_1.Container)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  ", " {\n    flex-flow: row wrap;\n    justify-content: space-between;\n  }\n  height: 100%;\n\n  & > img {\n    width: 80px;\n    object-fit: contain;\n  }\n\n  .toggleNavLinks {\n    width: var(--navbarHeight);\n    height: var(--navbarHeight);\n    font-size: 18px;\n\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    &:focus {\n      outline: none;\n    }\n\n    background: none;\n    border: none;\n    color: ", ";\n    transition: color ease 0.3s;\n    ", " {\n      display: none;\n    }\n  }\n\n  .links {\n    display: flex;\n    align-items: center;\n\n    & > a {\n      font-size: 16px;\n      text-decoration: none;\n      color: ", ";\n      font-family: ", ";\n      &:hover {\n        color: ", ";\n      }\n      transition: color ease 0.2s;\n      ", " {\n        margin-bottom: 25px;\n        display: flex;\n        align-items: center;\n        margin: 0;\n      }\n      ", " {\n        margin-right: 25px;\n      }\n\n      font-weight: 400;\n      &.bold {\n        font-weight: 700;\n      }\n    }\n\n    ", " {\n      width: 100%;\n      height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n      padding: 0;\n      margin: 0;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n\n      opacity: ", ";\n      pointer-events: ", ";\n      /*\n      The animation is faster when showing the menu in order for the text\n      to render inside the wrapper.\n      */\n      transition: opacity ease ", ";\n    }\n\n    ", " {\n      flex: 4;\n      justify-content: flex-end;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  ", " {\n    flex-flow: row wrap;\n    justify-content: space-between;\n  }\n  height: 100%;\n\n  & > img {\n    width: 80px;\n    object-fit: contain;\n  }\n\n  .toggleNavLinks {\n    width: var(--navbarHeight);\n    height: var(--navbarHeight);\n    font-size: 18px;\n\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    &:focus {\n      outline: none;\n    }\n\n    background: none;\n    border: none;\n    color: ",
    ";\n    transition: color ease 0.3s;\n    ", " {\n      display: none;\n    }\n  }\n\n  .links {\n    display: flex;\n    align-items: center;\n\n    & > a {\n      font-size: 16px;\n      text-decoration: none;\n      color: ", ";\n      font-family: ", ";\n      &:hover {\n        color: ", ";\n      }\n      transition: color ease 0.2s;\n      ", " {\n        margin-bottom: 25px;\n        display: flex;\n        align-items: center;\n        margin: 0;\n      }\n      ", " {\n        margin-right: 25px;\n      }\n\n      font-weight: 400;\n      &.bold {\n        font-weight: 700;\n      }\n    }\n\n    ", " {\n      width: 100%;\n      height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n      padding: 0;\n      margin: 0;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n\n      opacity: ", ";\n      pointer-events: ", ";\n      /*\n      The animation is faster when showing the menu in order for the text\n      to render inside the wrapper.\n      */\n      transition: opacity ease ", ";\n    }\n\n    ", " {\n      flex: 4;\n      justify-content: flex-end;\n    }\n  }\n"])), style_1.mediaQuery.small, function (_a) {
    var expanded = _a.expanded, theme = _a.theme;
    return expanded ? theme.color.primary.normal : theme.color.ink.light;
}, style_1.mediaQuery.medium, function (p) { return p.theme.color.ink.light; }, function (p) { return p.theme.font.accent; }, function (p) { return p.theme.color.primary.normal; }, style_1.mediaQuery.small, style_1.mediaQuery.medium, style_1.mediaQuery.small, function (p) { return (p.expanded ? 1 : 0); }, function (p) { return (p.expanded ? 'visible' : 'none'); }, function (p) { return (p.expanded ? '0.7s' : '0.15s'); }, style_1.mediaQuery.medium);
var NavLink = function (_a) {
    var href = _a.href, label = _a.label, button = _a.button, color = _a.color, setExpanded = _a.setExpanded, onClick = _a.onClick;
    var theme = style_1.useTheme();
    var childOnClick = function () {
        if (onClick)
            onClick();
        setExpanded(false);
    };
    var Child = function (_a) {
        var href = _a.href;
        return button ? (core_1.jsx(Button_1.Button, { color: color, onClick: childOnClick }, label)) : (core_1.jsx("a", { onClick: childOnClick, href: href, style: { color: color ? theme.color[color].normal : undefined } }, label));
    };
    return href ? (core_1.jsx(link_1.default, { href: href, passHref: true },
        core_1.jsx(Child, null))) : (core_1.jsx(Child, null));
};
exports.Navbar = function (_a) {
    var links = _a.links, children = _a.children, css = _a.css, className = _a.className;
    var _b = react_1.useState(false), expanded = _b[0], setExpanded = _b[1];
    // Declaring all links here so we can use Array.length for CSS heights,
    // note that in this case Preact doesn't need `key` prop in components.
    var mappedLinks = links.map(function (_a) {
        var href = _a.href, label = _a.label, color = _a.color, button = _a.button, onClick = _a.onClick;
        return (core_1.jsx(NavLink, { href: href, label: label, setExpanded: setExpanded, color: color, button: button, onClick: onClick }));
    });
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(style_1.Global, { styles: globalVariables(links.length) }),
        core_1.jsx(Wrapper, { expanded: expanded, css: css, className: className },
            core_1.jsx(StyledContainer, { expanded: expanded },
                core_1.jsx(link_1.default, { href: '/' }, children !== null && children !== void 0 ? children : core_1.jsx("div", null)),
                core_1.jsx("button", { className: 'toggleNavLinks', onClick: function () { return setExpanded(!expanded); } },
                    core_1.jsx("i", { className: 'fa fa-menu' })),
                core_1.jsx("div", { className: 'links' }, mappedLinks)))));
};
var templateObject_1, templateObject_2, templateObject_3;
