"use strict";
exports.__esModule = true;
exports.Hamburger = void 0;
// import { Button, Menu } from "@bbyca/bbyca-components";
var React = require("react");
// import * as styles from "./style.css";
require("./style.scss");
var Hamburger = function (props) { return (<button className={"Hamburger ".concat((props === null || props === void 0 ? void 0 : props.className) || '')} onClick={props.onClick} aria-label={props.label}>
    <div className="drawerMenuLabel">{props.label}</div>
    {/* <Menu className={styles.drawerMenuIcon} color="white" viewBox="4 4 24 24" /> */}
    Menu
  </button>); };
exports.Hamburger = Hamburger;
exports["default"] = exports.Hamburger;
