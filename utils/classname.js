"use strict";
exports.__esModule = true;
exports.classIf = exports.handleObjectType = exports.classname = void 0;
var normalizeClass = function (name, defaultVal) {
    if (defaultVal === void 0) { defaultVal = ''; }
    if (name === undefined ||
        name === 'undefined' ||
        name === null ||
        name === 'null') {
        return defaultVal;
    }
    return name;
};
var isObjectType = function (input) {
    return input &&
        typeof input !== 'string' &&
        typeof input === 'object' &&
        !Array.isArray(input);
};
/**
 * "classname" is a normalizing method for classNames. It will strip out null & undefined
 * values from your classNames, keeping them clean.
 *
 * @param classNames - A single className or an array of classNames or an object of type { className: boolean }.
 * @param defaultVal - Default value to be used if given className(s) are undefined or null.
 */
var classname = function (classNames, defaultVal) {
    if (defaultVal === void 0) { defaultVal = ''; }
    if (Array.isArray(classNames)) {
        var test = classNames
            .map(function (name) {
            if (isObjectType(name)) {
                return (0, exports.handleObjectType)(name);
            }
            return normalizeClass(name, defaultVal);
        })
            .filter(function (name) { return name; })
            .join(' ');
        return test.trim();
    }
    return normalizeClass(classNames, defaultVal);
};
exports.classname = classname;
var handleObjectType = function (inputObjt) {
    var cssClasses = [];
    Object.keys(inputObjt).forEach(function (key) {
        var value = inputObjt[key];
        if (Boolean(value)) {
            cssClasses.push(key);
        }
    });
    return cssClasses.join(' ').trim();
};
exports.handleObjectType = handleObjectType;
/**
 * "classIf" is a method to safely add className to react components based on conditions.
 *
 * @param names classname to be used when condition is truthy.
 * @param condition boolean/condition to be validated.
 * @param defaultVal default value to be used as a class name when condition is falsey.
 */
var classIf = function (names, condition, defaultVal) {
    if (defaultVal === void 0) { defaultVal = ''; }
    return (!!condition ? (0, exports.classname)(names) : defaultVal);
};
exports.classIf = classIf;
