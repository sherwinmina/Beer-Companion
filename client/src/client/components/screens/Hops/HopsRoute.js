import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import About from './AboutHops'
import List from './HopsList'
import Guide from './HopsGuide'

import './secondary-route.scss'

class secondaryRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'About'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ activeItem: e.target.name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <div className="route-container">
          <div className="secondary-route">
            <Link
              to="/hops"
              className={activeItem === 'About' ? 'line' : 'regular'}
              name="About"
              onClick={this.handleChange}
            >
              About Hops
            </Link>
          </div>
          <div className="secondary-route">
            <Link
              to="/hops/guide"
              className={activeItem === 'Guide' ? 'line' : 'regular'}
              name="Guide"
              onClick={this.handleChange}
            >
              Hops Guide
            </Link>
          </div>
          <div className="secondary-route">
            <Link
              to="/hops/list"
              className={activeItem === 'Hop-List' ? 'line' : 'regular'}
              name="Hop-List"
              onClick={this.handleChange}
            >
              List of Hops
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/hops" component={About} />
          <Route path="/hops/list" component={List} />
          <Route path="/hops/guide" component={Guide} />
        </Switch>
      </div>
    )
  }
}

export default secondaryRoute
