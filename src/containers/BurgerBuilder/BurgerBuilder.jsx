import React, { Component } from "react";
import Burger from "../../components/Burger/Burger.js";

class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div>Build Control</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
