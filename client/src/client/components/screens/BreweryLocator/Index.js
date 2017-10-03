import React, { Component } from 'react'
import axios from 'axios'

class BreweryLocator extends Component {

  componentDidMount() {
  axios
    .get('http://localhost:3001/brewerylocator')
      .then(data => console.log(data))
  }

  render () {
    return (
      <div>
      
        Use yelp Api to search for breweries near by.
        Brewery Locator
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



export default BreweryLocator;