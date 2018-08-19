import React from "react";
// import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
