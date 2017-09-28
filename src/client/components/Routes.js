import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Hops from './screens/Hops';
import Grains from './screens/grains';
import Yeast from './screens/yeast';
import signin from './screens/auth/signin';
import signup from './screens/auth/signup';


import BeerGuide from './screens/Beer-Guide';

import Locator from "./screens/BreweryLocator";
import calculator from './screens/Recipe-Calculator';
import priming from './screens/Recipe-Calculator/primingCalculator';

const Routes = () => {
  return <Switch>
      <Route exact path="/" component={BeerGuide} />
      <Route path="/beer" component={BeerGuide} />
      <Route path="/grains" component={Grains} />
      <Route path="/hops" component={Hops} />
      <Route path="/yeast" component={Yeast} />
      <Route path="/brewerylocator" component={Locator} />
      <Route path="/calculator" component={calculator} />
      <Route path="/calculator/priming" component={priming} />

      <Route path="/signin" component={signin} />
      <Route path="/signup" component={signup} />
    </Switch>;
}

export default Routes;