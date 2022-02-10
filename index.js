"use strict";
exports.__esModule = true;
var React = require("react");
var react_dom_1 = require("react-dom");
var react_responsive_1 = require("react-responsive");
var Menu_1 = require("./components/Menu");
var Link_1 = require("./components/Link");
require("./style.css");
var RootMenu_1 = require("./components/RootMenu");
var Hamburger_1 = require("./components/Hamburger");
var classnames_1 = require("classnames");
var groups = [
    {
        groupTitle: "What's Popular",
        childItems: [
            {
                ctaText: 'Top Deals',
                eventType: 'category',
                eventId: '11962778',
                seoText: 'top-deals',
                childItems: [
                    {
                        ctaText: 'Laptops on sale',
                        eventType: 'category',
                        eventId: '11962778',
                        seoText: 'laptops-on-sale',
                        childItems: []
                    },
                ]
            },
        ]
    },
    {
        groupTitle: 'Shop By Category',
        childItems: [
            {
                ctaText: 'Computers And Tablets',
                eventType: 'category',
                eventId: '11962778',
                seoText: 'computers-tablets',
                childItems: [
                    {
                        ctaText: 'Laptops & Macbboks',
                        eventType: 'category',
                        eventId: '11962778',
                        seoText: 'laptops-macbooks',
                        childItems: [
                            {
                                ctaText: 'Macbook Pro',
                                eventType: 'category',
                                eventId: '11962778',
                                seoText: 'macbook-pro'
                            },
                        ]
                    },
                ]
            },
            {
                ctaText: 'Computers Accessories',
                eventType: 'category',
                eventId: '11962778',
                seoText: 'computers-accessories',
                childItems: [
                // ...
                ]
            },
        ]
    },
];
var rootMenu = [
    {
        content: function (props) { return <Menu_1["default"] {...props} items={groups}/>; },
        id: 'shop',
        label: (<span data-automation="x-shop">
        {/* {intl.formatMessage({ id: messages.shopHeading.id })} */}
        Shop
      </span>)
    },
    {
        content: function (props) { return <Menu_1["default"] {...props} items={groups}/>; },
        id: 'brands',
        label: (<span data-automation="x-brands">
        {/* {intl.formatMessage({ id: messages.brandsHeading.id })} */}
        Brand
      </span>)
    },
    {
        id: 'deals',
        label: (<span data-automation="x-deals">
        {/* {intl.formatMessage({ id: messages.dealsHeading.id })} */}
        Deals
      </span>),
        content: function (props) { return <Menu_1["default"] {...props} items={groups}/>; }
    },
    {
        id: 'services',
        label: <span data-automation="x-deals">Services</span>,
        content: function (props) { return <Menu_1["default"] {...props} items={groups}/>; }
    },
    {
        id: 'order-status',
        label: (<Link_1["default"] href={"/orders"} external targetSelf onClick={function (e) {
                // eventToSessionStorage('Order Status');
            }} className={'noIcon'}>
        <span data-automation="x-order-status">
          {/* {intl.formatMessage({
              id: messages.orderStatus.id,
            })} */}
          Orders
        </span>
      </Link_1["default"]>),
        mobileOnly: true
    },
    {
        id: 'blog',
        label: (<Link_1["default"] external 
        // href={intl.formatMessage({
        //   ...messages.blogHref,
        // })}
        href={'http://blog.bestbuy.ca'} key="blog" className={'noIcon'}>
        <span data-automation="x-blog">
          {/* {intl.formatMessage({
              id: messages.blogText.id,
            })} */}
          Blog
        </span>
      </Link_1["default"]>),
        mobileOnly: true
    },
    {
        id: 'bbyForBusiness',
        label: (<Link_1["default"] to="bbyForBusiness" params={['test']} external={false} onClick={function (e) {
                // props.onServicesClick(); ??
            }} targetSelf={false} className={'noIcon'}>
        <span data-automation="x-bby-business">
          {/* {intl.formatMessage({
              id: messages.bbyForBusiness.id,
            })} */}
          Best Buy Business
        </span>
      </Link_1["default"]>),
        mobileOnly: true
    },
];
var App = function () {
    var _a;
    var _b = React.useState(false), visible = _b[0], setVisible = _b[1];
    var _c = React.useState(''), selectedItem = _c[0], selectItem = _c[1];
    var _d = React.useState(false), rootMenuState = _d[0], setRootMenuState = _d[1];
    // a substitute for redux-responsive
    var isDesktop = (0, react_responsive_1.useMediaQuery)({
        query: '(min-width: 1025px)'
    });
    return (<React.Fragment>
      <div className="main">
        {/* Drawer */}
        <Hamburger_1["default"] onClick={function () { return setRootMenuState(!rootMenuState); }}/>
        <div 
    // className={classname([styles.MenuWrapper, { [styles.open]: this.state.open }])}
    className={(0, classnames_1["default"])(['MenuWrapper', (_a = {}, _a['open'] = rootMenuState, _a)])}>
          <RootMenu_1["default"] menuItems={rootMenu} selected={selectedItem} select={selectItem} isDesktop={isDesktop}/>
        </div>
      </div>
    </React.Fragment>);
};
(0, react_dom_1.render)(<App />, document.getElementById('root'));
