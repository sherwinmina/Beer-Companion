import React, { Component } from 'react'
import {Link} from 'react-router';

class Beer extends Component {
  render () {
    return (
      <div>
        <Link className="nav-link" to="/styleguide">Style guide</Link>   
        <h1>Beer</h1>
        my favorite beer.
      </div>
    )
  }
}

export default Beer;