import React, { Component } from 'react'

class Signin extends Component {
  render () {
    return (
      <div>
        <p>Email</p>
        <input />
        <p>Password</p>
        <input />
        <br/>
        <button className="primary">Submit</button>
      </div>
    )
  }
}

export default Signin