import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';


import './secondary-route.scss'

class secondaryRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "a"
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({activeItem:e.target.name} )
  }

  render() {
     const { activeItem } = this.state;
    console.log(this.state.activeItem);
    return <div className="route-container">
        <div className="secondary-route">
          <Link to="/beer/history" name="history" style={{}} onClick={this.handleChange}>
            History of Beer
          </Link>
        </div>
        <div className="secondary-route">
          <Link to="/beer/beerstyle" name="elements" style={{}} onClick={this.handleChange}>
            Elements of Beer
          </Link>
        </div>
        <div className="secondary-route">
          <Link to="beer/elements">Beer Style</Link>
        </div>
        <div className="secondary-route">
          <Link to="/beer/elements">Brewing a Beer</Link>
        </div>
        <div className="secondary-route">
          <Link to="/beer/elements">Beers around the world</Link>
        </div>
      </div>;
  }
}


export default secondaryRoute;