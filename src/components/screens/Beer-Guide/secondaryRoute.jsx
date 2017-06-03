import React, { Component } from 'react';
import {Link} from 'react-router';
import {Tabs, Tab } from 'react-materialize';

class secondaryRoute extends Component {
  onClickHandler() {
    
  }

  render () {
    return (
  
         <div className="Tabs"> 
          <li  className="tab col s3"><Link  to="/">General</Link></li>
          <li  className="tab"><Link title="Elements" to="/beer/elements">Elements</Link></li> 
          <Link title="List of styles" to="/beer/beerstyle">g</Link> 
          <Link title="List of all beers" to="/beer/listStyle"></Link>           
        </div>
 
    )
  }
}

export default secondaryRoute;