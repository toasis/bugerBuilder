import React from "react";
import classes from "./BuildControl.css";
const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={props.label}>
        <p className={classes.Label}>{props.label}</p>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
      </div>
    </div>
  );
};

export default buildControl;
