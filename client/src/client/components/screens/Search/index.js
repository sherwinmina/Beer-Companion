import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      select: '',
      data: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.value)
    axios
      .post('http://localhost:3001/search/', {
        term: this.state.value
      })
      .then(res => this.setState({ data: res.data, value: '' }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    // const value = e.target.value
    this.setState({ value: e.target.value })

    // throttle search option//
    // axios
    //   .post('http://localhost:3001/search/', { term: this.state.value })
    //   .then(res => console.log(res.data))
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit} />
        </form>
        {this.state.data.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <img src={item.labels.large} alt="" />
            <h5>OG: {item.originalGravity}</h5>
            <h5>abv: {item.abv} %</h5>
            <h5>ibu: {item.ibu} </h5>
            <h5>{item.available.decription}</h5>
            <h5>srm: {item.srm.name}</h5>
            <h5> style: {item.style.name}</h5>
            <h5>serving temperature:{item.servingTemperatureDisplay}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Search
