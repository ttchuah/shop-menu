"use strict";
exports.__esModule = true;
var React = require("react");
var Link = function (_a) {
    var className = _a.className, onClick = _a.onClick, internalLinkHandler = _a.internalLinkHandler, ariaLabel = _a.ariaLabel, href = _a.href, targetSelf = _a.targetSelf, rel = _a.rel, external = _a.external, extraAttributes = _a.extraAttributes, children = _a.children, to = _a.to, params = _a.params;
    var log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Log: ', args);
    };
    return (<a className={className} onClick={function (e) {
            return onClick ? onClick(e, internalLinkHandler) : log(to, href, params);
        }} aria-label={ariaLabel} href={href} target={targetSelf ? '_self' : '_blank'} rel={rel || (external ? 'external' : '')} {...extraAttributes}>
      {children}
    </a>);
};
exports["default"] = Link;
