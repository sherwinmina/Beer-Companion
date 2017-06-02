import React, { Component } from 'react'
import {Button, Icon} from 'react-materialize';

class Signin extends Component {
  render () {
    return (
      <div>
        <p>Email</p>
        <input />
        <p>Password</p>
        <input />
        <Button waves='light' >Submit<Icon right>save</Icon></Button>
      </div>
    )
  }
}

export default Signin