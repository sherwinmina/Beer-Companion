import React, { Component } from "react";
import {Switch, Route} from 'react-router'

import SecondaryRoute from "./secondaryRoute";

import BeerStyle from "./Pages/BeerStyle";
import Elements from "./Pages/Elements";
import History from "./Pages/History";
import Brew from "./Pages/Brew";
import Pairing from "./Pages/FoodPairing";

const BeerGuide = () => {
  return <div>
      <SecondaryRoute />
      <Switch>
        <Route exact path="/" component={History} />
        <Route path="/beer/beerstyle" component={BeerStyle} />
        <Route path="/beer/elements" component={Elements} />
        <Route path="/beer/brew" component={Brew} />
        <Route path="/beer/foodpairing" component={Pairing} />
      </Switch>
    </div>;
}

export default BeerGuide;
