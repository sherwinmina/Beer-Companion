import React, { Component } from 'react';
import {Link} from 'react-router';

class secondaryRoute extends Component {
  render () {
    return (
      <div>
         <div>
          <ul className="nav navbar-nav">
          <li className="nav-item">
             <Link className="nav-link" to="/">General</Link> 
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/beer/elements">Elements</Link>  
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/beer/style">List of styles</Link>  
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/styleguide">List of all beers</Link>  
          </li>
        </ul>
        </div>
      </div>
    )
  }
}

export default secondaryRoute;