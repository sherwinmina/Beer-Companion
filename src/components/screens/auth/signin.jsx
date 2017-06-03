import React, { Component } from 'react'
import {Button, Row, Input, Icon, Card, CardTitle} from 'react-materialize';

class Signin extends Component {
  render () {
    return (
      <Row className="container ">
        <Row className="center-align"><h4 className="blue-text text-darken-2">Welcome</h4></Row>
        
        <Card className='small center-align hoverable valign-wrapper'>
          <Input type="email" label="Email" s={12} ><Icon>email</Icon></Input>
          <Input type="password" label="password" s={12} ><Icon>lock_outline</Icon></Input>
          <Button className="right">Sign In</Button>
        </Card>
      </Row>
    )
  }
}

export default Signin