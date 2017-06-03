import React, { Component } from 'react';
import {Link} from 'react-router';
import {Tabs, Tab } from 'react-materialize';
import BeerStyle from './Elements'

class secondaryRoute extends Component {
  onClickHandler() {
    
  }

  render () {
    return (
        <Tabs>
          <Tab title="General" href="/"><Link to="/">General</Link></Tab>
          <Tab title="Elements" href="/beer/elements"><Link to="/beer/elements">Elements</Link> </Tab> 
          <Tab title="List of styles"><Link to="/beer/style">List of styles</Link> </Tab>  
          <Tab title="List of all beers">Great style of beerare found here </Tab> 
        </Tabs>
    )
  }
}

export default secondaryRoute;