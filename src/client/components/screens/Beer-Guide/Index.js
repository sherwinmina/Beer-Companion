import React, { Component } from "react";
import {Switch, Route} from 'react-router'

import SecondaryRoute from "./secondaryRoute";

import BeerStyle from "./BeerStyle";
import Elements from "./Elements";
import History from "./History";
import Brew from "./Brew";

class BeerGuide extends Component {
 

  render() {
    return <div>
        <SecondaryRoute />
        <Switch>
          <Route path="/beer/beerstyle" component={BeerStyle} />
          <Route path="/beer/elements" component={Elements} />
          <Route path="/beer/history" component={History} />
          <Route path="/beer/brew" component={Brew} />
          <Route path="/beer/elements" component={Elements} />
        </Switch>
      </div>;
  }
}

export default BeerGuide;
