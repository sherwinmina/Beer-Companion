import React, { Component } from 'react'
import axios from 'axios'

class Featured extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beer: [],
      beerImages: {},
      brewery: [],
      breweryImage: []
    }
  }

  componentDidMount() {
    axios
      .get('https://limitless-hollows-72480.herokuapp.com/featured')
      .then(response =>
        this.setState({
          beer: response.data.data.beer,
          beerImages: response.data.data.beer.labels,
          brewery: response.data.data.brewery,
          breweryImage: response.data.data.brewery.images
        })
      )
      .catch(err => console.log(err))
  }

  render() {
    const { beer, beerImages, brewery, breweryImage } = this.state
    // const { icon } = beerImages
    console.log(brewery)
    return (
      <div>
        This page uses the brewery DB api proxied by a Node server
        <h4>Featured Beer</h4>
        <h5>{beer.name}</h5>
        <img src={beerImages.large} alt="" />
        <p>{beer.description}</p>
        <h4>Featured Brewery</h4>
        <img src={breweryImage.squareLarge} alt="" />
        <h5>{brewery.name}</h5>
        <p>{brewery.description}</p>
      </div>
    )
  }
}

export default Featured
