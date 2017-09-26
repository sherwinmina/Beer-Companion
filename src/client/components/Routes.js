import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BeerList from './screens/beer_list';
import Beer from './screens/Beer-Guide/beer';
import Hops from './screens/Hops/hops';
import Grains from './screens/grains';
import Yeast from './screens/yeast';
import signin from './screens/auth/signin';
import signup from './screens/auth/signup';

import elements from './screens/Beer-Guide/Elements';
import listStyle from './screens/Beer-Guide/StyleList';
import beerStyle from './screens/Beer-Guide/BeerStyle';
import calculator from './screens/Recipe-Calculator/';
import priming from './screens/Recipe-Calculator/primingCalculator';

export default (
  <Switch>
    <Route path="/" exact component={BeerList} />
    <Route path="beer" component={Beer} />
    <Route path="beer/elements" component={elements} />
    <Route path="beer/listStyle" component={listStyle} />
    <Route path="beer/beerstyle" component={beerStyle} />

    <Route path="grains" component={Grains} />
    <Route path="hops" component={Hops} />
    <Route path="yeast" component={Yeast} />
    <Route path="calculator" component={calculator} />
    <Route path="calculator/priming" component={priming} />

    <Route path="signin" component={signin} />
    <Route path="signup" component={signup} />
  </Switch>
);
