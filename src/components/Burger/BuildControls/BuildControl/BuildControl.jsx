import React from "react";
import classes from "./BuildControl.css";
const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={props.label}>
        <label className={classes.Label}>{props.label}</label>
        <button
          className={classes.Less}
          onClick={props.removed}
          disabled={props.disabled}
        >
          Less
        </button>
        <button className={classes.More} onClick={props.added}>
          More
        </button>
      </div>
    </div>
  );
};

export default buildControl;
