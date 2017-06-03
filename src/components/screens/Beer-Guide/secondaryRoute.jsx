import React, { Component } from 'react';
import {Link} from 'react-router';
import {Tabs, Tab } from 'react-materialize';


class secondaryRoute extends Component {
  onClickHandler() {
    
  }

  render () {
    return (
        <Tabs>
          <Tab title="General" href="/"><Link to="/">General</Link></Tab>
          <Tab title="Elements" href="/beer/elements"><Link to="/beer/elements">Elements</Link> </Tab> 
          <Tab title="List of styles"></Tab>  
          <Tab title="List of all beers"><Link to="/styleguide">List of all beers</Link> </Tab> 
        </Tabs>
    )
  }
}

export default secondaryRoute;