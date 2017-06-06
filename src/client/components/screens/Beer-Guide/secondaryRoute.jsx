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
          <li  className="tab col s3"><Link title="Elements" to="/beer/elements">Elements</Link> </li> 
          <li  className="tab col s3"><Link title="List of styles" to="/beer/beerstyle">List of all Styles</Link> </li>
          <li  className="tab col s3" ><Link title="List of all beers" to="/beer/listStyle">List of all Beers</Link>  </li>         
        </div>
 
    )
  }
}

export default secondaryRoute;