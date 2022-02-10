"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_responsive_1 = require("react-responsive");
var classnames_1 = require("classnames");
require("./style.scss");
function isCategoryGroup(toBeDetermined) {
    if ('groupTitle' in toBeDetermined) {
        return true;
    }
    else {
        return false;
    }
}
var Menu = function (_a) {
    var items = _a.items, _b = _a.isL1, isL1 = _b === void 0 ? true : _b, _c = _a.heading, heading = _c === void 0 ? '' : _c, active = _a.active, close = _a.close;
    var _d = (0, react_1.useState)(''), selectedItem = _d[0], setSelectedItem = _d[1];
    // If this menu is no longer active (i.e. no longer needs to be shown), then
    // deselect all menu items.  (So that the next time menu becomes visible, it's
    // back in its original state with no selected menu items)
    (0, react_1.useEffect)(function () {
        if (!active) {
            setSelectedItem('');
        }
    }, [active]);
    // Handle click of "go back" button.
    var onClose = function () {
        setSelectedItem('');
    };
    var onClickShopAll = function () {
        console.log('');
    };
    var onSelectCategory = function (category) {
        // Activate this menu item if it was inactive prior to being selected.
        // Otherwise deactivate this menu item it was active prior to being selected. (This will cause the submenu to collapse)
        if (category.childItems) {
            var isCategorySelected = category.ctaText === selectedItem;
            setSelectedItem(isCategorySelected ? '' : category.ctaText);
        }
        else {
            alert('go to PLP');
        }
    };
    // Render out a single category.
    var renderCategory = function (category) {
        var isCategorySelected = category.ctaText === selectedItem;
        return (<react_1["default"].Fragment>
        <div>
          <button className={(0, classnames_1["default"])('menu-link', {
                'menu-link--active': isCategorySelected
            })} onClick={function () { return onSelectCategory(category); }}>
            {category.ctaText}
          </button>
        </div>
        {category.childItems && (<Menu active={isCategorySelected} heading={category.ctaText} items={category.childItems} isL1={false} close={onClose}/>)}
      </react_1["default"].Fragment>);
    };
    var cssClass = '';
    if (isL1) {
        cssClass = (0, classnames_1["default"])('menu', { 'menu--child-active': !!selectedItem }, {
            'menu--hidden': !active
        });
    }
    else {
        cssClass = (0, classnames_1["default"])('menu-inner', { 'menu-inner--active': active }, {
            'menu-inner--child-active': !!selectedItem
        });
    }
    var isDesktop = (0, react_responsive_1.useMediaQuery)({
        query: '(min-width: 1025px)'
    });
    return (<div className={cssClass}>
      {heading && <h2>{heading}</h2>}
      {!isL1 && <button onClick={onClickShopAll}>Shop All</button>}
      {!isDesktop && <button onClick={close}>Go Back</button>}
      {items.map(function (item) {
            return (<react_1["default"].Fragment>
            {isCategoryGroup(item) && (<react_1["default"].Fragment>
                <h2>{item.groupTitle}</h2>

                {
                    // Print out the list of categories for this group.
                    item.childItems.map(function (category) {
                        return renderCategory(category);
                    })}
              </react_1["default"].Fragment>)}
            {!isCategoryGroup(item) && renderCategory(item)}
          </react_1["default"].Fragment>);
        })}
    </div>);
};
exports["default"] = Menu;
