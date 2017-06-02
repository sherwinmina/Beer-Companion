import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BeerList from './components/screens/beer_list';
import Beer from './components/screens/Beer-Guide/beer';
import Hops from './components/screens/hops';
import Grains from './components/screens/grains';
import Yeast from './components/screens/yeast';
import signin from './components/screens/auth/signin';
import signup from './components/screens/auth/signup';

import elements from './components/screens/Beer-Guide/Elements';
import liststyle from './components/screens/Beer-Guide/StyleList';
import beerStyle from './components/screens/Beer-Guide/BeerStyle';




export default (
  <Route path='/' component ={App}>
    <IndexRoute component={BeerList} />
    <Route path="beer" component={Beer}>
      
    </Route>
    <Route path="beer/elements" component={elements}/>
    <Route path="beer/elements" component={elements}/>
    <Route path="beer/beerstyle" component={beerStyle}/>

    <Route path="grains" component={Grains}/>
    <Route path="hops" component={Hops}/>
    <Route path="yeast" component={Yeast}/>
    <Route path="signin" component={signin}/>
    <Route path="signup" component={signup}/>
  </Route>
);
