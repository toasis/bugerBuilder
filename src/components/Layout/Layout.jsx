import React from "react";
// import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const layout = props => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
