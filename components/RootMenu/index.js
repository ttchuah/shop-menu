"use strict";
exports.__esModule = true;
var React = require("react");
var classname_1 = require("../../utils/classname");
require("./style.scss");
var RootMenu = function (_a) {
    var menuItems = _a.menuItems, selected = _a.selected, select = _a.select, _b = _a.isDesktop, isDesktop = _b === void 0 ? false : _b;
    return (<div className={'RootMenu'}>
      <ul>
        {menuItems
            .filter(function (menuItem) { return !menuItem.mobileOnly; })
            .map(function (menuItem) {
            var _a, _b;
            var isActive = menuItem.id === selected;
            return (<li key={menuItem.id} className={(0, classname_1.classname)([(_a = {}, _a['active'] = isActive, _a)])}>
                <button className="rootMenuBtn" onClick={function () {
                    return selected && isActive ? select('') : select(menuItem.id);
                }}>
                  {menuItem.label}
                  {isDesktop ? (isActive ? '^' : '\\/') : '>'}
                </button>
                <div className={(0, classname_1.classname)([
                    'flyoutContainer',
                    (_b = {}, _b['active'] = isActive, _b),
                ])}>
                  {menuItem.content({
                    active: isActive,
                    close: function () { return select(''); }
                })}
                </div>
              </li>);
        })}
      </ul>

      <ul className={'mobileOnly'}>
        {menuItems
            .filter(function (menuItem) { return !!menuItem.mobileOnly; })
            .map(function (menuItem) {
            return <li key={menuItem.id}>{menuItem.label}</li>;
        })}
      </ul>
    </div>);
};
exports["default"] = RootMenu;
