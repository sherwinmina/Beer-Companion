import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BeerList from './components/screens/beer_list';
import Beer from './components/screens/beer';
import Hops from './components/screens/hops';
import Grains from './components/screens/grains';
import Yeast from './components/screens/yeast';

export default (
  <Route path='/' component ={App}>
    <IndexRoute component={BeerList} />
    <Route path="beer" component={Beer}/>
    <Route path="grains" component={Grains}/>
    <Route path="hops" component={Hops}/>
    <Route path="yeast" component={Yeast}/>
  </Route>
);
