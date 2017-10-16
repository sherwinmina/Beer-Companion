import React, { Component } from 'react'
import axios from 'axios'
import BreweryCard from './breweryCard'

class BreweryLocator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: [],
      term: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios
      .get('https://limitless-hollows-72480.herokuapp.com/brewerylocator')
      .then(response =>
        this.setState({ breweries: response.data.breweries.businesses })
      )
  }

  handleChange(e) {
    this.setState({ term: e.target.value })
  }

  render() {
    console.log(this.state.term)
    return (
      <div>
        <input onChange={this.handleChange} />
        This page uses the yelp api for near by breweries. It might take a few
        seconds to start up as the Node server on Heroku boots up.
        <BreweryCard breweries={this.state.breweries} />
      </div>
    )
  }
}

// Authorization = Bearer Token
// Token
// "0HFihR-IV2f-BldOzoKxFq_TWv-x5Wm7rbmV5ms3DzhyuMAguCb9PdmCiaBSswM0AA58jlw5gx-NXu0tD6LdtxI8nd9volzI2xCSo9vAjyZKUCIzZ2zsLkfrudnSWXYx"
// https://api.yelp.com/oauth2/token?client_id=wbYT8bmFHNCY4YxoepCzgQ&client_secret=HvDC032ZkCGPlVoaGAmNlfxn6cCR6QtF4Sq7gpOmz7xIE62fTmmHNAtWcjQOQ5Mj
// client key
// wbYT8bmFHNCY4YxoepCzgQ
// secret
//HvDC032ZkCGPlVoaGAmNlfxn6cCR6QtF4Sq7gpOmz7xIE62fTmmHNAtWcjQOQ5Mj

export default BreweryLocator
