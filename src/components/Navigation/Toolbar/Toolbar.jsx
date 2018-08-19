import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../SideDrawer/Menu/Menu";
const toolBar = props => {
  return (
    <header className={classes.Toolbar}>
      <Menu toggleSideDrawer={props.toggleSideDrawer} />
      <Logo height="80%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolBar;
