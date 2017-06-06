import React, { Component } from 'react'
import Routes from './secondaryRoute';

class BeerStyle extends Component {
  render () {
    return (
      <div>
        <Routes/>
        <li>Ale Styles</li>
        <li>Lager Styles</li>
      </div>
    )
  }
}

export default BeerStyle;

const beerlist = ["American Ales", "Belgian/ French Ales", "English Ales", "Germane Ales"];