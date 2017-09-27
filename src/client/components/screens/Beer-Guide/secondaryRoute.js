import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';


import './secondary-route.scss'

class secondaryRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "history",
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({activeItem:e.target.name} )
  }

  render() {
     const { activeItem } = this.state;
    console.log(this.state)
    return <div className="route-container">
        <div className="secondary-route">
          <Link to="/beer" className={activeItem === "history" ? "line" : "regular"} name="history" onClick={this.handleChange}>
            History of Beer
          </Link>
        </div>
        <div className="secondary-route">
          <Link to="/beer/elements" className={activeItem === "elements" ? "line" : "regular"} name="elements" onClick={this.handleChange}>
            Elements of Beer
          </Link>
        </div>
        <div className="secondary-route">
          <Link to="/beer/beerstyle" className={activeItem === "beer-style" ? "line" : "regular"} name="beer-style" onClick={this.handleChange}>
            Beer Style
          </Link>
        </div>
        <div className="secondary-route">
          <Link to="/beer/brew" className={activeItem === "brew" ? "line" : "regular"} name="brew" onClick={this.handleChange}>
            Brewing a Beer
          </Link>
        </div>
        <div className="secondary-route">
          <Link to="/beer/foodpairing" className={activeItem === "food-pairing" ? "line" : "regular"} name="food-pairing" onClick={this.handleChange}>
            Food Pairing
          </Link>
        </div>
      </div>;
  }
}

const styles = {
  line: {
    color: 'red'
  }
}


export default secondaryRoute;