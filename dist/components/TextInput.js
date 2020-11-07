import { __assign } from "tslib";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '../style';
export var TextInput = function (props) {
    var theme = useTheme();
    var id = props.id, label = props.label;
    return (jsx("div", { css: theme.textInput.css(theme, props) },
        label && jsx("label", { htmlFor: id }, label),
        jsx("input", __assign({}, props))));
};
TextInput.defaultProps = { type: 'text' };
