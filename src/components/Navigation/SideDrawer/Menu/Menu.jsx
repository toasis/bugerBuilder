import React from "react";
import classes from "./Menu.css";
const Menu = props => {
  return (
    <div className={classes.Menu} onClick={props.toggleSideDrawer}>
      MENU
    </div>
  );
};
export default Menu;
