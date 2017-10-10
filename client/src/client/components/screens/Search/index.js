import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log('submit')
  }

  handleChange(e) {
    const value = e.target.value
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSubmit} />
      </div>
    )
  }
}

export default Search
